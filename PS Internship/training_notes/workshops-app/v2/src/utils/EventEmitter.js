class EventEmitter {
    events = {};

    publish( eventName, data ) {
        const { events } = this;
        
        const subscribers = events[eventName];

        if( subscribers ) {
            subscribers.forEach( subscriber => subscriber( data ) );
        }
    }

    subscribe( eventName, callback ) {
        const { events } = this;

        if( !events[eventName] ) {
            events[eventName] = [];
        }

        events[eventName].push( callback );
    }
}

export default EventEmitter;