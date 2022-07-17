// Reference : https://javascript.info/garbage-collection

const john ={
    name: 'John'
};

// done what we wanted with the variable

console.log(john);

// we do not need the variable john anymore

john=null;

// we do not have any way to refer to the object in memory
// the object is eligible for garbage collection

const jane ={
    name: 'jane'
};


const mary= jane;
// done what we wanted with the variable

console.log(jane);

// we do not need the variable jane anymore

jane=null;

// is the object (jane)eligible for Garbage Collection (GC) - No
// Because mary is refering to jane so jane is still reachable 