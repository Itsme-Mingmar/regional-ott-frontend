import { useState } from "react";
import UploadVideo from "./UploadVideo";
import ManageVideos from "./ManageVideos";

const AdminDashboard = () => {

  const [activePage,setActivePage] = useState("upload");

  return (
    <div className="min-h-screen flex bg-[#141427] text-white">

      {/* SIDEBAR */}
      <div className="w-64 bg-[#1C1C2E] p-6">

        <h2 className="text-xl font-bold mb-10">
          Admin Panel
        </h2>

        <div className="space-y-4">

          <button
            onClick={()=>setActivePage("upload")}
            className={`w-full text-left p-3 rounded ${
              activePage==="upload"
              ? "bg-purple-700"
              : "hover:bg-[#2a2a40]"
            }`}
          >
            Upload Video
          </button>

          <button
            onClick={()=>setActivePage("manage")}
            className={`w-full text-left p-3 rounded ${
              activePage==="manage"
              ? "bg-purple-700"
              : "hover:bg-[#2a2a40]"
            }`}
          >
            Manage Videos
          </button>

        </div>

      </div>

      {/* CONTENT */}
      <div className="flex-1 p-10">

        {activePage==="upload" && <UploadVideo />}
        {activePage==="manage" && <ManageVideos />}

      </div>

    </div>
  );
};

export default AdminDashboard;