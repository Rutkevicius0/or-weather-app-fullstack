require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const app = express();

const PORT = 5000;

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json(`Server is online on port ${PORT}`);
});
const routes = require('./server/Routes/routes');

app.use('/', routes);

app.listen(PORT, console.log(`Back end online on port ${PORT}`));

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => {
    console.log('connected to mongoose');
  })
  .catch((err) => console.error(err.message));
