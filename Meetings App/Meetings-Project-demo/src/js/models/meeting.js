import { Form } from '../utils/form.js';

class Meeting {
    form = new Form();

    constructor( meeting ) {
        Object.assign( this, meeting );
    }

    requiredValidate( title = 'Name', selector ) {
        const errors = [];

        if ( !selector.trim() ) {
            errors.push( `${title} cannot be empty` );
        }
        return errors;
    }

    endTimeValidate( {
        startHour, endHour, startMin, endMin
    } ) {
        const errors = [];
        const sh = parseInt( startHour, 10 );
        const sm = parseInt( startMin, 10 );
        const eh = parseInt( endHour, 10 );
        const em = parseInt( endMin, 10 );

        if ( ( sh > eh ) || ( ( sh === eh ) && ( em <= sm ) ) ) {
            errors.push( 'End Time should be greater than Start time' );
        }
        return errors;
    }

    descriptionValidate() {
        const errors = [];
        errors.push( ...this.form.requiredValidation( 'Description', this.description ) );
        if ( this.description.length < 20 ) {
            errors.push( 'Description should be more than 20 characters' );
        }
        return errors;
    }

    attendeesValidate() {
        const emailReg = new RegExp( /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/ );

        const errors = [];
        if ( this.attendees.length === 1 && !this.attendees[0] ) {
            errors.push( 'Please add atleast one member' );
            return errors;
        }

        this.attendees.forEach( ( member ) => {
            if ( !emailReg.test( member ) ) {
                errors.push( `${member} is not a valid ID` );
            }
        } );
        return errors;
    }

    setName( name ) {
        this.name = name;
        return this.requiredValidate( 'Meeting Name', this.name );
    }

    setDate( date ) {
        this.date = date;
        return this.requiredValidate( 'Meeting Date', this.date );
    }

    setStartTime( startHour, startMin ) {
        this.startTime.hours = startHour;
        this.startTime.minutes = startMin;
    }

    setEndTime( endHour, endMin ) {
        this.endTime.hours = endHour;
        this.endTime.minutes = endMin;
        return this.endTimeValidate( {
            startHour: this.startTime.hours,
            endHour: this.endTime.hours,
            startMin: this.startTime.minutes,
            endMin: this.endTime.minutes
        } );
    }

    setDescription( description ) {
        this.description = description;
        return this.descriptionValidate();
    }

    setAttendees( attendees ) {
        this.attendees = attendees;
        return this.attendeesValidate();
    }
}

export default Meeting;
