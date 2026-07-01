import {
  personalInfo,
  aboutText,
  educationList,
  researchInterests,
  papers,
  otherWorks,
  academicActivities,
  navItems,
} from "../content";

function Home() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-[#fafaf9] text-[#2a2a2a]">
      {/* 顶部导航 */}
      <nav className="sticky top-0 z-50 bg-[#fafaf9]/90 backdrop-blur-sm border-b border-[#e8e8e6]">
        <div className="max-w-3xl mx-auto px-6 h-14 flex items-center justify-between">
          <span className="text-[15px] font-semibold tracking-wide text-[#3d5a4c]">
            {personalInfo.name}
          </span>
          <div className="hidden sm:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-[13px] text-[#5a5a58] hover:text-[#3d5a4c] transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </div>
          {/* 移动端导航 */}
          <div className="flex sm:hidden items-center gap-4">
            {navItems.slice(0, 3).map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-[12px] text-[#5a5a58] hover:text-[#3d5a4c] transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* 主内容区 */}
      <main className="max-w-3xl mx-auto px-6 pt-16 sm:pt-20 pb-6">
        {/* 身份区 */}
        <header className="mb-20">
          <h1 className="text-[32px] sm:text-[38px] font-bold text-[#1a1a1a] tracking-tight mb-4 leading-tight">
            {personalInfo.name}
          </h1>
          <p className="text-[16px] sm:text-[17px] text-[#3d5a4c] font-medium mb-2">
            {personalInfo.title}
          </p>
          <p className="text-[15px] text-[#5a5a58] mb-4">
            {personalInfo.institution}
          </p>
          <p className="text-[14px] text-[#7a7a78]">
            <span>邮箱：{personalInfo.email}</span>
          </p>
        </header>

        {/* 关于我 */}
        <section id="about" className="mb-16 scroll-mt-[5rem]">
          <h2 className="text-[18px] font-semibold text-[#1a1a1a] mb-5 tracking-wide">
            关于我
          </h2>
          <div className="space-y-3">
            {aboutText.map((paragraph, index) => (
              <p key={index} className="text-[15px] leading-[1.85] text-[#3a3a38]">
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        {/* 教育背景 */}
        <section id="education" className="mb-16 scroll-mt-[5rem]">
          <h2 className="text-[18px] font-semibold text-[#1a1a1a] mb-5 tracking-wide">
            教育背景
          </h2>
          <div className="space-y-5">
            {educationList.map((edu, index) => (
              <div key={index} className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                <div>
                  <p className="text-[15px] font-medium text-[#2a2a2a]">
                    {edu.school}
                  </p>
                  <p className="text-[14px] text-[#5a5a58]">
                    {edu.department} · {edu.degree}
                  </p>
                </div>
                <span className="text-[13px] text-[#8a8a88] shrink-0">
                  {edu.period}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* 研究兴趣 */}
        <section id="research" className="mb-16 scroll-mt-[5rem]">
          <h2 className="text-[18px] font-semibold text-[#1a1a1a] mb-5 tracking-wide">
            研究兴趣
          </h2>
          <div className="space-y-2">
            {researchInterests.map((line, index) => (
              <p key={index} className="text-[15px] leading-[1.85] text-[#3a3a38]">
                {line}
              </p>
            ))}
          </div>
        </section>

        {/* 代表性论文 */}
        <section id="papers" className="mb-16 scroll-mt-[5rem]">
          <h2 className="text-[18px] font-semibold text-[#1a1a1a] mb-5 tracking-wide">
            代表性论文
          </h2>
          <ol className="space-y-6">
            {papers.map((paper, index) => (
              <li key={index} className="pl-0">
                <div className="flex gap-3">
                  <span className="text-[13px] text-[#8a8a88] shrink-0 mt-[3px] font-medium">
                    {index + 1}.
                  </span>
                  <div>
                    <p className="text-[15px] leading-[1.75] text-[#2a2a2a] mb-1">
                      {paper.title}
                    </p>
                    <p className="text-[14px] text-[#6a6a68] mb-0.5">
                      {paper.authors}
                    </p>
                    <p className="text-[14px] text-[#6a6a68]">
                      {paper.journal}{paper.year}
                    </p>
                    {paper.note && (
                      <p className="text-[13px] text-[#8a8a88] mt-1.5 leading-[1.6]">
                        {paper.note}
                      </p>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* 其他研究与学术活动 */}
        <section id="others" className="mb-12 scroll-mt-[5rem]">
          <h2 className="text-[18px] font-semibold text-[#1a1a1a] mb-5 tracking-wide">
            其他研究与学术活动
          </h2>

          <div className="mb-6">
            <h3 className="text-[14px] font-medium text-[#5a5a58] mb-3">
              其他写作
            </h3>
            <div className="space-y-4">
              {otherWorks.map((work, index) => (
                <div key={index}>
                  <p className="text-[15px] leading-[1.75] text-[#2a2a2a]">
                    {work.title}
                  </p>
                  <p className="text-[14px] text-[#5a5a58]">
                    {work.venue}
                    {work.year && `，${work.year}`}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-[14px] font-medium text-[#5a5a58] mb-3">
              学术活动
            </h3>
            <ul className="space-y-1">
              {academicActivities.map((activity, index) => (
                <li key={index} className="text-[15px] text-[#3a3a38]">
                  {activity}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      {/* 页脚 */}
      <footer className="border-t border-[#e8e8e6] pb-24 pt-8">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-[13px] text-[#9a9a98]">
            &copy; {personalInfo.name} · 持续更新中
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
