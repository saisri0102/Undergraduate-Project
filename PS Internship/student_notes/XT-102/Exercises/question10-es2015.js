/**
      Create a SequelMovie class that inherits from Movie class. SequelMovie has an additional
    property called earlierMovies - an array of Movie objects. It has an additional method called
    getLifetimeEarnings() that returns the sum of boxOfficeCollection of all earlier movies along
    with the SequelMovie object's boxOfficeCollection
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

class SequelMovie extends Movie{
    constructor(name,cast,yearofRelease,boxOfficeCollection,earlierMovies){
        super(name,cast,yearofRelease,boxOfficeCollection);
        this.earlierMovies= earlierMovies;
    }
     getLifetimeEarnings(){

        let sum = this.boxOfficeCollection;
         for(let collection of this.earlierMovies){
            sum = sum+collection.boxOfficeCollection;
         }
         console.log('Life time earnings =', sum);
     }
}

const Eega= new Movie('eega', ['nani', 'samantha'], '2015', 30);

const VampireDiaries1 = new Movie('VampireDiaries season1', ['Ian', 'Paul', 'Nina'], '2010', 20);
const VampireDiaries2= new Movie('VampireDiaries season2', ['Ian', 'Paul', 'Nina'], '2011', 30);
const VampireDiaries3 = new Movie('VampireDiaries season3', ['Ian', 'Paul', 'Nina'], '2012', 40);

const VampireDiaries = new SequelMovie(              
        'VampireDiaries Season 8',
         ['Ian', 'Paul', 'Nina'], 
         '2017',
          50,
          [
              VampireDiaries1, 
              VampireDiaries2,
              VampireDiaries3
              
          ]
  
        );

console.log(Eega);


Eega.addToCast('sudeep');
Eega.addToCollection(20);


console.log(Eega);
console.log(VampireDiaries);

VampireDiaries.getLifetimeEarnings();
