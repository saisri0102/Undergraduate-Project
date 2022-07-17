/* eslint-disable no-unused-vars */
import { AnyObject } from '../utils/types.js';

// eslint-disable-next-line no-shadow
export enum SessionLevel {
    UNAVAILABLE = '',
    BASIC = 'Basic',
    INTERMEDIATE = 'Intermediate',
    ADVANCED = 'Advanced'
}

class Session {
    public workshopId;

    constructor(
        sessionObjOrWorkshopId : AnyObject | number = -1,
        public sequenceId : number = -1,
        public name : string = '',
        public speaker : string = '',
        public duration : number = 0,
        public level : SessionLevel = SessionLevel.UNAVAILABLE,
        public abstract : string = '',
        public upvoteCount : number = 0
    ) {
        if( typeof sessionObjOrWorkshopId === 'object' ) {
            Object.assign( this, sessionObjOrWorkshopId );
            return; // in a constructor this still causes to return the newly created object
        }

        if( typeof sessionObjOrWorkshopId === 'number' ) {
            this.workshopId = sessionObjOrWorkshopId;
        }
    }

    static throwErrorIfExists( errors : string[] ) {
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

        Session.throwErrorIfExists( errors );
    }

    validateSequenceId( sequenceId = this.sequenceId ) {
        const errors = [];

        if( typeof sequenceId !== 'number' ) {
            errors.push( 'Sequence ID is not a number' );
        } else if( sequenceId < 0 ) {
            errors.push( 'Sequence ID is not a positive number' );
        }

        Session.throwErrorIfExists( errors );
    }

    validateName( name = this.name ) {
        const errors = [];

        if( name.trim() === '' ) {
            errors.push( 'Name is empty or has only spaces' );
        }

        Session.throwErrorIfExists( errors );
    }

    validateSpeaker( speaker = this.speaker ) {
        const errors = [];

        if( speaker.trim() === '' ) {
            errors.push( 'Speaker is empty or has only spaces' );
        }

        Session.throwErrorIfExists( errors );
    }

    validateDuration( duration = this.duration ) {
        const errors = [];

        if( typeof duration !== 'number' ) {
            errors.push( 'Duration is not a number' );
        } else if( duration < 0 ) {
            errors.push( 'Duration is not a positive number' );
        }

        Session.throwErrorIfExists( errors );
    }

    validateLevel( level = this.level ) {
        const errors = [];
        const levels = [
            SessionLevel.BASIC,
            SessionLevel.INTERMEDIATE,
            SessionLevel.ADVANCED
        ];

        if( !levels.includes( level ) ) {
            errors.push( `Level is not one of ${levels.join( ', ' )}` );
        }

        Session.throwErrorIfExists( errors );
    }

    validateAbstract( abstract = this.abstract ) {
        // noop
    }

    validateUpvoteCount( upvoteCount = this.upvoteCount ) {
        const errors = [];

        if( typeof upvoteCount !== 'number' ) {
            errors.push( 'Upvote count is not a number' );
        }

        Session.throwErrorIfExists( errors );
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

    setWorkshopId( workshopId : number ) {
        this.validateWorkshopId( workshopId );
        this.workshopId = workshopId;
    }

    setSequenceId( sequenceId : number ) {
        this.validateSequenceId( sequenceId );
        this.sequenceId = sequenceId;
    }

    setName( name : string ) {
        this.validateName( name );
        this.name = name;
    }

    setSpeaker( speaker : string ) {
        this.validateSpeaker( speaker );
        this.speaker = speaker;
    }

    setDuration( duration : number ) {
        this.validateDuration( duration );
        this.duration = duration;
    }

    setLevel( level : SessionLevel ) {
        this.validateLevel( level );
        this.level = level;
    }

    setAbstract( abstract : string ) {
        this.validateAbstract( abstract );
        this.abstract = abstract;
    }

    setUpvoteCount( upvoteCount : number ) {
        this.validateUpvoteCount( upvoteCount );
        this.upvoteCount = upvoteCount;
    }
}

export default Session;
