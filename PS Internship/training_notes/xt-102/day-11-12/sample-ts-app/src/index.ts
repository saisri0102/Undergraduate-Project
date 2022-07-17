import IWorkshop from './IWorkshop';

$(document).ready(function() {
    const fetchWorkshops = async () => {
        const response = await fetch( 'https://workshops-server.herokuapp.com/workshops' );

        if( !response.ok ) {
            throw new Error( 'Something went wrong' );
        }

        return response.json();
    }

    const fetchAndShowWorkshops = async () => {
        try {
            const workshopsList : JQuery<HTMLUListElement> = $( '#workshops-list' );

            const workshops : IWorkshop[] = await fetchWorkshops();

            workshops.forEach( workshop => {
                workshopsList.eq(0).append( $( `<li>${workshop.name}</li>` ) );
            });
        } catch( err ) {
            alert( err.message );
        }
    }

    fetchAndShowWorkshops();
});