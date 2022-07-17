// const today = new Date; can also be used since constructor takes no arguments

// Custom format

Date.prototype.toSapientString = function(){
  return this.toString().substr(0,15);
};
const today = new Date();

console.log(today.toISOString()); // 2021-02-09T06:15:34.662Z
console.log(today.toString()); // Tue Feb 09 2021 11:45:34 GMT+0530 (India Standard Time)
console.log(today.toSapientString()); // Tue Feb 09 2021