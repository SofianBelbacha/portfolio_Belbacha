const { Timestamp } = require("firebase-admin").firestore; // 👈 pour utiliser Timestamp
var admin = require("firebase-admin");

var serviceAccount = require("./portfolio-firebase-828d2-firebase-adminsdk-fbsvc-9d9beb87dd.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const firestore = admin.firestore();

// Ton document JSON
const project = require("./project.json"); // Ton fichier JSON que tu veux importer

// Import dans la collection "projects"
async function importProject() {
  try {
    project.startDate = Timestamp.fromDate(new Date('2024-05-01'));
    project.endDate = Timestamp.fromDate(new Date('2024-08-15'));
    const docRef = await firestore.collection('projects').add(project);
    console.log("Document ajouté avec succès avec ID:", docRef.id);
  } catch (error) {
    console.error("Erreur lors de l'ajout du document :", error);
  }
}

importProject();
