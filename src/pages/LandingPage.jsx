import { FaPlay, FaMapMarkedAlt, FaFilm, FaUsers, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="pt-20 bg-black text-white">

      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center text-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1524985069026-dd778a71c7b4')",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/80 to-black" />

        <div className="relative z-10 max-w-3xl px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            Stream the Best Regional Stories
          </h1>

          <p className="text-gray-300 text-lg mb-8">
            Discover movies, documentaries, and cultural highlights from
            different provinces of Nepal.
          </p>

          <Link to="/subscribe">
            <button className="px-8 py-3 bg-purple-700 hover:bg-purple-600 rounded-lg text-lg font-semibold transition shadow-lg shadow-purple-700/40 cursor-pointer">
              Subscribe Now
            </button>
          </Link>
        </div>
      </section>

      {/* WHY REGIONAL OTT */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-3xl md:text-4xl font-bold mb-14 text-center">
          Why <span className="text-purple-500">Regional OTT</span>?
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          <div className="bg-[#141427] p-8 rounded-xl text-center hover:shadow-lg hover:shadow-purple-600/30 transition">
            <FaFilm className="text-purple-500 text-4xl mb-5 mx-auto" />
            <h3 className="text-xl font-semibold mb-3">
              Regional Storytelling
            </h3>
            <p className="text-gray-400">
              Watch documentaries and cultural highlights that showcase
              the traditions and real stories of each province.
            </p>
          </div>

          <div className="bg-[#141427] p-8 rounded-xl text-center hover:shadow-lg hover:shadow-purple-600/30 transition">
            <FaMapMarkedAlt className="text-purple-500 text-4xl mb-5 mx-auto" />
            <h3 className="text-xl font-semibold mb-3">
              Province Based Content
            </h3>
            <p className="text-gray-400">
              Discover content curated specially for your province
              and explore stories from other regions of Nepal.
            </p>
          </div>

          <div className="bg-[#141427] p-8 rounded-xl text-center hover:shadow-lg hover:shadow-purple-600/30 transition">
            <FaUsers className="text-purple-500 text-4xl mb-5 mx-auto" />
            <h3 className="text-xl font-semibold mb-3">
              Promote Local Culture
            </h3>
            <p className="text-gray-400">
              Our platform promotes Nepali culture, heritage, tourism,
              and regional storytelling through digital streaming.
            </p>
          </div>

        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-[#141427] py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-3xl md:text-4xl font-bold mb-14">
            How It <span className="text-purple-500">Works</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-10">

            <div className="p-8 bg-black rounded-xl border border-gray-800 hover:border-purple-500 transition">
              <div className="text-3xl font-bold text-purple-500 mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Choose Your Plan
              </h3>
              <p className="text-gray-400">
                Select a subscription plan that fits you. Standard
                gives province access, Premium unlocks everything.
              </p>
            </div>

            <div className="p-8 bg-black rounded-xl border border-gray-800 hover:border-purple-500 transition">
              <div className="text-3xl font-bold text-purple-500 mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Select Your Province
              </h3>
              <p className="text-gray-400">
                Choose your province during signup and explore
                documentaries and cultural highlights from your region.
              </p>
            </div>

            <div className="p-8 bg-black rounded-xl border border-gray-800 hover:border-purple-500 transition">
              <div className="text-3xl font-bold text-purple-500 mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Start Streaming
              </h3>
              <p className="text-gray-400">
                Watch movies, explore regional stories, and discover
                tourism places across Nepal.
              </p>
            </div>

          </div>

          <div className="mt-12">
            <Link to="/subscribe">
              <button className="px-8 py-3 bg-purple-700 hover:bg-purple-600 rounded-lg text-lg font-semibold transition flex items-center gap-2 mx-auto cursor-pointer">
                Get Started <FaArrowRight />
              </button>
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
};

export default LandingPage;