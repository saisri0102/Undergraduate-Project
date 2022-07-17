import FormPresentation from '../components/UserForm'
import {connect} from 'react-redux'
import {updateUsername} from '../actions/creators'

function mapStateToProps( state ) {
    return {
       // username = {store.getState().form.username}
        username: state.form.username, // it is same as above in hand generated
    };
}

function mapDispatchToProps( dispatch ) {
    return {
        /*
        updateUsername = (username) =>{
            store.dispatch(updateUsername(username))
        }
        */
        updateUsername( username ) { // this is same as above in hand generated code
            dispatch( updateUsername( username ) );
        }
    };
}

// we can pass null value in the place of mapStateToProps if we dont have any props to pass
export default connect( mapStateToProps, mapDispatchToProps )( FormPresentation );