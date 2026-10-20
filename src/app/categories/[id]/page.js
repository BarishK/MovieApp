import { getMoviesByGenre } from "@/lib/tmdb";
import MovieCard from "@/components/MovieCard";

export default async function CategoryPage({ params, searchParams }) {
  const { id } = await params;
  const { name } = await searchParams;

  const movies = await getMoviesByGenre(id);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6 text-white text-capitalize">
        {name || "Category"} Movies
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {movies?.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
