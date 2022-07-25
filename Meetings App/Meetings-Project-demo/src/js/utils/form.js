class Form {
    showError( formControlEl, error ) {
        formControlEl.classList.add( 'error-element' );
        formControlEl.focus();
        const errorElement = formControlEl.closest( '.input-element' ).querySelector( '.error-help' );
        errorElement.innerHTML = error;
        errorElement.style.display = 'block';
    }

    hideError( formControlEl ) {
        const errorElement = formControlEl.closest( '.input-element' ).querySelector( '.error-help' );
        errorElement.innerHTML = '';
        errorElement.style.display = 'none';
    }

    checkAndDisplayError( selector, errors = [] ) {
        if ( !errors.length ) {
            this.hideError( selector );
            return true;
        }
        this.showError( selector, errors.join( ', ' ) );
        return false;
    }

    requiredValidation( title = 'Name', selector ) {
        const errors = [];
        if ( !selector.trim() ) {
            errors.push( `${title} cannot be empty` );
        }
        return errors;
    }
}

export {
    Form
};
