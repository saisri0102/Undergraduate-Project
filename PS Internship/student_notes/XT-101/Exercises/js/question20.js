
const Bahubali={
   name: 'Bahubali',
   cast: [
       'Prabhas',
       'Anushka',
       'Tamanna'
   ],
   yearOfRelease: '2017',
   boxOfficeColletion: 250,
   addToCast: function(newMember){
       this.cast[this.cast.length]=newMember;
   },
   addToCollection: function(amount){
      this.boxOfficeColletion= this.boxOfficeColletion + amount;
   }

}

const movie={
    "fav-movie": {
        Bahubali
    }
}
Bahubali.addToCast('Rana');
Bahubali.addToCollection(400);

console.log(movie);
console.log(Bahubali);
