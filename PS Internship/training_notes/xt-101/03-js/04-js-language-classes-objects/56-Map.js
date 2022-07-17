// JS object keys are always strings
const dns = {
    '123': 'www.google.com',
};

// Explore Map()
const dnsMap = new Map();
dnsMap.set( 123, 'www.google.com' );
console.log( dnsMap.get( 123 ) ); // 'www.google.com'