/* global Handlebars, NC */
/* eslint no-undef: "error" */

/// <reference path="../../../node_modules/handlebars/types/index.d.ts" />
/// <reference path="../../../libs/notifications-center/index.d.ts" />

import { getWorkshops } from '../../js/services/workshops.js';
import { formatDate } from '../../js/utils/date.js';
import Workshop from '../../js/models/Workshop.js';

class WorkshopList {
    workshops : Workshop[] | null = null;

    workshopsListTplFn = Handlebars.compile( ( document.querySelector( '#workshops-list-tpl' ) as HTMLElement ).innerHTML );

    render( workshops : Workshop[] ) {
        const workshopsList = document.querySelector( '#workshops-list' ) as HTMLElement;
        workshopsList.innerHTML += this.workshopsListTplFn( { workshops } );
    }

    // eslint-disable-next-line no-unused-vars
    onClickBtnHideDetails( this : HTMLElement ) {
        document.querySelectorAll( '.workshops-list-item-details' ).forEach( ( itemDetails ) => {
            itemDetails.classList.toggle( 'hide' );
        } );

        this.innerText = ( document.querySelector( '.workshops-list-item-details' ) as HTMLElement ).classList.contains( 'hide' ) ? 'Show details' : 'Hide details';
    }

    addListeners() {
        ( document.querySelector( '#btn-hide-details' ) as HTMLElement ).addEventListener( 'click', this.onClickBtnHideDetails );
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
