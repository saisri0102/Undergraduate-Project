async function getWorkshops() {
    return makeAjaxRequest({
        method: 'GET',
        endpoint: 'workshops',
        authenticated: true
    });
}

async function getWorkshopById( id ) {
    return makeAjaxRequest({
        method: 'GET',
        endpoint: `workshops/${id}`, // Note: We are using a back-tick quoted string here
        authenticated: true
    });
}