// Question 1
function hello(name) {
  // Write your code here
    return `Hello, ${name}!`
    
}

console.log(hello("Maya"));

// Question 2
function findProduct(x, y) {
  // Write your code here
  let product = x*y;
  return product;
 
  
}
console.log(findProduct(3,5));

// Question 3
function getSquare(x) {
  //Write your code here
  let area = x*x;
  return area;
}

console.log(getSquare(5));

// Question 4
function makeOpposite(num) {
  //Write your code here
  if (num < 0 || num > 0 ){
    num = num * -1;
    

      return num;
  } 
    else{
      console.log(0);
    }
}
console.log(makeOpposite(5));

// Question 5
function logEvenNumbers() {
  // Write your code here
}

// Question 6
function sumFoursAndSevens() {
  // Write your code here
}

// Question 7
function exsAndOhs() {
  // Write your code here
}

// Do NOT touch or write anything below this line
module.exports = {
  hello,
  getSquare, 
  makeOpposite,
  logEvenNumbers,
  findProduct,
  sumFoursAndSevens,
  exsAndOhs,
};
