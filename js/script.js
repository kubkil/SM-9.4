"use strict";


// function drawTree(rows) {
//   let star = '';
//   for (let i = 0; i < rows; i++) {
//     for (let j = 0; j <= i; j++) {
//       star += '*';
//     }
//     star += '\n';
//   }
//   console.log(star);
// }

function drawTree(rows) {
  let star = '';
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < rows - i; j++) {
      star += '_';
    }
    for (let k = 0; k < (2 * i + 1); k++) {
      star += '*';
    }
    star += '\n';
  }
  console.log(star);
}