// Importando o packages
const express = require('express')

// instanciando o servidor
const app = express()

// configurando o servidor para receber requisições com o corpo no formato JSON
app.use(express.json())

// importando os controllers
const usuarioController = require('./controllers/usuario-controller.js')
const tarefaController = require('./controllers/tarefa-controller.js')

// Chama as rotas
usuarioController.rotas(app)
tarefaController.rotas(app)

// Exporta o app para ser usado em outro módulo, por exemplo: no server.js
module.exports = app
