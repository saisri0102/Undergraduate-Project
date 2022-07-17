import React, { Component } from 'react';
import Counter from './Counter';

import './App.css';

class App extends Component {
    state = {
        counter: 0
    };

    updateCounter = ( counter ) => {
        this.setState({
            counter: counter
        });
    }

    render() {
        console.log( this.state );
        return (
            <div>
                Hello CSS and Style loader!!
                <Counter counter={this.state.counter} updateCounter={this.updateCounter} />
            </div>
        );
    }

    componentDidMount() {
        this.setState({
            counter: this.props.counter
        });

        if( module.hot ) {
            module.hot.accept( './Counter.js', () => {
                console.log( 'within handler for Counter.js changes' );
                this.setState({
                    counter: this.state.counter
                });
            });
        }
    }
}

export default App;