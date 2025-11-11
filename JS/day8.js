let arr = [10, "Hello", true];
console.log(arr[1]); // "Hello"
let fruits = ["apple", "banana"];
fruits.push("mango");   // add to end
console.log(fruits);
fruits.unshift("grape"); // add to start
console.log(fruits);
fruits.pop();           // remove last
console.log(fruits);
fruits.shift();         // remove first
console.log(fruits);
console.log(fruits.indexOf("banana")); // 0
console.log(fruits.includes("mango")); // false
let nums = [1,2,3,4,5];
console.log(nums.slice(1,3)); // [2,3] (does not modify)
nums.splice(2,1);             // remove 1 element at index 2
console.log(nums);            // [1,2,4,5]
let colors = ["red","green","blue"];
colors.forEach(c => console.log(c));
let numbers = [1,2,3];
let doubled = numbers.map(n => n*2);   // [2,4,6]
console.log(doubled);
let even = numbers.filter(n => n%2==0);// [2]
console.log(even);
let sum = numbers.reduce((a,b)=>a+b,0);// 6
console.log(sum);

let now = new Date();
console.log(now);
let d1 = new Date(); // current date & time
console.log(d1);
let d2 = new Date("2025-09-27"); // specific date
console.log(d2);
let d3 = new Date(2025, 8, 27);  // year, month (0-based), day
console.log(d3);
let today = new Date();
console.log(today.getFullYear()); // 2025
console.log(today.getMonth());    // 8 (September, since Jan=0)
console.log(today.getDate());     // 27
console.log(today.getDay());      // 6 (Saturday, since Sunday=0)
console.log(today.getHours());    // current hour
let d = new Date();
d.setFullYear(2030);
d.setMonth(0); // January
console.log(d);

let person = {
  name: "Bean",
  age: 21,
  city: "Dehradun"
};
console.log(person);
console.log(person.name);     // Bean
console.log(person["age"]);   // 21
person.country = "India"; // Add
console.log(person);
person.age = 22;          // Modify
console.log(person);
delete person.city;       // Delete
console.log(person);
for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}
let stud = {
  name: "Sujata",
  marks: {
    math: 90,
    science: 85
  }
};
console.log(stud);
console.log(stud.marks.math); // 90
let carr = {
  brand: "Tesla",
  start: function() {
    console.log("Car started");
  }
};
carr.start(); // Car started
console.log(carr);

let per = {
  name: "Bean",
  age: 21,
  greet: function() {
    console.log(`Hi, I’m ${this.name} and I’m ${this.age} years old.`);
  }
};

per.greet(); // Hi, I’m Bean and I’m 21 years old.
const student = { name: "Sujata", age: 22, course: "B.Tech" };

// Traditional way
console.log(student.name);

// Using destructuring
const { name, age } = student;
console.log(student);
console.log(name); // Sujata
console.log(age);  // 22

const { course: subject } = student;
console.log(subject); // B.Tech
const user = {
  id: 1,
  details: {
    username: "bean",
    email: "bean@example.com"
  }
};
console.log(user);
const { details: { username, email } } = user;
console.log(username); // bean
let pers = { name: "Bean", age: 21 };
let copy = { ...pers };
console.log(copy); // { name: 'Bean', age: 21 }
let job = { role: "Developer" };
let merged = { ...pers, ...job };
console.log(merged); // { name: 'Bean', age: 21, role: 'Developer' }

let ocu = { role: "Developer" };
let merge = { ...pers, ...ocu };
console.log(merge); // { name: 'Bean', age: 21, role: 'Developer' }
const car = { brand: "Tesla", color: "Red" };
const specs = { range: "400km", autopilot: true };

const fullCar = { ...car, ...specs };

for (let [key, value] of Object.entries(fullCar)) {
  console.log(`${key} → ${value}`);
}

