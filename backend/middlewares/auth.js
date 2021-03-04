const jwt = require('jsonwebtoken')

const verifyJWT = (req, res, nex) => {
    const token = req.headers['x-access-token'];
    if (!token) {
        return res.status(401).json({
            auth: false,
            message: "Token não encontrado"

        });
    }

    jwt.verify(token, 'play', (err, decoded) => {
        if (err) {
            return res.status(500).json({
                auth: false,
                message: "Senha ou email incorretos"
            });
        }
        req.useId = decoded.id;
        nex();
    });
}

module.exports = verifyJWT