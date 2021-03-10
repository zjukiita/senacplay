const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).send("Cadê Os FIlmes Richard ?");
});

module.exports = router;