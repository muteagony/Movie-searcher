import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import {
  getMoviesError,
  getMovies,
  getMoviesPending
} from "../reducers/search";
import fetchMoviesAction from "./Fetch";

class MovieList extends React.Component {
  constructor(props) {
    super(props);

    this.shouldComponentRender = this.shouldComponentRender.bind(this);
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
    const { movies, error } = this.props;

    if (!this.shouldComponentRender())
      return <div>You should definitely search for some movie</div>;
    return (
      <div>
        {error}
        {movies}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  error: getMoviesError(state),
  movies: getMovies(state),
  pending: getMoviesPending(state)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchMovies: fetchMoviesAction
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieList);
