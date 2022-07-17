## MVC Architecure
A way of architecting our apps, Model-View-Controller.

## What is MVC?

- Model
    - Data entities in your app
        - Meeting
        - Calendar
        - Team
        - User
    - Stores the data in the app
    - Any behavior is handled - validation
- View
    - User Interface - Can be done in JS, HTML (we will use HTML)
    - A small portion of the page which can be reused (Ex: Nav bar, widgets)
    - View can be customized 
    - People can interact with the view
- Controller
    - When user interacts, it excutes business logic
        - For example, starts off input validation on change of user input
        - When model data changes, the controller updates the view
MVC pattern is often generalized  to an MV* pattern - MVP, MVVM are variation of MVC

    -https://handlebarsjs.com/ - for combining html with js

- Template
    - template is for later on adding content - Ex: displaying teams
    - give dynamic part in template
    - templates wont get showed initially on their own , they are just containers for html pages
    - we can have many templates in html page
    - what ever you are using in js keep it in template
    - It wont get displayed   
    - Renderview is used to read template and put html in the right place (on the div you want)