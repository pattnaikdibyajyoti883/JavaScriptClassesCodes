console.log(a.join()); //"1,2,3,4"
console.log(a); //[ 1, 2, 3, 4 ]
console.log(a.join('@')) //"1@2@3@4"
console.log(a); //[ 1, 2, 3, 4 ]
var newString = a.join(" ");
console.log(newString); // "1 2 3 4"
var b = ['Hello', 'how', 'are', 'you', '?'];
console.log(b.join(' '));