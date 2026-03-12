import { useState } from "react";
import { FiArrowLeft } from "react-icons/fi";

const UpdateVideo = ({ video, goBack }) => {

  const [form,setForm] = useState({
    title: video.title || "",
    description: video.description || "",
    genre: video.genre || "",
    language: video.language || "",
    releaseYear: video.releaseYear || "",
    duration: video.duration || "",
    category: video.category || "",
    province: video.province || ""
  });

  const [videoFile,setVideoFile] = useState(null);
  const [thumbnail,setThumbnail] = useState(null);

  const handleChange = (e)=>{
    setForm({...form,[e.target.name]:e.target.value});
  };

  const handleUpdate = (e)=>{
    e.preventDefault();

    const data = new FormData();

    Object.keys(form).forEach(key=>{
      data.append(key,form[key]);
    });

    if(videoFile){
      data.append("video",videoFile);
    }

    if(thumbnail){
      data.append("thumbnail",thumbnail);
    }

    console.log("Dummy Update Payload",form);

    alert("Dummy Update Success");
  };

  return (

    <div className="flex justify-center w-full px-4 sm:px-6 md:px-10">

      <div className="w-full max-w-2xl bg-[#1C1C2E] p-6 sm:p-8 rounded-xl shadow-lg">

        {/* Back */}
        <button
          onClick={goBack}
          className="flex items-center gap-2 mb-6 text-purple-400 hover:text-purple-300"
        >
          <FiArrowLeft size={18}/>
          Back
        </button>

        <h1 className="text-2xl font-bold mb-6">
          Update Video
        </h1>

        <form onSubmit={handleUpdate} className="space-y-4">

          {/* Title */}
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Title"
            className="w-full p-3 bg-[#141427] rounded-lg outline-none focus:ring-2 focus:ring-purple-600"
          />

          {/* Description */}
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Description"
            className="w-full p-3 bg-[#141427] rounded-lg outline-none focus:ring-2 focus:ring-purple-600"
          />

          {/* Genre */}
          <input
            name="genre"
            value={form.genre}
            onChange={handleChange}
            placeholder="Genre"
            className="w-full p-3 bg-[#141427] rounded-lg outline-none focus:ring-2 focus:ring-purple-600"
          />

          {/* Language */}
          <input
            name="language"
            value={form.language}
            onChange={handleChange}
            placeholder="Language"
            className="w-full p-3 bg-[#141427] rounded-lg outline-none focus:ring-2 focus:ring-purple-600"
          />

          {/* Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

            <input
              name="releaseYear"
              value={form.releaseYear}
              onChange={handleChange}
              placeholder="Release Year"
              type="number"
              className="p-3 bg-[#141427] rounded-lg outline-none focus:ring-2 focus:ring-purple-600"
            />

            <input
              name="duration"
              value={form.duration}
              onChange={handleChange}
              placeholder="Duration (minutes)"
              type="number"
              className="p-3 bg-[#141427] rounded-lg outline-none focus:ring-2 focus:ring-purple-600"
            />

          </div>

          {/* Category */}
          <select
            name="category"
            value={form.category}
            onChange={handleChange}
            className="w-full p-3 bg-[#141427] rounded-lg outline-none focus:ring-2 focus:ring-purple-600"
          >
            <option value="">Select Category</option>
            <option value="movie">Movie</option>
            <option value="documentary">Documentary</option>
            <option value="cultural">Cultural</option>
          </select>

          {/* Province */}
          <input
            name="province"
            value={form.province}
            onChange={handleChange}
            placeholder="Province (optional for movies)"
            className="w-full p-3 bg-[#141427] rounded-lg outline-none focus:ring-2 focus:ring-purple-600"
          />

          {/* Upload Files */}
          <div className="space-y-3">

            <div>
              <label className="text-sm text-gray-400">
                Replace Video (optional)
              </label>

              <input
                type="file"
                onChange={(e)=>setVideoFile(e.target.files[0])}
                className="block mt-1"
              />
            </div>

            <div>
              <label className="text-sm text-gray-400">
                Replace Thumbnail (optional)
              </label>

              <input
                type="file"
                onChange={(e)=>setThumbnail(e.target.files[0])}
                className="block mt-1"
              />
            </div>

          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full sm:w-auto bg-purple-700 hover:bg-purple-600 transition px-6 py-3 rounded-lg font-medium"
          >
            Update Video
          </button>

        </form>

      </div>

    </div>
  );
};

export default UpdateVideo;