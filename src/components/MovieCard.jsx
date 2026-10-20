"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function MovieCard({ movie }) {
  const [isLoading, setIsLoading] = useState(true);

  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : null;

  return (
    <Link href={`/movie/${movie.id}`}>
      <div className="group relative overflow-hidden rounded-lg bg-card transition-transform hover:scale-105">
        <div
          className={`relative aspect-[2/3] w-full bg-slate-800 ${isLoading ? "animate-pulse" : ""}`}
        >
          {posterUrl ? (
            <Image
              src={posterUrl}
              alt={movie.title}
              fill
              className={`object-cover transition-opacity duration-300 ${
                isLoading ? "opacity-0" : "opacity-100"
              }`}
              sizes="160px"
              onLoad={() => setIsLoading(false)}
            />
          ) : (
            <div className="flex h-full items-center justify-center text-muted text-xs text-center p-2">
              {movie.title}
            </div>
          )}
        </div>

        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-2 pt-6">
          <h3 className="text-sm font-medium text-foreground line-clamp-2">
            {movie.title}
          </h3>
          <p className="text-xs text-accent mt-1">
            ⭐ {movie.vote_average?.toFixed(1)}
          </p>
        </div>
      </div>
    </Link>
  );
}
