"use strict";

//////////////// Sum All Odd Fibonacci Numbers /////////////
var sumFibs1 = function sumFibs1(num) {
  var fib1 = 1;
  var fib2 = 1;
  var sum = 0;
  var fib = 0;

  while (fib1 <= num) {
    if (fib1 % 2 === 1) {
      sum += fib1;
    }

    fib = fib1 + fib2;
    fib1 = fib2;
    fib2 = fib;
  }

  return sum;
};

console.log(sumFibs1(8));

// /////////////////////////////////////////////////
var sumFibs2 = function sumFibs2(num) {
  var m = new Map();

  var fib = function fib(n) {
    if (n <= 1) {
      m.set(n, 1);
      return 1;
    }
    if (!m.has(n)) {
      m.set(n, fib(n - 1) + fib(n - 2));
    }

    return m.get(n);
  };

  var sum = 0;
  for (var i = 0; i < num; i++) {
    fib(i);
    if (m.has(i) && m.get(i) % 2 === 1) {
      if (m.get(i) <= num) {
        sum += m.get(i);
      } else break;
    }
  }

  return sum;
};

sumFibs2(1000);

// ////////////////////////////////////////////////
var sumFibs3 = function sumFibs3(num) {
  var m = new Map();

  var memorized = function memorized(fn) {
    return function(n) {
      if (!m.has(n)) {
        m.set(n, fn(n));
      }

      return m.get(n);
    };
  };

  var fib = memorized(function(n) {
    if (n <= 1) return 1;

    return fib(n - 1) + fib(n - 2);
  });

  var sum = 0;
  for (var i = 0; i < num; i++) {
    fib(i);
    if (m.has(i) && m.get(i) % 2 === 1) {
      if (m.get(i) <= num) {
        sum += m.get(i);
      } else break;
    }
  }

  return sum;
};

sumFibs3(1000);
// fib(0)  1
// fib(1)  1
// fib(2)  2
// fib(3)  3
// fib(4)  5
// fib(5)  8
