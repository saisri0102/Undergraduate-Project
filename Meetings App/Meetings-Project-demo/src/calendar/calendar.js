import CalendarModule from '../js/services/calendar.js';
import { FormatDate } from '../js/utils/date.js';
import { Alert } from '../js/utils/alert.js';
// eslint-disable-next-line no-unused-vars
import { Nav } from '../js/nav.js';

import '../styles/scss/utils.scss';
import '../styles/scss/nav.scss';
import '../styles/scss/notification.scss';
import './calendar.scss';

class Calendar {
    calendarModule = new CalendarModule();

    formatDate = new FormatDate();

    alert = new Alert();

    dateInputEl = document.querySelector( ' #cal-datepicker ' );

    dateEl = document.querySelector( ' #cal-date-text ' );

    dayEl = document.querySelector( ' #day-name ' );

    timeDifference( startHour, startMin, endHour, endMin ) {
        const startTime = ( startHour * 60 + startMin );
        const endTime = ( endHour * 60 + endMin );
        let margin;

        if ( endMin === 0 ) {
            margin = Math.abs( endHour - startHour - 1 ) * 5;
        } else {
            margin = Math.abs( endHour - startHour ) * 5;
        }
        const timeDiff = ( endTime - startTime ) + margin;
        return timeDiff;
    }

    createMeetingCard( meetingsList, meeting, membersEmail ) {
        let id;
        let description;
        let name;
        let startHour;
        let startMin;
        let endHour;
        let endMin;
        let height;
        let meetingDate;
        let top;

        try {
        // eslint-disable-next-line no-underscore-dangle
            id = meeting._id;
            name = meeting.name;
            description = meeting.description;
            startHour = meeting.startTime.hours;
            startMin = meeting.startTime.minutes;
            endHour = meeting.endTime.hours;
            endMin = meeting.endTime.minutes;
            height = this.timeDifference( startHour, startMin, endHour, endMin );
            meetingDate = ( meeting.date ).substr( 0, 10 );
            top = `${( startHour * ( 60 + 5 ) ) + startMin}px`;
        } catch ( error ) {
            this.alert.showErrorMessage( error.message );
        }

        const meetingBlock = document.createElement( 'div' );
        meetingBlock.className = 'meeting-block';
        meetingBlock.style.top = top;
        meetingBlock.style.height = `${height}px`;

        const meetingContent = document.createElement( 'div' );
        meetingContent.style.maxHeight = `${height - 5}px`;
        meetingContent.style.overflowY = 'hidden';

        meetingContent.innerHTML = `   <div class="text-bold">${name}</div>
                <hr>
                <div>Attendees: ${membersEmail} </div>
            `;

        const tooltipContent = document.createElement( 'div' );
        tooltipContent.className = 'tooltip';

        tooltipContent.innerHTML = `
                <div>
                    <span>Meeting Id: </span> ${id}
                    <span>Meeting Name</span>: ${name}
                </div>
                <div>
                    <span>Description: </span>${description}
                </div>
                <div>
                    <span>Meeting Date</span>: ${meetingDate}
                </div>
                
                <div>
                    <span>Start Time: </span> ${this.formatDate.timeFormat( startHour )} :  ${this.formatDate.timeFormat( startMin )}
                </div>

                <div>
                    <span>End Time: </span> ${this.formatDate.timeFormat( endHour )} :  ${this.formatDate.timeFormat( endMin )}
                </div>
                <div>
                    <span>Attendees: <span>${membersEmail}
                </div>
             `;

        meetingBlock.appendChild( meetingContent );
        meetingBlock.appendChild( tooltipContent );
        meetingsList.appendChild( meetingBlock );
    }

    showCalendar( meetings ) {
        const meetingsList = document.querySelector( '.calendar-meeting-container' );
        meetingsList.innerHTML = '';
        if ( meetings.length === 0 ) {
            this.alert.showInfoMessage( 'No calender events on the selected date', 2 );
        } else {
            this.alert.showInfoMessage( 'Loading Events', 2 );
        }

        for ( const meeting of meetings ) {
            let membersEmail = '';
            for ( const member of meeting.attendees ) {
                membersEmail += `${member.email}, `;
            }
            this.createMeetingCard( meetingsList, meeting, membersEmail );
        }
    }

    async fetchAndShowCalendar( urlDate ) {
        let meetings;
        try {
            meetings = await this.calendarModule.getCalendar( urlDate );
            this.showCalendar( meetings );
        } catch ( error ) {
            this.alert.showErrorMessage( error.message, 20 );
        }
    }

    showDate = () => {
        const date = new Date( this.dateInputEl.value );
        const dateISO = date.toISOString();
        this.dateEl.innerHTML = this.formatDate.dateFormat( dateISO );
        this.dayEl.innerHTML = this.formatDate.setDayName( date.getDay() );
        const urlDate = this.dateInputEl.value;
        this.fetchAndShowCalendar( urlDate );
    }

    setTodayDate() {
        const todayDate = new Date();
        const yyyy = todayDate.getFullYear();
        const mm = this.formatDate.timeFormat( todayDate.getMonth() + 1 );
        const dd = this.formatDate.timeFormat( todayDate.getDate() );
        this.dateInputEl.value = `${yyyy}-${mm}-${dd}`;
        this.showDate();
    }

    addListeners() {
        this.dateInputEl.addEventListener( 'change', this.showDate );
    }

    init() {
        this.setTodayDate();
        this.addListeners();
    }
}

const page = new Calendar();
page.init();
