(async function() {
    function appendWorkshopCard( workshop ) {
        const workshopsList = document.querySelector( '#workshops-list' );

        const tpl = `
            <a class="card workshops-list-item my-3 text-reset text-no-underline" href="/workshop-details.html?id=${workshop.id}">
                <div class="text-center">
                    <img src="${workshop.imageUrl}" alt="${workshop.name}" />
                </div>
                <h2 class="workshops-list-item-title my-3">${workshop.name}</h2>
                
                <div class="my-3 workshops-list-item-details">
                    <div class="my-1">
                        <time datetime="${formatDate(workshop.startDate)}">${formatDate(workshop.startDate, 'display')}</time> - <time datetime="${formatDate(workshop.endDate)}">${formatDate(workshop.endDate, 'display')}</time>
                    </div>
                    <div>
                        <time>${workshop.time}</time>
                    </div>
                </div>
            </a>
        `;

        workshopsList.innerHTML += tpl;
    }

    function render( workshops ) {
        // populate the DOM with workshops
        workshops.forEach(function( workshop ) {
            appendWorkshopCard( workshop );
        });
    }

    function onClickBtnHideDetails() {
        document.querySelectorAll( '.workshops-list-item-details' ).forEach(function( itemDetails ) {
            itemDetails.classList.toggle( 'hide' );
        });

        this.innerText = document.querySelector( '.workshops-list-item-details' ).classList.contains( 'hide' ) ? 'Show details' : 'Hide details';
    }

    function addListeners() {
        document.querySelector( '#btn-hide-details' ).addEventListener( 'click', onClickBtnHideDetails );
    }

    // initial page setup
    async function init() {
        NC.init({
            position: NC.POSITION.TOP_RIGHT
        });

        try {
            // IMPORTANT: It is ok to call addListeners before data fetch on this page, as the only element on which the click handler is set is the hide details button, which is available in the HTML even BEFORE data is fetched and workshop list item cards are shown.
            addListeners();
            
            const workshops = await getWorkshops();
            render( workshops );
            
            NC.show({
                type: 'info',
                title: 'Workshops fetched',
                description: 'The list of workshops was fetched afresh and shown',
                duration: 5
            });
        } catch( err ) {
            NC.show({
                type: 'error',
                title: 'Error fetching workshops',
                description: `We were unable to fetch workshops (${err.message})`
            });
        }
    }

    // setup page on load
    init();
}());