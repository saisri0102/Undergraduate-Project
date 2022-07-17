class Session {
    static Level = {
        BASIC: 'Basic',
        INTERMEDIATE: 'Intermediate',
        ADVANCED: 'Advanced'
    };

    constructor( sessionObjOrWorkshopId = -1, sequenceId = -1, name = '', speaker = '', duration = 0, level = '', abstract = '', upvoteCount = 0 ) {
        if( typeof sessionObjOrWorkshopId === 'object' ) {
            Object.assign( this, sessionObjOrWorkshopId );
            return; // in a constructor this still causes to return the newly created object
        }

        this.workshopId = sessionObjOrWorkshopId;
        this.sequenceId = sequenceId;
        this.name = name;
        this.speaker = speaker;
        this.duration = duration;
        this.level = level;
        this.abstract = abstract;
        this.upvoteCount = upvoteCount;
    }

    throwErrorIfExists( errors ) {
        if( errors.length ) {
            throw new Error( errors.join( ', ' ) );
        }
    }

    validateWorkshopId( workshopId = this.workshopId ) {
        const errors = [];

        if( typeof workshopId !== 'number' ) {
            errors.push( 'Workshop ID is not a number' );
        } else if( workshopId < 0 ) {
            errors.push( 'Workshop ID is not a positive number' );
        }

        this.throwErrorIfExists( errors );
    }

    validateSequenceId( sequenceId = this.sequenceId ) {
        const errors = [];

        if( typeof sequenceId !== 'number' ) {
            errors.push( 'Sequence ID is not a number' );
        } else if( sequenceId < 0 ) {
            errors.push( 'Sequence ID is not a positive number' );
        }

        this.throwErrorIfExists( errors );
    }

    validateName( name = this.name ) {
        const errors = [];

        if( name.trim() === '' ) {
            errors.push( 'Name is empty or has only spaces' );
        }

        this.throwErrorIfExists( errors );
    }

    validateSpeaker( speaker = this.speaker ) {
        const errors = [];

        if( speaker.trim() === '' ) {
            errors.push( 'Speaker is empty or has only spaces' );
        }

        this.throwErrorIfExists( errors );
    }

    validateDuration( duration = this.duration ) {
        const errors = [];

        if( typeof duration !== 'number' ) {
            errors.push( 'Duration is not a number' );
        } else if( duration < 0 ) {
            errors.push( 'Duration is not a positive number' );
        }

        this.throwErrorIfExists( errors );
    }

    validateLevel( level = this.level ) {
        const errors = [];
        const levels = Object.values( Session.Level );

        if( !levels.includes( level ) ) {
            errors.push( `Level is not one of ${levels.join( ', ' )}` );
        }

        this.throwErrorIfExists( errors );
    }

    validateAbstract( abstract = this.abstract ) {
        // noop
    }

    validateUpvoteCount( upvoteCount = this.upvoteCount ) {
        const errors = [];

        if( typeof upvoteCount !== 'number' ) {
            errors.push( 'Upvote count is not a number' );
        }

        this.throwErrorIfExists( errors );
    }

    isValid() {
        try {
            this.validateWorkshopId();
            this.validateSequenceId();
            this.validateName();
            this.validateSpeaker();
            this.validateDuration();
            this.validateLevel();
            this.validateAbstract();
            this.validateUpvoteCount();
        } catch( err ) {
            return false;
        }

        return true;
    }

    setWorkshopId( workshopId ) {
        this.validateWorkshopId( workshopId );
        this.workshopId = workshopId;
    }

    setSequenceId( sequenceId ) {
        this.validateSequenceId( sequenceId );
        this.sequenceId = sequenceId;
    }

    setName( name ) {
        this.validateName( name );
        this.name = name;
    }

    setSpeaker( speaker ) {
        this.validateSpeaker( speaker );
        this.speaker = speaker;
    }

    setDuration( duration ) {
        this.validateDuration( duration );
        this.duration = duration;
    }

    setLevel( level ) {
        this.validateLevel( level );
        this.level = level;
    }

    setAbstract( abstract ) {
        this.validateAbstract( abstract );
        this.abstract = abstract;
    }

    setUpvoteCount( upvoteCount ) {
        this.validateUpvoteCount( upvoteCount );
        this.upvoteCount = upvoteCount;
    }
}

export default Session;
