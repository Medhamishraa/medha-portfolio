import { motion } from 'framer-motion';
import { FiBook, FiBookOpen, FiStar } from 'react-icons/fi';
import { publication } from '../../data/content';
import { Section, SectionTitle } from '../fx/Section';
import { Sticker } from '../fx/FloatingEmoji';
import { fadeUp } from '../../lib/motion';

export const Publications = () => {
  return (
    <Section id="publications">
      <SectionTitle eyebrow="Research" title="Publications" sticker={FiBook} />

      <motion.div
        variants={fadeUp}
        className="rounded-[1.75rem] p-[1.5px] shadow-lift"
        style={{ backgroundImage: 'var(--grad)' }}
      >
        <div className="relative overflow-hidden rounded-[calc(1.75rem-1.5px)] bg-surface p-7 sm:p-10">
          <div className="absolute -right-8 -top-8 hidden text-8xl opacity-10 sm:block" aria-hidden>
            <FiBookOpen />
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="chip !border-pink-300 !bg-pink-50 !text-pink-700 dark:!bg-pink-500/10 dark:!text-pink-300">
              <FiBook /> {publication.publisher}
            </span>
            <span
              className="inline-flex items-center rounded-full px-3 py-1 text-xs font-bold text-white"
              style={{ backgroundImage: 'var(--grad)' }}
            >
              {publication.status}
            </span>
          </div>

          <h3 className="mt-5 font-display text-2xl font-bold leading-snug sm:text-3xl">
            {publication.book}{' '}
            <Sticker className="align-middle text-2xl text-pink-500 dark:text-pink-400" dur={4} drift={6}>
              <FiStar />
            </Sticker>
          </h3>
          <p className="mt-2 font-medium text-pink-600 dark:text-pink-400">
            Chapter: “{publication.chapter}”
          </p>

          <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-muted">{publication.summary}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {publication.highlights.map((h) => (
              <span key={h} className="chip !border-pink-200 font-semibold !text-ink dark:!border-line">
                {h}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </Section>
  );
};
