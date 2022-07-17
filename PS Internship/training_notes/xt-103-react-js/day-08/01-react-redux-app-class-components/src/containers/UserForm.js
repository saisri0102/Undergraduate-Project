import UserFormPresentation from '../components/UserForm';
import { updateUsername } from '../actions/creators';

import { connect } from 'react-redux';

function mapStateToProps( state ) {
    return {
        username: state.form.username
    };
}

function mapDispatchToProps( dispatch ) {
    return {
        updateUsername( username ) {
            dispatch( updateUsername( username ) );
        }
    };
}

export default connect( mapStateToProps, mapDispatchToProps )( UserFormPresentation );