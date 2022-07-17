(async function() {
    function addWorkshopCard( workshop ) {
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

    function addNewSessionForm( workshop ) {
        const formAddNewSession = document.querySelector( '#form-add-new-session-wrapper' );

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
                <input type="hidden" name="workshopId" value="${workshop.id}" />
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
                        <div class="form-control-error">
                            This field is required
                        </div>
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
                        <div class="form-control-error">
                            This field is required
                        </div>
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
                        <div class="form-control-error">
                            This field is required
                        </div>
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
                        <div class="form-control-error">
                            This field is required
                        </div>
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
                            <option value="basic">Basic</option>
                            <option value="intermediate">Intermediate</option>
                            <option value="advanced">Advanced</option>
                        </select>
                        <div id="level-help" class="form-control-help">
                            The level of the session
                        </div>
                        <div class="form-control-error">
                            This field is required
                        </div>
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
                        <div class="form-control-error">
                            This field is required
                        </div>
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

        formAddNewSession.innerHTML = tpl;
    }

    function getFormattedSessionData( formEl ) {
        const formData = getTrimmedFormData( formEl );

        formData.workshopId = parseInt( formData.workshopId );
        formData.sequenceId = parseInt( formData.sequenceId );
        formData.duration = parseFloat( formData.duration );

        return formData;
    }

    function validateAddNewSessionForm( formEl ) {
        const formData = getTrimmedFormData( formEl );
        let firstErrorEl = null;

        if( formData.sequenceId === '' ) {
            showError( formEl.sequenceId );
            firstErrorEl = firstErrorEl || formEl.sequenceId;
        } else {
            hideError( formEl.sequenceId );
        }
        
        if( formData.name === '' ) {
            showError( formEl.name );
            firstErrorEl = firstErrorEl || formEl.name;
        } else {
            hideError( formEl.name );
        }
        
        if( formData.speaker === '' ) {
            showError( formEl.speaker );
            firstErrorEl = firstErrorEl || formEl.speaker;
        } else {
            hideError( formEl.speaker );
        }
        
        if( formData.duration === '' ) {
            showError( formEl.duration );
            firstErrorEl = firstErrorEl || formEl.duration;
        } else {
            hideError( formEl.duration );
        }
        
        if( formData.level === '' ) {
            showError( formEl.level );
            firstErrorEl = firstErrorEl || formEl.level;
        } else {
            hideError( formEl.level );
        }
        
        if( formData.abstract === '' ) {
            showError( formEl.abstract );
            firstErrorEl = firstErrorEl || formEl.abstract;
        } else {
            hideError( formEl.abstract );
        }

        // focus on first erroneous input (if any)
        if( firstErrorEl ) {
            firstErrorEl.focus();
        }

        // returns true if no errors, and false otherwise
        return firstErrorEl === null;
    }

    function onSubmitAddNewSessionForm( event ) {
        event.preventDefault();

        if( validateAddNewSessionForm( event.target ) ) {
            makeAjaxRequest({
                method: 'post',
                endpoint: 'sessions',
                body: getFormattedSessionData( event.target ),
                authenticated: true
            })
                .then( session => {
                    event.target.reset();
                    NC.show({
                        type: 'success',
                        title: 'Success!',
                        description: `Session with id = ${session.id} has been added`,
                        duration: 5
                    });
                })
                .catch( error => {
                    NC.show({
                        type: 'error',
                        title: 'Oops! Something went wrong.',
                        description: `The session may not have been added.\n${error.message}`,
                        duration: 10
                    });
                });
        }
    }

    function addListeners() {
        document.querySelector( '#form-add-new-session' ).addEventListener( 'submit', onSubmitAddNewSessionForm );
    }

    function render( workshop ) {
        addWorkshopCard( workshop );
        addNewSessionForm( workshop );
    }

    // initial page setup
    async function init() {
        NC.init({
            position: NC.POSITION.TOP_RIGHT
        });

        try {
            const id = parseInt( getQueryParams( window.location.search ).id );
            const workshop = await getWorkshopById( id );
            render( workshop );
            
            // IMPORTANT: It is important to call addListeners after render, as the form whose submission is being handled is available in the HTML only after rendering the page (in particular the form).
            addListeners();

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
                description: error.message,
                duration: 10
            });
        }
    }

    // setup page on load
    init();
}());