import { useState, useEffect } from "react";
import UpdateVideo from "./UpdateVideo";
import { getAllVideos, deleteVideo } from "../../services/videoService";

const ManageVideos = () => {

  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState(null);
  const [toast, setToast] = useState(false);

  // FETCH VIDEOS
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const data = await getAllVideos();
        setVideos(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  // DELETE VIDEO
  const handleDelete = async (id) => {
    if (!confirm("Delete this video?")) return;

    setDeletingId(id);
    try {
      await deleteVideo(id);
      setVideos((prev) => prev.filter((v) => v._id !== id));
      setToast(true);
      setTimeout(() => setToast(false), 3000);
    } catch (err) {
      console.error(err);
      alert("Delete failed");
    } finally {
      setDeletingId(null);
    }
  };

  // AFTER UPDATE → refresh list
  const handleUpdateSuccess = (updatedVideo) => {
    setVideos((prev) =>
      prev.map((v) =>
        v._id === updatedVideo._id ? updatedVideo : v
      )
    );
    setSelectedVideo(null);
  };

  if (selectedVideo) {
    return (
      <UpdateVideo
        video={selectedVideo}
        goBack={() => setSelectedVideo(null)}
        onSuccess={handleUpdateSuccess}
      />
    );
  }

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-8">
        Manage Videos
      </h1>

      <div className="space-y-4">
        {videos.map((video) => (
          <div
            key={video._id}
            className="flex justify-between items-center bg-[#1C1C2E] p-4 rounded-lg"
          >
            <div>
              <p className="font-semibold">{video.title}</p>
              <p className="text-sm text-gray-400">
                {video.category}
              </p>
            </div>

            <div className="space-x-3">
              <button
                onClick={() => setSelectedVideo(video)}
                className="bg-blue-600 px-4 py-2 rounded"
              >
                Update
              </button>

              <button
                onClick={() => handleDelete(video._id)}
                disabled={deletingId === video._id}
                className={`px-4 py-2 rounded transition ${deletingId === video._id
                  ? "bg-red-400 cursor-not-allowed opacity-60"
                  : "bg-red-600 hover:bg-red-700"
                  }`}
              >
                {deletingId === video._id ? "Deleting..." : "Delete"}
              </button>
            </div>
          </div>
        ))}
      </div>
      {/* Toast */}
      {toast && (
        <div className="fixed bottom-6 right-6 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2 animate-fade-in z-50">
          <span>✅</span>
          <span>Video deleted successfully!</span>
        </div>
      )}
    </div>
  );
};

export default ManageVideos;