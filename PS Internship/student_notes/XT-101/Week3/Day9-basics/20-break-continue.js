/**
 * Break : To exist the current flow
 * Continue : stop current iteration and continue next iteration
 */
bb: for(let j=0 ;j<5;j++){
    for(let i=0; i<10;i++){
        if(i==3){
            continue ;
        }
        if(i==5){
            break bb; // exists nearest loop
        }
        console.log(i);
    }
}
