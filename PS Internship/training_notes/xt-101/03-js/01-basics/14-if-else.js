const baseLocation = 'Bangalore';

if( baseLocation === 'Gurugram' ) {
    console.log( 'DLF Cyberhub' );
} else if( baseLocation === 'Bangalore' ) {
    console.log( 'Bagmane Constellation' );
}

// 5 values are considered equivalent of false in a condition
// false, undefined, null, 0, '' -> falsy values
// all other values are truthy -> [], {}, ' ', -1, are all truthy
if( x ) {
    console.log( 'truthy' );
} else {
    console.log( 'falsy' );
}