function getTeams() {
    const token = getToken();

    const myHeaders = new Headers();
    myHeaders.append( 'Content-Type', 'application/json' );
    myHeaders.append( 'Authorization', token );

    const requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch( 'https://mymeetingsapp.herokuapp.com/api/teams', requestOptions )
        .then(async function( response ) {
            if( !response.ok ) {
                const errorResponse = await response.json();
                throw new Error( errorResponse.message );
            }
            
            return response.json();
        });
}

function showTeams( teams ) {
    const teamsEl = document.querySelector( '#teams' );

    for( let team of teams ) {
        // explore Array reduce() to generate this same string of team members
        let teamMembersEls = '';
        for( let member of team.members ) {
            teamMembersEls += `<li>${member.email}</li>`
        }

        teamsEl.innerHTML += `
            <li class="team" data-team-id="${team._id}">
                <div>Name: ${team.name}</div>
                <div>Short name: @${team.shortName}</div>
                <div>Description: ${team.description}</div>
                <ul>${teamMembersEls}</ul>
                <select></select>
                <button class="add-member">add member</button>
            </li>`
    }
}

// sends request to backend to add selected member for selected team
function addMember( event ) {

}

function addListeners() {
    document.querySelector( '#fetch-teams' ).addEventListener( 'click', async function() {
        fetchAndShowTeams();
    })
    
    document.querySelectorAll( 'button.add-member' ).forEach(function( button ) {
        button.addEventListener( 'click', addMember );

        const select = button.previousElementSibling;
        
        // expore closest()
        const teamId = button.closest( '.team' ).getAttribute( 'data-team-id' );
    });
}

async function fetchAndShowTeams() {
    try {
        const teams = await getTeams();
        showTeams( teams );
        addListeners();
    } catch( error ) {
        alert( 'Unable to fetch and show teams you are part of' );
    }
}

fetchAndShowTeams();