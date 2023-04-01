"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.call = exports.fruits = exports.city = void 0;
console.log('Hello  js import & Export module "THIS IS THE FILE_01');
/// I am exporting variable from FILE-01 to FILE-02
exports.city = 'Karachi';
// Here I am exporting an Array from FILE-01 to FILE-02 :
exports.fruits = ['Apple', 'Orange', 'Banana', 'Grapes', 'Peach'];
// Now I am exporting a function from FILE-01 to FILE-02 :
function call() {
    console.log('hello This is a function');
}
exports.call = call;
