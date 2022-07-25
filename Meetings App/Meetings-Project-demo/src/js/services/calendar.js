import makeAjaxRequest from '../utils/ajax.js';

class CalendarModule {
    async getCalendar( urlDate ) {
        let meetings;
        try {
            meetings = await makeAjaxRequest( {
                method: 'GET',
                endpoint: `calendar?date=${urlDate}`,
                authenticated: true
            } );

            return meetings;
        } catch ( error ) {
            throw new Error( error.message );
        }
    }
}
export default CalendarModule;
