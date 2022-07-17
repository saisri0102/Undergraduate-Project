const jwt = require('jsonwebtoken');
function authenticate( req , res , next){
    
    const authorizationHeader = req.header('Authorization');
    console.log(authorizationHeader)
    const token = authorizationHeader;
    jwt.verify(token , 'shhh', function(err , claims){
        if(err){
            res.status(401);
            res.json({
                message: 'Go away Intruder'
            });
            return 
        }
        next();
    });

    
}

module.exports = {
    authenticate
}