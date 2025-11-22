const swaggerJsDoc = require('swagger-jsdoc');
const path = require('path');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API de Produtos',
      version: '1.0.0',
      description: 'Documentação da API de gerenciamento de produtos',
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
  },

  apis: [path.join(__dirname, 'routes', '*.js')],
};

const specs = swaggerJsDoc(options);

module.exports = specs;