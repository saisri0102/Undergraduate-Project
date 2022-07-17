// gather named inputs in a form into an object
function getFormData( formEl ) {
    const formData = {};

    for( let i = 0; i < formEl.length; i++ ) {
        const input = formEl[i];
        if( input.name !== '' ) {
            formData[input.name] = input.value;
        }
    }

    return formData;
}

// gather named inputs in a form into an object, while removing leading and trailing whitespaces from their values
function getTrimmedFormData( formEl ) {
    const formData = getFormData( formEl );

    for( let key in formData ) {
        formData[key] = formData[key].trim();
    }

    return formData;
}

/**
 * Given an input with .form-control, it locates the corresponding error element with class .form-control-error and shows it. Note that both .form-control, and .form-control-error should be within a .form-group
 */
function showError( formControlEl ) {
    formControlEl.closest( '.form-group' ).querySelector( '.form-control-error' ).style.display = 'block';
}

/**
 * Given an input with .form-control, it locates the corresponding error element with class .form-control-error and hides it. Note that both .form-control, and .form-control-error should be within a .form-group
 */
function hideError( formControlEl ) {
    formControlEl.closest( '.form-group' ).querySelector( '.form-control-error' ).style.display = 'none';
}