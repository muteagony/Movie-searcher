export const movieList = (state = [], action) => {
  switch (action.type) {
    case "FETCH_MOVIES":
      console.log(action.payload);
      return state;
    default:
      return state;
  }
};
