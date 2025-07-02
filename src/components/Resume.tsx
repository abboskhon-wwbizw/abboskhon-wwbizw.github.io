import React from "react";
import { Download, Briefcase, GraduationCap, Award } from "lucide-react";

const Resume: React.FC = () => {
  const experience = [
    {
      title: "Founding Software Engineer",
      company: "WWBW",
      period: "Jun 2024 – Present",
      description:
        "Developed an AI-powered ordering solution using LLM-based multi-modal multi-agent systems. Built a high-performance multiplatform SaaS app using Flutter and React. Improved UX and maintainability by resolving input-blocking issues, implementing client-side compression, and optimizing frontend with styled.js.",
    },
    {
      title: "Research Assistant",
      company: "N2SL, UNIST",
      period: "Mar 2024 – May 2024",
      description:
        "Contributed to Android Kernel research under Prof. Im Youngbin. Developed an Android optimization tool using eBPF protocols with C.",
    },
    {
      title: "Software Engineer Intern",
      company: "UNIST",
      period: "Sep 2022 – Dec 2022",
      description:
        "Worked with Prof. Christopher Lovins to build a Python-based grade analysis tool. Designed algorithms to predict student outcomes and highlight areas for improvement.",
    },
    {
      title: "Software Engineering Intern / TA",
      company: "UNIST",
      period: "Jun 2021 – Sep 2021",
      description:
        "Assisted Prof. Bradley Tatar in building an automatic scoring system for GPA prediction. Integrated ChatGPT API to enhance plagiarism detection. [Python, JavaScript]",
    },
  ];

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "Ulsan National Institute of Science and Technology (UNIST)",
      period: "2020 - 2024",
      honors: "Global Dream Scholarship, SOFT lab Special Mention",
    },
  ];

  const certifications = [
    "Al-Ferghani Academic Excellence Award Class of 2019",
  ];

  const handleDownload = () => {
    const pdfUrl = "abboskhon-cv.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "abboskhon-cv.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="resume"
      className="min-h-screen py-20 bg-white dark:bg-gray-900 scroll-snap-section pt-20"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Resume
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            My professional journey and qualifications
          </p>
          <button
            onClick={handleDownload}
            className="inline-flex items-center px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            type="button"
          >
            <Download className="w-5 h-5 mr-2" />
            Download PDF Resume
          </button>
        </div>

        <div className="space-y-12">
          {/* Experience Section */}
          <div>
            <div className="flex items-center mb-8">
              <Briefcase className="w-8 h-8 text-blue-600 dark:text-blue-400 mr-4" />
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                Professional Experience
              </h3>
            </div>
            <div className="space-y-8">
              {experience.map((job, index) => (
                <div
                  key={index}
                  className="relative pl-8 border-l-2 border-blue-200 dark:border-blue-800"
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 rounded-full"></div>
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                          {job.title}
                        </h4>
                        <p className="text-lg text-blue-600 dark:text-blue-400 font-medium">
                          {job.company}
                        </p>
                      </div>
                      <span className="text-sm bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full font-medium mt-2 md:mt-0">
                        {job.period}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {job.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div>
            <div className="flex items-center mb-8">
              <GraduationCap className="w-8 h-8 text-blue-600 dark:text-blue-400 mr-4" />
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                Education
              </h3>
            </div>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {edu.degree}
                      </h4>
                      <p className="text-lg text-blue-600 dark:text-blue-400 font-medium">
                        {edu.school}
                      </p>
                      {edu.honors && (
                        <p className="text-sm text-green-600 dark:text-green-400 font-medium mt-1">
                          {edu.honors}
                        </p>
                      )}
                    </div>
                    <span className="text-sm bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full font-medium mt-2 md:mt-0">
                      {edu.period}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Section */}
          <div>
            <div className="flex items-center mb-8">
              <Award className="w-8 h-8 text-blue-600 dark:text-blue-400 mr-4" />
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                Awards & Certifications
              </h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                    <p className="text-gray-900 dark:text-white font-medium">
                      {cert}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;