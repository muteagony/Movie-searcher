import React from "react";
import { SearchBarContainer } from "./SearchBar";
import FetchAPI from "./FetchAPI";
import { connect } from "react-redux";
import { moviesFetched } from "../actions";

export class App extends React.Component {
  render() {
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

const mapDispatchToProps = { moviesFetched };

export const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
