# Unit Testing
- Units of code are tested - whether they are functioning as per requirements
- Units of code
    - functions
    - classes
- function divide ( a, b ) => a / b
    - Requirements
        - Case 1: All good (a, b non-zero) -> the quotient
        - Case 2: If b is 0 then -> throw new Error( 'divisor cannot be zero' )
        - Case 3: If a is 0 and b is 0 then -> throw new Error( 'undefined operation' )
    - Sample tests
        - Given 89, 6 as inputs does it return 14 (Case 1 passed)
        - Given 10, 0 as inputs did it throw an error 'divisor cannot be zero' (Case 2 passed)
        - Similarly Case 3
- Specify your test - tools - nice reporting, powerful methods for different cases that arise in testing
    - JSUnit
    - Jasmine
    - Jest
    - Sinon (create mock object)
- What is testing BUT NOT unit testing?
    - requires calling multiple functions and testing DOM interactions with the HTML pages
        - Does the list of teams load on the page?
        - When add team button is clicked does the add team form appear in the page?
    - testing if all the cart items are reflected on the checkout page in an online store app
- Unit tests are most effective form of tests
    - Yes, adding more forms of testing do add value, but only incremental
- Unit testing is done by developers
    - Bugs can be very costly. Unit tests save money.
    - Avoid __regression__ (bugs in previously working code). loadAndShowTeams() initially created and tested - does both loading and showing teams without any other function's help
        - Now we __refactored__
            - call loadTeam() to load teams
            - call showTeam() to show teams
        - Unit testing run on the entire app after every change. Unit tests give you confidence that all features that were working earlier, are still working fine after the change

## Test-Driven Development (TDD)
- Write your unit test first, even before you write the code. For example if you plan to add formatDate to utils/date.js
    - Add an empty function formatDate in utils.js
    - utils.test.js
        - Add the test cases for formatDate function first
        - Run the tests, and let the case fail. Let the tests keep running
        - Write the formatDate function - one-by-one the tests start passing

## Behavior-Driven Development (BDD)
- Write the test cases as though in plain English language
- it( 'should return 3 when 1 and 2 are passed', () => {
    expect( )
})


## References
- [Getting started with Jest](https://jestjs.io/docs/en/getting-started)