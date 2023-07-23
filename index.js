// 2.1 - Sum of lowest numbers 
// Create a function that returns the sum of the two lowest positive numbers given an array of 
// minimum 4 positive i ntegers. No floats or non-positive integers will be passed. 
// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7
function sumTowLOwestPositive(numbers){
const sortedNumbers=numbers.sort((a, b) => a - b);
return sortedNumbers[0]+sortedNumbers[1];
}
console.log(sumTowLOwestPositive([19,5,42,2,77]));

// Ex2.2 - One and Zero - Binary  
// Given an array of ones and zeroes, convert the equivalent binary value to an integer. 
 
// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1

function convertBinaryInteger(number){
return parseInt(number.join(''),2);
}
console.log(convertBinaryInteger([0,1,0,1]));

// 2.3 - Find the Next Perfect Square 
 
// You might know some pretty large perfect squares. But what about the NEXT one? 
 
// Complete the findNextSquare method that finds the next integral perfect square after the one 
// passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is 
// also an integer. 
 
// If the parameter is itself not a perfect square then -1 should be returned. You may assume the 
// parameter is positive

const findNextSquare = sq => Number.isInteger(Math.sqrt(sq)) ? Math.pow(Math.sqrt(sq) + 1, 2) : -1;
console.log(findNextSquare(121));

// 2.4 - Unique 
 
// There is an array with some numbers. All numbers are equal except for one. Try to find it! 
// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2 
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55 
// It’s guaranteed that array contains at least 3 numbers. 

const findUniq = arr => arr.find(num => arr.indexOf(num) === arr.lastIndexOf(num));
console.log(findUniq([1, 1, 1, 2, 1, 1]));

// 2.5 - Summation 
// Write a program that finds the summation of every number from 1 to num. The number will 
// always be a positive integer greater than 0. 
const summation = num => (num * (num + 1)) / 2;
console.log(summation(8));

// 2.6 - Years and Centuries 
// The first century spans from the year 1 up to and including the year 100, The second - from the 
// year 101 up to and including the year 200, etc. 
// Task : 
// Given a year, return the century it is in. 
// Input , Output Examples :: 
// centuryFromYear(1705)  returns (18)
const centuryFromYear = year => Math.ceil(year / 100);
console.log(centuryFromYear(1705)); // Output: 18

// 2.7 - Basic Math 
// Your task is to create a function that does four basic . 
// The function should take three arguments - operation(string/char), value1(number), 
// value2(number). 
// The function should return result of numbers after applying the chosen operation
const basicMath = (operation, value1, value2) => eval(`${value1} ${operation} ${value2}`);
console.log(basicMath('+', 4, 7));
console.log(basicMath('-', 15, 18));
console.log(basicMath('*', 5, 5));
console.log(basicMath('/', 49, 7));

// 3.2 - People on the Bus 
// Number of people in the bus 
// There is a bus moving in the city, and it takes and drop some people in each bus stop. 
// You are provided with a list (or array) of integer arrays (or tuples). Each integer array has two 
// items which represent number of people get into bus (The first item) and number of people get 
// off the bus (The second item) in a bus stop. 
// Your task is to return number of people who are still in the bus after the last bus station (after 
// the last array). Even though it is the last bus stop, the bus is not empty and some people are still 
// in the bus, and they are probably sleeping there :D 
// Take a look on the test cases. 
// Please keep in mind that the test cases ensure that the number of people in the bus is always 
// >= 0. So the return integer can't be negative. 
// The second value in the first integer array is 0, since the bus is empty in the first bus stop. 
const peopleOnBus = busStops => busStops.reduce((acc, [enter, exit]) => acc + enter - exit, 0);
console.log(peopleOnBus([[3, 0], [4, 2], [10, 5]]));

// Ex4.1 - Fibonacci -  
// “Write a function to return an n element in Fibonacci sequence” is one of the most common 
// questions you can hear during the coding challenge interview part. In this blogpost I’m going to 
// walk through the two of the most typical solutions for this problem and also cover a dreadful (for 
// most of novice developers) topic of time complexity. 
// So what is a Fibonacci sequence? According to ​Wikipedia​: 
// “In mathematics, the Fibonacci numbers are the numbers in the following integer sequence, 
// called the Fibonacci sequence, and characterized by the fact that every number after the first 
// two is the sum of the two preceding ones.” 
// Depending on the chosen starting point of the sequence (0 or 1) the sequence would look like 
// this: 
// 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ... 
// or this: 
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ... 

// const fibonacciRecursive = n => (n <= 1) ? n : fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
// console.log(fibonacciRecursive(0,1));
// 5.1 - trimming string 
// It's pretty straightforward. Your goal is to create a function that removes the first and last 
// characters of a string. You're given one parameter, the original string. You don't have to worry 
// with strings with less than two characters.
const trimString = str => str.slice(1, -1);
console.log(trimString("hello"));

// 5.2 - String Repeat 
// Write a function called repeat_str which repeats the given string src exactly count times.

const repeat_str = (src, count) => src.repeat(count);
console.log(repeat_str("I",6));

// 5.3 - To Camel Case 
// Complete the method/function so that it converts dash/underscore delimited words into camel 
// casing. The first word within the output should be capitalized only if the original word was 
// capitalized (known as Upper Camel Case, also often referred to as Pascal case).

const toCamelCase = str => str.replace(/[-_]\w/g, match => match.charAt(1).toUpperCase());
console.log(toCamelCase("the-stealth-warrior"));

// 5.4 - To Weird Case 
// Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same 
// string with all even indexed characters in each word upper cased, and all odd indexed 
// characters in each word lower cased. The indexing just explained is zero based, so the zero-ith 
// index is even, therefore that character should be upper cased. 
// The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only 
// be present if there are multiple words. Words will be separated by a single space(' ').

const toWeirdCase = str => str.split(' ').map(word => word.split('').map((char, index) => index % 2 === 0 ? char.toUpperCase() : char.toLowerCase()).join('')).join(' ');
console.log(toWeirdCase("String"));

// 5.5 - Abbreviate two words 
// Write a function to convert a name into initials. This kata strictly takes two words with one space 
// in between them. 
// The output should be two capital letters with a dot separating them.

const abbreviateName = name => name.split(' ').map(word => word.charAt(0).toUpperCase()).join('.');
console.log(abbreviateName("Sam Harris"));

// 5.6 - Mask 
// Usually when you buy something, you're asked whether your credit card number, phone number 
// or answer to your most secret question is still correct. However, since someone could look over 
// your shoulder, you don't want that shown on your screen. Instead, we mask it. 
// Your task is to write a function maskify, which changes all but the last four characters into '#'. 
const maskify = str => str.slice(0, -4).replace(/./g, '#') + str.slice(-4);
console.log(maskify("Skippy"));

// 5.7 shortest words 
// Simple, given a string of words, return the ​length​ of the shortest word(s). 
// String will never be empty and you do not need to account for different data types
const shortestWordLength = str => Math.min(...str.split(' ').map(word => word.length));
console.log(shortestWordLength("hey world"));

// 5.8 - shortest words version 2 
// Given a string of words, return the longest word[s]. 
// String will never be empty and you do not need to account for different data types. 

const longestWords = str => str.split(' ').reduce((longest, word) => (word.length > longest[0].length ? [word] : (word.length === longest[0].length ? [...longest, word] : longest)), ['']);
console.log(longestWords("hey world"));