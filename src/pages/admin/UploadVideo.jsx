import { useState } from "react";

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

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleUpload = (e) => {
    e.preventDefault();

    const data = new FormData();

    Object.keys(form).forEach((key) => {
      data.append(key, form[key]);
    });

    data.append("video", video);
    data.append("thumbnail", thumbnail);

    console.log("Upload Payload:", form);
    console.log("Video File:", video);
    console.log("Thumbnail:", thumbnail);

    alert("Dummy Upload Success");
  };

  return (

    <div className="flex justify-center w-full px-4 md:px-8">

      <div className="w-full max-w-4xl bg-[#1C1C2E] p-6 md:p-10 rounded-xl shadow-lg">

        <h1 className="text-2xl md:text-3xl font-bold mb-8">
          Upload Video
        </h1>

        <form onSubmit={handleUpload} className="space-y-5">

          {/* GRID FIELDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            <input
              name="title"
              placeholder="Title"
              onChange={handleChange}
              className="w-full p-3 bg-[#141427] rounded-lg"
            />

            <input
              name="genre"
              placeholder="Genre"
              onChange={handleChange}
              className="w-full p-3 bg-[#141427] rounded-lg"
            />

            <input
              name="language"
              placeholder="Language"
              onChange={handleChange}
              className="w-full p-3 bg-[#141427] rounded-lg"
            />

            <input
              name="releaseYear"
              placeholder="Release Year"
              type="number"
              onChange={handleChange}
              className="w-full p-3 bg-[#141427] rounded-lg"
            />

            <input
              name="duration"
              placeholder="Duration (minutes)"
              type="number"
              onChange={handleChange}
              className="w-full p-3 bg-[#141427] rounded-lg"
            />

            <input
              name="province"
              placeholder="Province (Optional for movies)"
              onChange={handleChange}
              className="w-full p-3 bg-[#141427] rounded-lg"
            />

          </div>

          {/* DESCRIPTION */}
          <textarea
            name="description"
            placeholder="Description"
            onChange={handleChange}
            className="w-full p-3 bg-[#141427] rounded-lg"
          />

          {/* CATEGORY */}
          <select
            name="category"
            onChange={handleChange}
            className="w-full p-3 bg-[#141427] rounded-lg"
          >
            <option value="">Select Category</option>
            <option value="movie">Movie</option>
            <option value="documentary">Documentary</option>
            <option value="cultural">Cultural</option>
          </select>

          {/* FILE UPLOAD */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div>
              <label className="text-sm text-gray-400">
                Video File
              </label>
              <input
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
                type="file"
                onChange={(e) => setThumbnail(e.target.files[0])}
                className="block mt-2 w-full cursor-pointer"
              />
            </div>

          </div>

          {/* BUTTON */}
          <div className="flex justify-center md:justify-end pt-4">
            <button className="w-full md:w-auto bg-purple-700 hover:bg-purple-600 px-8 py-3 rounded-lg font-medium transition">
              Upload Video
            </button>
          </div>

        </form>

      </div>

    </div>
  );
};

export default UploadVideo;