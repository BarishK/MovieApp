import { getPopularMovies } from "@/lib/tmdb";
import MovieCard from "./MovieCard";

export default async function PopularMoviesSlider() {
  const movies = await getPopularMovies();

  return (
    <div className="flex gap-4 overflow-x-auto no-scrollbar">
      {movies.map((movie) => (
        <div key={movie.id} className="flex-shrink-0 w-40">
          <MovieCard movie={movie} />
        </div>
      ))}
    </div>
  );
}
