import axios from 'axios';

class Questions {
    static get() {
        return axios.get( 'https://api.stackexchange.com/2.0/questions?site=stackoverflow' )
                .then( resp => resp.data )
                .then( data => data.items )
    }
}

export default Questions;