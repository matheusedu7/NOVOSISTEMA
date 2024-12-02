const pool = require('../db/pool');
const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');

// Função para gerar o contrato em PDF
const gerarContrato = async (req, res) => {
  const { cliente_id, imovel_id, valor_venda, condicoes_pagamento } = req.body;
  
  // Cria o documento PDF
  const doc = new PDFDocument();
  const filePath = path.join(__dirname, '../uploads', `contrato_${cliente_id}_${imovel_id}.pdf`);
  doc.pipe(fs.createWriteStream(filePath));

  doc.fontSize(18).text('Contrato de Compra e Venda', { align: 'center' });

  // Dados do cliente e do imóvel
  doc.fontSize(12).text(`Cliente ID: ${cliente_id}`);
  doc.text(`Imóvel ID: ${imovel_id}`);
  doc.text(`Valor de Venda: ${valor_venda}`);
  doc.text(`Condições de Pagamento: ${condicoes_pagamento}`);

  // Salvar o arquivo PDF
  doc.end();

  try {
    await pool.query(`
      INSERT INTO contratos (cliente_id, imovel_id, valor_venda, condicoes_pagamento, caminho_pdf)
      VALUES (?, ?, ?, ?, ?)`,
      [cliente_id, imovel_id, valor_venda, condicoes_pagamento, filePath]
    );
    res.status(201).json({ message: 'Contrato gerado com sucesso!', caminho_pdf: filePath });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { gerarContrato };
