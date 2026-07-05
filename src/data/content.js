// ---------------------------------------------------------------------------
// All portfolio content lives here. Edit this file to update the site.
// ---------------------------------------------------------------------------
import {
  FaApple,
  FaAws,
  FaBootstrap,
  FaChartBar,
  FaChartLine,
  FaCss3Alt,
  FaDatabase,
  FaFlask,
  FaGithub,
  FaHtml5,
  FaLinkedinIn,
  FaLinux,
  FaNodeJs,
  FaReact,
  FaSignLanguage,
  FaWindows,
} from 'react-icons/fa';
import {
  FiActivity,
  FiBarChart2,
  FiCode,
  FiCpu,
  FiCrosshair,
  FiDatabase,
  FiEye,
  FiGitBranch,
  FiGrid,
  FiLayers,
  FiMail,
  FiMessageSquare,
  FiMic,
  FiRadio,
  FiSearch,
  FiShield,
  FiShoppingBag,
  FiStar,
  FiTarget,
  FiTerminal,
  FiTrendingUp,
  FiZap,
} from 'react-icons/fi';
import {
  SiC,
  SiCplusplus,
  SiFastapi,
  SiFigma,
  SiFlask,
  SiGit,
  SiJavascript,
  SiJupyter,
  SiKeras,
  SiLatex,
  SiLeetcode,
  SiMediapipe,
  SiMongodb,
  SiMysql,
  SiNumpy,
  SiOpencv,
  SiPandas,
  SiPython,
  SiR,
  SiRedux,
  SiScikitlearn,
  SiStreamlit,
  SiTailwindcss,
  SiTensorflow,
} from 'react-icons/si';

import signbridgeImg from '../assets/img/project-img1.png';
import bioactivityImg from '../assets/img/project-img5.png';
import ernakulamImg from '../assets/img/project-img6.png';
import travelImg from '../assets/img/project-img8.png';
import fraudImg from '../assets/img/project-img9.png';
import evMarketImg from '../assets/img/project-img10.png';

// --- Identity ---------------------------------------------------------------

export const socials = [
  { label: 'GitHub', href: 'https://github.com/Medhamishraa', Icon: FaGithub },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/medha-mishra-b17166250/', Icon: FaLinkedinIn },
  { label: 'LeetCode', href: 'https://leetcode.com/u/medhamishra/', Icon: SiLeetcode },
  { label: 'Email', href: 'mailto:medhamishra1708@gmail.com', Icon: FiMail },
];

export const contactInfo = {
  emails: ['medha.mishra.ug22@nsut.ac.in', 'medhamishra1708@gmail.com'],
  phone: '+91 98118 56856',
};

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Publications', href: '#publications' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
];

export const roles = ['Software Engineer'];

export const valueProp =
  'CS undergrad at NSUT Delhi building data-driven products, from computer-vision apps to $100M-scale platforms.';

// --- Hero icon field --------------------------------------------------------
// Floating, draggable accent icons scattered behind the hero.

const heroIconClass = 'text-pink-500/80 dark:text-pink-400/70';

export const heroIcons = [
  { Icon: FiCode, className: `left-[4%] top-24 ${heroIconClass}`, size: 'text-4xl', depth: 26, dur: 5.2, delay: 0.1 },
  { Icon: FiTerminal, className: `right-[6%] top-28 hidden sm:block ${heroIconClass}`, size: 'text-4xl', depth: 34, dur: 6, delay: 0.4 },
  { Icon: FiStar, className: `bottom-24 left-[13%] hidden md:block ${heroIconClass}`, size: 'text-3xl', depth: 18, dur: 4.4, delay: 0.8 },
  { Icon: FiCpu, className: `bottom-32 right-[15%] hidden md:block ${heroIconClass}`, size: 'text-3xl', depth: 24, dur: 5.6, delay: 0.2 },
  { Icon: FiZap, className: `left-[30%] top-16 hidden lg:block ${heroIconClass}`, size: 'text-2xl', depth: 40, dur: 4.8, delay: 0.6 },
  { Icon: FiGitBranch, className: `right-[32%] top-14 hidden lg:block ${heroIconClass}`, size: 'text-2xl', depth: 30, dur: 5.4, delay: 1 },
  { Icon: FiDatabase, className: `left-[5%] top-1/2 hidden xl:block ${heroIconClass}`, size: 'text-3xl', depth: 22, dur: 6.4, delay: 0.3 },
  { Icon: FiTarget, className: `right-[3%] top-[55%] hidden md:block ${heroIconClass}`, size: 'text-3xl', depth: 28, dur: 5, delay: 0.7 },
  { Icon: FiLayers, className: `bottom-14 left-[42%] hidden sm:block ${heroIconClass}`, size: 'text-2xl', depth: 16, dur: 4.6, delay: 0.5 },
  { Icon: FiTrendingUp, className: `bottom-20 right-[44%] hidden xl:block ${heroIconClass}`, size: 'text-2xl', depth: 36, dur: 5.8, delay: 0.9 },
];

