const express = require('express');
const { verificarChecklist } = require('../controllers/checklistcontroller');
const router = express.Router();

router.put('/:cliente_id', verificarChecklist);  // Verificar checklist

module.exports = router;
