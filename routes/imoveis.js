const express = require('express');
const { criarImovel, listarImoveis } = require('../controllers/imoveiscontroller');
const router = express.Router();

router.post('/', criarImovel);  // Criar imóvel
router.get('/', listarImoveis);  // Listar imóveis

module.exports = router;
