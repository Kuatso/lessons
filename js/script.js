"use strict";
// // let = numberOfFilms;
const numberOfFilms = +prompt("сколько фильмов вы просмотрели?", "");
console.log(numberOfFilms);

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

// console.log(personalMovieDB.numberOfFilms);

const a = prompt("Один из последниих фильмов?", ""),
  b = prompt("какую оценку дадите ему?", ""),
  c = prompt("Один из последниих фильмов?", ""),
  d = prompt("какую оценку дадите ему?", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
