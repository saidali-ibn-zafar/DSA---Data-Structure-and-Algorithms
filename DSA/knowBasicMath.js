const evenlyDivide = (num) => {
  const madeArr = Array.from(String(num));

  let counterRes = 0;
  for (let i = 0; i < madeArr.length; i++) {
    if (num % madeArr[i] === 0) {
      counterRes++;
    }
  }
  return counterRes;
};

console.log(evenlyDivide(36));

// - - - - - - - - - - 
