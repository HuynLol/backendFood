const express = require('express');
const { getUserData, addUserData } = require('../controllers/userController');
const { getAllCategoriesWithSubcollections } = require('../controllers/categoryController');
const { getAllMonSoi, getAllBanhCuon, getAllHaiSan, addMonSoi } = require('../controllers/dish');

const router = express.Router();
// lấy danh mục
router.get('/category', getAllCategoriesWithSubcollections);

//Lấy món sợi
router.get('/monsoi', getAllMonSoi);
router.post('/Addmonsoi', addMonSoi)

//Lấy bánh cuốn
router.get('/banhcuon', getAllBanhCuon)

//Lấy hải sản
router.get('/haisan', getAllHaiSan)


module.exports = router;
