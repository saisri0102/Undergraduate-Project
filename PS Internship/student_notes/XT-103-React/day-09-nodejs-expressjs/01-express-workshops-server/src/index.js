
const express = require('express');
const path = require('path')
const app = express() // Application object which contains  web server
const indexRouter = require('./routes/index')
const workshopsRouter = require( './routes/workshops' );

const authApiRouter = require('./api/routes/auth')
const workshopsApiRouter = require('./api/routes/workshops')

const {requestLogger} = require('./middleware/request-logger')

const errorLogger = require('./middleware/error-logger')
const PORT = process.env.PORT || 3000;

// moved to routes
// app.get('/', function(req , res){
//     res.send('<h1>Hello, express<h1>');
// })
// app.get('/about', function(req , res){
//     res.send('<h2>Hello, about<h2>');
// })
// end - sends as normal text
// send -> content-type : text/html -> interprets as html
// better to use send 


// A router can be "mounted" on a path as below
// it groups the routes
// app.use( '/admin', indexRouter) // to add middleware (router is one middleware)

// For a group of links ues one router
// Ex : one cart router, one checkoutrouter etc


// When someone sends the request then next middleware won't be called but the above middlewares will be called
/*

For example if we make a request for bootstrap css which is present in (public folder) -> this request gets handled by express.staic
 - So express.static middleware responds to the request that was sent
 - So the below middlwares wont be called but all the above middlewares ( requestLogger , express.urlencoded() , express.json()) will be called 
*/

app.use( requestLogger)
app.use( express.urlencoded() );

app.use( express.json() );
// adding static file server middleware which serves all css, js , images etc in public folder
app.use(express.static(path.join(process.cwd(), 'public')));

app.use(indexRouter)
app.use(workshopsRouter)
app.use('/api' , authApiRouter)
app.use('/api' , workshopsApiRouter)

app.use(errorLogger) // this only gets called when no middleware on the above send the request 



// npm i ejs
app.set('view engine', 'ejs')
app.set('views', path.join(process.cwd(), 'src/views'))
// app.get() - to get key which is set 

app.listen(PORT , function(err){
    if(err){
        console.log(err.message);
        return
    }
    console.log(`server running on http://localhost:${PORT}/`);
});