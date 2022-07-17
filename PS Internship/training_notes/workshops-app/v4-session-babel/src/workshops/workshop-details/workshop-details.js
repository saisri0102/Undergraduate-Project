import '../../js/navbar';

import { formatDate } from '../../js/utils/date';
import { showError, hideError } from '../../js/utils/form.js';
import { getQueryParams } from '../../js/utils/url.js';
import { addSession } from '../../js/services/sessions.js';
import { getWorkshopById } from '../../js/services/workshops.js';

import Workshop from '../../js/models/Workshop.js';
import Session from '../../js/models/Session.js';

import '../../common/utils.scss';
import '../../common/app.scss';
import '../../common/nav.scss';

import './workshop-details.scss';
import './workshop-details.print.scss';

const identity = ( x ) => x;

class WorkshopDetails {
    addNewSessionForm = null;

    workshop = null;

    session = new Session();

    workshopDetailsTplFn = Handlebars.compile( document.querySelector( '#workshop-details-tpl' ).innerHTML );

    formAddNewSessionTplFn = Handlebars.compile( document.querySelector( '#form-add-new-session-tpl' ).innerHTML );

    renderWorkshopCard( workshop ) {
        const workshopDetailsWrapper = document.querySelector( '#workshop-details-wrapper' );
        workshopDetailsWrapper.innerHTML = this.workshopDetailsTplFn( { workshop } );
    }

    renderAddNewSessionForm() {
        const formAddNewSessionWrapper = document.querySelector( '#form-add-new-session-wrapper' );
        formAddNewSessionWrapper.innerHTML = this.formAddNewSessionTplFn();
        this.addNewSessionForm = formAddNewSessionWrapper.querySelector( '#form-add-new-session' );
    }

    onInput = ( setter, transform, event ) => {
        const input = event.target;

        try {
            this.session[setter]( transform( input.value ) );
            hideError( input );
        } catch( error ) {
            showError( input, error.message );
        }
    }

    addNewSession = async ( event ) => {
        if( !this.session.isValid() ) {
            return;
        }

        try {
            const updatedSessionRaw = await addSession( this.session );

            NC.show( {
                type: 'success',
                title: 'Success!',
                description: `Session with id = ${updatedSessionRaw.id} has been added`,
                duration: 5
            } );
        } catch( error ) {
            NC.show( {
                type: 'error',
                title: 'Oops! Something went wrong.',
                description: `The session may not have been added.\n${error.message}`,
                duration: 10
            } );
        }

        this.addNewSessionForm.reset();
        this.session = new Session();
        this.session.setWorkshopId( this.workshop.id );
    }

    onSubmitAddNewSessionForm = ( event ) => {
        event.preventDefault();
        this.addNewSession();
    }

    addListeners() {
        this.addNewSessionForm.sequenceId.addEventListener( 'input', this.onInput.bind( null, 'setSequenceId', parseInt ) );
        this.addNewSessionForm.name.addEventListener( 'input', this.onInput.bind( null, 'setName', identity ) );
        this.addNewSessionForm.speaker.addEventListener( 'input', this.onInput.bind( null, 'setSpeaker', identity ) );
        this.addNewSessionForm.duration.addEventListener( 'input', this.onInput.bind( null, 'setDuration', parseFloat ) );
        this.addNewSessionForm.level.addEventListener( 'input', this.onInput.bind( null, 'setLevel', identity ) );
        this.addNewSessionForm.abstract.addEventListener( 'input', this.onInput.bind( null, 'setAbstract', identity ) );

        this.addNewSessionForm.addEventListener( 'submit', this.onSubmitAddNewSessionForm );
    }

    render( workshop ) {
        this.renderWorkshopCard( workshop );
        this.renderAddNewSessionForm( workshop );
    }

    // initial page setup
    async init() {
        NC.init( {
            position: NC.POSITION.TOP_RIGHT
        } );

        Handlebars.registerHelper( 'formatDate', formatDate );

        try {
            const id = parseInt( getQueryParams( window.location.search ).id );
            const workshopRaw = await getWorkshopById( id );
            this.workshop = new Workshop( workshopRaw );
            this.session.setWorkshopId( this.workshop.id );

            this.render( this.workshop );

            // IMPORTANT: It is important to call addListeners after render, as the form whose submission is being handled is available in the HTML only after rendering the page (in particular the form).
            this.addListeners();

            NC.show( {
                type: 'info',
                title: 'Workshop details fetched',
                description: `The details of workshop with id=${id} was fetched afresh and shown`,
                duration: 5
            } );
        } catch( err ) {
            NC.show( {
                type: 'error',
                title: 'Oops! Something went wrong.',
                description: err.message,
                duration: 10
            } );
        }
    }
}

const page = new WorkshopDetails();
page.init();
