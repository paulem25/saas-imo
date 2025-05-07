const functions = require('firebase-functions');
const { OpenAI } = require('openai');
const cors = require('cors')({ origin: true });

// Initialize OpenAI with API key
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

/**
 * Analyzes a lease contract using OpenAI's GPT-4 model
 */
exports.analyzeContract = functions
  .region('europe-west1')  // Hosted in EU for GDPR compliance
  .https.onRequest((req, res) => {
    return cors(req, res, async () => {
      try {
        // Check if the request method is POST
        if (req.method !== 'POST') {
          return res.status(405).json({ error: 'Method Not Allowed' });
        }

        // Get the text from the request body
        const { text } = req.body;
        
        if (!text) {
          return res.status(400).json({ error: 'Text field is required' });
        }

        // Call the OpenAI API to analyze the contract
        const response = await openai.chat.completions.create({
          model: "gpt-4-turbo",
          messages: [
            {
              role: "system",
              content: `Vous êtes un expert juridique spécialisé dans l'immobilier français.
              Analysez ce contrat de bail et extrayez les informations clés suivantes :
              - Montant du loyer de base
              - Montant des charges
              - Date d'effet du bail
              - Durée du bail
              - Adresse complète du bien
              - Identité du propriétaire
              - Identité du locataire
              - Dépôt de garantie
              - Clauses particulières importantes`
            },
            {
              role: "user",
              content: text
            }
          ],
          temperature: 0.2,
        });

        // Extract the result
        const analysisResult = response.choices[0].message.content;
        
        // Parse the result to extract structured data
        // This is a simple implementation, in a real app you'd want more robust parsing
        const structuredData = parseAnalysisToStructuredData(analysisResult);

        // Return the results
        return res.status(200).json({
          raw: analysisResult,
          structured: structuredData
        });
      } catch (error) {
        console.error('Error analyzing contract:', error);
        return res.status(500).json({ error: 'Failed to analyze the contract' });
      }
    });
  });

/**
 * Helper function to parse the analysis into structured data
 */
function parseAnalysisToStructuredData(text) {
  // Simple parsing based on line prefixes
  // In a real app, you'd want more robust parsing
  const result = {
    rentAmount: extractValue(text, 'Montant du loyer'),
    charges: extractValue(text, 'Montant des charges'),
    startDate: extractValue(text, 'Date d\'effet'),
    duration: extractValue(text, 'Durée du bail'),
    address: extractValue(text, 'Adresse'),
    landlord: extractValue(text, 'propriétaire'),
    tenant: extractValue(text, 'locataire'),
    deposit: extractValue(text, 'Dépôt de garantie'),
    specialClauses: extractMultilineValue(text, 'Clauses particulières'),
  };
  
  return result;
}

// Helper to extract values from analysis text
function extractValue(text, prefix) {
  const regex = new RegExp(`${prefix}[^:]*:\\s*([^\\n]+)`, 'i');
  const match = text.match(regex);
  return match ? match[1].trim() : null;
}

// Helper to extract multiline values
function extractMultilineValue(text, prefix) {
  const regex = new RegExp(`${prefix}[^:]*:([\\s\\S]+?)(?=\\n\\w|$)`, 'i');
  const match = text.match(regex);
  return match ? match[1].trim() : null;
} 