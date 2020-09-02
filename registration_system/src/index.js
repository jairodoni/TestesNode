const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('dotenv/config');

require('./app/controllers/index')(app);

app.listen(process.env.SERVER_PORT, () => {
  console.log(`[*] Server running on port: ${process.env.SERVER_PORT}`);
});

