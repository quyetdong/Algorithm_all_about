const convertToRoman = (num) => {
  const arr = ['M', 'D', 'C', 'L', 'X', 'V', 'I'];
  let rom = '';

  const toRom = (value1, value2, s1, s2, s3) => {
    if (num >= value1) {
      rom += s1 + s2;
      num -= value1;
    } else if (num >= value2) {
      for (let i = 0, iter = Math.floor(num / value2); i < iter; i++) {
        rom += s3;
      }
      num %= value2;
    }
  };

  if (num >= 1000) {
    for (let i = 0, iter = Math.floor(num / 1000); i < iter; i++) {
      rom += 'M';
    }
    num %= 1000;
  }

  toRom(900, 500, arr[2], arr[0], arr[1]);
  toRom(400, 100, arr[2], arr[1], arr[2]);

  toRom(90, 50, arr[4], arr[2], arr[3]);
  toRom(40, 10, arr[4], arr[3], arr[4]);

  toRom(9, 5, arr[6], arr[4], arr[5]);
  toRom(4, 1, arr[6], arr[5], arr[6]);

  return rom;
};

convertToRoman(900);
