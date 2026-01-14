export const USER_INFO = {
  name: "ชื่อ-นามสกุล ของคุณ",
  role: "Web Developer / Frontend Engineer",
  bio: "คำอธิบายตัวตนของคุณ...",
  email: "your.email@example.com",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername"
};

export const SKILLS = [
  { category: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "TypeScript", "HTML/CSS"] },
  { category: "Backend", items: ["Node.js", "Express", "PostgreSQL", "Firebase"] },
  { category: "Tools", items: ["Git", "VS Code", "Figma", "Vercel"] }
];

export const EXPERIENCES = [
  {
    id: 1,
    role: "Junior Web Developer",
    company: "Tech Company A",
    period: "2023 - ปัจจุบัน",
    description: "รับผิดชอบการพัฒนาหน้าเว็บไซต์ด้วย React และเชื่อมต่อกับ API พัฒนาฟีเจอร์ใหม่ๆ และแก้ไขบั๊ก"
  },
  {
    id: 2,
    role: "Web Developer Intern",
    company: "Digital Agency B",
    period: "2022 (3 เดือน)",
    description: "เรียนรู้การทำงานเป็นทีมแบบ Agile และช่วยพี่เลี้ยงทำโปรเจกต์ Landing Page ให้ลูกค้า"
  }
];
export const PROJECTS = [
  {
    id: 1,
    title: "E-Commerce Web App",
    shortDesc: "เว็บขายสินค้าออนไลน์ครบวงจร",
    fullDesc: "โปรเจกต์นี้เป็นเว็บไซต์ E-Commerce ที่สร้างด้วย Next.js มีระบบตะกร้าสินค้า ระบบล็อกอิน และหน้าจัดการสินค้าสำหรับแอดมิน เน้นประสิทธิภาพและการโหลดที่รวดเร็ว",
    image: "/api/placeholder/600/400", // เปลี่ยนเป็น "/project/ecommerce.jpg"
    tech: ["Next.js", "Stripe", "MongoDB"],
    link: "#"
  },
  {
    id: 2,
    title: "Task Management Dashboard",
    shortDesc: "แดชบอร์ดจัดการงานสำหรับทีม",
    fullDesc: "แอพพลิเคชันสำหรับจัดการ Task ภายในทีม สามารถลากวางสถานะงานได้ (Kanban Board) มีระบบแจ้งเตือนผ่าน Email และ Real-time update",
    image: "/api/placeholder/600/400", // เปลี่ยนเป็น "/project/dashboard.jpg"
    tech: ["React", "Firebase", "Tailwind"],
    link: "#"
  },
  {
    id: 3,
    title: "Coffee Shop Landing Page",
    shortDesc: "หน้าเว็บไซต์ร้านกาแฟ",
    fullDesc: "เว็บไซต์นำเสนอร้านกาแฟ ดีไซน์มินิมอล มีเมนูแนะนำและแผนที่ร้าน รองรับการแสดงผลบนมือถืออย่างสมบูรณ์",
    image: "/api/placeholder/600/400", // เปลี่ยนเป็น "/project/coffee.jpg"
    tech: ["HTML", "CSS", "JavaScript"],
    link: "#"
  }
];

export const ACTIVITIES = [
  {
    id: 1,
    title: "Hackathon 2023",
    date: "10 Dec 2023",
    description: "เข้าร่วมแข่งขัน Hackathon ในหัวข้อ Innovation for Future ได้รับรางวัลรองชนะเลิศอันดับ 2",
    image: "/api/placeholder/600/400" // เปลี่ยนเป็น "/activity/hackathon.jpg"
  },
  {
    id: 2,
    title: "React Workshop Speaker",
    date: "15 Aug 2023",
    description: "เป็นวิทยากรบรรยายพื้นฐาน React ให้กับน้องๆ นักศึกษาปี 1 ที่มหาวิทยาลัย",
    image: "/api/placeholder/600/400" // เปลี่ยนเป็น "/activity/workshop.jpg"
  }
];