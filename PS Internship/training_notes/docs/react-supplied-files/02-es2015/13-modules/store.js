// Step 2: Fulfill the following requirements using module features
// Product should be available to other modules. The name with which Product is imported in other files should not matter (it should be the default export here)
class Product {
    constructor( name, price ) {
        this.name = name;
        this.price = price;
    }
}