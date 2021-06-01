const express = require('express');
const router = express.Router();
const { User } = require('../models');
const sha256 = require('js-sha256');
const verifyJWT = require('../middlewares/auth');


router.get('/', verifyJWT,  async (req, res) => {
    const users = await User.findAll({
        attributes: ['email', 'nomeCompleto', 'usuario']
    });

    res.status(200).json(users);
});

router.post('/', async (req, res) => {
    const users = await User.create({
        usuario: req.body.usuario,
        nomeCompleto: req.body.nomeCompleto,
        email: req.body.email,
        senha: sha256(req.body.senha + "767"),
        permissao: 'user'
    });
    res.json(users);
});

module.exports = router