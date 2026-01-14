"use client";
import { Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';
import { USER_INFO } from '@/data/content';
import { HeroSection } from '@/components/HeroSection';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 pt-16">
       {/* ... วางโค้ด HTML ส่วน Hero Section ตรงนี้ ... */}
       <HeroSection/>
       {/* ตรงปุ่มกด ให้เปลี่ยน onClick เป็น <Link href="/portfolio"> ... </Link> */}
    </div>
  );
}