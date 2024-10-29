//const films = ['Die hard', 'Terminator', 'Kindergarten Cop'];
//
//const copyOfFilms = films.slice();
//console.log(copyOfFilms); // ['Die hard', 'Terminator', 'Kindergarten Cop']
//
//const filter = {
//  'Задачи на сегодня': 3,
//  'Просроченные': 2,
//  'Выполненные': 388,
//};
//
//const anotherFilter = {
//  'Назначенные на меня': 9,
//  'Поставленные мной': 5,
//};
//
//console.log(
//  Object.assign({}, filter, anotherFilter)
//);

// const getRandomInteger = (a, b) => {
//   const lower = Math.ceil(Math.min(a, b));
//   const upper = Math.floor(Math.max(a, b));
//   const result = Math.random() * (upper - lower + 1) + lower;
//   return Math.floor(result);
// };
//
// console.log(getRandomInteger(15, 20));



const createPhoto = (index) => ({
  id: index,
});


console.log(createPhoto());

