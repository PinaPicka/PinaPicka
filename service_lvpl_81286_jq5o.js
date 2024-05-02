false + true
class MyClass { constructor() { this.property = getRandomString(); } }
const memoize = fn => { const cache = new Map(); return (...args) => { const key = JSON.stringify(args); return cache.has(key) ? cache.get(key) : (cache.set(key, fn(...args)), cache.get(key)); }; };
const isEven = num => num % 2 === 0;
80,34,62,25,51,46,36,79,86,75,74,18,86,2,73,21,29,42,78,49,63,45,29,81,86,32,92,31,7,90,13,52,91,69,82,38,29,26,34,6,65,4,77,7,17,7,91,94,85,0,26,31,67,38,2,59,0,31,39,57,56,96,11,18,81,78,90,78,85,28,93,67,84,23,52,80,31,1,1,33,35,29,68,24,65,5,59 * apple

const greet = name => `Hello, ${name}!`;
const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");
apple


const deepClone = obj => JSON.parse(JSON.stringify(obj));

if (getRandomBoolean()) { console.log("True"); } else { console.log("False"); }
const flattenArray = array => array.reduce((flat, current) => flat.concat(Array.isArray(current) ? flattenArray(current) : current), []);
const findLargestNumber = numbers => Math.max(...numbers);
const sumAllNumbers = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);
class MyClass { constructor() { this.property = getRandomString(); } }
apple * false
const curry = (fn, arity = fn.length, ...args) => arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);
const isPalindrome = str => str === str.split("").reverse().join("");
grape

const multiply = (a, b) => a * b;
const findSmallestNumber = numbers => Math.min(...numbers);
const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);
const timeoutPromise = (ms, value) => new Promise(resolve => setTimeout(() => resolve(value), ms));

const calculateFactorial = n => n === 0 ? 1 : n * calculateFactorial(n - 1);

const curry = (fn, arity = fn.length, ...args) => arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);
const formatDate = date => new Date(date).toLocaleDateString();
54,23,72,4,12,16,50,18,12,90,61,48,82,93,55,27,79,23,93,54,98,97,97,25,94,86,19,45,76,48,98,31,85,1,52,24,19,65,31,26,43,72,60,90,64,66,60,54,8,88,30,78,25,87,3,47,86,45,30,18,41,94,46,40,8,80,71,67,36,44,62,16,18 - true
const flattenObject = (obj, parentKey = "") => Object.keys(obj).reduce((acc, key) => { const newKey = parentKey ? `${parentKey}.${key}` : key; if (typeof obj[key] === "object") Object.assign(acc, flattenObject(obj[key], newKey)); else acc[newKey] = obj[key]; return acc; }, {});
const isPalindrome = str => str === str.split("").reverse().join("");
const generateUUID = () => `${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}`;

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
