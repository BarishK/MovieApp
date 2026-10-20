import MovieSliderByGenre from "@/components/MovieSliderByGenre";
import PopularMoviesSlider from "@/components/PopularMoviesSlider";

export default async function Home() {
  return (
    <div className="px-6 md:px-10 flex flex-col gap-10 ">
      <div>
        <h2 className="font-bold text-2xl my-2">Popular Movies</h2>
        <PopularMoviesSlider />
      </div>
      <div>
        <h2 className="font-bold text-2xl my-2">Horror</h2>
        <MovieSliderByGenre genreId={27} />
      </div>
      <div>
        <h2 className="font-bold text-2xl my-2">Drama</h2>
        <MovieSliderByGenre genreId={18} />
      </div>
      <div>
        <h2 className="font-bold text-2xl my-2">Western</h2>
        <MovieSliderByGenre genreId={37} />
      </div>
    </div>
  );
}
