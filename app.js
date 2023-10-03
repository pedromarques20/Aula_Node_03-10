const express = require('express');
const app = express();
const port = 4000;

// Define a rota para a página HTML
app.get('/livros.html', (req, res) => {
  res.sendFile(__dirname + '/pages/livros.html');
});

// Define a rota para a página HTML
app.get('/categorias.html', (req, res) => {
  res.sendFile(__dirname + '/pages/categorias.html');
});

// Define a rota para a página HTML
app.get('/usuarios.html', (req, res) => {
  res.sendFile(__dirname + '/pages/usuarios.html');
});

// Define a rota para a página HTML
app.get('/pedidos.html', (req, res) => {
  res.sendFile(__dirname + '/pages/pedidos.html');
});

// Define a rota para a página HTML inicial
app.get('/inicio', (req, res) => {
  res.sendFile(__dirname + '/pages/index.html');
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}/`);
});
