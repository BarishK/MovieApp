import { getMoviesByGenre } from "@/lib/tmdb";
import MovieCard from "./MovieCard";

export default async function MovieSliderByGenre({ genreId }) {
  const movies = await getMoviesByGenre(genreId);

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
