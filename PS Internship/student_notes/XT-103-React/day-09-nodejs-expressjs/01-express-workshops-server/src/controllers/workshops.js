const workshops = require('../../data/workshops.json')
function getWorkshops(req, res){
    res.render('workshops', {
        title: 'Workshops | Workshops App',
        workshops
    })
}

function addWorkshop(req , res){
    res.render('add-workshop',{
        title: 'Add workshop '
    })
}

function postWorkshop(req, res){
    const formData = req.body;
    res.send(formData)
}

module.exports = {
    getWorkshops,
    addWorkshop,
    postWorkshop
}
