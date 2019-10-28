import { combineReducers } from "redux";
import { search } from "./search";
import { movieList } from "./movieList";

export default combineReducers({
  search,
  movieList
});
