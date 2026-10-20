import Image from "next/image";
import Link from "next/link";
import { getMovieDetails } from "@/lib/tmdb";
import MovieCard from "@/components/MovieCard";
import FavoriteButton from "@/components/FavoriteButton";

export default async function MovieDetailPage({ params }) {
  const { id } = await params;
  const movie = await getMovieDetails(id);

  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : null;

  const cast = movie.credits?.cast?.slice(0, 8) || [];
  const similarMovies = movie.similar?.results?.slice(0, 8) || [];

  return (
    <div className="flex flex-col gap-10 px-6 md:px-10 py-6">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="relative w-full md:w-72 aspect-[2/3] flex-shrink-0 rounded-lg overflow-hidden bg-card">
          {posterUrl && (
            <Image
              src={posterUrl}
              alt={movie.title}
              fill
              className="object-cover"
            />
          )}
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-semibold text-foreground">
            {movie.title}
          </h1>

          <div className="flex items-center gap-4 text-sm text-muted">
            <span className="text-accent">
              ⭐ {movie.vote_average?.toFixed(1)}
            </span>
            {movie.runtime && <span>{movie.runtime} min</span>}
            {movie.release_date && (
              <span>{movie.release_date.slice(0, 4)}</span>
            )}
          </div>

          {movie.genres?.length > 0 && (
            <div className="flex gap-2 flex-wrap">
              {movie.genres.map((genre) => (
                <span
                  key={genre.id}
                  className="text-xs px-3 py-1 rounded-full bg-card text-muted"
                >
                  {genre.name}
                </span>
              ))}
            </div>
          )}

          <FavoriteButton movie={movie} />

          <p className="text-foreground leading-relaxed max-w-2xl">
            {movie.overview}
          </p>
        </div>
      </div>

      {cast.length > 0 && (
        <div>
          <h2 className="text-lg font-semibold text-foreground mb-3">Cast</h2>
          <div className="flex gap-4 overflow-x-auto no-scrollbar">
            {cast.map((actor) => (
              <div key={actor.id} className="text-center w-20 flex-shrink-0">
                <div className="relative w-16 h-16 rounded-full bg-card mx-auto mb-2 overflow-hidden">
                  {actor.profile_path && (
                    <Image
                      src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                      alt={actor.name}
                      fill
                      className="object-cover"
                    />
                  )}
                </div>
                <p className="text-xs text-muted line-clamp-2">{actor.name}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {similarMovies.length > 0 && (
        <div>
          <h2 className="text-lg font-semibold text-foreground mb-3">
            Similar Movies{" "}
          </h2>
          <div className="flex gap-4 overflow-x-auto no-scrollbar">
            {similarMovies.map((similarMovie) => (
              <div key={similarMovie.id} className="flex-shrink-0 w-40">
                <MovieCard movie={similarMovie} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
