// jest.fn() creates a mock function
// jest.mock() mocks an entire module (i.e. each of the exported functions, objects etc. will be stubbed)

// @todo Test the transform module while mocking the arithmetic module - test that Arithmetic.sum is called twice and Arithmetic.product once (using mock.calls.length), and the right result is obtained (use custom mock module ot mockReturnValue() to setup return values of sum and product, and mock.calls[][]). Results can be checked using mock.results[].value