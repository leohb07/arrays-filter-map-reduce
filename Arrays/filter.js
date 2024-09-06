const array = [1, 2, 3, 4, 5];

const result = array.filter((item) => {
  return item % 2 === 0;
});

console.log(result);

// filter retorna um novo array com os elementos que satisfazem uma determinada condicao

const result2 = array.filter((item) => {
  // precisa ser um boolean
  return item > 2;
});

console.log(result2);

// 1 - usecase

const numbers = [1, 2, 3, 4, 5];
const evens = numbers.filter((num) => num % 2 === 0);

console.log(evens);

// 2 - usecase

const words = ["apple", "cat", "banana", "dog"];
const shortWords = words.filter((word) => word.length < 5);

console.log(shortWords);

// 3 - usecase

const peoples = [
  { name: "Leonardo", age: 23 },
  { name: "Bob", age: 18 },
  { name: "John", age: 17 },
];
const adults = peoples.filter((people) => people.age > 18);

console.log(adults);
