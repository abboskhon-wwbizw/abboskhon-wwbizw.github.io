import React from "react";
import { useNavigate } from "react-router-dom";
import { ExternalLink, Github, Eye } from "lucide-react";
import { projectsData } from "../data/projectsData";

const Projects: React.FC = () => {
  const navigate = useNavigate();

  const handleProjectClick = (project: (typeof projectsData)[0]) => {
    if (project.type === "detail") {
      navigate(`/project/${project.id}`);
    } else if (project.type === "external" && project.externalUrl) {
      window.open(project.externalUrl, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section
      id="projects"
      className="min-h-screen py-20 bg-gray-50 dark:bg-gray-800 scroll-snap-section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Here are some of the projects I've worked on, showcasing my skills
            in frontend development, mobile applications, and modern AI
            technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 overflow-hidden group cursor-pointer"
              style={{
                animationDelay: `${index * 100}ms`,
                animation: "fadeInUp 0.6s ease-out forwards",
              }}
              onClick={() => handleProjectClick(project)}
            >
              <div className="relative overflow-hidden">
                {project.projectCover ? (
                  <img
                    src={project.projectCover}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                ) : (
                  <div className="w-full h-48 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="w-16 h-16 mx-auto mb-3 bg-white/20 rounded-lg flex items-center justify-center">
                        <div className="w-8 h-8 bg-white/40 rounded"></div>
                      </div>
                      <p className="text-sm font-medium opacity-90">
                        Project Preview
                      </p>
                    </div>
                  </div>
                )}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  {project.type === "detail" ? (
                    <div className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors">
                      <Eye className="w-6 h-6 text-white" />
                    </div>
                  ) : (
                    <div className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors">
                      <ExternalLink className="w-6 h-6 text-white" />
                    </div>
                  )}
                  {project.githubUrl && (
                    <button
                      type="button"
                      className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(
                          project.githubUrl,
                          "_blank",
                          "noopener,noreferrer"
                        );
                      }}
                    >
                      <Github className="w-6 h-6 text-white" />
                    </button>
                  )}
                </div>
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded-full">
                    {project.category}
                  </span>
                </div>
                <div className="absolute top-4 left-4">
                  <span
                    className={`px-2 py-1 text-xs font-medium rounded-full ${
                      project.type === "detail"
                        ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
                        : "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300"
                    }`}
                  >
                    {project.type === "detail"
                      ? "View Details"
                      : "External Link"}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
            Want to see more of my work?
          </p>
          <a
            href="https://github.com/abboskhon-wwbizw"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors duration-300"
          >
            <Github className="w-5 h-5 mr-2" />
            View GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
