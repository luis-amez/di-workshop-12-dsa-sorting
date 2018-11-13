function generateArrayOfRandomNumbers(size, max) {
  let arrayOfRandomNumbers = [];
  for(let i = 0; i < size; i++) {
    arrayOfRandomNumbers.push(getRandomInt(max));
  }
  return arrayOfRandomNumbers;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

module.exports = generateArrayOfRandomNumbers;