//Modules

const names = require('./4-name');
const sayHello = require('./5-utils');
const name1 = names.name1;
const name2 = names.name2;

console.log(names);



sayHello("Mary");
sayHello(name1);
sayHello(name2);
