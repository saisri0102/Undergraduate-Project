// What if we want to call getMeetings() from another .js file?
// We need to have global variable(s) - since code is in different scripts

var MeetingsApp = (function( Namespace ) {
    function Team( name, description ) {
        this.name = name;
        this.description = description;
    }

    function getTeams() {

    }

    function addMember( member ) {
    
    }

    Namespace.TeamsModule = {
        Team: Team,
        getTeams: getTeams,
        addMember: addMember
    };

    return Namespace;
}( MeetingsApp || {} ))