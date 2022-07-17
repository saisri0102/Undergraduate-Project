/// <reference path="../../../node_modules/@types/jest/index.d.ts" />

import * as FormUtils from './form';

test('displays a user after a click', () => {
    // Set up a form within document body for testing purpose
    document.body.innerHTML = `
        <form>
            <input type="email" name="email" id="email" value="john.doe@example.com" />
            <textarea name="message" id="message">Hello</textarea>
            <button type="submit id="btn-submit" value="Submit" />
        </form>
    `;

    const formEl = document.querySelector( 'form' );

    const formData = FormUtils.getFormData( formEl );
    expect( formData ).toEqual({
        email: 'john.doe@example.com',
        message: 'Hello'
    });
});