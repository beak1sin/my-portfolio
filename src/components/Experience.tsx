import { useEffect, useState } from "react";
import { experience, awards, languages } from "../data/portfolio";
import { supabase } from "../supabaseClient.ts";

interface Certificate {
  id: number | string;
  name: string;
  organization: string; // Supabase의 'issuer' 컬럼과 매칭
  certificateNumber: string; // Supabase의 'license_number' 컬럼과 매칭
  date: string; // Supabase의 'acquisition_date' 컬럼과 매칭
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

  const [certificates, setCertificates] = useState<Certificate[]>([]);

  // 5. 컴포넌트가 마운트될 때 Supabase에서 데이터를 fetch(가져오기)
  useEffect(() => {
    const fetchCertificates = async () => {
      // 'licenses'는 이전에 Supabase에서 생성한 테이블 이름입니다.
      const { data, error } = await supabase
        .from("licenses") // 👈 Supabase 테이블명
        .select("*") // 👈 모든 컬럼 가져오기
        .order("acquisition_date", { ascending: false }); // 👈 최신순 정렬 (선택사항)

      if (error) {
        console.error("Error fetching certificates:", error);
      } else if (data) {
        // 6. [중요] Supabase 컬럼명 -> React 컴포넌트 Prop 이름으로 매핑
        //    (예: Supabase의 'issuer' -> React의 'organization')
        const formattedData = data.map((cert) => ({
          id: cert.id,
          name: cert.name,
          organization: cert.issuer, // 👈 매핑
          certificateNumber: cert.license_number, // 👈 매핑
          date: cert.acquisition_date, // 👈 매핑
          details: cert.details,
        }));

        setCertificates(formattedData);
      }
    };

    fetchCertificates();
  }, []); // [] : 컴포넌트가 처음 로드될 때 1번만 실행

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-gradient">Experience & Awards</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            교육, 경력, 그리고 수상 내역
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* 경력 및 교육 */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              경력 및 교육
            </h3>
            <div className="space-y-6">
              {experience.map((exp) => (
                <div
                  key={exp.id}
                  className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-start">
                    <span className="text-3xl mr-4">{getIcon(exp.type)}</span>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                        {exp.title}
                      </h4>
                      <p className="text-primary-600 dark:text-primary-400 font-semibold mb-1">
                        {exp.organization}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                        {exp.period}
                      </p>
                      <p className="text-gray-700 dark:text-gray-300 mb-3">
                        {exp.description}
                      </p>
                      {exp.details.length > 0 && (
                        <ul className="space-y-1">
                          {exp.details.map((detail, index) => (
                            <li
                              key={index}
                              className="text-sm text-gray-600 dark:text-gray-400 flex items-start"
                            >
                              <span className="mr-2">•</span>
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 수상 및 자격증 */}
          <div>
            {/* 수상 내역 */}
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              수상 내역
            </h3>
            <div className="space-y-4 mb-12">
              {awards.map((award) => (
                <div
                  key={award.id}
                  className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-start">
                    <span className="text-3xl mr-4">
                      {award.title.includes("1등") ||
                      award.title.includes("최우수")
                        ? "🥇"
                        : "🥈"}
                    </span>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                        {award.title}
                      </h4>
                      <p className="text-primary-600 dark:text-primary-400 font-semibold mb-1">
                        {award.organization}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                        {award.date} • {award.project}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {award.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* 자격증 */}
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              자격증
            </h3>
            <div className="space-y-3 mb-12">
              {certificates.map((cert) => (
                <div
                  key={cert.id}
                  className="bg-white dark:bg-gray-900 rounded-lg p-4 shadow hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 dark:text-white">
                        {cert.name}
                      </h4>
                      <div className="flex gap-1">
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {cert.organization}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          ·
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {cert.certificateNumber}
                        </p>
                      </div>
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {cert.date}
                    </span>
                  </div>
                  {"details" in cert && (
                    <p className="text-xs text-primary-600 dark:text-primary-400 mt-1">
                      {cert.details}
                    </p>
                  )}
                </div>
              ))}
            </div>

            {/* 어학 */}
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              어학
            </h3>
            <div className="space-y-3">
              {languages.map((lang) => (
                <div
                  key={lang.id}
                  className="bg-white dark:bg-gray-900 rounded-lg p-4 shadow hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <h4 className="font-bold text-gray-900 dark:text-white">
                          {lang.name}
                        </h4>
                        <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm font-semibold">
                          {lang.level}
                        </span>
                      </div>
                      <div className="flex gap-1">
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {lang.organization}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          ·
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {lang.certificateNumber}
                        </p>
                      </div>
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {lang.date}
                    </span>
                  </div>
                  {lang.description && (
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      {lang.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
