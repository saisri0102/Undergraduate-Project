const board = {
    userStories: [], // would like to make this private - it is public though
    addStory: function( story ) { // public
        if( typeof story === 'string' ) {
            this.userStories.push( story );
        }
    }
};

board.addStory( 'Login' );
board.addStory( 'Calendar' );

board.userStories.push( 1, { name: 'Meetings' } ); // error
console.log( board.userStories );

board.printStories();