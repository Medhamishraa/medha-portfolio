import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion';

const hoverTransition = {
  scale: { type: 'spring', stiffness: 300, damping: 15 },
  rotate: { duration: 0.5, ease: 'easeInOut' },
};

/**
 * Inline sticker: idle float + hover wiggle + drag-to-throw with spring-back.
 * Used on its own next to headings, and as the inner engine of FloatingEmoji.
 */
export function Sticker({ children, className = '', dur = 5, delay = 0, drift = 10 }) {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <span aria-hidden className={`inline-block select-none ${className}`}>
        {children}
      </span>
    );
  }

  return (
    <motion.span
      aria-hidden
      className={`inline-block ${className}`}
      animate={{ y: [0, -drift, 0], rotate: [-5, 5, -5] }}
      transition={{ duration: dur, delay, repeat: Infinity, ease: 'easeInOut' }}
    >
      <motion.span
        drag
        dragSnapToOrigin
        dragElastic={0.2}
        dragTransition={{ bounceStiffness: 280, bounceDamping: 14 }}
        whileHover={{ scale: 1.3, rotate: [0, -14, 10, -6, 0], transition: hoverTransition }}
        whileTap={{ scale: 1.12 }}
        className="inline-block cursor-grab select-none drop-shadow-[0_8px_18px_rgba(236,72,153,0.35)] active:cursor-grabbing"
      >
        {children}
      </motion.span>
    </motion.span>
  );
}

/**
 * Absolutely positioned icon with cursor parallax on top of the Sticker behavior.
 * mx / my are normalized (-0.5..0.5) motion values from the hero's mouse position.
 */
export function FloatingEmoji({ Icon, className = '', size = 'text-3xl', depth = 22, dur = 5, delay = 0, mx, my }) {
  const reduce = useReducedMotion();
  const zero = useMotionValue(0);
  const px = useTransform(mx ?? zero, (v) => v * depth);
  const py = useTransform(my ?? zero, (v) => v * depth);
  const sx = useSpring(px, { stiffness: 55, damping: 16, mass: 0.6 });
  const sy = useSpring(py, { stiffness: 55, damping: 16, mass: 0.6 });

  if (reduce) {
    return (
      <span aria-hidden className={`absolute select-none opacity-80 ${size} ${className}`}>
        <Icon />
      </span>
    );
  }

  return (
    <motion.div aria-hidden style={{ x: sx, y: sy }} className={`absolute z-[2] ${className}`}>
      <Sticker dur={dur} delay={delay}>
        <span className={size}>
          <Icon />
        </span>
      </Sticker>
    </motion.div>
  );
}
