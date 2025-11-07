import { skills } from "../data/portfolio";

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
  "React.js": {
    icon: "/src/assets/icons/react/react-original.svg",
    bgColor: "#61DAFB",
    textColor: "#FFFFFF",
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
  Git: {
    icon: "/src/assets/icons/git/git-original.svg",
    bgColor: "#F05032",
    textColor: "#FFFFFF",
  },
  Jira: {
    icon: "/src/assets/icons/jira/jira-original.svg",
    bgColor: "#0052CC",
    textColor: "#FFFFFF",
  },
  Figma: {
    icon: "/src/assets/icons/figma/figma-original.svg",
    bgColor: "#F24E1E",
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
  Redux: {
    icon: "/src/assets/icons/redux/redux-original.svg",
    bgColor: "#764ABC",
    textColor: "#FFFFFF",
  },
  Axios: {
    icon: "/src/assets/icons/axios/axios-plain.svg",
    bgColor: "#5A29E4",
    textColor: "#FFFFFF",
  },
  "Tailwind CSS": {
    icon: "/src/assets/icons/tailwindcss/tailwindcss-original.svg",
    bgColor: "#06B6D4",
    textColor: "#FFFFFF",
  },
  "Chakra UI": {
    icon: "/src/assets/icons/chakraui/chakraui-original.svg",
    bgColor: "#319795",
    textColor: "#FFFFFF",
  },
  "Framer Motion": {
    icon: "/src/assets/icons/framermotion/framermotion-original.svg",
    bgColor: "#0055FF",
    textColor: "#FFFFFF",
  },
  Electron: {
    icon: "/src/assets/icons/electron/electron-original.svg",
    bgColor: "#47848F",
    textColor: "#FFFFFF",
  },
  WebSocket: {
    icon: "/src/assets/icons/socketio/socketio-original.svg",
    bgColor: "#010101",
    textColor: "#FFFFFF",
  },
  FCM: {
    icon: "/src/assets/icons/firebase/firebase-original.svg",
    bgColor: "#FFCA28",
    textColor: "#000000",
  },
  "Three.js": {
    icon: "/src/assets/icons/threejs/threejs-original.svg",
    bgColor: "#000000",
    textColor: "#FFFFFF",
  },
  "REST API": {
    icon: "/src/assets/icons/nodejs/nodejs-original.svg",
    bgColor: "#5B9E58",
    textColor: "#FFFFFF",
  },
  "Shadcn UI": {
    icon: "/src/assets/icons/shadcnui/shadcnui.svg",
    bgColor: "#000000",
    textColor: "#FFFFFF",
  },
};

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
                        className="bg-gradient-to-r from-primary-600 to-blue-600 h-2 rounded-full transition-all duration-1000"
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
