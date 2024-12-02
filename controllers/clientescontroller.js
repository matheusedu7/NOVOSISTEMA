const pool = require('../db/pool');

// Função para criar um novo cliente
const criarCliente = async (req, res) => {
  const { nome_cliente, data_nasc, estado_civil, naturalidade, nacionalidade, escolaridade, profissao, situacao, cpf_cliente, rg_cliente, renda_mensal } = req.body;
  try {
    await pool.query(`
      INSERT INTO clientes (nome_cliente, data_nasc, estado_civil, naturalidade, nacionalidade, escolaridade, profissao, situacao, cpf_cliente, rg_cliente, renda_mensal)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [nome_cliente, data_nasc, estado_civil, naturalidade, nacionalidade, escolaridade, profissao, situacao, cpf_cliente, rg_cliente, renda_mensal]
    );
    res.status(201).json({ message: 'Cliente criado com sucesso!' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Função para listar todos os clientes
const listarClientes = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM clientes');
    res.status(200).json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { criarCliente, listarClientes };
