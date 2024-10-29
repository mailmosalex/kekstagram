// ТЗ - 1

// const getMaxLength = (string, maxLength) => string.length <= maxLength;

// моя версия
// function getMaxLength (string, maxLength) {
// return string.length <= maxLength;

//  if (string.length <= maxLength) {
//    return true;
//  }
//  return false;
// }

// const resolt = getMaxLength('проверяемая строка', 20);
// console.log('проверяемая строка - 20 ' + resolt);


//Функция для проверки длины строки. Она принимает строку, которую нужно проверить, и максимальную длину и возвращает true, если строка меньше или равна указанной длине, и false, если строка длиннее. Эта функция нам пригодится для валидации формы. Примеры использования функции:
// Строка короче 20 символов
// СимяФункции('проверяемая строка', 20); // true
// Длина строки ровно 18 символов
// СимяФункции('проверяемая строка', 18); // true
// Строка длиннее 10 символов
// СимяФункции('проверяемая строка', 10); // false

// ---------------------------------------------------------------------

// ТЗ - 2
// моя версия

/* function checkPalindrome (string) {
  const normString = string.toLowerCase().replaceAll(' ','');
  const backString = normString.split('').reverse().join('');

 // let backString = '';

 // for (let i = normString.length - 1; i >= 0; i--) {
 //   backString += normString[i];
 // }

  return backString === normString; //вместо if (backString === normString)
}



console.log(checkPalindrome('топот'));
console.log(checkPalindrome('ДовОд'));
console.log(checkPalindrome('Кекс'));
console.log(checkPalindrome('Лёша на полке клопа нашёл '));
*/
// Строка является палиндромом
// имяФункции('топот'); // true
// Несмотря на разный регистр, тоже палиндром
// имяФункции('ДовОд'); // true
// Это не палиндром
// имяФункции('Кекс');  // false

// ---------------------------------------------------------------------
// ТЗ - 3
// Функция принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа. Если в строке нет ни одной цифры, функция должна вернуть NaN:


// function getNambers (string) {
//   const oldString = string;
//   string = string.toString().replace(/\D/g, '');
//
//   const namber = parseInt(string, 10);
// //  for (let i = 0; i <= string.length - 1; i++) {
// //  }
//
// return console.log(oldString + ' - ' + string  + ' - ' + namber);
//
//
// }
//
//
// getNambers('2023 год');            // 2023
// getNambers('ECMAScript 2022');     // 2022
// getNambers('1 кефир, 0.5 батона'); // 105
// getNambers('агент 007');           // 7
// getNambers('а я томат');           // N
// getNambers(2023); // 2023
// getNambers(-1);   // 1
// getNambers(1.5);  // 15

// string = parseInt(string, 10);
// string = string.toString();



//let simbol = string[i];
//// if (Number.isNaN(simbol)) {
//   simbol = parseInt(simbol, 10);
//   namber += simbol;
//   return console.log(oldString + namber);
////   }
// console.log(simbol);
//}
//console.log(oldString + ' - ' + namber);


//console.log(({} === {}));

// const _ = require('lodash');

//const sourceObject = {
//  title: 'Spky',
//  age: 30,
//  permission: {
//    canEdit: true,
//    canView: true
//  }
//};
//
//const firstCopy = {...sourceObject};
//console.log(sourceObject.permission === firstCopy.permission);


// const firstCopy = Object.assign({}, sourceObject);
// console.log(sourceObject === firstCopy);
// console.log(sourceObject.permission === firstCopy.permission);

// const jsonData = JSON.stringify(sourceObject);
// const anatherDog = JSON.parse(jsonData);
//

// const anatherDog = _.cloneDeep(sourceObject);

// const anatherDog = structuredClone(sourceObject);

// console.log(sourceObject === anatherDog);
// console.log(sourceObject.permission === anatherDog.permission);

//console.log(sourceObject.test);
// console.log(sourceObject.test?.test); //опционльная цепочка

// -------------------------------

// дуструктуризация

//const sourceObject = {
//  title: 'Spky',
//  age: 30,
//  message: 'hello',
//  permission: {
//    canEdit: true,
//    canDelete: true,
//    role: 'user'
//  }
//
//};
//
//
////const { title: name, age, role = 'admin' } = sourceObject;
//const { permission: { canEdit, canDelete } } = sourceObject;
//
//console.log(canEdit, canDelete);
//

const colors = [ 'red', 'blue', 'orange', 'brown'];
const [ redd, blue,, brown ] = colors;

console.log(redd, blue, brown);
