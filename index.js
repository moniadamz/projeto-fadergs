const express = require("express");
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config/default');
const routes = require('./src/routes');
require('dotenv').config();

// const persist = require('./src/services/clients/persistClients');
const app = express();
const port = process.env.PORT || "8000";

app.use(bodyParser.json());
app.use(express.json());
app.use(routes);
const connectDb = () => {
    return mongoose.connect(config.mongoURI, {useNewUrlParser: true, useUnifiedTopology: true});
  };

connectDb().then(async () => {
    app.listen(port, () => console.log(`App running on port ${port}`));
    // await persist();
}).catch((err) => console.log('ERRO', err));

