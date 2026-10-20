"use client";

import { useState, useEffect } from "react";

export default function FavoriteButton({ movie }) {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const exists = favorites.some((fav) => fav.id === movie.id);
    setIsFavorite(exists);
  }, [movie.id]);

  const toggleFavorite = () => {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    if (isFavorite) {
      favorites = favorites.filter((fav) => fav.id !== movie.id);
      setIsFavorite(false);
    } else {
      favorites.push({
        id: movie.id,
        title: movie.title,
        poster_path: movie.poster_path,
        vote_average: movie.vote_average,
      });
      setIsFavorite(true);
    }

    localStorage.setItem("favorites", JSON.stringify(favorites));
  };

  return (
    <button
      onClick={toggleFavorite}
      className={`flex items-center border text-sm px-4 py-2 rounded-md w-fit hover:cursor-pointer transition-colors ${
        isFavorite
          ? "bg-accent text-background border-accent"
          : "border-accent text-accent hover:bg-accent hover:text-background"
      }`}
    >
      <i
        className={`ti ${isFavorite ? "ti-heart-filled" : "ti-heart"} mr-2`}
      ></i>
      {isFavorite ? "In Favorites" : "Add to Favorites"}
    </button>
  );
}
