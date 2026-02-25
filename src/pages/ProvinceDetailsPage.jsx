import { useParams } from "react-router-dom";

const ProvinceDetailPage = () => {
  const { province, category } = useParams();

  const data = Array.from({ length: 18 }, (_, i) => ({
    id: i,
    title: `${category} ${i + 1}`,
    image: `https://picsum.photos/300/450?random=${i}`,
  }));

  return (
    <div className="pt-24 px-8 min-h-screen bg-[#0F0F1A] text-white">
      <h1 className="text-3xl font-bold mb-10 capitalize">
        {province} - {category.replace("-", " ")}
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
        {data.map((item) => (
          <div
            key={item.id}
            className="rounded-xl overflow-hidden hover:scale-105 hover:shadow-2xl transition duration-300"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-[280px] object-cover"
            />
            <div className="mt-3">
              <h3 className="text-sm">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProvinceDetailPage;