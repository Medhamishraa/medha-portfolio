import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion';
import { FiArrowUpRight, FiExternalLink, FiFileText, FiGithub, FiLayers } from 'react-icons/fi';
import { moreProjects, projects } from '../../data/content';
import { Section, SectionTitle } from '../fx/Section';
import { fadeUp } from '../../lib/motion';

function TiltCard({ children }) {
  const reduce = useReducedMotion();
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 180, damping: 18 });
  const sry = useSpring(ry, { stiffness: 180, damping: 18 });

  const onMove = (e) => {
    if (reduce) return;
    const r = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    ry.set(px * 12);
    rx.set(-py * 10);
  };

  const reset = () => {
    rx.set(0);
    ry.set(0);
  };

  return (
    <div style={{ perspective: 1000 }} className="h-full">
      <motion.div
        onMouseMove={onMove}
        onMouseLeave={reset}
        style={{ rotateX: srx, rotateY: sry, transformStyle: 'preserve-3d' }}
        className="h-full"
      >
        {children}
      </motion.div>
    </div>
  );
}

function ProjectCard({ project }) {
  const ProjectIcon = project.Icon;
  return (
    <TiltCard>
      <article className="card group flex h-full flex-col overflow-hidden">
        <div className="relative overflow-hidden">
          <img
            src={project.image}
            alt={`${project.title} preview`}
            loading="lazy"
            className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <span className="absolute right-4 top-4 rounded-full bg-surface/85 px-3 py-1 text-xs font-semibold shadow-card backdrop-blur">
            {project.period}
          </span>
          <span
            aria-hidden
            className="absolute left-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-surface/85 text-xl text-pink-500 shadow-card backdrop-blur dark:text-pink-400"
          >
            <ProjectIcon />
          </span>
        </div>

        <div className="flex flex-1 flex-col p-6 sm:p-7">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="font-display text-xl font-bold">{project.title}</h3>
            {project.badge && (
              <span
                className="inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-bold text-white"
                style={{ backgroundImage: 'var(--grad)' }}
              >
                {project.badge}
              </span>
            )}
          </div>
          <p className="mt-0.5 text-sm font-medium text-pink-600 dark:text-pink-400">{project.tag}</p>
          <p className="mt-3 text-[15px] leading-relaxed text-muted">{project.description}</p>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span key={t} className="chip">
                {t}
              </span>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-3 pt-1">
            {project.github && (
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost !px-5 !py-2 text-sm"
              >
                <FiGithub /> GitHub
              </motion.a>
            )}
            {project.report && (
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={project.report}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost !px-5 !py-2 text-sm"
              >
                <FiFileText /> View report
              </motion.a>
            )}
            {project.live && (
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary !px-5 !py-2 text-sm"
              >
                <FiExternalLink /> Live demo
              </motion.a>
            )}
          </div>
        </div>
      </article>
    </TiltCard>
  );
}

export const Projects = () => {
  return (
    <Section id="projects">
      <SectionTitle
        eyebrow="Selected work"
        title="Projects"
        sticker={FiLayers}
        blurb="From computer vision and ML to full-stack builds and data case studies, spanning national hackathons and coursework."
      />

      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((p) => (
          <motion.div key={p.title} variants={fadeUp} className="h-full">
            <ProjectCard project={p} />
          </motion.div>
        ))}
      </div>

      {moreProjects.length > 0 && (
        <motion.div variants={fadeUp} className="mt-8">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted">More case studies</p>
          <div className="grid gap-4 sm:grid-cols-2">
            {moreProjects.map((m) => (
              <motion.a
                key={m.title}
                href={m.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="card group flex items-center justify-between gap-4 p-5"
              >
                <span>
                  <span className="font-display font-bold">{m.title}</span>
                  <span className="mt-0.5 block text-sm text-muted">{m.blurb}</span>
                </span>
                <span className="flex shrink-0 items-center gap-1 text-sm font-semibold text-pink-600 transition-transform group-hover:translate-x-0.5 dark:text-pink-400">
                  {m.linkLabel} <FiArrowUpRight />
                </span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      )}

      <motion.p variants={fadeUp} className="mt-10 text-center text-muted">
        More experiments live on{' '}
        <a
          href="https://github.com/Medhamishraa"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-pink-600 underline decoration-pink-300 decoration-2 underline-offset-4 hover:decoration-pink-500 dark:text-pink-400"
        >
          my GitHub
        </a>
        .
      </motion.p>
    </Section>
  );
};
