# Ajax
- _AJAX_ - Asynchronous JavaScript and XML
- Why Ajax? - for making HTTP (protocol) requests (header (key-value pairs, eg. 'Content-Type' : 'text/html'), body - has the data)
- How is the data formatted (content type)
    - understood and editable by us and machines (any language)
        - XML (eXtensible Markup Language)
        - JSON 
            - JavaScript Object Notation
            - number, boolean, string, plain JS object, array, null
            - Usually the top level has an object / array
            - string should be double quoted
        - We usually work with JSON - in general it is lighter than XML, and it is closer to JS object syntax
- Caching problem
    - Cache busting techniques used to prevet stale data from being given by browser
- CORS
    - Cross-Origin Resource Sharing
    - When you make a cross-domain request (even different port numbers qualify as cross-domain), your browser first makes
        - OPTIONS request to that resource
            - Yes / NO from server (some HTTP headers are there in response)
            - Proceeds / Failure with request
- How to use Ajax
    - XMLHttpRequest
        - old API
        - supported on all browsers
        - callbacks
    - fetch API
        - new API
        - modern browsers (needs polyfill for old browsers)
        - promise (are better than using callbacks)
- HTTP Status codes
    // misc
    // 100
    // web socket communication

    // success!
    // 200 (i have given what you asked for successfully)
    // 201 (i have created a resource - eg. added a new meeting)
    // 204 (empty response - eg. when you delete a resource)

    // redirect codes (server asks browser to check the resource at a different URL)
    // 300, 301, 304, 

    // error codes
    // 400, 401, 404 (page not found)

    // internal server errors
    // 500
- HTTP methods
    - GET - get a resource
    - POST - add a new resource (it gets a new URL)
    - PUT / PATCH - change an existing resource fully / partially
    - DELETE - remove an existing resource (the URL for that resource will not be functional)