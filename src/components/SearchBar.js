import React from "react";
import { searchMovie } from "../actions";
import { connect } from "react-redux";

class SearchBar extends React.Component {
  state = { searchValue: "" };

  onFormSubmit = event => {
    event.preventDefault();
    this.props.searchMovie(this.state.searchValue);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input
            type="text"
            placeholder="Search by Title..."
            value={this.state.searchValue}
            onChange={e => this.setState({ searchValue: e.target.value })}
          ></input>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    search: state.search
  };
};

const mapDispatchToProps = { searchMovie };

export const SearchBarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
