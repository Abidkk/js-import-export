 console.log('Hello  js import & Export module "THIS IS THE FILE_02');
/*
// I am importing variable CITY from FILE-01
import {city} from './file1';
console.log(city)

// Now I am importing Array from FILE-01:
import { fruits } from './file1';
console.log(fruits)

/// Here I am importing the function call();
import {call} from './file1'
call();
*/





// importing all modules from FILE1 together:
import { city, fruits,call } from './file1';

console.log(city);
console.log(fruits);
call();
