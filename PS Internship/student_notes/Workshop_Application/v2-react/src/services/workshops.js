import axios from 'axios'


    const apiBaseUrl =  "https://workshops-server.herokuapp.com"
    async function getWorkshops(){
       let workshops = await  axios.get(`${apiBaseUrl}/workshops`)
           return workshops.data
    }

    async function getWorkshopById(id){
        let workshop = await axios.get(`${apiBaseUrl}/workshops/${id}`)
        console.log(workshop.data);
        return workshop.data;
    }
    async function getSessionsById(id){
        console.log(id)
        let workshop = await axios.get(`${apiBaseUrl}/workshops/${id}/sessions`)
        console.log(workshop.data);
        return workshop.data;
    }
    function addSession( id, session ) {
        session.workshopId = id;
        session.upvoteCount = 0;
    
        return axios.post(
            `http://workshops-server.herokuapp.com/sessions`, 
            session,
            { 
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );
    }
    


export {
    getWorkshops,
    getWorkshopById,
    getSessionsById,
    addSession
}