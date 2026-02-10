"use strict";
// let sayGreetings = 'Hello World'
// console.log(sayGreetings)
Object.defineProperty(exports, "__esModule", { value: true });
// normal js code with the variable sayGreetings which contains Hello World, here it is not compalsory to keep the value as Hello World instead we can keep any data like it might be anything like 12, 'sdadasda', {}, etc...,
// here the ts comes to the point to avoid all these conflicts of keeping all the data types in this sayGreetings variable we keep only STRING based data only.
// down one is the ts code of the above js code:
let sayGreetings = 'Hello World';
console.log(sayGreetings);
// sayGreetings = 12 // here this is error but ts just says the error but this line is updated in the hello.js file without any error and we will get the output as 12
console.log(sayGreetings);
let age = 12;
//# sourceMappingURL=hello.js.map