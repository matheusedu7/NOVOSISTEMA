const pool = require('../db/pool');

const verificarChecklist = async (req, res) => {
  const { cliente_id } = req.params;
  const { proposta_aceita, verificado } = req.body;

  try {
    await pool.query(`
      UPDATE checklist
      SET proposta_aceita = ?, verificado = ?
      WHERE cliente_id = ?`,
      [proposta_aceita, verificado, cliente_id]
    );
    res.status(200).json({ message: 'Checklist atualizado com sucesso!' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { verificarChecklist };
