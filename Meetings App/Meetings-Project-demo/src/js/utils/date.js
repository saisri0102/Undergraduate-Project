class FormatDate {
    timeFormat( time ) {
        if ( time < 10 ) {
            return ( `0${time}` );
        }

        return time;
    }

    dateFormat( dateISO ) {
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        const index = parseInt( dateISO.substr( 5, 2 ), 10 ) - 1;
        const date = `${dateISO.substr( 8, 2 )} ${months[index]} ${dateISO.substr( 0, 4 )}`;
        return date;
    }

    setDayName( dayNum ) {
        const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        return dayNames[dayNum];
    }
}

export {
    FormatDate
};
