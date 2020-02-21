const addTogether = (...arr) => {
  if (arr.length < 1 || arr[0] !== +arr[0]) {
    return undefined;
  } else if (arr.length === 1) {
    return (b) => {
      if (b !== +b) {
        return undefined;
      }
      return b + arr[0];
    };
  } else if (arr[1] !== +arr[1]) {
    return undefined;
  }

  return arr[0] + arr[1];
};

addTogether(2, 3);
