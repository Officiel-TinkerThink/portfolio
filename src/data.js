export const profile = {
  name: 'Wahyu Bornok',
  tagline: 'AI Engineer & Software Developer',
  brand: 'TinkerThink',
  location: 'Sleman, Indonesia · Remote-friendly',
  email: 'bornouksyn497@gmail.com',
  phone: '+62 812 5666 3442',
  summary:
    "I build applied AI — LLM agents, RAG systems, and machine-learning models wrapped in clean, reliable software. From notebook to deployed product.",
  socials: {
    github: 'https://github.com/Officiel-TinkerThink',
    linkedin: 'https://linkedin.com/in/wahyubornok',
    medium: 'https://medium.com/@bornouksyn497',
  },
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
  { group: 'Languages & Core', items: ['Python (OOP, async, metaclasses)', 'SQL', 'JavaScript / TypeScript', 'Bash / Linux'] },
  { group: 'AI / ML', items: ['PyTorch', 'TensorFlow / Keras', 'Scikit-learn', 'LangChain / LangGraph', 'RAG & Embeddings', 'Computer Vision', 'Reinforcement Learning'] },
  { group: 'Data & Infra', items: ['Pandas / NumPy', 'PySpark / Spark', 'PostgreSQL / MySQL', 'MongoDB / Qdrant (vectors)', 'Docker', 'Google Cloud (GCP)'] },
  { group: 'Web & Tools', items: ['FastAPI', 'React', 'Tableau', 'Git', 'REST APIs', 'CI/CD basics'] },
]

export const experience = [
  { role: 'Data Engineer & AI Engineer', org: 'Ameliore Solusi Analitika', period: 'Dec 2024 – Jun 2025', loc: 'Jakarta, Indonesia',
    points: ['Data migration & maintenance for Direktorat Jenderal Pajak (legacy → new system).', 'Led the new AI team exploring LLM & Agentic AI; built an AI product prototype.'] },
  { role: 'Quality Assurance', org: 'CV. Karya Hidup Sentosa (QUICK TRAKTOR)', period: 'Mar 2023 – Oct 2023', loc: 'Kulon Progo, Indonesia',
    points: ['Built a quality system for an agricultural-vehicle factory.', 'Root-cause analysis of technical claims; data-driven corrective solutions.'] },
]

export const education = [
  { school: 'Purwadhika Digital School', degree: 'Data Science & Machine Learning', period: '2024' },
  { school: 'Universitas Gadjah Mada', degree: 'Bachelor, Mechanical Engineering', period: '2018 – 2022' },
]

export const certs = [
  'Harvard CS50 — Introduction to AI with Python (2024)',
  'Harvard CS50 — Introduction to Databases with SQL (2024)',
  'MITx — Machine Learning with Python (2024)',
  'DeepLearning.AI — Machine Learning Specialization (2023)',
]

export const projects = [
  { name: 'Pharmaceutical AI Assistant', cat: 'AI / Agents', img: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=70', desc: 'Agentic chatbot for pharmacists over Indonesia’s ISO medicine database — indications, contraindications, and more.', url: 'https://github.com/Officiel-TinkerThink/Pharma-ai-assistant' },
  { name: 'Document Portal', cat: 'AI / Agents', img: 'https://images.unsplash.com/photo-1568225367111-8abe9bde2d35?w=600&q=70', desc: 'AI for document diffing, analysis, metadata, and document-based chat (RAG).', url: 'https://github.com/Officiel-TinkerThink/document_portal' },
  { name: 'Traffic Sign Classification', cat: 'Machine Learning', img: 'https://images.unsplash.com/photo-1545987796-200677ee1011?w=600&q=70', desc: 'Computer-vision model classifying road signs at 92% accuracy.', url: 'https://github.com/Officiel-TinkerThink/Traffic-Sign-Classification' },
  { name: 'Attention Mask', cat: 'Machine Learning', img: 'https://images.unsplash.com/photo-1620825937374-87fc7d620b9a?w=600&q=70', desc: 'Attention-based model predicting masked words in a sequence.', url: 'https://github.com/Officiel-TinkerThink/Attention' },
  { name: 'Bank Marketing Campaign', cat: 'Data', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=70', desc: 'Predictive model identifying clients likely to deposit — lifting net revenue.', url: 'https://github.com/Officiel-TinkerThink/BarracudaGroup_DTI_01_FinalProject' },
  { name: 'Hotel Booking Cancellation', cat: 'Data', img: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&q=70', desc: 'Forecasting cancellation risk, cutting revenue loss ~74.4%.', url: 'https://github.com/Officiel-TinkerThink/Hotel-Booking-Demand' },
  { name: 'AI-assisted Minesweeper', cat: 'AI / Agents', img: 'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=600&q=70', desc: 'Pattern-analyzing assistant that flags mines and suggests safe moves.', url: 'https://github.com/Officiel-TinkerThink/AI-assisted-Minesweeper' },
  { name: 'AI Tic-Tac-Toe', cat: 'Apps / Games', img: 'https://images.unsplash.com/photo-1611996575749-75fb1f470478?w=600&q=70', desc: 'Minimax-based adaptive opponent that anticipates and counters moves.', url: 'https://github.com/Officiel-TinkerThink/AI-against-Tic-Tac-Toe' },
  { name: 'NYC TLC Data Analysis', cat: 'Data', img: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=600&q=70', desc: 'Root-cause analysis of taxi revenue discrepancies across vendors.', url: 'https://github.com/Officiel-TinkerThink/NYC-TLC-Data-Analysis' },
]
