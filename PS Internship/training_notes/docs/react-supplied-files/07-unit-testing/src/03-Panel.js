import React from 'react';

function PanelHeading( props ) {
    return <div className="panel-heading" onClick={props.togglePanelState}>{props.heading}</div>
}

function PanelBody( props ) {
    return props.isOpen ? <div className="panel-body">{props.children}</div> : null;
}

class Panel extends React.Component {
    constructor( props ) {
        super( props );

        this.state = {
            isOpen: true
        };
    }

    toggleState = () => {
        this.setState(curState => ({
            isOpen: !curState.isOpen
        }));
    }

    render() {
        return (
            <div className="container">
                <div className="panel panel-primary">
                    <PanelHeading heading={this.props.heading} togglePanelState={this.toggleState} />
                    <PanelBody isOpen={this.state.isOpen}>
                        {this.props.children}
                    </PanelBody>
                </div>
            </div>
        )
    }
}

Panel.defaultProps = {
    heading: 'No heading'
};

export default Panel;