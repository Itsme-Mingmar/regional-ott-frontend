import { useState } from "react";
// import axios from "axios";

const AdminDashboard = () => {

  const [form,setForm] = useState({
    title:"",
    description:"",
    genre:"",
    language:"",
    releaseYear:"",
    duration:"",
    category:"",
    province:""
  });

  const [video,setVideo] = useState(null);
  const [thumbnail,setThumbnail] = useState(null);
  const [videoId,setVideoId] = useState("");

  const handleChange = (e)=>{
    setForm({...form,[e.target.name]:e.target.value});
  };

  // UPLOAD VIDEO
  const handleUpload = async (e)=>{
    e.preventDefault();

    const data = new FormData();

    Object.keys(form).forEach(key=>{
      data.append(key,form[key]);
    });

    data.append("video",video);
    data.append("thumbnail",thumbnail);

    // ----------------------------
    // DUMMY LOGIC (UI TESTING)
    // ----------------------------
    console.log("Uploading Video (Dummy):", form);
    console.log("Video File:", video);
    console.log("Thumbnail:", thumbnail);

    alert("Dummy Upload Successful ✅");

    // ----------------------------
    // REAL API CALL (commented)
    // ----------------------------
    /*
    try{

      const res = await axios.post(
        "/api/videos/upload",
        data,
        { withCredentials:true }
      );

      alert("Video Uploaded Successfully");

    }catch(err){
      console.log(err);
    }
    */
  };

  // DELETE VIDEO
  const handleDelete = async ()=>{

    if(!videoId){
      alert("Enter Video ID");
      return;
    }

    // ----------------------------
    // DUMMY DELETE
    // ----------------------------
    console.log("Deleting Video ID:", videoId);

    alert(`Dummy Delete Success for ID: ${videoId} ❌`);

    setVideoId("");

    // ----------------------------
    // REAL API (commented)
    // ----------------------------
    /*
    try{

      await axios.delete(
        `/api/videos/${videoId}`,
        { withCredentials:true }
      );

      alert("Video Deleted");

    }catch(err){
      console.log(err);
    }
    */
  };

  return (
    <div className="min-h-screen bg-[#141427] text-white pt-24 px-6">

      <div className="max-w-6xl mx-auto">

        <h1 className="text-3xl font-bold mb-12">
          Admin Dashboard
        </h1>

        <div className="grid md:grid-cols-2 gap-10">

          {/* UPLOAD VIDEO */}
          <div className="bg-[#1C1C2E] p-8 rounded-xl">

            <h2 className="text-xl font-semibold mb-6">
              Upload Video
            </h2>

            <form
              onSubmit={handleUpload}
              className="space-y-4"
            >

              <input
                name="title"
                placeholder="Title"
                onChange={handleChange}
                className="w-full p-3 bg-[#141427] rounded"
              />

              <input
                name="genre"
                placeholder="Genre"
                onChange={handleChange}
                className="w-full p-3 bg-[#141427] rounded"
              />

              <input
                name="language"
                placeholder="Language"
                onChange={handleChange}
                className="w-full p-3 bg-[#141427] rounded"
              />

              <input
                name="releaseYear"
                placeholder="Release Year"
                onChange={handleChange}
                className="w-full p-3 bg-[#141427] rounded"
              />

              <input
                name="duration"
                placeholder="Duration"
                onChange={handleChange}
                className="w-full p-3 bg-[#141427] rounded"
              />

              <select
                name="category"
                onChange={handleChange}
                className="w-full p-3 bg-[#141427] rounded"
              >
                <option value="">Select Category</option>
                <option value="movie">Movie</option>
                <option value="documentary">Documentary</option>
                <option value="cultural">Cultural</option>
              </select>

              <input
                name="province"
                placeholder="Province Name"
                onChange={handleChange}
                className="w-full p-3 bg-[#141427] rounded"
              />

              <textarea
                name="description"
                placeholder="Description"
                onChange={handleChange}
                className="w-full p-3 bg-[#141427] rounded"
              />

              <input
                type="file"
                onChange={(e)=>setVideo(e.target.files[0])}
              />

              <input
                type="file"
                onChange={(e)=>setThumbnail(e.target.files[0])}
              />

              <button
                type="submit"
                className="bg-purple-700 hover:bg-purple-600 px-6 py-3 rounded-lg"
              >
                Upload
              </button>

            </form>

          </div>

          {/* DELETE VIDEO */}
          <div className="bg-[#1C1C2E] p-8 rounded-xl">

            <h2 className="text-xl font-semibold mb-6">
              Delete Video
            </h2>

            <input
              placeholder="Enter Video ID"
              value={videoId}
              onChange={(e)=>setVideoId(e.target.value)}
              className="w-full p-3 bg-[#141427] rounded mb-4"
            />

            <button
              onClick={handleDelete}
              className="bg-red-600 hover:bg-red-500 px-6 py-3 rounded-lg"
            >
              Delete Video
            </button>

          </div>

        </div>

      </div>

    </div>
  );
};

export default AdminDashboard;