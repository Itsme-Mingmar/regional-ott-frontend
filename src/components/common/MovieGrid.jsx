import { useState, useMemo } from "react";
import { FaSearch } from "react-icons/fa";

const moviesData = [
  { id: 1, title: "The Himalayan Quest", year: 2023, country: "Nepal", image: "https://picsum.photos/300/450?1" },
  { id: 2, title: "Echoes of Kathmandu", year: 2022, country: "Nepal", image: "https://picsum.photos/300/450?2" },
  { id: 3, title: "Mountain Warriors", year: 2021, country: "India", image: "https://picsum.photos/300/450?3" },
  { id: 4, title: "Silent Valley", year: 2020, country: "USA", image: "https://picsum.photos/300/450?4" },
  { id: 5, title: "Sacred Rivers", year: 2024, country: "Nepal", image: "https://picsum.photos/300/450?5" },
  { id: 6, title: "The Last Temple", year: 2023, country: "Nepal", image: "https://picsum.photos/300/450?6" },
  { id: 7, title: "Hidden Kingdom", year: 2022, country: "UK", image: "https://picsum.photos/300/450?7" },
  { id: 8, title: "Cultural Awakening", year: 2021, country: "Nepal", image: "https://picsum.photos/300/450?8" },
  { id: 9, title: "Beyond Everest", year: 2024, country: "Nepal", image: "https://picsum.photos/300/450?9" },
  { id: 10, title: "The Sherpa Story", year: 2023, country: "Nepal", image: "https://picsum.photos/300/450?10" },
  { id: 11, title: "Lost Monastery", year: 2022, country: "China", image: "https://picsum.photos/300/450?11" },
  { id: 12, title: "Nepal Untold", year: 2021, country: "Nepal", image: "https://picsum.photos/300/450?12" },
];

const MovieGrid = () => {
  const [search, setSearch] = useState("");
  const [filterType, setFilterType] = useState("ALL");

  // 🔥 Optimized filtering (production pattern)
  const filteredMovies = useMemo(() => {
    return moviesData.filter((movie) => {
      const matchesSearch = movie.title
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesCountry =
        filterType === "ALL"
          ? true
          : movie.country === "Nepal";

      return matchesSearch && matchesCountry;
    });
  }, [search, filterType]);

  return (
    <div className="px-4 sm:px-6 lg:px-8">

      {/* FILTER BUTTONS (NOW ABOVE TITLE) */}
      <div className="flex justify-center sm:justify-start mb-6">
        <div className="inline-flex bg-[#1C1C2E] p-1 rounded-full">

          <button
            onClick={() => setFilterType("ALL")}
            className={`px-5 py-2 text-sm font-medium rounded-full transition-all duration-300
            ${filterType === "ALL"
                ? "bg-linear-to-r from-purple-600 to-pink-500 text-white shadow-lg"
                : "text-gray-400 hover:text-white"}
          `}
          >
            All Movies
          </button>

          <button
            onClick={() => setFilterType("NEPAL")}
            className={`px-5 py-2 text-sm font-medium rounded-full transition-all duration-300
            ${filterType === "NEPAL"
                ? "bg-linear-to-r from-purple-600 to-pink-500 text-white shadow-lg"
                : "text-gray-400 hover:text-white"}
          `}
          >
            Made in Nepal
          </button>

        </div>
      </div>

      {/* TITLE + SEARCH */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6 mb-10">

        {/* Title */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold">
            {filterType === "ALL"
              ? "All Available Movies"
              : "Made in Nepal"}
          </h2>
          <p className="text-gray-400 text-sm mt-1">
            Discover premium cinematic content
          </p>
        </div>

        {/* Search */}
        <div className="relative w-full md:w-72">
          <FaSearch className="absolute left-3 top-3 text-gray-400 text-sm" />
          <input
            type="text"
            placeholder="Search movies..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-[#1C1C2E] pl-10 pr-4 py-2 rounded-xl outline-none focus:ring-2 focus:ring-purple-600 transition duration-300"
          />
        </div>

      </div>

      {/* GRID */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5 sm:gap-6">
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
                className="w-full h-64 sm:h-72 object-cover transform group-hover:scale-105 transition duration-300"
              />
            </div>

            {/* Info */}
            <div className="mt-3">
              <h3 className="text-sm font-medium truncate">
                {movie.title}
              </h3>
              <p className="text-xs text-gray-400">
                {movie.year} • {movie.country}
              </p>
            </div>
          </div>
        ))}

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