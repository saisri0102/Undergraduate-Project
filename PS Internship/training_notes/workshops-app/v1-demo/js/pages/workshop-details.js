import { formatDate } from '../utils/date.js';
import { showError, hideError } from '../utils/form.js';
import { getQueryParams } from '../utils/url.js';
import { addSession } from '../services/sessions.js';
import { getWorkshopById } from '../services/workshops.js';
import Workshop from '../models/Workshop.js';
import Session from '../models/Session.js';

const identity = x => x;

class WorkshopDetails {
    addNewSessionForm = null;
    workshop = null;
    session = new Session({
        workshopId: -1,
        sequenceId: -1,
        name: '',
        speaker: '',
        duration: 0,
        level: '',
        abstract: '',
        upvoteCount: 0
    });


    renderWorkshopCard( workshop ) {
        const workshopDetailsWrapper = document.querySelector( '#workshop-details-wrapper' );

        const tpl = `
            <header class="my-5">
                <h1>${workshop.name}</h1>
                <hr />
            </header>
            <div class="workshop-details row">
                <div class="col-12 col-sm-4">
                    <img src="${workshop.imageUrl}" alt="${workshop.name}" class="img-responsive" />
                </div>
                <div class="col-12 col-sm-8">
                    <div class="row">
                        <div class="col-6">
                            <div>
                                <small>
                                    <time datetime="${formatDate(workshop.startDate)}">${formatDate(workshop.startDate, 'display')}</time> - <time datetime="${formatDate(workshop.endDate)}">${formatDate(workshop.endDate, 'display')}</time>
                                </small>
                            </div>
                            <div>
                                <small>
                                    <time>${workshop.time}</time>
                                </small>
                            </div>
                        </div>
                        <div class="col-6">
                            <div>
                                <small>
                                    <i class="fas fa-${workshop.modes.inPerson ? 'check' : 'times'}"></i>
                                    In-person
                                </small>
                            </div>
                            <div>
                                <small>
                                <i class="fas fa-${workshop.modes.online ? 'check' : 'times'}"></i>
                                Online
                                </small>
                            </div>
                        </div>
                    </div>
                    ${workshop.description}
                </div>
            </div>
        `;

        workshopDetailsWrapper.innerHTML = tpl;
    }

    renderAddNewSessionForm() {
        const formAddNewSessionWrapper = document.querySelector( '#form-add-new-session-wrapper' );

        const tpl = `
            <header>
                <div class="d-flex justify-content-space-between my-5">
                    <h2>Add a new session</h1>
                </div>
            </header>
            <hr />
            <form action="https://localhost:8001/sessions" method="post" id="form-add-new-session" novalidate>
                <div>
                    All fields marked with <span class="required-indicator">*</span> are required.
                </div>
                <div class="form-group my-3">
                    <label for="sequenceId" class="control-label">
                        Sequence ID
                        <span class="required-indicator">*</span>
                    </label>
                    <div class="form-control-container">
                        <input type="number" name="sequenceId" id="sequenceId" class="form-control" aria-describedby="sequenceid-help" />
                        <div id="sequenceid-help" class="form-control-help">
                            Sequence ID is the serial number of the session in the workshop
                        </div>
                        <div class="form-control-error"></div>
                    </div>
                </div>
                <div class="form-group my-3">
                    <label for="name" class="control-label">
                        Name
                        <span class="required-indicator">*</span>
                    </label>
                    <div class="form-control-container">
                        <input type="text" name="name" id="name" class="form-control" aria-describedby="name-help" />
                        <div id="name-help" class="form-control-help">
                            Name of the session
                        </div>
                        <div class="form-control-error"></div>
                    </div>
                </div>
                <div class="form-group my-3">
                    <label for="speaker" class="control-label">
                        Speaker
                        <span class="required-indicator">*</span>
                    </label>
                    <div class="form-control-container">
                        <input type="text" name="speaker" id="speaker" class="form-control" aria-describedby="speaker-help" />
                        <div id="speaker-help" class="form-control-help">
                            Names of the speakers in this session. Separate multiple name by commas. Example: John Doe, Jane Doe
                        </div>
                        <div class="form-control-error"></div>
                    </div>
                </div>
                <div class="form-group my-3">
                    <label for="duration" class="control-label">
                        Duration
                        <span class="required-indicator">*</span>
                    </label>
                    <div class="form-control-container">
                        <input type="number" name="duration" id="duration" class="form-control" aria-describedby="duration-help" />
                        <div id="duration-help" class="form-control-help">
                            Duration of the session in hours. Example: 2.5
                        </div>
                        <div class="form-control-error"></div>
                    </div>
                </div>
                <div class="form-group my-3">
                    <label for="level" class="control-label">
                        Level
                        <span class="required-indicator">*</span>
                    </label>
                    <div class="form-control-container">
                        <select name="level" id="level" class="form-control" aria-describedby="level-help">
                            <option value="">-- Select the level of the session --</option>
                            <option value="Basic">Basic</option>
                            <option value="Intermediate">Intermediate</option>
                            <option value="Advanced">Advanced</option>
                        </select>
                        <div id="level-help" class="form-control-help">
                            The level of the session
                        </div>
                        <div class="form-control-error"></div>
                    </div>
                </div>
                <div class="form-group my-3">
                    <label for="abstract" class="control-label">
                        Abstract
                        <span class="required-indicator">*</span>
                    </label>
                    <div class="form-control-container">
                        <textarea name="abstract" id="abstract" class="form-control" aria-describedby="abstract-help"></textarea>
                        <div id="abstract-help" class="form-control-help">
                            A summary describing the topics covered
                        </div>
                        <div class="form-control-error"></div>
                    </div>
                </div>
                <div class="form-group my-3">
                    <label>&nbsp;</label>
                    <div class="form-control-container">
                        <button class="btn btn-primary" id="add-new-session">Add session</button>
                    </div>
                </div>
            </form>
        `;

        formAddNewSessionWrapper.innerHTML = tpl;
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
            this.session = new Session( updatedSessionRaw );

            this.addNewSessionForm.reset();

            NC.show({
                type: 'success',
                title: 'Success!',
                description: `Session with id = ${this.session.id} has been added`,
                duration: 5
            });
        } catch( error ) {
            NC.show({
                type: 'error',
                title: 'Oops! Something went wrong.',
                description: `The session may not have been added.\n${error.message}`,
                duration: 10
            });
        }
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
        NC.init({
            position: NC.POSITION.TOP_RIGHT
        });

        try {
            const id = parseInt( getQueryParams( window.location.search ).id );
            const workshopRaw = await getWorkshopById( id );
            this.workshop = new Workshop( workshopRaw );
            this.session.setWorkshopId( this.workshop.id );
            
            this.render( this.workshop );
            
            // IMPORTANT: It is important to call addListeners after render, as the form whose submission is being handled is available in the HTML only after rendering the page (in particular the form).
            this.addListeners();

            NC.show({
                type: 'info',
                title: 'Workshop details fetched',
                description: `The details of workshop with id=${id} was fetched afresh and shown`,
                duration: 5
            });
        } catch( err ) {
            NC.show({
                type: 'error',
                title: 'Oops! Something went wrong.',
                description: err.message,
                duration: 10
            });
        }
    }
}

const page = new WorkshopDetails();
page.init();