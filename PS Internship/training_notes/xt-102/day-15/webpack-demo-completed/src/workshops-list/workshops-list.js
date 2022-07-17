import Workshop from '../models/Workshop';
import $ from 'jquery';

import 'bootstrap/scss/bootstrap.scss';
import './workshops-list.scss';

$(document).ready(function() {
    const fetchWorkshops = async () => {
        const response = await fetch( 'https://workshops-server.herokuapp.com/workshops' );

        if( !response.ok ) {
            throw new Error( 'Something went wrong' );
        }

        return response.json();
    }

    const fetchAndShowWorkshops = async () => {
        try {
            const workshopsList = $( '#workshops-list' );

            const workshopsRaw = await fetchWorkshops();
            const workshops = workshopsRaw.map( workshop => new Workshop( workshop ) );

            workshops.forEach( workshop => {
                workshopsList.append( $( `<li class="list-group-item">${workshop.name}</li>` ) );
            });
        } catch( err ) {
            alert( err.message );
        }
    }

    fetchAndShowWorkshops();
});