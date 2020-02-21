//** Reverse string between () every time meet it */
function reverseParentheses(s) {
    let arr = s.split('');
    
    const Model = function(type, index, flag) {
        this.type = type;
        this.index = index;
        this.flag = flag;
    };
    
    let oflag = 0;
    const aParens = [];
    arr.forEach((el, i) => {
        if(el === '(') {
            oflag += 1;
            aParens.push(new Model('left', i, oflag));
        }
        if(el === ')') {
            aParens.push(new Model('right', i, oflag));
            oflag -= 1;
        }      
    })
    
    const { length: len } = aParens;
    if(len === 0) return s;
    console.log(len, aParens);
       
    let k = 0, i = 0, j = 1;
    strOrder(aParens, i, j, k, arr);
    
    function strOrder(parens, i, j, k, arr) {
      if(parens[i].type === 'left' && parens[i+1].type === 'left') {
        k = i;      
      }  
      else if (parens[i].type === 'right' && parens[i+1].type === 'right') {
        i = k;
        for(let u = k - 1; u >= 0; u -= 1) {
          if( parens[u].type === parens[k].type && parens[u].flag === parens[k].flag - 1 ) {
            k = u;
            break;
          }
        }  
      }

      if(parens[i].type === 'left' && parens[j].type === 'right') {
        let temp = [];
        temp = arr.slice(parens[i].index, parens[j].index);
        temp.reverse();      
          
        arr.splice(parens[i].index, parens[j].index - parens[i].index, ...temp);
        i = j - 1;
      }

      if(j >= len - 1) { return; }
       
      strOrder(parens, i + 1, j + 1, k, arr);
    }
    
    arr = arr.filter((el) => !(el === ')' || el === '(') );
    return arr.join('');
}

// console.log(reverseParentheses('a(1 bc(2 de( 3fg 3)hij 2)kl1(2 mno 2)p 1)q'));

//**  */
function reverseParentheses(s) {
  while ( s != ( s = s.replace(/  \( [^(]*? \)  /, t => [...t].slice(1, -1).reverse().join('')) ) );
  return s;
}

// console.log(reverseParentheses('abdd (dsgj) '))

/** */
function reverseParentheses(s) {

  while (s.indexOf(")", 0) != -1) {
       var c = s.indexOf(")", 0);
       var a = s.lastIndexOf('(', c);
       var b = s.slice(a + 1, c).split("").reverse().join("");
       var s = s.slice(0, a) +b + s.slice(c + 1); 
         
      }
return s;

}

//** */
function reverseParentheses(s) {
  if (s.includes('(')){
      return reverseParentheses(reverseOnce(s));
  } else {     
      return s;
  }
}

function reverseOnce(s){
  var regexp = / \( ([^()]*) \) /i;
  var subStr = regexp.exec(s)[1];
  subStr = subStr.split('').reverse().join('');
  return s.replace(regexp, subStr)
}

//** */
function reverseParentheses(s) {
  const res = []
  let i = 0
  while (i < s.length) {
      const c = s[i]
      if (c === '(') {
          let j = i + 1, depth = 0
          for (; j < s.length; j++) {
              if (s[j] === ')') {
                  if (depth === 0) {
                      const inside = s.slice(i + 1, j)
                      res.push(...reverseParentheses(inside).split('').reverse())
                      break
                  } else {
                      depth--
                  }
              } else if (s[j] === '(') depth++
          }
          i = j + 1
      } else {
          res.push(c)
          i++
      }
  }
  return res.join('')
}


//** */

function reverse(s) {
  while(s.indexOf(')') !== -1) {
    b = s.indexOf(')');
    a = s.lastIndexOf('(', b);
    sub = s.slice(a + 1, b).split('').reverse().join(''); 

    s = s.slice(0, a) + sub + s.slice(b + 1); 
  }
  return s;
}

console.log(reverse('abd (de)'))