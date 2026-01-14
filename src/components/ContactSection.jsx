import { USER_INFO } from "@/data/content";

const { Mail, MapPin, Github, Linkedin } = require("lucide-react");

export const ContactSection = () => (
  <div className="min-h-screen pt-24 flex items-center justify-center bg-slate-50 px-4">
    <div className="max-w-4xl w-full bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
      <div className="bg-blue-600 p-10 text-white md:w-2/5 flex flex-col justify-between">
        <div>
            <h2 className="text-3xl font-bold mb-6">Let's Chat!</h2>
            <p classNaCme="text-blue-100 mb-8">
              สนใจร่วมงาน หรือพูดคุยแลกเปลี่ยนความคิดเห็น สามารถติดต่อผมได้ผ่านช่องทางต่างๆ
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="text-blue-200" />
                <span>{USER_INFO.email}</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="text-blue-200" />
                <span>Bangkok, Thailand</span>
              </div>
            </div>
        </div>
        <div className="mt-12 flex space-x-4">
            <a href={USER_INFO.github} className="p-2 bg-blue-700 rounded-full hover:bg-blue-800 transition"><Github size={20}/></a>
            <a href={USER_INFO.linkedin} className="p-2 bg-blue-700 rounded-full hover:bg-blue-800 transition"><Linkedin size={20}/></a>
        </div>
      </div>
      
      <div className="p-10 md:w-3/5">
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">ชื่อของคุณ</label>
            <input 
              type="text" 
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">อีเมล</label>
            <input 
              type="email" 
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
              placeholder="john@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">ข้อความ</label>
            <textarea 
              rows="4"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
              placeholder="สวัสดีครับ สนใจติดต่อเรื่อง..."
            ></textarea>
          </div>
          <button className="w-full bg-gray-900 text-white font-bold py-3 rounded-lg hover:bg-black transition transform active:scale-95">
            ส่งข้อความ
          </button>
        </form>
      </div>
    </div>
  </div>
);
