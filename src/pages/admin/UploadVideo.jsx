import { useState } from "react";
import { uploadVideo } from "../../services/videoService";

const UploadVideo = () => {

  const [form, setForm] = useState({
    title: "",
    description: "",
    genre: "",
    language: "",
    releaseYear: "",
    duration: "",
    category: "",
    province: ""
  });

  const [video, setVideo] = useState(null);
  const [thumbnail, setThumbnail] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [fileKey, setFileKey] = useState(Date.now()); 

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleUpload = async (e) => {
    e.preventDefault();

    if (!form.title || !form.description || !form.category) {
      return alert("Please fill all required fields");
    }

    if (!video || !thumbnail) {
      return alert("Please upload both video and thumbnail");
    }

    setUploading(true);

    try {
      const data = new FormData();

      Object.keys(form).forEach((key) => {
        data.append(key, form[key]);
      });

      data.append("video", video);
      data.append("thumbnail", thumbnail);

      await uploadVideo(data);

      alert(" Video uploaded successfully");

      // ✅ Reset form
      setForm({
        title: "",
        description: "",
        genre: "",
        language: "",
        releaseYear: "",
        duration: "",
        category: "",
        province: ""
      });

      setVideo(null);
      setThumbnail(null);
      setFileKey(Date.now()); 

    } catch (err) {
      console.error(err);
      alert(" Upload failed");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="flex justify-center w-full px-4 md:px-8">
      <div className="w-full max-w-4xl bg-[#1C1C2E] p-6 md:p-10 rounded-xl shadow-lg">

        <h1 className="text-2xl md:text-3xl font-bold mb-8">
          Upload Video
        </h1>

        <form onSubmit={handleUpload} className="space-y-5">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            <input
              name="title"
              value={form.title} 
              placeholder="Title"
              onChange={handleChange}
              className="w-full p-3 bg-[#141427] rounded-lg"
            />

            <input
              name="genre"
              value={form.genre} 
              placeholder="Genre"
              onChange={handleChange}
              className="w-full p-3 bg-[#141427] rounded-lg"
            />

            <input
              name="language"
              value={form.language} 
              placeholder="Language"
              onChange={handleChange}
              className="w-full p-3 bg-[#141427] rounded-lg"
            />

            <input
              name="releaseYear"
              value={form.releaseYear} 
              placeholder="Release Year"
              type="number"
              onChange={handleChange}
              className="w-full p-3 bg-[#141427] rounded-lg"
            />

            <input
              name="duration"
              value={form.duration} 
              placeholder="Duration (minutes)"
              type="number"
              onChange={handleChange}
              className="w-full p-3 bg-[#141427] rounded-lg"
            />

            <select
              name="province"
              value={form.province} 
              onChange={handleChange}
              className="w-full p-3 bg-[#141427] rounded-lg"
            >
              <option value="">Select Province</option>
              <option value="koshi">Koshi</option>
              <option value="madhesh">Madhesh</option>
              <option value="bagmati">Bagmati</option>
              <option value="gandaki">Gandaki</option>
              <option value="lumbini">Lumbini</option>
              <option value="karnali">Karnali</option>
              <option value="sudurpashchim">Sudurpashchim</option>
            </select>

          </div>

          <textarea
            name="description"
            value={form.description} 
            placeholder="Description"
            onChange={handleChange}
            className="w-full p-3 bg-[#141427] rounded-lg"
          />

          <select
            name="category"
            value={form.category} 
            onChange={handleChange}
            className="w-full p-3 bg-[#141427] rounded-lg"
          >
            <option value="">Select Category</option>
            <option value="movie">Movie</option>
            <option value="documentary">Documentary</option>
            <option value="cultural">Cultural</option>
          </select>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div>
              <label className="text-sm text-gray-400">
                Video File
              </label>
              <input
                key={fileKey} 
                type="file"
                onChange={(e) => setVideo(e.target.files[0])}
                className="block mt-2 w-full"
              />
            </div>

            <div>
              <label className="text-sm text-gray-400">
                Thumbnail
              </label>
              <input
                key={fileKey + "thumb"} 
                type="file"
                onChange={(e) => setThumbnail(e.target.files[0])}
                className="block mt-2 w-full cursor-pointer"
              />
            </div>

          </div>

          <div className="flex justify-center md:justify-end pt-4">
            <button
              disabled={uploading}
              className="w-full md:w-auto bg-purple-700 hover:bg-purple-600 px-8 py-3 rounded-lg font-medium transition disabled:opacity-50"
            >
              {uploading ? "Uploading..." : "Upload Video"}
            </button>
          </div>

        </form>

      </div>
    </div>
  );
};

export default UploadVideo;