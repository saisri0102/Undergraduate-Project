const users = require('../../../data/users.json')
const jwt = require('jsonwebtoken')
function login(req , res){
    

    const {email , password} = req.body;
    // in real application you have to do error checks for what email is not entered 
    // check th DB for matching email+ password combination

    const user = users.find(user => user.email === email && user.password === password);

    if(!user){
        res.status(403);
        res.json({
            message: 'Wrong crendentials'
        });
        return
    }
    // If details is corrent it will go to next step and generate the token 

    // privileges of the user are encoded in the claims
    const claims = {
        // like is the user is admin etc
        admin: user.admin,
        email: user.email
    }

    // the second argument (secret string should not be hard-coded in code - it is to be stored in an environment variable)
    // Encoding 
    // callback called after completion of encoding
    jwt.sign(claims , 'shhh' , function(err, token){
        if(err){
            res.status(500);
            res.json({
                message: 'unable to generate token'
            });
            return 
        }
        res.json({
            email,
            token
        })
    });

}

module.exports = {
    login
}