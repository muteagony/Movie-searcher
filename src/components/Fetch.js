import {
  fetchMoviesPending,
  fetchMoviesSuccess,
  fetchMoviesError
} from "../actions";

function fetchMovies() {
  const title = "man";
  return dispatch => {
    dispatch(fetchMoviesPending());
    fetch(`http://www.omdbapi.com/?s=${title}&apikey=84baf662`)
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw res.error;
        }
        dispatch(fetchMoviesSuccess(res.movies));
        return res.movies;
      })
      .catch(error => {
        dispatch(fetchMoviesError(error));
      });

    /* let movies = data.Search.map(movie => {
              return <div key={movie.imdbID}>{movie.Title}</div>; */
  };
}

export default fetchMovies;
