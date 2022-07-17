import React from 'react';
import { getSessionForWorkshopById } from '../../services/sessions';

function SessionsList( { id } ) {
    const [ sessions, setSessions ] = React.useState( [] );

    React.useEffect(() => {
        getSessionForWorkshopById( id )
            .then( sessions => {
                setSessions( sessions );
                console.log( sessions );
            })
            .catch( error => console.log( error.message ) );
    }, [ id ]);

    return (
        <React.Fragment>
            <div>
                Sessions list should be rendered for workshops with id = {id}
            </div>
            <div>
                This workshops has {sessions.length} sessions.
            </div>
        </React.Fragment>
    );
}

export default SessionsList;