export const profile = {
  name: 'Wahyu Bornok',
  tagline: 'AI Engineer & Software Developer',
  brand: 'TinkerThink',
  location: 'Sleman, Indonesia · Remote-friendly',
  email: 'bornouksyn497@gmail.com',
  phone: '+62 812 5666 3442',
  summary:
    'Data-driven critical thinker and problem-solver with a strong engineering foundation. I build applied AI — LLM agents, RAG systems, and ML models (CV, NLP, RL) wrapped in clean, reliable software — from notebook to deployed product.',
  socials: {
    github: 'https://github.com/Officiel-TinkerThink',
    linkedin: 'https://linkedin.com/in/wahyubornok',
    medium: 'https://medium.com/@bornouksyn497',
  },
  // Web3Forms access key (free): https://web3forms.com
  contactFormKey: '056497c1-ec9b-44c7-b3b5-34cfe5b3ca30',
}

export const services = [
  { icon: 'robot', title: 'LLM & Agent Development', desc: 'RAG pipelines, tool-calling agents, and autonomous workflows with LangChain / LangGraph.' },
  { icon: 'lightning', title: 'AI Product Prototyping', desc: 'Turn an idea into a working, demo-able AI product fast — chatbots, copilots, document AI.' },
  { icon: 'graph', title: 'Machine Learning Models', desc: 'Predictive models, computer vision, and NLP — trained, evaluated, and deployed.' },
  { icon: 'code', title: 'Full-Stack Web Apps', desc: 'FastAPI backends, dashboards, and databases — from API to UI, shipped and running.' },
  { icon: 'database', title: 'Data Engineering', desc: 'ETL pipelines, vector DBs (Qdrant, MongoDB), cloud processing on GCP.' },
  { icon: 'mentor', title: 'AI Consulting & Mentoring', desc: 'Architecture reviews, roadmaps, and 1:1 mentoring for teams adopting AI.' },
]

export const skills = [
  { group: 'Languages & Core', items: ['Advanced Python (OOP, async, metaclasses)', 'Advanced JavaScript / TypeScript', 'SQL', 'Bash / Linux'] },
  { group: 'AI / ML', items: ['PyTorch', 'TensorFlow / Keras', 'Scikit-learn', 'LangChain / LangGraph', 'RAG & Embeddings', 'Computer Vision (OpenCV, YOLO)', 'Reinforcement Learning', 'Experiment tracking (WandB, Comet)'] },
  { group: 'Data & Infra', items: ['Pandas / NumPy', 'PySpark / Apache Spark', 'PostgreSQL / MySQL', 'MongoDB / Qdrant (vectors)', 'Hadoop', 'Docker', 'Google Cloud (GCP)'] },
  { group: 'Web & Tools', items: ['FastAPI', 'React / ReactTS', 'Node.js', 'REST APIs', 'Git', 'CI/CD basics'] },
]

export const experience = [
  { role: 'Data Scientist', org: 'Medela Potentia Tbk', period: 'May 2026 – Present', loc: 'Bintaro, Indonesia',
    points: [
      'Building and shipping data-science solutions that turn business data into measurable impact.',
    ] },
  { role: 'Data Scientist (Freelance)', org: 'Manulife', period: 'Dec 2025 – Apr 2026', loc: 'Remote',
    points: [
      'Designed and built an end-to-end pipeline for an AI Knowledge Base.',
      'Built a robust evaluation framework measuring indexing quality, retrieval performance, and system trustworthiness.',
      'Collaborated with cross-functional, cross-country teams to align technical work with organizational objectives.',
    ] },
  { role: 'AI/ML Engineer (Freelance)', org: 'Beaverhand Inc', period: 'Aug 2025 – Dec 2025', loc: 'Remote',
    points: [
      'Managed and maintained an AI-powered SaaS platform — reliability and scalability.',
      'Designed, experimented, and optimized ML models to improve performance and UX.',
      'Developed and managed the end-to-end inference pipeline.',
    ] },
  { role: 'Data Engineer & AI Engineer', org: 'Ameliore Solusi Analitika', period: 'Dec 2024 – Jun 2025', loc: 'Jakarta, Indonesia',
    points: ['Data migration & maintenance for Direktorat Jenderal Pajak (legacy → new system).', 'Led the new AI team exploring LLM & Agentic AI; built an AI product prototype.'] },
  { role: 'Quality Assurance', org: 'CV. Karya Hidup Sentosa (QUICK TRAKTOR)', period: 'Mar 2023 – Oct 2023', loc: 'Kulon Progo, Indonesia',
    points: ['Built a quality system for an agricultural-vehicle factory.', 'Root-cause analysis of technical claims; data-driven corrective solutions.'] },
]

export const education = [
  { school: 'Universitas Gadjah Mada', degree: 'Bachelor, Mechanical Engineering · GPA 3.57/4.00', period: '2018 – 2022', },
  { school: 'Purwadhika Digital School', degree: 'Data Science & Machine Learning', period: '2024' },
]

export const certs = [
  { name: 'Harvard CS50 — Introduction to AI with Python', url: 'https://certificates.cs50.io/0f8dbbe8-218d-4f5a-bc6e-297ab6589bca.pdf?size=letter' },
  { name: 'Harvard CS50 — Introduction to Databases with SQL', url: 'https://certificates.cs50.io/0f8dbbe8-218d-4f5a-bc6e-297ab6589bca.pdf?size=letter' },
  { name: 'MITx — Machine Learning with Python: from Linear Models to Deep Learning', url: 'https://courses.edx.org/certificates/6a81c333c32749a8b4437e40757b7a24' },
  { name: 'MITx — Fundamentals of Statistics', url: 'https://courses.edx.org/certificates/73568808ec1c49bea9b2e7a0f40f79a6' },
  { name: 'MITx — Probability', url: 'https://courses.edx.org/certificates/5da1b1635daa48f880bbae9957e60e0e' },
]

