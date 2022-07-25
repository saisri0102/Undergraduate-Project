/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable import/extensions */
import { Form } from '../../js/utils/form.js';
import { Alert } from '../../js/utils/alert.js';
import { MeetingsModule } from '../../js/services/meetings.js';
import Meeting from '../../js/models/meeting.js';
// eslint-disable-next-line no-unused-vars
import { Nav } from '../../js/nav.js';

import '../../styles/scss/utils.scss';
import '../../styles/scss/nav.scss';
import '../../styles/scss/notification.scss';
import '../../styles/scss/form.scss';
import '../meetings.scss';

class AddMeeting {
    form = new Form();

    alert = new Alert();

    meetingsModule = new MeetingsModule();

    meeting = new Meeting( {
        name: '',
        description: '',
        date: '',
        startTime:
        {
            hours: '',
            minutes: ''
        },
        endTime:
        {
            hours: '',
            minutes: ''
        },
        attendees: ''
    } );

    addMeetingForm = document.querySelector( '#add-meeting-form' );

    // let mNameEl = addMeetingForm['meeting-name'];
    mNameEl = this.addMeetingForm['meeting-name'];

    mDateEl = this.addMeetingForm['meeting-date'];

    mStartHourEl = this.addMeetingForm['start-time-hrs'];

    mStartMinEl = this.addMeetingForm['start-time-min'];

    mDescEl = this.addMeetingForm.description;

    mPartiEl = this.addMeetingForm.participants;

    mEndHourEl = this.addMeetingForm['end-time-hrs'];

    mEndMinEl = this.addMeetingForm['end-time-min'];

    nameCheck = () => {
        const errors = this.meeting.setName( this.mNameEl.value );
        return this.form.checkAndDisplayError( this.mNameEl, errors );
    }

    dateCheck = () => {
        const errors = this.meeting.setDate( this.mDateEl.value );
        return this.form.checkAndDisplayError( this.mDateEl, errors );
    }

    endTimeCheck = () => {
        this.meeting.setStartTime( this.mStartHourEl.value, this.mStartMinEl.value );
        const errors = this.meeting.setEndTime( this.mEndHourEl.value, this.mEndMinEl.value );
        return this.form.checkAndDisplayError( this.mEndHourEl, errors );
    }

    descCheck = () => {
        const errors = this.meeting.setDescription( this.mDescEl.value );
        return this.form.checkAndDisplayError( this.mDescEl, errors );
    }

    membersCheck = () => {
        const emails = this.mPartiEl.value.replace( / /g, '' ).split( ',' );
        const errors = this.meeting.setAttendees( emails );
        return this.form.checkAndDisplayError( this.mPartiEl, errors );
    }

    addMeetingValidate = () => {
        if ( this.nameCheck() && this.dateCheck() && this.endTimeCheck() && this.descCheck() && this.membersCheck() ) {
            return true;
        }

        return false;
    }

    addNewMeetingToApp = async () => {
        const emails = this.mPartiEl.value.replace( / /g, '' ).split( ',' );
        if ( this.addMeetingValidate() ) {
            try {
                await this.meetingsModule.addNewMeeting( {

                    name: this.mNameEl.value,
                    description: this.mDescEl.value,
                    date: this.mDateEl.value,
                    startHour: this.mStartHourEl.value,
                    startMin: this.mStartMinEl.value,
                    endHour: this.mEndHourEl.value,
                    endMin: this.mEndMinEl.value,
                    mailIds: emails

                } );
                this.alert.showSuccessMessage( 'Meeting added Successfully', 5 );
            } catch ( error ) {
                this.alert.showErrorMessage( error.message );
            }
        }
    }

    addListeners = () => {
        this.mDateEl.addEventListener( 'change', this.dateCheck );
        this.mNameEl.addEventListener( 'change', this.nameCheck );
        this.mEndHourEl.addEventListener( 'change', this.endTimeCheck );
        this.mEndMinEl.addEventListener( 'change', this.endTimeCheck );
        this.mDescEl.addEventListener( 'change', this.descCheck );
        this.mPartiEl.addEventListener( 'change', this.membersCheck );

        this.addMeetingForm.addEventListener( 'submit', ( event ) => {
            event.preventDefault();
            this.addNewMeetingToApp();
        } );
    }

    init = () => {
        this.addListeners();
    }
}

const page = new AddMeeting();
page.init();
