function requestLogger ( req , res , next){

    req.timeReceived = new Date();
    console.log('request logger (before next is called) ')
    console.log('Request received at time : ', req.timeReceived)

    next()

    const timeOfResponse = new Date();
    console.log('request logger (after next is called) ')
    console.log('Request received at time : ', timeOfResponse)

    console.log( 'Time in msec to process the request: ' + (timeOfResponse.getTime() - req.timeReceived.getTime()))
}

module.exports = {
    requestLogger
}