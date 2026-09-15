import { CONTACT_EMAIL } from "../siteConfig";

export type Localized = { th: string; en: string };

export type LegalBlock =
  | { type: "p"; text: Localized }
  | { type: "list"; items: Localized[] };

export type LegalSection = {
  heading: Localized;
  blocks: LegalBlock[];
};

export type LegalDocument = {
  title: Localized;
  updated: Localized;
  intro: Localized;
  sections: LegalSection[];
};

/**
 * Wraps a value that has to come from VEKIN or its counsel before these pages
 * go live — an effective date, a retention period, a governing jurisdiction.
 * Everything else on these two pages describes what the site verifiably does,
 * so these four constants are the whole of what is left to fill in.
 */
const pending = (th: string, en: string): Localized => ({
  th: `[รอยืนยัน: ${th}]`,
  en: `[to confirm: ${en}]`
});

const PENDING_DATE = pending("วันที่มีผลบังคับใช้", "effective date");
const PENDING_PROCESSORS = pending(
  "รายชื่อผู้ให้บริการอีเมลและระบบจดหมายข่าวที่ใช้งานจริง",
  "the email and newsletter providers actually in use"
);
const PENDING_RETENTION = pending(
  "ระยะเวลาเก็บข้อมูลการติดต่อและรายชื่อผู้รับข่าวสาร",
  "retention periods for enquiries and newsletter subscribers"
);
const PENDING_LAW = pending(
  "กฎหมายและเขตอำนาจศาลที่ใช้บังคับ",
  "governing law and jurisdiction"
);

const COMPANY_TH = "บริษัท วีคิน (ประเทศไทย) จำกัด";
const COMPANY_EN = "VEKIN (Thailand) Co., Ltd.";

