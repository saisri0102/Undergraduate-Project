
function celebrateBirthday(){
   this.Age++;
}

const john={
    Name: 'John',
    Age: 24,
    celebrateBirthday: celebrateBirthday,
    // celebrateBirthday: function(){
    //      this.Age++;
    //  }
};


const jane={
    Name: 'Jane',
    Age: 23,
    celebrateBirthday: celebrateBirthday,
    celebrateBirthday: function(){
        this.Age++;
    }
};



console.log(john.Age);

// Changing john age

jane.Age= 30;
 
console.log(jane.Age);

// adding john address 

john.address={
    firstline:'Gandhi Nagar',
    city: 'Ongole'
}

// Accessing john city
console.log(john.address.city);

// john spouse
john.spouse= jane

// jane spouse
jane.spouse=john


// jane emailids
jane.emailids=[
    'jane@gmail.com',
    'john@gmail.com'
]
// changing 2nd mail id
console.log(jane.emailids[1]);
jane.emailids[1]= 'mark@gmail.com';
console.log(jane.emailids[1]);

// adding 3rd mail id
jane.emailids[2]= 'bindu@gmail.com';
console.log(jane.emailids[2]);

// John bday 
// john.celebrateBirthday();
// jane.celebrateBirthday();


// john.Age= celebrateBirthday();
// jane.Age= celebrateBirthday();

console.clear();
john.celebrateBirthday();
jane.celebrateBirthday();

 console.log(john);
console.log(jane);