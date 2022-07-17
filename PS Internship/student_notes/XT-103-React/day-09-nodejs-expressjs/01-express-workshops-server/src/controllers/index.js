const path = require('path');
function getHome(req , res){
    // res.send( // To send Plain text
    //     `<h1> Hello , Home</h1>
    //     `
    // )
    // process.cwd() => folder where node process was started (project root folder)
    //res.sendFile(path.join(process.cwd(), 'src/views/index.html')) // to send html files
    res.render('index' , {
        title: 'Home | Workshops App',
        appName: 'Workshops App',
        features: [
            'You can search for workshops',
            'You can view sessions for workshops',
            'You can request for sessions in a workshop',
            'You can vote on sessions'
        ]
    } ) // to render templating files
}
function getAbout(req , res){
    // res.send(
    //     `<h1> Hello , About</h1>
    //     `
    // )
   // res.sendFile(path.join(process.cwd(), 'src/views/about.html'))
   res.render('about', {
       title: 'About | Workshops App'
   });
}

module.exports = {
    getAbout,
    getHome
}