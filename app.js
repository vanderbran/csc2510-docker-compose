const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'static')));

app.get('/api/data', (req, res) => {
  res.json({ message: 'This is data from the API' });
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});