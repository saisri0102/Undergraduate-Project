/**
 * Creation of similar objects based on information available at runtime
 */
// Base class
function Issue( summary, components, description ) {
    this.summary = summary;
    this.components = components;
    this.description = description;
}

// Derived class 1
function Story( { summary, components, description, storyId } ) {
    Issue.call( this, summary, components, description );
    
    this.storyId = storyId;
}

Object.setPrototypeOf( Story.prototype, Issue.prototype );

// Derived class 2
function Epic( { summary, components, description, epicName } ) {
    Issue.call( this, summary, components, description );
    
    this.epicName = epicName;
}

Object.setPrototypeOf( Epic.prototype, Issue.prototype );

// Derived class 3
function Defect( { summary, components, description } ) {
    Issue.call( this, summary, components, description );
}

Object.setPrototypeOf( Defect.prototype, Issue.prototype );

// Factory is a function for generating objects at runtime based on certain inputs available then
// The factory function encapsulates logic for generating the appropriate kind of object based on runtime infor passed to it
function factory( issueType, data ) {
    let newIssue;

    switch( issueType ) {
        case 'Epic':
            newIssue = new Epic( data );
            break;
        case 'Story':
            newIssue = new Story( data );
            break;
        case 'Defect':
            newIssue = new Defect( data );
            break;
    }

    return newIssue;
}

const formData = {
    epicName: 'Milestone 3',
    summary: 'Design pattern, good practices implementation',
    components: [],
    description: 'lorem'
};

const newIssue = factory( 'Epic', formData );
console.log( newIssue );