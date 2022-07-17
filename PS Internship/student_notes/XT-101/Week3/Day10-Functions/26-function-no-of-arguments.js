/**
 *  
 * 
 */

 function foo(x,y){
     console.log('x= ', x);
     console.log('y= ', y);

     console.log('arguments =');
     console.log(arguments); // Arguments object  [Arguments] { '0': 12, '1': 13, '2': 14 }
     console.log(arguments[0]); //12
     console.log(arguments['1']); //13
     console.log(arguments['2']); //14
 
     console.log(arguments.length);  //3

     for(let i=0; i<arguments.length;i++){
         console.log(arguments[i]);
     }
 }
 
  
 // we can call a function with less no.of arguments  than it expected

 foo();  // 0 arguments output: x= undefined , y=undefined
 foo(12); // 1 arguments  output: x=12, undefined;
 foo(12,13,14) ;// x=12 , y=13 , what about 14? 