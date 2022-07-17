// properties
function User( _id, name, email ) {
    this._id = _id;
    this.name = name;
    this.email = email;
}

const aravind = new User( 1, 'Aravind', 'aravind@example.com' );

function adminUser(_id,name,email,privileges){
    User.call(this,_id,name,email);
    this.privileges= privileges;
}

adminUser.prototype.addPrivilege= function(privilage){
    this.privileges.push(privilage);
}

Object.setPrototypeOf(adminUser.prototype, User.prototype);

const john = new adminUser(
    1,
    'john',
    'john@example.com',
    [
        'can remove user',
        'can add user'

    ]
);

console.log(john);

john.addPrivilege('can change password');

console.log(john);
