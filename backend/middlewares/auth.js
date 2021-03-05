const jwt = require('jsonwebtoken');

const verifyINT = (req, res, next) => {
    const token = req.headers['x-access-token'];
    if (!token) {
        return res.status(403).json({
            auth: false,
            message: 'token not found'
        });
    }

    jwt.verify(token, '@ti35', (err, decoded) => {
        if (err) {
            return res.status(300).json({
                auth: false,
                message: "failed to auth"
            });
        }
        req.userid = decoded.id
        next();
    });
}

module.exports = verifyINT;