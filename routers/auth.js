const express = require('express');
const routers = express.Router();
const authService = require('../services/auth')


routers.post('/', (req,res) => {
    console.log('Entrou na authentication')
    authService.login(req,res)
})

module.exports = routers