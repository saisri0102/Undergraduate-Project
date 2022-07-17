
for( var i=0;i<10;i++){
  console.log(i);
}
console.log('After end of the loop', i); // If we use var we can use outside the loop also

for( let j=0;j<10;j++){
    console.log(j);
  }
  console.log('After end of the loop', j); // If we use let we can't use the variable outside the loop 
 
  // scope of var - outside block also (scope to the funciton ) and global
  // Not good to use global variable since it is visible everywhere so more scope of changing the value
  // scope of let, const - inside block - local

/**
 * For Loop
 * 1. Initialize 
 * 2. Check condition
 * 3. go inside the loop
 * 4. check increment or decrement condition
 * 5. check condition and continue
 *  */ 
