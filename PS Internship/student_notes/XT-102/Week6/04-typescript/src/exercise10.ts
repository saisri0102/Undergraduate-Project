/**
 * Define an interface IClock with type ('digital' | 'analog'), and a time property (an object) with
properties - hours, minutes, seconds (all numbers). Your interface also defines a method
setTime( hours, minutes, seconds ) that sets the time, and getTime() that returns a string
representation of the time. Create 2 objects of IClock type - one of type 'digital' and other of
type 'analog', set the time through setTime() and log the time using getTime().

 */


 interface IClock {
  
    type: 'digital ' | 'analog';
     time : {
        hours : number,
        minutes : number,
        seconds : number
    };

    setTime( hours : number, minutes: number, seconds : number ) : void;
    getTime() : string;
    
 }

 const digitalClock : IClock ={

    type : 'digital',
    time : {
        hours :0,
        minutes : 0,
        seconds : 0
    },

    setTime(hours : number, minutes: number, seconds : number){
        this.hours= hours;
        this.minutes = minutes,
        this.seconds = seconds;

        
    },
    getTime() {
        return (`${this.hours}: ${this.minutes}: ${this.seconds}`);
    }
 };

 digitalClock.setTime(23,34,56);
 console.log(digitalClock.getTime());
