
function addToCast(castName){
    this.cast.push(castName);
}
function addToCollection(amount){
    this.boxOfficeCollection+= amount;
}

// constructor function 
function Movie(name, cast, yearOfRelease, boxOfficeCollection){
   this.name=name;
   this.cast=cast;
   this.yearOfRelease=yearOfRelease;
   this.boxOfficeCollection= boxOfficeCollection;
   this.addToCast = addToCast;
   this.addToCollection = addToCollection;
}

const Bahubali = new Movie(
    'Bahubali',
    [
        'Prabhas',
        'Anushka'
    ],
    '2017',
    300,

);

const Eega = new Movie(
    'Eega',
    [
        'Nani',
        'Samantha'
    ],
    '2012',
    100,

);

Bahubali.addToCast('Tamanna');
Bahubali.addToCollection(200);

Eega.addToCollection(100);

console.log(Bahubali);
console.log(Eega);