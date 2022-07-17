/**
     * Create a Movie class that represents details of a movie. Suggested information to have in an
    object of the class - name, cast (an array of strings with cast member's names),
    yearOfRelease, boxOfficeCollection, addToCast( newMember ) that accepts a new cast
    member's name and adds to the cast array, addToCollection( amount ) that accepts box
    office collections for a week and adds it to the current boxOfficeCollection. Create 2 objects
    of this class that represent any 2 movies. Call the methods addToCast() and
    addToCollection() and verify they work according to expectations.
 */
class Movie{

    constructor(name,cast, yearofRelease, boxOfficeCollection){
        this.name=name;
        this.cast=cast;
        this.yearofRelease= yearofRelease;
        this.boxOfficeCollection= boxOfficeCollection;
    }

    addToCast(newMember){
        this.cast.push(newMember);
    }
    addToCollection(amount){
        this.boxOfficeCollection+=amount;
    }

}

const Eega= new Movie('eega', ['nani', 'samantha'], '2015', 30);
const Bahubali = new Movie('Bahubali', ['prabhas', 'Anushka'], '2017', 50);

console.log(Eega);
console.log(Bahubali);

Eega.addToCast('sudeep');
Eega.addToCollection(20);

Bahubali.addToCast('Rana');
Bahubali.addToCollection(30);

console.log(Eega);
console.log(Bahubali);