import React from "react";
import { SearchBarContainer } from "./SearchBar";
import MovieList from "./MovieList";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import {
  getMovies,
  getMoviesError,
  getMoviesPending
} from "../reducers/search";
import fetchMoviesAction from "./Fetch";

export class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const { fetchMovies } = this.props;
    fetchMovies();
  }

  shouldComponentRender() {
    if (this.pending === false) return false;
    return true;
  }

  render() {
    const { movies } = this.props;
    if (!this.shouldComponentRender()) return <SearchBarContainer />;
    return (
      <div>
        <SearchBarContainer />
        <MovieList movies={movies} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    error: getMoviesError(state),
    movies: getMovies(state),
    pending: getMoviesPending(state)
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchMovies: fetchMoviesAction
    },
    dispatch
  );

export const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
