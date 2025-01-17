// "use strict";
// // // let = numberOfFilms;
// const numberOfFilms = +prompt("сколько фильмов вы просмотрели?", "");
// console.log(numberOfFilms);

// const personalMovieDB = {
//   count: numberOfFilms,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false,
// };

// // console.log(personalMovieDB.numberOfFilms);

// const a = prompt("Один из последниих фильмов?", ""),
//   b = prompt("какую оценку дадите ему?", ""),
//   c = prompt("Один из последниих фильмов?", ""),
//   d = prompt("какую оценку дадите ему?", "");

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);

"use strict";

// if (4 == 9) {
//   console.log("OK!");
// } else {
//   console.log("Error");
// }

// const num = 50;
// if (num < 49) {
//   console.log("Error");
// } else if (num > 100) {
//   console.log("too much");
// } else {
//   console.log("OK!");
// }

// num === 50 ? console.log("ok") : console.log("error");

// const num = 50;

// switch (num) {
//   case 49:
//     console.log("Error");
//     break;
//   case 100:
//     console.log("wrong");
//     break;
//   case 501:
//     console.log("Cooreecrt!");
//     break;
//   default:
//     console.log("OOOPS");
//     break;
// }

// const hamburger = 5;
// const fries = 0;

// if (hamburger && fries) {
//   console.log("Ya sit!");
// }

// const hamburger = 3;
// const fries = 1;
// const cola = 0;

// if (hamburger === 3 && cola === 1 && fries) {
//   console.log("Vse syty");
// } else {
//   console.log("We Will out");
// }

// console.log(1 && 0);
// console.log(1 && 5);
// console.log(0 && "sasasasas");

const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;

if ((hamburger === 3 && cola === 2) || (fries === 3 && nuggets)) {
  console.log("EVR OK ");
} else {
  console.log("We Will out");
}

let johnReport,
  alexReport,
  samReport,
  mariaReport = "done";

console.log((hamburger === 3 && cola === 2) || (fries === 3 && nuggets));
