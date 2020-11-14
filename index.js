const express = require("express");
const bodyParser = require('body-parser');
const routes = require('./src/routes');
require('dotenv').config();

const app = express();
const port = process.env.PORT || "8000";

app.use(bodyParser.json());

routes(app);

app.listen(port, () => console.log(`App running on port ${port}`));