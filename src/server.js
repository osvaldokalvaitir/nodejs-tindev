const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');

const server = express();

mongoose.connect('mongodb+srv://usuario123:senha123@cluster0-nuc9x.mongodb.net/tindev?retryWrites=true&w=majority', {
  useNewUrlParser: true
});

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(3333);
