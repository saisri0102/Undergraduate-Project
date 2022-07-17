import $ from 'jquery';

import 'bootstrap/scss/bootstrap.scss';

class HomePage {
    render() {
        $( '#root' ).html(
            `
                <div class="container my-4">
                    <nav>
                        <a href="/index.html">Home</a>
                        <a href="/workshops-list.html">Workshops List</a>
                    </nav>
                    <h1>Workshops App</h1>
                    <hr />
                    <p>
                        Welcome to Workshops App. You can view details of technical workshops happening in nearby places.
                    </p>
                </div>
            `
        );
    }

    init() {
        this.render();
    }
}

const homePage = new HomePage();
homePage.init();