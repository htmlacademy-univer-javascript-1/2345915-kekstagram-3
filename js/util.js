function lengthCheck (strChecked, maxLength) {
  return strChecked.lenght < maxLength;
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

function generateNewPost() {
  const photos = [];

  for(let i = 1; i < 26; i++) {
    photos.push(
      {
        id: i,
        uri: 'photos/{{i}}.jpg',
        decrioption: 'nice photos number ${i}',
        likes: getRandInt(15, 200),
        comments: getRandInt(0, 200)
      }
    )
  }
  return photos;
}

export {generateNewPost, getRandInt, lengthCheck};
