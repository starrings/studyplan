module.exports = {
    IsOwner:function(req, res){
        if(req.session.is_logined){
            return true;
        }else{
            return false;
        }
    },
    StatusUI:function(req, res){
    
        if(this.IsOwner(req, res)){
            return req.session.nickname;
        }
        return 'login';
    },
    StatusLog:function(req, res){
    
        if(this.IsOwner(req, res)){
            return 'logout';
        }
        return 'login';
    },
    loginpro:function(req, res){
        if(this.IsOwner(req, res) == true){
            return '/cal'
        }else{
            return '/login'
        }
    },
    getRandomInt:function() { //min ~ max 사이의 임의의 정수 반환
        return Math.floor(Math.random() * (5 - 1)) + 1;
    }
}