const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(arr) {
  let sum = arr.reduce((total, num) => {
    return total+num
  },0)
  return sum
};

const multiply = function(arr) {
  let mlt = arr.reduce((total, num) => {
    return total*num
  },1)
  return mlt
};

const power = function(a, b) {
  let num = a;
  for(let i=1; i<b; i++){
    a *= num
  }
	return a
};

const factorial = function(num) {
  let result = new Array();
  result[0] = 1;
  result[1] = 1;

  for(let i=2; i<=num; i++){
    result[i] = result[i-1]*i
  }
  return result[num]
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
