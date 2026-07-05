import { useEffect, useRef, useState } from 'react';
import { animate, motion, useInView } from 'framer-motion';
import { FiBookOpen, FiUser } from 'react-icons/fi';
import { bio, education, stats } from '../../data/content';
import { Section, SectionTitle } from '../fx/Section';
import { fadeUp } from '../../lib/motion';

function Stat({ value, label, decimals = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return undefined;
    const controls = animate(0, value, { duration: 1.3, ease: 'easeOut', onUpdate: (v) => setN(v) });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <motion.div variants={fadeUp} whileHover={{ y: -4 }} className="card p-5 text-center sm:p-6">
      <p ref={ref} className="font-display text-3xl font-bold sm:text-4xl">
        <span className="text-gradient">{n.toFixed(decimals)}</span>
      </p>
      <p className="mt-1 text-sm text-muted">{label}</p>
    </motion.div>
  );
}

export const About = () => {
  return (
    <Section id="about">
      <SectionTitle eyebrow="About me" title="Engineer with an ML/AI edge" sticker={FiUser} />

      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
        <div className="space-y-4 text-[17px] leading-relaxed text-muted">
          {bio.map((p) => (
            <motion.p key={p.slice(0, 24)} variants={fadeUp}>
              {p}
            </motion.p>
          ))}

          <motion.div variants={fadeUp} className="pt-4">
            <h3 className="flex items-center gap-2 font-display text-lg font-bold text-ink">
              <FiBookOpen className="text-pink-500" /> Education
            </h3>
            <ul className="mt-4 space-y-4">
              {education.map((e) => (
                <li key={e.school} className="border-l-2 border-pink-200 pl-4 dark:border-line">
                  <p className="font-semibold text-ink">{e.degree}</p>
                  <p className="text-sm">{e.school}</p>
                  <p className="text-sm text-pink-600 dark:text-pink-400">
                    {e.detail} · {e.period}
                  </p>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <div className="grid h-fit grid-cols-2 gap-4">
          {stats.map((s) => (
            <Stat key={s.label} {...s} />
          ))}
        </div>
      </div>
    </Section>
  );
};
