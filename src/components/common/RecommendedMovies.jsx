import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const RecommendedMovies = ({ currentMovieId }) => {
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/recommend`,
          {
            params: { excludeId: currentMovieId },
            withCredentials: true,
          }
        );
        setMovies(res.data); // ✅ removed the [] wrapper
      } catch (err) {
        console.error("Failed to fetch recommendations", err);
      }
    };

    fetchRecommendations();
  }, [currentMovieId]);

  return (
    <div className="mt-12 pb-6">
      <h2 className="text-xl font-semibold mb-4">Recommended for you</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {movies.map((movie) => (
          <div
            key={movie._id}
            onClick={() => navigate(`/watch/${movie._id}`)}
            className="cursor-pointer group"
          >
            <img
              src={movie.thumbnailUrl}
              alt={movie.title}
              className="rounded-lg h-48 w-full object-cover group-hover:scale-105 transition"
            />
            <p className="text-sm mt-2 truncate">{movie.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendedMovies;