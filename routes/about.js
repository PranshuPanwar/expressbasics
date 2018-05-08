/**
 * Created by Pranshu Panwar on 06-05-2018.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('about', { title: 'about', name :"pranshu panwar"});
});

module.exports = router;