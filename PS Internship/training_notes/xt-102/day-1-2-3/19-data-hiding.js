function getBoard() {
    const userStories = [];

    return {
        addStory: function( story ) { // public
            if( typeof story === 'string' ) {
                userStories.push( story );
            }
        },
        printStories: function() {
            console.log( userStories );
        }
    };
}

const board = getBoard();

board.addStory( 'Login' );
board.addStory( 'Calendar' );

board.userStories.push( 1, { name: 'Meetings' } ); // error
// console.log( board.userStories );

board.printStories();