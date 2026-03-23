import { useState, useMemo, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { getAllMovies, getNepaliMovies } from "../../services/videoService";

const MovieGrid = () => {
  const [search, setSearch] = useState("");
  const [filterType, setFilterType] = useState("ALL");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  // Fetch from backend
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);

        let data = [];

        if (filterType === "ALL") {
          data = await getAllMovies();
        } else {
          data = await getNepaliMovies();
        }

        // ✅ Transform backend → UI format
        const formatted = data.map((movie) => ({
          id: movie._id,
          title: movie.title,
          year: movie.releaseYear,
          image: movie.thumbnailUrl,
        }));

        setMovies(formatted);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [filterType]);

  // 🔥 Search filter
  const filteredMovies = useMemo(() => {
    return movies.filter((movie) =>
      movie.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, movies]);

  if (loading) {
    return <div className="text-center text-white mt-10">Loading...</div>;
  }

  return (
    <div className="px-4 sm:px-6 lg:px-8">

      {/* FILTER */}
      <div className="flex justify-center sm:justify-start mb-6">
        <div className="inline-flex bg-[#1C1C2E] p-1 rounded-full">
          <button
            onClick={() => setFilterType("ALL")}
            className={`px-5 py-2 rounded-full ${
              filterType === "ALL"
                ? "bg-purple-600 text-white"
                : "text-gray-400"
            }`}
          >
            All Movies
          </button>

          <button
            onClick={() => setFilterType("NEPAL")}
            className={`px-5 py-2 rounded-full ${
              filterType === "NEPAL"
                ? "bg-purple-600 text-white"
                : "text-gray-400"
            }`}
          >
            Made in Nepal
          </button>
        </div>
      </div>

      {/* SEARCH */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-white">
          {filterType === "ALL" ? "All Movies" : "Nepali Movies"}
        </h2>

        <div className="relative w-64">
          <FaSearch className="absolute left-3 top-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-[#1C1C2E] pl-10 pr-4 py-2 rounded-lg"
          />
        </div>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
        {filteredMovies.map((movie) => (
          <div
            key={movie.id}
            onClick={() => navigate(`/watch/${movie.id}`)}
            className="cursor-pointer group"
          >
            <img
              src={movie.image}
              alt={movie.title}
              className="rounded-lg h-64 w-full object-cover group-hover:scale-105 transition"
            />

            <h3 className="text-sm mt-2 text-white truncate">
              {movie.title}
            </h3>

            <p className="text-xs text-gray-400">
              {movie.year}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieGrid;