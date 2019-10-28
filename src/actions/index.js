export const searchMovie = data => {
  return {
    type: "SEARCH_MOVIE",
    payload: data
  };
};

export const moviesFetched = movies => {
  return {
    type: "FETCH_MOVIES",
    payload: movies
  };
};
