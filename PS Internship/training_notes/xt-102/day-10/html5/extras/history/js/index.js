(function() {
    var routes = [
        { path: "/", page: "home" },
        { path: "/contact", page: "contact" },
    ];
    var defaultRoute = { path: "**", page: "404" };

    var page = document.getElementById( 'page' );

    window.addEventListener( 'popstate', function( event ) {
        loadPage( location.pathname );
    });

    function getPageByPath( path ) {
        var route = routes.find(function( route ) {
            return route.path === path;
        });

        if( !route ) {
            return defaultRoute;
        }

        return route;
    }

    function loadPage( path ) {
        var route = getPageByPath( path );
        page.innerHTML = document.getElementById( route.page ).innerHTML;
    }

    var links = Array.prototype.slice.call( document.getElementsByTagName( 'a' ) );

    links.forEach(function( link ) {
        link.addEventListener( 'click', function( event ) {
            event.preventDefault();

            var path = this.getAttribute( 'href' );
            history.pushState( null, '', path );
            loadPage( path );
        });
    });
}());