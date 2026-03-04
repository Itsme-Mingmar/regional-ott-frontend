// ===== Rara Lake =====
import rara1 from "../../assets/tourism/karnali/Rara.jpg";
import rara2 from "../../assets/tourism/karnali/Rara1.jpg";
import rara3 from "../../assets/tourism/karnali/Rara2.jpg";

// ===== Shey Phoksundo Lake =====
import phoksundo1 from "../../assets/tourism/karnali/Shey phoksumdo.jpg";
import phoksundo2 from "../../assets/tourism/karnali/shey phoksundo1.webp";
import phoksundo3 from "../../assets/tourism/karnali/shey phoksundo2.jpg";

// ===== Limi Valley =====
import limi1 from "../../assets/tourism/karnali/limi.jpg";
import limi2 from "../../assets/tourism/karnali/limi1.jpg";
import limi3 from "../../assets/tourism/karnali/limi2.jpg";

// ===== Chandannath Temple =====
import chandannath1 from "../../assets/tourism/karnali/Channdannath.jpg";
import chandannath2 from "../../assets/tourism/karnali/chandannath2.jpg";
import chandannath3 from "../../assets/tourism/karnali/chandannath2.webp";

// ===== Shey Gompa =====
import shey1 from "../../assets/tourism/karnali/shey-gompa.jpg";
import shey2 from "../../assets/tourism/karnali/shey-gompa1.jpg";

// ===== Sinja Valley =====
import sinja1 from "../../assets/tourism/karnali/Sinja.jpg";
import sinja2 from "../../assets/tourism/karnali/Sinja2.jpg";
import sinja3 from "../../assets/tourism/karnali/sinja3.jpg";

export const karnaliTourism = [
    {
        id: 1,
        slug: "rara-lake",
        name: "Rara Lake",
        province: "karnali",
        images: [rara1, rara2, rara3],
        description:
            "Rara Lake is the largest lake in Nepal, covering approximately 10.8 square kilometers at an altitude of 2,990 meters in Mugu district. It lies within Rara National Park, which was established in 1976 to protect the unique flora and fauna of the region. The lake is known for its clear blue waters and surrounding alpine forests of pine, spruce, and juniper. The park protects wildlife species such as the Himalayan black bear, red panda, and musk deer. Rara is considered one of Nepal’s most pristine and scenic natural destinations.",
        bestTime: "April to June and September to October",
        howToReach:
            "Flight from Nepalgunj to Talcha Airport followed by 2–3 hour walk, or multi-day trek from Jumla."
    },
    {
        id: 2,
        slug: "shey-phoksundo-lake",
        name: "Shey Phoksundo Lake",
        province: "karnali",
        images: [phoksundo1, phoksundo2, phoksundo3],
        description:
            "Shey Phoksundo Lake is Nepal’s deepest lake, reaching depths of approximately 145 meters, located in Dolpa district at an altitude of about 3,611 meters. It lies inside Shey Phoksundo National Park, Nepal’s largest national park established in 1984. The lake is famous for its striking turquoise color and dramatic surrounding cliffs. The park conserves endangered species such as the snow leopard, blue sheep, and Tibetan wolf. The area is culturally significant for the local Tibetan Buddhist communities.",
        bestTime: "May to October",
        howToReach:
            "Flight from Nepalgunj to Juphal Airport followed by 2–3 days trek."
    },
    {
        id: 3,
        slug: "limi-valley",
        name: "Limi Valley",
        province: "karnali",
        images: [limi1, limi2, limi3],
        description:
            "Limi Valley is a remote trans-Himalayan valley in Humla district near the Nepal–Tibet border. The valley lies at elevations above 3,600 meters and is known for its preserved Tibetan Buddhist culture and traditional stone villages such as Halji, Til, and Jang. The region is part of the Greater Himalayan landscape and is culturally linked with ancient trade routes between Nepal and Tibet. Limi Valley remains one of the least disturbed trekking regions in Nepal, offering dramatic mountain scenery and centuries-old monasteries.",
        bestTime: "June to September",
        howToReach:
            "Flight to Simikot Airport in Humla followed by multi-day trek to the valley."
    },
    {
        id: 4,
        slug: "shey-gompa",
        name: "Shey Gompa",
        province: "karnali",
        images: [shey1, shey2],
        description:
            "Shey Gompa, also known as Crystal Monastery, is an ancient Tibetan Buddhist monastery located in Upper Dolpa inside Shey Phoksundo National Park. It was established in the 17th century and belongs to the Drukpa Kagyu school of Tibetan Buddhism. The monastery sits near Crystal Mountain (Shelri Sumdho), a sacred pilgrimage site where devotees perform ritual circumambulation. The site is culturally important to local Dolpo communities and reflects the deep-rooted Buddhist heritage of the trans-Himalayan region.",
        bestTime: "May to October",
        howToReach:
            "Flight to Juphal followed by several days of trekking through Upper Dolpa."
    },
    {
        id: 5,
        slug: "chandannath-temple",
        name: "Chandannath Temple",
        province: "karnali",
        images: [chandannath1, chandannath2, chandannath3],
        description:
            "Chandannath Temple is a historic Hindu temple located in Jumla district and is closely associated with the Chandannath Baba spiritual tradition. The temple complex is an important religious and cultural landmark of the Karnali region. Chandannath Municipality derives its name from this temple. The site plays a central role during local religious festivals and reflects the traditional spiritual practices of western Nepal.",
        bestTime: "March to June and September to November",
        howToReach:
            "Flight from Nepalgunj to Jumla Airport followed by short drive or walk."
    },
    {
        id: 6,
        slug: "sinja-valley",
        name: "Sinja Valley",
        province: "karnali",
        images: [sinja1, sinja2, sinja3],
        description:
            "Sinja Valley, located in Jumla district, is historically significant as the ancient capital of the Khasa Kingdom between the 12th and 14th centuries. It is widely regarded as the origin place of the Nepali (Khas) language. Archaeological remains in the valley include old palaces, temples, inscriptions, and irrigation systems. The valley has been included in Nepal’s tentative list for UNESCO World Heritage recognition due to its cultural and historical importance.",
        bestTime: "April to June and September to October",
        howToReach:
            "Accessible via flight to Jumla Airport followed by short drive or local trek."
    }
]