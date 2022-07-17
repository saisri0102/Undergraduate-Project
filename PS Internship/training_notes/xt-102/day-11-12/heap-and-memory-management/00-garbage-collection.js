const john = {
    name: 'John'
};

const jonathan = john;

// done what we wanted with the variable
console.log( john );

// we do not need the variable john anymore
john = null;

// is the object eligible for Garbage Collection (GC)?
// NO - we can still access the object through jonathan

jonathan = null;

// is the object eligible for Garbage Collection (GC)?
// YES - no more references to the object