// //// Translate the provided string to Pig Latin //////
const translatePigLatin = (orStr) => {
  const regEx = /[aeiou]/i;
  let k = -1;
  let str = orStr;

  k = str.search(regEx);

  if (k === 0) str = str.concat('way');
  else {
    str = str
      .slice(k)
      .concat(str.slice(0, k))
      .concat('ay');
  }

  return str;
};

console.log(translatePigLatin('fs Ihello dgf'));

// /////////////////////////////////////////////
// const translatePigLatin = str => {
//     const regEx = /([^aeiou]+)([\w]+)/i;

//     if((/[aeiou]/i).test(str[0])) {
//         str = str.concat('way');
//     } else str = str.replace(regEx , '$2$1ay');

//     return str;
// };

// console.log(translatePigLatin('fs Ihello dgf'));

// ////////////////////////////////////////////
// const translatePigLatin = str => {
//     const regEx = /[aeiou]/i;
//     let k = -1;

//     for(let i = 0, length = str.length; i < length; i++) {
//         if(regEx.test(str[i])) {      /// ['a', 'e', 'i', 'o', 'u'].includes(str[i])
//             k = i;
//             break;
//         }
//     }

//     if(k == 0) str = str.concat('way');
//     else str = str.slice(k).concat(str.slice(0, k)).concat('ay');

//     return str;
// };

// console.log(translatePigLatin('fs Ihello dgf'));
