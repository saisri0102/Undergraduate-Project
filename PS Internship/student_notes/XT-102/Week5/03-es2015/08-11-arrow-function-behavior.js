function outer(){
    console.log('outer this =', this); // john context

    const innerNormal = function (){
        console.log('inner normal function=', this); // window context
    }
    const innerArrow = () =>{
        console.log('inner arrow function=', this); // john context
    }

    innerNormal();
    innerArrow();
}

outer();
const john={name:'john'};
outer.call(john);