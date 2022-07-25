/* eslint-disable no-undef */
class Alert {
    setPosition() {
        NC.init( {
            position: NC.POSITION.TOP_RIGHT
        } );
    }

    showSuccessMessage( message, duration ) {
        this.setPosition();
        NC.show( {
            type: 'success',
            title: 'Success',
            description: message,
            duration
        } );
    }

    showErrorMessage( message, duration ) {
        this.setPosition();
        NC.show( {
            type: 'error',
            title: 'Oops!',
            description: message,
            duration
        } );
    }

    showInfoMessage( message, duration ) {
        this.setPosition();

        NC.show( {
            type: 'info',
            title: 'Info',
            description: message,
            duration
        } );
    }
}

export {
    Alert
};
