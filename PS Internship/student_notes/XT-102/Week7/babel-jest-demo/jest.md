# JEST
- Jest is a JavaScript test runner, that is, a JavaScript library for creating, running, and structuring tests
- For unit testing
- Installation : npm install --save-dev jest
- describe is for grouping, it or test is for testing.
<!--
    function filterByTerm(inputArr, searchTerm) {
        const regex = new RegExp(searchTerm, "i");
        return inputArr.filter(function(arrayElement) {
            return arrayElement.url.match(regex);
        });
    }
    describe("Filter function", () => {
        test("it should filter by a search term (link)", () => {
            // arrange
            const input = [
                { id: 1, url: "https://www.url1.dev" },
                { id: 2, url: "https://www.url2.dev" },
                { id: 3, url: "https://www.link3.dev" }
            ];

            // assert
            const output = [{ id: 3, url: "https://www.link3.dev" }];
            
            // act
            expect(filterByTerm(input, "link")).toEqual(output);
        });
    });

-->

## Matchers
- toBe()
- not.toBe()
- toEqual() -> for objects or iterators
### Number Matchers
- toBeGreaterThan()
- toBeGreaterThanOrEqual()
- toBeLessThan()
- toBeLessThanOrEqual()
- expect(value).toBeCloseTo(0.3); -> for float values
### null, undefined etc matchers
- toBeNull() matches only null
- toBeUndefined() matches only undefined
- toBeDefined() is the opposite of toBeUndefined
- toBeTruthy() matches anything that an if statement treats as true
- toBeFalsy()
### string matchers
- toMatch() -> For strings

## steps
- import the function to test
- give an input to the function
- define what to expect as the output
- check if the function produces the expected output

## JEST Hooks

- beforeEach and afterEach: These hooks are executed before and after each test in the test suite.
- beforeAll and afterAll: These hooks are executed just once for each test suite. i.e. if a test suite has 10 tests, then these hooks will just be executed once for every test execution.

## Creating Code coverage report:
-  Code coverage is one of the most important metrics from a unit testing perspective. It essentially measures what percentage of statements/branches are covered for the application under test.
 <!--
  Add it in jest.config.js file
    "jest": {
        "collectCoverage":true
    }
 -->

## Running Individual files
 - To run an individual test, we can use the npx jest testname command.
 - To skip some tests we can prefix the test with x o use test.skip

## Mock Functions
- There are three main types of module and function mocking in Jest
    - jest.fn: Mock a function
    - jest.mock: Mock a module
    - jest.spyOn: Spy or mock a function

- Disadvantages of fn
    - Difficult to mock each function everytime. instead using jest.mock it mocks the whole module
- Disdvantages of mock
    - The only disadvantage of this strategy is that it’s difficult to access the original implementation of the module. For those use cases, you can use spyOn.

# Some Important mock matchers

- mockCallback.mock.calls.length -> Returns No.of times mockCallback is called
- mockCallback.mockReturnValueOnce( value ) -> it returns the value which is specified inside brakets
- mockCallback.mockImplementation(() => 42);
<!--
const mockCallback = jest.fn(x => 42 + x);
forEach([0, 1], mockCallback);

// The mock function will be called twice
expect(mockCallback.mock.calls.length).toBe(2);

// 0 was the first argument of the first call to the function 
expect(mockCallback.mock.calls[0][0]).toBe(0);

// 1 was the first argument of the second call to the function
expect(mockCallback.mock.calls[1][0]).toBe(1);

// 42 was the return value of the first call to the function
expect(mockCallback.mock.results[0].value).toBe(42);
-->