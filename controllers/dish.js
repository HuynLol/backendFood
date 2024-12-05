const { db } = require('../services/firebaseService');

// Hàm lấy tất cả documents trong collection 'category' và sub-collections của chúng
const getAllMonSoi = async (req, res) => {
    try {
        const categoryCollection = db.collection('mon soi');

        // Lấy tất cả documents trong collection 'category'
        const snapshot = await categoryCollection.get();

        if (snapshot.empty) {
            return res.status(404).json({ message: 'Không tìm thấy documents nào trong collection "category".' });
        }

        const categories = [];

        // Duyệt qua từng document trong collection
        for (const doc of snapshot.docs) {
            console.log("Đang duyệt qua ...")
            const categoryData = { id: doc.id, ...doc.data(), subCollections: [] };

            // Lấy tất cả các sub-collections trong document hiện tại
            const subCollections = await doc.ref.listCollections();

            for (const subCollection of subCollections) {
                const subDocsSnapshot = await subCollection.get();

                const subCollectionData = {
                    subCollectionId: subCollection.id,
                    documents: subDocsSnapshot.docs.map(subDoc => ({
                        id: subDoc.id,
                        ...subDoc.data()
                    }))
                };

                categoryData.subCollections.push(subCollectionData);
            }

            console.log("Đang lấy")

            categories.push(categoryData);
        }

        return res.status(200).json(categories);
    } catch (error) {
        console.error('Lỗi khi lấy dữ liệu từ Firestore:', error);
        return res.status(500).json({ error: 'Có lỗi xảy ra khi truy vấn dữ liệu.' });
    }
};
// thêm món sợi
const addMonSoi = async (req, res) => {
    try {
        const monsoiRef = db.collection('monsoi').doc();
        await monsoiRef.set(req.body);
        console.log('Mon soi added successfully', req.body);
        return res.status(201).json({ message: 'Mon soi added successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }   
};





// hàm lấ bánh cuốn
const getAllBanhCuon = async (req, res) => {
    try {
        const categoryCollection = db.collection('banhcuon');

        // Lấy tất cả documents trong collection 'category'
        const snapshot = await categoryCollection.get();

        if (snapshot.empty) {
            return res.status(404).json({ message: 'Không tìm thấy documents nào trong collection "category".' });
        }

        const categories = [];

        // Duyệt qua từng document trong collection
        for (const doc of snapshot.docs) {
            console.log("Đang duyệt qua ...")
            const categoryData = { id: doc.id, ...doc.data(), subCollections: [] };

            // Lấy tất cả các sub-collections trong document hiện tại
            const subCollections = await doc.ref.listCollections();

            for (const subCollection of subCollections) {
                const subDocsSnapshot = await subCollection.get();

                const subCollectionData = {
                    subCollectionId: subCollection.id,
                    documents: subDocsSnapshot.docs.map(subDoc => ({
                        id: subDoc.id,
                        ...subDoc.data()
                    }))
                };

                categoryData.subCollections.push(subCollectionData);
            }

            console.log("Đang lấy")

            categories.push(categoryData);
        }

        return res.status(200).json(categories);
    } catch (error) {
        console.error('Lỗi khi lấy dữ liệu từ Firestore:', error);
        return res.status(500).json({ error: 'Có lỗi xảy ra khi truy vấn dữ liệu.' });
    }
};

const getAllHaiSan = async (req, res) => {
    try {
        const categoryCollection = db.collection('haisan');

        // Lấy tất cả documents trong collection 'category'
        const snapshot = await categoryCollection.get();

        if (snapshot.empty) {
            return res.status(404).json({ message: 'Không tìm thấy documents nào trong collection "category".' });
        }

        const categories = [];

        // Duyệt qua từng document trong collection
        for (const doc of snapshot.docs) {
            console.log("Đang duyệt qua ...")
            const categoryData = { id: doc.id, ...doc.data(), subCollections: [] };

            // Lấy tất cả các sub-collections trong document hiện tại
            const subCollections = await doc.ref.listCollections();

            for (const subCollection of subCollections) {
                const subDocsSnapshot = await subCollection.get();

                const subCollectionData = {
                    subCollectionId: subCollection.id,
                    documents: subDocsSnapshot.docs.map(subDoc => ({
                        id: subDoc.id,
                        ...subDoc.data()
                    }))
                };

                categoryData.subCollections.push(subCollectionData);
            }

            console.log("Đang lấy")

            categories.push(categoryData);
        }

        return res.status(200).json(categories);
    } catch (error) {
        console.error('Lỗi khi lấy dữ liệu từ Firestore:', error);
        return res.status(500).json({ error: 'Có lỗi xảy ra khi truy vấn dữ liệu.' });
    }
};
module.exports = { getAllMonSoi, getAllBanhCuon, getAllHaiSan, addMonSoi };
