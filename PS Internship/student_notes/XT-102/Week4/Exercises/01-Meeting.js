function Meetings(startTime, endTime, _id, name, description, date, attendees ){
   
    this.startTime= startTime;
    this.endTime= endTime;
    this._id= _id;
   this.name=name;
   this.description= description;
   this.date=date;
   this.attendees= attendees;

}

Meetings.prototype.addAttendee= function(user){
    this.attendees.push(user);
}

function User( _id, name, email ) {
    this._id = _id;
    this.name = name;
    this.email = email;
}

const aravind = new User( 1, 'Aravind', 'aravind@example.com' );
const asmitha = new User( 2, 'Asmitha', 'asmitha@example.com' );


const shortFilm = new Meetings(
   
    {
        hours:18,
        minutes:0
    },
    {
        hours:20,
        minutes:0
    },
    345678901234567890123415,
    'Short-film making workshop',
    'Workshop on making short films by various artists at Telstra',
    '2020-10-27T00:00:00.000Z',
    [aravind, asmitha]
   
  );

console.log(shortFilm);

const dhruv = new User( 3, 'Dhruv', 'dhruv@example.com' );
shortFilm.addAttendee( dhruv );

console.log( shortFilm );

