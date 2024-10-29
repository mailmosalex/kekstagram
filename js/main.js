const PHOTO_VALUME = 25;
const LIKES_MIN = 15;
const LIKES_MAX = 200;
const COMMENT_MIN_INDEX = 0;
const COMMENT_MAX_INDEX = 30;
const AVATAR_MIN_ID = 1;
const AVATAR_MAX_ID = 6;
const MESSAGE_MIN_COUNT = 1;
const MESSAGE_MAX_COUNT = 2;


const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const DESCRIPTIONS = [
  'Красивый вид :) #озеро',
  'Указатель на пляж. А пляж где? 🤔',
  'Вот так и живу. #заметкиРобинзона',
  'Настоящие? Ставьте 1000 лайков, расскажу ;)',
  'Мое самочувстивие после вчерашней вечеринки 🤮',
  'Сфоткал тачку... жаль, что не моя...',
  'Жена сказала пора худеть :( #сушка',
  'Ммм... кисель )) #люблюФоткатьЕду',
  'Обещал вернуться 😭',
  'Во всем должен быть порядок. Мои поближе, его подальше 👍',
  'Пляжный лабиринт. Кто знает как выйти? 🤔',
  'Опять сфоткал тачку... и снова жаль, что не моя...',
  'Садат - просто бомба! Делаю вид, что очень вкусно #люблюФоткатьЕду',
  'Кекс на рсслабоне #cушиКот',
  'Продам тапочки, немного большеваты, но можно и на улицу в зиму бегать',
  'Горы, небо и земля вот и вся моя страна!',
  'Опять не в ту ноту попала. Нечего на меня так смотреть!',
  'Отгадай чья? Правильно... не моя (((',
  'От жены в ночи теперь не спрячешься 😝',
  '#PalmResort',
  'Вкус...специфффическийй. Но красиво. #люблюФоткатьЕду',
  'Ухожу в закат... больше не пишите, вернусь поздно',
  'Вот этим и питаюсь #заметкиРобинзона',
  'Киркоров снова удивил 🤘',
  'Слышь? Семки есть? А если найдем?'
];

const NAMES = [
  'Смуфрик',
  'I am Пётр Великий',
  'Рокки Бальбоа',
  'Зелёный Енот',
  'Гостья из будущего',
  'Котёнок Гав'
];

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (elements) =>
  elements[getRandomInteger(0, elements.length - 1)];

const createIdGenerator = () => {
  let numberId = 0;
  return () => {
    numberId++;
    return numberId;
  };
};

const generatePhotoId = createIdGenerator();

const createMessage = () => Array.from(
  {length: getRandomInteger(MESSAGE_MIN_COUNT, MESSAGE_MAX_COUNT)},
  () => getRandomArrayElement(COMMENTS)
);

const createComment = () => ({
  id: generatePhotoId(),
  name: getRandomArrayElement(NAMES),
  avatar: `img/avatar-${getRandomInteger(AVATAR_MIN_ID, AVATAR_MAX_ID)}.svg`,
  message: createMessage(),
});


const createPhoto = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: DESCRIPTIONS[index - 1],
  likes: getRandomInteger(LIKES_MIN, LIKES_MAX),
  comments: Array.from(
    {length: getRandomInteger(COMMENT_MIN_INDEX, COMMENT_MAX_INDEX)},
    createComment
  ),
});


const getPhotos = () => Array.from(
  {length: PHOTO_VALUME},
  (_, index) => createPhoto(index + 1)
);

getPhotos();
console.log(getPhotos());
