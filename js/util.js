function lengthCheck (strChecked, maxLength) {
  return strChecked.lenght <= maxLength;
}

function getRandInt(a, b) {
  let minIntValue = Math.trunc(a);
  let maxIntValue = Math.trunc(b);

  if(minIntValue === maxIntValue || minIntValue < 0 || maxIntValue < 0) { return -1 ;}

  if(maxIntValue > minIntValue) {
    return Math.floor(Math.random() * (maxIntValue - minIntValue + 1)) + minIntValue;
  }

  if(maxIntValue < minIntValue) {
    const swap = minIntValue;
    minIntValue = maxIntValue;
    maxIntValue = swap;
    return Math.floor(Math.random() * (maxIntValue - minIntValue + 1)) + minIntValue;
  }
}

export {getRandInt, lengthCheck};


