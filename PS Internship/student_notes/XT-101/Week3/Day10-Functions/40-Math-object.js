Math.round(4.7);    // returns 5
Math.round(4.4);    // returns 4
Math.ceil(4.4);     // returns 5 returns the value of x rounded up to its nearest integer:
Math.floor(4.7);    // returns 4 returns the value of x rounded down to its nearest integer:
Math.pow(8, 2);      // returns 64
Math.sqrt(64);      // returns 8
Math.abs(-4.7);     // returns 4.7
Math.sin(90 * Math.PI / 180);  //  returns 1 (the sine of 90 degrees)
Math.min(0, 150, 30, 20, -8, -200);  // returns -200
Math.max(0, 150, 30, 20, -8, -200);  // returns 150
Math.random();     // returns a random number between 0 and 1
Math.log(2); // 0.6931471805599453 

function random(min, max) {  
    const num= Math.random(); 
    console.log(num);
    const num1 = Math.floor(num * (max - min +1 )) + min; // return random number betweeen min and max (including min and max)
    return num1;
  }
  
  console.log(random(200, 400));

  
function random(min, max) {  
  const num= Math.random(); 
  console.log(num);
  const num1 = Math.floor(num * (max - min +1 )) + min; // return random number betweeen min and max (excluding max)
  return num1;
}