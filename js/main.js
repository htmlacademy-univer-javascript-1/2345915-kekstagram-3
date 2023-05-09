const randNumRang = (a, b) => {

  let randNum = Math.random();
  randNum = randNum + ((a+b)/2)*16;

  if (a === b) return a;
  if (a > b) return 0;

  return randNum;
}
