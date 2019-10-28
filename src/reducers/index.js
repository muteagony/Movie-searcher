const initialState = {
  search: "",
  movies: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SEARCH_MOVIE":
      console.log(action.payload);
      return state;
    case "FETCH_MOVIES":
      console.log(action.payload);
      return state;
    default:
      return state;
  }
};
