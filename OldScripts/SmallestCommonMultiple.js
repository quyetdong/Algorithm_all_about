// ///////// Find the smallest common multiple of sequential numbers between two numbers including them /////
// const smallestCommon1 = arr => {
//     let min = Math.min(...arr);
//     let max = Math.max(...arr);
//     let num = max * (max - 1);

//     const multiple = (large, small) => {
//         let i = 2;
//         let num = large;

//         while(true) {
//             if(large % small == 0) {
//                 return large;
//             }
//             large = num * i;
//             i++;
//         }
//     };

//     for(let i = max - 2; i >= min; i--) {
//         num = multiple(num, i);
//     }

//     console.log(num);
//     return num;
// };

// smallestCommon1([23, 18]);

// ////////////////////////////////////////////
// const smallestCommon2 = arr => {
//     const min = Math.min(...arr);
//     const max = Math.max(...arr);
//     let num = 1;

//     arr.length = 0;

//     for(let i = max; i >= min; i--) {
//         arr.push(i);
//     }

//     num = arr.reduce((acc, cur) => {
//         let i = 2;
//         let num = acc;

//         while(true) {
//             if(acc % cur == 0) {
//                 return acc;
//             }

//             acc = num * i;
//             i++;
//         }
//     });

//     console.log(num);
//     return num;
// };

// smallestCommon2([5,1]);

// //////////////////////////////////////
const smallestCommon3 = (arr) => {
  const ucln = (small, large) => {
    const k = large - small;
    if (k == 0) return small;
    else if (k >= small) return ucln(small, k);
    return ucln(k, small);
  };

  console.log(ucln(12, 18));
};

smallestCommon3();
