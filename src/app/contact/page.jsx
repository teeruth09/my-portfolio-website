"use client";
import React from 'react';
import { Mail, MapPin, Github, Linkedin } from 'lucide-react';
import { USER_INFO } from '@/data/content';

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-24 flex items-center justify-center bg-slate-50 px-4 pb-12">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row animate-in fade-in zoom-in duration-500">
        
        {/* ฝั่งข้อมูลติดต่อ (สีน้ำเงิน) */}
        <div className="bg-blue-600 p-10 text-white md:w-2/5 flex flex-col justify-between">
          <div>
              <h2 className="text-3xl font-bold mb-6">Let's Chat!</h2>
              <p className="text-blue-100 mb-8">
                สนใจร่วมงาน หรือพูดคุยแลกเปลี่ยนความคิดเห็น สามารถติดต่อผมได้ผ่านช่องทางต่างๆ
              </p>
              <div className="space-y-4">
                <a href={`mailto:${USER_INFO.email}`} className="flex items-center space-x-3 hover:text-blue-200 transition">
                  <Mail className="text-blue-200" />
                  <span>{USER_INFO.email}</span>
                </a>
                <div className="flex items-center space-x-3">
                  <MapPin className="text-blue-200" />
                  <span>Bangkok, Thailand</span>
                </div>
              </div>
          </div>
          <div className="mt-12 flex space-x-4">
              <a href={USER_INFO.github} target="_blank" rel="noreferrer" className="p-2 bg-blue-700 rounded-full hover:bg-blue-800 transition">
                <Github size={20}/>
              </a>
              <a href={USER_INFO.linkedin} target="_blank" rel="noreferrer" className="p-2 bg-blue-700 rounded-full hover:bg-blue-800 transition">
                <Linkedin size={20}/>
              </a>
          </div>
        </div>
        
        {/* ฝั่งฟอร์ม (สีขาว) */}
        <div className="p-10 md:w-3/5">
          <form className="space-y-6" onSubmit={(e) => {
            e.preventDefault();
            alert("ขอบคุณที่ติดต่อมาครับ (นี่เป็นตัวอย่าง UI)");
          }}>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">ชื่อของคุณ</label>
              <input 
                type="text" 
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                placeholder="ระบุชื่อของคุณ"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">อีเมล</label>
              <input 
                type="email" 
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                placeholder="example@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">ข้อความ</label>
              <textarea 
                rows="4"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                placeholder="สวัสดีครับ สนใจติดต่อเรื่อง..."
              ></textarea>
            </div>
            <button type="submit" className="w-full bg-gray-900 text-white font-bold py-3 rounded-lg hover:bg-black transition transform active:scale-95">
              ส่งข้อความ
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}