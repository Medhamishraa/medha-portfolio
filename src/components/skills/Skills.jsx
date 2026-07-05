import { useReducedMotion } from 'framer-motion';
import { FiZap } from 'react-icons/fi';
import { skillRows } from '../../data/content';
import { Section, SectionTitle } from '../fx/Section';

function Pill({ name, Icon }) {
  return (
    <span className="group/pill inline-flex shrink-0 items-center gap-2 rounded-full border border-line bg-surface px-4 py-2 text-sm font-medium shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-pink-400 hover:shadow-glow">
      <Icon className="text-pink-500 transition-transform duration-300 group-hover/pill:scale-125" aria-hidden />
      {name}
    </span>
  );
}

function LabelChip({ label }) {
  return (
    <span
      className="inline-flex shrink-0 items-center rounded-full px-4 py-2 font-display text-sm font-bold text-white shadow-glow"
      style={{ backgroundImage: 'var(--grad)' }}
    >
      {label}
    </span>
  );
}

function RowContent({ items }) {
  return items.map((item, i) =>
    item.label ? <LabelChip key={`label-${i}`} label={item.label} /> : <Pill key={item.name} {...item} />,
  );
}

function MarqueeRow({ row }) {
  const reduce = useReducedMotion();

  // reduced motion: a calm, wrapped list instead of a moving strip
  if (reduce) {
    return (
      <div className="flex flex-wrap justify-center gap-3 py-1">
        <RowContent items={row.items} />
      </div>
    );
  }

  const anim = row.reverse ? 'animate-marquee-rev' : row.slow ? 'animate-marquee-slow' : 'animate-marquee';

  return (
    <div className="marquee-mask group overflow-hidden py-1">
      <div className={`flex w-max ${anim} group-hover:[animation-play-state:paused]`}>
        <div className="flex gap-3 pr-3">
          <RowContent items={row.items} />
        </div>
        <div aria-hidden className="flex gap-3 pr-3">
          <RowContent items={row.items} />
        </div>
      </div>
    </div>
  );
}

export const Skills = () => {
  return (
    <Section id="skills">
      <SectionTitle
        eyebrow="Toolbox"
        title="Skills"
        sticker={FiZap}
        blurb="Hover a row to pause it. Everything here has shipped in a real project."
      />
      <div className="space-y-5">
        {skillRows.map((row, i) => (
          <MarqueeRow key={i} row={row} />
        ))}
      </div>
    </Section>
  );
};
