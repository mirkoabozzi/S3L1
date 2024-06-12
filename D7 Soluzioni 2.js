/* ESERCIZIO 9 (forEach)
  Scrivi una funzione per trovare il film più vecchio nell'array fornito.
*/
const getOldestMovie = function (moviesArray) {
  let oldestMovie = moviesArray[0];

  moviesArray.forEach(function (currentMovie) {
    if (parseInt(currentMovie.Year) < parseInt(oldestMovie.Year)) {
      oldestMovie = currentMovie;
    }
  });

  return oldestMovie;
};

/* ESERCIZIO 10
    Scrivi una funzione per ottenere il numero di film contenuti nell'array fornito.
  */

const getMoviesNumber = (moviesArray) => moviesArray.filter((movie) => movie.Type === "movie").length;

const getMoviesNumber2 = function (moviesArray) {
  return moviesArray.filter(function (movie) {
    return movie.Type === "movie";
  }).length;
};

/* ESERCIZIO 11 (map)
    Scrivi una funzione per creare un array con solamente i titoli dei film contenuti nell'array fornito.
  */

const getTitlesArray = function (moviesArray) {
  const titles = moviesArray.map(function (movie) {
    return movie.Title;
  });
  return titles;
};

const getTitlesArray2 = (moviesArray) => moviesArray.map((movie) => movie.Title);
/* ESERCIZIO 12 (filter)
    Scrivi una funzione per ottenere dall'array fornito solamente i film usciti nel millennio corrente.
  */
const getNewMovies = function (moviesArray) {
  const filteredMovies = moviesArray.filter(function (movie) {
    return movie.Year >= 2000;
  });
  return filteredMovies;
};

const getNewMovies2 = (moviesArray) => moviesArray.filter((movie) => movie.Year >= 2000);

/* ESERCIZIO 13 (reduce)
    Scrivi una funzione per calcolare la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array fornito.
  */

/* ESERCIZIO 14 (find)
    Scrivi una funzione per ottenere dall'array fornito uno specifico film (la funzione riceve un imdbID come parametro).
  */

const findMovieByImdbId = function (moviesArray, imdbID) {
  const found = moviesArray.find(function (movie) {
    return movie.imdbID === imdbID;
  });
  return found;
};

/* ESERCIZIO 15 (findIndex)
    Scrivi una funzione per ottenere dall'array fornito l'indice del primo film uscito nell'anno fornito come parametro.
  */

const findMovieByYear = function (moviesArray, year) {
  const found = moviesArray.findIndex(function (movie) {
    return parseInt(movie.Year) === year;
  });
  return found;
};
