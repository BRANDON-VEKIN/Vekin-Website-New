"use client";

import React from "react";
import { useSiteLanguage } from "./siteLanguage";

type LocalizedTextProps = {
  as?: React.ElementType;
  th?: React.ReactNode;
  en?: React.ReactNode;
  className?: string;
  children?: React.ReactNode;
};

const thaiTextOverrides: Record<string, React.ReactNode> = {
  "AI Energy Auditor": "ผู้ตรวจสอบพลังงานด้วย AI",
  "AI Energy Auditor is an intelligent platform designed to optimize energy efficiency through real-time monitoring and predictive analytics. By analyzing operational data across multiple systems, it helps organizations identify energy waste, reduce operational costs, and improve sustainability performance. The platform provides automated insights and smart recommendations that support faster and more accurate decision-making. With a modern AI-driven approach, businesses can achieve greater energy transparency while advancing toward long-term environmental goals.":
    "AI Energy Auditor คือแพลตฟอร์มอัจฉริยะที่ช่วยเพิ่มประสิทธิภาพการใช้พลังงานด้วยการติดตามแบบเรียลไทม์และการวิเคราะห์เชิงคาดการณ์ ระบบวิเคราะห์ข้อมูลจากหลายแหล่งเพื่อค้นหาการใช้พลังงานที่สูญเปล่า ลดต้นทุน และยกระดับผลลัพธ์ด้านความยั่งยืน พร้อมให้ข้อมูลเชิงลึกและคำแนะนำอัตโนมัติเพื่อการตัดสินใจที่รวดเร็วและแม่นยำขึ้น",
  "AI AUDITOR FOR CARBON FOOTPRINT": "AI AUDITOR สำหรับคาร์บอนฟุตพริ้นท์",
  "VEKIN's AI Carbon Auditor acts as a Digital VVB, using Hybrid Neuro-Symbolic AI and ISO-aligned rules to verify IoT and satellite data in real time. It cuts audit costs by over 80%, reduces greenwashing risk with blockchain Carbon Receipts, and turns carbon data into trusted digital assets for green finance and premium carbon markets.":
    "AI Carbon Auditor ของ VEKIN ทำหน้าที่เป็น Digital VVB โดยใช้ Hybrid Neuro-Symbolic AI และกฎที่สอดคล้องกับมาตรฐาน ISO เพื่อตรวจสอบข้อมูล IoT และดาวเทียมแบบเรียลไทม์ ช่วยลดต้นทุนการตรวจสอบมากกว่า 80% ลดความเสี่ยง Greenwashing ด้วย Carbon Receipt บน Blockchain และเปลี่ยนข้อมูลคาร์บอนให้เป็นสินทรัพย์ดิจิทัลที่เชื่อถือได้สำหรับเงินทุนสีเขียวและตลาดคาร์บอนคุณภาพสูง",
  "Traditional Audit vs AI Trust": "การตรวจสอบแบบดั้งเดิมเทียบกับความน่าเชื่อถือจาก AI",
  "A cleaner view of the shift from slow manual work to verifiable, scalable intelligence.":
    "มองเห็นการเปลี่ยนผ่านจากงาน manual ที่ล่าช้า ไปสู่ระบบอัจฉริยะที่ตรวจสอบได้และขยายผลได้",
  "Time is lost and teams are stretched thin": "เสียเวลา และทีมงานต้องรับภาระมากเกินไป",
  "Trust is earned when VEKIN is in play": "ความน่าเชื่อถือเกิดขึ้นเมื่อ VEKIN เข้ามาช่วย",
  "Traditional methods lack the precision to measure": "วิธีการเดิมยังขาดความแม่นยำในการวัดผล",
  Traditional: "แบบดั้งเดิม",
  "Traditional auditing depends on manual collection, estimates, and disconnected review cycles. It is slow, expensive, difficult to scale, and exposed to human error or greenwashing risk.":
    "การตรวจสอบแบบดั้งเดิมพึ่งพาการเก็บข้อมูลด้วยมือ การประมาณค่า และกระบวนการตรวจทานที่แยกส่วน ทำให้ล่าช้า มีต้นทุนสูง ขยายผลได้ยาก และเสี่ยงต่อข้อผิดพลาดจากมนุษย์หรือ Greenwashing",
  "The result is delayed evidence, rising operating cost, and trust that is hard to prove.":
    "ผลลัพธ์คือหลักฐานที่ล่าช้า ต้นทุนการดำเนินงานที่เพิ่มขึ้น และความน่าเชื่อถือที่พิสูจน์ได้ยาก",
  AI: "AI",
  "VEKIN turns verification into a real-time AI workflow. It reduces operating cost, lowers greenwashing risk, and converts environmental performance into trusted digital assets for finance and carbon markets.":
    "VEKIN เปลี่ยนการตรวจสอบให้เป็นกระบวนการ AI แบบเรียลไทม์ ช่วยลดต้นทุน ลดความเสี่ยง Greenwashing และแปลงผลลัพธ์ด้านสิ่งแวดล้อมให้เป็นสินทรัพย์ดิจิทัลที่เชื่อถือได้สำหรับภาคการเงินและตลาดคาร์บอน",
  "From hard-to-verify data to finance-ready digital proof.":
    "จากข้อมูลที่ตรวจสอบยาก สู่หลักฐานดิจิทัลที่พร้อมใช้ด้านการเงิน",
  "Big Data": "ข้อมูลขนาดใหญ่",
  "Our Methodology": "ระเบียบวิธีของเรา",
  "VEKIN combines IoT, satellite data, ISO-aware Knowledge Graphs, and Neural Networks into one transparent audit-grade intelligence layer.":
    "VEKIN ผสานข้อมูล IoT ข้อมูลดาวเทียม Knowledge Graphs ที่อ้างอิงมาตรฐาน ISO และ Neural Networks เข้าเป็นชั้นข้อมูลอัจฉริยะที่โปร่งใสและพร้อมสำหรับการตรวจสอบ",
  "AI Energy Auditor Verified By": "AI Energy Auditor ได้รับการยืนยันโดย",
  "Industry-recognized validation protocols and real building-performance benchmarks help keep every insight accurate, reliable, and ready for audit-grade decisions.":
    "โปรโตคอลการรับรองที่เป็นที่ยอมรับในอุตสาหกรรม และเกณฑ์เปรียบเทียบสมรรถนะอาคารจริง ช่วยให้ข้อมูลเชิงลึกมีความแม่นยำ น่าเชื่อถือ และพร้อมใช้สำหรับการตัดสินใจระดับการตรวจสอบ",
  "Clients & Partners": "ลูกค้าและพันธมิตร",
  "Organizations and partners building verified energy and carbon intelligence with VEKIN.":
    "องค์กรและพันธมิตรที่ร่วมสร้างข้อมูลอัจฉริยะด้านพลังงานและคาร์บอนที่ตรวจสอบได้กับ VEKIN",
  "Make Every Energy Investment Verifiable": "ทำให้ทุกการลงทุนด้านพลังงานตรวจสอบได้",
  "Turn energy data into trusted proof for savings, green finance, and carbon opportunities.":
    "เปลี่ยนข้อมูลพลังงานให้เป็นหลักฐานที่เชื่อถือได้ สำหรับการประหยัด เงินทุนสีเขียว และโอกาสในตลาดคาร์บอน",
  "View Package": "ดูแพ็กเกจ",
  "Add LINE via QR Code": "เพิ่ม LINE ผ่าน QR Code",
};

export default function LocalizedText({
  as = "span",
  th,
  en,
  className,
  children,
  ...rest
}: LocalizedTextProps) {
  const { language } = useSiteLanguage();
  const Tag = as as any;
  const override =
    language === "th" && typeof en === "string" ? thaiTextOverrides[en] : undefined;
  const content = children ?? override ?? (language === "th" ? th : en);

  return (
    <Tag className={className} {...rest}>
      {content}
    </Tag>
  );
}
