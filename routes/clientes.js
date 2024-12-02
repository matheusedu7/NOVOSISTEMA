const express = require('express');
const { criarCliente, listarClientes } = require('../controllers/clientescontroller');
const router = express.Router();

router.post('/', criarCliente);  // Criar cliente
router.get('/', listarClientes);  // Listar clientes

module.exports = router;
