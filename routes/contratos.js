const express = require('express');
const { gerarContrato } = require('../controllers/contratoscontroller');
const router = express.Router();

router.post('/', gerarContrato);  // Gerar contrato em PDF

module.exports = router;
