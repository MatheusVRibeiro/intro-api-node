const express = require('express');
const router = express.Router();

const RotasMatheus = require('../controllers/visitantes');

router.get('/', RotasMatheus);

module.exports = router;