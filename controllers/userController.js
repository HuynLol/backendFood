const { db } = require('../services/firebaseService');

const getUserData = async (req, res) => {
  try {
    const userId = req.params.id;
    const userRef = db.collection('users').doc(userId);
    const doc = await userRef.get();

    if (!doc.exists) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json(doc.data());
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const addUserData = async (req, res) => {
  try {
    const userData = req.body;
    const userRef = db.collection('users').doc(userData.id);
    await userRef.set(userData);

    res.status(201).json({ message: 'User added successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getUserData, addUserData };
