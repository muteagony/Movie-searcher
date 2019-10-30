import React from "react";

class FetchAPI extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: []
    };
  }

  async componentDidMount() {
    try {
      const title = "";
      const url = `http://www.omdbapi.com/?s=${title}&apikey=84baf662`;
      const response = await fetch(url);
      const data = await response.json();
      let movies = data.Search.map(movie => {
        return <div key={movie.imdbID}>{movie.Title}</div>;
      });
      this.setState({ movies: movies });
    } catch (e) {
      console.error(e);
    }
  }

  render() {
    return <div>{this.state.movies}</div>;
  }
}

export default FetchAPI;
