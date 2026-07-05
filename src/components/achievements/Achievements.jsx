import { motion } from 'framer-motion';
import { FiAward, FiGithub, FiUsers } from 'react-icons/fi';
import { achievements, leadership } from '../../data/content';
import { Section, SectionTitle } from '../fx/Section';
import { Sticker } from '../fx/FloatingEmoji';
import { fadeUp } from '../../lib/motion';

export const Achievements = () => {
  return (
    <Section id="achievements">
      <SectionTitle eyebrow="Proof of hustle" title="Achievements & hackathons" sticker={FiAward} />

      <div className="grid gap-6 md:grid-cols-3">
        {achievements.map((a) => {
          const AchievementIcon = a.Icon;
          return (
          <motion.article
            key={a.title}
            variants={fadeUp}
            whileHover={{ y: -6 }}
            className="card flex h-full flex-col p-6"
          >
            <div className="flex items-start justify-between">
              <Sticker className="text-4xl text-pink-500 dark:text-pink-400" dur={4.6} drift={8}>
                <AchievementIcon />
              </Sticker>
              {a.link && (
                <a
                  href={a.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${a.title} on GitHub`}
                  className="grid h-9 w-9 place-items-center rounded-full border border-line text-muted transition hover:border-pink-400 hover:text-pink-500"
                >
                  <FiGithub />
                </a>
              )}
            </div>

            <span
              className="mt-4 inline-flex w-fit items-center rounded-full px-3 py-1 text-xs font-bold text-white"
              style={{ backgroundImage: 'var(--grad)' }}
            >
              {a.badge}
            </span>

            <h3 className="mt-3 font-display text-lg font-bold leading-snug">{a.title}</h3>
            <p className="mt-0.5 text-xs font-medium text-muted">{a.period}</p>
            <p className="mt-3 text-sm leading-relaxed text-muted">{a.description}</p>

            <div className="mt-4 flex flex-wrap gap-1.5 pt-1">
              {a.tech.map((t) => (
                <span key={t} className="chip !px-2.5 !text-[11px]">
                  {t}
                </span>
              ))}
            </div>
          </motion.article>
          );
        })}
      </div>

      <motion.div variants={fadeUp} className="card mt-10 flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
        <h3 className="flex items-center gap-2 font-display text-lg font-bold">
          <FiUsers className="text-pink-500" /> Leadership & community
        </h3>
        <ul className="flex flex-col gap-2 text-sm sm:flex-row sm:flex-wrap sm:gap-x-6">
          {leadership.map((l) => (
            <li key={l.org} className="text-muted">
              <span className="font-semibold text-ink">{l.role}</span> · {l.org}
            </li>
          ))}
        </ul>
      </motion.div>
    </Section>
  );
};
