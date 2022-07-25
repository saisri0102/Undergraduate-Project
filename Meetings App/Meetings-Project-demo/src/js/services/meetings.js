/* eslint-disable class-methods-use-this */
// eslint-disable-next-line import/extensions
import makeAjaxRequest from '../utils/ajax.js';

class MeetingsModule {
    async getMeetings( date, keywords ) {
        let meetings;
        try {
            meetings = await makeAjaxRequest( {
                method: 'GET',
                endpoint: `meetings?period=${date}&search=${keywords}`,
                authenticated: true
            } );

            return meetings;
        } catch ( error ) {
            throw new Error( error.message );
        }
    }

    async addNewMeeting( {
        name, desc, date, startHour, startMin, endHour, endMin, mailIds
    } ) {
        const body = {
            name,
            description: desc,
            date,
            startTime: {
                hours: startHour,
                minutes: startMin
            },
            endTime: {
                hours: endHour,
                minutes: endMin
            },
            attendees: mailIds
        };

        let meetings;
        try {
            meetings = await makeAjaxRequest( {
                method: 'POST',
                endpoint: 'meetings',
                body,
                authenticated: true
            } );

            return meetings;
        } catch ( error ) {
            throw new Error( error.message );
        }
    }

    async addMeetingMember( email, meetingId ) {
        let response;
        try {
            response = await makeAjaxRequest( {
                method: 'PATCH',
                endpoint: `meetings/${meetingId}?action=add_attendee&email=${email}`,
                authenticated: true
            } );

            return response;
        } catch ( error ) {
            throw new Error( error.message );
        }
    }

    async excuseMeFromMeeting( meetingId ) {
        let response;
        try {
            response = await makeAjaxRequest( {
                method: 'PATCH',
                endpoint: `meetings/${meetingId}?action=remove_attendee`,
                authenticated: true
            } );

            return response;
        } catch ( error ) {
            throw new Error( error.message );
        }
    }
}

export {
    MeetingsModule
};
