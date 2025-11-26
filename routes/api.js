const express = require('express');
const router = express.Router();
const multer = require('multer');
const KomikController = require('../controllers/komikController');
const upload = multer({ storage: multer.memoryStorage()});

router.post('/komik', upload.single('gambar'), KomikController.createKomik);
router.get('/komik', KomikController.getAllKomiks);
router.get('/komik/:id', KomikController.getKomikById);
router.put('/komik/:id', upload.single('gambar'), KomikController.updateKomik);
router.delete('/komik/:id', KomikController.deleteKomik);

module.exports = router;