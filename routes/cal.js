var express = require('express');
var router = express.Router();
var auth = require('../lib/auth');
var sqlite3 = require('sqlite3');
const db = new sqlite3.Database('user.db');


router.get('/', function(req, res){

    res.render('main', {
        check5: req.session.check5,
        check4: req.session.check4,
        check3: req.session.check3,
        check2: req.session.check2,
        check1: req.session.check1,
        a1: req.session.a1, 
        a2: req.session.a2, 
        a3: req.session.a3, 
        a4: req.session.a4, 
        a5: req.session.a5,
        b1: req.session.b1, 
        b2: req.session.b2, 
        b3: req.session.b3,
        b4: req.session.b4,
        b5: req.session.b5,
        authMy: auth.StatusUI(req, res), 
        authmylog: auth.StatusLog(req, res), 
        loginpro: auth.loginpro(req, res)
    });
});

router.get('/logout', function(req, res){
    req.session.destroy(function(err){
        res.redirect('/login');
    });
});
router.post('/cals', function(req, res){
    console.log(req.body.num, req.body.plan, req.body.check1);
    if(req.body.check1)req.session.check1 = 'checked';else req.session.check1 = ''; 
    if(req.body.check2)req.session.check2 = 'checked';else req.session.check2 = '';
    if(req.body.check3)req.session.check3 = 'checked';else req.session.check3 = '';
    if(req.body.check4)req.session.check4 = 'checked';else req.session.check4 = '';
    if(req.body.check5)req.session.check5 = 'checked';else req.session.check5 = '';
        if(req.body.num == '1'){

            db.run(`UPDATE userTable SET a1 = '${req.body.sub}', b1 = '${req.body.plan}' WHERE Nickname = "${req.session.nickname}"`,function(err){
                if(err){
                    console.log(err.message);
                }else{
                    db.all(`SELECT * FROM userTable WHERE Nickname="${req.session.nickname}"`, function(err, rows) {
                        console.log(rows);
                        if(err) {
                            console.log('err: ' + err.message);
                        } else{
                            req.session.a1 = rows[0].a1;
                            req.session.b1 = rows[0].b1;
                            res.redirect('../cal');
                        }
                    });

                        // req.session.a2 = rows[0].a2;
                        // req.session.a3 = rows[0].a3;
                        // req.session.a4 = rows[0].a4;
                        // req.session.a5 = rows[0].a5;
                        // req.session.b1 = rows[0].b1;
                        // req.session.b2 = rows[0].b2;
                        // req.session.b3 = rows[0].b3;
                        // req.session.b4 = rows[0].b4;
                        // req.session.b5 = rows[0].b5;
                }
            });
                
        }else if(req.body.num == '2'){
            console.log('2');
            db.run(`UPDATE userTable SET a2 = '${req.body.sub}', b2 = '${req.body.plan}' WHERE Nickname = "${req.session.nickname}"`,function(err){
                if(err){
                    console.log(err.message);
                }else{
                    db.all(`SELECT * FROM userTable WHERE Nickname="${req.session.nickname}"`, function(err, rows) {
                        console.log(rows);
                        if(err) {
                            console.log('err: ' + err.message);
                        } else{
                            req.session.a2 = rows[0].a2;
                            req.session.b2 = rows[0].b2;
                            res.redirect('../cal');
                        }
                    });
                }
            });
        }else if(req.body.num == '3'){
            console.log('3');
            db.run(`UPDATE userTable SET a3 = '${req.body.sub}', b3 = '${req.body.plan}' WHERE Nickname = "${req.session.nickname}"`,function(err){
                if(err){
                    console.log(err.message);
                }else{
                    db.all(`SELECT * FROM userTable WHERE Nickname="${req.session.nickname}"`, function(err, rows) {
                        console.log(rows);
                        if(err) {
                            console.log('err: ' + err.message);
                        } else{
                            req.session.a3 = rows[0].a3;
                            req.session.b3 = rows[0].b3;
                            res.redirect('../cal');
                        }
                    });
                }
            });
        }else if(req.body.num == '4'){
            console.log('4');
            db.run(`UPDATE userTable SET a4 = '${req.body.sub}', b4 = '${req.body.plan}' WHERE Nickname = "${req.session.nickname}"`,function(err){
                if(err){
                    console.log(err.message);
                }else{
                    db.all(`SELECT * FROM userTable WHERE Nickname="${req.session.nickname}"`, function(err, rows) {
                        console.log(rows);
                        if(err) {
                            console.log('err: ' + err.message);
                        } else{
                            req.session.a4 = rows[0].a4;
                            req.session.b4 = rows[0].b4;
                            res.redirect('../cal');
                        }
                    });
                }
            });
        }else{
            console.log('5');
            db.run(`UPDATE userTable SET a5 = '${req.body.sub}', b5 = '${req.body.plan}' WHERE Nickname = "${req.session.nickname}"`,function(err){
                if(err){
                    console.log(err.message);
                }else{
                    db.all(`SELECT * FROM userTable WHERE Nickname="${req.session.nickname}"`, function(err, rows) {
                        console.log(rows);
                        if(err) {
                            console.log('err: ' + err.message);
                        } else{
                            req.session.a5 = rows[0].a5;
                            req.session.b5 = rows[0].b5;
                            res.redirect('../cal');
                        }
                    });
                }
            });
        }
    //res.render('main', {a1: req.session.a1, a2: req.session.a2, a3: req.session.a3, a4: req.session.a4, a5: req.session.a5,b1: req.session.b1, b2: req.session.b2, b3: req.session.b3,b4: req.session.b4,b5: req.session.b5,authMy: auth.StatusUI(req, res), authmylog: auth.StatusLog(req, res), loginpro: auth.loginpro(req, res)});
});
router.post('/result', function(req, res){
    db.run(`UPDATE userTable SET a1 = '', a2 = '', a3 = '', a4 = '', a5 = '', b1 = '', b2 = '', b3 = '', b4 = '', b5 = '' WHERE Nickname = "${req.session.nickname}"`,function(err){
        if(err){
            console.log(err.message);
        }
    });

    var checklist=0;
    if(req.session.check1) checklist++;
    if(req.session.check2) checklist++;
    if(req.session.check3) checklist++;
    if(req.session.check4) checklist++;
    if(req.session.check5) checklist++; 

    req.session.check1 = ''; 
    req.session.check2 = '';
    req.session.check3 = '';
    req.session.check4 = '';
    req.session.check5 = '';
    var myon = ['빼어나게 잘하려고 노력하자', '말보다 실천이 우선이다', '현재에 충실하라', '물질적인 풍요', '결과를 겸허하게 받아들이자', '정신적인 행복', '관심과 신념', '나를 사랑하라','함부로 비난하지 마라', '실패를 성공으로'];
    var checkcheck = ['분발하세요!', '좀 더 노력하세요!!', '좀 더 할 수 있어요', '잘했어요', '참 잘했어요', '휼룡합니다.'];
    res.render('result', {result1: myon[auth.getRandomInt()-1], result2: checkcheck[checklist]});
});


module.exports = router;