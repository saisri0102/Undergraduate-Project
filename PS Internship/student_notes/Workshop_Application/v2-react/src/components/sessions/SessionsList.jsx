import React, { Component } from 'react';
import { getSessionsById } from '../../services/workshops';


class Sessions extends Component {
    static LOADING = 'LOADING';
    static LOADED = 'LOADED';
    static ERROR_LOADING = 'ERROR_LOADING';

    state = {
        status: Sessions.LOADING
    };

    render() {
        const { status, sessions, error } = this.state;
        let el = null;

        switch( status ) {
            case Sessions.LOADING:
                el = (
                    <div className="alert alert-primary">We are fetching workshops. Please wait</div>
                );
                break;
            case Sessions.LOADED:
                el = (
                    <div >
                        {
                            sessions.map(session =>(
                                <div className="container">
                                    <div class="row my-4">
                                        <div class="col-12">
                                            <h3>
                                                Sessions in this workshop
                                            </h3>
                                            <hr />
                                        </div>
                                        <div class="col-12">
                                            <ul class="list-group">
                                                <li class="list-group-item">
                                                    <div class="row">
                                                        <div class="col-1">
                                                            <div class="d-flex flex-column align-items-center">
                                                                <i class="fa fa-caret-up"></i>
                                                                <span>{session.upvoteCount}</span>
                                                                <i class="fa fa-caret-down"></i>
                                                            </div>
                                                        </div>
                                                        <div class="col-11">
                                                            <div class="lead">{session.name}</div>
                                                            <div class="h6">by {session.speaker}</div>
                                                            <div>
                                                                <span class="badge">{session.level}</span>
                                                            </div>
                                                            <div class="my-2">
                                                                {session.duration} hours
                                                            </div>
                                                            <p>
                                                                {session.abstract}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                );
                break;
            case Sessions.ERROR_LOADING:
                el = (
                    <div className="alert alert-danger">{error.message}</div>
                );
                break;
            default: 
                el = null;
        }

        return (
            <div className="container">{el}</div>
        );
    }

    componentDidMount() {
        console.log( this.props );

        getSessionsById( parseInt( this.props.id) )
            .then(sessions => {
                this.setState({
                    status: Sessions.LOADED,
                    sessions
                });
            })
            .catch(error => {
                this.setState({
                    status: Sessions.ERROR_LOADING,
                    error
                });
            });
    }
    
}

export default Sessions;