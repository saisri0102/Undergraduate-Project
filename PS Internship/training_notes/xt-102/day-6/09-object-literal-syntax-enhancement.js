const name = 'John';
const spouseKey = 'wife';

const john = {
    name, // name: name
    [spouseKey]: 'Jane',
    age: 32,
    celebrateBirthday() {
        this.age++;
    }
};

console.log( john );

// EXERCISE: Define the movie name, cast globally. Create a movie object with properties - name, cast (array), addToCast function

// 20. Create a movie object that represents details of your favorite movie. Suggested information
// to have in the object - name, cast (an array of strings with cast member's names),
// yearOfRelease, boxOfficeCollection, addToCast( newMember ) that accepts a new cast
// member's name and adds to the cast array, addToCollection( amount ) that accepts box
// office collections for a week and adds it to the current boxOfficeCollection.