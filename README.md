# SaaS de Gestion Immobilière

Application complète de gestion locative développée avec Next.js, Firebase et Stripe.

## Fonctionnalités

- 🏠 Gestion des propriétés et des locataires
- 💰 Système de paiement de loyer avec Stripe
- 📄 Génération et signature électronique de documents
- 📊 Tableau de bord analytique
- 🔍 Analyse de documents par IA (GPT-4)
- 🌐 Interface multilingue (FR/EN)
- 🌓 Mode sombre/clair

## Technologies

- **Frontend**: Next.js 14, TypeScript, Tailwind CSS, Shadcn/ui
- **State Management**: Zustand
- **Backend**: Firebase (Firestore, Auth, Storage, Functions)
- **Paiements**: Stripe Connect
- **Emails**: SendGrid
- **AI**: OpenAI GPT-4 Turbo
- **Cartographie**: Mapbox

## Installation

1. Clonez le dépôt
```bash
git clone https://github.com/votre-nom/rental-management.git
cd rental-management
```

2. Installez les dépendances
```bash
npm install
```

3. Configurez les variables d'environnement
```bash
cp .env.local.example .env.local
# Modifiez .env.local avec vos clés d'API
```

4. Démarrez le serveur de développement
```bash
npm run dev
```

5. Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur

## Déploiement

Cette application peut être déployée facilement sur Vercel ou Firebase Hosting.

```bash
# Pour déployer sur Vercel
vercel

# Pour déployer sur Firebase
firebase deploy
```

## Conformité RGPD

Cette application est conçue pour être conforme au RGPD et stocke toutes les données en Union Européenne. Elle respecte également les réglementations françaises en matière de gestion locative (Loi ALUR, etc.).

## Licence

MIT 