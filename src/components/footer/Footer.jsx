import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { FiArrowUp, FiHeart } from 'react-icons/fi';
import { navLinks, socials } from '../../data/content';

export const Footer = () => {
  return (
    <footer className="border-t border-line bg-surface/60">
      <div className="container-x flex flex-col gap-10 py-12 md:flex-row md:items-start md:justify-between">
        <div>
          <a href="#home" className="font-display text-2xl font-bold tracking-tight">
            medha<span className="text-gradient">.</span>
          </a>
          <p className="mt-2 max-w-xs text-sm text-muted">
            Software engineer with an ML/AI edge, building products that feel good to use.
          </p>
        </div>

        <nav aria-label="Footer" className="grid grid-cols-2 gap-x-10 gap-y-2 text-sm">
          {navLinks.map(({ label, href }) => (
            <a key={href} href={href} className="text-muted transition-colors hover:text-pink-500">
              {label}
            </a>
          ))}
        </nav>

        <div className="flex gap-3">
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
      </div>

      <div className="border-t border-line">
        <div className="container-x flex flex-wrap items-center justify-between gap-3 py-5 text-sm text-muted">
          <p>© {new Date().getFullYear()} Medha Mishra. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with React + Framer Motion <FiHeart className="text-pink-500" aria-hidden />
          </p>
        </div>
      </div>
    </footer>
  );
};

export function BackToTop() {
  const reduce = useReducedMotion();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 480);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          whileHover={{ y: -3, scale: 1.06 }}
          whileTap={{ scale: 0.94 }}
          onClick={() => window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' })}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-[65] grid h-12 w-12 place-items-center rounded-full text-white shadow-lift"
          style={{ backgroundImage: 'var(--grad)' }}
        >
          <FiArrowUp />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
