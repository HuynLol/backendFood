const admin = require('firebase-admin');
const serviceAccount = require('../service-account.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://appfood-c7bf3.firebaseio.com" // Chỉ cần nếu dùng Realtime Database
});

const db = admin.firestore();

module.exports = { admin, db };
