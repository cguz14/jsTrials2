'use strict';

// 1. countWords
function countWords(phrase) {
  
  const words = phrase.split(' ');
  const wordCounts = {};

  for (const word of words) {
    if (wordCounts[word]) {
      wordCounts[word] += 1;
    }
    else {
      wordCounts[word] = 1;
    }
  }

  return wordCounts
  
}

console.log(countWords("apple berry cherry banana apple apple"))

// 2. getMelonsAtPrice
function getMelonsAtPrice(price) {

  const melonPrices = {
          2.50: ['Cantaloupe', 'Honeydew'],
          2.95: ['Watermelon'],
          3.25: ['Musk', 'Crenshaw'],
          14.25: ['Christmas']
  }

  if (melonPrices[price]) {
    return (melonPrices[price]);
  }
  else {
    return `None at this price`;
  }

}

console.log(getMelonsAtPrice(2))