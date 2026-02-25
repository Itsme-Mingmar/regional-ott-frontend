import { useState } from "react";

const moviesData = [
  { id: 1, title: "The Himalayan Quest", date: "2023", image: "https://picsum.photos/300/450?1" },
  { id: 2, title: "Echoes of Kathmandu", date: "2022", image: "https://picsum.photos/300/450?2" },
  { id: 3, title: "Mountain Warriors", date: "2021", image: "https://picsum.photos/300/450?3" },
  { id: 4, title: "Silent Valley", date: "2020", image: "https://picsum.photos/300/450?4" },
  { id: 5, title: "Sacred Rivers", date: "2024", image: "https://picsum.photos/300/450?5" },
  { id: 6, title: "The Last Temple", date: "2023", image: "https://picsum.photos/300/450?6" },
  { id: 7, title: "Hidden Kingdom", date: "2022", image: "https://picsum.photos/300/450?7" },
  { id: 8, title: "Cultural Awakening", date: "2021", image: "https://picsum.photos/300/450?8" },
  { id: 9, title: "Beyond Everest", date: "2024", image: "https://picsum.photos/300/450?9" },
  { id: 10, title: "The Sherpa Story", date: "2023", image: "https://picsum.photos/300/450?10" },
  { id: 11, title: "Lost Monastery", date: "2022", image: "https://picsum.photos/300/450?11" },
  { id: 12, title: "Nepal Untold", date: "2021", image: "https://picsum.photos/300/450?12" },
];

const MovieGrid = () => {
  const [search, setSearch] = useState("");

  // Filter logic
  const filteredMovies = moviesData.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      {/* Top Section */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-semibold">All Available Movies</h2>

        <input
          type="text"
          placeholder="Search movies..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-[#1C1C2E] px-4 py-2 rounded-lg outline-none focus:ring-2 focus:ring-purple-600 transition duration-300 w-64"
        />
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
        {filteredMovies.map((movie) => (
          <div
            key={movie.id}
            className="group cursor-pointer transition duration-300"
          >
            {/* Poster */}
            <div className="rounded-xl overflow-hidden shadow-md group-hover:shadow-2xl transition duration-300">
              <img
                src={movie.image}
                alt={movie.title}
                className="w-full h-[280px] object-cover transform group-hover:scale-105 transition duration-300"
              />
            </div>

            {/* Info */}
            <div className="mt-3">
              <h3 className="text-sm font-medium truncate">
                {movie.title}
              </h3>
              <p className="text-xs text-gray-400">
                {movie.date}
              </p>
            </div>
          </div>
        ))}

        {/* Empty state */}
        {filteredMovies.length === 0 && (
          <p className="col-span-full text-center text-gray-400 mt-10">
            No movies found.
          </p>
        )}
      </div>
    </div>
  );
};

export default MovieGrid;