// gather named inputs in a form into an object
const getFormData = ( formEl ) => {
    const formData = {}; // { email: 'john.doe@example.com' , password: 'password' }

    const inputs = formEl.elements;

    for( let i = 0; i < inputs.length; i += 1 ) {
        const input = inputs[i];

        if( input.name !== '' ) {
            formData[input.name] = input.value;
        }
    }

    return formData;
};

// gather named inputs in a form into an object, while removing leading and trailing whitespaces from their values
const getTrimmedFormData = ( formEl ) => {
    const formData = getFormData( formEl );

    for( const key in formData ) {
        formData[key] = formData[key].trim();
    }

    return formData;
};

/**
 * Given an input with .form-control, it locates the corresponding error element with class .form-control-error and shows it. Note that both .form-control, and .form-control-error should be within a .form-group
 */
const showError = ( formControlEl, error ) => {
    const errorElement = formControlEl.closest( '.form-group' ).querySelector( '.form-control-error' );
    errorElement.innerHTML = error;
    errorElement.style.display = 'block';
};

/**
 * Given an input with .form-control, it locates the corresponding error element with class .form-control-error and hides it. Note that both .form-control, and .form-control-error should be within a .form-group
 */
const hideError = ( formControlEl ) => {
    const errorElement = formControlEl.closest( '.form-group' ).querySelector( '.form-control-error' );
    errorElement.innerHTML = '';
    errorElement.style.display = 'none';
};

export {
    getFormData,
    getTrimmedFormData,
    showError,
    hideError
};
