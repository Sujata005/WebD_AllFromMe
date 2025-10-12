// let name = "Bean";
// let age = 25;
let pi = 3.14;
let isStudent = true;
// let x;
let y = null;
let id1 = Symbol("id");
let id2 = Symbol("id");
let big = 123456789012345678901234567890n;
// console.log(name);
// console.log(age); 
console.log(pi); 
console.log(isStudent); 
// console.log(x); 
// console.log(y); 
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
let x = 5;
x += 2; // x = x + 2
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
let age = 18;

if (age >= 18) {
  console.log("You are an adult");
} else {
  console.log("You are a minor");
}

console.log(true && false); // false
console.log(true || false); // true
let n = 5;
console.log(++n); // 6
console.log(typeof n); // number


