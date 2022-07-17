const workshops = require( '../../../data/workshops.json' );

// can be called as /api/workshops?start=start_id&end=end_id
function getWorkshops( req, res ) {
    // const claims = res.local.claims;
    // const claims = req.claims;

    res.json( workshops );
}

function getWorkshopById( req, res ) {
    const id = parseInt( req.params.id, 10 );
    const fieldsStr = req.query.fields;
    let fields;

    if( fieldsStr ) {
        fields = fieldsStr.split( ',' );
    }

    const workshop = workshops.find( workshop => workshop.id === id );

    // to get an array with a subset of items
    // const requiredWorkshops = workshops.filter( workshop => workshop.id >= 2 && workshop.id <= 5 )

    if( workshop ) {
        const workskhopWithFields = {};

        if( fields ) {
            for( let key in workshop ) {
                if( fields.includes( key ) ) {
                    workskhopWithFields[key] = workshop[key];
                }
            }
        } else {
            workskhopWithFields = workshop;
        }

        res.json( workskhopWithFields );
    } else {
        res.status( 404 );
        res.json({
            message: 'The workshop you are looking for does not exist'
        });
    }
}

// function getAddWorkshop( req, res ) {
//     res.render( 'add-workshop', {
//         title: 'Add Workshop | Workshops App'
//     });
// }

// function postAddWorkshop( req, res ) {
//     const formData = req.body;

//     res.json( formData );
// }

module.exports = {
    getWorkshops,
    getWorkshopById
    // getAddWorkshop,
    // postAddWorkshop
};