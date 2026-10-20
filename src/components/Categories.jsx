"use client";

import { getMoviesGenres } from "@/lib/tmdb";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Categories({ onClose }) {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    async function fetchGenres() {
      try {
        const data = await getMoviesGenres();
        setGenres(data.genres);
      } catch (error) {
        console.error("Kategoriler çekilirken hata:", error);
      }
    }

    fetchGenres();
  }, []);

  return (
    <div className="absolute right-0 md:left-0 top-full mt-2 w-48 bg-black text-white rounded-lg shadow-xl border border-slate-700 py-2 z-50">
      <div className="px-4 py-1.5 text-xs font-bold text-slate-400 uppercase tracking-wider">
        Categories
      </div>
      <ul className="flex flex-col max-h-64 overflow-y-auto no-scrollbar">
        {genres.map((item) => (
          <li key={item.id}>
            <Link
              href={`/categories/${item.id}?name=${item.name}`}
              onClick={onClose}
              className="block px-4 py-2 text-sm hover:bg-slate-700 transition-colors"
            >
              {item?.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
