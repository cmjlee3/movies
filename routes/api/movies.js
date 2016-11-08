const express = require('express');
const router = express.Router();
const { getAllMovies, getMovie, getAllMoviesWithRatings, updateMovie } = require('../../models/movie');

// ALL ROUTES HERE START WITH '/api/movies'

const sendJSONresp = (req, res) => res.json(res.movies);
// handle all the routes
router.route('/')
  .get(getAllMovies, sendJSONresp);

// get all movies
// router.get('/', getAllMovies, (req, res) => {
//   res.json(res.movies)
// });
// Get movies withrating BONUS


// // Get single movie
// router.get('/:ID', getMovie, (req, res) => {
//   res.json(res.movies)
// });

router.route('/:id')
  .get(getMovie, sendJSONresp)
  .put(updateMovie, (req,res)=>{
    res.status(200)
    .json({
      status: 'su',
      message: 'Update Movie'
    })})
  .delete();

module.exports = router;