export const privacyPolicy: LegalDocument = {
  title: { th: "นโยบายความเป็นส่วนตัว", en: "Privacy Policy" },
  updated: PENDING_DATE,
  intro: {
    th: "ประกาศนี้อธิบายว่าเว็บไซต์นี้เก็บข้อมูลส่วนบุคคลใดบ้าง เก็บไปเพื่ออะไร และคุณจัดการกับข้อมูลนั้นได้อย่างไร ประกาศนี้ครอบคลุมเฉพาะเว็บไซต์นี้ ผลิตภัณฑ์ของ VEKIN เช่น DAP, CERO และ One Click อยู่ภายใต้ข้อตกลงของผลิตภัณฑ์นั้น ๆ แยกต่างหาก",
    en: "This notice explains what personal data this website collects, why it is collected, and what you can do about it. It covers this website only — VEKIN products such as DAP, CERO and One Click are governed by their own separate agreements."
  },
  sections: [
    {
      heading: { th: "ผู้ควบคุมข้อมูล", en: "Who is responsible" },
      blocks: [
        {
          type: "p",
          text: {
            th: `${COMPANY_TH} เป็นผู้ควบคุมข้อมูลส่วนบุคคลที่เก็บผ่านเว็บไซต์นี้ เรามีสำนักงานที่กรุงเทพมหานครและลอนดอน ติดต่อได้ที่ ${CONTACT_EMAIL} หรือ +66 2 714 2490`,
            en: `${COMPANY_EN} is the controller of personal data collected through this website. We have offices in Bangkok and London. You can reach us at ${CONTACT_EMAIL} or +66 2 714 2490.`
          }
        }
      ]
    },
    {
      heading: { th: "ข้อมูลที่เราเก็บ", en: "What we collect" },
      blocks: [
        {
          type: "p",
          text: {
            th: "เราเก็บเฉพาะข้อมูลที่คุณกรอกและส่งให้เราเองเท่านั้น ได้แก่",
            en: "We collect only what you type in and send to us:"
          }
        },
        {
          type: "list",
          items: [
            {
              th: "แบบฟอร์มติดต่อ — หัวข้อและหัวข้อย่อยที่คุณเลือก บทบาทของคุณ อีเมล เบอร์โทรศัพท์ และข้อความที่คุณเขียน",
              en: "The contact form — the topic and sub-topic you pick, your role, your email address, your phone number, and the message you write."
            },
            {
              th: "การสมัครรับข่าวสาร — อีเมลที่คุณกรอกในหน้าบล็อก",
              en: "The newsletter sign-up — the email address you enter on the blog."
            }
          ]
        },
        {
          type: "p",
          text: {
            th: "นอกจากนี้เว็บไซต์จะจดจำภาษาที่คุณเลือก ไทยหรืออังกฤษ ไว้ในเบราว์เซอร์ของคุณเอง ข้อมูลนี้ไม่เคยถูกส่งมาที่เรา และลบได้โดยการล้างข้อมูลเว็บไซต์ในเบราว์เซอร์",
            en: "The site also remembers which language you chose, Thai or English, in your own browser. That preference is never sent to us, and you can remove it by clearing site data in your browser."
          }
        }
      ]
    },
    {
      heading: { th: "สิ่งที่เราไม่ได้เก็บ", en: "What we do not collect" },
      blocks: [
        {
          type: "p",
          text: {
            th: "เว็บไซต์นี้ไม่มีเครื่องมือวิเคราะห์การใช้งาน ไม่มีพิกเซลติดตามโฆษณา และไม่ตั้งคุกกี้ของเราเอง เราไม่สร้างโปรไฟล์ผู้เข้าชม ไม่ขายข้อมูล และไม่ใช้ข้อมูลของคุณเพื่อโฆษณาแบบเจาะจงบุคคล",
            en: "This site runs no analytics, no advertising pixels, and sets no cookies of its own. We do not profile visitors, we do not sell data, and we do not use your details for targeted advertising."
          }
        }
      ]
    },
    {
      heading: { th: "เนื้อหาจากบุคคลที่สาม", en: "Embedded third-party content" },
      blocks: [
        {
          type: "p",
          text: {
            th: "บางหน้าฝังวิดีโอจาก YouTube ไว้ เมื่อวิดีโอโหลด YouTube อาจตั้งคุกกี้และบันทึกการรับชมของคุณตามนโยบายความเป็นส่วนตัวของ Google ซึ่งอยู่นอกเหนือการควบคุมของเรา ลิงก์ไปยัง Google Maps และแพลตฟอร์ม One Click จะพาคุณออกจากเว็บไซต์นี้ไปสู่นโยบายที่เราไม่ได้เป็นผู้กำหนด",
            en: "Some pages embed video from YouTube. When a video loads, YouTube may set cookies and record your viewing under Google's own privacy policy, which is outside our control. Links to Google Maps and to the One Click platform take you off this site and onto policies we do not control."
          }
        }
      ]
    },
    {
      heading: { th: "เราใช้ข้อมูลของคุณอย่างไร", en: "How we use it" },
      blocks: [
        {
          type: "list",
          items: [
            {
              th: "เพื่อตอบคำถามและติดต่อกลับตามที่คุณร้องขอ",
              en: "To answer your enquiry and get back to you about it."
            },
            {
              th: "เพื่อส่งจดหมายข่าวหากคุณสมัครไว้ คุณยกเลิกได้ทุกเมื่อโดยตอบกลับอีเมลฉบับใดก็ได้",
              en: "To send you the newsletter, if you asked for it. You can stop it at any time by replying to any issue."
            }
          ]
        },
        {
          type: "p",
          text: {
            th: "เราจะไม่นำข้อมูลที่คุณส่งมาเพื่อสอบถามไปใช้เพื่อวัตถุประสงค์อื่นโดยไม่ได้ขอความยินยอมจากคุณก่อน",
            en: "We will not repurpose what you send us for anything else without asking you first."
          }
        }
      ]
    },
    {
      heading: { th: "การเปิดเผยข้อมูล", en: "Who else sees it" },
      blocks: [
        {
          type: "p",
          text: {
            th: `เราไม่ขายและไม่แลกเปลี่ยนข้อมูลส่วนบุคคลของคุณ เราเปิดเผยข้อมูลเฉพาะกับผู้ให้บริการที่จำเป็นต่อการดำเนินงานของเรา และเมื่อกฎหมายกำหนดเท่านั้น ผู้ให้บริการที่เราใช้: ${PENDING_PROCESSORS.th}`,
            en: `We do not sell or trade your personal data. We share it only with the service providers we need to run our operations, and where the law requires it. Providers in use: ${PENDING_PROCESSORS.en}`
          }
        }
      ]
    },
    {
      heading: { th: "ระยะเวลาเก็บรักษา", en: "How long we keep it" },
      blocks: [
        {
          type: "p",
          text: {
            th: `เราเก็บข้อมูลไว้เท่าที่จำเป็นต่อวัตถุประสงค์ข้างต้น แล้วจึงลบทิ้ง ระยะเวลาที่กำหนดไว้: ${PENDING_RETENTION.th}`,
            en: `We keep your details only as long as they serve the purposes above, then delete them. Set periods: ${PENDING_RETENTION.en}`
          }
        }
      ]
    },
    {
      heading: { th: "สิทธิของคุณ", en: "Your rights" },
      blocks: [
        {
          type: "p",
          text: {
            th: "ภายใต้พระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562 (PDPA) และภายใต้ UK GDPR หากคุณติดต่อผ่านสำนักงานลอนดอน คุณมีสิทธิดังนี้",
            en: "Under Thailand's Personal Data Protection Act (PDPA) — and under the UK GDPR if you deal with our London office — you have the right to:"
          }
        },
        {
          type: "list",
          items: [
            { th: "ขอเข้าถึงและขอสำเนาข้อมูลของคุณ", en: "ask for a copy of the data we hold about you;" },
            { th: "ขอแก้ไขข้อมูลที่ไม่ถูกต้อง", en: "have anything inaccurate corrected;" },
            { th: "ขอให้ลบข้อมูลของคุณ", en: "ask us to delete it;" },
            { th: "คัดค้านหรือขอให้ระงับการใช้ข้อมูล", en: "object to or restrict how we use it;" },
            { th: "ถอนความยินยอมเมื่อใดก็ได้", en: "withdraw consent at any time;" },
            {
              th: "ร้องเรียนต่อหน่วยงานกำกับดูแลด้านการคุ้มครองข้อมูลส่วนบุคคล",
              en: "complain to the relevant data protection authority."
            }
          ]
        },
        {
          type: "p",
          text: {
            th: `ส่งคำขอมาที่ ${CONTACT_EMAIL} เราจะตอบกลับภายในกรอบเวลาที่กฎหมายกำหนด`,
            en: `Email ${CONTACT_EMAIL} to exercise any of these. We will respond within the period the law allows.`
          }
        }
      ]
    },
    {
      heading: { th: "การเปลี่ยนแปลงประกาศนี้", en: "Changes to this notice" },
      blocks: [
        {
          type: "p",
          text: {
            th: "หากวิธีจัดการข้อมูลของเราเปลี่ยนไป เราจะปรับปรุงหน้านี้พร้อมแก้วันที่ด้านบน",
            en: "If the way we handle data changes, we will update this page and the date at the top of it."
          }
        }
      ]
    }
  ]
};

