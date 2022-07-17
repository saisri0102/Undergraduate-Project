// What if we want to call getMeetings() from another .js file?
// We need to have global variable(s) - since code is in different scripts

var MeetingsApp = (function( Namespace ) {
    function Meeting( name, description ) {
        this.name = name;
        this.description = description;
    }

    function getMeetings() {

    }

    function searchMeetings() {

    }

    Namespace.MeetingsModule = {
        Meeting: Meeting,
        getMeetings: getMeetings,
        searchMeetings: searchMeetings
    };

    return Namespace;
}( MeetingsApp || {} ))