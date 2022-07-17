// Sometimes, we are unable to defined the object at compile-time - to create the object we may require some more data available when the application runs
const dashboard = (function() {
    let instance;

    function init( options ) {
        // private property
        const widgets = options.widgets;

        // similar to above private methods may be defined

        // this will be the public API (object that is returned)
        const dashboard = {
            addWidget: function( widget ) {
                widgets.push( widget );
            },
            showWidgets: function() {
                console.log( widgets );
            }
        };

        return dashboard;
    }

    return {
        getInstance: function( options ) {
            if( !instance ) {
                instance = init( options );
            }
            
            return instance;
        }
    };
}());

// creates an returns an object
dashboard.getInstance( { widgets: [ /* has initial set of widgets to load and show */ ] } );

// later on when we want to add widgets, dashbaord.getInstance() gives us the initially created object
dashboard.getInstance().addWidget( { name: 'Team progress chart' } );
dashboard.getInstance().addWidget( { name: 'Burndown chart for sprints' } );

dashboard.getInstance().showWidgets();