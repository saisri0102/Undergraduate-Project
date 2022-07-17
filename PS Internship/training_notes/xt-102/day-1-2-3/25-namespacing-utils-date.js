// take care to use existing MeetingsApp object. If it does not already exist, create one
var MeetingsApp = MeetingsApp || {};

// take no
MeetingsApp.Utils = MeetingsApp.Utils || {};
MeetingsApp.Utils.Date = MeetingsApp.Utils.Date || {};

// date related utitlities
MeetingsApp.Utils.Date.formatDate = function( isoDateStr ) {
    return new Date( isoDateStr ).toDateString();
};