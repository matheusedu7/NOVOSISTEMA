const pool = require('../db/pool');

// Função para criar um novo imóvel
const criarImovel = async (req, res) => {
  const { nome_imovel, descricao, preco, disponivel, endereco } = req.body;
  try {
    await pool.query(`
      INSERT INTO imoveis (nome_imovel, descricao, preco, disponivel, endereco)
      VALUES (?, ?, ?, ?, ?)`,
      [nome_imovel, descricao, preco, disponivel, endereco]
    );
    res.status(201).json({ message: 'Imóvel criado com sucesso!' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Função para listar todos os imóveis
const listarImoveis = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM imoveis');
    res.status(200).json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { criarImovel, listarImoveis };
