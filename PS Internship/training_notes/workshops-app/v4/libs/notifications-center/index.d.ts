declare namespace NC {
    type Position = {
        top: string,
        right: string,
        bottom: string,
        left: string
    }

    type InitOptions = {
        position: POSITION.TOP_RIGHT | POSITION.TOP_LEFT | POSITION.BOTTOM_RIGHT | POSITION.BOTTOM_LEFT;
    }

    type NotificationOptions = {
        type: 'success' | 'info' | 'error',
        title: string,
        description: string,
        duration?: number
    }

    type HideNotificationFunction = () => void;

    let POSITION : {
        TOP_RIGHT: string,
        BOTTOM_RIGHT: string,
        BOTTOM_LEFT: string,
        TOP_LEFT: string
    };

    function init( options : InitOptions ) : void;
    function show( options : NotificationOptions ) : { hide : HideNotificationFunction };
    function hide() : void;
}