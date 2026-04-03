import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { navData } from '../../data/nav-data';
import { PROFILE_IMAGE_URL } from '../../data/profile';
import styles from '../../styles/components/layout/navbar.module.css';
import { logo } from '../font/google';
import { menuCloseIcon, menuOpenIcon } from '../svg/icons';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hide, setHide] = useState(false);
  const [pageY, setPageY] = useState(0);
  const [openMenuIdx, setOpenMenuIdx] = useState<number | null>(null);
  const menuRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (ticking) {
        return;
      }

      requestAnimationFrame(() => {
        const y = window.scrollY;
        setHide(y > 60 && y > pageY);
        setPageY(y);
        ticking = false;
      });

      ticking = true;
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [pageY]);

  useEffect(() => {
    const handler = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpenMenuIdx(null);
      }
    };

    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <div className={styles.navWrapper}>
      <nav
        className={`${hide ? styles.hide : ''} w-full bg-white/80 backdrop-blur-md border-b border-surface-200/50 px-5 lg:px-8 py-3.5 transition-transform duration-300`}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link className="flex items-center gap-2.5 shrink-0 group" to="/">
            <img
              alt="profile"
              className="w-8 h-8 rounded-full object-cover ring-2 ring-primary-100 group-hover:ring-primary-300 transition-all"
              src={PROFILE_IMAGE_URL}
            />
            <span className="text-xl font-bold text-primary-950 hidden sm:block" style={logo.style}>
              Hanjihun
            </span>
          </Link>

          <ul className="hidden lg:flex items-center gap-0.5" ref={menuRef}>
            {navData.map((nav, idx) => (
              <li className="relative" key={nav.mainTitle}>
                <button
                  className="px-4 py-2 text-sm font-medium text-surface-600 rounded-full hover:text-primary-700 hover:bg-primary-50 transition-all cursor-pointer"
                  onClick={() => setOpenMenuIdx(openMenuIdx === idx ? null : idx)}
                >
                  {nav.mainTitle}
                </button>
                {openMenuIdx === idx ? (
                  <div className="absolute right-0 top-full mt-2 w-52 rounded-2xl bg-white border border-surface-100 py-2 shadow-lg shadow-surface-200/50 z-50">
                    {nav.children.map((child) => (
                      <Link
                        className="flex items-center gap-2 px-4 py-2.5 text-sm text-surface-600 hover:text-primary-700 hover:bg-primary-50/60 transition-colors"
                        key={`${nav.mainTitle}-${child.title}`}
                        onClick={() => setOpenMenuIdx(null)}
                        to={`${nav.link}${child.cLink}`}
                      >
                        {child.title}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </li>
            ))}
          </ul>

          <button
            className="lg:hidden p-2 rounded-full hover:bg-surface-100 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? menuCloseIcon : menuOpenIcon}
          </button>
        </div>

        <div
          className={`overflow-hidden transition-all duration-300 lg:hidden max-w-6xl mx-auto ${mobileOpen ? 'max-h-screen opacity-100 mt-4' : 'max-h-0 opacity-0'}`}
        >
          <div className="flex flex-col gap-1 pb-3">
            {navData.map((nav) => (
              <div key={nav.mainTitle}>
                <div className="px-3 py-1.5 text-[11px] font-semibold text-surface-400 uppercase tracking-widest">
                  {nav.mainTitle}
                </div>
                {nav.children.map((child) => (
                  <Link
                    className="block px-3 py-2 text-sm text-surface-700 rounded-xl hover:bg-primary-50 transition-colors"
                    key={`${nav.mainTitle}-${child.title}`}
                    onClick={() => setMobileOpen(false)}
                    to={`${nav.link}${child.cLink}`}
                  >
                    {child.title}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
}
