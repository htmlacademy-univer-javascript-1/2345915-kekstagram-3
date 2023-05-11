import { getRandInt } from './util.js';

function generateNewPosts () {
  const photos = [];
  for(let i = 1; i < 26; i++) {
    photos.push(
      {
        id: i,
        url: `photos/${i}.jpg`,
        description: `my best photo ${i}`,
        likes: getRandInt(15, 200),
        comments: getRandInt(0, 200)
      }
    );
  }
  return photos;
}

export {generateNewPosts};
