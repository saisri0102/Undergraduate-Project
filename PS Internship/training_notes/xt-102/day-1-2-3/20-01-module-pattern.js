const Board = (function() {
    // private data
    const userStories = [];

    // private methods
    function isString( value ) {
        return typeof value === 'string';
    }

    return {
        addStory: function( story ) { // public
            if( isString( story ) ) {
                userStories.push( story );
            }

            this.printStories();
        },
        printStories: function() {
            console.log( userStories );
        }
    };
}());

// this change also affects addStory
Board.printStories = function() {
    console.log( 'no more prints stories!!' );
};

Board.addStory( 'Login' );
Board.addStory( 'Calendar' );