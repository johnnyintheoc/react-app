const express = require('express');
router = express.Router();
const connection = require('../config/connection.js');

router.get('/tesla', (req, res) => {
    connection.query("SELECT * from channels WHERE pageName='tesla'", function(err, result, fields) {
        if (err) throw err;
        res.end(JSON.stringify(result));
    });
});

router.get('/tech', (req, res) => {
    connection.query("SELECT * from channels WHERE pageName='tech'", function(err, result, fields) {
        if (err) throw err;
        res.end(JSON.stringify(result));
    });
});

module.exports = router;
