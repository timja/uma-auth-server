var express = require('express');
var router = express.Router();

var fs = require("fs");

var defaultHeaders = { 'Content-Type': 'application/json' };

router.get('/tim', function(req, res, next) {
    console.log(req.query);
    console.log(req.params);
    res.send('hi tim2:');
});

/* GET users listing. */
router.get('/:id', function(req, res, next) {
    console.log(req.query);
    console.log(req.params);
    res.send('user: ' + req.params.id);
});


module.exports = router;
