# MVC Architecture
A way for architecting our apps. Model-View-Controller. 

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
    - User Interface - can be done in JS, HTML (we will use HTML)
- Controller
    - When user interacts, it executes business logic
        - For example, starts off input validation on change of user input
        - When model data changes, the controller updates the view

MVC pattern is oftern generalized to an MV* pattern
    - MVP, MVVM are variation of MVC