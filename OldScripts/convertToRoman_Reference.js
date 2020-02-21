function convertToRoman(num) {
  const romans = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
  const ints = [];
  const romanNumber = [];
  let numeral = '';
  let s = '';

  if (num >= 1000) {
    for (let i = 0; i < Math.floor(num / 1000); i++) {
      s += 'M';
    }
    num %= 1000;
  }

  while (num) {
    ints.push(num % 10);
    num = Math.floor(num / 10);
  }
  for (let i = 0; i < ints.length; i++) {
    units(ints[i]);
  }

  function units() {
    numeral = romans[i * 2];
    switch (ints[i]) {
      case 1:
        romanNumber.push(numeral);
        break;
      case 2:
        romanNumber.push(numeral.concat(numeral));
        break;
      case 3:
        romanNumber.push(numeral.concat(numeral).concat(numeral));
        break;
      case 4:
        romanNumber.push(numeral.concat(romans[i * 2 + 1]));
        break;
      case 5:
        romanNumber.push(romans[i * 2 + 1]);
        break;
      case 6:
        romanNumber.push(romans[i * 2 + 1].concat(numeral));
        break;
      case 7:
        romanNumber.push(romans[i * 2 + 1].concat(numeral).concat(numeral));
        break;
      case 8:
        romanNumber.push(romans[i * 2 + 1]
          .concat(numeral)
          .concat(numeral)
          .concat(numeral));
        break;
      case 9:
        romanNumber.push(romans[i * 2].concat(romans[i * 2 + 2]));
    }
  }

  return (
    s +
    romanNumber
      .reverse()
      .join('')
      .toString()
  );
}

// test here
console.log(convertToRoman(4975));

// for(var i=0; i<4;i++){
//   a(i);
// }
// function a(){
//   switch(i){
//     case 1: console.log(i);
//     break;
//     case 2: console.log(i*2);
//     break;
//     case 3: console.log(i*3);
//     break;
//   }
// }
