import CounterPresentation from '../components/Counter';
import {
    increment,
    decrement
} from '../actions/creators';

import { connect } from 'react-redux';

function mapStateToProps( state ) {
    return {
        value: state.counter.value,
    };
}

function mapDispatchToProps( dispatch ) {
    return {
        increment( value ) {
            dispatch( increment( parseInt( value ) ) );
        },
        decrement( value ) {
            dispatch( decrement( parseInt( value ) ) );
        }
    };
}

/// the component which is generated is refreshed only if what mapStateToProps returns a new value
export default connect( mapStateToProps, mapDispatchToProps )( CounterPresentation );