import { ObjectWithStringValues } from './types.js';

// gather named inputs in a form into an object
const getFormData = ( formEl : HTMLFormElement ) => {
    const formData : ObjectWithStringValues = {};

    const inputs = formEl.elements;

    for( let i = 0; i < inputs.length; i += 1 ) {
        const input : HTMLInputElement = inputs[i] as HTMLInputElement;
        if( input.name !== '' ) {
            formData[input.name] = input.value;
        }
    }

    return formData;
};

// gather named inputs in a form into an object, while removing leading and trailing whitespaces from their values
const getTrimmedFormData = ( formEl : HTMLFormElement ) => {
    const formData = getFormData( formEl );

    // eslint-disable-next-line no-restricted-syntax
    for( const key in formData ) {
        // eslint-disable-next-line no-prototype-builtins
        if( formData.hasOwnProperty( key ) ) {
            formData[key] = formData[key].trim();
        }
    }

    return formData;
};

/**
 * Given an input with .form-control, it locates the corresponding error element with class .form-control-error and shows it. Note that both .form-control, and .form-control-error should be within a .form-group
 */
const showError = ( formControlEl : HTMLElement, error : string ) => {
    const errorElement = ( ( formControlEl as HTMLElement ).closest( '.form-group' ) as HTMLElement ).querySelector( '.form-control-error' ) as HTMLElement;
    errorElement.innerHTML = error;
    errorElement.style.display = 'block';
};

/**
 * Given an input with .form-control, it locates the corresponding error element with class .form-control-error and hides it. Note that both .form-control, and .form-control-error should be within a .form-group
 */
const hideError = ( formControlEl : HTMLElement ) => {
    const errorElement = ( ( formControlEl as HTMLElement ).closest( '.form-group' ) as HTMLElement ).querySelector( '.form-control-error' ) as HTMLElement;
    errorElement.innerHTML = '';
    errorElement.style.display = 'none';
};

export {
    getFormData,
    getTrimmedFormData,
    showError,
    hideError
};