// --- About ------------------------------------------------------------------

export const bio = [
  "I'm a computer science undergrad at NSUT Delhi who likes owning things end to end: crisp React frontends, fast Python backends, and machine learning that actually ships.",
  "Right now I'm at ZS Associates, building features for Kural, a data-driven decisions platform behind $100M+ in revenue. I care about products that feel good to use and code that's easy to live with.",
];

export const stats = [
  { value: 7.85, decimals: 2, label: 'CGPA at NSUT Delhi' },
  { value: 3, label: 'Engineering internships' },
  { value: 3, label: 'Hackathon wins & finals' },
  { value: 1, label: 'Springer publication' },
];

export const education = [
  {
    school: 'Netaji Subhas University of Technology (NSUT), Delhi',
    degree: 'B.Tech, Computer Science & Engineering',
    detail: 'CGPA 7.85',
    period: '2022 – Present',
  },
  {
    school: 'Amity International School, Mayur Vihar',
    degree: 'Senior Secondary',
    detail: '95.6%',
    period: '2021 – 22',
  },
  {
    school: 'Delhi Public School, Indirapuram',
    degree: 'Matriculation',
    detail: '98.4%',
    period: '2019 – 20',
  },
];

// --- Skills (marquee rows) ---------------------------------------------------
// Items with `label` render as gradient category chips inside the row.

export const skillRows = [
  {
    reverse: false,
    items: [
      { label: 'Languages' },
      { name: 'C', Icon: SiC },
      { name: 'C++', Icon: SiCplusplus },
      { name: 'Python', Icon: SiPython },
      { name: 'R', Icon: SiR },
      { name: 'JavaScript', Icon: SiJavascript },
      { name: 'SQL', Icon: FaDatabase },
      { label: 'Web' },
      { name: 'HTML', Icon: FaHtml5 },
      { name: 'CSS', Icon: FaCss3Alt },
      { name: 'Bootstrap', Icon: FaBootstrap },
      { name: 'Tailwind CSS', Icon: SiTailwindcss },
      { name: 'Redux', Icon: SiRedux },
    ],
  },
  {
    reverse: true,
    items: [
      { label: 'Data Science' },
      { name: 'NumPy', Icon: SiNumpy },
      { name: 'Pandas', Icon: SiPandas },
      { name: 'Scikit-learn', Icon: SiScikitlearn },
      { name: 'Jupyter', Icon: SiJupyter },
      { name: 'Power BI', Icon: FaChartBar },
      { name: 'Tableau', Icon: FaChartLine },
      { name: 'Computer Vision', Icon: FiEye },
      { name: 'OpenCV', Icon: SiOpencv },
      { name: 'MediaPipe', Icon: SiMediapipe },
      { name: 'Object Detection', Icon: FiCrosshair },
      { name: 'Image Segmentation', Icon: FiGrid },
      { label: 'Frameworks & Libraries' },
      { name: 'React.js', Icon: FaReact },
      { name: 'Node.js', Icon: FaNodeJs },
      { name: 'FastAPI', Icon: SiFastapi },
      { name: 'Flask', Icon: SiFlask },
      { name: 'TensorFlow', Icon: SiTensorflow },
      { name: 'Keras', Icon: SiKeras },
      { name: 'Streamlit', Icon: SiStreamlit },
      { name: 'NLTK', Icon: FiMessageSquare },
    ],
  },
  {
    reverse: false,
    slow: true,
    items: [
      { label: 'Databases' },
      { name: 'MySQL', Icon: SiMysql },
      { name: 'MongoDB', Icon: SiMongodb },
      { name: 'AWS RDS', Icon: FaAws },
      { name: 'DynamoDB', Icon: FaDatabase },
      { label: 'Cloud & Platforms' },
      { name: 'AWS · EC2 / S3 / IAM', Icon: FaAws },
      { name: 'Linux', Icon: FaLinux },
      { name: 'Windows', Icon: FaWindows },
      { name: 'macOS', Icon: FaApple },
      { label: 'Tools' },
      { name: 'Git', Icon: SiGit },
      { name: 'GitHub', Icon: FaGithub },
      { name: 'Figma', Icon: SiFigma },
      { name: 'LaTeX', Icon: SiLatex },
    ],
  },
];

