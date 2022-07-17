function getCalendar() {
    const token = getToken();

    const myHeaders = new Headers();
    myHeaders.append( 'Content-Type', 'application/json' );
    myHeaders.append( 'Authorization', token );

    const requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch( 'https://mymeetingsapp.herokuapp.com/api/calendar?date=2020-10-28', requestOptions )
    .then(async function( response ) {
        if( !response.ok ) {
            const errorResponse = await response.json();
            throw new Error( errorResponse.message );
        }
        
        return response.json();
    });
}

function showCalendar( meetings ) {
    const calendarEl = document.querySelector( '#calendar' );

    for( let meeting of meetings ) {
        // explore Array reduce() to generate this same string of meeting members
         let AttendeesEl = '';
         for( let Attendees of meeting.attendees ) {
            AttendeesEl += `<li>userId: ${Attendees.userId}</li>
            <li>Email: ${Attendees.email}</li>`
        }

        calendarEl.innerHTML += `
            <li class="team">
           
                   <div>Start Time: 
                      <ul>
                        <li>Hours: ${meeting.startTime.hours}</li>
                        <li>Minutes: ${meeting.startTime.minutes}</li>
                      </ul>
                   </div>
                   <div>End Time: 
                      <ul>
                        <li>Hours: ${meeting.endTime.hours}</li>
                        <li>Minutes: ${meeting.endTime.minutes}</li>
                      </ul>
                   </div>
                   <div>Id: ${meeting._id}</div>
                   <div>Name: ${meeting.name}</div>
                   <div>Description: ${meeting.description}</div>
                   <div>Date: ${meeting.date}</div>
                   <div>Attendees: 
                    <ul>${AttendeesEl}</ul>
                   </div>
                    
    
            </li>`
    }
}

function addListeners2() {
    document.querySelector( '#fetch-calendar' ).addEventListener( 'click', async function() {
        fetchAndShowCalendar();
    })
    

}

async function fetchAndShowCalendar() {
    try {
        const teams = await getCalendar();
        showCalendar( teams );
        addListeners2();
    } catch( error ) {
        alert( 'Unable to fetch and show Meetings you are part of' );
    }
}

fetchAndShowCalendar();