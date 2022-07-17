class Component {
    constructor( props, tplSelector, container = null ) {
        this.props = props;
        this.compiledTpl = Handlebars.compile( document.querySelector( tplSelector ).innerHTML );
        this.container = container;
    }

    setContainer( container ) {
        this.container = container;
    }

    renderView() {
        this.container.innerHTML = this.compiledTpl( this.props );
    }
}

export default Component;