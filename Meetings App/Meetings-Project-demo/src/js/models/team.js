import { Form } from '../utils/form.js';

class Team {
    form = new Form();

    constructor( team ) {
        Object.assign( this, team );
    }

    descriptionValidate() {
        const errors = [];

        errors.push( ...this.form.requiredValidation( 'Description', this.description ) );

        if ( this.description.length < 20 ) {
            errors.push( 'Description should be more than 20 characters' );
        }
        return errors;
    }

    membersValidate() {
        const emailReg = new RegExp( /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/ );

        const errors = [];
        if ( this.members.length === 1 && !this.members[0] ) {
            errors.push( 'Please add atleast one member' );
            return errors;
        }

        this.members.forEach( ( member ) => {
            if ( !emailReg.test( member ) ) {
                errors.push( `${member} is not a valid ID` );
            }
        } );
        return errors;
    }

    setTeamName( name ) {
        this.name = name;
        return this.form.requiredValidation( 'Team Name', this.name );
    }

    setTeamShortName( shortName ) {
        this.shortName = shortName;
        return this.form.requiredValidation( 'Team short name', this.shortName );
    }

    setTeamDescription( description ) {
        this.description = description;
        return this.descriptionValidate();
    }

    setTeamMembers( members ) {
        this.members = members;
        return this.membersValidate();
    }
}
export default Team;
