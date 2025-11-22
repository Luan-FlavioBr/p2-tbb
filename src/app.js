require('dotenv').config();
const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const connectDB = require('./database');
const productRoutes = require('./routes/productRoutes');

// Carregando o arquivo JSON diretamente
const swaggerDocument = require('./swagger.json');

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

// Configuração Simplificada do Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/products', productRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Swagger docs available at http://localhost:${PORT}/api-docs`);
});

module.exports = app;