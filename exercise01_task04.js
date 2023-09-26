const str = 'Вот примеры сайтов. Первый- https://site.com. Второй - http://site.ru';
const urlRegExp = /htt(p|ps):\/\/(\w+((\.|-)\w+)*\.(ru|com))/g;

const findAndWrapUrl = (str, regExp) => str.replace(regExp, '<a href="$&">$2</a>');

console.log(findAndWrapUrl(str, urlRegExp));
