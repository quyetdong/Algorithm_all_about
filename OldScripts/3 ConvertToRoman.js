// ////////////// Convert from normal number to Roman number //////////////////////
// const convertToRoman = num => {
//   const arr = ['M', 'D', 'C', 'L', 'X', 'V', 'I'];
//   const length = arr.length;

//   const toRom = (n = 1, va1 = 4, va2 = 9) => {
//     let str = '';
//     let np = num%10;

//     if(num <= 0) return str;

//     num = Math.floor(num/10);

//     if(np > va1 && np < va2) {
//         str = arr[length - n - 1] + Array(np - va1).join(arr[length-n]);
//     } else if(np === va2) {
//         str = arr[length - n] + arr[length - n - 2];
//     } else if(np === va1) {
//         str = arr[length - n] + arr[length - n - 1];
//     } else if (np > 0 && np < va1) {
//         str = Array(np + 1).join(arr[length - n]);
//     }

//     return toRom(n + 2, va1, va2) + str;
//   };

//   let rom = Array(Math.floor(num/1000) + 1).join('M');
//   num = num%1000;

//   rom += toRom();

//   return rom;
// };

// console.log(convertToRoman(5449));

// ////////////////////////////////////////////
// const convertToRoman = num => {
//     const arr = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX',
//                  '', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC',
//                  '', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'];

//     return 'M'.repeat(Math.floor(num/1000)) + arr[Math.floor(num/100) % 10 + 20] +
//  arr[Math.floor(num/10) % 10 + 10] + arr[num%10];
// }

// console.log(convertToRoman(49));

// ////////////////////////////////////////////
const convertToRoman = (num) => {
  const arr = [
    '',
    'C',
    'CC',
    'CCC',
    'CD',
    'D',
    'DC',
    'DCC',
    'DCCC',
    'CM',
    '',
    'X',
    'XX',
    'XXX',
    'XL',
    'L',
    'LX',
    'LXX',
    'LXXX',
    'XC',
    '',
    'I',
    'II',
    'III',
    'IV',
    'V',
    'VI',
    'VII',
    'VIII',
    'IX',
  ];

  if (!+num) return NaN;

  const digits = String(num).split('');
  let i = 3;
  let rom = '';

  while (i) {
    i -= 1;
    rom = (arr[+digits.pop() + i * 10] || '') + rom;
  }

  return Array(+digits.join('') + 1).join('M') + rom;
};

console.log(convertToRoman(798));
