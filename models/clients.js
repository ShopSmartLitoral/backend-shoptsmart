const mongoose = require('mongoose');
require('../config/mongodb');

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true
  },
  cpf: {
    type: String
  },
  address: {
    type: String
  },
  complement: {
    type: String
  },
  cep: {
    type: String
  },
  city: {
    type: String
  },
  email: {
    type: String,
    required: true
  },
  bairro: {
    type: String
  },
  celPhone: {
    type: String
  },
  cartList: {
    type: Array
  },
  buyList: {
    type: Array
  }
}, { timestamps: true });
const clients = mongoose.model('clients', schema);

module.exports = clients;
