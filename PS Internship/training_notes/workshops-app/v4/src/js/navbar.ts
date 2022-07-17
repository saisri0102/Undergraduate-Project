class Navbar {
    navMobile = document.querySelector( '.nav-mobile' ) as HTMLElement;

    btnMenu = document.querySelector( '.btn-menu' ) as HTMLElement;

    onClickBtnMenu = () => {
        this.navMobile.classList.toggle( 'hide' );
    }

    addListeners() {
        this.btnMenu.addEventListener( 'click', this.onClickBtnMenu );
    }

    init() {
        this.addListeners();
    }
}

const navbar = new Navbar();
navbar.init();

export default Navbar;
