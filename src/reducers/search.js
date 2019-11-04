export const search = (state = "", action) => {
  switch (action.type) {
    case "FETCH_MOVIES_SUCCESS":
      return {
        ...state,
        pending: false,
        movies: action.payload
      };
    case "FETCH_MOVIES_ERROR":
      return {
        ...state,
        pending: false,
        error: action.error
      };
    case "FETCH_MOVIES_PENDING":
      return {
        ...state,
        pending: true
      };
    default:
      return state;
  }
};

export const getMovies = state => state.movies;
export const getMoviesPending = state => state.pending;
export const getMoviesError = state => state.error;
