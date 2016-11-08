const db = require('../lib/dbConnect');

// Your middleware MUST allow limit and offset to be sent
// via query parameters to the db for filtering

// default limit
const limit = 10;
// default offset
const offset = 0;

function getAllMovies(req, res, next) {
  db.any('SELECT * FROM movies;')
  .then((movies) => {
    res.movies = movies;
    next();
  })
  .catch(error => next(error));
// implement get all movies
}

function getMovie(req, res, next) {
// implement get single movie
  let ID = Number.parseInt(req.params.ID);
  db.one(`SELECT *
        FROM movies
        WHERE id = $1;`, [ID])
  .then((movies) => {
    res.movies = movies;
    next();
  })
   .catch(error => next(error));
}

function updateMovie(req, res, next) {
// implement update
  console.log(req.body)
  cecil = Number.parseInt(req.params.id);
  db.none(`UPDATE movies
    SET title=$2
    WHERE id=$1;`,
    [ cecil, req.body.title ])
  // .then(r=> r.json())
  .then(data=>{
    console.log(data)
    next()
  })
  .catch(function (err) {
    return next(err);
  });
}

function deletemovie(req, res, next) {
// implement delete
}

// BONUS
function getAllMoviesWithRatings(req, res, next) {

}

module.exports = {
  getAllMovies,
  getMovie,
  updateMovie,
  deletemovie,
  getAllMoviesWithRatings
};
