/**
 * Pre-requisites: context ("this") of a function call, a function's call() method.
 */
// Step 1: Execute this script and check the context logged for foo call and the calls to the inner functions.
function foo() {
    console.log( 'foo() call context is ', this );

    function bar_old_syntax() {
        console.log( 'bar_old_syntax() call context is ', this );
    }
    
    const bar_arrow_syntax = () => {
        console.log( 'bar_arrow_syntax() call context is ', this );
    };
}

foo();
foo.call( 'hello' );

// --------------------------------------------

// Step 2: Make necessary change to have innerFn's context set to getName's context
const john = {
    name: 'John',
    age: 32,
    getName: function() {
        console.log( this ); // "this" refers to the object the method is part of (here, john)

        function innerFn() {
            console.log( this );
        }

        innerFn();

        return this.name;
    }
};

console.log( john.getName() );

// --------------------------------------------

// Step 3: Exercise (Debugging calculation of hiked salary)