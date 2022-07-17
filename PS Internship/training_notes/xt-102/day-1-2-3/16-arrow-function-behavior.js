function outer() {
    console.log( 'outer this = ', this );

    const innerNormal = function() {
        console.log( 'inner normal this = ', this );
    };
    
    const innerArrow = () => {
        console.log( 'inner arrow this = ', this );
    };

    innerNormal();
    innerArrow();
}

outer();

const john = { name: 'John' };
outer.call( john );