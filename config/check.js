const { db } = require('../services/firebaseService');
const admin = require('firebase-admin'); 

const checkFirestoreConnection = async () => {
    try {
      const testRef = db.collection('category').doc('MonSoi');
  
    //   // Ghi dữ liệu
    //   await testRef.set({
    //     name: 'connected',
    //     mota: "Ngon",
    //   });
  
    //   console.log('Ghi dữ liệu thành công!');
  
      // Đọc dữ liệu
      const doc = await testRef.get();
      if (doc.exists) {
        console.log('Kết nối thành công! Dữ liệu nhận được:', doc.data());
      } else {
        console.log('Không tìm thấy tài liệu!');
      }
    } catch (error) {
      console.error('Lỗi khi kiểm tra kết nối Firebase:', error);
    }
  };

  module.exports = checkFirestoreConnection;