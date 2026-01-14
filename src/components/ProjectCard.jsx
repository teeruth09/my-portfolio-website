export const ProjectCard = ({ project, onClick }) => (
  <div 
    onClick={() => onClick(project)}
    className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 cursor-pointer flex flex-col h-full transform hover:-translate-y-1"
  >
    <div className="relative h-48 overflow-hidden bg-gray-100">
      <img 
        src={project.image} 
        alt={project.title} 
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
    </div>
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
      <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-grow">{project.shortDesc}</p>
      <div className="flex flex-wrap gap-2 mt-auto">
        {project.tech.map((t, index) => (
          <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">
            {t}
          </span>
        ))}
      </div>
    </div>
  </div>
);