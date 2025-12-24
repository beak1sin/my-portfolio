import { skills } from "../data/portfolio";
import { techConfig } from "../constants/techConfig";
import { motion } from "framer-motion";
import {
  fadeInUp,
  staggerContainer,
  staggerItem,
} from "../hooks/useScrollAnimation";

const Skills = () => {
  const techList = [
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
  ];

  return (
    <section
      id="skills"
      className="section-padding bg-neutral-50 dark:bg-neutral-800/30"
    >
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
            <span className="text-gradient">Skills</span>
          </h2>
          <p className="body-large">프로젝트를 통해 습득한 기술 스택입니다</p>
        </motion.div>

        {/* Skill Categories */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 gap-8 mb-16"
        >
          {skills.map((category) => (
            <motion.div
              key={category.category}
              variants={staggerItem}
              className="card rounded-3xl"
            >
              <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-6">
                {category.category}
              </h3>
              <div className="space-y-6">
                {category.items.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-neutral-800 dark:text-neutral-200">
                        {skill.name}
                      </span>
                      <span className="text-sm text-accent font-medium">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="relative h-1.5 bg-neutral-200 dark:bg-neutral-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1,
                          ease: [0.25, 0.1, 0.25, 1],
                          delay: 0.2,
                        }}
                        className="absolute h-full bg-gradient-to-r from-accent to-gradient-start rounded-full"
                      />
                    </div>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400">
                      {skill.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tech Stack Grid */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h3 className="text-xl font-semibold text-center text-neutral-800 dark:text-neutral-100 mb-8">
            기술 스택
          </h3>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3"
          >
            {techList.map((tech) => {
              const config = techConfig[tech];
              return (
                <motion.div
                  key={tech}
                  variants={staggerItem}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white dark:bg-neutral-800 shadow-sm border border-neutral-200 dark:border-neutral-700 transition-all"
                >
                  {config?.icon && (
                    <img
                      src={config.icon}
                      alt={tech}
                      className="w-5 h-5 object-contain"
                    />
                  )}
                  <span className="font-medium text-sm text-neutral-700 dark:text-neutral-300">
                    {tech}
                  </span>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
