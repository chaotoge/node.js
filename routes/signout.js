/**
 * Created by @chaotoge on 2017/7/5.
 */
var express = require('express');
var router = express.Router();

var checkLogin = require('../middlewares/check').checkLogin;

// GET /signout 登出
router.get('/', checkLogin, function(req, res, next) {
    res.send(req.flash());
});

module.exports = router;