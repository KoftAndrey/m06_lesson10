const regExp = /^\w+@[a-z]{3,}\.[a-z]{2,5}$/;

const str = 'info@methed.ru текст max24@mail.com java_script@google.io текст my-mail@yandex.ru tom_yam@ya.ru zero@mai1.xyz';

const findEmail = (str, regExp) => str.split(' ').filter(str => regExp.test(str));

console.log(findEmail(str, regExp));
