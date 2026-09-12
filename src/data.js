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


// Interactive demos — every one is a static web app on GitHub Pages, so it can be embedded live.
export const demos = [
  {
    id: 'roulette', name: 'American Roulette', kicker: 'Casino simulator + Monte-Carlo house-edge lab',
    url: 'https://officiel-tinkerthink.github.io/American-Roulette-Betting/', repo: 'https://github.com/Officiel-TinkerThink/American-Roulette-Betting',
    img: '/portfolio/img/demos/roulette.jpg', accent: '#f5d76e',
    desc: 'Animated wheel, every bet on the layout, betting strategies (Martingale, D’Alembert, Fibonacci…), and a simulator that replays a layout for 100,000 spins to show why the house always wins.',
    tips: ['Click a number, a split or “Red”, then hit SPIN', 'Open the Simulation tab and run 10,000 spins with Martingale', 'Turn on Neighbours mode and click a pocket on the wheel'],
    stack: ['Vanilla JS', 'SVG animation', 'WebAudio', 'Monte-Carlo'],
  },
  {
    id: 'nim', name: 'Nim vs AI', kicker: 'A Q-learning agent that teaches itself — trained live in your browser',
    url: 'https://officiel-tinkerthink.github.io/AI-versus-Nim/', repo: 'https://github.com/Officiel-TinkerThink/AI-versus-Nim',
    img: '/portfolio/img/demos/nim.jpg', accent: '#c8451f',
    desc: 'Play misère Nim against a reinforcement-learning agent, watch its learning curve as it trains (agreement with the nim-sum solution, win rate vs random and vs perfect play), and peek at the Q-values behind every move.',
    tips: ['Turn on Coach mode to see the nim-sum math', 'Train tab → 50,000 games and watch the curve', 'Let the AI start and try to beat the perfect player'],
    stack: ['Q-learning', 'ε-greedy', 'SVG', 'Vanilla JS'],
  },
  {
    id: 'minesweeper', name: 'AI-assisted Minesweeper', kicker: 'A copilot that shows exactly what it knows',
    url: 'https://officiel-tinkerthink.github.io/AI-assisted-Minesweeper/', repo: 'https://github.com/Officiel-TinkerThink/AI-assisted-Minesweeper',
    img: '/portfolio/img/demos/minesweeper.jpg', accent: '#2563eb',
    desc: 'Classic Minesweeper with a knowledge-based solver: cells it has proven safe or mined are tinted, an exact-enumeration engine puts a mine probability on every cell, and a benchmark pits the logic solver against the probabilistic one.',
    tips: ['Reveal a few cells, then switch on the probability heatmap', 'Press Auto-play and watch it reason', 'Benchmark tab: compare solvers on Expert'],
    stack: ['Propositional inference', 'Exact enumeration', 'Vanilla JS'],
  },
  {
    id: 'tictactoe', name: 'Tic-Tac-Toe vs Minimax', kicker: 'An unbeatable AI that shows its thinking',
    url: 'https://officiel-tinkerthink.github.io/AI-against-Tic-Tac-Toe/', repo: 'https://github.com/Officiel-TinkerThink/AI-against-Tic-Tac-Toe',
    img: '/portfolio/img/demos/tictactoe.jpg', accent: '#22d3ee',
    desc: 'Every move labelled win / draw / loss, your moves graded, alpha-beta vs plain minimax node counts after each AI move, and an explorer for the whole game tree (255,168 games).',
    tips: ['Play Hard and try to force a draw with every move rated “best”', 'Explore the tree tab → click through positions', 'Count the whole game tree'],
    stack: ['Minimax', 'Alpha-beta pruning', 'SVG', 'Vanilla JS'],
  },
  {
    id: 'crossword', name: 'Crossword CSP Solver', kicker: 'Watch AC-3 and backtracking fill a grid, step by step',
    url: 'https://officiel-tinkerthink.github.io/AI-solved-Crossword/', repo: 'https://github.com/Officiel-TinkerThink/AI-solved-Crossword',
    img: '/portfolio/img/demos/crossword.jpg', accent: '#1f5fd6',
    desc: 'A constraint-satisfaction solver animated on real crossword grids — node consistency, arc consistency, MRV / degree / LCV heuristics and maintained arc consistency — plus a grid editor and a word-fit game for humans.',
    tips: ['Pick the Hard puzzle and press Run', 'Compare all heuristic settings', 'Play tab: fit the words yourself'],
    stack: ['CSP', 'AC-3', 'Backtracking', 'Vanilla JS'],
  },
  {
    id: 'arithmathgeek', name: 'Arithmathgeek', kicker: 'A daily guess-the-equation puzzle',
    url: 'https://officiel-tinkerthink.github.io/CS50P-Final-Project/', repo: 'https://github.com/Officiel-TinkerThink/CS50P-Final-Project',
    img: '/portfolio/img/demos/arithmathgeek.jpg', accent: '#6d28d9',
    desc: 'Nerdle-style: six tries to find the hidden equation, three difficulties, a daily puzzle that is the same for everyone, shareable emoji results, and a counter of how many equations still fit your clues.',
    tips: ['Try today’s Medium daily', 'Watch “Still possible” shrink with each guess', 'Share your result'],
    stack: ['Game design', 'Seeded RNG', 'Vanilla JS'],
  },
  {
    id: 'homeworld', name: 'Home World', kicker: 'A text game for reinforcement learning — play it, then train agents on it',
    url: 'https://officiel-tinkerthink.github.io/Home-World-Game/', repo: 'https://github.com/Officiel-TinkerThink/Home-World-Game',
    img: '/portfolio/img/demos/homeworld.jpg', accent: '#c2410c',
    desc: 'Explore a house from text descriptions alone, then train tabular, linear and deep Q-learning agents in the browser and watch them solve quests with their Q-values on screen.',
    tips: ['Play a quest without revealing the map', 'Train tab: tabular, then DQN, then linear — compare curves', 'Watch the DQN play'],
    stack: ['Tabular Q', 'Linear Q', 'DQN (hand-written MLP)', 'Vanilla JS'],
  },
  {
    id: 'digits', name: 'Digits from Scratch', kicker: 'Neural nets with hand-written backprop — draw a digit',
    url: 'https://officiel-tinkerthink.github.io/digit_recognizer_with_numpy/', repo: 'https://github.com/Officiel-TinkerThink/digit_recognizer_with_numpy',
    img: '/portfolio/img/demos/digits.jpg', accent: '#38bdf8',
    desc: 'Draw a digit and watch a linear model, an MLP and a small CNN — implemented from scratch, no framework — recognise it, with every layer’s activations shown. Train them yourself in the browser on MNIST and look at the weights they learned.',
    tips: ['Draw a 7, then switch models and compare confidence', 'Train tab: the notebook’s 4-vs-9 task with noise', 'Inside tab: the linear model’s class templates'],
    stack: ['Backprop by hand', 'CNN', 'Vanilla JS'],
  },
  {
    id: 'reviews', name: 'Review Analyzer', kicker: 'Perceptron, average perceptron and Pegasos on real reviews',
    url: 'https://officiel-tinkerthink.github.io/Automatic-Review-Analyzer/', repo: 'https://github.com/Officiel-TinkerThink/Automatic-Review-Analyzer',
    img: '/portfolio/img/demos/reviews.jpg', accent: '#0f766e',
    desc: 'Three linear classifiers written from scratch and trained live on 4,000 food reviews. Type a review, get the verdict and see exactly which words decided it; compare the algorithms as they learn and sweep their hyper-parameters.',
    tips: ['Type a review and watch the words light up', 'Train & compare → Sweep T and λ', 'Reviews tab: filter to the mistakes'],
    stack: ['Perceptron', 'Pegasos / SVM', 'Bag of words', 'Vanilla JS'],
  },
  {
    id: 'eplsql', name: 'Premier League SQL', kicker: 'A relational database you can query in the browser',
    url: 'https://officiel-tinkerthink.github.io/English-Premier-League-Database/', repo: 'https://github.com/Officiel-TinkerThink/English-Premier-League-Database',
    img: '/portfolio/img/demos/eplsql.jpg', accent: '#3d195b',
    desc: 'SQLite compiled to WebAssembly with a seeded season of 380 matches: a SQL console with EXPLAIN, the schema and ER diagram, a league table computed by a view, and eight checked SQL challenges.',
    tips: ['Run the golden-boot query, then Explain it', 'Season tab → show SQL on the standings', 'Solve a challenge or two'],
    stack: ['SQL', 'SQLite (WASM)', 'Schema design'],
  },
  {
    id: 'attention', name: 'Attention', kicker: 'BERT in plain JavaScript, with every attention head visible',
    url: 'https://officiel-tinkerthink.github.io/Attention/', repo: 'https://github.com/Officiel-TinkerThink/Attention',
    img: '/portfolio/img/demos/attention.jpg', accent: '#f5c518',
    desc: 'A 41-million-parameter BERT, int8-quantised to 42 MB, running in the browser with no ML library. Fill in the [MASK], then open any of the 64 attention heads to see which words the model looked at.',
    tips: ['Try “She poured a cup of hot [MASK]”', 'Attention heads → layer 6, then hover the [MASK] row', 'Spot the diagonal “previous word” heads'],
    stack: ['Transformer', 'BERT', 'Quantisation', 'Vanilla JS'],
  },
]

