import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { projects } from "../data/portfolio";

// 기술 스택별 아이콘과 브랜드 컬러 매핑
const techConfig: Record<
  string,
  { icon: string; bgColor: string; textColor: string }
> = {
  JavaScript: {
    icon: "/src/assets/icons/javascript/javascript-original.svg",
    bgColor: "#F7DF1E",
    textColor: "#000000",
  },
  React: {
    icon: "/src/assets/icons/react/react-original.svg",
    bgColor: "#61DAFB",
    textColor: "#FFFFFF",
  },
  TypeScript: {
    icon: "/src/assets/icons/typescript/typescript-original.svg",
    bgColor: "#3178C6",
    textColor: "#FFFFFF",
  },
  "Next.js": {
    icon: "/src/assets/icons/nextjs/nextjs-original.svg",
    bgColor: "#000000",
    textColor: "#FFFFFF",
  },
  "Tailwind CSS": {
    icon: "/src/assets/icons/tailwindcss/tailwindcss-original.svg",
    bgColor: "#06B6D4",
    textColor: "#FFFFFF",
  },
  "Shadcn UI": {
    icon: "/src/assets/icons/shadcnui/shadcnui.svg",
    bgColor: "#000000",
    textColor: "#FFFFFF",
  },
  "Tanstack Query": {
    icon: "/src/assets/icons/tanstackquery/tanstackquery.svg",
    bgColor: "#FF4154",
    textColor: "#FFFFFF",
  },
  Zustand: {
    icon: "/src/assets/icons/zustand/zustand-original.svg",
    bgColor: "#443E38",
    textColor: "#FFFFFF",
  },
  Axios: {
    icon: "/src/assets/icons/axios/axios-plain.svg",
    bgColor: "#5A29E4",
    textColor: "#FFFFFF",
  },
  FCM: {
    icon: "/src/assets/icons/firebase/firebase-original.svg",
    bgColor: "#FFCA28",
    textColor: "#000000",
  },
  Electron: {
    icon: "/src/assets/icons/electron/electron-original.svg",
    bgColor: "#47848F",
    textColor: "#FFFFFF",
  },
  "Three.js": {
    icon: "/src/assets/icons/threejs/threejs-original.svg",
    bgColor: "#000000",
    textColor: "#FFFFFF",
  },
  WebSocket: {
    icon: "/src/assets/icons/socketio/socketio-original.svg",
    bgColor: "#010101",
    textColor: "#FFFFFF",
  },
  "Chakra UI": {
    icon: "/src/assets/icons/chakraui/chakraui-original.svg",
    bgColor: "#319795",
    textColor: "#FFFFFF",
  },
  Redux: {
    icon: "/src/assets/icons/redux/redux-original.svg",
    bgColor: "#764ABC",
    textColor: "#FFFFFF",
  },
  "Framer Motion": {
    icon: "/src/assets/icons/framermotion/framermotion-original.svg",
    bgColor: "#0055FF",
    textColor: "#FFFFFF",
  },
};

const Projects = () => {
  const navigate = useNavigate();
  const [selectedProject, setSelectedProject] = useState(projects[0]);

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            SSAFY에서 진행한 3개 프로젝트 모두 수상
          </p>
        </div>

        {/* 프로젝트 탭 */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {projects.map((project) => (
            <button
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                selectedProject.id === project.id
                  ? "bg-primary-600 text-white shadow-lg"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              {project.logo && (
                <img
                  src={project.logo}
                  alt={project.title}
                  className="w-5 h-5 object-contain"
                  style={{
                    filter:
                      selectedProject.id === project.id
                        ? "brightness(0) invert(1)"
                        : "none",
                  }}
                />
              )}
              {project.title.split(" ")[0]}
            </button>
          ))}
        </div>

        {/* 프로젝트 상세 */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 md:p-12 shadow-xl">
          {/* 헤더 */}
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              {/* 프로젝트 로고 */}
              {selectedProject.logo && (
                <div className="w-16 h-16 flex-shrink-0 bg-white dark:bg-gray-900 rounded-xl p-3 shadow-lg">
                  <img
                    src={selectedProject.logo}
                    alt={`${selectedProject.title} 로고`}
                    className="w-full h-full object-contain"
                  />
                </div>
              )}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                    {selectedProject.title}
                  </h3>
                  <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm font-semibold">
                    {selectedProject.subtitle.includes("1등")
                      ? "🥇 1등"
                      : "🥈 2등"}
                  </span>
                </div>
              </div>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
              {selectedProject.description}
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
              <span>📅 {selectedProject.period}</span>
              <span>👥 {selectedProject.team}</span>
              <span>🎯 {selectedProject.role}</span>
            </div>
          </div>

          {/* 기술 스택 */}
          <div className="mb-8">
            <h4 className="font-bold text-gray-900 dark:text-white mb-3">
              기술 스택
            </h4>
            <div className="flex flex-wrap gap-2">
              {selectedProject.techStack.map((tech) => {
                const config = techConfig[tech];
                return (
                  <div
                    key={tech}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-lg shadow hover:shadow-md transition-all transform hover:scale-105"
                    style={{
                      backgroundColor: config?.bgColor || "#F3F4F6",
                      color: config?.textColor || "#1F2937",
                    }}
                  >
                    {config?.icon && (
                      <img
                        src={config.icon}
                        alt={tech}
                        className="w-4 h-4 object-contain"
                        style={{
                          filter:
                            config.textColor === "#FFFFFF" &&
                            tech !== "TypeScript" &&
                            tech !== "Next.js" &&
                            tech !== "Zustand" &&
                            tech !== "Chakra UI" &&
                            tech !== "Figma" &&
                            tech !== "Tanstack Query"
                              ? "brightness(0) invert(1)"
                              : "none",
                        }}
                      />
                    )}
                    <span className="font-medium text-sm">{tech}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 주요 기능 */}
          <div className="mb-8">
            <h4 className="font-bold text-gray-900 dark:text-white mb-3">
              주요 기능
            </h4>
            <ul className="space-y-2">
              {selectedProject.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <svg
                    className="w-5 h-5 text-primary-600 mt-0.5 mr-2 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* 성과 */}
          <div className="mb-8">
            <h4 className="font-bold text-gray-900 dark:text-white mb-3">
              주요 성과
            </h4>
            <div className="grid md:grid-cols-2 gap-4">
              {selectedProject.achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-900 rounded-lg p-4 shadow"
                >
                  <div className="flex items-start">
                    <span className="text-2xl mr-3">⭐</span>
                    <p className="text-gray-700 dark:text-gray-300">
                      {achievement}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 링크 */}
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => navigate(`/project/${selectedProject.id}`)}
              className="flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
              상세 보기
            </button>
            {selectedProject.github && (
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </a>
            )}
            {selectedProject.demo && (
              <a
                href={selectedProject.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 border-2 border-primary-600 text-primary-600 dark:text-primary-400 dark:border-primary-400 rounded-lg font-semibold hover:bg-primary-50 dark:hover:bg-gray-800 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
