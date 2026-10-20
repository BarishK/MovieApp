const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = process.env.TMDB_API_KEY;

export async function getPopularMovies() {
  const res = await fetch(
    `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
  );

  if (!res.ok) {
    throw new Error(`TMDB isteği başarısız: ${res.status}`);
  }

  const data = await res.json();
  return data.results;
}

export async function getMoviesGenres() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNDc2M2IxZjljZTgxOWM5MmM4NTg3YzMzMTg0YWQxOCIsIm5iZiI6MTc2NDgzNTE2Ni42MTYsInN1YiI6IjY5MzEzZjVlNjAxMDViZmM4NGMxZThhNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.S5tgRwgGGQmWal1w89Bchzy1BjAJNbxskgEEtkgvUec",
    },
  };

  const res = await fetch(
    "https://api.themoviedb.org/3/genre/movie/list?language=en",
    options,
  );

  if (!res.ok) {
    throw new Error(`TMDB tür isteği başarısız: ${res.status}`);
  }

  const data = await res.json();
  return data;
}

export async function getMoviesByGenre(genreId) {
  const res = await fetch(
    `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=${genreId}`,
  );

  if (!res.ok) {
    throw new Error(`TMDB tür isteği başarısız: ${res.status}`);
  }

  const data = await res.json();
  return data.results;
}

export async function searchMovies(query) {
  const res = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${encodeURIComponent(query)}`,
  );

  if (!res.ok) {
    throw new Error(`TMDB arama isteği başarısız: ${res.status}`);
  }

  const data = await res.json();
  return data.results;
}

export async function getMovieDetails(id) {
  const res = await fetch(
    `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US&append_to_response=credits,similar`,
  );

  if (!res.ok) {
    throw new Error(`Film detayı alınamadı: ${res.status}`);
  }

  return res.json();
}
