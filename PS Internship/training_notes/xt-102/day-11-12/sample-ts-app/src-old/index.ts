import IWorkshop from './IWorkshop';

(function() {
    const fetchWorkshops = async () => {
        const response = await fetch( 'https://workshops-server.herokuapp.com/workshops' );

        if( !response.ok ) {
            throw new Error( 'Something went wrong' );
        }

        return response.json();
    }

    const fetchAndShowWorkshops = async () => {
        try {
            const workshopsList : NodeListOf<HTMLUListElement> = document.querySelectorAll( '#workshops-list' );

            const workshops : IWorkshop[] = await fetchWorkshops();


            workshops.forEach( workshop => {
                workshopsList[0].innerHTML += `<li>${workshop.name}</li>`;
            });
        } catch( err ) {
            alert( err.message );
        }
    }

    fetchAndShowWorkshops();
}())