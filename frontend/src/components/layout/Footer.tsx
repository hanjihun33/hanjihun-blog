import { Link } from 'react-router-dom';
import { navData } from '../../data/nav-data';
import { PROFILE_IMAGE_URL } from '../../data/profile';
import { logo } from '../font/google';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-surface-900 text-white mt-24">
      <div className="max-w-6xl mx-auto px-5 py-16 md:px-8">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-12">
          <div className="shrink-0">
            <Link className="inline-flex items-center gap-2 no-underline" to="/">
              <img
                alt="profile"
                className="w-9 h-9 rounded-full object-cover ring-2 ring-surface-700"
                src={PROFILE_IMAGE_URL}
              />
              <span className="text-2xl font-bold text-white" style={logo.style}>
                Hanjihun
              </span>
            </Link>
            <p className="mt-3 text-sm text-surface-400 max-w-xs leading-relaxed">
              개발하며 배운 것들을 기록하는 개인 블로그입니다.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
            {navData.map(({ mainTitle, link, children }) => (
              <div key={mainTitle}>
                <span className="text-[11px] font-semibold uppercase tracking-widest text-surface-500">
                  {mainTitle}
                </span>
                <ul className="mt-3 flex flex-col gap-1.5">
                  {children.map(({ title, cLink }) => (
                    <Link
                      className="text-sm text-surface-400 hover:text-white transition-colors"
                      key={`${mainTitle}-${title}`}
                      to={link + cLink}
                    >
                      {title}
                    </Link>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-surface-800 flex flex-col md:flex-row items-center justify-between gap-3">
          <span className="text-xs text-surface-500">&copy; {year} Hanjihun. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <a
              className="text-surface-500 hover:text-white transition-colors text-xs"
              href="https://github.com/hanjihun33"
              rel="noreferrer"
              target="_blank"
            >
              GitHub
            </a>
            <a
              className="text-surface-500 hover:text-white transition-colors text-xs"
              href="https://www.linkedin.com/in/hanjihun-linkdin/"
              rel="noreferrer"
              target="_blank"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
