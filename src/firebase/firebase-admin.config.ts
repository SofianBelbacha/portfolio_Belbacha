import { getApps, initializeApp, cert, App } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

// Ici tu lis les variables d'env pour les credentials (il faut que tu les mettes dans .env)
const serviceAccount = {
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
  privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
};

let adminApp: App;
if (!getApps().length) {
  adminApp = initializeApp({
    credential: cert(serviceAccount),
  });
} else {
  adminApp = getApps()[0];
}

const adminDb = getFirestore(adminApp);

export { adminDb };
