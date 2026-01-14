"use client";
import React, { useState } from 'react';
import { SKILLS, EXPERIENCES, PROJECTS } from '@/data/content';
import { PortfolioSection } from '@/components/PortfolioSection';
import { ProjectDetail } from '@/components/ProjectDetail';
// Import icons...

export default function PortfolioPage() {
  const [selectedProject, setSelectedProject] = useState(null);

  // ถ้ามีการเลือก Project ให้แสดงหน้ารายละเอียด (หรือจะแยกเป็นหน้า /portfolio/[id] ก็ได้)
  if (selectedProject) {
     // ... Return component ProjectDetail
     <ProjectDetail/>
  }

  return (
    <div className="min-h-screen pt-24 pb-12 bg-slate-50">
       {/* ... วางโค้ดส่วน PortfolioSection ตรงนี้ ... */}
       <PortfolioSection/>
    </div>
  );
}