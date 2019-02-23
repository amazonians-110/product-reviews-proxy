const express = require('express');
const compression = require('compression')
const cors = require('cors');

const app = express();

app.use(cors());
app.use(compression());

const port = 8000;

app.use(express.static(`${__dirname}/public`))

app.get('*', (req, res) => {
  res.sendFile(`${__dirname}/public/index.html`)
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))