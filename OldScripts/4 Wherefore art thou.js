// ///////// Find objects that have matching property and value pairs ////////////
// const whatIsInAName = (collection, source) => {
//     let arr = [];

//     let srKeys = Object.keys(source);

//     arr = collection.filter(e => {
//         for(let i = 0, length = srKeys.length; i < length; i++){
//             if(!e.hasOwnProperty(srKeys[i]) || e[srKeys[i]] !== source[srKeys[i]]) {
//                 return false;
//             }
//         }
//         return true;
//     });

//     return arr;
// }

// whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }],
//                { "a": 1, "c": 2 });

// //////////////////////////////////////////////////////////////////////
const whatIsInAName1 = (collection, source) => {
  const srKeys = Object.keys(source);

  return collection.filter(e =>
    srKeys
      .map(key => e[key] !== undefined && e[key] === source[key])
      .reduce((acc, cur) => acc && cur));
};

console.log(whatIsInAName1([{ a: 1, b: 2 }, { a: 1, k: 3 }, { a: 1, b: 2, c: 2 }], {
  a: 1,
  b: 2,
}));

// ///////////////////////////////////////////////////////////////
const whatIsInAName2 = (collection, source) => {
  const srKeys = Object.keys(source);

  return collection.filter(e => srKeys.every(el => source[el] === e[el]));
};

console.log(whatIsInAName2([{ a: 1, b: 2 }, { a: 1, k: 3 }, { a: 1, b: 2, c: 2 }], {
  a: 1,
  b: 2,
}));
