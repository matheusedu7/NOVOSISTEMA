  const pool = require('./db/pool');
const PORT = process.env.PORT || 3000;

// Teste de conexão com o banco de dados
pool.getConnection()
  .then(() => {
    console.log('Conexão com o banco de dados bem-sucedida!');
  })
  .catch(err => {
    console.error('Erro ao conectar com o banco de dados:', err.message);
    process.exit(1);  // Encerra a aplicação caso não consiga conectar ao banco
  });



const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const clientesRoutes = require('./routes/clientes');
const imoveisRoutes = require('./routes/imoveis');
const contratosRoutes = require('./routes/contratos');
const checklistRoutes = require('./routes/checklist');

dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use('/uploads', express.static('uploads'));

app.use('/clientes', clientesRoutes);
app.use('/imoveis', imoveisRoutes);
app.use('/contratos', contratosRoutes);
app.use('/checklist', checklistRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
