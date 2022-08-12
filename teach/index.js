
const names = ["niyonkeru", 'bertin', 'nikuze'];
//iterrative method.
names.forEach((name) => {
    console.log("hello " + name);
});
console.log("=========================================")
// function isFound(arr, item) {
//     if (arr.filter((el) => el === item)) {
//         return true;
//     } else {
//         return false;
//     }
// }
// const numbers = [2, 3, 4, 5, 6, 7, 8, 5, 34]


// console.log(isFound(numbers, 45));

console.log("map function \n==============================\n");

const number = [2, 3, 4, 5, 6, 7, 8, 5, 34];
const added = number.map((el) => el + 10)
console.log(added);

const person = {
    name: "bertin",
    age: 29,
    height: 1.5,
    move: function () {
        return "I can move";
    }
}
const myName = person.move();
console.log(myName);

console.log("filiter method\n============================\n");
let student = [
    { fnae: "cyubahiro", sname: "innocent", age: 12 },
    { fnae: "akimana", sname: "anet", age: 12 },
    { fnae: "iyakaremye", sname: "anet", age: 12 },
    { fnae: "iranezeza", sname: "rosine", age: 12 },
];


const anyStudent = student.filter((st) => st.age === 12);
console.log(anyStudent);
console.log('reduce method\n=========================\n');
const num = [1, 2, 3, 4, 5, 6];

const sum = num.reduce((newVale, currentValue) => newVale + currentValue);

console.log(sum);


console.log("some() method\n========================\n");

const number1 = [10, 23, 4, 5, 67, 89, 2];

const isfound = number1.some((el) => el > 100);
console.log(isfound);//true.
console.log("every methids\n===============================");
const isgreater = number1.every((el) => el > 100);

console.log(isgreater);//true

console.log("sorting method on string\n===============================");

const users = ['uwimpuwe', 'zezenge', 'yakampaye', 'iranzi', 'xendr', 'alice'];

const alphabetic = users.sort();
console.log(alphabetic);
console.log("sorting method on numbers\n===============================");

const age = [12, 23, 70, 80, 1, 4, 12];
const fromYoungest = age.sort((a, b) => a - b);
console.log(fromYoungest);
const frimOlderst = age.sort((a, b) => b - a);
console.log(frimOlderst);