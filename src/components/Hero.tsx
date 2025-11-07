import { personalInfo } from "../data/portfolio";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 pt-16 relative overflow-hidden"
    >
      {/* 배경 이미지 - 오른쪽에서 왼쪽으로 그라디언트 */}
      <div
        className="absolute top-16 right-0 w-1/2 h-1/3 opacity-30 dark:opacity-15"
        style={{
          maskImage:
            "linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0) 100%)",
          WebkitMaskImage:
            "linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0) 100%)",
        }}
      >
        <img
          src="/src/assets/background.png"
          alt="background"
          className="w-full h-full object-cover object-right"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center animate-fade-in">
          {/* 인사말 */}
          <p className="text-primary-600 dark:text-primary-400 font-semibold mb-4 text-lg">
            안녕하세요 👋
          </p>

          {/* 이름 */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-gradient">{personalInfo.name}</span>
          </h1>

          {/* 타이틀 */}
          <h2 className="text-2xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-6">
            {personalInfo.title}
          </h2>

          {/* 설명 */}
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
            {personalInfo.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button
              onClick={scrollToContact}
              className="px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              연락하기
            </button>
            <a
              href="/portfolio.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              📄 PDF 포트폴리오
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border-2 border-primary-600 text-primary-600 dark:text-primary-400 dark:border-primary-400 rounded-lg font-semibold hover:bg-primary-50 dark:hover:bg-gray-800 transition-all"
            >
              GitHub 보기
            </a>
          </div>

          {/* 스크롤 다운 애니메이션 */}
          <div className="animate-bounce-slow mt-16">
            <svg
              className="w-6 h-6 mx-auto text-gray-400"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
