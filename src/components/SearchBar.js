import React from "react";

class SearchBar extends React.Component {
  onFormSubmit(event) {
    event.preventDefault();
    console.log(document.getElementById("titleInput").value);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input type="text" id="titleInput"></input>
        </form>
      </div>
    );
  }
}

export default SearchBar;