// --- Experience ---------------------------------------------------------------

export const experience = [
  {
    company: 'ZS Associates',
    role: 'Business Technology Solutions Associate Intern',
    place: 'Gurugram, Haryana',
    period: 'Jan 2026 – Present',
    highlight: '$100M+ platform',
    bullets: [
      'Contributing to Kural, a flagship data-driven decisions platform with revenue streams exceeding $100M.',
      'Working in a cross-functional data-engineering and full-stack team, building and integrating scalable features with React.js, FastAPI, and AWS.',
    ],
  },
  {
    company: 'TechAhead',
    role: 'SDE Intern',
    place: 'Noida, UP',
    period: 'May 2025 – Jul 2025',
    highlight: 'SaaS product',
    bullets: [
      "Worked on the organization's SaaS product.",
      'Engineered interactive features with JavaScript, CSS, Redux, and EmailJS, improving UI, automation, and workflows.',
    ],
  },
  {
    company: 'Ericsson · EricssonEdge Academia Program',
    role: 'Mentee',
    place: 'Remote',
    period: 'Nov 2024 – May 2025',
    highlight: 'Top 500 of 10,000+',
    bullets: [
      'One of the top 500 scholars selected from 10,000+ aspirants across 10+ countries in Asia and Australia.',
      'Industrial training in 5G & Telecom, IoT, Automation, and Data Science.',
    ],
  },
  {
    company: 'Renovision Automation Services',
    role: 'Automation Intern',
    place: 'New Delhi',
    period: 'May 2024 – Jul 2024',
    highlight: 'Client delivery',
    bullets: [
      'Worked on automation techniques and contributed to client-side projects across the organization.',
    ],
  },
];

// --- Projects -----------------------------------------------------------------

export const projects = [
  {
    title: 'SignBridge',
    tag: 'Sign Language Learning Game',
    period: 'Jan – Apr 2025',
    Icon: FaSignLanguage,
    image: signbridgeImg,
    description:
      'Computer vision, ML, and a gamified front-end that bridges the communication gap and promotes inclusivity, with over 95% model accuracy.',
    tech: ['Python', 'React.js', 'MongoDB', 'TensorFlow', 'MediaPipe', 'OpenCV', 'REST API'],
    github: 'https://github.com/Medhamishraa/signbridge',
    live: '',
  },
  {
    title: 'Bioactivity Prediction App',
    tag: 'ML for drug discovery',
    period: 'Mar 2025',
    Icon: FaFlask,
    image: bioactivityImg,
    description:
      "Predicts the likelihood a compound inhibits the Acetylcholinesterase (AChE) enzyme, a key target in treating neurodegenerative diseases such as Alzheimer's.",
    tech: ['Python', 'Random Forest', 'Streamlit', 'ChEMBL'],
    github: 'https://github.com/Medhamishraa/bioactivity_drug_prediction',
    live: '',
  },
  {
    title: 'Ernakulam · The Online Doctor',
    tag: 'AI symptom triage',
    period: '2024',
    badge: 'Smart India Hackathon',
    Icon: FiActivity,
    image: ernakulamImg,
    description:
      'An AI-assisted online doctor built for a Smart India Hackathon round, using ML to triage patient symptoms and point users toward the right care.',
    tech: ['Python', 'TensorFlow', 'HTML', 'REST API'],
    github: 'https://github.com/Savaam-ernakulam/SIH_INTERNAL_ROUND_1_ERNAKULAM',
    live: '',
  },
  {
    title: 'Travel With TBO',
    tag: 'Multimodal hotel search',
    period: '2024',
    badge: 'Hackathon',
    Icon: FiSearch,
    image: travelImg,
    description:
      'Smart, fast hotel search powered by voice, image, and chat input, with NLP-driven query understanding for a frictionless booking flow.',
    tech: ['Python', 'NLTK', 'HTML', 'CSS', 'REST API'],
    github: 'https://github.com/Medhamishraa/travel_with_tbo',
    live: '',
  },
  {
    title: 'Credit Card Fraud Detection',
    tag: 'ML classification',
    period: '2024',
    Icon: FiShield,
    image: fraudImg,
    description:
      'A machine-learning classifier that flags fraudulent credit-card transactions from highly imbalanced data, safeguarding finances with intelligent insights.',
    tech: ['Python', 'Scikit-learn', 'Machine Learning'],
    github: 'https://github.com/Medhamishraa/ML_Error404',
    live: '',
  },
  {
    title: 'Indian EV Market Analysis',
    tag: 'Data analysis & strategy',
    period: '2025',
    badge: 'BrAINWARS 2025',
    Icon: FiBarChart2,
    image: evMarketImg,
    description:
      'A data-driven study of the Indian EV market: adoption trends, key players, and growth opportunities, presented as a case study for BrAINWARS 2025.',
    tech: ['Data Analysis', 'Market Research'],
    report: 'https://drive.google.com/file/d/1U9xZENK9VKbg9OfSGDs2cCABM4xks627/view?usp=sharing',
    live: '',
  },
];

