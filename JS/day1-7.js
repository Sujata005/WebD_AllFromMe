let name = "Bean";
let age = 25;
let pi = 3.14;
let isStudent = true;
let x;
let y = null;
let id1 = Symbol("id");
let id2 = Symbol("id");
let big = 123456789012345678901234567890n;
console.log(name);
console.log(age); 
console.log(pi); 
console.log(isStudent); 
console.log(x); 
console.log(y); 
console.log(id1 === id2); 
console.log(big); 

let person = { name: "Bean", age: 24 };
console.log(person.name); // "Bean"
console.log(person.age); 

let colors = ["red", "green", "blue"];
console.log(colors[0]);
console.log(colors[1]); // "green"
console.log(colors[2]);
function greet() {
  console.log("Hello!");
}
greet();

let a = 10, b = 3;
console.log(a + b); // 13
console.log(a % b); // 1
let m = 5;
m += 2; // x = x + 2
console.log(x); // 7
console.log(5 == "5");  // true (loose equality)
console.log(5 === "5"); // false (strict equality)
console.log(5 == "5");     // true (string "5" converted to number)
console.log(0 == false);   // true (false converted to 0)
console.log(null == undefined); // true (special case)
console.log(5 === "5");    // false (different types)
console.log(0 === false);  // false (number vs boolean)
console.log(null === undefined); // false
console.log(5 === 5);      // true
console.log(5 != "5");   // false
console.log(0 != false); // false
console.log(5 !== "5");   // true
console.log(0 !== false); // true
console.log("apple" < "banana"); // true
console.log("Zebra" < "apple");  // true ("Z" Unicode is 90, "a" is 97)
console.log(null == undefined);  // true
console.log(null === undefined); // false
console.log(null < 1);   // true (null becomes 0)
console.log(undefined < 1); // false (undefined becomes NaN)
console.log(NaN == NaN);  // false
console.log(NaN === NaN); // false
console.log(isNaN(NaN));  // true
console.log(true == 1);  // true
console.log(false == 0); // true
console.log(m);

let num = 18;

if (num >= 18) {
  console.log("You are an adult");
} else {
  console.log("You are a minor");
}

console.log(true && false); // false
console.log(true || false); // true
let n = 5;
console.log(++n); // 6
console.log(typeof n); // number


let str1 = "Hello";       // Double quotes
let str2 = 'World';       // Single quotes
let str3 = `Hi, ${str1}`; // Template literal with interpolation
console.log(str3);
console.log("JavaScript".length); // 10
let s = "Hello JS";
console.log(s.toUpperCase()); // "HELLO JS"
console.log(s.toLowerCase()); // "hello js"
let str = "JavaScript";
console.log(str.slice(0, 4)); // "Java"  (start, end)
console.log(str.substring(4, 10)); // "Java" (similar to slice)
let text = "I love JavaScript";
console.log(text.includes("love")); // true
console.log(text.indexOf("JS"));    // -1 (not found)
let msg = "Hello World";
console.log(msg.replace("World", "JS")); // "Hello JS"
let csv = "red,green,blue";
let arr = csv.split(","); // ["red", "green", "blue"]
console.log(arr.join(" | ")); // "red | green | blue"
let spaced = "   Bean   ";
console.log(spaced.trim()); // "Bean"
let txt = `Hello, ${name}! Welcome to JS.`;
console.log(txt);

console.log(Math.round(4.6)); // 5
console.log(Math.floor(4.9)); // 4
console.log(Math.ceil(4.1));  // 5
console.log(Math.pow(2, 3));  // 8
console.log(Math.sqrt(16));   // 4
console.log(Math.pow(2, 3));  // 8
console.log(Math.sqrt(16));   // 4
console.log(Math.random()); // Random between 0 and 1
// Random between 1 and 10:
console.log(Math.floor(Math.random() * 10) + 1);
console.log(Math.abs(-10));  // 10
console.log(Math.sign(-5));  // -1
console.log(Math.max(10, 20, 5)); // 20
console.log(Math.min(10, 20, 5)); // 5
console.log(Math.PI);  // 3.14159...
console.log(Math.E);   // 2.718...
