import { motion } from 'framer-motion';
import { FiBriefcase } from 'react-icons/fi';
import { experience } from '../../data/content';
import { Section, SectionTitle } from '../fx/Section';
import { fadeUp } from '../../lib/motion';

export const Experience = () => {
  return (
    <Section id="experience">
      <SectionTitle eyebrow="Where I've worked" title="Experience" sticker={FiBriefcase} />

      <div className="relative ml-2 space-y-10 border-l-2 border-pink-200 pl-8 dark:border-line sm:ml-4 sm:pl-10">
        {experience.map((job) => (
          <motion.article key={job.company} variants={fadeUp} className="relative">
            <span
              aria-hidden
              className="absolute -left-[43px] top-2 h-5 w-5 rounded-full border-4 border-bgc sm:-left-[51px]"
              style={{ backgroundImage: 'var(--grad)' }}
            />
            <div className="card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift sm:p-7">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="font-display text-xl font-bold">{job.company}</h3>
                <span className="chip !border-pink-200 !text-pink-600 dark:!border-line dark:!text-pink-400">
                  {job.highlight}
                </span>
              </div>
              <p className="mt-0.5 font-medium text-pink-600 dark:text-pink-400">{job.role}</p>
              <p className="mt-0.5 text-sm text-muted">
                {job.place} · {job.period}
              </p>
              <ul className="mt-4 space-y-2 text-[15px] leading-relaxed text-muted">
                {job.bullets.map((b) => (
                  <li key={b.slice(0, 24)} className="flex gap-2.5">
                    <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-pink-400" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
};