export const projects = [
  { name: 'Pharmaceutical AI Assistant', cat: 'AI Agents', img: '/portfolio/img/projects/pharma.svg', desc: 'Agentic chatbot for pharmacists over Indonesia’s ISO medicine database — indications, contraindications, and more.', url: 'https://github.com/Officiel-TinkerThink/Pharma-ai-assistant' },
  { name: 'AKIRA — AI Knowledge Repository', cat: 'AI Agents', tags: ['hot'], img: '/portfolio/img/projects/akira.svg', desc: 'Pipeline that continuously cleans, chunks, embeds and indexes verified docs into a vector DB, evaluating indexing quality via RAG metrics for a trustworthy knowledge base.', url: '' },
  { name: 'Document Portal', cat: 'AI Agents', img: '/portfolio/img/projects/document-portal.svg', desc: 'AI for document diffing, analysis, metadata, and document-based chat (RAG).', url: 'https://github.com/Officiel-TinkerThink/document_portal' },
  { name: 'AI Interview — Beaverhand', cat: 'AI Agents', tags: ['hot'], img: '/portfolio/img/projects/beaverhand.svg', desc: 'Job portal that connects job seekers and employers — and runs the interview itself. Our AI interviewer talks to candidates 24/7, scores what they can actually do, then hands a verified report to a human who makes the final call. 34,000+ open roles across healthcare, legal, tech & trades.', url: 'https://beaverhand.com/' },
  { name: 'Data Analyst Agent', cat: 'AI Agents', tags: ['hot'], img: '/portfolio/img/projects/data-analyst.svg', desc: 'Helps business leaders get data insights in an instant — users prompt in plain business language and the AI translates it into database queries, then retrieves accurate data and charts.', url: '' },

  { name: 'Bottlecap Detection', cat: 'Machine Learning', img: '/portfolio/img/projects/bottlecap.svg', desc: 'Real-time YOLOv11n object detection (3-class) for bottlecaps — 99.5% mAP@50, ~11ms latency, edge-optimized for Raspberry Pi 5.', url: 'https://github.com/Officiel-TinkerThink' },
  { name: 'Traffic Sign Classification', cat: 'Machine Learning', img: '/portfolio/img/projects/traffic-sign.svg', desc: 'Computer-vision model classifying road signs at 92% accuracy.', url: 'https://github.com/Officiel-TinkerThink/Traffic-Sign-Classification' },
  { name: 'Attention', cat: 'Machine Learning', demo: 'attention', img: '/portfolio/img/demos/attention.jpg', desc: 'BERT masked-word prediction and all 64 attention-head diagrams, running in the browser in plain JavaScript.', url: 'https://github.com/Officiel-TinkerThink/Attention' },
  { name: 'Digits from Scratch', cat: 'Machine Learning', demo: 'digits', img: '/portfolio/img/demos/digits.jpg', desc: 'Draw a digit — linear, MLP and CNN models with hand-written backprop recognise it; train them live and inspect the weights.', url: 'https://github.com/Officiel-TinkerThink/digit_recognizer_with_numpy' },
  { name: 'Bank Marketing Campaign', cat: 'Data', img: '/portfolio/img/projects/bank-marketing.svg', desc: 'Predictive model identifying clients likely to deposit — lifting net revenue.', url: 'https://github.com/Officiel-TinkerThink/BarracudaGroup_DTI_01_FinalProject' },
  { name: 'Hotel Booking Cancellation', cat: 'Data', img: '/portfolio/img/projects/hotel-booking.svg', desc: 'Forecasting cancellation risk, cutting revenue loss ~74.4%.', url: 'https://github.com/Officiel-TinkerThink/Hotel-Booking-Demand' },
  { name: 'AI-assisted Minesweeper', cat: 'AI Games', demo: 'minesweeper', img: '/portfolio/img/demos/minesweeper.jpg', desc: 'Minesweeper with a copilot that shows its reasoning: knowledge overlay, exact mine probabilities, auto-play and a solver benchmark.', url: 'https://github.com/Officiel-TinkerThink/AI-assisted-Minesweeper' },
  { name: 'Tic-Tac-Toe vs Minimax', cat: 'AI Games', demo: 'tictactoe', img: '/portfolio/img/demos/tictactoe.jpg', desc: 'Unbeatable minimax opponent that shows every move’s value, grades your moves, and lets you explore the whole game tree.', url: 'https://github.com/Officiel-TinkerThink/AI-against-Tic-Tac-Toe' },
  { name: 'Home World', cat: 'AI Games', demo: 'homeworld', img: '/portfolio/img/demos/homeworld.jpg', desc: 'Text-based RL environment: play it, train tabular / linear / deep Q-learning agents live, and watch them play.', url: 'https://github.com/Officiel-TinkerThink/Home-World-Game' },
  { name: 'Nim vs AI', cat: 'AI Games', demo: 'nim', img: '/portfolio/img/demos/nim.jpg', desc: 'Self-play Q-learning agent you can train in the browser, with a live learning curve and a coach that reveals the nim-sum strategy.', url: 'https://github.com/Officiel-TinkerThink/AI-versus-Nim' },
  { name: 'Crossword CSP Solver', cat: 'AI Games', demo: 'crossword', img: '/portfolio/img/demos/crossword.jpg', desc: 'Animated constraint-satisfaction solver (AC-3 + backtracking with MRV / LCV / MAC), a grid editor and a word-fit game.', url: 'https://github.com/Officiel-TinkerThink/AI-solved-Crossword' },
  { name: 'American Roulette', cat: 'Apps', demo: 'roulette', img: '/portfolio/img/demos/roulette.jpg', desc: 'Casino simulator with betting strategies, session stats and a Monte-Carlo house-edge lab.', url: 'https://github.com/Officiel-TinkerThink/American-Roulette-Betting' },
  { name: 'Arithmathgeek', cat: 'Apps', demo: 'arithmathgeek', img: '/portfolio/img/demos/arithmathgeek.jpg', desc: 'Nerdle-style daily guess-the-equation puzzle with shareable results and a clue-consistency counter.', url: 'https://github.com/Officiel-TinkerThink/CS50P-Final-Project' },
  { name: 'Review Analyzer', cat: 'Machine Learning', demo: 'reviews', img: '/portfolio/img/demos/reviews.jpg', desc: 'Perceptron, average perceptron and Pegasos sentiment classifiers trained live on 4,000 reviews, with word-level explanations.', url: 'https://github.com/Officiel-TinkerThink/Automatic-Review-Analyzer' },
  { name: 'Netflix Movie Rating Prediction', cat: 'Data', img: '/portfolio/img/projects/netflix.svg', desc: 'Collaborative-filtering model using EM with Gaussian mixtures to estimate personalized Netflix ratings.', url: 'https://github.com/Officiel-TinkerThink' },
  { name: 'Premier League SQL', cat: 'Data', demo: 'eplsql', img: '/portfolio/img/demos/eplsql.jpg', desc: 'Relational schema for matches and goals with an in-browser SQLite playground, ER diagram, views and SQL challenges.', url: 'https://github.com/Officiel-TinkerThink/English-Premier-League-Database' },
  { name: 'NYC TLC Data Analysis', cat: 'Data', img: '/portfolio/img/projects/nyc-tlc.svg', desc: 'Root-cause analysis of taxi revenue discrepancies across vendors.', url: 'https://github.com/Officiel-TinkerThink/NYC-TLC-Data-Analysis' },
]
