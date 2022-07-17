import { AnyObject } from '../utils/types.js';

class Workshop {
    constructor( workshopObj : AnyObject ) {
        Object.assign( this, workshopObj );
    }
}

export default Workshop;
