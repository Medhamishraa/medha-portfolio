import { motion } from 'framer-motion';
import { fadeUp, stagger, viewportOnce } from '../../lib/motion';
import { Sticker } from './FloatingEmoji';

export function Section({ id, className = '', children }) {
  return (
    <motion.section
      id={id}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      variants={stagger}
      className={`scroll-mt-24 py-20 sm:py-28 ${className}`}
    >
      <div className="container-x">{children}</div>
    </motion.section>
  );
}

export function SectionTitle({ eyebrow, title, sticker: StickerIcon, blurb }) {
  return (
    <motion.div variants={fadeUp} className="mb-12 max-w-2xl">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl">
        <span className="text-gradient">{title}</span>
        {StickerIcon && (
          <>
            {' '}
            <Sticker className="align-middle text-2xl text-pink-500 dark:text-pink-400 sm:text-3xl" dur={4.5} drift={7}>
              <StickerIcon />
            </Sticker>
          </>
        )}
      </h2>
      {blurb && <p className="mt-3 text-muted">{blurb}</p>}
    </motion.div>
  );
}
