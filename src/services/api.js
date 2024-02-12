import axios from 'axios';

const keyUrl = '21d50bd54f6decc7d8510150db1b12f4';

export async function fetchMovies() {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/day`,
      {
        params: {
          api_key: keyUrl,
        },
      }
    );
    const data = response.data;
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchFindMovie(query) {
  try {
    const response = await axios.get(
      'https://api.themoviedb.org/3/search/movie',
      {
        params: {
          query: `${query}`,
          include_adult: false,
          language: 'en-US',
          page: 1,
          api_key: keyUrl,
        },
      }
    );
    const data = response.data;
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchMovieDetails(movieId) {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}`,
      {
        params: {
          api_key: keyUrl,
          language: 'en-US',
        },
      }
    );
    const data = response.data;
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchCredits(movieId) {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/credits`,
      {
        params: {
          api_key: keyUrl,
          language: 'en-US',
        },
      }
    );
    const data = response.data;
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchReviews(movieId) {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews`,
      {
        params: {
          api_key: keyUrl,
          language: 'en-US',
        },
      }
    );
    const data = response.data;
    return data;
  } catch (error) {
    console.error(error);
  }
}
