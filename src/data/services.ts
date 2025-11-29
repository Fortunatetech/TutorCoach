import { Service } from '@/types';

export const SERVICES: Service[] = [
  // ============================================
  // 1. WRITING & ENGLISH
  // ============================================
  {
    id: 'writing',
    title: 'Writing & English',
    category: 'Academic',
    subservices: ['Business English', 'Essay Writing', 'Thesis Support', 'General English', 'Reading & Proofreading'],
    desc: 'Master the art of writing through personalized 1-on-1 coaching. From academic essays to business communication, develop skills that open doors.',
    shortDesc: 'Transform your writing from good to exceptional with expert coaching tailored to your goals.',
    icon: '✍️',
    priceOriginal: '$50',
    price: '$35',
    popular: true,
    detailedDesc: 'Whether you\'re crafting college essays, polishing business emails, or writing your thesis, I provide personalized instruction that meets you where you are and takes you where you want to go. With proven methods and patient guidance, you\'ll gain confidence and clarity in every sentence you write.',

    whatWeCover: [
      'Grammar fundamentals and sentence structure that actually sticks',
      'Essay planning, argument structure, and citation mastery (APA, MLA, Chicago)',
      'Business English: professional emails, reports, and presentations',
      'Proofreading techniques and academic style adjustments'
    ],

    lessonPlan: [
      { duration: '10m', activity: 'Review objectives & discuss previous work' },
      { duration: '30m', activity: 'Focused instruction with examples and modeling' },
      { duration: '15m', activity: 'Guided practice or live editing of your draft' },
      { duration: '5m', activity: 'Actionable feedback, revision checklist & next steps' }
    ],

    whatYouGet: [
      'Evidence-based feedback with specific revision steps (not vague "good job" comments)',
      'Customized lesson plans that adapt to your level, deadlines, and goals',
      'Reusable templates, revision checklists, and annotated examples',
      'Priority turnaround for urgent drafts (rush options available for tight deadlines)'
    ],

    audienceContent: [
      {
        key: 'kids',
        label: 'Kids (K-12)',
        headline: 'Build confidence in writing — from paragraphs to persuasive essays',
        description: 'Help your child master writing fundamentals with patient, encouraging instruction that builds both skills and confidence.',
        focusPoints: [
          'Structure clear essays: strong intro, 2–3 supporting paragraphs, memorable conclusion',
          'Reading comprehension strategies: find evidence, answer questions, understand texts',
          'Homework support that builds independence and confidence over time'
        ],
        outcomes: [
          'Write clearer, more organized paragraphs and essays',
          'Complete homework on time with greater confidence',
          'Build foundations that make high school and college writing easier'
        ],
        whySuitable: [
          'Age-appropriate examples and patient, encouraging teaching style',
          'Shorter sessions for younger attention spans (30-45 min options)',
          'Regular parent updates on progress and next steps',
          'Focus on building confidence alongside writing skills'
        ],
        testimonial: {
          name: 'Parent of 7th Grader',
          text: 'My son went from avoiding writing assignments to actually enjoying them. His confidence soared in just 8 weeks!',
          result: 'Grade: C → A-'
        }
      },
      {
        key: 'students',
        label: 'Students (University & College)',
        headline: 'Master university writing — essays, research papers, and thesis work',
        description: 'Elevate your academic writing with advanced techniques for college success. Get the grades you deserve.',
        focusPoints: [
          'Thesis development and essay planning: build arguments that professors love',
          'Citation formatting (APA, MLA, Chicago) and academic tone mastery',
          'Draft-review cycles with targeted, actionable revision strategies'
        ],
        outcomes: [
          'Write stronger, more persuasive academic arguments',
          'Submit polished, publication-ready essays and research papers',
          'Build confidence in research writing, citations, and complex topics'
        ],
        whySuitable: [
          'University-level expertise in academic writing conventions',
          'Critical thinking and argumentation focus (not just grammar)',
          'Citation support and research strategy included',
          'Flexible scheduling for tight deadlines and exam periods'
        ],
        testimonial: {
          name: 'Sarah M., UCLA',
          text: 'I went from B- to A on my thesis after just 3 revision sessions. The feedback was incredibly detailed and actually useful!',
          result: 'Final grade: A'
        }
      },
      {
        key: 'professionals',
        label: 'Professionals',
        headline: 'Polish your professional writing — emails, reports, and career documents',
        description: 'Communicate with clarity and confidence. Stand out with professional writing that gets results.',
        focusPoints: [
          'Business writing: persuasive reports, executive summaries, professional emails',
          'CV and resume editing that passes ATS and impresses recruiters',
          'Email etiquette and executive communication that commands respect'
        ],
        outcomes: [
          'Write cleaner, more persuasive business documents that drive action',
          'Create CVs and resumes that land interviews (ATS-optimized)',
          'Communicate faster and more effectively in professional settings'
        ],
        whySuitable: [
          'Real-world business examples and industry-specific language',
          'Quick turnaround for urgent workplace deadlines',
          'Professional context (not academic exercises)',
          'CV, LinkedIn, and personal branding optimization included'
        ],
        testimonial: {
          name: 'Michael J., Product Manager',
          text: 'My CV rewrite led to 8 interview callbacks in 2 weeks. The transformation was incredible — totally worth it!',
          result: '40% salary increase'
        }
      }
    ],

    sessionPacks: [
      {
        id: 'starter',
        name: 'Starter',
        sessions: 1,
        description: 'Try one focused session. Perfect for quick help with a specific assignment or to see if we\'re a good fit.',
        price: 35,
        originalPrice: 50,
        savings: 15,
        popular: false
      },
      {
        id: 'growth',
        name: 'Growth',
        sessions: 5,
        description: 'Consistent support with measurable progress. Most students see major improvement in clarity and confidence.',
        price: 165,
        originalPrice: 250,
        savings: 85,
        popular: true
      },
      {
        id: 'accelerator',
        name: 'Accelerator',
        sessions: 10,
        description: 'Deep coaching for transformational results. Best value for committed learners ready to level up.',
        price: 315,
        originalPrice: 500,
        savings: 185,
        popular: false
      }
    ],

    features: [
      'Personalized 1-on-1 coaching tailored to your goals',
      'Essay structure and thesis development mastery',
      'Research strategies and citation techniques (APA, MLA, Chicago)',
      'Creative storytelling and persuasive writing methods',
      'Grammar refinement and style polishing',
      'Revision strategies that actually work',
      'Portfolio development and writing samples',
      'Unlimited email support between sessions',
    ],

    outcomes: [
      'Write clear, compelling essays that earn top grades',
      'Develop your unique, authentic writing voice',
      'Master both academic and professional formats',
      'Build unshakeable confidence in your writing ability',
      'Improve grades and test scores significantly',
      'Create publication-ready or submission-ready work',
    ],

    whoIsItFor: [
      'Students struggling with essays and research papers',
      'Aspiring writers developing their craft',
      'Professionals needing business writing skills',
      'Anyone wanting to communicate more effectively',
      'College application essay writers',
      'Non-native English speakers improving fluency',
    ],

    process: [
      {
        step: 1,
        title: 'Assessment',
        description: 'I evaluate your current skills and identify specific areas for improvement',
      },
      {
        step: 2,
        title: 'Goal Setting',
        description: 'Together, we create a personalized learning plan tailored to your needs',
      },
      {
        step: 3,
        title: 'Active Learning',
        description: 'Weekly sessions with practice exercises and real-world applications',
      },
      {
        step: 4,
        title: 'Continuous Improvement',
        description: 'Regular feedback and adjustments to ensure steady progress',
      },
    ],

    faqs: [
      {
        q: 'How long are the sessions?',
        a: 'Standard sessions are 60 minutes, but I offer 30 and 45-minute options for younger students (K-8). Each session is focused and productive.',
      },
      {
        q: 'What if I need help between sessions?',
        a: 'Email support is included! Send your questions or drafts anytime and I\'ll respond within 24 hours (usually much faster).',
      },
      {
        q: 'Can you help with specific assignments or tight deadlines?',
        a: 'Absolutely! I work on your actual assignments and offer rush turnaround for urgent deadlines. Just let me know your timeline.',
      },
      {
        q: 'How quickly will I see improvement?',
        a: 'Most students notice clearer writing within 2-3 sessions. Significant, lasting improvement typically shows by weeks 6-8 with consistent practice.',
      },
    ],

    testimonial: {
      text: 'Working with Fortunate completely transformed my writing. I went from C grades to consistent A\'s and actually enjoy writing now!',
      author: 'Sarah Martinez',
      service: 'UCLA Student',
    },
  },

  // ============================================
  // 2. ACADEMIC TUTORING
  // ============================================
  {
    id: 'academic',
    title: 'Academic Tutoring',
    category: 'Academic',
    subservices: ['Math (Algebra-Calculus)', 'Science (Bio, Chem, Physics)', 'Test Prep (SAT, ACT)'],
    desc: 'Personalized support that builds confidence and boosts grades. Master challenging subjects with expert guidance and proven strategies.',
    shortDesc: 'Excel in math, science, and standardized tests with focused, results-driven tutoring.',
    icon: '📚',
    priceOriginal: '$45',
    price: '$30',
    popular: true,
    detailedDesc: 'Academic success isn\'t about memorizing formulas — it\'s about understanding concepts deeply and building confidence. Whether you\'re struggling with algebra, tackling AP chemistry, or prepping for the SAT, I provide patient, personalized instruction that makes challenging subjects click.',

    whatWeCover: [
      'Math from foundations through Calculus: algebra, geometry, trigonometry, pre-calc, calculus',
      'Sciences: biology, chemistry, physics (conceptual understanding, not just memorization)',
      'Test strategies for SAT, ACT, AP exams that actually boost scores',
      'Study skills, time management, and test-anxiety reduction techniques'
    ],

    lessonPlan: [
      { duration: '10m', activity: 'Review homework, assess understanding, address questions' },
      { duration: '25m', activity: 'Teach new concepts with clear examples and visual aids' },
      { duration: '20m', activity: 'Practice problems together and build problem-solving skills' },
      { duration: '5m', activity: 'Summarize key points and assign targeted practice' }
    ],

    whatYouGet: [
      'Personalized study plan based on your unique learning style and pace',
      'Targeted practice problems and worksheets for skill reinforcement',
      'Progress tracking with regular updates (parents receive detailed reports)',
      'Test-taking strategies that reduce anxiety and maximize scores'
    ],

    audienceContent: [
      {
        key: 'kids',
        label: 'Kids (K-12)',
        headline: 'Build confidence in math and science — from basics to advanced topics',
        description: 'Patient, encouraging instruction that makes challenging subjects accessible and even fun.',
        focusPoints: [
          'Master core math concepts: fractions, equations, word problems, geometry',
          'Understand science principles through hands-on examples and real-world connections',
          'Develop homework completion skills and effective study habits'
        ],
        outcomes: [
          'Improved test scores and class grades (typically 1-2 letter grade improvement)',
          'Greater confidence approaching STEM subjects',
          'Strong foundation for advanced courses and college prep'
        ],
        whySuitable: [
          'Patient, step-by-step explanations (not rushed or condescending)',
          'Visual aids, diagrams, and interactive examples',
          'Flexible pacing that adapts to student needs',
          'Regular parent communication and progress updates'
        ],
        testimonial: {
          name: 'Parent of 9th Grader',
          text: 'My daughter\'s math grade went from D to B+ in just one semester. She actually enjoys studying now and asks for help when she needs it!',
          result: 'Grade: D → B+'
        }
      },
      {
        key: 'students',
        label: 'Students (University & College)',
        headline: 'Master college STEM courses and ace standardized exams',
        description: 'Advanced tutoring for calculus, physics, chemistry, and competitive test prep.',
        focusPoints: [
          'Tackle calculus, linear algebra, differential equations, and statistics',
          'Master organic chemistry, physics, and advanced science concepts',
          'SAT/ACT/GRE/MCAT prep with proven, score-boosting strategies'
        ],
        outcomes: [
          'Higher exam scores and course grades (average 15-20% improvement)',
          'Deep, lasting understanding of complex concepts (not just memorization)',
          'Competitive standardized test scores for grad school admissions'
        ],
        whySuitable: [
          'College-level expertise in advanced STEM subjects',
          'Test prep strategies backed by proven results',
          'Flexible scheduling around classes and exams',
          'Focus on both understanding AND results'
        ],
        testimonial: {
          name: 'Emily D., NYU Sophomore',
          text: 'I went from failing calculus to a B+ in one semester. The explanations finally made sense instead of just memorizing steps!',
          result: 'Math grade: D → B+'
        }
      },
      {
        key: 'professionals',
        label: 'Professionals',
        headline: 'Master quantitative skills for career advancement',
        description: 'Targeted help with statistics, data analysis, and professional certifications.',
        focusPoints: [
          'Statistics and data analysis for business decisions',
          'Professional certification exam prep (PMP, Six Sigma, etc.)',
          'Quantitative skills for promotions and career transitions'
        ],
        outcomes: [
          'Pass certification exams with confidence (first-try success rate: 90%)',
          'Apply math and data skills effectively in professional context',
          'Advance career with demonstrated technical competency'
        ],
        whySuitable: [
          'Real-world business applications (not academic exercises)',
          'Efficient, focused sessions that respect your time',
          'Flexible evening and weekend scheduling',
          'Practical, results-oriented approach'
        ],
        testimonial: {
          name: 'Data Analyst Candidate',
          text: 'Finally understood statistics well enough to pass my certification on the first try. Total career game-changer!',
          result: 'Certified Data Analyst'
        }
      }
    ],

    sessionPacks: [
      {
        id: 'starter',
        name: 'Starter',
        sessions: 1,
        description: 'Single session for quick help with specific topics, homework, or test prep.',
        price: 30,
        originalPrice: 45,
        savings: 15,
        popular: false
      },
      {
        id: 'growth',
        name: 'Growth',
        sessions: 5,
        description: 'Regular support for ongoing courses. Most students improve by 1-2 letter grades.',
        price: 140,
        originalPrice: 225,
        savings: 85,
        popular: true
      },
      {
        id: 'accelerator',
        name: 'Accelerator',
        sessions: 10,
        description: 'Intensive coaching for major exams, course mastery, or test prep bootcamp.',
        price: 270,
        originalPrice: 450,
        savings: 180,
        popular: false
      }
    ],

    features: [
      'One-on-one personalized instruction',
      'Math: Algebra through Calculus',
      'Sciences: Biology, Chemistry, Physics',
      'Test prep: SAT, ACT, GRE, GMAT',
      'Homework help and assignment review',
      'Study skills and time management',
      'Practice tests and progress tracking',
      'Parent progress reports (for K-12)',
    ],

    outcomes: [
      'Improve grades by 1-2 letter grades on average',
      'Build strong foundational knowledge that lasts',
      'Develop effective, efficient study habits',
      'Increase test scores significantly (avg 15-20%)',
      'Gain confidence in challenging subjects',
      'Reduce test anxiety and improve performance under pressure',
    ],

    whoIsItFor: [
      'K-12 students needing extra support or acceleration',
      'College students in STEM courses',
      'Test takers preparing for SAT, ACT, GRE, or GMAT',
      'Students transitioning to more challenging courses',
      'Anyone struggling with math or science',
      'Homeschool students needing expert guidance',
    ],

    process: [
      {
        step: 1,
        title: 'Diagnostic Assessment',
        description: 'Identify knowledge gaps, learning style, and specific challenges',
      },
      {
        step: 2,
        title: 'Custom Learning Plan',
        description: 'Create a strategic roadmap aligned with your goals and curriculum',
      },
      {
        step: 3,
        title: 'Targeted Instruction',
        description: 'Focus on weak areas while reinforcing and building on strengths',
      },
      {
        step: 4,
        title: 'Progress Monitoring',
        description: 'Regular assessments and adjustments to track improvement',
      },
    ],

    faqs: [
      {
        q: 'What subjects and levels do you cover?',
        a: 'All levels of math (arithmetic through calculus), sciences (biology, chemistry, physics), and standardized test prep (SAT, ACT, GRE, GMAT, AP exams).',
      },
      {
        q: 'How often should we meet for best results?',
        a: 'Most students benefit from 1-2 sessions per week. For test prep or major exams, 2-3 sessions weekly yields faster results.',
      },
      {
        q: 'Can you help with AP courses and exams?',
        a: 'Absolutely! I have extensive experience with AP courses (Calc AB/BC, Chemistry, Physics, Biology) and exam preparation strategies.',
      },
      {
        q: 'How quickly will I see grade improvement?',
        a: 'Most students see noticeable improvement within 3-4 weeks. Significant grade changes (1-2 letter grades) typically occur within 8-10 weeks of consistent sessions.',
      },
    ],
  },

  // ============================================
  // 3. PROGRAMMING & AI
  // ============================================
  {
    id: 'programming',
    title: 'Programming & AI',
    category: 'Technology',
    subservices: ['Python', 'JavaScript', 'SQL', 'ChatGPT & AI Tools'],
    desc: 'Learn coding from scratch or level up your skills. Build real projects, solve actual problems, and prepare for tech careers.',
    shortDesc: 'Build job-ready coding skills with hands-on projects and expert mentorship.',
    icon: '💻',
    priceOriginal: '$40',
    price: '$30',
    detailedDesc: 'Programming opens doors to endless opportunities. Whether you\'re starting from zero, changing careers, or leveling up your skills, I teach practical, project-based coding that prepares you for real-world development. You\'ll build actual applications, not just follow tutorials.',

    whatWeCover: [
      'Python fundamentals and object-oriented programming (automation, data, web)',
      'JavaScript for modern web development (React, Node.js, full-stack)',
      'SQL and database management (queries, design, optimization)',
      'ChatGPT, prompt engineering, and AI tool integration for developers'
    ],

    lessonPlan: [
      { duration: '10m', activity: 'Review previous code, debug issues, answer questions' },
      { duration: '30m', activity: 'Learn new concepts with live coding and examples' },
      { duration: '15m', activity: 'Build or debug your project together (hands-on practice)' },
      { duration: '5m', activity: 'Assign practice exercises, resources, and next milestones' }
    ],

    whatYouGet: [
      'Code reviews with actionable, best-practice feedback (industry standards)',
      '3-5 portfolio-ready projects you built yourself (not copied from tutorials)',
      'GitHub repository with all your code (professional portfolio)',
      'Career guidance, interview prep, and job search strategies for developers'
    ],

    audienceContent: [
      {
        key: 'kids',
        label: 'Kids (K-12)',
        headline: 'Learn to code through fun projects — games, websites, and apps',
        description: 'Start your coding journey with engaging projects that teach real, transferable programming skills.',
        focusPoints: [
          'Python basics with games, animations, and interactive projects',
          'Web development: build your first website from scratch',
          'Problem-solving, computational thinking, and logical reasoning'
        ],
        outcomes: [
          'Create working games, websites, and applications',
          'Understand core programming concepts (loops, functions, variables)',
          'Build confidence in technology and develop future-ready skills'
        ],
        whySuitable: [
          'Fun, project-based learning (not boring theory)',
          'Age-appropriate explanations and examples',
          'Builds valuable 21st-century skills',
          'Parent updates and progress demonstrations'
        ],
        testimonial: {
          name: 'Parent of 8th Grader',
          text: 'My son built his first game in 4 weeks! He\'s now teaching his friends Python. The confidence boost has been incredible.',
          result: 'Built 3 projects'
        }
      },
      {
        key: 'students',
        label: 'Students (University & College)',
        headline: 'Master programming for CS courses, projects, and tech internships',
        description: 'Get the practical coding skills you need for computer science courses and landing competitive internships.',
        focusPoints: [
          'Data structures, algorithms, and CS fundamentals',
          'Modern web development with frameworks (React, Node, databases)',
          'Technical interview prep and coding challenges (LeetCode, HackerRank)'
        ],
        outcomes: [
          'Ace CS assignments, projects, and exams with confidence',
          'Build impressive portfolio projects that stand out',
          'Land internships at tech companies (Google, Microsoft, startups)'
        ],
        whySuitable: [
          'Curriculum aligned with CS courses and industry standards',
          'Interview preparation and coding challenge practice included',
          'Real-world project experience (not just theory)',
          'Flexible scheduling around classes and deadlines'
        ],
        testimonial: {
          name: 'James C., CS Student → Developer',
          text: 'I went from zero coding knowledge to landing my first developer job in 6 months. The project-based approach made all the difference!',
          result: 'Now employed as developer'
        }
      },
      {
        key: 'professionals',
        label: 'Professionals',
        headline: 'Automate tasks, build tools, or transition to a tech career',
        description: 'Learn programming to automate your work, solve business problems, or make a successful career change.',
        focusPoints: [
          'Python for automation, data analysis, and workflow optimization',
          'Building internal tools, dashboards, and business applications',
          'Career transition support: portfolio, networking, job search strategy'
        ],
        outcomes: [
          'Automate repetitive work tasks (save hours every week)',
          'Build custom tools that solve real business problems',
          'Successfully transition to a tech role with competitive salary'
        ],
        whySuitable: [
          'Practical, work-focused projects with immediate ROI',
          'Evening and weekend availability for working professionals',
          'Career change mentorship and networking guidance',
          'Focus on building marketable, portfolio-ready skills'
        ],
        testimonial: {
          name: 'Marketing Manager → Tech Lead',
          text: 'I built automation tools that saved my team 10 hours/week. Six months later, I was promoted to tech lead with a 40% raise!',
          result: '40% salary increase'
        }
      }
    ],

    sessionPacks: [
      {
        id: 'starter',
        name: 'Starter',
        sessions: 1,
        description: 'Try programming with one intro session. Perfect for complete beginners or exploring your options.',
        price: 30,
        originalPrice: 40,
        savings: 10,
        popular: false
      },
      {
        id: 'growth',
        name: 'Growth',
        sessions: 5,
        description: 'Build your first real project with expert guidance. Most popular for beginners and career changers.',
        price: 140,
        originalPrice: 200,
        savings: 60,
        popular: true
      },
      {
        id: 'accelerator',
        name: 'Accelerator',
        sessions: 10,
        description: 'Complete bootcamp-style training. Build multiple portfolio projects and prepare for job hunting.',
        price: 270,
        originalPrice: 400,
        savings: 130,
        popular: false
      }
    ],

    features: [
      'Learn Python, JavaScript, SQL, or AI tools',
      'Build 3-5 real, portfolio-worthy projects',
      'Real-world problem solving (not just tutorials)',
      'Code review and industry best practices',
      'Git, GitHub, and version control mastery',
      'Web development fundamentals (HTML, CSS, frameworks)',
      'Database design, queries, and optimization',
      'Career guidance and technical interview prep',
    ],

    outcomes: [
      'Build functional web applications from scratch',
      'Create a professional portfolio that impresses employers',
      'Write clean, maintainable, production-quality code',
      'Understand programming fundamentals deeply',
      'Debug and solve problems independently',
      'Prepare for developer interviews with confidence',
    ],

    whoIsItFor: [
      'Complete beginners wanting to learn coding',
      'Career changers entering the tech industry',
      'Students in computer science courses',
      'Professionals automating repetitive tasks',
      'Entrepreneurs building their own products',
      'Anyone curious about programming and AI',
    ],

    process: [
      {
        step: 1,
        title: 'Foundations',
        description: 'Learn core programming concepts with simple, practical exercises',
      },
      {
        step: 2,
        title: 'Build Projects',
        description: 'Create real applications that solve problems and showcase your skills',
      },
      {
        step: 3,
        title: 'Advanced Topics',
        description: 'Dive into frameworks, databases, APIs, and professional best practices',
      },
      {
        step: 4,
        title: 'Portfolio & Career',
        description: 'Polish your projects, build your portfolio, and prepare for job hunting',
      },
    ],

    faqs: [
      {
        q: 'Do I need any prior experience or technical background?',
        a: 'No! I work with complete beginners all the time. We start from absolute basics or jump in at your current level — wherever you are.',
      },
      {
        q: 'What will I actually build in these sessions?',
        a: 'Real projects like web apps, automation scripts, data analysis tools, and more. You\'ll have 3-5 portfolio pieces to show employers or use yourself.',
      },
      {
        q: 'Which programming language should I learn first?',
        a: 'Python is excellent for beginners and versatile (data, automation, web). JavaScript is best for web development. We\'ll discuss your goals and choose together!',
      },
      {
        q: 'Can you help me get a job in tech?',
        a: 'Yes! I provide career guidance, portfolio reviews, interview prep, and job search strategies. Many students have successfully transitioned to tech careers.',
      },
    ],
  },

  // ============================================
  // 4. ADMINISTRATION (OFFICE SUITE & PRODUCTIVITY)
  // ============================================
  {
    id: 'administration',
    title: 'Administration & Office Suite',
    category: 'Professional',
    subservices: ['Excel & Google Sheets', 'Power BI & Tableau', 'PowerPoint & Presentations'],
    desc: 'Master the tools that power modern business. From Excel wizardry to stunning presentations and data dashboards.',
    shortDesc: 'Become highly proficient in Excel, Power BI, PowerPoint, and essential business tools.',
    icon: '📊',
    priceOriginal: '$40',
    price: '$30',
    detailedDesc: 'In every office, there\'s someone who "knows Excel." Be that person. I\'ll teach you to work smarter with Excel, create compelling presentations, and build data dashboards that impress executives. These are career-accelerating skills.',

    whatWeCover: [
      'Excel mastery: formulas, pivot tables, VBA, data analysis, automation',
      'Power BI and Tableau: data visualization and interactive dashboards',
      'PowerPoint: persuasive presentations with professional design',
      'Google Workspace: Sheets, Slides, and productivity workflows'
    ],

    lessonPlan: [
      { duration: '10m', activity: 'Discuss your current projects and challenges' },
      { duration: '30m', activity: 'Learn new techniques with live demonstrations' },
      { duration: '15m', activity: 'Apply skills to your actual work files or practice datasets' },
      { duration: '5m', activity: 'Assign practice exercises and provide resources' }
    ],

    whatYouGet: [
      'Customized templates and formulas you can use immediately at work',
      'Cheat sheets and quick-reference guides for common tasks',
      'Downloadable practice files and example dashboards',
      'Priority support for urgent work projects and tight deadlines'
    ],

    audienceContent: [
      {
        key: 'kids',
        label: 'Kids (K-12)',
        headline: 'Build essential digital skills for school projects and future success',
        description: 'Learn the productivity tools that will help you throughout school and into your career.',
        focusPoints: [
          'PowerPoint basics: create engaging presentations for school projects',
          'Excel fundamentals: organize data, create charts, basic formulas',
          'Google Workspace: collaborate on group projects effectively'
        ],
        outcomes: [
          'Create professional-looking presentations and reports',
          'Organize information and data effectively',
          'Develop valuable digital literacy skills'
        ],
        whySuitable: [
          'Age-appropriate projects and examples',
          'Fun, hands-on learning approach',
          'Skills that help with homework and projects now',
          'Foundation for future academic and career success'
        ],
        testimonial: {
          name: 'High School Student',
          text: 'I made the best presentation in my class! My teacher asked me to help other students with their projects.',
          result: 'A+ on project'
        }
      },
      {
        key: 'students',
        label: 'Students (University & College)',
        headline: 'Master business tools for projects, internships, and job readiness',
        description: 'Stand out in group projects and land competitive internships with professional-level skills.',
        focusPoints: [
          'Advanced Excel: data analysis, complex formulas, professional charts',
          'Power BI/Tableau: create impressive data visualizations for presentations',
          'Professional presentation design that wows professors and recruiters'
        ],
        outcomes: [
          'Impress professors with professional-quality work',
          'Stand out in internship applications and interviews',
          'Build skills that employers actually want'
        ],
        whySuitable: [
          'Project-based learning with real datasets',
          'Skills directly applicable to business internships',
          'Portfolio pieces that demonstrate technical ability',
          'Flexible scheduling around classes'
        ],
        testimonial: {
          name: 'Business Student',
          text: 'My group project presentation led to an internship offer! The recruiter specifically mentioned my data visualization skills.',
          result: 'Landed top internship'
        }
      },
      {
        key: 'professionals',
        label: 'Professionals',
        headline: 'Work smarter and faster — become the Excel expert everyone relies on',
        description: 'Automate tasks, create executive dashboards, and make yourself indispensable.',
        focusPoints: [
          'Excel automation: macros, VBA, and time-saving formulas that save hours',
          'Executive dashboards: Power BI visualizations that tell a story',
          'Persuasive presentations: deliver insights that drive decisions'
        ],
        outcomes: [
          'Save hours every week with automation and efficiency',
          'Create dashboards that impress executives and stakeholders',
          'Position yourself for promotions and higher visibility'
        ],
        whySuitable: [
          'Practical, work-focused training on your actual files',
          'Evening and weekend sessions for busy professionals',
          'Quick wins and immediate ROI on time invested',
          'Industry-specific examples and best practices'
        ],
        testimonial: {
          name: 'Financial Analyst',
          text: 'I automated a 2-hour daily task down to 5 minutes. My boss promoted me within 3 months!',
          result: 'Promoted + 25% raise'
        }
      }
    ],

    sessionPacks: [
      {
        id: 'starter',
        name: 'Starter',
        sessions: 1,
        description: 'Quick help with a specific tool or urgent work project. Perfect for immediate needs.',
        price: 30,
        originalPrice: 40,
        savings: 10,
        popular: false
      },
      {
        id: 'growth',
        name: 'Growth',
        sessions: 5,
        description: 'Build real proficiency in Excel, Power BI, or PowerPoint. See measurable productivity gains.',
        price: 140,
        originalPrice: 200,
        savings: 60,
        popular: true
      },
      {
        id: 'accelerator',
        name: 'Accelerator',
        sessions: 10,
        description: 'Become a power user. Master advanced features and automation that set you apart.',
        price: 270,
        originalPrice: 400,
        savings: 130,
        popular: false
      }
    ],

    features: [
      'Excel mastery (formulas, pivot tables, VBA, automation)',
      'Power BI and Tableau data visualization',
      'Professional PowerPoint and presentation design',
      'Google Workspace productivity',
      'Dashboard creation and reporting',
      'Data analysis and business intelligence',
      'Time-saving automation techniques',
      'Work on your actual business files',
    ],

    outcomes: [
      'Work significantly faster and smarter',
      'Create impressive dashboards and visualizations',
      'Automate repetitive tasks (save hours weekly)',
      'Deliver presentations that persuade and impress',
      'Become the go-to expert in your office',
      'Increase your value and marketability',
    ],

    whoIsItFor: [
      'Professionals wanting to work more efficiently',
      'Students preparing for business careers',
      'Job seekers adding valuable skills to resume',
      'Anyone tired of manual, repetitive tasks',
      'Managers needing to create executive reports',
      'Career changers entering business roles',
    ],

    process: [
      {
        step: 1,
        title: 'Needs Assessment',
        description: 'Understand your current skill level and specific work challenges',
      },
      {
        step: 2,
        title: 'Practical Training',
        description: 'Learn techniques using your actual work files and real scenarios',
      },
      {
        step: 3,
        title: 'Skill Building',
        description: 'Master progressively advanced features and automation',
      },
      {
        step: 4,
        title: 'Application',
        description: 'Apply new skills to create tangible results at work',
      },
    ],

    faqs: [
      {
        q: 'I only know basic Excel. Can you help me get to advanced level?',
        a: 'Absolutely! Most students start with basic skills. I\'ll meet you where you are and build systematically to advanced techniques like pivot tables, macros, and Power Query.',
      },
      {
        q: 'Can we work on my actual work files during sessions?',
        a: 'Yes! Working on your real projects is often the best way to learn. Just ensure any sensitive data is anonymized or that you have permission to share it.',
      },
      {
        q: 'Which tool should I learn first — Excel, Power BI, or PowerPoint?',
        a: 'Excel is the foundation and most universally useful. Power BI adds impressive visualization skills. PowerPoint helps you communicate findings. We\'ll discuss your career goals and prioritize.',
      },
    ],
  },

  // ============================================
  // 5. DATABASE SYSTEMS
  // ============================================
  {
    id: 'database',
    title: 'Database Systems',
    category: 'Technology',
    subservices: ['SQL Fundamentals', 'Database Design', 'Query Optimization'],
    desc: 'Master database fundamentals and advanced concepts. From design principles to query optimization and performance tuning.',
    shortDesc: 'Master SQL, database design, and data management for developers and analysts.',
    icon: '🗄️',
    priceOriginal: '$45',
    price: '$35',
    detailedDesc: 'Databases power every modern application and business. Learn to design efficient schemas, write complex queries, and optimize performance. Essential skills for developers, data analysts, and anyone working with data at scale.',

    whatWeCover: [
      'SQL fundamentals: SELECT, JOIN, WHERE, GROUP BY, and advanced queries',
      'Database design: normalization, relationships, schema architecture',
      'Performance optimization: indexing, query plans, execution strategies',
      'PostgreSQL and MySQL (concepts apply to all SQL databases)'
    ],

    lessonPlan: [
      { duration: '10m', activity: 'Review previous queries and discuss challenges' },
      { duration: '25m', activity: 'Learn new SQL concepts with live database examples' },
      { duration: '20m', activity: 'Write and optimize queries together on real datasets' },
      { duration: '5m', activity: 'Assign practice exercises and provide resources' }
    ],

    whatYouGet: [
      'Access to practice databases with realistic datasets',
      'Query templates and optimization checklists',
      'Database design patterns and best practices documentation',
      'Career guidance for database administrator and data engineer roles'
    ],

    audienceContent: [
      {
        key: 'kids',
        label: 'Kids (K-12)',
        headline: 'Introduction to data organization and basic database concepts',
        description: 'Learn how databases organize information and power the apps you use every day.',
        focusPoints: [
          'Understanding how databases store and organize information',
          'Basic SQL queries: finding and sorting information',
          'Real-world examples: how databases power games, apps, and websites'
        ],
        outcomes: [
          'Understand fundamental database concepts',
          'Write simple SQL queries to find information',
          'Develop logical thinking and data organization skills'
        ],
        whySuitable: [
          'Simplified explanations with relatable examples',
          'Hands-on practice with fun, age-appropriate datasets',
          'Foundation for future technical careers',
          'Develops analytical and logical reasoning'
        ],
        testimonial: {
          name: 'High School Student',
          text: 'I never knew databases were so cool! Now I understand how apps like Instagram work behind the scenes.',
          result: 'Built first database'
        }
      },
      {
        key: 'students',
        label: 'Students (University & College)',
        headline: 'Master SQL and database design for CS courses and tech internships',
        description: 'Build the database skills that employers expect from computer science graduates.',
        focusPoints: [
          'Advanced SQL: subqueries, CTEs, window functions, complex joins',
          'Database design: normalization, ER diagrams, schema optimization',
          'Technical interview prep: common database questions and challenges'
        ],
        outcomes: [
          'Ace database courses and projects with confidence',
          'Build databases for capstone and portfolio projects',
          'Pass technical interviews at top tech companies'
        ],
        whySuitable: [
          'Curriculum aligned with CS database courses',
          'Real-world projects that demonstrate competency',
          'Interview preparation for database questions',
          'Practical experience with PostgreSQL and MySQL'
        ],
        testimonial: {
          name: 'CS Student',
          text: 'Database class went from my hardest to my favorite course. I even tutored other students by the end of the semester!',
          result: 'Final grade: A'
        }
      },
      {
        key: 'professionals',
        label: 'Professionals',
        headline: 'Level up your SQL skills for data analysis and backend development',
        description: 'Write efficient queries, design scalable databases, and manage data like a pro.',
        focusPoints: [
          'SQL for data analysts: complex analytics queries and reporting',
          'Backend development: database design for web applications',
          'Performance tuning: indexing strategies, query optimization, scaling'
        ],
        outcomes: [
          'Write complex SQL queries with confidence',
          'Design databases that scale with your business',
          'Optimize slow queries and improve application performance'
        ],
        whySuitable: [
          'Real-world business scenarios and production databases',
          'Focus on practical skills with immediate work application',
          'Evening and weekend sessions available',
          'Expertise in both PostgreSQL and MySQL'
        ],
        testimonial: {
          name: 'Data Analyst',
          text: 'I can now write queries in minutes that used to take me hours. My productivity has tripled!',
          result: 'Promoted to Senior Analyst'
        }
      }
    ],

    sessionPacks: [
      {
        id: 'starter',
        name: 'Starter',
        sessions: 1,
        description: 'Get help with a specific SQL query or database design problem.',
        price: 35,
        originalPrice: 45,
        savings: 10,
        popular: false
      },
      {
        id: 'growth',
        name: 'Growth',
        sessions: 5,
        description: 'Build solid SQL foundations or advance to complex queries and optimization.',
        price: 165,
        originalPrice: 225,
        savings: 60,
        popular: true
      },
      {
        id: 'accelerator',
        name: 'Accelerator',
        sessions: 10,
        description: 'Comprehensive training from basics to advanced topics. Become a database expert.',
        price: 315,
        originalPrice: 450,
        savings: 135,
        popular: false
      }
    ],

    features: [
      'SQL fundamentals and advanced queries',
      'Database design and normalization',
      'Performance optimization techniques',
      'PostgreSQL and MySQL expertise',
      'Indexing strategies and query plans',
      'Transaction management and ACID principles',
      'Real-world project practice',
      'Best practices and design patterns',
    ],

    outcomes: [
      'Write efficient, optimized SQL queries',
      'Design scalable, well-structured databases',
      'Understand query execution and performance',
      'Debug and troubleshoot database issues',
      'Handle complex data relationships confidently',
      'Apply database best practices consistently',
    ],

    whoIsItFor: [
      'Developers learning backend skills',
      'Data analysts needing SQL proficiency',
      'Database administrators upskilling',
      'Students in database or CS courses',
      'Anyone working extensively with data',
      'Self-taught programmers filling knowledge gaps',
    ],

    process: [
      {
        step: 1,
        title: 'SQL Basics',
        description: 'Master SELECT, JOIN, WHERE, and fundamental query syntax',
      },
      {
        step: 2,
        title: 'Database Design',
        description: 'Learn normalization, relationships, ER diagrams, and schema architecture',
      },
      {
        step: 3,
        title: 'Advanced Queries',
        description: 'Subqueries, CTEs, window functions, and complex analytical queries',
      },
      {
        step: 4,
        title: 'Optimization',
        description: 'Indexing strategies, query plans, performance tuning, and scaling',
      },
    ],

    faqs: [
      {
        q: 'Which database system do you teach?',
        a: 'Primarily PostgreSQL and MySQL, but SQL concepts are universal and apply to SQL Server, Oracle, and others. I can adapt to your specific database if needed.',
      },
      {
        q: 'Is this suitable for complete beginners with no SQL experience?',
        a: 'Yes! I work with complete beginners all the time. We start with the basics and progress systematically to advanced topics.',
      },
      {
        q: 'Can you help with database design for my project or application?',
        a: 'Absolutely! I can help you design schemas, normalize tables, and architect databases for web apps, analytics platforms, or any data-driven application.',
      },
    ],
  },

  // ============================================
  // 6. CAREER DEVELOPMENT
  // ============================================
  {
    id: 'career',
    title: 'Career Development',
    category: 'Professional',
    subservices: ['Resume & CV Optimization', 'Interview Preparation', 'LinkedIn & Personal Branding', 'Career Strategy'],
    desc: 'Navigate career transitions with confidence. Get interviews, ace them, and negotiate offers like a pro.',
    shortDesc: 'Strategic coaching for job searches, career changes, and professional advancement.',
    icon: '💼',
    priceOriginal: '$60',
    price: '$45',
    detailedDesc: 'Your career deserves strategic planning, not hope and luck. Whether you\'re changing industries, seeking promotion, or entering the job market, I provide expert guidance on resumes, interviews, negotiation, and personal branding that gets results.',

    whatWeCover: [
      'Resume and CV optimization (ATS-friendly, impact-focused)',
      'LinkedIn profile transformation and personal branding strategy',
      'Interview preparation: behavioral, technical, case interviews',
      'Salary negotiation tactics and offer evaluation'
    ],

    lessonPlan: [
      { duration: '15m', activity: 'Assess current materials and discuss career goals' },
      { duration: '25m', activity: 'Strategy session and skill-building (resume, interview, networking)' },
      { duration: '15m', activity: 'Practice interviews or review/edit materials together' },
      { duration: '5m', activity: 'Action items and next steps for job search' }
    ],

    whatYouGet: [
      'ATS-optimized resume that passes screening software',
      'LinkedIn profile that attracts recruiters',
      'Interview preparation framework and practice questions',
      'Salary negotiation scripts and strategies'
    ],

    audienceContent: [
      {
        key: 'kids',
        label: 'Kids (K-12)',
        headline: 'Build early career awareness and professional skills',
        description: 'Develop presentation, communication, and goal-setting skills for future success.',
        focusPoints: [
          'Presentation and public speaking confidence',
          'Goal-setting and achievement planning',
          'Professional communication and etiquette basics'
        ],
        outcomes: [
          'Greater confidence in presentations and communication',
          'Understanding of career paths and possibilities',
          'Foundation of professional skills'
        ],
        whySuitable: [
          'Age-appropriate career exploration',
          'Builds confidence and communication skills',
          'Prepares for college applications and internships',
          'Develops goal-setting habits early'
        ],
        testimonial: {
          name: 'High School Student',
          text: 'The interview prep helped me land my first internship. I felt so prepared and confident!',
          result: 'First internship secured'
        }
      },
      {
        key: 'students',
        label: 'Students (University & College)',
        headline: 'Land competitive internships and launch your career strong',
        description: 'Stand out in applications, ace interviews, and secure top internships and graduate roles.',
        focusPoints: [
          'Resume writing for students: highlight projects, coursework, skills',
          'Internship and entry-level interview preparation',
          'LinkedIn optimization and professional networking strategies'
        ],
        outcomes: [
          'Land competitive internships at top companies',
          'Build professional network while in school',
          'Launch career with strong foundation and connections'
        ],
        whySuitable: [
          'Student-focused resume templates and examples',
          'Internship interview preparation',
          'Networking strategies for students',
          'Career guidance from someone who\'s been there'
        ],
        testimonial: {
          name: 'College Senior',
          text: 'I went from no responses to 5 internship offers! The resume transformation was incredible.',
          result: 'Landed dream internship'
        }
      },
      {
        key: 'professionals',
        label: 'Professionals',
        headline: 'Advance your career, change industries, or negotiate better offers',
        description: 'Strategic career coaching for professionals ready to level up.',
        focusPoints: [
          'Executive resume and CV writing (senior roles, career changers)',
          'Behavioral and technical interview mastery',
          'Salary negotiation: get what you\'re worth'
        ],
        outcomes: [
          'Get more interviews (8-10x increase typical)',
          'Navigate career transitions successfully',
          'Negotiate significantly higher salaries (avg 15-30% increase)'
        ],
        whySuitable: [
          'Experience with career changes and senior roles',
          'Proven negotiation strategies that work',
          'Personalized approach for your unique situation',
          'Quick turnaround for urgent job opportunities'
        ],
        testimonial: {
          name: 'Product Manager',
          text: 'The career coaching helped me land a senior role with a 40% salary increase. Best investment I\'ve ever made!',
          result: 'Senior role + 40% raise'
        }
      }
    ],

    sessionPacks: [
      {
        id: 'starter',
        name: 'Starter',
        sessions: 1,
        description: 'Quick resume review or interview prep session. Perfect for specific, immediate needs.',
        price: 45,
        originalPrice: 60,
        savings: 15,
        popular: false
      },
      {
        id: 'growth',
        name: 'Growth',
        sessions: 5,
        description: 'Complete job search package: resume, LinkedIn, interview prep, and strategy.',
        price: 210,
        originalPrice: 300,
        savings: 90,
        popular: true
      },
      {
        id: 'accelerator',
        name: 'Accelerator',
        sessions: 10,
        description: 'Comprehensive career transformation. Ideal for career changes or executive roles.',
        price: 405,
        originalPrice: 600,
        savings: 195,
        popular: false
      }
    ],

    features: [
      'Resume and LinkedIn optimization',
      'Cover letter and application strategy',
      'Interview preparation and mock interviews',
      'Salary negotiation coaching',
      'Job search strategy development',
      'Personal branding and online presence',
      'Networking skills and relationship building',
      'Career transition planning and support',
    ],

    outcomes: [
      'Get 8-10x more interview callbacks',
      'Pass interviews with confidence and poise',
      'Negotiate salaries 15-30% higher on average',
      'Build compelling personal brand',
      'Successfully navigate career transitions',
      'Land offers at target companies',
    ],

    whoIsItFor: [
      'Job seekers not getting enough interviews',
      'Career changers entering new industries',
      'Professionals seeking promotions',
      'Recent graduates entering the workforce',
      'Anyone feeling stuck in their career',
      'Executives making strategic career moves',
    ],

    process: [
      {
        step: 1,
        title: 'Career Assessment',
        description: 'Evaluate your skills, experience, goals, and current situation',
      },
      {
        step: 2,
        title: 'Strategy Development',
        description: 'Create personalized job search strategy and action plan',
      },
      {
        step: 3,
        title: 'Materials Creation',
        description: 'Build ATS-optimized resume, compelling LinkedIn, targeted cover letters',
      },
      {
        step: 4,
        title: 'Interview Mastery',
        description: 'Practice interviews, refine your pitch, prepare for tough questions',
      },
    ],

    faqs: [
      {
        q: 'How long does it typically take to see results?',
        a: 'Most clients start getting interviews within 2 weeks of implementing the new resume and strategy. Full job search outcomes typically happen within 4-8 weeks.',
      },
      {
        q: 'Do you specialize in career changes or specific industries?',
        a: 'Yes! Career transitions are my specialty. I\'ve helped people move between industries, change roles, and position themselves for new opportunities successfully.',
      },
      {
        q: 'Will my resume pass Applicant Tracking Systems (ATS)?',
        a: 'Absolutely. All resumes are optimized for ATS with proper formatting, keywords, and structure that both software and humans appreciate.',
      },
      {
        q: 'Can you help with salary negotiation even after I have an offer?',
        a: 'Yes! I provide specific scripts, strategies, and negotiation tactics. Even one session can lead to thousands of dollars in additional compensation.',
      },
    ],
  },
];

export function getServiceById(id: string): Service | undefined {
  return SERVICES.find(s => s.id === id);
}