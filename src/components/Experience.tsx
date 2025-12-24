import { useEffect, useState } from "react";
import {
  experience,
  awards,
  languages,
  certificates as localCertificates,
} from "../data/portfolio";
import { supabase } from "../supabaseClient.ts";
import { motion } from "framer-motion";
import {
  fadeInUp,
  staggerContainer,
  staggerItem,
} from "../hooks/useScrollAnimation";

interface Certificate {
  id: number | string;
  name: string;
  organization: string;
  certificateNumber: string;
  date: string;
  details?: string;
}

const Experience = () => {
  const getIcon = (type: string) => {
    switch (type) {
      case "education":
        return "🎓";
      case "work":
        return "💼";
      case "startup":
        return "🚀";
      default:
        return "📌";
    }
  };

  const [certificates, setCertificates] =
    useState<Certificate[]>(localCertificates);

  useEffect(() => {
    const fetchCertificates = async () => {
      try {
        const { data, error } = await supabase
          .from("licenses")
          .select("*")
          .order("acquisition_date", { ascending: false });

        if (error) {
          console.error("Error fetching certificates:", error);
          // Fallback to local data is already set as initial state
        } else if (data && data.length > 0) {
          const formattedData = data.map((cert) => ({
            id: cert.id,
            name: cert.name,
            organization: cert.issuer,
            certificateNumber: cert.license_number,
            date: cert.acquisition_date,
            details: cert.details,
          }));
          setCertificates(formattedData);
        }
      } catch (err) {
        console.error("Supabase connection failed, using local data:", err);
        // Keep using local data
      }
    };
    fetchCertificates();
  }, []);

  return (
    <section
      id="experience"
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
            <span className="text-gradient">Experience & Awards</span>
          </h2>
          <p className="body-large">교육, 경력, 그리고 수상 내역</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience & Education */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-6">
              경력 및 교육
            </h3>
            <div className="space-y-4">
              {experience.map((exp) => (
                <motion.div
                  key={exp.id}
                  variants={staggerItem}
                  whileHover={{ y: -2 }}
                  className="card rounded-2xl p-6 card-hover"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-2xl">{getIcon(exp.type)}</span>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-neutral-800 dark:text-neutral-100 mb-1">
                        {exp.title}
                      </h4>
                      <p className="text-accent font-medium text-sm mb-1">
                        {exp.organization}
                      </p>
                      <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-3">
                        {exp.period}
                      </p>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">
                        {exp.description}
                      </p>
                      {exp.details.length > 0 && (
                        <ul className="space-y-1">
                          {exp.details.map((detail, index) => (
                            <li
                              key={index}
                              className="text-xs text-neutral-500 dark:text-neutral-400 flex items-start gap-2"
                            >
                              <span className="text-accent">•</span>
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Awards, Certificates, Languages */}
          <div className="space-y-12">
            {/* Awards */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-6">
                수상 내역
              </h3>
              <div className="space-y-4">
                {awards.map((award) => (
                  <motion.div
                    key={award.id}
                    variants={staggerItem}
                    whileHover={{ y: -2 }}
                    className="card rounded-2xl p-6 card-hover"
                  >
                    <div className="flex items-start gap-4">
                      <span className="text-2xl">
                        {award.title.includes("1등") ||
                        award.title.includes("최우수")
                          ? "🥇"
                          : "🥈"}
                      </span>
                      <div className="flex-1">
                        <h4 className="font-semibold text-neutral-800 dark:text-neutral-100 mb-1">
                          {award.title}
                        </h4>
                        <p className="text-accent font-medium text-sm mb-1">
                          {award.organization}
                        </p>
                        <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-2">
                          {award.date} • {award.project}
                        </p>
                        <p className="text-xs text-neutral-600 dark:text-neutral-400">
                          {award.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Certificates */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-6">
                자격증
              </h3>
              <div className="space-y-3">
                {certificates.map((cert) => (
                  <motion.div
                    key={cert.id}
                    variants={staggerItem}
                    whileHover={{ y: -1 }}
                    className="card rounded-xl p-4 card-hover"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium text-neutral-800 dark:text-neutral-100 text-sm">
                          {cert.name}
                        </h4>
                        <p className="text-xs text-neutral-500 dark:text-neutral-400">
                          {cert.organization} · {cert.certificateNumber}
                        </p>
                        {cert.details && (
                          <p className="text-xs text-accent mt-1">
                            {cert.details}
                          </p>
                        )}
                      </div>
                      <span className="text-xs text-neutral-400 shrink-0 ml-4">
                        {cert.date}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Languages */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-6">
                어학
              </h3>
              <div className="space-y-3">
                {languages.map((lang) => (
                  <motion.div
                    key={lang.id}
                    variants={staggerItem}
                    whileHover={{ y: -1 }}
                    className="card rounded-xl p-4 card-hover"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center gap-3 mb-1">
                          <h4 className="font-medium text-neutral-800 dark:text-neutral-100 text-sm">
                            {lang.name}
                          </h4>
                          <span className="px-2 py-0.5 bg-accent/10 text-accent rounded-full text-xs font-semibold">
                            {lang.level}
                          </span>
                        </div>
                        <p className="text-xs text-neutral-500 dark:text-neutral-400">
                          {lang.organization} · {lang.certificateNumber}
                        </p>
                        {lang.description && (
                          <p className="text-xs text-neutral-400 mt-1">
                            {lang.description}
                          </p>
                        )}
                      </div>
                      <span className="text-xs text-neutral-400 shrink-0 ml-4">
                        {lang.date}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
