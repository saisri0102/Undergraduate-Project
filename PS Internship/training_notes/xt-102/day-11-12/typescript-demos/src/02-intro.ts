// Two modes of compilation
    // - script mode (default mode)
    // - module mode
// TS will compile a file in "script" mode (by module)

// We specify arguments types
// We specify the return type (we let TS infer the return type)
const sum = ( x : number, y : number ) /* : number */ => x + y;

function hideError( dom : HTMLElement | null ) {

}

// hideError( { x: 1 } ); // is not a DOM node - error
hideError( document.querySelector( '#xyz' ) ); // is a DOM node - no errpr

// sum( true, false ); // error
sum( 12, 13 ); // not an error

// due to this line, TS will compile the file in module mode
export { }