let nos=[1,2,3,4,5];
console.log("The Intial array is:", nos);
let fno=nos.shift();
console.log("Array after shift:",fno);
console.log("the no got shifted:",fno);
nos.unshift(10);
console.log("Array after unshift:",nos);
let nums=[1,2,3,4,5];
nums.splice(1,1);
console.log("Array after splice:",nums);
nums .splice(2,1,10);
console.log("Array after splice insertion:",nums);