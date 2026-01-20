import { Cloud, Database, Layout, Server, Terminal, Wrench } from "lucide-react";

export const USER_INFO = {
  name: "I'm Teeruth Ieowsakulrat",
  role: "FullStack Developer / Software Engineer",
  bio: "A passionate fourth-year Computer Engineering student at KMITL with strong interests in full-stack development, DevOps, and software engineering.",
  email: "teeruth2546@gmail.com",
  github: "https://github.com/teeruth09",
  linkedin: "https://www.linkedin.com/in/teeruth-ieowsakulrat/",
  aboutDetail: "My name is Teeruth Ieowsakulrat. Most people call me Ruth. I am currently studying Computer Engineering at King Mongkut's Institute of Technology Ladkrabang (KMITL). I have a strong interest in web application development, with a focus on full-stack development, DevOps, and software engineering. In my free time, I enjoy watching series and YouTube, playing badminton, and improving my skills by working on personal projects or freelance work. Throughout my academic journey, I have gained solid knowledge in software, hardware, and networking under the guidance of experienced professors. I have applied this knowledge through hands-on projects and laboratory exercises, allowing me to continuously improve and strengthen my technical skills.",
};

export const SKILLS = [
  { category: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "TypeScript", "HTML/CSS"] },
  { category: "Backend", items: ["Node.js", "Express", "PostgreSQL", "Firebase"] },
  { category: "Tools", items: ["Git", "VS Code", "Figma", "Vercel"] }
];

export const SKILLS_WITH_DETAILS = [
  { 
    category: "Frontend", 
    icon: <Layout className="w-6 h-6 text-blue-500" />,
    items: [
      { name: "HTML", level: 70, iconSrc: "/skillIcons/frontend/html.png" },
      { name: "CSS", level: 70, iconSrc: "/skillIcons/frontend/css.png" },
      { name: "Bootstrap", level: 50, iconSrc: "/skillIcons/frontend/bootstrap.png" },
      { name: "Tailwind CSS", level: 80, iconSrc: "/skillIcons/frontend/tailwind.png" },
      { name: "React", level: 70, iconSrc: "/skillIcons/frontend/react.png" },
      { name: "Next.js", level: 70, iconSrc: "/skillIcons/frontend/nextjs.png" },
    ] 
  },
  { 
    category: "Backend", 
    icon: <Server className="w-6 h-6 text-green-500" />,
    items: [
      { name: "Node.js", level: 70, iconSrc: "/skillIcons/backend/nodejs.png"},
      { name: "NestJS", level: 70, iconSrc: "/skillIcons/backend/nestjs.png" },
      { name: "Express.js", level: 70, iconSrc: "/skillIcons/backend/expressjs.png"},
      { name: "Kotlin Spring Boot", level: 60, iconSrc: "/skillIcons/backend/kotlin.png"},
      { name: "FastAPI", level: 40, iconSrc: "/skillIcons/backend/fastapi.png"},
    ] 
  },
  { 
    category: "DevOps", 
    icon: <Cloud className="w-6 h-6 text-sky-500" />, // เปลี่ยนเป็น Cloud
    items: [
      { name: "Docker", level: 50, iconSrc: "/skillIcons/devops/docker.png" },
      { name: "Google Cloud", level: 50, iconSrc: "/skillIcons/devops/google_cloud.png" },
      { name: "Vercel", level: 30, iconSrc: "/skillIcons/devops/vercel.png"  },
    ] 
  },
  { 
    category: "Database", 
    icon: <Database className="w-6 h-6 text-indigo-500" />,
    items: [
      { name: "MongoDB", level: 70, iconSrc: "/skillIcons/database/mongodb.png" },
      { name: "PostgreSQL", level: 70, iconSrc: "/skillIcons/database/postgresql.png"  },
      { name: "MySQL", level: 50, iconSrc: "/skillIcons/database/mysql.png"  },
    ] 
  },
  { 
    category: "Programming", 
    icon: <Terminal className="w-6 h-6 text-purple-500" />, // เปลี่ยนเป็น Terminal
    items: [
      { name: "Python", level: 70, iconSrc: "/skillIcons/programming/python.png" },
      { name: "JavaScript", level: 70, iconSrc: "/skillIcons/programming/javascript.png" },
      { name: "TypeScript", level: 70, iconSrc: "/skillIcons/programming/typescript.png" },
      { name: "C", level: 30, iconSrc: "/skillIcons/programming/c.png" },
    ] 
  },
  { 
    category: "Tools & Others", 
    icon: <Wrench className="w-6 h-6 text-orange-500" />,
    items: [
      { name: "Git", level: 70, iconSrc: "/skillIcons/tools/git.png" },
      { name: "Figma", level: 70, iconSrc: "/skillIcons/tools/figma.png" },
      { name: "Postman", level: 70, iconSrc: "/skillIcons/tools/postman.png" },
      { name: "Bruno", level: 60, iconSrc: "/skillIcons/tools/bruno.png" },
      { name: "Jira", level: 30, iconSrc: "/skillIcons/tools/jira.png" },
    ] 
  }
];


