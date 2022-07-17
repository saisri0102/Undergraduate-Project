import React from 'react';

// set this up as a controlled component
export default class UserForm extends React.Component {
    render() {
        return (
            <div>
                {/* add code to dispatch action on change of name, and set value form state on update of name */}
                Name: <input type="text" id="name" />
                {/* show updated name here */}
            </div>
        );
    }

    // subscribe on component mount, to enable forceUpdate
}