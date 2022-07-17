var NC = (function() {
    function createNotificationsCenter( options ) {
        ncContainer = document.createElement( 'div' );

        ncContainer.classList.add( 'notifications-center' );

        const ncPosition = position[options.position];
        ncContainer.style.top = ncPosition.top;
        ncContainer.style.right = ncPosition.right;
        ncContainer.style.bottom = ncPosition.bottom;
        ncContainer.style.left = ncPosition.left;

        document.body.appendChild( ncContainer );
    }

    function show( { type, title, description, duration } ) {
        const ncNotification = document.createElement( 'div' );
        
        ncNotification.classList.add( 'notification' ) ;
        ncNotification.classList.add( `notification-${type}` ) ;
        ncNotification.innerHTML = `
            <span class="notification-close">&times;</span>
            <div class="notification-title">${title}</div>
            <div class="notification-description">${description}</div>
        `;

        ncContainer.appendChild( ncNotification );

        function hide() {
            ncNotification.remove();
        }

        ncNotification.querySelector( '.notification-close' ).addEventListener( 'click', hide );

        if( duration ) {
            setTimeout( hide, duration * 1000);
        }

        return {
            hide: hide
        };
    }

    function init( options ) {
        createNotificationsCenter( options );
    }

    const NC = { 
        init: init,
        show: show,
        POSITION: {
            TOP_RIGHT: 'top right',
            BOTTOM_RIGHT: 'bottom right',
            BOTTOM_LEFT: 'bottom left',
            TOP_LEFT: 'top left'
        }
    };

    const position = {
        [NC.POSITION.TOP_RIGHT]: {
            top: '10px',
            right: '10px',
            bottom: 'auto',
            left: 'auto'
        },
        [NC.POSITION.BOTTOM_RIGHT]: {
            top: 'auto',
            right: '10px',
            bottom: '10px',
            left: 'auto'
        },
        [NC.POSITION.BOTTOM_LEFT]: {
            top: 'auto',
            right: 'auto',
            bottom: '10px',
            left: '10px'
        },
        [NC.POSITION.TOP_LEFT]: {
            top: '10px',
            right: 'auto',
            bottom: 'auto',
            left: '10px'
        }
    }

    return NC;
}());