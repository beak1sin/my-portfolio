import { skills } from "../data/portfolio";
import { techConfig } from "../constants/techConfig";

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            프로젝트를 통해 습득한 기술 스택입니다
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {skills.map((category) => (
            <div
              key={category.category}
              className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                {category.category}
              </h3>
              <div className="space-y-6">
                {category.items.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-gray-800 dark:text-gray-200">
                        {skill.name}
                      </span>
                      <span className="text-sm text-primary-600 dark:text-primary-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-2">
                      <div
                        className="bg-linear-to-r from-primary-600 to-blue-600 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {skill.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* 추가 기술 - 아이콘과 브랜드 컬러 */}
        <div className="mt-12">
          <h3 className="text-xl font-bold mb-6 text-center text-gray-900 dark:text-white">
            기술 스택
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "JavaScript",
              "React",
              "TypeScript",
              "Next.js",
              "Tanstack Query",
              "Zustand",
              "Redux",
              "Axios",
              "Tailwind CSS",
              "Chakra UI",
              "Framer Motion",
              "Electron",
              "WebSocket",
              "FCM",
              "Three.js",
              "Git",
              "Jira",
              "Figma",
            ].map((tech) => {
              const config = techConfig[tech];
              return (
                <div
                  key={tech}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg shadow hover:shadow-lg transition-all transform hover:scale-105"
                  style={{
                    backgroundColor: config?.bgColor || "#E5E7EB",
                    color: config?.textColor || "#000000",
                  }}
                >
                  {config?.icon && (
                    <img
                      src={config.icon}
                      alt={tech}
                      className="w-5 h-5 object-contain"
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
      </div>
    </section>
  );
};

export default Skills;
