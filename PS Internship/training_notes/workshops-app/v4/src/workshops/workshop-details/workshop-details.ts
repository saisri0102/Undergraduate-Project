/* global Handlebars, NC */
/* eslint no-undef: "error" */

/// <reference path="../../../node_modules/handlebars/types/index.d.ts" />
/// <reference path="../../../libs/notifications-center/index.d.ts" />

import { formatDate } from '../../js/utils/date.js';
import { showError, hideError } from '../../js/utils/form.js';
import { getQueryParams } from '../../js/utils/url.js';
import { addSession } from '../../js/services/sessions.js';
import { getWorkshopById } from '../../js/services/workshops.js';
import Workshop from '../../js/models/Workshop.js';
import Session from '../../js/models/Session.js';
import { FunctionPropertyNames, HTMLInputElementValueTransformer } from '../../js/utils/types.js';

const identity = ( x : any ) => x;

class WorkshopDetails {
    addNewSessionForm : HTMLFormElement | null = null;

    workshop : Workshop | null = null;

    session = new Session();

    workshopDetailsTplFn = Handlebars.compile( ( document.querySelector( '#workshop-details-tpl' ) as HTMLElement ).innerHTML );

    formAddNewSessionTplFn = Handlebars.compile( ( document.querySelector( '#form-add-new-session-tpl' ) as HTMLElement ).innerHTML );

    renderWorkshopCard( workshop : Workshop ) {
        const workshopDetailsWrapper = document.querySelector( '#workshop-details-wrapper' ) as HTMLElement;
        workshopDetailsWrapper.innerHTML = this.workshopDetailsTplFn( { workshop } );
    }

    renderAddNewSessionForm() {
        const formAddNewSessionWrapper = document.querySelector( '#form-add-new-session-wrapper' ) as HTMLElement;
        formAddNewSessionWrapper.innerHTML = this.formAddNewSessionTplFn( null );
        this.addNewSessionForm = formAddNewSessionWrapper.querySelector( '#form-add-new-session' ) as HTMLFormElement;
    }

    onInput = ( setter : FunctionPropertyNames<Session>, transform : HTMLInputElementValueTransformer, event : Event ) => {
        const input = event.target as HTMLInputElement | HTMLTextAreaElement;

        try {
            ( this.session[setter] as HTMLInputElementValueTransformer )( transform( input.value ) );
            hideError( input );
        } catch( error ) {
            showError( input, error.message );
        }
    }

    addNewSession = async () => {
        if( !this.session.isValid() ) {
            return;
        }

        try {
            const updatedSessionRaw = await addSession( this.session );

            NC.show( {
                type: 'success',
                title: 'Success!',
                description: `Session with id = ${( updatedSessionRaw as any ).id} has been added`,
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

        ( this.addNewSessionForm as HTMLFormElement ).reset();
        this.session = new Session();
        this.session.setWorkshopId( ( this.workshop as any ).id );
    }

    onSubmitAddNewSessionForm = ( event : Event ) => {
        event.preventDefault();
        this.addNewSession();
    }

    addListeners() {
        const addNewSessionForm = this.addNewSessionForm as HTMLFormElement;
        addNewSessionForm.sequenceId.addEventListener( 'input', this.onInput.bind( null, 'setSequenceId', parseInt ) );
        ( addNewSessionForm.querySelector( '[name="name"]' ) as HTMLElement ).addEventListener( 'input', this.onInput.bind( null, 'setName', identity ) );
        addNewSessionForm.speaker.addEventListener( 'input', this.onInput.bind( null, 'setSpeaker', identity ) );
        addNewSessionForm.duration.addEventListener( 'input', this.onInput.bind( null, 'setDuration', parseFloat ) );
        addNewSessionForm.level.addEventListener( 'input', this.onInput.bind( null, 'setLevel', identity ) );
        addNewSessionForm.abstract.addEventListener( 'input', this.onInput.bind( null, 'setAbstract', identity ) );

        addNewSessionForm.addEventListener( 'submit', this.onSubmitAddNewSessionForm );
    }

    render( workshop : Workshop ) {
        this.renderWorkshopCard( workshop );
        this.renderAddNewSessionForm();
    }

    // initial page setup
    async init() {
        NC.init( {
            position: NC.POSITION.TOP_RIGHT
        } );

        Handlebars.registerHelper( 'formatDate', formatDate );

        try {
            const id = parseInt( getQueryParams( window.location.search ).id, 10 );
            const workshopRaw = await getWorkshopById( id );
            this.workshop = new Workshop( workshopRaw );
            this.session.setWorkshopId( ( this.workshop as any ).id );

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
