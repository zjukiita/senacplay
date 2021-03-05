const express = require('express');
const router = express.Router();
const { User } = require('../models');
const sha256 = require('js-sha256');
const jwt = require('jsonwebtoken')

router.post('/', async (req, res) => {
    const result = await User.findAll({
        where: {
            email: req.body.email,
            senha: sha256(req.body.senha + "767")
        }
    });

    if (!result.length) {
        res.status(403).json({ auth: false });
    }
    const token = jwt.sign({ id: result.id }, 'play', { expiresIn: 1 });

    res.status(200).json({ auth: true, token: token });

});


module.exports = router;