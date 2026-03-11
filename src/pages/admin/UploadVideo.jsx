import { useState } from "react";

const UploadVideo = () => {

  const [form,setForm] = useState({});
  const [video,setVideo] = useState(null);
  const [thumbnail,setThumbnail] = useState(null);

  const handleChange = (e)=>{
    setForm({...form,[e.target.name]:e.target.value});
  };

  const handleUpload = (e)=>{
    e.preventDefault();

    console.log("Dummy Upload",form);
    alert("Dummy Upload Success");
  };

  return (

    <div className="max-w-xl">

      <h1 className="text-2xl font-bold mb-8">
        Upload Video
      </h1>

      <form onSubmit={handleUpload} className="space-y-4">

        <input
          name="title"
          placeholder="Title"
          onChange={handleChange}
          className="w-full p-3 bg-[#1C1C2E] rounded"
        />

        <input
          name="genre"
          placeholder="Genre"
          onChange={handleChange}
          className="w-full p-3 bg-[#1C1C2E] rounded"
        />

        <select
          name="category"
          onChange={handleChange}
          className="w-full p-3 bg-[#1C1C2E] rounded"
        >
          <option>Select Category</option>
          <option value="movie">Movie</option>
          <option value="documentary">Documentary</option>
          <option value="cultural">Cultural</option>
        </select>

        <input
          type="file"
          onChange={(e)=>setVideo(e.target.files[0])}
        />

        <input
          type="file"
          onChange={(e)=>setThumbnail(e.target.files[0])}
        />

        <button className="bg-purple-700 px-6 py-3 rounded-lg">
          Upload Video
        </button>

      </form>

    </div>
  );
};

export default UploadVideo;