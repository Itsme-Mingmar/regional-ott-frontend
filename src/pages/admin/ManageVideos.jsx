import { useState } from "react";
import UpdateVideo from "./UpdateVideo";

const ManageVideos = () => {

  const [selectedVideo,setSelectedVideo] = useState(null);

  const videos = [
    {id:1,title:"Himalayan Documentary",category:"documentary"},
    {id:2,title:"Nepali Culture",category:"cultural"},
    {id:3,title:"Mountain Movie",category:"movie"}
  ];

  const deleteVideo = (id)=>{
    alert("Dummy Delete "+id);
  };

  if(selectedVideo){
    return (
      <UpdateVideo
        video={selectedVideo}
        goBack={()=>setSelectedVideo(null)}
      />
    );
  }

  return (

    <div>

      <h1 className="text-2xl font-bold mb-8">
        Manage Videos
      </h1>

      <div className="space-y-4">

        {videos.map((video)=>(
          <div
            key={video.id}
            className="flex justify-between items-center bg-[#1C1C2E] p-4 rounded-lg"
          >

            <div>
              <p className="font-semibold">{video.title}</p>
              <p className="text-sm text-gray-400">{video.category}</p>
            </div>

            <div className="space-x-3">

              <button
                onClick={()=>setSelectedVideo(video)}
                className="bg-blue-600 px-4 py-2 rounded"
              >
                Update
              </button>

              <button
                onClick={()=>deleteVideo(video.id)}
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