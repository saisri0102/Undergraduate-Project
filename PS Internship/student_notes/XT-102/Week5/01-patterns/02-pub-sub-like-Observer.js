/**
 * Publisher-Subscriber Pattern (pub-sub)
 * It is like another pattern called Observer
 * 
 * Why this pattern?
 * It enables communication between different pieces (eg. modules) of your application, while keeping the code loosely-coupled
 * Tightly-coupled code implies lot of communication between dependent modules - usually a sign of bad design
 *  - Changes in one module affect a lot of other modules
 */
const EventQueue = (function() {
    const events = {
        // eventName: array of subscriber functions
        // 'fetched_meetings': [ /* array of functions to call */ ]
    };

    return {
        // also called trigger
        // called by publisher of the event
        publish: function( eventName, data ) {
            const subscribers = events[eventName];

            if( subscribers ) {
                subscribers.forEach( subscriber => subscriber( data ) );
            }
        },

        // also called on, addListener etc.
        // called by the subscribers of the event
        subscribe: function( eventName, callback ) {
            if( !events[eventName] ) {
                events[eventName] = [];
            }

            events[eventName].push( callback );
        }
    };
}());

const AppEvents = {
    FETCHED_MEETINGS: 'fetched_meetings'
};

// services/meetings.js
function fetchMeetings() {
    // fetch meetings from the backend (takes some time - is async)

    // once meetings are fetched
    const meetings = [ { name: 'Project presentation' }, { name: 'Marketing campagin' } ];
    console.log( 'publishing an event called fetched_metings with data = ', meetings );
    EventQueue.publish( AppEvents.FETCHED_MEETINGS, meetings );
}

// pages/meetings.js
EventQueue.subscribe( AppEvents.FETCHED_MEETINGS, function( meetings ) {
    console.log( 'data passed to first subscriber for fetched_meetings : ', meetings );

    // show the meetings etc.
});

// app-notification.js
EventQueue.subscribe( AppEvents.FETCHED_MEETINGS, function( meetings ) {
    console.log( 'data passed to second subscriber for fetched_meetings : ', meetings );

    // show the notification that meeting is fetched
});

fetchMeetings();