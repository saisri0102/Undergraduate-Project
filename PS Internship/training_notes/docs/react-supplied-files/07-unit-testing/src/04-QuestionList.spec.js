// @todo Mock the Questions service dependency

describe( 'QuestionList', () => {
    it( 'loads with a fetched set of questions', () => {
        // @todo Set the following as the mock resolved value of the QuestionsService.get() method
        /*
        const response = [
            { title: 'How to pass data during routing?' },
            { title: 'Best way to handle errors in React' }
        ];
        */
        
        // @todo Create a shallow wrapped QuestionsList instance

        // https://github.com/airbnb/enzyme/issues/964
        // @todo Without using a setTimeout(), the state after shallow() call is the QUESTIONLIST_FETCH state. Hence check the wrapper state within a setTimeout() function
    });
    
    it( 'ends up with a proper error state if QuestionsService.get() did not fetch questions due to some reason', () => {
        // @todo Left as an exercise
    });
});