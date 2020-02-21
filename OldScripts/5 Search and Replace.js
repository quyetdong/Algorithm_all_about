// //////// Search and Replace match string //////////
// const searchAndReplace = (sent, before, after) => {
//     const regEx = new RegExp(before, 'gi');

//     return sent.replace(regEx, match => {
//         if(match[0] === match[0].toUpperCase()) {
//             after = after[0].toUpperCase().concat(after.slice(1));
//         }
//         return after;
//     });
// };

// console.log(searchAndReplace('Hello new day ahaha Ahaha','ahaha','ahihi'));

// ///////////////////////////////////////
const myReplace = (sent, before, after1) => {
  const arr = sent.split(' ');
  let after = after1;

  if (before[0] === before[0].toUpperCase()) {
    after = after[0].toUpperCase().concat(after.slice(1));
  }

  for (let i = 0, { length } = arr; i < length; i += 1) {
    if (arr[i].toLowerCase() === before.toLowerCase()) arr[i] = after;
  }

  return arr.join(' ');
};

console.log(myReplace('Hello new day ahaha Ahaha', 'Ahaha', 'ahihi'));

// //////////////////////////////////////
// const searchAndReplace = (sent, before, after) => {
//     const regEx = new RegExp(before, 'gi');

//     if(before[0] === before[0].toUpperCase())
//        after = after[0].toUpperCase().concat(after.slice(1));

//     return sent.replace(regEx, after);
// };

// console.log(searchAndReplace('Hello new day Ahaha Ahaha','Ahaha','ahihi'));

////////////////////////////////////
// function myReplace(str, before, after) {
//  if(before.charAt(0).toUpperCase() === before.charAt(0)) {
// 	 after = after.charAt(0).toUpperCase().concat(after.slice(1));
//  }

//  return str.replace(before, after);   //only replace one word
// }

// myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");

// ///////////////////////////////////////
const myReplace1 = (sent, before, orAfter) => {
  const arr = sent.split(' ');
  let after = orAfter;

  if (before[0] === before[0].toUpperCase()) {
    after = after[0].toUpperCase().concat(after.slice(1));
  }

  for (let i = 0, { length } = arr; i < length; i += 1) {
    if (arr[i].toLowerCase() === before.toLowerCase()) arr[i] = after;
  }

  return arr.join(' ');
};

console.log(myReplace1('Hello new day ahaha Ahaha', 'Ahaha', 'ahihi'));
