import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { AnimatePresence, motion } from 'framer-motion';
import { FiMail, FiPhone, FiSend } from 'react-icons/fi';
import { contactInfo, socials } from '../../data/content';
import { Section, SectionTitle } from '../fx/Section';
import { fadeUp } from '../../lib/motion';

// Existing EmailJS wiring. Do not change without updating the EmailJS template.
const EMAILJS = {
  serviceId: 'service_yzr170s',
  templateId: 'template_tmcrrup',
  publicKey: 'KuK_IJZhYJuG0p88Z',
};

const initialForm = { firstName: '', lastName: '', email: '', phone: '', message: '' };

const validate = (d) => {
  const errors = {};
  if (!d.firstName.trim()) errors.firstName = 'Required';
  if (!d.lastName.trim()) errors.lastName = 'Required';
  if (!/^\S+@\S+\.\S+$/.test(d.email)) errors.email = 'Enter a valid email address';
  if (!d.phone.trim()) errors.phone = 'Required';
  if (d.message.trim().length < 10) errors.message = 'A few more words, please (10+ characters)';
  return errors;
};

function Field({ id, label, as = 'input', type = 'text', value, onChange, error }) {
  const Tag = as;
  return (
    <div className="relative">
      <Tag
        id={id}
        name={id}
        type={as === 'input' ? type : undefined}
        rows={as === 'textarea' ? 5 : undefined}
        value={value}
        onChange={onChange}
        placeholder=" "
        aria-invalid={Boolean(error)}
        className={`peer w-full rounded-2xl border bg-surface px-4 pb-2.5 pt-5 text-[15px] outline-none transition-colors placeholder-transparent focus:border-pink-500 ${
          error ? 'border-coral' : 'border-line'
        }`}
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-4 top-1.5 text-xs font-medium text-pink-500 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-[15px] peer-placeholder-shown:text-muted peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-pink-500"
      >
        {label}
      </label>
      {error && <p className="mt-1 pl-1 text-xs font-medium text-coral">{error}</p>}
    </div>
  );
}

export const Contact = () => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [failure, setFailure] = useState('');

  const update = (key) => (e) => {
    setForm((f) => ({ ...f, [key]: e.target.value }));
    setErrors((er) => ({ ...er, [key]: undefined }));
  };

  const handleSubmit = () => {
    const nextErrors = validate(form);
    setErrors(nextErrors);
    setFailure('');
    if (Object.keys(nextErrors).length > 0) return;

    setSending(true);
    emailjs.send(EMAILJS.serviceId, EMAILJS.templateId, { ...form }, EMAILJS.publicKey).then(
      () => {
        setSending(false);
        setSent(true);
        setForm(initialForm);
      },
      () => {
        setSending(false);
        setFailure('Something went wrong. Please try again, or email me directly below.');
      },
    );
  };

  return (
    <Section id="contact">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <SectionTitle
            eyebrow="Contact"
            title="Let's build something."
            sticker={FiSend}
            blurb="Have a role, a project, or just an idea worth poking at? My inbox is open."
          />

          <motion.ul variants={fadeUp} className="space-y-3 text-[15px]">
            {contactInfo.emails.map((email) => (
              <li key={email}>
                <a
                  href={`mailto:${email}`}
                  className="group inline-flex items-center gap-3 text-muted transition-colors hover:text-pink-500"
                >
                  <span className="grid h-10 w-10 place-items-center rounded-full border border-line bg-surface transition group-hover:border-pink-400">
                    <FiMail />
                  </span>
                  {email}
                </a>
              </li>
            ))}
            <li>
              <a
                href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                className="group inline-flex items-center gap-3 text-muted transition-colors hover:text-pink-500"
              >
                <span className="grid h-10 w-10 place-items-center rounded-full border border-line bg-surface transition group-hover:border-pink-400">
                  <FiPhone />
                </span>
                {contactInfo.phone}
              </a>
            </li>
          </motion.ul>

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
                className="grid h-11 w-11 place-items-center rounded-full border border-line bg-surface text-lg text-muted shadow-card transition-colors hover:border-pink-400 hover:text-pink-500"
              >
                <Icon />
              </motion.a>
            ))}
          </motion.div>
        </div>

        <motion.div variants={fadeUp}>
          <AnimatePresence mode="wait">
            {sent ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="card grid min-h-[26rem] place-items-center p-8 text-center"
              >
                <div>
                  <motion.svg viewBox="0 0 52 52" className="mx-auto h-20 w-20" aria-hidden>
                    <motion.circle
                      cx="26"
                      cy="26"
                      r="24"
                      fill="none"
                      strokeWidth="3"
                      className="stroke-pink-300"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.6 }}
                    />
                    <motion.path
                      fill="none"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="stroke-pink-500"
                      d="M15 27l8 8 15-17"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.4, delay: 0.5 }}
                    />
                  </motion.svg>
                  <h3 className="mt-5 font-display text-2xl font-bold">Message sent!</h3>
                  <p className="mt-2 text-muted">Thanks for reaching out. I'll get back to you soon.</p>
                  <button onClick={() => setSent(false)} className="btn-ghost mt-6">
                    Send another message
                  </button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                className="card p-6 sm:p-8"
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field id="firstName" label="First name" value={form.firstName} onChange={update('firstName')} error={errors.firstName} />
                  <Field id="lastName" label="Last name" value={form.lastName} onChange={update('lastName')} error={errors.lastName} />
                  <Field id="email" label="Email address" type="email" value={form.email} onChange={update('email')} error={errors.email} />
                  <Field id="phone" label="Phone number" type="tel" value={form.phone} onChange={update('phone')} error={errors.phone} />
                </div>
                <div className="mt-4">
                  <Field id="message" label="Message" as="textarea" value={form.message} onChange={update('message')} error={errors.message} />
                </div>

                <div aria-live="polite">
                  {failure && <p className="mt-3 text-sm font-medium text-coral">{failure}</p>}
                </div>

                <motion.button
                  whileHover={{ scale: sending ? 1 : 1.04 }}
                  whileTap={{ scale: sending ? 1 : 0.96 }}
                  onClick={handleSubmit}
                  disabled={sending}
                  className="btn-primary mt-6 w-full justify-center disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
                >
                  <FiSend /> {sending ? 'Sending…' : 'Send message'}
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </Section>
  );
};
