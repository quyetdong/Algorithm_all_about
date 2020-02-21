// ///////////// Sum All Primes less than or equal the Provided Number ////////////
// function sumPrimes(num) {
//   let sum = 0;

//   if(num == 2) return 2;

//   return sum + ((num) => {
//     for(let i = 2; i < num; i++) {
//         if(num % i == 0) return 0;
//     }
//     return num;
//   })(num) + sumPrimes(num-1);
// }

// console.log(sumPrimes(10));

// //////////////////////////////////////////
const sumPrimes = (num) => {
  let sum = 0;
  let add = 0;

  if (num < 2) {
    return sum;
  } else if (num >= 2) {
    sum += 2;
  }

  for (let i = 3; i <= num; i += 1) {
    add = i;

    for (let j = 2; j < i; j += 1) {
      if (i % j === 0) add = 0;
    }

    sum += add;
  }

  return sum;
};

console.log(sumPrimes(10));
