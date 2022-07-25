import { UsersList } from '../js/services/users.js';
import { Alert } from '../js/utils/alert.js';
import TeamsModule from '../js/services/teams.js';
import Team from '../js/models/team.js';
import User from '../js/models/user.js';
// eslint-disable-next-line no-unused-vars
import { Nav } from '../js/nav.js';

import './teams.scss';
import '../styles/scss/form.scss';
import '../styles/scss/nav.scss';
import '../styles/scss/notification.scss';
import '../styles/scss/utils.scss';

class TeamPage {
    teamsEl = document.querySelector( '#teams-container' );

    newTeamEl = document.querySelector( '#new-team-wrapper' );

    usersList = new UsersList();

    alert = new Alert();

    teamsModule = new TeamsModule();

    isUserPresent( mails, email ) {
        const errors = [];
        if ( email === '' ) {
            errors.push( 'Please select a member ' );
        } else if ( mails.includes( email ) ) {
            errors.push( `${email} is already a member` );
        }

        return errors;
    }

    async addMember( event ) {
        const teamContainer = event.closest( '.team-wrapper' );
        const emailSelect = teamContainer.querySelector( '.members-select' );
        const email = emailSelect.value;
        const selectError = teamContainer.querySelector( '.select-team-error' );
        const membersEmails = teamContainer.querySelector( '.members-mails' );
        const mails = membersEmails.innerHTML;
        const teamId = teamContainer.getAttribute( 'data-team-id' );

        const errors = this.isUserPresent( mails, email );
        const errorsLength = errors.length;
        if ( errorsLength !== 0 ) {
            selectError.innerHTML = errors.join( ',' );
            emailSelect.focus();
            return;
        }

        selectError.innerHTML = '';

        try {
            await this.teamsModule.addTeamMember( email, teamId );
            membersEmails.innerHTML += `${email}`;
            this.alert.showSuccessMessage( 'Member added sucessfully', 3 );
        } catch ( error ) {
            this.alert.showErrorMessage( error.message );
        }
    }

    excuseMe = async ( event ) => {
        const teamContainer = event.closest( '.team-wrapper' );
        const teamId = teamContainer.getAttribute( 'data-team-id' );

        try {
            await this.teamsModule.excuseMeFromTeam( teamId );
            teamContainer.classList.add( 'hide' );
            this.alert.showSuccessMessage( 'Left from the team successfully', 5 );
        } catch ( error ) {
            this.alert.showErrorMessage( error.message );
        }
    }

    createTeamCard( team, users ) {
        let teamMembersEls = '';
        for ( const member of team.members ) {
            teamMembersEls += `${member.email}, `;
        }
        let userEls = '';
        for ( const user of users ) {
            userEls += `<option value="${user.email}">${user.email}</option>`;
        }

        const newCard = document.createElement( 'div' );
        // eslint-disable-next-line no-underscore-dangle
        newCard.setAttribute( 'data-team-id', team._id );
        newCard.classList.add( 'margin-top-1' );
        newCard.classList.add( 'team-wrapper' );
        newCard.tabIndex = 0;
        newCard.innerHTML

            += `
        <div>
            <div class=" margin-bottom-1 team-title text-bold">${team.name}</div>
            <div class=" margin-bottom-1 team-id text-bold">@${team.shortName}</div>
            <div class=" margin-bottom-1 team-description">${team.description}</div>
            <button   class=" btn-danger excuse-me" >Excuse yourself</button>
        </div>

        <hr/>

        <div class="margin-top-1">
            <div class="d-inline-block margin-bottom-1 ">
                <span class="text-bold">Members: </span>
                <div class="members-mails d-inline-block">
                ${teamMembersEls}
                </div>
            </div>
            <div>
            <form method="post"  action="" name="add-team-member" class="add-team-member">
                <label for="meeting1-members" class="sr-only">Select Team Members</label>
                <select name=" " id="meeting1-members" class="members-select" >
                    <option value="">Select member</option>
                    ${userEls}
                </select>
                <button class=" btn-primary" >Add</button>
                <div class="error-help select-team-error"></div>
            </form>
            </div>
        </div>
        
        `;

        this.teamsEl.insertBefore( newCard, this.newTeamEl );
    }

    showTeams( teams, users ) {
        for ( const team of teams ) {
            this.createTeamCard( team, users );
        }
    }

    async fetchAndShowTeams() {
        try {
            const teamsRaw = await this.teamsModule.getTeams();
            const teams = teamsRaw.map( ( team ) => new Team( team ) );
            if ( teams.length === 0 ) {
                this.alert.showInfoMessage( 'There are no teams you are part of', 2 );
            } else {
                this.alert.showInfoMessage( 'Loading Teams', 1 );
            }
            const usersRaw = await this.usersList.getUsers();
            const users = usersRaw.map( ( user ) => new User( user ) );
            this.showTeams( teams, users );
        } catch ( error ) {
            this.alert.showErrorMessage( error.message );
        }
    }

    addListeners() {
        document.querySelectorAll( '.add-team-member' ).forEach( ( form ) => {
            form.addEventListener( 'submit', ( event ) => {
                event.preventDefault();
                this.addMember( form );
            } );
        } );

        const excuseBtn = document.querySelectorAll( '.excuse-me' );
        excuseBtn.forEach( ( btn ) => {
            btn.addEventListener( 'click', () => {
                this.excuseMe( btn );
            } );
        } );
    }

    async init() {
        await this.fetchAndShowTeams();
        this.addListeners();
    }
}

const page = new TeamPage();
page.init();

export default TeamPage;
