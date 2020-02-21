// /////// Find missing letters in a string ////////
const fearNotLetter1 = (str) => {
  let arr = str.split('');
  const length = arr.length;
  str = '';

  arr = arr.sort();

  for (let i = 0; i < length - 1; i++) {
    if (arr[i].charCodeAt(0) + 1 != arr[i + 1].charCodeAt(0)) {
      arr[i] = String.fromCharCode(arr[i].charCodeAt(0) + 1);
      str += arr[i];
      i -= 1;
    }
  }

  if (str == '') {
    return undefined;
  }

  return str;
};

// /////////////////////////////////////////////////
const fearNotLetter2 = (str) => {
  let arr = str.split('');
  const length = arr.length;
  str = '';

  arr = arr.sort();

  for (let i = 0; i < length - 1; i++) {
    const k = arr[i + 1].charCodeAt(0) - arr[i].charCodeAt(0);
    if (k > 1) {
      for (let j = 1; j < k; j++) {
        arr[i] = String.fromCharCode(arr[i].charCodeAt(0) + 1);
        str += arr[i];
      }
    }
  }

  if (str == '') {
    return undefined;
  }

  return str;
};

// //////////////////////////////////////////////
const fearNotLetter = (str) => {
  // arrange string alphabetically
  str = str
    .split('')
    .sort()
    .join('');

  // get smallest and largest char codes
  let pre = str.charCodeAt(0);
  const post = str.charCodeAt(str.length - 1);

  // find missing letters in the string
  let res = '';
  let char = '';
  while (pre < post - 1) {
    char = String.fromCharCode(pre + 1);
    if (!str.includes(char)) res += char;
    pre++;
  }

  if (res === '') {
    res = undefined;
  }

  return res;
};

// console.log(fearNotLetter1("abckhjtf"));
// console.log(fearNotLetter2("abckhjtf"));
console.log(fearNotLetter('abcg'));
