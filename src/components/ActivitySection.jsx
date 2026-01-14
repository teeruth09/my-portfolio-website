import { ACTIVITIES } from "@/data/content";

const { Calendar } = require("lucide-react");

export const ActivitySection = () => (
  <div className="min-h-screen pt-24 pb-12 bg-white">
    <div className="max-w-6xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold textA-gray-900 mb-4">กิจกรรม & ผลงานอื่นๆ</h2>
        <p className="text-gray-500 text-lg">กิจกรรมที่เข้าร่วม การแข่งขัน และงานอาสาสมัคร</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {ACTIVITIES.map((activity) => (
          <div key={activity.id} className="flex flex-col rounded-2xl overflow-hidden border border-gray-100 shadow-lg group">
            <div className="h-64 overflow-hidden relative">
              <img 
                src={activity.image} 
                alt={activity.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-sm font-medium text-gray-800 shadow-sm flex items-center">
                <Calendar size={14} className="mr-2 text-blue-600"/> {activity.date}
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                {activity.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {activity.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);