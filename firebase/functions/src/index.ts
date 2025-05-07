import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import { analyzeContract } from './document-analyzer';

// Initialize Firebase Admin
admin.initializeApp();

// Export the document analyzer function
export { analyzeContract }; 