/* eslint-disable import/prefer-default-export */
function generateRandomNumber(min, max) {
  return min + Math.floor(Math.random() * (max - min + 1));
}

export { generateRandomNumber };
