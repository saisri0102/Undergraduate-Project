function sumAll() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
}
sumAll(1, 2); // args -> [1,2]
sumAll(1, 2, 3); //args -> [1,2,3]
sumAll(1, 2, 3, 4); //args -> [1,2, 3,4]
export {};
