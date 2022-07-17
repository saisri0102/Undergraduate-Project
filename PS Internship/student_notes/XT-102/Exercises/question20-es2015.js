/**
 *  EXERCISE: Define the movie name, cast globally. create a movie object with properties - name, cast(Array), addToCast function
*  Create a movie object that represents details of your favorite movie. Suggested information
    to have in the object - name, cast (an array of strings with cast member's names),
    yearOfRelease, boxOfficeCollection, addToCast( newMember ) that accepts a new cast
    member's name and adds to the cast array, addToCollection( amount ) that accepts box
    office collections for a week and adds it to the current boxOfficeCollection
 */

 const name = 'MovieName';
 const cast = 'Cast';
 const year = 'yearOfRelease';
 const collection ='BoxOfficeColletion'

 const Eega ={
     [name]: 'Eege',
     [cast]:['Nani','Samantha'],
     [year]: '2015',
     [collection]: 30,
     addToCast(newMember){
         [cast].push(newMember);
     },
   
 }

 console.log(Eega);

 Eega.addToCast('Sudeep');
//  Eega.addToCollection(20);
 console.log(Eega);

