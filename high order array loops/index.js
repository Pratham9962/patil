// for of loop for arrays

// ["", "", ""];
// [{}, {}, {}];

const arr = [1, 2, 3, 4, 5]

// for (const iterator of object) {
    
// }

for (const num of arr) {
    // console.log(num);    
}

const greeting = "Hello World!"
for (const greet of greeting) {
    // console.log(`Each char is :- ${greet}`);
}

// Maps
const map = new Map()
map.set('IN', "India")
map.set('USA', "United State Of America")
map.set('Fr', "France")
map.set('IN', "India")

// console.log(map);

for (const key of map) {
    console.log(key);
}

for (const [key, value] of map) {
    console.log(key, ':-', value);
}
// IN :- India
// USA :- United State Of America
// Fr :- France

const myObject = {
    'game1': 'NFS',
    'game2': 'Spiderman'
}

for (const [key, value] of myObject) {
    // console.log(key, ':-', value);
}
// myObject is not iterable