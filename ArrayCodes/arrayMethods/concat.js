var a = [1, 2, 3, 4];
var b = [11, 22, 33, 44];
console.log(a.concat(b, [6, 7])); 
console.log(a);
console.log(b);
// Output
//   [
//     1,  2,  3, 4, 11,
//     22, 33, 44, 6,  7
//   ]
//   [ 1, 2, 3, 4 ]
//   [ 11, 22, 33, 44 ]