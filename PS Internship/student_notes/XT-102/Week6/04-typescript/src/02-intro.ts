
// In typescript we need to specify type of arguments and return type
// But usually we let TS infer the return type

// Two modes of compilation
    // script mode
    // module mode 

// By default TS will compile the file in "script" mode (by module) 
//VS Code automatically compile TS code 

// Here sum (functionn name) is global variable throws error since we have another sum function in the same folder  (in 01-problems.js)
// By default typescript assumes files in the same folder will be added in same html page and so it leads to conflict 
//const sum =(x:number,y:number) => x+y;
// so to solve that make that function module 

const sum = (x: number, y: number) => x+y;
const sum2 = (x: number, y: number)  : number => x+y; // specifying return type

//ERROR
//sum(true,false); //Argument of type 'boolean' is not assignable to parameter of type 'number'

sum(1,2);

function hideError(dom: HTMLElement | null){ // dom can be HTMLElement or null

}

// hideError({x:1}); // is not a DOM node - error

hideError(document.querySelector('#xyz'));

export{
    sum
}
