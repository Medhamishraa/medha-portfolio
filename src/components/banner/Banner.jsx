import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useMotionValue, useReducedMotion } from 'framer-motion';
import { FiArrowDown, FiArrowUpRight, FiDownload, FiMapPin } from 'react-icons/fi';
import { heroIcons, roles, socials, valueProp } from '../../data/content';
import { FloatingEmoji } from '../fx/FloatingEmoji';
import { Magnetic } from '../fx/Magnetic';
import { EASE, fadeUp, stagger } from '../../lib/motion';

function RotatingRole() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % roles.length), 2600);
    return () => clearInterval(t);
  }, []);

  return (
    <span className="relative inline-grid overflow-hidden align-bottom">
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={roles[i]}
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: '-100%', opacity: 0 }}
          transition={{ duration: 0.45, ease: EASE }}
          className="text-gradient whitespace-nowrap"
        >
          {roles[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export const Banner = () => {
  const reduce = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const [imgOk, setImgOk] = useState(true);

  const onMove = (e) => {
    if (reduce) return;
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };

  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <section
      id="home"
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="relative flex min-h-[100svh] items-center overflow-hidden pb-16 pt-28"
    >
      {heroIcons.map((e) => (
        <FloatingEmoji key={e.className} {...e} mx={mx} my={my} />
      ))}

      <motion.div
        initial="hidden"
        animate="show"
        variants={stagger}
        className="container-x grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]"
      >
        <div>
          <motion.p variants={fadeUp} className="eyebrow">
            Hi, I'm
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="mt-3 font-display text-[clamp(2.6rem,7vw,4.8rem)] font-bold leading-[1.04] tracking-tight"
          >
            Medha Mishra
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-3 font-display text-[clamp(1.35rem,3.4vw,2rem)] font-semibold"
          >
            <RotatingRole />
          </motion.p>
          <motion.p variants={fadeUp} className="mt-5 max-w-xl text-lg text-muted">
            {valueProp}
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-3">
            <Magnetic>
              <a href="#projects" className="btn-primary">
                View my work <FiArrowUpRight />
              </a>
            </Magnetic>
            <Magnetic>
              <a href="/resume.pdf" download="Medha-Mishra-Resume.pdf" className="btn-ghost">
                <FiDownload /> Download résumé
              </a>
            </Magnetic>
            <a
              href="#contact"
              className="px-2 font-display font-semibold text-pink-600 underline decoration-pink-300 decoration-2 underline-offset-4 transition hover:decoration-pink-500 dark:text-pink-400"
            >
              Get in touch
            </a>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-8 flex gap-3">
            {socials.map(({ label, href, Icon }) => (
              <motion.a
                key={label}
                whileHover={{ scale: 1.12, y: -2 }}
                whileTap={{ scale: 0.94 }}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="grid h-11 w-11 place-items-center rounded-full border border-line bg-surface/80 text-lg text-muted shadow-card backdrop-blur transition-colors hover:border-pink-400 hover:text-pink-500"
              >
                <Icon />
              </motion.a>
            ))}
          </motion.div>
        </div>

        <motion.div variants={fadeUp} className="relative mx-auto w-full max-w-sm">
          <div className="absolute inset-0 -z-10 scale-110 rounded-[2.5rem] bg-grad opacity-25 blur-2xl" />
          <motion.div
            animate={reduce ? undefined : { y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="relative overflow-hidden rounded-[2.5rem] border border-pink-200/70 bg-surface p-2 shadow-lift dark:border-line"
          >
            <div className="overflow-hidden rounded-[2rem]" style={{ backgroundImage: 'var(--grad)' }}>
              {imgOk ? (
                <img
                  src="/medha.jpg"
                  alt="Portrait of Medha Mishra"
                  onError={() => setImgOk(false)}
                  className="aspect-[4/5] w-full object-cover"
                />
              ) : (
                <div className="grid aspect-[4/5] w-full place-items-center">
                  <span className="font-display text-7xl font-bold text-white/90">MM</span>
                </div>
              )}
            </div>
            <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-full bg-surface/85 px-4 py-1.5 text-sm font-semibold shadow-card backdrop-blur">
              <FiMapPin className="text-pink-500" aria-hidden /> Delhi, India
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      <a href="#about" aria-label="Scroll to about section" className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 md:block">
        <motion.span
          animate={reduce ? undefined : { y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
          className="grid h-11 w-11 place-items-center rounded-full border border-line bg-surface/70 text-muted backdrop-blur"
        >
          <FiArrowDown />
        </motion.span>
      </a>
    </section>
  );
};
