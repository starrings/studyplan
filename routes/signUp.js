var express = require('express');
var router = express.Router();
var sqlite3 = require('sqlite3');
var db = new sqlite3.Database('user.db');
var auth = require('../lib/auth');


router.get('/', function(req, res){
    res.render('signUp', {loginpro: auth.loginpro(req, res)});
});

router.post('/membership', function(req, res){
    console.log(req.body.user,req.body.emailadd, req.body.createpwd, req.body.repeatpwd);
    if(req.body.createpwd === req.body.repeatpwd){
        db.run(`INSERT INTO userTable (Login_id, Login_password, NickName, a1, a2, a3, a4, a5, b1, b2, b3, b4, b5) VALUES($id, $pass, $name, $a1, $a2, $a3, $a4, $a5, $b1, $b2, $b3, $b4, $b5)`,
        {
            $id: req.body.emailadd,
            $pass: req.body.createpwd,
            $name: req.body.user,
            $a1: '',
            $a2: '',
            $a3: '',
            $a4: '',
            $a5: '',
            $b1: '',
            $b2: '',
            $b3: '',
            $b4: '',
            $b5: ''
        },function(err){
            if(err){
                console.log(err.message);
            }else{
                console.log('data inserted');
                db.all(`SELECT * FROM userTable`, function(err, rows) {
                    if(err){
                        console.log(err.message);
                    }else{
                        console.log(rows);
                    }

                });
                
                }
        });
    }else{
        console.log('SignUp failed');
    }
    res.redirect('../login');
});

module.exports = router;