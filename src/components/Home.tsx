import React from "react";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";

const Home: React.FC = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 scroll-snap-section pt-16"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 p-1">
            <div className="w-full h-full rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-r from-blue-500 to-purple-600"></div>
            </div>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 animate-fade-in">
          Abboskhon Sobirov
        </h1>

        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4 animate-fade-in-delay-1">
          Software Developer
        </p>

        <p className="text-lg text-gray-500 dark:text-gray-400 mb-8 max-w-2xl mx-auto animate-fade-in-delay-2">
          Passionate about creating elegant solutions to complex problems. I
          specialize in modern web technologies and love turning ideas into
          reality.
        </p>

        <div className="flex justify-center space-x-6 mb-12 animate-fade-in-delay-3">
          <a
            href="mailto:constructorlib@gmail.com"
            className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          >
            <Mail className="w-6 h-6 text-gray-600 dark:text-gray-300" />
          </a>
          <a
            href="https://github.com/abboskhon-wwbizw"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          >
            <Github className="w-6 h-6 text-gray-600 dark:text-gray-300" />
          </a>
          <a
            href="https://linkedin.com/in/abboskhon-sobirov"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          >
            <Linkedin className="w-6 h-6 text-gray-600 dark:text-gray-300" />
          </a>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-4">
          <button
            onClick={scrollToProjects}
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            type="button"
          >
            View My Work
          </button>
          <button
            onClick={scrollToContact}
            className="px-8 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            type="button"
          >
            Get In Touch
          </button>
        </div>

        <button
          onClick={scrollToAbout}
          type="button"
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
        >
          <ChevronDown className="w-6 h-6 text-gray-400" />
        </button>
      </div>
    </section>
  );
};

export default Home;
