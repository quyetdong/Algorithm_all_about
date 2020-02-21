// Sum numbers and between numbers of an Array including two numbers //
const sumAll = (oriArr) => {
  // sort array from smallest to largest
  const arr = oriArr.sort((a, b) => a - b);
  // assign smallest number to sum
  let sum = 0;

  // add numbers between smallest to largest including largest number to sum
  while (arr[0] <= arr[1]) {
    sum += arr[0];
    arr[0] += 1;
  }

  return sum;
};

sumAll([1, 5]);

// /////////////////////////////////////
// function sumAll(arr) {
//   let x = Math.max(...arr);
//   let y = Math.min(...arr);
//   let sum = y;

//   if(y==x) return y;

//   y++;
//   arr = [x, y];

//   return sum+sumArr(arr);

// }

// sumAll([1,4]);

// //////////////////////////////////////
// function sumAll(arr) {
//   let x = Math.max(...arr);
//   let y = Math.min(...arr);
//   let sum = y;

//   while(y < x) {
//     sum += ++y;
//   }

//   return sum;
// }

// sumAll([5,9]);
