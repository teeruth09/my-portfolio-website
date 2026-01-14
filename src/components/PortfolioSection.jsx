import { EXPERIENCES, PROJECTS, SKILLS } from "@/data/content";

const { GraduationCap, Code, Briefcase } = require("lucide-react");
const { ProjectCard } = require("./ProjectCard");

export const PortfolioSection = ({ onProjectClick }) => (
  <div className="min-h-screen pt-24 pb-12 bg-slate-50">
    <div className="max-w-6xl mx-auto px-4">
      
      {/* 1. Skills Section */}
      <section className="mb-20">
        <div className="flex items-center mb-8">
            <Code className="text-blue-600 mr-3" size={28}/>
            <h2 className="text-3xl font-bold text-gray-900">ทักษะความสามารถ (Skills)</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SKILLS.map((skillGroup, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">{skillGroup.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((item, i) => (
                  <span key={i} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 2. Experience Section */}
      <section className="mb-20">
        <div className="flex items-center mb-8">
            <Briefcase className="text-blue-600 mr-3" size={28}/>
            <h2 className="text-3xl font-bold text-gray-900">ประสบการณ์ทำงาน (Experience)</h2>
        </div>
        <div className="space-y-6">
          {EXPERIENCES.map((exp) => (
            <div key={exp.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-4">
              <div className="md:w-1/4">
                <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium">
                  {exp.period}
                </span>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-xl font-bold text-gray-900">{exp.role}</h3>
                <div className="text-blue-600 font-medium mb-2">{exp.company}</div>
                <p className="text-gray-600">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Projects Section */}
      <section>
        <div className="flex items-center mb-8 justify-between">
            <div className="flex items-center">
                <GraduationCap className="text-blue-600 mr-3" size={28}/>
                <h2 className="text-3xl font-bold text-gray-900">ผลงาน (Projects)</h2>
            </div>
            <span className="text-sm text-gray-500 hidden sm:block">คลิกที่การ์ดเพื่อดูรายละเอียด</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              onClick={onProjectClick} 
            />
          ))}
        </div>
      </section>

    </div>
  </div>
);