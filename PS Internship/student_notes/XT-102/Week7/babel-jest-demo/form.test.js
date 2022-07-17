const { getFormData, showError } = require( './form' );

describe( 'getFormData function', () => {
    it( 'should extract form input values into an object and return it', () => {
        // arrange
        document.body.innerHTML = `
            <form>
                <input type="email" name="email" value="john.doe@example.com" />
                <input type="password" name="password" value="password" />
            </form>
        `;

        const formEl = document.querySelector( 'form' );

        // act
        const formData = getFormData( formEl );

        // assert
        expect( formData ).toEqual({
            email: 'john.doe@example.com',
            password: 'password'
        })
    });
});

test( 'showError should show the error passed within the .form-control-error sibling of the passed formControlEl', () => {
    // arrange
    document.body.innerHTML = `
        <form>
            <div class="form-group">
                <input type="text" />
                <div class="form-control-error" style="display: none;"></div>
            </div>
        </form>
    `;

    const formControlEl = document.querySelector( 'input' );

    // act
    showError( formControlEl, 'Input cannot be empty' );

    // assert
    expect( document.querySelector( '.form-control-error' ).innerHTML ).toBe( 'Input cannot be empty' );
    expect( document.querySelector( '.form-control-error' ).style.display ).toBe( 'block' );

    // logging generally to check how HTML has changed
    console.log( document.body.innerHTML );
});