// Map percorre todo o array e retorna um novo array com os resultados da funcao de callback()
const array = [1, 2, 3, 4, 5];

const result = array.map(function (item) {
  if (item >= 3) {
    return item * 2;
  }

  return item;
});

console.log(result);

// short syntax da funcao de callback => arrow function

const result2 = array.map((item) => {
  if (item > 1) {
    return item * 2;
  }

  return item;
});

console.log(result2);

// 1 - usecase

const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((num) => num * 2);

console.log(doubled);

// 2 - usecase

const asString = numbers.map((num) => num.toString());

console.log(asString);

// 3 - usecase

const peoples = [{ name: "Leonardo" }, { name: "Evelin" }];
const withAge = peoples.map((people) => ({ ...people, age: 25 }));

console.log(withAge);
