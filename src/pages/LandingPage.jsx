import {
  FaPlay,
  FaMapMarkedAlt,
  FaFilm,
  FaUsers,
  FaArrowRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const LandingPage = () => {
  return (
    <div className="pt-20 bg-black text-white">

      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center text-center">

        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1524985069026-dd778a71c7b4')",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/40 to-black" />

        {/* Animated Content */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-3xl px-6"
        >
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"
          >
            Stream the Best Regional Stories
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-gray-300 text-lg mb-8"
          >
            Discover movies, documentaries, and cultural highlights from
            different provinces of Nepal.
          </motion.p>

          <Link to="/subscribe">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-purple-700 hover:bg-purple-600 rounded-lg text-lg font-semibold shadow-lg shadow-purple-700/50 cursor-pointer"
            >
              Subscribe Now
            </motion.button>
          </Link>
        </motion.div>
      </section>

      {/* WHY REGIONAL OTT */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-14 text-center"
        >
          Why <span className="text-purple-500">Regional OTT</span>?
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10">

          {[
            {
              icon: <FaFilm />,
              title: "Regional Storytelling",
              text: "Watch documentaries and cultural highlights that showcase the traditions and real stories of each province.",
            },
            {
              icon: <FaMapMarkedAlt />,
              title: "Province Based Content",
              text: "Discover content curated specially for your province and explore stories from other regions of Nepal.",
            },
            {
              icon: <FaUsers />,
              title: "Promote Local Culture",
              text: "Our platform promotes Nepali culture, heritage, tourism, and regional storytelling through digital streaming.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="bg-[#141427] p-8 rounded-xl text-center hover:shadow-lg hover:shadow-purple-600/30 transition"
            >
              <div className="text-purple-500 text-4xl mb-5 mx-auto">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">
                {item.title}
              </h3>
              <p className="text-gray-400">{item.text}</p>
            </motion.div>
          ))}

        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-[#141427] py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-14"
          >
            How It <span className="text-purple-500">Works</span>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-10">

            {[1, 2, 3].map((step, index) => {
              const titles = [
                "Choose Your Plan",
                "Select Your Province",
                "Start Streaming",
              ];

              const texts = [
                "Select a subscription plan that fits you. Standard gives province access, Premium unlocks everything.",
                "Choose your province during signup and explore documentaries and cultural highlights from your region.",
                "Watch movies, explore regional stories, and discover tourism places across Nepal.",
              ];

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="p-8 bg-black rounded-xl border border-gray-800 hover:border-purple-500 transition"
                >
                  <div className="text-3xl font-bold text-purple-500 mb-4">
                    {step}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    {titles[index]}
                  </h3>
                  <p className="text-gray-400">{texts[index]}</p>
                </motion.div>
              );
            })}

          </div>

          <div className="mt-12">
            <Link to="/subscribe">
              <motion.button
                whileHover="hover"
                className="px-8 py-3 bg-purple-700 hover:bg-purple-600 rounded-lg text-lg font-semibold shadow-lg shadow-purple-700/50 cursor-pointer inline-flex items-center gap-2"
              >
                Get Started
                <motion.span
                  variants={{
                    hover: { x: 5 }
                  }}
                >
                  <FaArrowRight />
                </motion.span>
              </motion.button>
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
};

export default LandingPage;