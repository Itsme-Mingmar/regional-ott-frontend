import { useState } from "react";
import UploadVideo from "./UploadVideo";
import ManageVideos from "./ManageVideos";
import ManageUsers from "./ManageUsers";

const AdminDashboard = () => {

  const [activePage,setActivePage] = useState("upload");
  const [sidebarOpen,setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex bg-[#141427] text-white relative">

      {/* MOBILE MENU BUTTON */}
      {!sidebarOpen && (
        <button
          onClick={()=>setSidebarOpen(true)}
          className="md:hidden fixed top-19 left-4 z-50 bg-purple-700 px-3 py-2 rounded"
        >
          ☰
        </button>
      )}

      {/* OVERLAY (mobile) */}
      {sidebarOpen && (
        <div
          onClick={()=>setSidebarOpen(false)}
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
        />
      )}

      {/* SIDEBAR */}
      <div
        className={`fixed md:relative top-0 left-0 h-screen w-64 bg-[#1C1C2E] p-6
        transform transition-transform duration-300 z-40
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0`}
      >

        <h2 className="text-xl font-bold mb-10">
          Admin Panel
        </h2>

        <div className="space-y-4">

          <button
            onClick={()=>{
              setActivePage("upload");
              setSidebarOpen(false);
            }}
            className={`w-full text-left p-3 rounded ${
              activePage==="upload"
              ? "bg-purple-700"
              : "hover:bg-[#2a2a40]"
            }`}
          >
            Upload Video
          </button>

          <button
            onClick={()=>{
              setActivePage("manage");
              setSidebarOpen(false);
            }}
            className={`w-full text-left p-3 rounded ${
              activePage==="manage"
              ? "bg-purple-700"
              : "hover:bg-[#2a2a40]"
            }`}
          >
            Manage Videos
          </button>

          <button
            onClick={()=>{
              setActivePage("users");
              setSidebarOpen(false);
            }}
            className={`w-full text-left p-3 rounded ${
              activePage==="users"
              ? "bg-purple-700"
              : "hover:bg-[#2a2a40]"
            }`}
          >
            Manage Users
          </button>

        </div>

      </div>

      {/* CONTENT */}
      <div className="flex-1 p-6 md:p-10 w-full pt-28 md:pt-10">

        {activePage==="upload" && <UploadVideo />}
        {activePage==="manage" && <ManageVideos />}
        {activePage==="users" && <ManageUsers />}

      </div>

    </div>
  );
};

export default AdminDashboard;