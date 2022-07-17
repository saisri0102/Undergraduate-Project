/**
 * You can export anything - variables, functions, classes
 */
// Step 1: Fulfill the following requirements using module features
// PI, Product, and Complex should be available to other modules. Diff should NOT be available to other modules
// The name with which Complex is imported in other files should not matter (it should be the default export here)

let PI = 3.14;

const Diff = ( x, y ) => x - y;
const Product = ( x, y ) => x * y;

// only one default permitted per class
class Complex {
    constructor( real, imaginary ) {
        this.real = real;
        this.imaginary = imaginary;
    }

    toString() {
        return `${this.real} + ${this.imaginary}i`;
    }
}