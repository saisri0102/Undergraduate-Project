function errorLogger(req , res , next){
    console.log('error handler')
    res.render( 'error' );
}

module.exports = errorLogger