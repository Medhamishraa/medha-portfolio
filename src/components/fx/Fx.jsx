import { useEffect, useState } from 'react';
import { motion, useMotionValue, useReducedMotion, useScroll, useSpring } from 'framer-motion';

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 26, mass: 0.4 });
  return (
    <motion.div
      aria-hidden
      style={{ scaleX, backgroundImage: 'var(--grad)' }}
      className="fixed inset-x-0 top-0 z-[80] h-1 origin-left"
    />
  );
}

export function CursorGlow() {
  const reduce = useReducedMotion();
  const [on, setOn] = useState(false);
  const x = useMotionValue(-300);
  const y = useMotionValue(-300);
  const sx = useSpring(x, { stiffness: 140, damping: 22, mass: 0.35 });
  const sy = useSpring(y, { stiffness: 140, damping: 22, mass: 0.35 });
  const scale = useSpring(1, { stiffness: 220, damping: 20 });

  useEffect(() => {
    if (reduce || !window.matchMedia('(pointer: fine)').matches) return undefined;
    setOn(true);
    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const over = (e) => {
      const hot = e.target.closest?.('a, button, input, textarea, select, [data-cursor]');
      scale.set(hot ? 1.7 : 1);
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseover', over);
    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseover', over);
    };
  }, [reduce, x, y, scale]);

  if (!on) return null;

  return (
    <motion.div
      aria-hidden
      style={{ x: sx, y: sy, scale }}
      className="pointer-events-none fixed left-0 top-0 z-[75] mix-blend-multiply dark:mix-blend-screen"
    >
      <div
        className="-ml-28 -mt-28 h-56 w-56 rounded-full"
        style={{ background: 'radial-gradient(circle, var(--glow), transparent 62%)' }}
      />
    </motion.div>
  );
}

export function BackgroundFX() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute -left-24 -top-32 h-[26rem] w-[26rem] rounded-full bg-pink-300/40 blur-3xl motion-safe:animate-blob dark:bg-pink-500/15" />
      <div className="absolute -right-32 top-1/3 h-[30rem] w-[30rem] rounded-full bg-fuchsia-300/30 blur-3xl [animation-delay:-8s] motion-safe:animate-blob dark:bg-fuchsia-500/10" />
      <div className="absolute -bottom-32 left-1/4 h-[24rem] w-[24rem] rounded-full bg-coral/25 blur-3xl [animation-delay:-15s] motion-safe:animate-blob dark:bg-coral/10" />
    </div>
  );
}
