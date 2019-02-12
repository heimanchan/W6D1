function sum1() {
  const array = Array.from(arguments);
  // debugger
  const reducer = (acc, val) => acc + val;
  let sum = 0;
  array.forEach( el => {
    sum += el;
  } )
  return array.reduce(reducer, 0);
  // return sum;
}
function sum2() {
  const array = [...arguments];
  const reducer = (acc, val) => acc + val;
  return array.reduce(reducer, 0);
}


// console.log(sum2(1, 2, 3, 4));

// ES 6
// monkey patch
// class Function {
//   myBind() {
    
//   }
// }

// ES 5
// monkey patch
Function.prototype.myBind = function(ctx) {
  const bindArgs = [...arguments].slice(1);
  let that = this;
  return function() {
    const callArgs = [...arguments];
    return that.call(ctx, ...bindArgs, ...callArgs);
    // return that.apply(ctx, bindArgs.concat(callArgs));
  }
}

class Cat {
  constructor(name) {
    this.name = name;
  }

  says(sound, person) {
    console.log(`${this.name} says ${sound} to ${person}!`);
    return true;
  }
}

class Dog {
  constructor(name) {
    this.name = name;
  }
}

const markov = new Cat("Markov");
const pavlov = new Dog("Pavlov");


// bind time args are "meow" and "Kush", no call time args
markov.says.myBind(pavlov, "meow", "Kush")();
// Pavlov says meow to Kush!

markov.says.myBind(pavlov)("meow", "a tree");
// Pavlov says meow to a tree!

markov.says.myBind(pavlov, "meow")("Markov");

const notMarkovSays = markov.says.myBind(pavlov);
notMarkovSays("meow", "me");

function curriedSum(numArgs) {
  let numbers = [];

  return function _curriedSum(num) {
    numbers.push(num);
    if (numbers.length === numArgs) {
      const reducer = (acc, val) => acc + val;
      return numbers.reduce(reducer);
    } else {
      return _curriedSum;
    }
  }
}

const sum2 = curriedSum(4);
console.log(sum2(5)(4)(2)(3));
// sum(5)(30)(20)(1); // => 56


// let f1 = curriedSum(3);
// f1 = f1(1);
// f1 = f1(2);
// f1 = f1(3);

// console.log(f1);

Function.prototype.curry = function(numArgs) {
  let numbers = [];
  let that = this;
  return function _curry(num) {
    numbers.push(num);
    if (numbers.length === numArgs) {
      // return curry;
      return that(...numbers);
    } else {
      return _curry;
    }
  }
}

function sumThree(num1, num2, num3) {
  return num1 + num2 + num3;
}
sumThree(4, 20, 6); // == 30

let f1 = sumThree.curry(3); // tells `f1` to wait until 3 arguments are given before running `sumThree`
f1 = f1(4); // [Function]
f1 = f1(20); // [Function]
f1 = f1(6); // = 30
