// /////////// Extract the different elements of two Arrays /////////////////////
const diffArray1 = (arr1, arr2) =>
  [...arr1, ...arr2].filter(e => arr1.indexOf(e) === -1 || arr2.indexOf(e) === -1);

diffArray1([1, 2, 3, 5], [1, 2, 3, 4, 5]);

// //////////////////////////////////////////
const diffArray2 = (arr1, arr2) =>
  [...arr1, ...arr2].filter(e => !(arr1.includes(e) && arr2.includes(e)));

console.log(diffArray2());

// ////////////////////////////////////////
// function diffArray(arr1, arr2) {
//     var newArr = [];
//     var check = 1;
//     // Same, same; but different.
//     for(var i = 0; i<arr1.length; i++) {
//       check = 1;
//       for(var j = 0; j<arr2.length; j++) {
//         if(arr1[i] == arr2[j]) {
//           check = 0;
//           break;
//         }
//       }

//       if(check == 1) {
//         newArr.push(arr1[i]);
//       }
//     }

//     for(var m = 0; m<arr2.length; m++) {
//         check = 1;
//       for(var n = 0; n<arr1.length; n++) {
//         if(arr2[m] == arr1[n]) {
//           check = 0;
//           break;
//         }
//       }

//       if(check == 1) {
//         newArr.push(arr2[m]);
//       }
//     }

//     return newArr;
//   }

//   diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

// /////////////////////////////////////////////
// function diffArray(arr1, arr2) {
//     let arr = [...arr1, ...arr2];
//     let newArr = [];

//     arr = arr.sort();
//     // Same, same; but different.
//     for(let i = 0, length = arr.length; i < length; i++) {
//       if(arr[i] === arr[i+1]) i++;
//       else newArr.push(arr[i]);
//     }
//     return newArr;
//   }

// diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

// //////////////////////////////////////
// const diffArray = (...arr) => [...arr[0].filter(e=>arr[1].indexOf(e)===-1),
//                                ...arr[1].filter(e=>arr[0].indexOf(e)===-1)];

// console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
