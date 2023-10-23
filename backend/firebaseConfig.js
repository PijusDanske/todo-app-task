const { cert, initializeApp } = require('firebase-admin/app')
const { getFirestore } = require('firebase-admin/firestore');


try {
  const serviceAccount = require('./creds.json');

  initializeApp({
    credential: cert(serviceAccount)
  })
} catch (e) {
  console.log('\x1b[31m%s\x1b[0m', 'Failed to initialize backend with provided credential file.\n')
  console.log('\x1b[31m%s\x1b[0m', 'Make sure that you provide correct credential file from Firebase.\n')
  console.log('\x1b[31m%s\x1b[0m', 'Go to project setting -> Service Account -> Generate new private key -> Download file -> Put this file in current folder as creds.json')

  process.exit();
}

const db = getFirestore();

module.exports = { db }