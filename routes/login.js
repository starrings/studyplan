var express = require('express');
var router = express.Router();
var sqlite3 = require('sqlite3');
const db = new sqlite3.Database('user.db');
var auth = require('../lib/auth');


router.post('/loginprocess', function(req, res){
    var email = req.body.email;
    var password = req.body.password;
    // db.all(`SELECT * FROM userTable`, function(err, rows) {
    //    console.log(rows);
    // })
        db.all(`SELECT * FROM userTable WHERE Login_id="${email}"`, function(err, rows) {

            if(err) {
                console.log('err: ' + err.message);
            } else {
                console.log(rows);
                if(rows.length){
                    console.log(rows);
                    if(rows[0].Login_password == password){
                        console.log("로그인 성공");
                        console.log(rows[0].NickName, rows[0].id,rows[0].Login_id,rows[0].Login_password);
                        req.session.is_logined = true;
                        req.session.nickname = rows[0].NickName;
                        req.session.a1 = rows[0].a1;
                        req.session.a2 = rows[0].a2;
                        req.session.a3 = rows[0].a3;
                        req.session.a4 = rows[0].a4;
                        req.session.a5 = rows[0].a5;
                        req.session.b1 = rows[0].b1;
                        req.session.b2 = rows[0].b2;
                        req.session.b3 = rows[0].b3;
                        req.session.b4 = rows[0].b4;
                        req.session.b5 = rows[0].b5;
                        req.session.check1 = ''; 
                        req.session.check2 = '';
                        req.session.check3 = '';
                        req.session.check4 = '';
                        req.session.check5 = '';
                        req.session.save(function(){
                            res.redirect('/cal');
                        });
                    }else{
                        console.log("로그인 실패2");
                        res.redirect('/');
                        //res.render('login', {loginpro: auth.loginpro(req, res)});
                    }
                }else{
                    console.log("로그인 실패1");
                    //res.render('login', {loginpro: auth.loginpro(req, res)});
                    res.redirect('/');
                }
            
            }
        });
    
});

router.get('/', function(req, res){
    res.render('login', {loginpro: auth.loginpro(req, res)});
});

module.exports = router;