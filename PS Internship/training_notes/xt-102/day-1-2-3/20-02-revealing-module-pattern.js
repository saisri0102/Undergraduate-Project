// "revealing module" pattern
const Board = (function() {
    // private data
    const userStories = [];

    // private methods
    function isString( value ) {
        return typeof value === 'string';
    }

    // public method (intending to make it public)
    function addStory( story ) { // public
        if( isString( story ) ) {
            userStories.push( story );
        }

        printStories();
    }

    function printStories() {
        console.log( userStories );
    }

    return {
        addStory: addStory,
        printStories: printStories
    };
}());

// this change also affects addStory
Board.printStories = function() {
    console.log( 'no more prints stories!!' );
};

Board.addStory( 'Login' );
Board.addStory( 'Calendar' );