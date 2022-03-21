// get square root that is 5 digit decimal precision
function sq(inp) {
  console.log(Math.sqrt(inp));

  if (inp * inp == inp) return inp;
  inp = inp * Math.pow(10, 10);

  let ans;
  let above = inp;
  let below = 0;

  while (above - below > 0) {
    let mid = Math.floor((above + below)/2);

    if (mid * mid > inp) {
      above = mid;
    }
    else {
      below = mid + 1;
      ans = mid;
    }
  }

  return ans / Math.pow(10, 5);
}

console.log(sq(13));
