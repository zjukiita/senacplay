const express = require('express');
const router = express.Router();
const { User } = require('../models');
const sha256 = require('js-sha256');
const verifyJWT = require('../middlewares/auth');


router.get('/', verifyJWT, async (req, res) => {
    const users = await User.findAll({
        attributes: ['email', 'senha', 'nomeCompleto','usuario']
    });

    res.status(200).json(users);
});

router.post('/', async (req, res) => {
    const user = await User.create({
        userName: req.body.userName,
        password: sha256(req.body.password+767)
        
    }); 
res.status(201).json(user);
});


module.exports = router