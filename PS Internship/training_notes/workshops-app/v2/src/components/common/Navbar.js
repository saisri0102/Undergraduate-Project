import Component from '../Component';

class Navbar extends Component {
    renderView() {
        const { links } = this.props;

        const linksStr = links.map(link => (
            `
            <li>
                <a href="${link.href}" class="${link.active ? 'active' : ''}">
                    ${link.text}
                </a>
            </li>
            `
        )).join( '' );

        return `
            <nav class="navbar-main">
                <div class="container nav-wrapper">
                    <ul class="nav nav-desktop">
                        ${linksStr}
                    </ul>
                    <button class="btn-menu btn-icon">
                        <i class="fas fa-bars"></i>
                    </button>
                </div>
                <ul class="nav nav-mobile container hide">
                    ${linksStr}
                </ul>
            </nav>
        `;
    }
}

export default Navbar;