// Lighter, link-only entries shown under the main project grid.
export const moreProjects = [
  {
    title: 'Muthoot-eers',
    blurb: 'Business case study on transforming branch engagement experience.',
    link: 'https://drive.google.com/file/d/1i6Ca1SsYcdVFB-BJGyNqjYwH63mE6uvC/view?usp=sharing',
    linkLabel: 'View deck',
  },
  {
    title: 'Energy-Efficient Bearing Design',
    blurb: 'Brushless DC (BLDC) motor design using eGaN FETs for higher efficiency.',
    link: 'https://drive.google.com/file/d/1blaf62mUV95cjeesVc0KF9ZlV7QsVmut/view?usp=sharing',
    linkLabel: 'View report',
  },
];

// --- Publication ----------------------------------------------------------------

export const publication = {
  publisher: 'Springer Nature',
  status: 'Accepted · Dec 2025',
  book: 'Artificial Intelligence for Sustainable Economy and Business',
  chapter: 'Smart Cities and Sustainable Infrastructure: AI at Work',
  summary:
    'Proposed an AI-driven smart traffic-management framework using Graph Neural Networks and Reinforcement Learning for adaptive traffic-signal optimization, demonstrating up to a 40% reduction in vehicle queue length in simulation, improving congestion and traffic-flow efficiency.',
  highlights: ['Graph Neural Networks', 'Reinforcement Learning', 'Up to 40% shorter queues in simulation'],
};

// --- Achievements & leadership ----------------------------------------------------

export const achievements = [
  {
    Icon: FiRadio,
    title: "Nokia Ideathon 2024: The Sky's Secret Channels",
    badge: 'Nationwide Finalist · Top 10 teams',
    period: 'May – Jul 2024',
    description:
      'Unveiling atmospheric ducting in 6G: AI-assisted, beyond-line-of-sight transmission for coastal regions.',
    tech: ['HTML', 'CSS', 'Python', 'REST APIs', 'MATLAB'],
    link: 'https://github.com/Medhamishraa/NokiaIdeathon',
  },
  {
    Icon: FiMic,
    title: 'LunaRing (Noise): Voice-Enabled Health Assistant',
    badge: 'Earned an internship offer from Noise',
    period: 'Oct 2025',
    description:
      'Scalable voice AI assistant that gracefully handles pauses and white-spaces in natural speech.',
    tech: ['React.js', 'Tailwind', 'OpenAI', 'MongoDB', 'FastAPI'],
    link: '',
  },
  {
    Icon: FiShoppingBag,
    title: 'Myntra HackerRamp 2024: MyntraOnBudget',
    badge: 'Top 1200 of 30,000+ participants',
    period: 'Jun 2024',
    description: 'Gen-Z budget-driven shopping-cart recommender powered by ML similarity models.',
    tech: ['HTML', 'CSS', 'Python', 'Cosine Similarity'],
    link: 'https://github.com/Medhamishraa/myntraonbudget',
  },
];

export const leadership = [
  { org: 'MARS Mindshift Training Hub', role: 'Technical Lead' },
  { org: 'Google Developer Student Club, NSUT', role: 'Senior Operations Manager' },
  { org: 'Womenite Foundation', role: 'Content Writer & Community Manager' },
];
