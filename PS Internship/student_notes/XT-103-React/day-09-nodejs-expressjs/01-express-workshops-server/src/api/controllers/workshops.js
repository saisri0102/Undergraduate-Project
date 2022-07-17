const workshops = require('../../../data/workshops.json');

function getWorkshops( req, res){
    let startField = req.query.start
    let endField = req.query.end
    let filteredWorkshops = {}

    if (startField && endField){
        filteredWorkshops = workshops.filter(workshop => (workshop.id >= startField && workshop.id<= endField))
    }
    else if(startField){ 
        filteredWorkshops = workshops.filter(workshop => workshop.id >= startField )
    }
    
    else{
        filteredWorkshops = workshops
    }
    res.json(filteredWorkshops)
}
function getWorkshopsById(req, res){
    const id = parseInt (req.params.id , 10);
    let fieldsStr = req.query.fields;
    let fields;
    if(fieldsStr){
        fields = fieldsStr.split(',')
    }

    const workshop = workshops.find(workshop => workshop.id === id);
    if(workshop){
        let workshopWithFields = {};
        if(fields){
            for(let key in workshop){
                if(fields.includes(key)){
                    workshopWithFields[key] = workshop[key];
                }
            }
        }else{
            workshopWithFields = workshop
        }
        res.json(workshopWithFields)
    }
    else{
        res.status(404);
        res.json({
            message: 'The workshop you are looking for is not found'
        })
    }
}

module.exports = {
    getWorkshops,
    getWorkshopsById
}
