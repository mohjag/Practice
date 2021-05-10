"use strict";

function outer() {
  const a = 10;
  let b = 100;

  function inner() {
    let c = 20;
    console.log(`a=${a}, b=${b}, c=${c}`);
    b++;
    c++;
  }

  return inner;
}

// outer() invoked the first time
// fnFirst is now a function inner and not a value.

const fnFirst = outer();

// outer() invoked the second time but assigned to different variable
const fnSecond = outer(); 

// we can inspect the console and verify Scopes Closure
console.dir(fnFirst);

fnFirst(); // fnFirst invoked for the first time - only "b" is incremented -> a=10, b=100, c=20
fnFirst(); // fnFirst invoked for the second time - only "b" is incremented -> a=10, b=101, c=20
fnFirst(); // fnFirst invoked for the third time - only "b" is incremented -> a=10, b=102, c=20
fnSecond(); // fnSecond invoked for the FIRST time - only "b" is incremented -> a=10, b=100, c=20