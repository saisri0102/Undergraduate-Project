import { Alert } from '../js/utils/alert.js';
import { UsersList } from '../js/services/users.js';
import { Form } from '../js/utils/form.js';
import TeamsModule from '../js/services/teams.js';
import TeamPage from './teams.js';
import Team from '../js/models/team.js';
// eslint-disable-next-line no-unused-vars
import { Nav } from '../js/nav.js';

class AddTeam {
    alert = new Alert();

    usersList = new UsersList();

    teamsModule = new TeamsModule();

    teamPage = new TeamPage();

    form = new Form();

    team = new Team();

    /* Form and its elements */
    teamFormEl = document.querySelector( '#team-form' );

    teamNameEl = this.teamFormEl['team-name'];

    teamSNameEl = this.teamFormEl['team-short-name'];

    teamDescEl = this.teamFormEl['team-description'];

    teamMemEl = this.teamFormEl['team-members'];

    cancelFormBtnEl = this.teamFormEl['cancel-form'];

    addNewTeamBtnEl = this.teamFormEl['add-new-team'];

    addTeamPlusEl = document.querySelector( '.add-team-link' );

    plusElWrapper = document.querySelector( '.add-symbol-wrapper' );

    nameCheck = () => {
        const errors = this.team.setTeamName( this.teamNameEl.value );
        return this.form.checkAndDisplayError( this.teamNameEl, errors );
    }

    shortNameCheck = () => {
        const errors = this.team.setTeamShortName( this.teamSNameEl.value );
        return this.form.checkAndDisplayError( this.teamSNameEl, errors );
    }

    descCheck = () => {
        const errors = this.team.setTeamDescription( this.teamDescEl.value );
        return this.form.checkAndDisplayError( this.teamDescEl, errors );
    }

    membersCheck = () => {
        const members = this.teamMemEl.value.replace( / /g, '' ).split( ',' );
        const errors = this.team.setTeamMembers( members );
        return this.form.checkAndDisplayError( this.teamMemEl, errors );
    }

    addTeamValidate() {
        if ( this.nameCheck()
             && this.shortNameCheck()
             && this.descCheck()
             && this.membersCheck()
        ) {
            return true;
        }

        return false;
    }

    appendTeam( newTeam, users ) {
        this.teamPage.createTeamCard( newTeam, users );

        this.teamFormEl.classList.toggle( 'hide' );
        this.plusElWrapper.classList.toggle( 'hide' );
    }

    addNewTeamToApp = async () => {
        const mailIds = this.teamMemEl.value.replace( / /g, '' ).split( ',' );

        if ( !this.addTeamValidate() ) {
            return;
        }

        try {
            const newTeam = await this.teamsModule.addNewTeam( {
                teamName: this.teamNameEl.value,
                teamShortName: this.teamSNameEl.value,
                teamDesc: this.teamDescEl.value,
                teamMem: mailIds
            } );

            this.alert.showSuccessMessage( 'Team created Successfully', 3 );
            const users = await this.usersList.getUsers();
            this.appendTeam( newTeam, users );
        } catch ( error ) {
            this.alert.showErrorMessage( error.message );
        }
    }

    showForm = () => {
        this.teamFormEl.classList.toggle( 'hide' );
        this.plusElWrapper.classList.toggle( 'hide' );
    }

    cancelForm = () => {
        this.teamFormEl.classList.toggle( 'hide' );
        this.plusElWrapper.classList.toggle( 'hide' );
    }

    addListeners() {
        this.teamNameEl.addEventListener( 'change', this.nameCheck );
        this.teamSNameEl.addEventListener( 'change', this.shortNameCheck );
        this.teamDescEl.addEventListener( 'change', this.descCheck );
        this.teamMemEl.addEventListener( 'change', this.membersCheck );

        this.addTeamPlusEl.addEventListener( 'click', this.showForm );
        this.cancelFormBtnEl.addEventListener( 'click', ( event ) => {
            event.preventDefault();
            this.cancelForm();
        } );
        this.addNewTeamBtnEl.addEventListener( 'click', ( event ) => {
            event.preventDefault();
            this.addNewTeamToApp();
        } );
    }

    init() {
        this.addListeners();
    }
}
const addTeamPage = new AddTeam();
addTeamPage.init();
