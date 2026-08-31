export type Localized = { th: string; en: string };

export type BlogSection = {
  heading: Localized | null;
  paragraphs: Localized[];
  /** Rendered as a bulleted list instead of prose. */
  list?: Localized[];
};

export type BlogPost = {
  slug: string;
  categoryKey: string;
  category: Localized;
  title: Localized;
  /** Optional standfirst shown under the title on the article page. */
  subtitle: Localized | null;
  excerpt: Localized;
  /**
   * ISO date (YYYY-MM-DD) the story was published. Null where the date is
   * genuinely unknown — a guessed date would misdate real customer work, and
   * both the byline and the BlogPosting schema omit it while null.
   */
  datePublished: string | null;
  /** Set to a path under /public; null renders a placeholder. */
  image: string | null;
  /** Natural pixel width of the image, so low-res sources are not stretched. */
  imageWidth: number | null;
  featured: boolean;
  body: BlogSection[];
  /** Trailing legal/attribution note, rendered in a muted box. */
  notice: Localized | null;
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
    datePublished: null,
    image: "/Blog Image/IS Blog Image.jpg",
    imageWidth: 2068,
    featured: true,
    body: [
      {
        heading: null,
        paragraphs: [
          {
            en: "“Immersive Sustainability” is a term and conceptual framework developed by Sakayong Pattanavekin. It represents a holistic approach to sustainability that integrates advanced technologies and systems—such as the Internet of Things (IoT), Artificial Intelligence (AI), and data analytics—to provide real-time environmental insights and engage individuals and organizations in sustainable practices. The concept emphasizes the seamless connection between people and their surroundings—whether within built environments or natural ecosystems—by embedding sustainability into everyday actions, experiences, and decision-making.",
            th: "“Immersive Sustainability” เป็นคำและกรอบแนวคิดที่พัฒนาโดย Sakayong Pattanavekin แสดงถึงแนวทางแบบองค์รวมด้านความยั่งยืนที่ผสานเทคโนโลยีและระบบขั้นสูง เช่น Internet of Things (IoT) ปัญญาประดิษฐ์ (AI) และการวิเคราะห์ข้อมูล เพื่อให้ข้อมูลเชิงลึกด้านสิ่งแวดล้อมแบบเรียลไทม์ และดึงบุคคลและองค์กรเข้ามามีส่วนร่วมในแนวปฏิบัติที่ยั่งยืน แนวคิดนี้เน้นการเชื่อมโยงอย่างไร้รอยต่อระหว่างผู้คนกับสภาพแวดล้อมรอบตัว ไม่ว่าจะเป็นอาคารหรือระบบนิเวศทางธรรมชาติ ด้วยการฝังความยั่งยืนเข้าไปในการกระทำ ประสบการณ์ และการตัดสินใจในชีวิตประจำวัน"
          },
          {
            en: "Immersive Sustainability also embodies an innovative approach that combines IoT, Smart Building technologies, AI, and Blockchain to enable real-time digital monitoring, reporting, and verification (digital MRV) of greenhouse gas (GHG) emissions. This framework facilitates the passive and seamless tracking of emissions data by leveraging building characteristic data and smart solutions, attributing emissions to specific activities—such as events—while engaging participants with opportunities to offset their carbon footprint.",
            th: "Immersive Sustainability ยังเป็นแนวทางเชิงนวัตกรรมที่ผสาน IoT เทคโนโลยีอาคารอัจฉริยะ AI และบล็อกเชน เพื่อให้เกิดการติดตาม รายงาน และทวนสอบก๊าซเรือนกระจกแบบดิจิทัล (digital MRV) ได้แบบเรียลไทม์ กรอบการทำงานนี้ช่วยให้ติดตามข้อมูลการปล่อยก๊าซได้อย่างต่อเนื่องและไร้รอยต่อ โดยอาศัยข้อมูลคุณลักษณะของอาคารและโซลูชันอัจฉริยะ พร้อมระบุการปล่อยก๊าซให้กับกิจกรรมเฉพาะ เช่น งานอีเวนต์ และเปิดโอกาสให้ผู้เข้าร่วมชดเชยคาร์บอนฟุตพริ้นท์ของตนเอง"
          }
        ]
      },
      {
        heading: { en: "Definition and framework", th: "นิยามและกรอบแนวคิด" },
        paragraphs: [
          {
            en: "Immersive Sustainability emphasizes the integration of building-level and/or environmental-level sustainability with human activities by utilizing real-time data from the building's infrastructure and/or environmental infrastructure. The concept harnesses the unique characteristics of each building and/or environment—such as energy consumption patterns, environmental controls, and occupancy levels—to offer an automated digital MRV system. Through this system, emissions data for every activity within the building or environment are passively monitored and seamlessly reported, delivering unparalleled transparency and accuracy in sustainability efforts.",
            th: "Immersive Sustainability เน้นการผสานความยั่งยืนระดับอาคารและ/หรือระดับสิ่งแวดล้อมเข้ากับกิจกรรมของมนุษย์ โดยใช้ข้อมูลแบบเรียลไทม์จากโครงสร้างพื้นฐานของอาคารและ/หรือสิ่งแวดล้อม แนวคิดนี้ใช้ประโยชน์จากคุณลักษณะเฉพาะของแต่ละอาคารและ/หรือสภาพแวดล้อม เช่น รูปแบบการใช้พลังงาน ระบบควบคุมสภาพแวดล้อม และระดับการเข้าใช้พื้นที่ เพื่อสร้างระบบ digital MRV อัตโนมัติ ผ่านระบบนี้ ข้อมูลการปล่อยก๊าซของทุกกิจกรรมภายในอาคารหรือสภาพแวดล้อมจะถูกติดตามและรายงานอย่างต่อเนื่อง มอบความโปร่งใสและความแม่นยำที่เหนือกว่าในการดำเนินงานด้านความยั่งยืน"
          }
        ]
      },
      {
        heading: { en: "The two goals", th: "เป้าหมายสองประการ" },
        paragraphs: [],
        list: [
          {
            en: "Building-Centric and/or Environmental-Centric Sustainability: By leveraging smart systems and the unique characteristics of buildings and/or environments, Immersive Sustainability ensures that the sustainability potential of these spaces is fully realized. Smart technologies optimize energy usage, control emissions, and provide real-time data that is integrated into the MRV process.",
            th: "ความยั่งยืนที่มีอาคารและ/หรือสิ่งแวดล้อมเป็นศูนย์กลาง: ด้วยการใช้ระบบอัจฉริยะและคุณลักษณะเฉพาะของอาคารและ/หรือสภาพแวดล้อม Immersive Sustainability ทำให้ศักยภาพด้านความยั่งยืนของพื้นที่เหล่านี้ถูกใช้อย่างเต็มที่ เทคโนโลยีอัจฉริยะช่วยปรับการใช้พลังงานให้เหมาะสม ควบคุมการปล่อยก๊าซ และให้ข้อมูลแบบเรียลไทม์ที่ผสานเข้ากับกระบวนการ MRV"
          },
          {
            en: "Human Engagement in Sustainability: Immersive Sustainability connects building or environmental performance data with individual activities, offering participants real-time insights into their carbon footprint. By making sustainability an integral and visible part of everyday actions, it fosters behavior changes, supports personal accountability, and offers options for individuals and organizations to directly offset their emissions.",
            th: "การมีส่วนร่วมของมนุษย์ในความยั่งยืน: Immersive Sustainability เชื่อมข้อมูลสมรรถนะของอาคารหรือสิ่งแวดล้อมเข้ากับกิจกรรมของแต่ละบุคคล มอบข้อมูลเชิงลึกแบบเรียลไทม์เกี่ยวกับคาร์บอนฟุตพริ้นท์ของผู้เข้าร่วม การทำให้ความยั่งยืนเป็นส่วนหนึ่งที่มองเห็นได้ในชีวิตประจำวันช่วยกระตุ้นการเปลี่ยนพฤติกรรม สนับสนุนความรับผิดชอบส่วนบุคคล และเปิดทางเลือกให้บุคคลและองค์กรชดเชยการปล่อยก๊าซได้โดยตรง"
          }
        ]
      },
      {
        heading: { en: "Technological integration", th: "การผสานเทคโนโลยี" },
        paragraphs: [],
        list: [
          {
            en: "IoT (Internet of Things): IoT sensors collect data from various building or environmental components, such as energy consumption, HVAC systems, and environmental controls. This real-time data forms the foundation of the automated MRV system, capturing how the building or environment functions during specific activities.",
            th: "IoT (Internet of Things): เซ็นเซอร์ IoT เก็บข้อมูลจากส่วนประกอบต่าง ๆ ของอาคารหรือสิ่งแวดล้อม เช่น การใช้พลังงาน ระบบ HVAC และระบบควบคุมสภาพแวดล้อม ข้อมูลแบบเรียลไทม์นี้เป็นรากฐานของระบบ MRV อัตโนมัติ ซึ่งบันทึกว่าอาคารหรือสภาพแวดล้อมทำงานอย่างไรระหว่างกิจกรรมนั้น ๆ"
          },
          {
            en: "Smart Building Systems: These systems manage and process the data collected by IoT devices. Using advanced algorithms, they optimize building performance, reduce energy consumption, and control emissions, while providing detailed, activity-specific emissions data.",
            th: "ระบบอาคารอัจฉริยะ: ระบบเหล่านี้จัดการและประมวลผลข้อมูลที่เก็บโดยอุปกรณ์ IoT ด้วยอัลกอริทึมขั้นสูง ช่วยปรับสมรรถนะอาคารให้เหมาะสม ลดการใช้พลังงาน และควบคุมการปล่อยก๊าซ พร้อมให้ข้อมูลการปล่อยก๊าซแยกตามกิจกรรมอย่างละเอียด"
          },
          {
            en: "AI Algorithms: AI analyzes the data to attribute emissions to individual activities in alignment with global standards such as the International Performance Measurement and Verification Protocol (IPMVP). This analysis generates actionable insights to reduce carbon footprints and improve future events or building usage.",
            th: "อัลกอริทึม AI: AI วิเคราะห์ข้อมูลเพื่อระบุการปล่อยก๊าซให้กับกิจกรรมแต่ละรายการ โดยสอดคล้องกับมาตรฐานสากล เช่น International Performance Measurement and Verification Protocol (IPMVP) การวิเคราะห์นี้สร้างข้อมูลเชิงลึกที่นำไปปฏิบัติได้ เพื่อลดคาร์บอนฟุตพริ้นท์และปรับปรุงงานหรือการใช้อาคารในอนาคต"
          },
          {
            en: "Blockchain Technology: Blockchain ensures that all data captured, processed, and reported within the Immersive Sustainability framework is secure, transparent, and verifiable. This technology guarantees the integrity and authenticity of the MRV process, ensuring compliance with both local and international sustainability standards.",
            th: "เทคโนโลยีบล็อกเชน: บล็อกเชนทำให้ข้อมูลทั้งหมดที่ถูกเก็บ ประมวลผล และรายงานภายในกรอบ Immersive Sustainability มีความปลอดภัย โปร่งใส และตรวจสอบได้ เทคโนโลยีนี้รับประกันความถูกต้องและความน่าเชื่อถือของกระบวนการ MRV พร้อมสอดคล้องกับมาตรฐานความยั่งยืนทั้งในประเทศและระดับสากล"
          }
        ]
      },
      {
        heading: { en: "Digital MRV for every activity", th: "ระบบ MRV ดิจิทัลสำหรับทุกกิจกรรม" },
        paragraphs: [
          {
            en: "A key innovation of Immersive Sustainability is its seamless, passive digital MRV system, which operates continuously within buildings or environments. By utilizing characteristic data—such as energy systems, environmental control settings, and activity occupancy—the system can automatically monitor and report GHG emissions generated by each event or activity. This automated process eliminates the need for manual intervention, providing stakeholders with accurate and real-time data on their environmental impact.",
            th: "นวัตกรรมสำคัญของ Immersive Sustainability คือระบบ digital MRV ที่ทำงานอย่างต่อเนื่องและไร้รอยต่อภายในอาคารหรือสภาพแวดล้อม ด้วยการใช้ข้อมูลคุณลักษณะ เช่น ระบบพลังงาน การตั้งค่าควบคุมสภาพแวดล้อม และจำนวนผู้เข้าใช้พื้นที่ ระบบสามารถติดตามและรายงานการปล่อยก๊าซเรือนกระจกของแต่ละงานหรือกิจกรรมได้โดยอัตโนมัติ กระบวนการนี้ขจัดความจำเป็นในการดำเนินการด้วยมือ และมอบข้อมูลที่แม่นยำแบบเรียลไทม์แก่ผู้มีส่วนได้ส่วนเสีย"
          },
          {
            en: "Moreover, the system's digital MRV capabilities extend beyond large events to everyday actions, such as meeting room usage, energy consumption by devices, or HVAC operations during regular hours. The data collected supports informed decision-making and offers opportunities for individuals and organizations to mitigate their environmental impact by engaging in carbon offset initiatives or adopting more sustainable practices.",
            th: "ยิ่งไปกว่านั้น ความสามารถ digital MRV ของระบบยังครอบคลุมมากกว่างานขนาดใหญ่ ไปถึงกิจกรรมประจำวัน เช่น การใช้ห้องประชุม การใช้พลังงานของอุปกรณ์ หรือการทำงานของระบบ HVAC ในเวลาปกติ ข้อมูลที่เก็บได้สนับสนุนการตัดสินใจอย่างมีข้อมูล และเปิดโอกาสให้บุคคลและองค์กรลดผลกระทบต่อสิ่งแวดล้อม ผ่านโครงการชดเชยคาร์บอนหรือการปรับใช้แนวปฏิบัติที่ยั่งยืนยิ่งขึ้น"
          }
        ]
      },
      {
        heading: {
          en: "Bridging building potential and human engagement",
          th: "เชื่อมศักยภาพของอาคารเข้ากับการมีส่วนร่วมของผู้คน"
        },
        paragraphs: [
          {
            en: "The concept of Immersive Sustainability fundamentally seeks to unite the sustainability potential of the built environment with the actions of the people who occupy it. By offering seamless digital MRV linked directly to human activities, the concept fosters a deeper connection between individuals and their spaces, driving collective efforts toward achieving Net Zero emissions. The transparent, accessible nature of the data empowers individuals to understand and address their environmental impact in real time, encouraging broader participation in sustainability initiatives.",
            th: "แนวคิด Immersive Sustainability มุ่งเชื่อมศักยภาพด้านความยั่งยืนของสภาพแวดล้อมที่สร้างขึ้น เข้ากับการกระทำของผู้คนที่ใช้งานพื้นที่นั้น ด้วยการมอบ digital MRV ที่เชื่อมโยงโดยตรงกับกิจกรรมของมนุษย์ แนวคิดนี้สร้างความสัมพันธ์ที่ลึกซึ้งขึ้นระหว่างบุคคลกับพื้นที่ของตน และขับเคลื่อนความพยายามร่วมกันสู่การปล่อยก๊าซสุทธิเป็นศูนย์ ความโปร่งใสและการเข้าถึงข้อมูลได้ง่ายช่วยให้ผู้คนเข้าใจและจัดการผลกระทบต่อสิ่งแวดล้อมของตนแบบเรียลไทม์ และกระตุ้นการมีส่วนร่วมในโครงการความยั่งยืนในวงกว้าง"
          }
        ]
      }
    ],
    notice: {
      en: "The term “Immersive Sustainability”, along with its associated technological and conceptual framework—including the use of building characteristics and smart solutions for digital MRV of activities—is the intellectual property of Sakayong Pattanavekin. Unauthorized reproduction, adaptation, or application of this concept in any form without prior written consent is strictly prohibited. © 2024 Sakayong Pattanavekin. All rights reserved.",
      th: "คำว่า “Immersive Sustainability” พร้อมกรอบแนวคิดและเทคโนโลยีที่เกี่ยวข้อง รวมถึงการใช้คุณลักษณะของอาคารและโซลูชันอัจฉริยะสำหรับ digital MRV ของกิจกรรม เป็นทรัพย์สินทางปัญญาของ Sakayong Pattanavekin ห้ามทำซ้ำ ดัดแปลง หรือนำแนวคิดนี้ไปใช้ในรูปแบบใด ๆ โดยไม่ได้รับความยินยอมเป็นลายลักษณ์อักษรล่วงหน้า © 2024 Sakayong Pattanavekin สงวนลิขสิทธิ์"
    }
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
    datePublished: null,
    image: "/Blog Image/OC Blog Image.jpg",
    imageWidth: 1200,
    featured: false,
    body: [
      {
        heading: { en: "Overview", th: "ภาพรวม" },
        paragraphs: [
          {
            en: "One-Click represents a collaborative platform created with Chulalongkorn University, the Office of SME Promotion (สสว.), and major financial institutions. The system incorporates VEKIN's advanced AI technology to help Thailand's small and medium enterprises consolidate fragmented data and automate greenhouse gas reporting, enabling carbon footprint tracking and access to green financing.",
            th: "One-Click คือแพลตฟอร์มความร่วมมือที่สร้างขึ้นร่วมกับจุฬาลงกรณ์มหาวิทยาลัย สำนักงานส่งเสริมวิสาหกิจขนาดกลางและขนาดย่อม (สสว.) และสถาบันการเงินชั้นนำ ระบบนี้ใช้เทคโนโลยี AI ขั้นสูงของ VEKIN เพื่อช่วยให้วิสาหกิจขนาดกลางและขนาดย่อมของไทยรวบรวมข้อมูลที่กระจัดกระจาย และจัดทำรายงานก๊าซเรือนกระจกโดยอัตโนมัติ ทำให้ติดตามคาร์บอนฟุตพริ้นท์และเข้าถึงแหล่งเงินทุนสีเขียวได้"
          }
        ]
      },
      {
        heading: { en: "The challenge", th: "โจทย์ที่ต้องแก้" },
        paragraphs: [
          {
            en: "Many Thai SMEs encounter difficulties with sustainability compliance. Existing data is often scattered across multiple digital systems, complicating emissions baseline identification. Banks increasingly evaluate environmental performance during loan assessments, yet smaller enterprises lack accessible tools to generate credible GHG documentation.",
            th: "เอสเอ็มอีไทยจำนวนมากเผชิญความยากลำบากในการปฏิบัติตามข้อกำหนดด้านความยั่งยืน ข้อมูลที่มีอยู่มักกระจัดกระจายอยู่ในหลายระบบดิจิทัล ทำให้ยากต่อการกำหนดค่าฐานการปล่อยก๊าซ ขณะที่ธนาคารประเมินผลการดำเนินงานด้านสิ่งแวดล้อมในการพิจารณาสินเชื่อมากขึ้น แต่ธุรกิจขนาดเล็กยังขาดเครื่องมือที่เข้าถึงได้ในการจัดทำเอกสารก๊าซเรือนกระจกที่น่าเชื่อถือ"
          }
        ]
      },
      {
        heading: { en: "The solution", th: "แนวทางแก้ไข" },
        paragraphs: [
          {
            en: "The platform provides a streamlined, AI-driven system for carbon accounting, utilizing deep tech innovation to automatically collect, verify, and calculate operational data. This reduces the time and expense of environmental assessments.",
            th: "แพลตฟอร์มนี้มอบระบบบัญชีคาร์บอนที่ขับเคลื่อนด้วย AI และใช้งานง่าย โดยใช้นวัตกรรม deep tech ในการเก็บ ตรวจสอบ และคำนวณข้อมูลการดำเนินงานโดยอัตโนมัติ ช่วยลดทั้งเวลาและค่าใช้จ่ายในการประเมินด้านสิ่งแวดล้อม"
          }
        ]
      },
      {
        heading: { en: "Key features", th: "คุณสมบัติหลัก" },
        paragraphs: [],
        list: [
          { en: "AI-driven carbon reporting.", th: "การรายงานคาร์บอนที่ขับเคลื่อนด้วย AI" },
          {
            en: "Automated data integration with cybersecurity protections.",
            th: "การผสานข้อมูลอัตโนมัติพร้อมการป้องกันด้านความมั่นคงปลอดภัยไซเบอร์"
          },
          {
            en: "Green finance accessibility through partner banks.",
            th: "การเข้าถึงแหล่งเงินทุนสีเขียวผ่านธนาคารพันธมิตร"
          },
          {
            en: "A scalable, low-cost interface designed under the One-Click concept.",
            th: "อินเทอร์เฟซที่ขยายผลได้และมีต้นทุนต่ำ ออกแบบภายใต้แนวคิด One-Click"
          }
        ]
      },
      {
        heading: { en: "Outcomes and impact", th: "ผลลัพธ์และผลกระทบ" },
        paragraphs: [
          {
            en: "Implementation enables rapid carbon footprint verification, enhances competitive positioning, and contributes to Thailand's net-zero emissions objectives.",
            th: "การนำไปใช้ช่วยให้ทวนสอบคาร์บอนฟุตพริ้นท์ได้อย่างรวดเร็ว เสริมความสามารถในการแข่งขัน และสนับสนุนเป้าหมายการปล่อยก๊าซสุทธิเป็นศูนย์ของประเทศไทย"
          }
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
    datePublished: null,
    image: "/Blog Image/Carbon 4 All Blog Image.jpg",
    imageWidth: 597,
    featured: false,
    body: [
      {
        heading: null,
        paragraphs: [
          {
            en: "Businesses working in Thailand's conferences, incentive and business events will have the chance to trial a new carbon-trading platform being launched by an alliance of five organisations.",
            th: "ธุรกิจในอุตสาหกรรมการประชุม การท่องเที่ยวเพื่อเป็นรางวัล และงานแสดงสินค้าของไทย จะมีโอกาสทดลองใช้แพลตฟอร์มซื้อขายคาร์บอนใหม่ที่เปิดตัวโดยพันธมิตรห้าองค์กร"
          },
          {
            en: "The ‘Carbon Neutrality 4 All’ efforts announced by Thailand Convention and Exhibition Bureau (TCEB) are aimed at promoting sustainable events, with local communities also expected to benefit. Individual travellers have already trialled the carbon-trading platform, with MICE entrepreneurs expected to test the platform by the end of the year. The platform is designed to trade small- to medium-sized batches of carbon offsets.",
            th: "โครงการ ‘Carbon Neutrality 4 All’ ที่ประกาศโดยสำนักงานส่งเสริมการจัดประชุมและนิทรรศการ (TCEB) มุ่งส่งเสริมงานอีเวนต์ที่ยั่งยืน โดยคาดว่าชุมชนท้องถิ่นจะได้รับประโยชน์ด้วย นักเดินทางรายบุคคลได้ทดลองใช้แพลตฟอร์มนี้แล้ว และคาดว่าผู้ประกอบการไมซ์จะได้ทดสอบภายในสิ้นปี แพลตฟอร์มนี้ออกแบบมาเพื่อซื้อขายคาร์บอนออฟเซ็ตในปริมาณขนาดเล็กถึงขนาดกลาง"
          }
        ]
      },
      {
        heading: { en: "The partnership", th: "ความร่วมมือ" },
        paragraphs: [
          {
            en: "The partnership includes five organisations: the Thai Chamber of Commerce and Board of Trade of Thailand as project owner, The Central Group as funder, the Ministry of Interior providing carbon credits, and TCEB together with the Tourism Authority of Thailand as promoters. They signed an MOU during the soft launch in Bangkok.",
            th: "ความร่วมมือนี้ประกอบด้วยห้าองค์กร ได้แก่ หอการค้าไทยและสภาหอการค้าแห่งประเทศไทยในฐานะเจ้าของโครงการ กลุ่มเซ็นทรัลในฐานะผู้สนับสนุนเงินทุน กระทรวงมหาดไทยในฐานะผู้จัดหาคาร์บอนเครดิต และ TCEB ร่วมกับการท่องเที่ยวแห่งประเทศไทยในฐานะผู้ส่งเสริม โดยได้ลงนามบันทึกความเข้าใจในงานเปิดตัวที่กรุงเทพฯ"
          },
          {
            en: "Carbon Neutrality 4 All is designed to meet the needs of entrepreneurs wishing to source premium quality carbon credit from carbon dioxide and methane reduction programmes.",
            th: "Carbon Neutrality 4 All ออกแบบมาเพื่อตอบโจทย์ผู้ประกอบการที่ต้องการจัดหาคาร์บอนเครดิตคุณภาพสูงจากโครงการลดก๊าซคาร์บอนไดออกไซด์และมีเทน"
          }
        ]
      },
      {
        heading: { en: "How it works", th: "การทำงาน" },
        paragraphs: [
          {
            en: "The platform includes a CERO application for carbon footprint calculation, AI-powered data collection, and a Green Activities feature for event attendees to monitor their carbon impact from travel and food. The platform is developed by Vekin (Thailand), the government-sanctioned body specialising in engineering decarbonisation and carbon tokenisation.",
            th: "แพลตฟอร์มประกอบด้วยแอปพลิเคชัน CERO สำหรับคำนวณคาร์บอนฟุตพริ้นท์ การเก็บข้อมูลด้วย AI และฟีเจอร์ Green Activities ให้ผู้เข้าร่วมงานติดตามผลกระทบคาร์บอนจากการเดินทางและอาหาร แพลตฟอร์มนี้พัฒนาโดย Vekin (Thailand) หน่วยงานที่ได้รับการรับรองจากภาครัฐ ซึ่งเชี่ยวชาญด้านวิศวกรรมการลดคาร์บอนและการแปลงคาร์บอนเป็นโทเคน"
          },
          {
            en: "When event organisers offset emissions, revenue benefits local communities managing waste projects, with accumulated points usable for retail discounts. TCEB President Chiruit Isarangkun Na Ayuthaya stated the collaboration aligns with TCEB's ‘Partnership for Business Success’ and ‘Go Sustainability’ strategies, positioning the Thai MICE industry as environmentally responsible while generating positive economic and social impacts.",
            th: "เมื่อผู้จัดงานชดเชยการปล่อยก๊าซ รายได้จะเป็นประโยชน์ต่อชุมชนท้องถิ่นที่บริหารโครงการจัดการขยะ โดยคะแนนที่สะสมสามารถใช้เป็นส่วนลดในร้านค้าปลีกได้ นายจิรุตถ์ อิศรางกูร ณ อยุธยา ผู้อำนวยการ TCEB กล่าวว่าความร่วมมือนี้สอดคล้องกับกลยุทธ์ ‘Partnership for Business Success’ และ ‘Go Sustainability’ ของ TCEB ซึ่งวางตำแหน่งอุตสาหกรรมไมซ์ไทยให้เป็นมิตรต่อสิ่งแวดล้อม พร้อมสร้างผลกระทบเชิงบวกทางเศรษฐกิจและสังคม"
          }
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
    datePublished: null,
    image: "/Blog Image/Cero Carbon Wallet Image.jpg",
    imageWidth: 275,
    featured: false,
    body: [
      {
        heading: null,
        paragraphs: [
          {
            en: "The Mall Group, the Thailand Greenhouse Gas Management Organization, Vekin and other partners collaborated to promote carbon-labelled products. The initiative ran from 27 March to 30 June 2023 at Quartier Avenue and Gourmet Market locations, and was honoured by Minister Varawut Silpa-archa.",
            th: "เดอะมอลล์ กรุ๊ป องค์การบริหารจัดการก๊าซเรือนกระจก Vekin และพันธมิตรอื่น ๆ ร่วมมือกันส่งเสริมสินค้าที่ติดฉลากคาร์บอน โครงการนี้จัดขึ้นระหว่างวันที่ 27 มีนาคม ถึง 30 มิถุนายน 2566 ที่ Quartier Avenue และ Gourmet Market โดยได้รับเกียรติจากนายวราวุธ ศิลปอาชา รัฐมนตรี"
          }
        ]
      },
      {
        heading: { en: "Carbon labelling", th: "ฉลากคาร์บอน" },
        paragraphs: [],
        list: [
          {
            en: "Carbon Footprint Reduction Label (Climate Change Mitigation), for products reducing emissions by at least 2% CO2e.",
            th: "ฉลากลดคาร์บอนฟุตพริ้นท์ (Climate Change Mitigation) สำหรับสินค้าที่ลดการปล่อยก๊าซได้อย่างน้อย 2% CO2e"
          },
          {
            en: "Product lifecycle emissions labelling, helping consumers make informed choices.",
            th: "ฉลากแสดงการปล่อยก๊าซตลอดวัฏจักรชีวิตของผลิตภัณฑ์ ช่วยให้ผู้บริโภคเลือกซื้อได้อย่างมีข้อมูล"
          }
        ]
      }
    ],
    notice: null
  }
];

export function getPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

/**
 * Word count across a post's body, used for the "x min read" badge.
 * Counted on the English text: Thai is written without spaces between words,
 * so splitting on whitespace would undercount it badly.
 */
export function readingMinutes(post: BlogPost): number {
  const words = post.body.reduce((total, section) => {
    const prose = section.paragraphs.map((p) => p.en).join(" ");
    const listed = (section.list ?? []).map((l) => l.en).join(" ");
    return total + `${prose} ${listed}`.trim().split(/\s+/).filter(Boolean).length;
  }, 0);

  return Math.max(1, Math.round(words / 200));
}

/** Formats an ISO date for display; returns null when the post has no date. */
export function formatPostDate(post: BlogPost, language: "th" | "en"): string | null {
  if (!post.datePublished) return null;

  return new Intl.DateTimeFormat(language === "th" ? "th-TH" : "en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC"
  }).format(new Date(`${post.datePublished}T00:00:00Z`));
}

export const blogCategories: readonly { key: string; label: Localized }[] = [
  { key: "all", label: { en: "All stories", th: "ทั้งหมด" } },
  ...Array.from(new Map(blogPosts.map((p) => [p.categoryKey, p])).values()).map((p) => ({
    key: p.categoryKey,
    label: p.category
  }))
];
