const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('./src'));

app.get('/profile', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'src', 'pages', 'profile.html'));
});

app.get('/register', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'src', 'pages', 'register.html'));
});

app.get('/login', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'src', 'pages', 'login.html'));
});

app.get('/quiz', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'src', 'pages', 'quiz.html'));
});

app.get('/topic', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'src', 'pages', 'topic.html'));
});

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'src', 'pages', 'index.html'));
});

app.listen(3333, () => console.log('Projeto rodando na porta 3333...'));
