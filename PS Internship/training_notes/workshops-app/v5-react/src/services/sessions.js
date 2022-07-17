import axios from 'axios';

function getSessionForWorkshopById(id) {
    return axios
      .get(`https://workshops-server.herokuapp.com/workshops/${id}/sessions`,{ 
            headers: {
                'Accept': 'application/json'
            }
        })
      .then((response) => response.data);
}

function addSession( id, session ) {
    session.workshopId = id;
    session.upvoteCount = 0;

    return axios.post(
        `http://workshops-server.herokuapp.com/sessions`, 
        session,
        { 
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }
    );
}

export {
    getSessionForWorkshopById,
    addSession
}