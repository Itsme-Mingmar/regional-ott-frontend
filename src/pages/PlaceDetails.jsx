import { useParams } from "react-router-dom";
import { tourismData } from "../data/tourism";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const PlaceDetails = () => {
  const { province, slug } = useParams();
  const [currentImage, setCurrentImage] = useState(0);

  const place =
    tourismData[province]?.find((item) => item.slug === slug);

  if (!place) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#141427] text-white">
        <h1 className="text-2xl font-semibold">Place Not Found</h1>
      </div>
    );
  }

  const nextImage = () => {
    setCurrentImage((prev) =>
      prev === place.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImage((prev) =>
      prev === 0 ? place.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="bg-[#141427] text-white min-h-screen">


      {/* IMAGE SLIDER */}
<div className="relative w-full py-20 bg-[#0f0f1f] overflow-hidden">

  <div className="relative w-full max-w-6xl mx-auto">

    {/* Carousel Wrapper */}
    <div className="overflow-hidden">

      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(calc(-${currentImage} * 100%))`,
        }}
      >
        {place.images.map((img, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0 flex justify-center px-8"
          >
            <img
              src={img}
              alt={place.name}
              className="w-[70%] h-[450px] object-cover rounded-3xl shadow-2xl"
            />
          </div>
        ))}
      </div>

    </div>

    {/* Left Button */}
    <button
      onClick={prevImage}
      className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 p-3 rounded-full hover:bg-black/80 transition z-10"
    >
      <ChevronLeft size={28} />
    </button>

    {/* Right Button */}
    <button
      onClick={nextImage}
      className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 p-3 rounded-full hover:bg-black/80 transition z-10"
    >
      <ChevronRight size={28} />
    </button>

  </div>
</div>

      {/* CONTENT */}
      <div className="max-w-6xl mx-auto px-6 py-14">

        {/* Title Section */}
        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">
            {place.name}
          </h1>

          <p className="text-purple-400 text-sm uppercase tracking-wide">
            {place.province} Province
          </p>
        </div>

        {/* Description */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold mb-4">
            About This Place
          </h2>

          <p className="text-gray-300 leading-relaxed">
            {place.description}
          </p>
        </div>

        {/* Info Cards */}
        <div className="grid sm:grid-cols-2 gap-8">

          <div className="bg-[#1C1C2E] p-6 rounded-2xl shadow-md hover:shadow-xl transition">
            <h3 className="text-lg font-semibold mb-3">
              🌤 Best Time to Visit
            </h3>
            <p className="text-gray-400">
              {place.bestTime}
            </p>
          </div>

          <div className="bg-[#1C1C2E] p-6 rounded-2xl shadow-md hover:shadow-xl transition">
            <h3 className="text-lg font-semibold mb-3">
              📍 How to Reach
            </h3>
            <p className="text-gray-400">
              {place.howToReach}
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default PlaceDetails;