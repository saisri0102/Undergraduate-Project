import '../../js/navbar';

import { getWorkshops } from '../../js/services/workshops.js';
import { formatDate } from '../../js/utils/date.js';
import Workshop from '../../js/models/Workshop.js';

import '../../common/utils.scss';
import '../../common/app.scss';
import '../../common/nav.scss';

import './workshops-list.scss';

class WorkshopList {
    workshops = null;

    workshopsListTplFn = Handlebars.compile( document.querySelector( '#workshops-list-tpl' ).innerHTML );

    render( workshops ) {
        const workshopsList = document.querySelector( '#workshops-list' );
        workshopsList.innerHTML += this.workshopsListTplFn( { workshops } );
    }

    onClickBtnHideDetails() {
        document.querySelectorAll( '.workshops-list-item-details' ).forEach( ( itemDetails ) => {
            itemDetails.classList.toggle( 'hide' );
        } );

        this.innerText = document.querySelector( '.workshops-list-item-details' ).classList.contains( 'hide' ) ? 'Show details' : 'Hide details';
    }

    addListeners() {
        document.querySelector( '#btn-hide-details' ).addEventListener( 'click', this.onClickBtnHideDetails );
    }

    // initial page setup
    async init() {
        NC.init( {
            position: NC.POSITION.TOP_RIGHT
        } );

        Handlebars.registerHelper( 'formatDate', formatDate );

        try {
            // IMPORTANT: It is ok to call addListeners before data fetch on this page, as the only element on which the click handler is set is the hide details button, which is available in the HTML even BEFORE data is fetched and workshop list item cards are shown.
            this.addListeners();

            const workshopsRaw = await getWorkshops();

            const workshops = workshopsRaw.map( ( workshop ) => new Workshop( workshop ) );

            this.render( workshops );

            NC.show( {
                type: 'info',
                title: 'Workshops fetched',
                description: 'The list of workshops was fetched afresh and shown',
                duration: 5
            } );
        } catch( err ) {
            NC.show( {
                type: 'error',
                title: 'Error fetching workshops',
                description: `We were unable to fetch workshops (${err.message})`
            } );
        }
    }
}

// setup page on load
const page = new WorkshopList();
page.init();

export default WorkshopList;
