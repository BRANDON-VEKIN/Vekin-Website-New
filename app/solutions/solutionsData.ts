export type Localized = { th: string; en: string };

export type Feature = {
  title: Localized;
  body: Localized;
};

export type Solution = {
  slug: string;
  name: string;
  fullName: Localized;
  icon: string;
  accent: string; // hex accent used for glows/badges
  tagline: Localized;
  description: Localized;
  features: Feature[];
  steps?: Localized[];
  highlights?: Localized[];
  benefits?: Localized[];
};

const iconBase = "/VEKIN Resource all Product/Vekin Solutions";

export const solutions: Solution[] = [
  /* ------------------------------------------------------------------ */
  {
    slug: "demp",
    name: "DEMP",
    fullName: {
      th: "แพลตฟอร์มบริหารจัดการพลังงานแบบไดนามิก",
      en: "Dynamic Energy Management Platform",
    },
    icon: `${iconBase}/DEMP.png`,
    accent: "#3BB97B",
    tagline: {
      th: "เพิ่มประสิทธิภาพการใช้พลังงานอย่างต่อเนื่อง ลดการปล่อยคาร์บอนในระดับปฏิบัติการ และเชื่อมโยงการใช้ทรัพยากรเข้ากับเป้าหมาย Net-Zero ของคุณ",
      en: "Continuously optimize energy consumption, reducing emissions at the operational level and aligning ongoing resource use with your net-zero commitments.",
    },
    description: {
      th: "ที่ VEKIN เราเชื่อว่าความก้าวหน้าด้านความยั่งยืนที่จับต้องได้เริ่มต้นจากการบริหารพลังงานที่โปร่งใสและขับเคลื่อนด้วยข้อมูล DEMP ไม่ใช่เพียงเครื่องมือทางเทคนิค แต่เป็นพันธมิตรเชิงกลยุทธ์ที่รวมข้อมูลพลังงานทั้งหมดของคุณไว้ในศูนย์กลางเดียว เพื่อนำทางสู่เป้าหมาย Net-Zero",
      en: "At VEKIN, we recognize that tangible progress toward sustainability begins with transparent, data-driven energy management. DEMP goes beyond technical capabilities—it's a strategic ally that integrates all your energy data into a single, streamlined hub to help you navigate the path to net-zero.",
    },
    features: [
      {
        title: { th: "มองเห็นแบบเรียลไทม์", en: "Real-Time Visibility" },
        body: {
          th: "เห็นการใช้พลังงานขณะเกิดขึ้นจริงในทุกไซต์และทุกระบบ ทำให้จุดที่ไม่มีประสิทธิภาพปรากฏขึ้นทันที",
          en: "See energy consumption as it happens across every site and system, so inefficiencies surface instantly.",
        },
      },
      {
        title: { th: "เชื่อมต่อได้อย่างไร้รอยต่อ", en: "Seamless Integration" },
        body: {
          th: "รวมข้อมูลจากระบบที่กระจัดกระจายให้อยู่ในศูนย์กลางเดียว ไม่ต้องตามหาข้อมูลหลายที่อีกต่อไป",
          en: "Unify data from separate systems into one streamlined hub—no more scattered information.",
        },
      },
      {
        title: { th: "รับประกันความถูกต้องของข้อมูล", en: "Guaranteed Data Integrity" },
        body: {
          th: "บันทึกที่เชื่อถือได้และตรวจสอบได้ เป็นรากฐานของทุกข้อมูลเชิงลึกและทุกการตัดสินใจ",
          en: "Trustworthy, verifiable records underpin every insight and decision.",
        },
      },
      {
        title: { th: "คำแนะนำที่นำไปปฏิบัติได้", en: "Actionable Guidance" },
        body: {
          th: "เปลี่ยนการวิเคราะห์ที่ซับซ้อนให้เป็นขั้นตอนที่ทำได้จริง สอดคล้องกับเป้าหมายเชิงกลยุทธ์ของคุณ",
          en: "Translate complex analytics into practical steps aligned with your strategic objectives.",
        },
      },
      {
        title: { th: "ปรับตัวและขยายผลได้", en: "Adapt and Scale" },
        body: {
          th: "เติบโตไปพร้อมกับการดำเนินงานของคุณ ตั้งแต่โรงงานเดียวไปจนถึงเครือข่ายระดับโลก",
          en: "Grow with your operations, from a single facility to a global footprint.",
        },
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "dap",
    name: "DAP",
    fullName: {
      th: "แพลตฟอร์มลดคาร์บอนและการรับรองมาตรฐาน",
      en: "Decarbonization and Accreditation Platform",
    },
    icon: `${iconBase}/DAP.png`,
    accent: "#00b59f",
    tagline: {
      th: "เปลี่ยนข้อมูลเชิงลึกให้เป็นการลงมือทำ ด้วยการบริหารโครงการลดคาร์บอน ทวนสอบผลลัพธ์ และได้รับการรับรองมาตรฐานที่เป็นที่ยอมรับ",
      en: "Translate insights into action by managing decarbonization projects, verifying results, and securing recognized certifications.",
    },
    description: {
      th: "DAP ช่วยให้องค์กรก้าวผ่านมาตรฐานความยั่งยืนและบรรลุเป้าหมาย Net-Zero โดยผสานการวิเคราะห์ข้อมูล กระบวนการทวนสอบที่เข้มงวด และกรอบการรับรองที่ได้รับการยอมรับ เพื่อรายงานความก้าวหน้าด้านสิ่งแวดล้อมอย่างโปร่งใส",
      en: "DAP helps organizations navigate sustainability standards and achieve net-zero targets, integrating data analytics, rigorous verification protocols, and recognized accreditation frameworks to report environmental progress transparently.",
    },
    features: [
      {
        title: { th: "ปรับข้อมูลให้สอดคล้องมาตรฐานสากล", en: "Harmonize Emissions Data" },
        body: {
          th: "เทียบข้อมูลการปล่อยคาร์บอนกับเกณฑ์มาตรฐานระดับโลกได้อย่างสอดคล้อง",
          en: "Align emissions data with global benchmarks for consistent, comparable reporting.",
        },
      },
      {
        title: { th: "การทวนสอบโดยอิสระ", en: "Independent Verification" },
        body: {
          th: "ผลลัพธ์ที่ได้รับการรับรองจากบุคคลที่สาม สร้างความน่าเชื่อถือให้กับทุกข้อมูล",
          en: "Credible, third-party assured results that stand up to scrutiny.",
        },
      },
      {
        title: { th: "การวิเคราะห์ด้วย AI", en: "AI-Driven Analytics" },
        body: {
          th: "รวมศูนย์การติดตามการปล่อยคาร์บอน พร้อมข้อมูลเชิงลึกที่ขับเคลื่อนด้วย AI",
          en: "Centralized emissions tracking powered by AI-driven insights.",
        },
      },
      {
        title: { th: "ทวนสอบด้วยบล็อกเชน", en: "Blockchain-Enabled Verification" },
        body: {
          th: "รับรองความถูกต้องแท้จริงของข้อมูลด้านสิ่งแวดล้อมด้วยเทคโนโลยีบล็อกเชน",
          en: "Ensure the authenticity of environmental claims with blockchain verification.",
        },
      },
      {
        title: { th: "พร้อมรับมือกฎระเบียบ", en: "Regulation-Ready" },
        body: {
          th: "ปรับตัวเข้ากับมาตรฐานและกฎระเบียบที่เปลี่ยนแปลงอยู่เสมอ",
          en: "Adapt to evolving standards and regulations with confidence.",
        },
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "cero",
    name: "CERO",
    fullName: {
      th: "กระเป๋าคาร์บอนส่วนบุคคล CERO",
      en: "CERO Personal Carbon Wallet",
    },
    icon: `${iconBase}/CERO.png`,
    accent: "#2dd4bf",
    tagline: {
      th: "ยกระดับการบริหารสินทรัพย์คาร์บอน ด้วยการจัดเก็บ ซื้อขาย และควบคุมคาร์บอนเครดิตในกระเป๋าดิจิทัลที่ใช้งานง่ายและโปร่งใส",
      en: "Elevate your carbon asset management by securely storing, trading, and controlling carbon credits within a user-friendly digital wallet built for transparency.",
    },
    description: {
      th: "CERO คือกระเป๋าคาร์บอนที่ขับเคลื่อนด้วย Web 3.0 ของ VEKIN ที่ทำให้ความยั่งยืนเป็นเรื่องของทุกคน ระบบจะรับรู้คาร์บอนฟุตพรินต์ในชีวิตประจำวันโดยอัตโนมัติ ทั้งการเดินทาง การจับจ่าย และการใช้พลังงานในบ้าน พร้อมเปลี่ยนพฤติกรรมที่เป็นมิตรกับสิ่งแวดล้อมให้กลายเป็นคาร์บอนเครดิตที่สะสมได้",
      en: "CERO is VEKIN's Web 3.0-enabled carbon wallet that democratizes sustainability at the personal level. It automatically recognizes everyday carbon footprints from commuting, shopping, and home energy use—aggregating emissions in real time and turning eco-friendly actions into collectible carbon credits.",
    },
    features: [
      {
        title: { th: "ติดตามคาร์บอนได้ง่ายดาย", en: "Effortless Carbon Tracking" },
        body: {
          th: "ระบบตรวจจับแบบพาสซีฟจะคำนวณการปล่อยคาร์บอนจากกิจวัตรประจำวันของคุณโดยอัตโนมัติ",
          en: "Passive monitoring automatically detects and calculates emissions generated by daily routines.",
        },
      },
      {
        title: { th: "เทคโนโลยี Web 3.0", en: "Web 3.0 Technology" },
        body: {
          th: "สร้างบนโครงสร้างแบบกระจายศูนย์ รับรองบันทึกคาร์บอนเครดิตที่ปลอดภัย โปร่งใส และแก้ไขไม่ได้",
          en: "Built on decentralized frameworks for secure, transparent, and tamper-proof credit records.",
        },
      },
      {
        title: { th: "รวมเครดิตย่อยไว้ในที่เดียว", en: "Fragmented Credit Collection" },
        body: {
          th: "เปลี่ยนการกระทำเล็ก ๆ ให้เป็นไมโครเครดิตที่รวบรวมไว้ในกระเป๋าเดียว",
          en: "Converts small actions into micro-credits consolidated in one wallet.",
        },
      },
      {
        title: { th: "ชดเชยและแลกเปลี่ยนง่าย", en: "Simple Offsetting & Redemption" },
        body: {
          th: "แลกหรือซื้อขายเครดิตได้ภายในเครือข่ายของ CERO อย่างสะดวก",
          en: "Credits can be redeemed or traded within CERO's network with ease.",
        },
      },
      {
        title: { th: "ความยั่งยืนที่ขับเคลื่อนด้วยชุมชน", en: "Community-Driven Sustainability" },
        body: {
          th: "สร้างความรับผิดชอบร่วมกันผ่านความสำเร็จที่แบ่งปันกันในชุมชน",
          en: "Fosters collective responsibility through shared achievements.",
        },
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "ai-carbon-auditor",
    name: "AI Carbon Auditor",
    fullName: {
      th: "ผู้ตรวจสอบคาร์บอนด้วย AI",
      en: "AI Carbon Auditor",
    },
    icon: `${iconBase}/AI Carbon Auditor.png`,
    accent: "#14b8a6",
    tagline: {
      th: "เปลี่ยนข้อมูลดิบให้เป็นข้อมูลเชิงลึกที่นำไปใช้ได้จริง ด้วยเครื่องมือตรวจสอบที่ขับเคลื่อนด้วย AI ซึ่งชี้จุดที่ลดคาร์บอนได้และเสริมกลยุทธ์ความยั่งยืนของคุณ",
      en: "Transform raw data into actionable insights with AI-driven auditing tools that pinpoint reduction opportunities and strengthen your sustainability strategies.",
    },
    description: {
      th: "AI Carbon Auditor คือแนวทางใหม่ของ Digital MRV (การวัด รายงาน และทวนสอบ) ที่เก็บ วิเคราะห์ และตรวจสอบข้อมูลการปล่อยคาร์บอนตามมาตรฐาน ISO 14065 และ ISO 17029 ได้รับรางวัล Geneva Invention Award 2023 และได้รับการจดสิทธิบัตรในกว่า 30 ประเทศ",
      en: "VEKIN's AI Carbon Auditor is a new approach to digital MRV (Measurement, Reporting, and Verification). It collects, analyzes, and validates emissions data in line with ISO 14065 and ISO 17029—recipient of the Geneva Invention Award 2023 and protected by patents in over 30 countries.",
    },
    highlights: [
      { th: "รางวัล Geneva Invention Award 2023", en: "Geneva Invention Award 2023" },
      { th: "จดสิทธิบัตรใน 30+ ประเทศ", en: "Patented in 30+ countries" },
      { th: "สอดคล้อง ISO 14065 & 17029", en: "ISO 14065 & 17029 aligned" },
    ],
    features: [
      {
        title: { th: "แม่นยำเหนือวิธีการทั่วไป", en: "Precision Beyond Conventional Methods" },
        body: {
          th: "ปรับความละเอียดของตัวชี้วัดให้แม่นยำ สอดคล้องกับมาตรฐาน ISO 14065 และ ISO 17029",
          en: "Refines metrics for accuracy, aligned with ISO 14065 and ISO 17029 standards.",
        },
      },
      {
        title: { th: "ได้รับการยอมรับและคุ้มครองระดับโลก", en: "Globally Recognized & Protected" },
        body: {
          th: "จดสิทธิบัตรในกว่า 30 ประเทศ และได้รับรางวัล Geneva Invention Award 2023",
          en: "Patents in 30+ countries and recipient of the Geneva Invention Award 2023.",
        },
      },
      {
        title: { th: "วิเคราะห์และปรับปรุงแบบเรียลไทม์", en: "Real-Time Analysis & Optimization" },
        body: {
          th: "ประมวลผลข้อมูลต่อเนื่องจากอุปกรณ์ IoT และระบบ ERP เพื่อข้อมูลเชิงลึกทันที",
          en: "Processes continuous data feeds from IoT devices and ERP systems for instant insights.",
        },
      },
      {
        title: { th: "เชื่อมต่อได้อย่างไร้รอยต่อ", en: "Seamless Integration" },
        body: {
          th: "ทำงานร่วมกับระบบ ERP เฉพาะทาง ซัพพลายเชน และระบบอาคารอัตโนมัติ",
          en: "Works with custom ERP solutions, supply chains, and building automation systems.",
        },
      },
      {
        title: { th: "สอดคล้องและพร้อมสู่อนาคต", en: "Compliance & Future-Proofing" },
        body: {
          th: "กรอบ Digital MRV ที่ปรับตัวได้ สอดคล้องกับมาตรฐานใหม่ ๆ ที่กำลังจะมาถึง",
          en: "An adaptive digital MRV framework aligned with emerging standards.",
        },
      },
    ],
    steps: [
      { th: "รับข้อมูล", en: "Data Ingestion" },
      { th: "ประมวลผลด้วย AI", en: "AI Processing" },
      { th: "ทวนสอบและตรวจสอบ", en: "Verification & Validation" },
      { th: "ผลลัพธ์ที่นำไปใช้ได้", en: "Actionable Results" },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "carbon-receipt",
    name: "Carbon Receipt",
    fullName: {
      th: "ใบเสร็จคาร์บอน",
      en: "Carbon Receipt",
    },
    icon: `${iconBase}/Carbon Receipt.png`,
    accent: "#34d399",
    tagline: {
      th: "บันทึกทุกธุรกรรมคาร์บอนเครดิตด้วยหลักฐานที่ตรวจสอบบนบล็อกเชน สร้างการตรวจสอบย้อนกลับได้ และทำให้การรายงานด้านสิ่งแวดล้อมง่ายขึ้น",
      en: "Document every carbon credit transaction through a blockchain-verified record, ensuring traceability and simplifying your environmental reporting obligations.",
    },
    description: {
      th: "Carbon Receipt เก็บและตรวจสอบคาร์บอนฟุตพรินต์ของแต่ละธุรกรรม ทำให้องค์กรสามารถแสดงการติดตามการปล่อยคาร์บอนที่โปร่งใสและสอดคล้องกับ ISO 14064-1 พร้อมข้อมูลที่ตรวจสอบได้แบบเรียลไทม์ ซึ่งเชื่อมโยงกิจกรรมประจำวันเข้ากับเป้าหมายการลดคาร์บอนขององค์กร",
      en: "Carbon Receipt captures and verifies carbon footprints for individual transactions, giving organizations transparent, ISO 14064-1-compliant emission tracking and real-time, verifiable data that connects day-to-day activities with overarching decarbonization goals.",
    },
    features: [
      {
        title: { th: "สอดคล้อง ISO 14064-1", en: "ISO 14064-1 Alignment" },
        body: {
          th: "เชื่อมต่อกับกรอบการบัญชีคาร์บอนขององค์กรได้อย่างราบรื่น เพื่อการตรวจสอบที่ง่ายขึ้น",
          en: "Integrates seamlessly with organizational carbon accounting frameworks for streamlined audits.",
        },
      },
      {
        title: { th: "ความเชื่อมั่นด้วยบล็อกเชน", en: "Blockchain-Backed Trust" },
        body: {
          th: "ใช้เทคโนโลยีบัญชีที่แก้ไขไม่ได้ รับประกันความแท้จริงและความโปร่งใสของทุกใบเสร็จคาร์บอน",
          en: "Uses immutable ledger technology to guarantee the authenticity and transparency of each carbon receipt.",
        },
      },
      {
        title: { th: "เชื่อมต่อใช้งานง่าย", en: "User-Friendly Integration" },
        body: {
          th: "เชื่อมต่อกับระบบ ERP อีคอมเมิร์ซ และกระบวนการเรียกเก็บเงิน พร้อมอัปเดตอัตโนมัติ",
          en: "Plugs into existing ERP systems, e-commerce platforms, and billing processes with automated updates.",
        },
      },
      {
        title: { th: "มองเห็นและตรวจสอบได้", en: "Visibility & Accountability" },
        body: {
          th: "กำหนดค่าคาร์บอนที่วัดได้ให้กับแต่ละธุรกรรม เพื่อชี้จุดที่ลดคาร์บอนได้จริง",
          en: "Assigns measurable carbon values to transactions to pinpoint actionable reduction opportunities.",
        },
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "validate-and-verify-service",
    name: "Validate & Verify",
    fullName: {
      th: "บริการทวนสอบและตรวจสอบ",
      en: "Validate and Verify Service",
    },
    icon: `${iconBase}/Validate and Verify Service.png`,
    accent: "#10b981",
    tagline: {
      th: "เสริมความเชื่อมั่นและความโปร่งใส ด้วยการประเมินอย่างอิสระที่รับรองคาร์บอนเครดิตและข้อมูลการปล่อยคาร์บอนของคุณตามมาตรฐานสากล",
      en: "Reinforce trust and transparency with independent assessments that authenticate your carbon credits and emissions data in accordance with global standards.",
    },
    description: {
      th: "VEKIN ให้บริการทวนสอบและตรวจสอบก๊าซเรือนกระจก บนพื้นฐานของความเป็นมืออาชีพ ความเป็นกลาง และการนำเทคโนโลยีดิจิทัลมาใช้ ในฐานะหน่วยตรวจสอบและรับรองอิสระ (VVB) เราไม่ให้บริการที่ปรึกษา ฝึกอบรม หรือบรรยายด้านก๊าซเรือนกระจก เพื่อรักษาความเป็นกลางที่การประเมินของเราต้องพึ่งพา",
      en: "VEKIN provides GHG verification and validation services grounded in professionalism, impartiality, and digitalization. As an independent VVB (Validation and Verification Body), we do not provide GHG consultancy, training, or lecturing—preserving the impartiality our assessments depend on.",
    },
    features: [
      {
        title: { th: "ความเป็นกลางและอิสระ", en: "Impartiality & Independence" },
        body: {
          th: "ประเมินอย่างเป็นกลางและปราศจากผลประโยชน์ทับซ้อน",
          en: "Assessments free from conflict of interest, every time.",
        },
      },
      {
        title: { th: "ความสามารถและความเชี่ยวชาญ", en: "Competence & Expertise" },
        body: {
          th: "ทีมผู้เชี่ยวชาญที่มีความรู้ลึกในมาตรฐานก๊าซเรือนกระจก",
          en: "A team with deep expertise in GHG standards and methodologies.",
        },
      },
      {
        title: { th: "การรักษาความลับ", en: "Confidentiality" },
        body: {
          th: "ปกป้องข้อมูลของลูกค้าอย่างเคร่งครัดตลอดกระบวนการ",
          en: "Your data is protected rigorously throughout the process.",
        },
      },
      {
        title: { th: "ความสงสัยเชิงวิชาชีพ", en: "Professional Skepticism" },
        body: {
          th: "ตั้งคำถามและตรวจสอบหลักฐานอย่างรอบคอบก่อนรับรอง",
          en: "Evidence is questioned and scrutinized carefully before assurance.",
        },
      },
      {
        title: { th: "แนวทางที่อิงความเสี่ยง", en: "Risk-Based Approach" },
        body: {
          th: "มุ่งเน้นทรัพยากรไปยังจุดที่มีความเสี่ยงสูงสุดต่อความถูกต้อง",
          en: "Focus effort where the risk to accuracy is greatest.",
        },
      },
      {
        title: { th: "การพัฒนาอย่างต่อเนื่อง", en: "Continuous Improvement" },
        body: {
          th: "ยกระดับกระบวนการและคุณภาพการให้บริการอยู่เสมอ",
          en: "We continually raise the quality of our process and service.",
        },
      },
    ],
    benefits: [
      {
        th: "แสดงความรับผิดชอบต่อสิ่งแวดล้อมและลดการปล่อยก๊าซเรือนกระจก",
        en: "Demonstrate environmental responsibility and reduce your GHG footprint.",
      },
      {
        th: "ตัดสินใจได้อย่างมีข้อมูลจากข้อมูลที่ถูกต้อง",
        en: "Make informed decisions from accurate, assured data.",
      },
      {
        th: "ได้รับความไว้วางใจจากผู้มีส่วนได้ส่วนเสียผ่านการรายงานที่น่าเชื่อถือ",
        en: "Gain stakeholder trust through credible reporting.",
      },
      {
        th: "ส่งเสริมแนวปฏิบัติที่ดีในการบริหารก๊าซเรือนกระจก",
        en: "Promote best practices in GHG management.",
      },
    ],
  },
];

export function getSolution(slug: string): Solution | undefined {
  return solutions.find((solution) => solution.slug === slug);
}
