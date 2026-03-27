import { useState, useEffect } from "react";
import UpdateVideo from "./UpdateVideo";
import { getAllVideos, deleteVideo } from "../../services/videoService";

const ManageVideos = () => {

  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

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

    try {
      await deleteVideo(id);

      // remove from UI instantly
      setVideos((prev) => prev.filter((v) => v._id !== id));
    } catch (err) {
      console.error(err);
      alert("Delete failed");
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
                className="bg-red-600 px-4 py-2 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageVideos;