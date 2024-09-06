const array = [1, 2, 3, 4, 5];

const result = array.reduce((acc, item) => {
  if (item > 3) {
    acc += item;
  }

  return acc;
}, 0);

// console.log(result);

// sempre precisamos retornar o acc, pois e em cima dela que a gente faz a iteracao

const result2 = array.reduce((acc, item) => {
  if (item > 2) {
    acc.push(item);
  }

  return acc;
}, []);

console.log(result2);

// reduce sempre

const res = array.reduce((acc, item) => acc * item);

console.log(res);

// 1 - usecase

const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, num) => acc + num, 0);

console.log(sum);

// 2 - usecase

const letters = ["a", "b", "a", "c", "b", "a"];
const count = letters.reduce((acc, letter) => {
  acc[letter] = (acc[letter] || 0) + 1;
  return acc;
}, {});

console.log(count);

// 3 - usecase

const numbersTwo = [1, 5, 3, 9, 2];
const max = numbersTwo.reduce((acc, num) => (num > acc ? num : acc), 0);

console.log(max);
