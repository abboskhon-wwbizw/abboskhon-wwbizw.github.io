import React from "react";
import { Code, Database, Globe, Computer } from "lucide-react";

const About: React.FC = () => {
  const skills = [
    {
      category: "Frontend",
      icon: Globe,
      items: ["React", "JavaScript", "TypeScript", "Tailwind CSS"],
    },
    {
      category: "Systems",
      icon: Database,
      items: ["C", "eBPF protocols", "Android Kernel", "Optimization Tools"],
    },
    {
      category: "AI",
      icon: Computer,
      items: ["LLM-agents", "Multi-modal AI", "LangChain", "LangGraph"],
    },
    {
      category: "Tools",
      icon: Code,
      items: [
        "Git",
        "Bash",
        "PDF/Excel export tools",
        "Client-side image compression",
      ],
    },
  ];

  return (
    <section
      id="about"
      className="min-h-screen py-20 bg-white dark:bg-gray-900 scroll-snap-section pt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            I'm a passionate software developer with experience in building
            scalable web and mobile applications and AI solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="w-64 h-64 mx-auto md:mx-0 rounded-2xl bg-gradient-to-br from-blue-400 to-purple-500 p-1">
              <img
                src="me.jpg"
                className="w-full h-full object-cover rounded-2xl"
                alt="Abboskhon"
              />
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              My Journey
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              My journey in software began at UNIST, where I combined academic
              research with real-world problem-solving. From developing
              AI-powered ordering systems using multi-modal LLM agents to
              optimizing Android kernels with eBPF, I've always gravitated
              toward building solutions that push boundaries.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              I'm currently the founding software engineer at WWBW, where I
              build performant cross-platform apps with Flutter and React. I
              focus on writing clean, scalable code, improving UX across
              platforms, and delivering real value through engineering. Outside
              of work, I love exploring system-level tooling, contributing to
              smart AI workflows, and automating everything I can.
            </p>

            <div className="flex flex-wrap gap-2">
              {[
                "Problem Solver",
                "Team Player",
                "Continuous Learner",
                "Mentor",
              ].map((trait) => (
                <span
                  key={trait}
                  className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium"
                >
                  {trait}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Skills & Technologies
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skillGroup) => (
              <div
                key={skillGroup.category}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center mb-4">
                  <skillGroup.icon className="w-8 h-8 text-blue-600 dark:text-blue-400 mr-3" />
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {skillGroup.category}
                  </h4>
                </div>
                <ul className="space-y-2">
                  {skillGroup.items.map((skill) => (
                    <li
                      key={skill}
                      className="text-gray-600 dark:text-gray-400 flex items-center"
                    >
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;