export const termsOfService: LegalDocument = {
  title: { th: "ข้อกำหนดการใช้งาน", en: "Terms of Service" },
  updated: PENDING_DATE,
  intro: {
    th: "ข้อกำหนดนี้ใช้กับการเข้าชมเว็บไซต์นี้ ไม่ได้ใช้กับผลิตภัณฑ์หรือบริการของ VEKIN ซึ่งอยู่ภายใต้สัญญาแยกต่างหากที่ลงนามกับคุณ",
    en: "These terms cover your use of this website. They do not cover VEKIN products or services, which run on separate contracts signed with you."
  },
  sections: [
    {
      heading: { th: "การยอมรับข้อกำหนด", en: "Accepting these terms" },
      blocks: [
        {
          type: "p",
          text: {
            th: "การใช้งานเว็บไซต์นี้ถือว่าคุณยอมรับข้อกำหนดนี้ หากคุณไม่ยอมรับ กรุณาหยุดใช้งานเว็บไซต์",
            en: "By using this website you accept these terms. If you do not accept them, please stop using the site."
          }
        }
      ]
    },
    {
      heading: { th: "ขอบเขตของเว็บไซต์", en: "What this site is" },
      blocks: [
        {
          type: "p",
          text: {
            th: `เว็บไซต์นี้เป็นสื่อให้ข้อมูลเกี่ยวกับ ${COMPANY_TH} และผลิตภัณฑ์ของเรา เนื้อหาบนเว็บไซต์เป็นข้อมูลทั่วไปเพื่อการประกอบการพิจารณา ไม่ถือเป็นคำเสนอที่ผูกพัน คำแนะนำทางวิชาชีพ หรือการรับรองผลลัพธ์ใด ๆ`,
            en: `This site is an informational presence for ${COMPANY_EN} and our products. What you read here is general information. It is not a binding offer, not professional advice, and not a guarantee of any result.`
          }
        }
      ]
    },
    {
      heading: { th: "การใช้งานที่อนุญาต", en: "Acceptable use" },
      blocks: [
        {
          type: "p",
          text: {
            th: "คุณใช้เว็บไซต์นี้เพื่อการรับข้อมูลและติดต่อเราได้ตามปกติ สิ่งที่ไม่อนุญาตคือ",
            en: "You are welcome to read the site and get in touch through it. What you may not do:"
          }
        },
        {
          type: "list",
          items: [
            {
              th: "พยายามเข้าถึงระบบหรือข้อมูลโดยไม่ได้รับอนุญาต หรือรบกวนการทำงานของเว็บไซต์",
              en: "attempt to gain unauthorised access to any system or data, or disrupt how the site runs;"
            },
            {
              th: "เก็บรวบรวมข้อมูลจากเว็บไซต์ด้วยระบบอัตโนมัติในลักษณะที่สร้างภาระเกินสมควรต่อระบบ",
              en: "scrape the site by automated means in a way that places an unreasonable load on it;"
            },
            {
              th: "ใช้เว็บไซต์เพื่อวัตถุประสงค์ที่ผิดกฎหมาย หรือส่งข้อมูลอันเป็นเท็จผ่านแบบฟอร์มติดต่อ",
              en: "use the site for any unlawful purpose, or send false information through the contact form."
            }
          ]
        }
      ]
    },
    {
      heading: { th: "ทรัพย์สินทางปัญญา", en: "Intellectual property" },
      blocks: [
        {
          type: "p",
          text: {
            th: `ข้อความ ภาพ กราฟิก ชื่อผลิตภัณฑ์ และโลโก้บนเว็บไซต์นี้เป็นของ ${COMPANY_TH} หรือผู้ให้อนุญาตแก่เรา คุณอ่าน พิมพ์ และอ้างอิงเนื้อหาเพื่อการประเมินผลิตภัณฑ์ของเราได้ แต่การทำซ้ำหรือเผยแพร่ซ้ำในเชิงพาณิชย์ต้องได้รับอนุญาตเป็นลายลักษณ์อักษรจากเราก่อน ใบรับรองมาตรฐาน ISO ที่เผยแพร่บนเว็บไซต์เป็นเอกสารที่ออกโดยหน่วยรับรองภายนอกและยังคงเป็นทรัพย์สินของหน่วยงานนั้น`,
            en: `The text, images, graphics, product names and logos on this site belong to ${COMPANY_EN} or to those who licensed them to us. You may read, print and quote from the site to evaluate our products. Reproducing or republishing it commercially needs our written permission first. The ISO certificates published here were issued by external certification bodies and remain their documents.`
          }
        }
      ]
    },
    {
      heading: { th: "การติดต่อสอบถามและจดหมายข่าว", en: "Enquiries and the newsletter" },
      blocks: [
        {
          type: "p",
          text: {
            th: "การส่งแบบฟอร์มติดต่อหรือสมัครรับจดหมายข่าวไม่ก่อให้เกิดสัญญาหรือความสัมพันธ์ทางธุรกิจใด ๆ เราจะติดต่อกลับเมื่อทำได้ แต่ไม่ได้รับประกันกรอบเวลาในการตอบกลับ ข้อมูลที่คุณส่งมาจะถูกจัดการตามนโยบายความเป็นส่วนตัวของเรา",
            en: "Sending the contact form or subscribing to the newsletter does not create a contract or a business relationship. We reply when we can, but we do not promise a response time. Whatever you send is handled under our Privacy Policy."
          }
        }
      ]
    },
    {
      heading: { th: "ลิงก์ไปยังบุคคลที่สาม", en: "Links to other sites" },
      blocks: [
        {
          type: "p",
          text: {
            th: "เว็บไซต์นี้มีลิงก์และเนื้อหาฝังจากบริการภายนอก เช่น แพลตฟอร์ม One Click, YouTube และ Google Maps เราไม่ได้ควบคุมเว็บไซต์เหล่านั้นและไม่รับผิดชอบต่อเนื้อหาหรือแนวปฏิบัติของผู้ให้บริการเหล่านั้น",
            en: "This site links to and embeds outside services, including the One Click platform, YouTube and Google Maps. We do not control those sites and we are not responsible for their content or their practices."
          }
        }
      ]
    },
    {
      heading: { th: "ข้อจำกัดการรับประกัน", en: "No warranty" },
      blocks: [
        {
          type: "p",
          text: {
            th: "เราพยายามให้ข้อมูลบนเว็บไซต์ถูกต้องและเป็นปัจจุบัน แต่ให้บริการเว็บไซต์ตามสภาพที่เป็นอยู่ โดยไม่รับประกันว่าเนื้อหาจะปราศจากข้อผิดพลาด ครบถ้วน หรือเว็บไซต์จะพร้อมใช้งานอย่างต่อเนื่อง",
            en: "We work to keep the site accurate and current, but it is provided as it stands. We do not warrant that the content is free of errors or complete, or that the site will always be available."
          }
        }
      ]
    },
    {
      heading: { th: "ข้อจำกัดความรับผิด", en: "Limitation of liability" },
      blocks: [
        {
          type: "p",
          text: {
            th: "เท่าที่กฎหมายอนุญาต เราไม่รับผิดต่อความเสียหายทางอ้อมหรือความเสียหายสืบเนื่องที่เกิดจากการใช้งานเว็บไซต์นี้ ข้อกำหนดนี้ไม่จำกัดความรับผิดที่ไม่อาจจำกัดได้ตามกฎหมาย",
            en: "So far as the law allows, we are not liable for indirect or consequential loss arising from your use of this site. Nothing here limits liability that cannot be limited by law."
          }
        }
      ]
    },
    {
      heading: { th: "การเปลี่ยนแปลงข้อกำหนด", en: "Changes to these terms" },
      blocks: [
        {
          type: "p",
          text: {
            th: "เราอาจปรับปรุงข้อกำหนดนี้เป็นครั้งคราว ฉบับที่ปรากฏบนหน้านี้คือฉบับที่มีผลบังคับใช้",
            en: "We may revise these terms from time to time. The version on this page is the one in force."
          }
        }
      ]
    },
    {
      heading: { th: "กฎหมายที่ใช้บังคับ", en: "Governing law" },
      blocks: [
        {
          type: "p",
          text: {
            th: `${PENDING_LAW.th}`,
            en: `${PENDING_LAW.en}`
          }
        }
      ]
    },
    {
      heading: { th: "ติดต่อเรา", en: "Contact" },
      blocks: [
        {
          type: "p",
          text: {
            th: `หากมีคำถามเกี่ยวกับข้อกำหนดนี้ ติดต่อ ${CONTACT_EMAIL}`,
            en: `Questions about these terms go to ${CONTACT_EMAIL}.`
          }
        }
      ]
    }
  ]
};
