import React, { useState } from "react";
import { Star, ChevronRight } from "lucide-react";

interface GameItem {
  id: number;
  name: string;
  rating: number;
  imageUrl: string;
}

export function GameListing() {
  const [currentPage, setCurrentPage] = useState(1);

  const games: GameItem[] = [
    {
      id: 1,
      name: "Nintendo Game Boy",
      rating: Math.floor(Math.random() * 3) + 3,
      imageUrl: "src/assets/images/file.jpg",
    },
    {
      id: 2,
      name: "Super Nintendo (SNES)",
      rating: Math.floor(Math.random() * 3) + 3,
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/3/31/SNES-Mod1-Console-Set.jpg",
    },
    {
      id: 3,
      name: "Sega Genesis",
      rating: Math.floor(Math.random() * 3) + 3,
      imageUrl: "src/assets/images/Sega-Mega-Drive-JP-Mk1-Console-Set.jpg",
    },
    {
      id: 4,
      name: "PlayStation 1",
      rating: Math.floor(Math.random() * 3) + 3,
      imageUrl:
        "src/assets/images/playstation-25-ans-apres-les-cles-du-phenomene-8d9e0ca0.jpg",
    },
    {
      id: 5,
      name: "Nintendo 64",
      rating: Math.floor(Math.random() * 3) + 3,
      imageUrl: "src/assets/images/nintendo-64.avif",
    },
    {
      id: 6,
      name: "Atari 2600",
      rating: Math.floor(Math.random() * 3) + 3,
      imageUrl: "src/assets/images/79586_10306_Front_01.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-[#1a4b5c] text-white flex flex-col justify-center items-center py-12">
      <div className="w-full px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full">
          {games.map((game) => (
            <div
              key={game.id}
              className="relative group transform transition-all duration-500 hover:scale-105"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-red-400 rounded-lg blur opacity-75 group-hover:opacity-100 transition-all duration-500 animate-pulse"></div>
              <div className="relative bg-black rounded-lg p-6 backdrop-blur-sm bg-opacity-90 flex flex-col h-[500px]">
                <div className="text-center mb-4 text-lg font-bold transform group-hover:scale-110 transition-transform duration-300">
                  {game.name}
                </div>
                <div className="flex justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {Array.from({ length: game.rating }).map((_, i) => (
                    <Star
                      key={i}
                      size={24}
                      className="text-yellow-400 fill-yellow-400 animate-bounce"
                      style={{ animationDelay: `${i * 200}ms` }}
                    />
                  ))}
                </div>
                <div className="flex-grow flex items-center justify-center overflow-hidden rounded-lg">
                  <img
                    src={game.imageUrl}
                    alt={game.name}
                    className="w-full h-full object-contain rounded-lg transform transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center items-center gap-2 mt-8">
        {[1, 2, 3, 4, "...", 80].map((page, i) => (
          <button
            key={i}
            className={`px-4 py-2 rounded-lg text-lg transform transition-all duration-300 hover:scale-110 hover:brightness-110 ${
              currentPage === page
                ? "bg-[#ff6b6b] text-white shadow-lg"
                : "bg-gray-700 hover:bg-gray-600"
            }`}
            onClick={() => setCurrentPage(Number(page))}
          >
            {page}
          </button>
        ))}
        <button className="px-4 py-2 rounded-lg bg-gray-700 transform transition-all duration-300 hover:scale-110 hover:bg-gray-600">
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
}
