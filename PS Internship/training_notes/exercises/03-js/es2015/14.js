// 14. Given the following APIs
// * Retrieve users with a particular username (in the example below, username is Bret)
// ```
// https://jsonplaceholder.typicode.com/users?username=Bret
// ```
// * Retrieve posts by a user with given id (in the example below, user id is 1)
// ```
// https://jsonplaceholder.typicode.com/users/1/posts'
// ```
// * Retrieve comments for post with given id (in the example below, post id is 1)
// ```
// https://jsonplaceholder.typicode.com/comments?postId=1
// ```
// Write a function that accepts the username and returns a promise that resolves with the email ids
// of people who have commented on the first post of the first user matching the given username.
// ```
// function getCommentersEmailIds( username ) {
// }
// ```
// For example, if username = Bret, then first user matching username Bret has id = 1 (user whose
// name is "Leanne Graham" and username is "Bret"). The first post by this user has id = 1. The
// list of people who commented on this post are [ "Eliseo@gardner.biz",
// "Jayne_Kuhic@sydney.com", "Nikita@garfield.biz", "Lew@alysha.tv", "Hayden@althea.biz" ]
// Test your function out, for example by passing username as 'Bret'

async function getCommenters( name ) {
    try {
        let response, data, user, postId;
        
        response = await fetch( `https://jsonplaceholder.typicode.com/users?username=${name}` );
        data = await response.json();
        user = data[0];
        
        response = await fetch( `https://jsonplaceholder.typicode.com/users/${user.id}/posts` );
        data = await response.json();
        postId = data[0].id;


        // ...

        
        // return commenters
    } catch( err ) {

    }
}

getCommenters( 'Bret' )
    .then(( commenters ) => {
        console.log( commenters );
    })
    .catch(( err ) => {
        console.log( error )
    });