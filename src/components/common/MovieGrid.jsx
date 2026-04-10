import { useState, useMemo, useEffect } from "react";
import { motion } from "framer-motion";
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
            className={`px-5 py-2 rounded-full ${filterType === "ALL"
              ? "bg-purple-600 text-white"
              : "text-gray-400"
              }`}
          >
            All Movies
          </button>

          <button
            onClick={() => setFilterType("NEPAL")}
            className={`px-5 py-2 rounded-full ${filterType === "NEPAL"
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
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
        {filteredMovies.map((movie, index) => (
          <motion.div
            key={movie.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ scale: 1.07, y: -8 }}
            className="cursor-pointer group"
            onClick={() => {
              localStorage.setItem("activeProvince", "Global Movies");
              navigate(`/watch/${movie.id}`);
            }}
          >
            {/* CARD */}
            <div className="relative rounded-2xl overflow-hidden shadow-md bg-[#1C1C2E]">

              {/* POSTER IMAGE (🔥 BIG FIX) */}
              <img
                src={movie.image}
                alt={movie.title}
                className="w-full aspect-[2/3] object-cover transition duration-500 group-hover:scale-110"
              />

              {/* DARK OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-90 group-hover:opacity-100 transition" />

              {/* CONTENT */}
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-base font-semibold text-white line-clamp-2">
                  {movie.title}
                </h3>
                <p className="text-sm text-gray-300 mt-1">
                  {movie.year}
                </p>
              </div>

            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MovieGrid;