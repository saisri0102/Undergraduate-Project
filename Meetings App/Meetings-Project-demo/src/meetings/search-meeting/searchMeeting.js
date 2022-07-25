import { Alert } from '../../js/utils/alert.js';
import { UsersList } from '../../js/services/users.js';
import { MeetingsModule } from '../../js/services/meetings.js';
import { FormatDate } from '../../js/utils/date.js';
import Meeting from '../../js/models/meeting.js';
import User from '../../js/models/user.js';
// eslint-disable-next-line no-unused-vars
import { Nav } from '../../js/nav.js';

import '../../styles/scss/utils.scss';
import '../../styles/scss/nav.scss';
import '../../styles/scss/notification.scss';
import '../../styles/scss/form.scss';
import '../meetings.scss';

class SearchMeeting {
  alert = new Alert();

  meetingsModule = new MeetingsModule();

  formatDate = new FormatDate();

  meetingsModule = new MeetingsModule();

  usersList = new UsersList();

  searchForm = document.querySelector( '#search-form' );

  searchDate = this.searchForm['search-date'];

  searchKeywords = this.searchForm['search-keywords'];

  async excuseMe( event ) {
      const meetingContainer = event.closest( '.search-result-wrapper' );
      const meetingId = meetingContainer.getAttribute( 'data-meeting-id' );
      try {
          await this.meetingsModule.excuseMeFromMeeting( meetingId );
          meetingContainer.classList.add( 'hide' );
          this.alert.showSuccessMessage( 'Left from the meeting successfully', 10 );
      } catch ( error ) {
          this.alert.showErrorMessage( error.message );
      }
  }

  isUserPresent( mails, email ) {
      const errors = [];
      if ( !email ) {
          errors.push( 'Please select a member ' );
      } else if ( mails.includes( email ) ) {
          errors.push( `${email} is already a member` );
      }

      return errors;
  }

  async addMember( event ) {
      const meetingContainer = event.closest( '.search-result-wrapper' );
      const emailSelect = meetingContainer.querySelector( 'select' );
      const email = emailSelect.value;
      const selectError = meetingContainer.querySelector( '.select-error' );
      const meetingId = meetingContainer.getAttribute( 'data-meeting-id' );
      const membersEmails = meetingContainer.querySelector( '.members-mails' );
      const mails = membersEmails.innerHTML;

      const errors = this.isUserPresent( mails, email );
      const errorsLength = errors.length;
      if ( errorsLength ) {
          selectError.innerHTML = errors.join( ',' );
          emailSelect.focus();
          return;
      }

      selectError.innerHTML = '';

      try {
          await this.meetingsModule.addMeetingMember( email, meetingId );
          membersEmails.innerHTML += `${email}`;
          this.alert.showSuccessMessage( 'Member added sucessfully', 3 );
      } catch ( error ) {
          this.alert.showErrorMessage( error.message );
      }
  }

  async createMeetingCard( searchResultSelector, meeting, users ) {
      const date = this.formatDate.dateFormat( meeting.date );
      const startHour = this.formatDate.timeFormat( meeting.startTime.hours );
      const startMinutes = this.formatDate.timeFormat( meeting.startTime.minutes );
      const endHour = this.formatDate.timeFormat( meeting.endTime.hours );
      const endMinutes = this.formatDate.timeFormat( meeting.endTime.minutes );

      let membersEmail = '';
      for ( const member of meeting.attendees ) {
          membersEmail += `${member.email}, `;
      }

      try {
          let userEls = '';
          for ( const user of users ) {
              userEls += `<option value="${user.email}">${user.email}</option>`;
          }

          searchResultSelector.innerHTML

        // eslint-disable-next-line no-underscore-dangle
        += `<div class="margin-top-1 search-result-wrapper" tabindex="0" data-meeting-id =${meeting._id}>
                <div>     
                    <p class=" d-inline-block date-text">
                        <time datetime="${date}">${date}</time>
                    </p>
                    <p class=" d-inline-block time-text">
                        <time datetime="${date} ${startHour}:${startMinutes}">${startHour}:${startMinutes}</time>-<time datetime="${date} ${endHour}:${endMinutes}">${endHour}:${endMinutes}</time>
                    </p>
                    <p>${meeting.name}</p>
                    <button class=" btn-danger excuse-me" ">Excuse yourself</button>
                </div>
                <hr/>
                
                <div class="margin-top-1 meeting-wrapper" >
                
                    
                    <div class="d-inline-block  members-mails"><span class="text-bold">Members: </span>${membersEmail}</div>
                        
                    <div>
                        <form action="" method="post" class="add-meeting-member">
                            <label for="meeting2-members" class="sr-only">Select Members for the meeting</label>
                            <select name="members" id="meeting2-members" class="members-select">
                                <option value="">Select member</option>
                            ${userEls}
                            </select>
                            
                            <button  class="btn-primary" ">Add</button>
                            <div class="error-help select-error"></div>
                        </form>
                    </div>
                </div>
            </div>`;
      } catch ( error ) {
          this.alert.showErrorMessage( error.message );
      }
  }

  showMeetings( meetings, users ) {
      const searchResult = document.querySelector( '#search-result' );
      searchResult.innerHTML = '';
      if ( !meetings.length ) {
          this.alert.showInfoMessage( 'No meetings shown for you search', 2 );
      } else {
          this.alert.showInfoMessage( 'Loading your meetings', 2 );
      }
      for ( const meeting of meetings ) {
          this.createMeetingCard( searchResult, meeting, users );
      }
  }

  async fetchandShowMeetings() {
      let meetings;
      try {
          const meetingsRaw = await this.meetingsModule.getMeetings(
              this.searchDate.value,
              this.searchKeywords.value
          );
          const usersRaw = await this.usersList.getUsers();
          meetings = meetingsRaw.map( ( meet ) => new Meeting( meet ) );
          const users = usersRaw.map( ( user ) => new User( user ) );
          await this.showMeetings( meetings, users );
      } catch ( error ) {
          this.alert.showErrorMessage( error.message );
      }
  }

  addListeners() {
      const addMemBtn = document.querySelectorAll( '.add-meeting-member' );
      addMemBtn.forEach( ( form ) => {
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

  init() {
      this.searchForm.addEventListener( 'submit', async ( event ) => {
          event.preventDefault();
          await this.fetchandShowMeetings();
          this.addListeners();
      } );
  }
}

const searchMeeting = new SearchMeeting();
searchMeeting.init();
