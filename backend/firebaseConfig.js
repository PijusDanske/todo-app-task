const { cert, initializeApp } = require('firebase-admin/app')
const { getFirestore } = require('firebase-admin/firestore');


try {
  const serviceAccount = require('./creds.json');

  initializeApp({
    credential: cert(serviceAccount)
  })
} catch (e) {
  console.log('Failed to initialize backend with provided credential file.')
  console.log('Make sure that you provide correct credential file from Firebase.')

  process.exit();
}

const db = getFirestore();

module.exports = { db }