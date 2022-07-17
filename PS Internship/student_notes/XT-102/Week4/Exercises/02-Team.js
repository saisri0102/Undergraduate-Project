// add propeties
// addTeamMember( user )

function Team( _id, name, description, teamMembers ) {
    this._id = _id;
    this.name = name;
    this.description = description;
    this.teamMembers = teamMembers;
}

Team.prototype.addTeamMember = function( user ) {
    this.teamMembers.push( user )
}

function User( _id, name, email ) {
    this._id = _id;
    this.name = name;
    this.email = email;
}

const aravind = new User( 1, 'Aravind', 'aravind@example.com' );
const asmitha = new User( 2, 'Asmitha', 'asmitha@example.com' );



const agileTeam = new Team( 
    1,
    'Agile team',
    'Team spreading awareness of Agile practices',
    [ aravind, asmitha ],
   
    
);

console.log( agileTeam );

const dhruv = new User( 3, 'Dhruv', 'dhruv@example.com' );
agileTeam.addTeamMember( dhruv );

console.log( agileTeam );