import React from "react";
import { SearchBarContainer } from "./SearchBar";
import FetchAPI from "./FetchAPI";
import { connect } from "react-redux";
import { fetchMoviesSuccess } from "../actions";

export class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const { fetchMovies } = this.props;
    fetchMovies();
  }

  shouldComponentRender() {
    const { pending } = this.props;
    if (this.pending === false) return false;
    return true;
  }

  render() {
    const { movies, error, pending } = this.props;
    if (!this.shouldComponentRender()) return <SearchBarContainer />;
    return (
      <div>
        <SearchBarContainer />
        <FetchAPI />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    search: state.search,
    movies: state.movies
  };
};

const mapDispatchToProps = { fetchMoviesSuccess };

export const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
