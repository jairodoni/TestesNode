const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes')
const app = express();

require('dotenv/config');

// app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(routes);

app.listen(process.env.SERVER_PORT, () => {
  console.log(`[*] Server running on port: ${process.env.SERVER_PORT}`);
});

