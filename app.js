
//////////////////////////1////////////////////////////////
let s = '123';
const num = Number(s);
console.log(num + 7);

//////////////////////////2////////////////////////////////
const x = 0;
if (!x) console.log("Invalid");

//////////////////////////3////////////////////////////////
for (let i = 1; i <= 10; i++) {
    if (i % 2 == 0) continue;
    else console.log(i);
}

//////////////////////////4////////////////////////////////
let a = [1, 2, 3, 4, 5];
let newArray = a.filter(num => num % 2 == 0);
console.log(newArray);

//////////////////////////5////////////////////////////////
let array1 = [1, 2, 3], array2 = [4, 5, 6];
let array3 = [...array1, ...array2];
console.log(array3);

//////////////////////////6////////////////////////////////
let day = 2;
switch (day) {
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid");

}

//////////////////////////7////////////////////////////////
let arr = ['a', 'af', 'ssd'];
let newA = arr.map(s => s.length);
console.log(newA);

//////////////////////////8////////////////////////////////
function check(num1) {
    if (num1 % 3 === 0 && num1 % 5 === 0) console.log('Divisible by both');
    else console.log('Not divisible by both');
}
check(15);

//////////////////////////9////////////////////////////////
let fun = (a) => a * a;
console.log(fun(5));

//////////////////////////10////////////////////////////////
function f({ name, age }) {
    console.log(`${name} is ${age} years old`)
}
f({ name: 'Sara', age: '20' });

//////////////////////////11////////////////////////////////
function sum(elements){
    let res=0;
    for (let i=0;i<elements.length;i++)res+=elements[i];
    return res;
}
console.log(sum([1,2,3,4,5,6]));

//////////////////////////12////////////////////////////////
function wait() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Success");
    }, 3000);
  });
}

wait().then((message) => {
  console.log(message);
});

//////////////////////////13////////////////////////////////
function maxi(numbers){
    return Math.max(...numbers);
}
console.log(maxi([1, 3, 7, 2, 4]));

//////////////////////////14////////////////////////////////
function getObj(obj) {
  return Object.keys(obj);
}
const input = { name: "John", age: 30 };
console.log(getObj(input)); 

//////////////////////////15////////////////////////////////
function splitString(str) {
  return str.split(" ");
}
const ip = "The quick brown fox";
console.log(splitString (ip));

////////////////////////// Essay Questions////////////////////////////////
/*
1- What is the difference between forEach and for...of? When would you use each?
    type of (forEack) is array method (callback) && No break/continue && (async/await)==>Doesn't wait
    type of (for..of) is loop statement && can use  break/continue && (async/await)==>waits for each await

2-What is hoisting and what is the Temporal Dead Zone (TDZ)? Explain with examples?
    The Temporal Dead Zone is the period between entering a scope and initializing a let or const variable.
        // TDZ starts here
        console.log(b); ReferenceError
        let b = 2;  // TDZ ends
    Hoisting 
       is JavaScript's default behavior of moving variable and function declarations to the top of their containing scope during the compilation phase, before the code is executed.

          console.log(score);   undefinedحصلها Hoisting بس بدون قيمتها)
          sayWelcome();      "Welcome, Queen!" 

3- What are the main differences between == and ===?
   == Compares only the value. If the data types are different, it performs automatic type coercion to compare them
   === Compares both the value and the data type. It does not perform any type conversion, so both must match completely for the result to be true

4- Explain how try-catch works and why it is important in async operations.
   try: بنحط جواها الكود اللي "محتمل" يحصل فيه مشكلة أو خطأ (Error/Exception). الجافاسكريبت بتنفذ الكود ده، ولو كل حاجة تمام بتعدي وتكمل عادي
   catch:ock: لو حصل أي خطأ جوه الـ try، التنفيذ بيقف فوراً ويتحول لـ catch عشان تمسك الخطأ ده (Catch) وتتعامل معاه (تطبع رسالة توضيحية مثلاً) بدل ما البرنامج كله ينهار (Crash).











*/








