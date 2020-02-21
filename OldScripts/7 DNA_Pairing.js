// /////// Make DNA strands from a string of DNA characters ///////
// const pairingDNA = str => {
// const map = {C: 'G', G: 'C', T: 'A', A: 'T'};
// let arr = [];
// str = str.toUpperCase();

//  for(let i = 0, length = str.length; i < length; i++) {
//    arr[i] = [str[i], map[str[i]]];
//  }

// return arr;
// };

// console.log(pairingDNA('CTGAaTC'));

// ///////////////////////////////////
const pairingDNA = (str) => {
  const map = {
    C: 'G',
    G: 'C',
    T: 'A',
    A: 'T',
  };
  let arr = str.toUpperCase().split('');

  arr = arr.map(el => [el, map[el]]);

  return arr;
};

console.log(pairingDNA('CTGAaTC'));

// //////////////////////////////////
function pairElement(str) {
  const originArr = str.toUpperCase().split('');
  const { length } = originArr;
  const twoArr = [];

  for (let i = 0; i < length; i += 1) {
    switch (originArr[i]) {
      case 'C':
        twoArr.push(['C', 'G']); // arr[i] = ['C', 'G'];
        break;
      case 'G':
        twoArr.push(['G', 'C']);
        break;
      case 'A':
        twoArr.push(['A', 'T']);
        break;
      case 'T':
        twoArr.push(['T', 'A']);
        break;
      default:
        break;
    }
  }

  return twoArr;
}

pairElement('GCG');
