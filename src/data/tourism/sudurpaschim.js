// ===== Khaptad National Park =====
import khaptad1 from "../../assets/tourism/sudurpaschim/khapdat1.jpg";
import khaptad2 from "../../assets/tourism/sudurpaschim/Khaptad.jpg";
import khaptad3 from "../../assets/tourism/sudurpaschim/khaptat2.webp";

// ===== Shuklaphanta National Park =====
import shuklaphanta1 from "../../assets/tourism/sudurpaschim/shuklaphanta.jpg";
import shuklaphanta2 from "../../assets/tourism/sudurpaschim/shuklaphanta1.jpg";
import shuklaphanta3 from "../../assets/tourism/sudurpaschim/Shuklaphanta2.jpg";

// ===== Api Himal =====
import api1 from "../../assets/tourism/sudurpaschim/api.jpg";
import api2 from "../../assets/tourism/sudurpaschim/Api1.jpg";
import api3 from "../../assets/tourism/sudurpaschim/api3.jpg";

// ===== Budimalika =====
import badimalika1 from "../../assets/tourism/sudurpaschim/budimalika.jpeg";
import badimalika2 from "../../assets/tourism/sudurpaschim/budimalika2.jpg";
import badimalika3 from "../../assets/tourism/sudurpaschim/budimalika3.jpg";

// ===== Ghoda Ghodi Lake =====
import ghodaghodi1 from "../../assets/tourism/sudurpaschim/Ghodaghodi.jpg";
import ghodaghodi2 from "../../assets/tourism/sudurpaschim/ghodaghodi2.jpg";
import ghodaghodi3 from "../../assets/tourism/sudurpaschim/ghodaghodi3.jpg";

// ===== Ramaroshan =====
import ramaroshan1 from "../../assets/tourism/sudurpaschim/ramaroshan.jpg";
import ramaroshan2 from "../../assets/tourism/sudurpaschim/ramaroshan2.jpg";
import ramaroshan3 from "../../assets/tourism/sudurpaschim/Ramaroshan3.jpg";

export const sudurTourism = [
    {
        id: 1,
        slug: "khaptad-national-park",
        name: "Khaptad National Park",
        province: "sudurpashchim",
        images: [khaptad1, khaptad2, khaptad3],
        description:
            "Khaptad National Park, established in 1984, covers approximately 225 square kilometers across Bajhang, Bajura, Achham, and Doti districts. The park lies at elevations between 1,400 and 3,300 meters and is known for its rolling grasslands (locally called 'Patans'), dense forests of pine and fir, and rich biodiversity. It is also spiritually significant due to the ashram of Khaptad Baba, a revered Hindu sage. The park provides habitat for species such as Himalayan black bear, leopard, musk deer, and numerous bird species.",
        bestTime: "March to June and September to November",
        howToReach:
            "Flight to Dhangadhi or Dipayal followed by long road journey and several hours of trekking."
    },
    {
        id: 2,
        slug: "shuklaphanta-national-park",
        name: "Shuklaphanta National Park",
        province: "sudurpashchim",
        images: [shuklaphanta1, shuklaphanta2, shuklaphanta3],
        description:
            "Shuklaphanta National Park, declared a national park in 2017 (formerly a wildlife reserve), covers 305 square kilometers in Kanchanpur district. It is famous for its extensive grasslands, including one of the largest continuous grasslands in Nepal. The park is home to endangered species such as the Bengal tiger, greater one-horned rhinoceros, swamp deer, and Asian elephant. It is also an important bird habitat with over 400 recorded species.",
        bestTime: "October to April",
        howToReach:
            "Flight to Dhangadhi Airport followed by 1–2 hour drive to the park entrance."
    },
    {
        id: 3,
        slug: "ghodaghodi-lake",
        name: "Ghodaghodi Lake",
        province: "sudurpashchim",
        images: [ghodaghodi1, ghodaghodi2, ghodaghodi3],
        description:
            "Ghodaghodi Lake is a Ramsar-listed wetland site located in Kailali district along the East-West Highway. The lake complex consists of several interconnected freshwater lakes surrounded by tropical deciduous forest. It supports diverse aquatic life, migratory birds, reptiles, and fish species. The site also holds cultural importance for the Tharu community, who celebrate traditional festivals around the lake area.",
        bestTime: "October to March",
        howToReach:
            "Accessible by road, approximately 1 hour east of Dhangadhi along the Mahendra Highway."
    },
    {
        id: 4,
        slug: "ramaroshan",
        name: "Ramaroshan",
        province: "sudurpashchim",
        images: [ramaroshan1, ramaroshan2, ramaroshan3],
        description:
            "Ramaroshan is a highland area in Achham district known as the 'Lake District of Far-Western Nepal.' It consists of a cluster of around a dozen lakes and scenic meadows situated at elevations above 2,500 meters. The region is relatively unexplored and offers panoramic mountain views, alpine landscapes, and traditional rural settlements. It has growing potential as an eco-tourism and trekking destination.",
        bestTime: "May to October",
        howToReach:
            "Road journey to Achham district followed by trekking to reach the lake cluster."
    },
    {
        id: 5,
        slug: "badimalika-temple",
        name: "Badimalika Temple",
        province: "sudurpashchim",
        images: [badimalika1, badimalika2, badimalika3],
        description:
            "Badimalika Temple is a revered Hindu pilgrimage site located at an altitude of approximately 4,200 meters in Bajura district. The temple is dedicated to Goddess Bhagwati (Malika) and attracts thousands of devotees during the annual Badimalika festival held in August–September (Janai Purnima period). The temple complex sits amidst high-altitude grasslands and offers panoramic views of Api and Saipal Himalayan ranges.",
        bestTime: "June to September",
        howToReach:
            "Flight to Dhangadhi or Nepalgunj, road journey to Martadi (Bajura), followed by multi-day trek."
    },
    {
        id: 6,
        slug: "api-nampa-conservation-area",
        name: "Api Nampa Conservation Area",
        province: "sudurpashchim",
        images: [api1, api2, api3],
        description:
            "Api Nampa Conservation Area, established in 2010, covers approximately 1,903 square kilometers in Darchula district. The area includes Mount Api (7,132 m) and Mount Nampa and features diverse ecosystems ranging from subtropical forests to alpine meadows and glaciers. It is home to endangered wildlife such as the snow leopard, Himalayan tahr, and musk deer. The conservation area also preserves traditional Byansi and other local Himalayan cultures.",
        bestTime: "April to June and September to October",
        howToReach:
            "Road travel to Darchula district followed by trekking into the conservation area."
    }
]