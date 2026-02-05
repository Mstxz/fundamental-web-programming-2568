const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.static('public'));
app.use(express.static('images'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.get('/food1', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/page/food1.html'));
});
app.get('/food2', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/page/food2.html'));
});
app.get('/food3', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/page/food3.html'));
});
app.get('/food4', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/page/food4.html'));
});
app.get('/food5', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/page/food5.html'));
});
app.get('/food6', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/page/food6.html'));
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});