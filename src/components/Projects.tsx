import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { projects } from "../data/portfolio";
import { techConfig } from "../constants/techConfig";
import { motion, AnimatePresence } from "framer-motion";
import {
  fadeInUp,
  staggerContainer,
  staggerItem,
} from "../hooks/useScrollAnimation";

const Projects = () => {
  const navigate = useNavigate();
  const [selectedProject, setSelectedProject] = useState(projects[0]);

  return (
    <section id="projects" className="section-padding bg-white dark:bg-black">
      <div className="container-wide">
        {/* Section Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="heading-section mb-4">
            <span className="text-gradient">Projects</span>
          </h2>
          <p className="body-large">SSAFY에서 진행한 3개 프로젝트 모두 수상</p>
        </motion.div>

        {/* Project Tabs */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {projects.map((project) => (
            <motion.button
              key={project.id}
              variants={staggerItem}
              onClick={() => setSelectedProject(project)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium text-sm transition-all ${
                selectedProject.id === project.id
                  ? "bg-accent text-white shadow-lg"
                  : "bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700"
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
            </motion.button>
          ))}
        </motion.div>

        {/* Project Detail */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedProject.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="card rounded-3xl p-8 md:p-12"
          >
            {/* Header */}
            <div className="mb-10">
              <div className="flex items-center gap-4 mb-6">
                {selectedProject.logo && (
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="w-16 h-16 shrink-0 bg-white dark:bg-neutral-900 rounded-2xl p-3 shadow-lg"
                  >
                    <img
                      src={selectedProject.logo}
                      alt={`${selectedProject.title} 로고`}
                      className="w-full h-full object-contain"
                    />
                  </motion.div>
                )}
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-2xl md:text-3xl font-bold text-neutral-800 dark:text-neutral-100">
                      {selectedProject.title}
                    </h3>
                    <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-semibold">
                      {selectedProject.subtitle.includes("외주")
                        ? "🏢 외주"
                        : selectedProject.subtitle.includes("1등")
                          ? "🥇 1등"
                          : "🥈 2등"}
                    </span>
                  </div>
                </div>
              </div>

              <p className="body-default mb-6">{selectedProject.description}</p>

              <div className="flex flex-wrap gap-6 text-sm text-neutral-500 dark:text-neutral-400">
                <span className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  {selectedProject.period}
                </span>
                <span className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                    />
                  </svg>
                  {selectedProject.team}
                </span>
                <span className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                  {selectedProject.role}
                </span>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="mb-10">
              <h4 className="font-semibold text-neutral-800 dark:text-neutral-100 mb-4">
                기술 스택
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.techStack.map((tech) => {
                  const config = techConfig[tech];
                  return (
                    <motion.div
                      key={tech}
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700"
                    >
                      {config?.icon && (
                        <img
                          src={config.icon}
                          alt={tech}
                          className="w-4 h-4 object-contain"
                        />
                      )}
                      <span className="font-medium text-sm text-neutral-700 dark:text-neutral-300">
                        {tech}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Features & Achievements Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-10">
              {/* Features */}
              <div>
                <h4 className="font-semibold text-neutral-800 dark:text-neutral-100 mb-4">
                  주요 기능
                </h4>
                <ul className="space-y-3">
                  {selectedProject.features.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-start gap-3"
                    >
                      <svg
                        className="w-5 h-5 text-accent shrink-0 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-neutral-600 dark:text-neutral-400">
                        {feature}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Achievements */}
              <div>
                <h4 className="font-semibold text-neutral-800 dark:text-neutral-100 mb-4">
                  주요 성과
                </h4>
                <div className="space-y-3">
                  {selectedProject.achievements.map((achievement, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-start gap-3 p-3 bg-white dark:bg-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-700"
                    >
                      <span className="text-lg">⭐</span>
                      <span className="text-sm text-neutral-600 dark:text-neutral-400">
                        {achievement}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 justify-center pt-6 border-t border-neutral-200 dark:border-neutral-700">
              <motion.button
                onClick={() => navigate(`/project/${selectedProject.id}`)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary px-8"
              >
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
                상세 보기
              </motion.button>
              {selectedProject.github && (
                <motion.a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center px-6 py-3 bg-neutral-800 dark:bg-neutral-100 text-white dark:text-neutral-800 rounded-full font-medium text-sm transition-all"
                >
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  GitHub
                </motion.a>
              )}
              {selectedProject.demo && (
                <motion.a
                  href={selectedProject.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-secondary px-8"
                >
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                  Live Demo
                </motion.a>
              )}
              {selectedProject.figma && (
                <motion.a
                  href={selectedProject.figma}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center px-6 py-3 bg-[#F24E1E] text-white rounded-full font-medium text-sm transition-all hover:bg-[#D9451A]"
                >
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zM8.148 24c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.588 4.539zm-.001-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02c1.665 0 3.019-1.355 3.019-3.02v-3.019H8.147zM8.148 15.02H3.559c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V7.51H3.561zM8.148 8.981H3.559c-2.476 0-4.49-2.014-4.49-4.49S1.084 0 3.559 0h4.588v8.981zM3.561 1.472c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.019 3.019 3.019h3.117V1.472H3.561zM15.852 15.02h-4.588V6.04h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49zm-3.117-7.51v6.039h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117z" />
                  </svg>
                  Figma
                </motion.a>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
