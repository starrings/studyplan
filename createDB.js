var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('user.db');

db.serialize(function() {
    // 테이블 생성
    db.run(`CREATE TABLE userTable (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        Login_id TEXT NOT NULL,
        Login_password TEXT NOT NULL,
        NickName TEXT NOT NULL,
        a1 TEXT NOT NULL,
        a2 TEXT NOT NULL,
        a3 TEXT NOT NULL,
        a4 TEXT NOT NULL,   
        a5 TEXT NOT NULL,
        b1 TEXT NOT NULL,
        b2 TEXT NOT NULL,
        b3 TEXT NOT NULL,
        b4 TEXT NOT NULL,
        b5 TEXT NOT NULL
    )`, function(err) {
        if(err) {
            console.log('err:', err.message);
        } else {
            console.log('usertable created');
        }
    });

    db.close();
});