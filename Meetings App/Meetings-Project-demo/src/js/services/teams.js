import makeAjaxRequest from '../utils/ajax.js';

class TeamsModule {
    async getTeams() {
        const teams = await makeAjaxRequest( {
            method: 'GET',
            endpoint: 'teams',
            authenticated: true
        } );

        return teams;
    }

    async addNewTeam( {
        teamName, teamShortName, teamDesc, teamMem
    } ) {
        const body = {
            name: teamName,
            shortName: teamShortName,
            description: teamDesc,
            members: teamMem
        };

        const response = await makeAjaxRequest( {
            method: 'POST',
            endpoint: 'teams',
            body,
            authenticated: true
        } );

        return response;
    }

    async excuseMeFromTeam( teamId ) {
        const response = await makeAjaxRequest( {
            method: 'PATCH',
            endpoint: `teams/${teamId}?action=remove_member`,
            authenticated: true
        } );

        return response;
    }

    async addTeamMember( email, teamId ) {
        const response = await makeAjaxRequest( {
            method: 'PATCH',
            endpoint: `teams/${teamId}?action=add_member&email=${email}`,
            authenticated: true
        } );

        return response;
    }
}

export default TeamsModule;