export const EXPERIENCES = [
  {
    id: 1,
    period: "April 2025 - July 2025",
    role: "Full Stack Developer (Internship / Part-time)",
    company: "Smart Shift Solutions – Mitrphol Group",
    description:
      "Developed the MP-CANEMIS system, focusing on backend development using Groovy and Grails for enterprise-level applications.",
  },
  {
    id: 2,
    period: "September 2025 - Present",
    role: "Full Stack Developer (Freelance / Part-time)",
    company: "Smart Shift Solutions – Supalai Public Company Limited",
    description:
      "Currently developing the SPALI-CRM system, integrating CRM features with internal Customer and ERP systems using Next.js and Kotlin (Spring Boot).",
  },
];
export const PROJECTS = [
  {
    id: 1,
    title: "Movie2free",
    period: "February 2024 - March 2024",
    slug: "stock-dividend",
    shortDesc: "A platform for finding people to watch movies together.",
    fullDesc: "Movie2free was developed using the .NET Core MVC architecture with a PostgreSQL database. The platform was created to help users find people to watch movies together. Users can create movie rooms with a configurable maximum number of participants, similar to group-based movie meetups. Each room includes a built-in chat system that allows members to communicate and coordinate within the group.",
    image: "/projects/movie2free.png",
    role: "Frontend Developer",
    tech: ["HTML", "CSS", "JavaScript", "C#", "ASP.NET Core MVC", "PostgreSQL"],
    liveUrl: "https://www.canva.com/design/DAG-8j9lXE8/l7zpL5PXK2xOzUTMWdEmIA/view?utm_content=DAG-8j9lXE8&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h03cd532ac3",
    githubUrls: [
      {
        label: "Movie2free",
        url: "https://github.com/Thanasak-Songsri/ASP.net_Movie_Webapp",
      },
    ]
  },
  {
    id: 2,
    title: "YevOps",
    period: "August 2024 - October 2024",
    //slug: "stock-dividend",
    shortDesc: "A platform that connects tailoring shops with customers.",
    fullDesc: "YevOps website was created as a platform to connect tailoring shops with customers seeking tailoring services using website development process. This includes Requirements, User Stories, BPMN, UI/UX, Backlog, Sprint Backlog, Test Cases, ERD, and UML, as well as various website presentation files.",
    image: "/projects/yevOps.png",
    role: "Full Stack Developer",
    tech: ["React", "Node.js", "Express.js","MongoDB","Software Development"],
    liveUrl: "https://www.canva.com/design/DAGVByJXRGI/Q8jrP6qLW57ftW5K7n8thw/edit",
    githubUrls: [
      {
        label: "YevOps",
        url: "https://github.com/teeruth09/YevOps",
      },
    ]
  },
  {
    id: 3,
    title: "Web App for Stock Investment and Tax Deduction from Dividend Tax Credit",
    period: "July 2025 - Present",
    slug: "stock-dividend",
    shortDesc: "A web application designed to help investors analyze dividend stocks and optimize tax benefits.",
    fullDesc: "Project in fouth-year Computer Engineering at KMITL.This project presents a Stock Investment Advisory System with Dividend Tax Credit, developed to support investors interested in dividend stock investing. The system helps users analyze dividend stocks by predicting dividend payment periods, recommending suitable stocks, simulating investment transactions, and calculating expected returns. Additionally, it assists investors in comparing tax outcomes when using dividend tax credits versus the Final Tax option. By integrating investment analysis and tax calculation, the system enables investors to plan more effective dividend investment strategies and maximize overall returns.",
    image: "/projects/stockDividend.png",
    role: "Full Stack Developer",
    tech: ["Next.js", "NestJS", "Machine Learning","Dividend Tax","Software Development"],
    liveUrl: "https://www.canva.com/design/DAGVByJXRGI/Q8jrP6qLW57ftW5K7n8thw/edit",
    githubUrl: "https://github.com/teeruth09/YevOps",
    githubUrls: [
      {
        label: "Frontend",
        url: "https://github.com/teeruth09/StockDividendInvestment-Frontend",
      },
      {
        label: "Backend",
        url: "https://github.com/teeruth09/StockDividendInvestment-Backend",
      },
    ]
  },
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