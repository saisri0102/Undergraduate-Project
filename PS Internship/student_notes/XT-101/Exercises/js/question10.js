

function msg(hr){
    if(hr>=5 && hr<12) 
        return "Good Morning";
    
    else if(hr>=12 && hr<16)
        return "Good afternoon";

    else if(hr>=16 && hr<20)  
        return "Good Evening";
    
    else
        return "Good Night";
    
}

var hour= (new Date()).getHours();
let result= msg(hour) ;
console.log('Result: ', result);
