import { Authentication } from './services/auth.js';
import { Alert } from './utils/alert.js';

class Nav {
  authentication = new Authentication();

  alert = new Alert();

  logoutEl = document.querySelectorAll( '.logout' );

  sideNav = document.querySelector( '.sidenav' );

  openNavEl = document.querySelector( '.open-nav' );

  closeNavEl = document.querySelector( '.close-nav-btn' );

  openNav = () => {
      this.sideNav.classList.add( 'width-initial' );
      this.sideNav.classList.remove( 'width-zero' );
  }

  closeNav = () => {
      this.sideNav.classList.remove( 'width-initial' );
      this.sideNav.classList.add( 'width-zero' );
  }

  clearLocalStorage = () => {
      localStorage.clear();
      this.alert.showSuccessMessage( 'Successful logout' );
  }

  addListeners() {
      document.querySelector( '.nav-user-mail' ).innerHTML = this.authentication.getEmail();
      this.logoutEl.forEach( ( event ) => {
          event.addEventListener( 'click', this.clearLocalStorage );
      } );
      this.openNavEl.addEventListener( 'click', this.openNav );
      this.closeNavEl.addEventListener( 'click', this.closeNav );
  }

  init() {
      this.addListeners();
  }
}

const page = new Nav();
page.init();

export {
    Nav
};
