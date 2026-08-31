export type Localized = { th: string; en: string };

export type BlogSection = {
  heading: Localized | null;
  paragraphs: string[];
  /** Rendered as a numbered/bulleted list instead of prose. */
  list?: string[];
};

export type BlogPost = {
  slug: string;
  categoryKey: string;
  category: Localized;
  title: Localized;
  /** Optional standfirst shown under the title on the article page. */
  subtitle: Localized | null;
  excerpt: Localized;
  /** Set to a path under /public once real artwork is supplied; null renders a placeholder. */
  image: string | null;
  featured: boolean;
  body: BlogSection[];
  /** Trailing legal/attribution note, rendered in a muted box. */
  notice: string | null;
};

export const blogPosts: readonly BlogPost[] = [
  {
    slug: "immersive-sustainability",
    categoryKey: "framework",
    category: { en: "Framework", th: "กรอบแนวคิด" },
    title: { en: "Immersive Sustainability", th: "Immersive Sustainability" },
    subtitle: {
      en: "Uniting the sustainability potential of a building with the people inside it.",
      th: "เชื่อมศักยภาพด้านความยั่งยืนของอาคารเข้ากับผู้คนที่ใช้งานอยู่ภายใน"
    },
    excerpt: {
      en: "A holistic framework that embeds IoT, AI and blockchain into everyday actions, delivering passive real-time digital MRV of greenhouse gas emissions.",
      th: "กรอบแนวคิดที่ผสาน IoT, AI และบล็อกเชนเข้ากับกิจกรรมประจำวัน พร้อมระบบ MRV ดิจิทัลแบบเรียลไทม์สำหรับก๊าซเรือนกระจก"
    },
    image: "/Blog Image/IS Blog Image.jpg",
    featured: true,
    body: [
      {
        heading: null,
        paragraphs: [
          "“Immersive Sustainability” is a term and conceptual framework developed by Sakayong Pattanavekin. It represents a holistic approach to sustainability that integrates advanced technologies and systems—such as the Internet of Things (IoT), Artificial Intelligence (AI), and data analytics—to provide real-time environmental insights and engage individuals and organizations in sustainable practices. The concept emphasizes the seamless connection between people and their surroundings—whether within built environments or natural ecosystems—by embedding sustainability into everyday actions, experiences, and decision-making.",
          "Immersive Sustainability also embodies an innovative approach that combines IoT, Smart Building technologies, AI, and Blockchain to enable real-time digital monitoring, reporting, and verification (digital MRV) of greenhouse gas (GHG) emissions. This framework facilitates the passive and seamless tracking of emissions data by leveraging building characteristic data and smart solutions, attributing emissions to specific activities—such as events—while engaging participants with opportunities to offset their carbon footprint."
        ]
      },
      {
        heading: { en: "Definition and framework", th: "นิยามและกรอบแนวคิด" },
        paragraphs: [
          "Immersive Sustainability emphasizes the integration of building-level and/or environmental-level sustainability with human activities by utilizing real-time data from the building's infrastructure and/or environmental infrastructure. The concept harnesses the unique characteristics of each building and/or environment—such as energy consumption patterns, environmental controls, and occupancy levels—to offer an automated digital MRV system. Through this system, emissions data for every activity within the building or environment are passively monitored and seamlessly reported, delivering unparalleled transparency and accuracy in sustainability efforts."
        ]
      },
      {
        heading: { en: "The two goals", th: "เป้าหมายสองประการ" },
        paragraphs: [],
        list: [
          "Building-Centric and/or Environmental-Centric Sustainability: By leveraging smart systems and the unique characteristics of buildings and/or environments, Immersive Sustainability ensures that the sustainability potential of these spaces is fully realized. Smart technologies optimize energy usage, control emissions, and provide real-time data that is integrated into the MRV process.",
          "Human Engagement in Sustainability: Immersive Sustainability connects building or environmental performance data with individual activities, offering participants real-time insights into their carbon footprint. By making sustainability an integral and visible part of everyday actions, it fosters behavior changes, supports personal accountability, and offers options for individuals and organizations to directly offset their emissions."
        ]
      },
      {
        heading: { en: "Technological integration", th: "การผสานเทคโนโลยี" },
        paragraphs: [],
        list: [
          "IoT (Internet of Things): IoT sensors collect data from various building or environmental components, such as energy consumption, HVAC systems, and environmental controls. This real-time data forms the foundation of the automated MRV system, capturing how the building or environment functions during specific activities.",
          "Smart Building Systems: These systems manage and process the data collected by IoT devices. Using advanced algorithms, they optimize building performance, reduce energy consumption, and control emissions, while providing detailed, activity-specific emissions data.",
          "AI Algorithms: AI analyzes the data to attribute emissions to individual activities in alignment with global standards such as the International Performance Measurement and Verification Protocol (IPMVP). This analysis generates actionable insights to reduce carbon footprints and improve future events or building usage.",
          "Blockchain Technology: Blockchain ensures that all data captured, processed, and reported within the Immersive Sustainability framework is secure, transparent, and verifiable. This technology guarantees the integrity and authenticity of the MRV process, ensuring compliance with both local and international sustainability standards."
        ]
      },
      {
        heading: { en: "Digital MRV for every activity", th: "ระบบ MRV ดิจิทัลสำหรับทุกกิจกรรม" },
        paragraphs: [
          "A key innovation of Immersive Sustainability is its seamless, passive digital MRV system, which operates continuously within buildings or environments. By utilizing characteristic data—such as energy systems, environmental control settings, and activity occupancy—the system can automatically monitor and report GHG emissions generated by each event or activity. This automated process eliminates the need for manual intervention, providing stakeholders with accurate and real-time data on their environmental impact.",
          "Moreover, the system's digital MRV capabilities extend beyond large events to everyday actions, such as meeting room usage, energy consumption by devices, or HVAC operations during regular hours. The data collected supports informed decision-making and offers opportunities for individuals and organizations to mitigate their environmental impact by engaging in carbon offset initiatives or adopting more sustainable practices."
        ]
      },
      {
        heading: {
          en: "Bridging building potential and human engagement",
          th: "เชื่อมศักยภาพของอาคารเข้ากับการมีส่วนร่วมของผู้คน"
        },
        paragraphs: [
          "The concept of Immersive Sustainability fundamentally seeks to unite the sustainability potential of the built environment with the actions of the people who occupy it. By offering seamless digital MRV linked directly to human activities, the concept fosters a deeper connection between individuals and their spaces, driving collective efforts toward achieving Net Zero emissions. The transparent, accessible nature of the data empowers individuals to understand and address their environmental impact in real time, encouraging broader participation in sustainability initiatives."
        ]
      }
    ],
    notice:
      "The term “Immersive Sustainability”, along with its associated technological and conceptual framework—including the use of building characteristics and smart solutions for digital MRV of activities—is the intellectual property of Sakayong Pattanavekin. Unauthorized reproduction, adaptation, or application of this concept in any form without prior written consent is strictly prohibited. © 2024 Sakayong Pattanavekin. All rights reserved."
  },
  {
    slug: "one-click",
    categoryKey: "sme",
    category: { en: "SME Enablement", th: "ส่งเสริมเอสเอ็มอี" },
    title: {
      en: "One-Click: Empowering Thai SMEs to Go Green with Ease",
      th: "One-Click: ช่วยให้เอสเอ็มอีไทยเปลี่ยนสู่ธุรกิจสีเขียวได้ง่ายขึ้น"
    },
    subtitle: null,
    excerpt: {
      en: "Built with Chulalongkorn University, the Office of SME Promotion and major banks, One-Click consolidates scattered data and automates greenhouse gas reporting — opening the door to green financing.",
      th: "พัฒนาร่วมกับจุฬาลงกรณ์มหาวิทยาลัย สสว. และสถาบันการเงินชั้นนำ เพื่อรวบรวมข้อมูลที่กระจัดกระจายและจัดทำรายงานก๊าซเรือนกระจกอัตโนมัติ เปิดทางสู่แหล่งเงินทุนสีเขียว"
    },
    image: "/Blog Image/OC Blog Image.jpg",
    featured: false,
    body: [
      {
        heading: { en: "Overview", th: "ภาพรวม" },
        paragraphs: [
          "One-Click represents a collaborative platform created with Chulalongkorn University, the Office of SME Promotion (สสว.), and major financial institutions. The system incorporates VEKIN's advanced AI technology to help Thailand's small and medium enterprises consolidate fragmented data and automate greenhouse gas reporting, enabling carbon footprint tracking and access to green financing."
        ]
      },
      {
        heading: { en: "The challenge", th: "โจทย์ที่ต้องแก้" },
        paragraphs: [
          "Many Thai SMEs encounter difficulties with sustainability compliance. Existing data is often scattered across multiple digital systems, complicating emissions baseline identification. Banks increasingly evaluate environmental performance during loan assessments, yet smaller enterprises lack accessible tools to generate credible GHG documentation."
        ]
      },
      {
        heading: { en: "The solution", th: "แนวทางแก้ไข" },
        paragraphs: [
          "The platform provides a streamlined, AI-driven system for carbon accounting, utilizing deep tech innovation to automatically collect, verify, and calculate operational data. This reduces the time and expense of environmental assessments."
        ]
      },
      {
        heading: { en: "Key features", th: "คุณสมบัติหลัก" },
        paragraphs: [],
        list: [
          "AI-driven carbon reporting.",
          "Automated data integration with cybersecurity protections.",
          "Green finance accessibility through partner banks.",
          "A scalable, low-cost interface designed under the One-Click concept."
        ]
      },
      {
        heading: { en: "Outcomes and impact", th: "ผลลัพธ์และผลกระทบ" },
        paragraphs: [
          "Implementation enables rapid carbon footprint verification, enhances competitive positioning, and contributes to Thailand's net-zero emissions objectives."
        ]
      }
    ],
    notice: null
  },
  {
    slug: "carbon-neutrality-4-all",
    categoryKey: "events",
    category: { en: "Events", th: "งานอีเวนต์" },
    title: {
      en: "‘Carbon Neutrality 4 All’ targets Thai events",
      th: "‘Carbon Neutrality 4 All’ มุ่งเป้างานอีเวนต์ในไทย"
    },
    subtitle: null,
    excerpt: {
      en: "An alliance of five organisations led by TCEB launches a carbon-trading platform for Thailand's MICE sector, routing offset revenue back into local community projects.",
      th: "พันธมิตรห้าองค์กรนำโดย TCEB เปิดตัวแพลตฟอร์มซื้อขายคาร์บอนสำหรับอุตสาหกรรมไมซ์ของไทย พร้อมส่งรายได้จากการชดเชยกลับสู่ชุมชน"
    },
    image: "/Blog Image/Carbon 4 All Blog Image.jpg",
    featured: false,
    body: [
      {
        heading: null,
        paragraphs: [
          "Businesses working in Thailand's conferences, incentive and business events will have the chance to trial a new carbon-trading platform being launched by an alliance of five organisations.",
          "The ‘Carbon Neutrality 4 All’ efforts announced by Thailand Convention and Exhibition Bureau (TCEB) are aimed at promoting sustainable events, with local communities also expected to benefit. Individual travellers have already trialled the carbon-trading platform, with MICE entrepreneurs expected to test the platform by the end of the year. The platform is designed to trade small- to medium-sized batches of carbon offsets."
        ]
      },
      {
        heading: { en: "The partnership", th: "ความร่วมมือ" },
        paragraphs: [
          "The partnership includes five organisations: the Thai Chamber of Commerce and Board of Trade of Thailand as project owner, The Central Group as funder, the Ministry of Interior providing carbon credits, and TCEB together with the Tourism Authority of Thailand as promoters. They signed an MOU during the soft launch in Bangkok.",
          "Carbon Neutrality 4 All is designed to meet the needs of entrepreneurs wishing to source premium quality carbon credit from carbon dioxide and methane reduction programmes."
        ]
      },
      {
        heading: { en: "How it works", th: "การทำงาน" },
        paragraphs: [
          "The platform includes a CERO application for carbon footprint calculation, AI-powered data collection, and a Green Activities feature for event attendees to monitor their carbon impact from travel and food. The platform is developed by Vekin (Thailand), the government-sanctioned body specialising in engineering decarbonisation and carbon tokenisation.",
          "When event organisers offset emissions, revenue benefits local communities managing waste projects, with accumulated points usable for retail discounts. TCEB President Chiruit Isarangkun Na Ayuthaya stated the collaboration aligns with TCEB's ‘Partnership for Business Success’ and ‘Go Sustainability’ strategies, positioning the Thai MICE industry as environmentally responsible while generating positive economic and social impacts."
        ]
      }
    ],
    notice: null
  },
  {
    slug: "cero-carbon-wallet",
    categoryKey: "retail",
    category: { en: "Retail", th: "ค้าปลีก" },
    title: { en: "CERO Carbon Wallet", th: "CERO Carbon Wallet" },
    subtitle: {
      en: "The Mall Group collaborates to drive greenhouse gas management strategy, becoming the first retailer in Thailand to use deep technology for measuring carbon reduction in tangible terms.",
      th: "เดอะมอลล์ กรุ๊ป ร่วมขับเคลื่อนกลยุทธ์การจัดการก๊าซเรือนกระจก เป็นผู้ค้าปลีกรายแรกในไทยที่ใช้ Deep Technology วัดผลการลดคาร์บอนอย่างเป็นรูปธรรม"
    },
    excerpt: {
      en: "The Mall Group becomes the first Thai retailer to measure carbon reduction in tangible terms, with carbon-labelled products at Quartier Avenue and Gourmet Market.",
      th: "เดอะมอลล์ กรุ๊ป เป็นผู้ค้าปลีกรายแรกของไทยที่วัดผลการลดคาร์บอนอย่างเป็นรูปธรรม พร้อมสินค้าติดฉลากคาร์บอนที่ Quartier Avenue และ Gourmet Market"
    },
    image: "/Blog Image/Cero Carbon Wallet Image.jpg",
    featured: false,
    body: [
      {
        heading: null,
        paragraphs: [
          "The Mall Group, the Thailand Greenhouse Gas Management Organization, Vekin and other partners collaborated to promote carbon-labelled products. The initiative ran from 27 March to 30 June 2023 at Quartier Avenue and Gourmet Market locations, and was honoured by Minister Varawut Silpa-archa."
        ]
      },
      {
        heading: { en: "Carbon labelling", th: "ฉลากคาร์บอน" },
        paragraphs: [],
        list: [
          "Carbon Footprint Reduction Label (Climate Change Mitigation), for products reducing emissions by at least 2% CO2e.",
          "Product lifecycle emissions labelling, helping consumers make informed choices."
        ]
      }
    ],
    notice: null
  }
];

export function getPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

/** Word count across a post's body, used for the "x min read" badge. */
export function readingMinutes(post: BlogPost): number {
  const words = post.body.reduce((total, section) => {
    const prose = section.paragraphs.join(" ");
    const listed = (section.list ?? []).join(" ");
    return total + `${prose} ${listed}`.trim().split(/\s+/).filter(Boolean).length;
  }, 0);

  return Math.max(1, Math.round(words / 200));
}

export const blogCategories: readonly { key: string; label: Localized }[] = [
  { key: "all", label: { en: "All stories", th: "ทั้งหมด" } },
  ...Array.from(new Map(blogPosts.map((p) => [p.categoryKey, p])).values()).map((p) => ({
    key: p.categoryKey,
    label: p.category
  }))
];
