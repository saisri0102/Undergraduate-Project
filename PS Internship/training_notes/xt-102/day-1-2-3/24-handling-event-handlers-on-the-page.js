// What if we want to call getMeetings() from another .js file?
// We need to have global variable(s) - since code is in different scripts

var MeetingsApp = (function( Namespace ) {
    function Team( name, description ) {
        this.name = name;
        this.description = description;
    }

    function showTeams() {
        element.innerHTML = `
            <div class="team" data-team-id=${team._id}>
            
                <select></select>
                <span></span>
                <button class="btn-add-member">Add member</button>
            </div>
        `;

        addListeners();
    }

    function getTeams() {

    }

    function addMember( member ) {
        
    }

    function addListeners() {
        function onBtnAddMemberClick( event ) {
            console.log( event.target ); // button
            console.log( this ); // button

            const teamEl = this.closest( '.team' );
            const teamId = teamEl.getAttribute( 'data-team-id' );
            const selectedMember = teamEl.querySelector( 'select' ).value;
        }

        document.querySelectorAll( '.btn-add-member' ).forEach(function( button ) {
            button.addEventListener( 'click', onBtnAddMemberClick );
        });
    }

    Namespace.TeamsModule = {
        Team: Team,
        getTeams: getTeams,
        addMember: addMember
    };

    return Namespace;
}( MeetingsApp || {} ))