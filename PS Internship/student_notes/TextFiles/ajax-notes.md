# AJAX

- _AJAX_ - Asynchronous JavaScript and XML

- Asynchronous
    - Raise request to the backend meanwhile rest of code excute 

- Why Ajax? 
    - for making HTTP Requests. 
    - (parts of HTTP : header (key-value pair eg:'Content-Type': 'application/xml'  or text/html or text/css etc), body(has the data) )
    - Update a web page without reloading the page
    - AJAX is a technique for accessing web servers from a web page

- How is the data formatted (content type)
    * Understood and editable by us and machines (any Language)
    * XML 
         - Extensible Markup Language
         - One of Communication Language between client and server
    * JSON
         - JavaScript Object Notation
         - It can have number, boolean, string, plain JS objects, array, null value
         - we cannot have date object, functions etc
         - Usually the top level has an object/ array
         - string should be double quoted
         - Size of JSON is smaller than XML
         - It is preferred since syntax is close to JS and easy to understand 
- How to use Ajax
    - XMLHTTPRequest
        -old API
        - Supports on all browsers
        - Callback
    - Fetch API
        - New API
        - For latest (use polyfill for old browsers)
        - Promises (are better than using callbacks)
- codes
        //misc
        // 100 - 
        // web socket communication

        // success!
        // 200 ( i have given what you asked for successfully )
        // 201 (I have created a resource ) - eg: added a new meeting 
        // 204 - Empty response - Generally when you delete a resource 

        // redirect codes (server asks browser to check the resource at a different URL)
        //300, 301, 304, 

        //error code
        // 400 , 401
        // 404 - page not found
 
        // internal server error - ex: not able to connect to database
        // 500
- HTTP Methods
    - GET -  get a resource
    - POST - add a new resource (it gets a new URL)
    - PUT / PATCH -  change an existing resource
    - DELETE - remove an existing resource (the URL for that resource will not be functional)
- POSTMAN
    - To understand communication between server and client
    - Helps to see the communication 

- AJAX applications:
    - 

- Catching problem
    - Cache busting techniques used to prevent stale data from being given by browser
- CORS

    - Cross-Origin Resource Sharing
    - When you make a cross-domain request (even different port numbers qualify as cross-domain), your browser first makes
    - OPTIONS request to that resource
    - Yes / NO from server (some HTTP headers are there in response)
    - Proceeds / Failure with request
    
