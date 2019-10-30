export const searchMovie = data => {
  return {
    type: "SEARCH_MOVIE",
    payload: data
  };
};

export const fetchMoviesSuccess = movies => {
  return {
    type: "FETCH_MOVIES_SUCCESS",
    movies: movies
  };
};

export const fetchMoviesError = error => {
  return {
    type: "FETCH_MOVIES_ERROR",
    error: error
  };
};

export const fetchMoviesPending = () => {
  return {
    type: "FETCH_MOVIES_PENDING"
  };
};
