import {fetchMoviesPending, fetchMoviesSuccess, fetchMoviesError} from '../actions';

async function fetchMovies() {
    const title = "";
    return dispatch => {if(!title) {
        dispatch(fetchMoviesPending());
    } else {
        try {
            const url = `http://www.omdbapi.com/?s=${title}&apikey=84baf662`;
            const response = await fetch(url);
            const data = await response.json();
            let movies = data.Search.map(movie => {
              return <div key={movie.imdbID}>{movie.Title}</div>;
            });
            dispatch(fetchMoviesSuccess(movies))
          } catch (error) {
            dispatch(fetchMoviesError(error));
          }
        }
    }
}

export default fetchMovies;