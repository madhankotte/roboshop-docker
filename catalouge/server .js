const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Catalogue service is running');
});

app.get('/items', (req, res) => {
  res.json([
    { id: 1, name: 'Laptop', price: 1200 },
    { id: 2, name: 'Phone', price: 800 }
  ]);
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Catalogue service listening on port ${PORT}`);
});