export const projects = [
  { name: 'Pharmaceutical AI Assistant', cat: 'AI / Agents', img: '/portfolio/img/projects/pharma.svg', desc: 'Agentic chatbot for pharmacists over Indonesia’s ISO medicine database — indications, contraindications, and more.', url: 'https://github.com/Officiel-TinkerThink/Pharma-ai-assistant' },
  { name: 'AKIRA — AI Knowledge Repository', cat: 'AI / Agents', tags: ['hot'], img: '/portfolio/img/projects/akira.svg', desc: 'Pipeline that continuously cleans, chunks, embeds and indexes verified docs into a vector DB, evaluating indexing quality via RAG metrics for a trustworthy knowledge base.', url: '' },
  { name: 'Document Portal', cat: 'AI / Agents', img: '/portfolio/img/projects/document-portal.svg', desc: 'AI for document diffing, analysis, metadata, and document-based chat (RAG).', url: 'https://github.com/Officiel-TinkerThink/document_portal' },
  { name: 'AI Interview — Beaverhand', cat: 'AI / Agents', tags: ['hot'], img: '/portfolio/img/projects/beaverhand.svg', desc: 'Job portal that connects job seekers and employers — and runs the interview itself. Our AI interviewer talks to candidates 24/7, scores what they can actually do, then hands a verified report to a human who makes the final call. 34,000+ open roles across healthcare, legal, tech & trades.', url: 'https://beaverhand.com/' },
  { name: 'Data Analyst Agent', cat: 'AI / Agents', tags: ['hot'], img: '/portfolio/img/projects/data-analyst.svg', desc: 'Helps business leaders get data insights in an instant — users prompt in plain business language and the AI translates it into database queries, then retrieves accurate data and charts.', url: '' },

  { name: 'Bottlecap Detection', cat: 'Machine Learning', img: '/portfolio/img/projects/bottlecap.svg', desc: 'Real-time YOLOv11n object detection (3-class) for bottlecaps — 99.5% mAP@50, ~11ms latency, edge-optimized for Raspberry Pi 5.', url: 'https://github.com/Officiel-TinkerThink' },
  { name: 'Traffic Sign Classification', cat: 'Machine Learning', img: '/portfolio/img/projects/traffic-sign.svg', desc: 'Computer-vision model classifying road signs at 92% accuracy.', url: 'https://github.com/Officiel-TinkerThink/Traffic-Sign-Classification' },
  { name: 'Attention Mask', cat: 'Machine Learning', img: '/portfolio/img/projects/attention.svg', desc: 'Attention-based model predicting masked words in a sequence.', url: 'https://github.com/Officiel-TinkerThink/Attention' },
  { name: 'Bank Marketing Campaign', cat: 'Data', img: '/portfolio/img/projects/bank-marketing.svg', desc: 'Predictive model identifying clients likely to deposit — lifting net revenue.', url: 'https://github.com/Officiel-TinkerThink/BarracudaGroup_DTI_01_FinalProject' },
  { name: 'Hotel Booking Cancellation', cat: 'Data', img: '/portfolio/img/projects/hotel-booking.svg', desc: 'Forecasting cancellation risk, cutting revenue loss ~74.4%.', url: 'https://github.com/Officiel-TinkerThink/Hotel-Booking-Demand' },
  { name: 'AI-assisted Minesweeper', cat: 'AI / Agents', img: '/portfolio/img/projects/minesweeper.svg', desc: 'Pattern-analyzing assistant that flags mines and suggests safe moves.', url: 'https://github.com/Officiel-TinkerThink/AI-assisted-Minesweeper' },
  { name: 'AI Tic-Tac-Toe', cat: 'Apps / Games', img: '/portfolio/img/projects/tic-tac-toe.svg', desc: 'Minimax-based adaptive opponent that anticipates and counters moves.', url: 'https://github.com/Officiel-TinkerThink/AI-against-Tic-Tac-Toe' },
  { name: 'Home World', cat: 'AI / Agents', img: '/portfolio/img/projects/home-world.svg', desc: 'Custom text-based game environment for testing reinforcement-learning control policies via text commands.', url: 'https://github.com/Officiel-TinkerThink' },
  { name: 'AI-versus Nim', cat: 'Apps / Games', img: '/portfolio/img/projects/nim.svg', desc: 'Self-play reinforcement-learning AI for the game of Nim that evolves into a strong competitor.', url: 'https://github.com/Officiel-TinkerThink' },
  { name: 'Automatic Review Analyzer', cat: 'Machine Learning', img: '/portfolio/img/projects/review.svg', desc: 'NLP sentiment classifier that tags customer reviews as positive or negative at scale.', url: 'https://github.com/Officiel-TinkerThink' },
  { name: 'Netflix Movie Rating Prediction', cat: 'Data', img: '/portfolio/img/projects/netflix.svg', desc: 'Collaborative-filtering model using EM with Gaussian mixtures to estimate personalized Netflix ratings.', url: 'https://github.com/Officiel-TinkerThink' },
  { name: 'NYC TLC Data Analysis', cat: 'Data', img: '/portfolio/img/projects/nyc-tlc.svg', desc: 'Root-cause analysis of taxi revenue discrepancies across vendors.', url: 'https://github.com/Officiel-TinkerThink/NYC-TLC-Data-Analysis' },
]
