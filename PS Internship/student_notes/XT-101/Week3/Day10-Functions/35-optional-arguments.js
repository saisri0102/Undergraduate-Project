//ES2015

function greet(message, name){
    console.log(`${message} ${name}`);
}

greet('Good morning', 'john'); // Good morning john
greet('Good morning'); //Good morning undefined


function greet2(message, name='World'){ // World is taken as default if value is not provided
    console.log(`${message} ${name}`); 
}

greet2('Good morning', 'john'); // Good morning john
greet2('Good morning'); //Good morning World