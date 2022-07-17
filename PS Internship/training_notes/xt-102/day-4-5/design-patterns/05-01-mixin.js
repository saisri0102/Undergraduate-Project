// JS-specific
// brings in multiple inheritance / interface-like mechanism
// multiple inheritance - one class inherits from multiple base classes - "diamond problem"
// C++ has multiple inheritance
// Java, JS do not
// interfaces are a replacement for multiple inheritance
    // Interface contain function signatures but not their implementation
    // Example: Stack data structure (StackInterface)
        // - StackInterface definition
            // push( data )
            // pop() -> return data
        // - Class "implements" the StackInterface
            // function push( data ) { ... }
            // function pop() { return data; }
        // - Queue interface definition
            // enqueue( data )
            // dequeue() -> return datas
        // - Class "implements" the QueueInterface
            // function enqueue( data ) { ... }
            // function dequeue() { return data; }
        // A class StackAndQueue can implement many interface - StackInterface, QueueInterface
            // how many functions should this class define? Minimum 4
            // Anyone can safely use push, pop, enqueue, dequeue on StackAndQueue objects
    