const express = require('express');
const router = express.Router();
const adminLogin = require('../models/adminModel');
const jwt = require('jsonwebtoken');

router.post('', (req, res) => {
    //var { userName, password } = req.body;
    var userName = req.body.userName;
    var password = req.body.password;
    adminLogin.findOne({ userName }, (err, docs) => {
        if (err) { throw err; }
        else if (!docs) {
            res.json({ message: "No such user exist", status: 401 });
        } else {
            if (password === docs.password) {
                let payload = { subject: docs._id }
                let token = jwt.sign(payload, 'secretKey')
                res.json({ message: "login Sucessfull", status: 200, adminData: docs, token });
            } else {
                res.json({ message: "password do not match", status: 401 });
            }
        }
    })
})

module.exports = router;