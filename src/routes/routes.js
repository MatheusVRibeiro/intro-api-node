const express = require('express');
const router = express.Router();

const apartamentoController = require('../controllers/apartamentos')

router.get('/apartamentos', apartamentoController.listarApartamentos);

module.exports = router;