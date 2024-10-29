//const films = ['Die hard', 'Terminator', 'Kindergarten Cop'];
//
//const copyOfFilms = films.slice();
//console.log(copyOfFilms); // ['Die hard', 'Terminator', 'Kindergarten Cop']
//
const filter = {
  'Задачи на сегодня': 3,
  'Просроченные': 2,
  'Выполненные': 388,
};

const anotherFilter = {
  'Назначенные на меня': 9,
  'Поставленные мной': 5,
};

console.log(
  Object.assign({}, filter, anotherFilter)
);

