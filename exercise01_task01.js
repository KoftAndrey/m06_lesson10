const arr = ['module.jsx', 'index.html', 'style.css', 'index.js', 'file.ts', 'library.css', 'my.plugin.js'];

const regExp = /^\w+(\.js|\.jsx|\.ts)$/;

const filterArr = (arr, regExp) => arr.filter(str => regExp.test(str));

filterArr(arr, regExp);

