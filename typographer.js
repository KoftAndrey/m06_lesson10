const testStr = `Организация «Версусозеро».

#1
С учётом сложившейся международной обстановки, граница обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании системы массового участия. Принимая во внимание показатели успешности, социально-экономическое развитие играет определяющее значение для поэтапного и последовательного развития общества. Социально-экономическое развитие влечет за собой процесс внедрения и модернизации модели развития. Это главная цель «Версусозеро».

#2
Высокий уровень вовлечения представителей целевой аудитории является четким доказательством простого факта: дальнейшее развитие различных форм деятельности предопределяет высокую востребованность распределения внутренних резервов и ресурсов! А ещё независимые государства лишь добавляют фракционных разногласий и объединены в целые кластеры себе подобных. Противоположная точка зрения подразумевает, что стремящиеся вытеснить традиционное производство, нанотехнологии неоднозначны и будут ограничены исключительно образом мышления.

#3
Имеется спорная точка зрения, гласящая примерно следующее: независимые государства могут быть призваны к ответу. Повседневная практика показывает, что перспективное планирование прекрасно подходит для реализации вывода текущих активов. Безусловно, понимание сути ресурсосберегающих технологий однозначно фиксирует необходимость позиций, занимаемых участниками в отношении поставленных задач. Приятно, граждане, наблюдать, как интерактивные прототипы разоблачены. Вот вам яркий пример современных тенденций - дальнейшее развитие различных форм деятельности позволяет оценить значение направлений прогрессивного развития.

© "Версусозеро"
`;

// проверка предлогов
const checkPrepositions = str => {
  const prepositionsRegExp = /(?<![_\d\p{L}])(в|без|до|для|за|через|над|по|из|у|около|под|о|про|на|к|перед|при|с|между|и|а|во) /giu;
  return str.replace(prepositionsRegExp, '$1nbsp;');
};

// проверка copyright
const checkCopyrightSymbol = str => {
  const copyrightSymbolRegExp = /© /g;
  return str.replace(copyrightSymbolRegExp, '&copy;nbsp;');
};

// проверка # и №
const checkHashAndNumber = str => {
  const hashAndNumberRegExp = /(#|№)/g;
  return str.replace(hashAndNumberRegExp, '&#8470');
};

// проверка тире
const checkDash = str => {
  const dashRegExp = / \p{Pd} /gu;
  return str.replace(dashRegExp, '&nbsp;&mdash; ');
};

// проверка кавычек
const checkQuotes = str => {
  const quotesRegExp = /['"«]([а-я|А-Я|ё|Ё|0-9|.|!|#|$|%|&|’|*|+|/|=|?|^|_|`|{|\\||}|~|-|\s]+)['"»]/gu;
  return str.replace(quotesRegExp, '&laquo;$1&raquo;');
};

// типографер
const typographer = str => {
  const preposotion = checkPrepositions(str);
  const copyright = checkCopyrightSymbol(preposotion);
  const number = checkHashAndNumber(copyright);
  const dash = checkDash(number);
  return checkQuotes(dash);
};

console.log(typographer(testStr));