import { useState } from "react";

const UpdateVideo = ({video,goBack}) => {

  const [title,setTitle] = useState(video.title);

  const handleUpdate = ()=>{
    alert("Dummy Update "+title);
  };

  return (

    <div className="max-w-xl">

      <button
        onClick={goBack}
        className="mb-6 text-purple-400"
      >
        ← Back
      </button>

      <h1 className="text-2xl font-bold mb-6">
        Update Video
      </h1>

      <input
        value={title}
        onChange={(e)=>setTitle(e.target.value)}
        className="w-full p-3 bg-[#1C1C2E] rounded mb-4"
      />

      <button
        onClick={handleUpdate}
        className="bg-purple-700 px-6 py-3 rounded-lg"
      >
        Update
      </button>

    </div>
  );
};

export default UpdateVideo;