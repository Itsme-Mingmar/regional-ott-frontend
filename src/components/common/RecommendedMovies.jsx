import { useNavigate } from "react-router-dom";

const RecommendedMovies = ({ currentMovieId }) => {
  const navigate = useNavigate();

  // 🔥 For now using dummy data (later from backend)
  const movies = [
    { id: 2, title: "Echoes of Kathmandu", image: "https://picsum.photos/300/450?2" },
    { id: 3, title: "Mountain Warriors", image: "https://picsum.photos/300/450?3" },
    { id: 4, title: "Silent Valley", image: "https://picsum.photos/300/450?4" },
    { id: 5, title: "Sacred Rivers", image: "https://picsum.photos/300/450?5" },
  ];

  // ❗ remove current movie
  const filtered = movies.filter(m => m.id !== Number(currentMovieId));

  return (
    <div className="mt-12 pb-6">
      <h2 className="text-xl font-semibold mb-4">Recommended for you</h2>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {filtered.slice(0, 4).map((movie) => (
          <div
            key={movie.id}
            onClick={() => navigate(`/watch/${movie.id}`)}
            className="cursor-pointer group"
          >
            <img
              src={movie.image}
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