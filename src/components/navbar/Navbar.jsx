import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiDownload, FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi';
import { navLinks, socials } from '../../data/content';
import { useTheme } from '../../hooks/useTheme';

export const Navbar = () => {
  const { theme, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // scroll-spy
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' },
    );
    navLinks.forEach(({ href }) => {
      const el = document.getElementById(href.slice(1));
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // lock body scroll while the mobile panel is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[70] transition-all duration-300 ${
        scrolled
          ? 'border-b border-line bg-surface/75 py-2 shadow-card backdrop-blur-xl'
          : 'bg-transparent py-4'
      }`}
    >
      <nav className="container-x flex items-center justify-between gap-3" aria-label="Primary">
        <a href="#home" className="font-display text-xl font-bold tracking-tight">
          medha<span className="text-gradient">.</span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map(({ label, href }) => {
            const isActive = active === href.slice(1);
            return (
              <li key={href}>
                <a
                  href={href}
                  aria-current={isActive ? 'true' : undefined}
                  className={`relative rounded-full px-3 py-1.5 text-[13px] font-medium transition-colors ${
                    isActive ? 'text-pink-600 dark:text-pink-400' : 'text-muted hover:text-ink'
                  }`}
                >
                  {label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-pink-100 dark:bg-pink-500/15"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            className="grid h-10 w-10 place-items-center rounded-full border border-line bg-surface/70 text-ink backdrop-blur transition hover:border-pink-400 hover:text-pink-500"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={theme}
                initial={{ y: 8, opacity: 0, rotate: -30 }}
                animate={{ y: 0, opacity: 1, rotate: 0 }}
                exit={{ y: -8, opacity: 0, rotate: 30 }}
                transition={{ duration: 0.2 }}
              >
                {theme === 'dark' ? <FiSun /> : <FiMoon />}
              </motion.span>
            </AnimatePresence>
          </button>

          <a href="/resume.pdf" download className="btn-primary hidden !px-5 !py-2 text-sm sm:inline-flex">
            <FiDownload /> Résumé
          </a>

          <button
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="grid h-10 w-10 place-items-center rounded-full border border-line bg-surface/70 text-ink backdrop-blur lg:hidden"
          >
            <FiMenu />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-[71] bg-plum-ink/40 backdrop-blur-sm lg:hidden"
            />
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 32 }}
              className="fixed inset-y-0 right-0 z-[72] flex w-72 max-w-[85vw] flex-col gap-1.5 border-l border-line bg-surface p-6 lg:hidden"
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="font-display text-lg font-bold">
                  medha<span className="text-gradient">.</span>
                </span>
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="grid h-10 w-10 place-items-center rounded-full border border-line"
                >
                  <FiX />
                </button>
              </div>

              {navLinks.map(({ label, href }, i) => (
                <motion.a
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  initial={{ x: 24, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.04 * i }}
                  className={`rounded-xl px-4 py-2.5 font-display text-lg font-semibold ${
                    active === href.slice(1)
                      ? 'bg-pink-100 text-pink-600 dark:bg-pink-500/15 dark:text-pink-400'
                      : 'text-ink hover:bg-bgc'
                  }`}
                >
                  {label}
                </motion.a>
              ))}

              <a href="/resume.pdf" download className="btn-primary mt-4 justify-center">
                <FiDownload /> Download résumé
              </a>

              <div className="mt-auto flex gap-3 pt-6">
                {socials.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="grid h-10 w-10 place-items-center rounded-full border border-line text-muted transition hover:border-pink-400 hover:text-pink-500"
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};
