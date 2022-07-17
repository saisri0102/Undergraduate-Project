import React from 'react';
import Questions from './04-Questions.service';

class QuestionList extends React.Component {
	constructor( props ) {
  	    super( props );
    
        this.state = {
            status: 'QUESTIONLIST_INITIALIZING',
            questions: [],
            error: null
        };
    }
  
    render() {
        const { status, questions, error } = this.state;

        switch( status ) {
            case 'QUESTIONLIST_FETCH':
                return <div>Questions are being fetched...Hang on...</div>
            case 'QUESTIONLIST_FETCH_SUCCESS':
                return (
                    <ol>
                        {
                            questions.map( question => <li>{question.title}</li> )
                        }
                    </ol>
                );
            case 'QUESTIONLIST_FETCH_FAILURE':
                return <div>Some error occured while fetching questions ({error.message})</div>;
            default:
                return <p>Initializing...</p>;
        }
    }
  
    componentDidMount() {
        this.setState(
            {
                status: 'QUESTIONLIST_FETCH'
            },
            () => {
                Questions.get()
                    .then( questions => this.setState({
                        status: 'QUESTIONLIST_FETCH_SUCCESS',
                        questions: questions
                    }))
                    .catch( error => this.setState({
                        status: 'QUESTIONLIST_FETCH_FAILURE',
                        error: error
                    }))
            }
        );
    }
}

export default QuestionList;