export const COURSES = [
  {
    id: 'rk-mission',
    title: 'Ramakrishna Mission (RK Mission) Vidyapith',
    shortName: 'RK Mission Class 6',
    tag: 'Values & Academic Excellence',
    targetSchools: 'Deoghar, Narendrapur, Purulia, Rahara & Belur Math Schools',
    badgeColor: 'bg-orange-100 text-orange-800 border-orange-300',
    iconColor: 'text-orange-600',
    accentColor: '#ea580c',
    image: '/rk-mission-campus-hd.jpg',
    ageLimit: 'Age 10 to 11.5 years as of 1st January of admission year (Class 5 passed/appearing)',
    gender: 'Boys Only (co-ed in selected sister centers)',
    patternSummary: 'Subjective + Objective Written Test (Math, English, Science, Vernacular) followed by Personal Interview',
    totalMarks: '100 - 150 Marks (School specific)',
    highlights: [
      'Specialized Subjective Math & English grammar workshops',
      'Value Education & General Awareness modules',
      'One-on-one personal interview and personality screening guidance',
      'Bengali, Hindi & English medium specific study tracks',
      'Weekly descriptive test evaluation with personalized feedback'
    ],
    syllabus: [
      { subject: 'Mathematics', topics: 'Arithmetic, Fractions, Unitary Method, LCM/HCF, Geometry basics, Speed & Distance, Word Problems' },
      { subject: 'English', topics: 'Grammar fundamentals, Comprehension passage, Paragraph writing, Vocabulary & Idioms, Letter basics' },
      { subject: 'Vernacular / Second Language', topics: 'Hindi or Bengali comprehension, Grammar, Creative essay' },
      { subject: 'General Science & Mental Alertness', topics: 'Human body, Plant life, Natural phenomena, Logical aptitude, Environmental science' }
    ],
    interviewPrep: 'Detailed simulation sessions for oral interview and moral character assessment.',
    batchTiming: 'Weekday Evening & Weekend Intensive Batches available'
  },
  {
    id: 'banasthali',
    title: 'Banasthali Vidyapith (Class 6)',
    shortName: 'Banasthali Vidyapith',
    tag: 'Premier All-Girls Residential',
    targetSchools: 'Banasthali Vidyapith University Campus, Rajasthan',
    badgeColor: 'bg-rose-100 text-rose-800 border-rose-300',
    iconColor: 'text-rose-600',
    accentColor: '#e11d48',
    image: '/banasthali-campus-hd.jpg',
    ageLimit: 'Age 10 to 12 years (Class 5 passed/appearing)',
    gender: 'Girls Only',
    patternSummary: 'Aptitude Assessment & Merit Test in Language (Hindi/English), Mathematics, and General Awareness',
    totalMarks: '100 Marks',
    highlights: [
      'Tailored curriculum aligned with Panchmukhi Shiksha (Five-Fold Education)',
      'Special focus on girl-child mental confidence and public speaking',
      'Language mastery in both Hindi & English mediums',
      'Artistic, cognitive, and foundational reasoning development',
      'Past 10-year Banasthali assessment pattern question bank'
    ],
    syllabus: [
      { subject: 'Hindi & English Languages', topics: 'Reading comprehension, Vocabulary, Sentence structure, Applied grammar, Essay writing' },
      { subject: 'Mathematics', topics: 'Number system, Decimals, Measurement, Area & Perimeter, Data interpretation, Everyday math' },
      { subject: 'General Knowledge & Science', topics: 'Indian culture & heritage, Great personalities, Basic science concepts, Current affairs' },
      { subject: 'Aptitude & Creativity', topics: 'Pattern recognition, Critical reasoning, Observational intelligence' }
    ],
    interviewPrep: 'Interactive counseling and informal interview readiness training.',
    batchTiming: 'Dedicated Girls Mentorship Batches with senior women educators'
  },
  {
    id: 'navodaya',
    title: 'Jawahar Navodaya Vidyalaya (JNVST)',
    shortName: 'Jawahar Navodaya (JNVST)',
    tag: 'Govt. 100% Free Elite Residential',
    targetSchools: '661+ Navodaya Vidyalayas across all Indian districts',
    badgeColor: 'bg-blue-100 text-blue-800 border-blue-300',
    iconColor: 'text-blue-600',
    accentColor: '#2563eb',
    image: '/jnvst-card.jpg',
    ageLimit: 'Age 10 to 12 years (Strictly born between May 1, 2013 and July 31, 2015 as per official cycle)',
    gender: 'Boys & Girls (Co-educational, 75% Rural reservation)',
    patternSummary: 'OMR-based 80 Questions (100 Marks): Mental Ability (50 Marks), Arithmetic (25 Marks), Language (25 Marks)',
    totalMarks: '100 Marks (2 Hours)',
    highlights: [
      'Rigorous mastery of 10 Mental Ability Figure Patterns (Odd-man-out, Figure Matching, Mirror Images, Paper Folding)',
      'Speed-math calculation tricks to solve 20 arithmetic problems in under 25 minutes',
      'Unseen comprehension passage strategies in 21 regional languages & English/Hindi',
      '100+ OMR sheet practice simulations with barcode timer',
      'District-wise merit ranking analytics to ensure admission cutoff clearance'
    ],
    syllabus: [
      { subject: 'Mental Ability Test (MAT)', topics: 'Odd-One Out, Figure Matching, Pattern Completion, Figure Series, Analogy, Geometrical Figure Completion, Mirror Imaging, Punched Hole Pattern, Space Visualization, Embedded Figures (50 Marks)' },
      { subject: 'Arithmetic Test', topics: 'Number system, Four fundamental operations, Fractional numbers, Factors & Multiples, Decimals, Distance/Time/Speed, Profit & Loss, Simple Interest, Perimeter & Volume (25 Marks)' },
      { subject: 'Language Test', topics: '4 Reading passages with 20 questions assessing contextual vocabulary, inference, and direct retrieval (25 Marks)' }
    ],
    interviewPrep: 'No interview. Selection is 100% based on JNVST written OMR merit.',
    batchTiming: 'Morning & Evening Sessions with weekly Full-Length OMR Mock Exams'
  },
  {
    id: 'sainik-school',
    title: 'All India Sainik Schools Entrance (AISSEE)',
    shortName: 'Sainik School (AISSEE)',
    tag: 'Defense Academy & Leadership Pipeline',
    targetSchools: '33 Conventional Sainik Schools + 19+ New Approved Sainik Schools',
    badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-300',
    iconColor: 'text-emerald-600',
    accentColor: '#059669',
    image: '/sainik-school-card.jpg',
    ageLimit: 'Age 10 to 12 years as of 31st March of admission year',
    gender: 'Boys & Girls (Co-educational across all 33 Sainik Schools)',
    patternSummary: 'NTA Conducted 125 Questions (300 Marks): Math (150 Marks - 50%), GK (50 Marks), Language (50 Marks), Intelligence (50 Marks)',
    totalMarks: '300 Marks (150 Minutes)',
    highlights: [
      'High-weightage Mathematics drill (Each question carries 3 marks = 150/300 marks)',
      'Comprehensive Defense GK & Science booster modules',
      'Verbal & Non-Verbal Intelligence reasoning tricks',
      'Medical examination guidance and fitness orientation by retired defense personnel',
      'Negative marking avoidance and time allocation strategy'
    ],
    syllabus: [
      { subject: 'Mathematics (150 Marks - 50 Qs)', topics: 'Natural numbers, LCM/HCF, Unitary method, Fractions, Ratio & Proportion, Profit & Loss, Simple Interest, Geometry, Angles, Triangles, Circles, Area of 2D shapes, Roman numerals' },
      { subject: 'Intelligence (50 Marks - 25 Qs)', topics: 'Analogies, Pattern series, Classification, Logical sequences, Blood relations basics, Coding-decoding' },
      { subject: 'Language - English/Hindi/Regional (50 Marks - 25 Qs)', topics: 'Comprehension, Parts of speech, Prepositions, Articles, Tenses, Synonyms/Antonyms, Spelling correction' },
      { subject: 'General Knowledge (50 Marks - 25 Qs)', topics: 'Different types of scientific devices, Indian defense icons, Major sports, Historical monuments, States & Capitals, Health & Diseases, Solar system' }
    ],
    interviewPrep: 'Medical standard counseling and document verification drill.',
    batchTiming: 'Intensive 1-Year & 2-Year Foundation batches for Class 4 & 5 students'
  },
  {
    id: 'rms-foundation',
    title: 'Rashtriya Military School (RMS CET) & Unified Class 6 Elite',
    shortName: 'Rashtriya Military School (RMS)',
    tag: 'Prestigious Armed Forces Cadet Foundation',
    targetSchools: 'Chail, Ajmer, Belgaum, Bengaluru & Dholpur Military Schools',
    badgeColor: 'bg-indigo-100 text-indigo-800 border-indigo-300',
    iconColor: 'text-indigo-600',
    accentColor: '#4f46e5',
    image: '/rms-card.jpg',
    ageLimit: 'Age 10 to 12 years as of 31st March of admission year',
    gender: 'Boys & Girls',
    patternSummary: 'OMR Written Test: English (50 qualifying marks), Intelligence (50 marks), Math (50 marks), GK (50 marks) + Interview (20 marks)',
    totalMarks: '200 Marks (150 mins) + 20 Marks Interview',
    highlights: [
      'Integrated preparation matching both Sainik School and RMS CET syllabus',
      'English qualifying paper special module (Must score min 35% in English)',
      'Board interview coaching with retired armed forces officers',
      'Physical endurance and medical wellness orientation',
      'Mock interview board with video playback feedback'
    ],
    syllabus: [
      { subject: 'English (Qualifying - 50 Marks)', topics: 'Grammar, Jumbled sentences, One-word substitution, Spelling, Antonyms/Synonyms, Comprehension' },
      { subject: 'Intelligence Test (50 Marks)', topics: 'Reasoning, Spatial ability, Series completion, Venn diagrams, Classification' },
      { subject: 'Mathematics (50 Marks)', topics: 'Number system, Commercial math, Measurements, Basic geometry, Practical problem solving' },
      { subject: 'General Knowledge (50 Marks)', topics: 'Current national events, Military honors (Param Vir Chakra), Geography, Everyday science' }
    ],
    interviewPrep: 'Comprehensive 5-stage military school mock interview and cadet mannerisms program.',
    batchTiming: 'Residential & Day-Boarding Class 6 Entrance Batches'
  },
  {
    id: 'jamia-millia',
    title: 'Jamia Millia Islamia (JMI Schools - Class 6)',
    shortName: 'Jamia Millia Islamia',
    tag: 'Central University Elite Boarding',
    targetSchools: 'Jamia Senior Sec. School, Syed Abid Husain Sr. Sec., Jamia Girls Sr. Sec. School (New Delhi)',
    badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-300',
    iconColor: 'text-emerald-700',
    accentColor: '#047857',
    image: '/jamia-millia-card.jpg',
    ageLimit: 'Age 10 to 12 years as of 31st March of admission year (Class 5 passed/appearing)',
    gender: 'Boys & Girls (Separate & Co-ed Wings)',
    patternSummary: 'OMR Written Test: Environmental Studies (EVS), Mathematics, and English Language',
    totalMarks: '100 Marks (100 Objective Questions)',
    highlights: [
      'Comprehensive preparation for Jamia School Entrance Examination (Class 6)',
      'Strictly mapped to NCERT Class 5 EVS, Mathematics & English grammar syllabus',
      'Extensive OMR sheet speed drills with past 10-year question bank analysis',
      'Bilingual mentorship in English, Hindi & Urdu mediums',
      'Weekly sectional tests and personalized cutoff tracking'
    ],
    syllabus: [
      { subject: 'Environmental Studies / EVS (50 Marks)', topics: 'Family & Friends, Food & Nutrition, Shelter, Water, Travel, Things We Make and Do, Nature & Environment' },
      { subject: 'Mathematics (25 Marks)', topics: 'Shapes & Spatial Understanding, Numbers & Operations, Fractions, Decimals, Measurements, Perimeter & Area, Data Handling' },
      { subject: 'English Language (25 Marks)', topics: 'Unseen Reading Passages, Nouns/Pronouns, Adjectives, Verbs/Tenses, Prepositions, Conjunctions, Vocabulary & Synonyms' }
    ],
    interviewPrep: 'Admission is 100% written test merit-based.',
    batchTiming: 'Classroom & Live Interactive Hybrid Batches'
  }
];

export const STATS = [
  { value: '94.6%', label: 'Class 6 Entrance Selection Rate', description: 'Consistently highest in North & Central India' },
  { value: '1,480+', label: 'Selections in Sainik & Navodaya', description: 'Class 6 cadets serving across prestigious schools' },
  { value: '320+', label: 'RK Mission & Banasthali Scholars', description: 'Top ranks achieved in Deoghar & Banasthali' },
  { value: '1 : 15', label: 'Teacher to Student Ratio', description: 'Individual attention tailored for 10-12 year olds' }
];

export const SUCCESS_STORIES = [
  {
    name: 'Aarav Sharma',
    exam: 'AISSEE (Sainik School Ghorakhal)',
    rank: 'AIR 4 (Class 6)',
    score: '288 / 300',
    year: '2025-26',
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&q=80',
    quote: 'The speed math tricks and daily OMR tests at Inspire Institute made the 300-mark Sainik exam feel like second nature!'
  },
  {
    name: 'Ananya Deshmukh',
    exam: 'Banasthali Vidyapith',
    rank: 'Entrance Rank 1 (Class 6)',
    score: 'Selected with Merit Scholarship',
    year: '2025-26',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80',
    quote: 'Inspire Institute faculty built my confidence in English speech and mathematical reasoning. Their tagline "One Inspires Many" truly lives in their teaching!'
  },
  {
    name: 'Subhashis Banerjee',
    exam: 'RK Mission Vidyapith Deoghar',
    rank: 'Top 5 Selection (Class 6)',
    score: '138 / 150',
    year: '2025-26',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    quote: 'RK Mission exams test deep concepts and character. The subjective evaluation and mock interview sessions at Inspire were unmatched.'
  },
  {
    name: 'Priyanshu Verma',
    exam: 'Jawahar Navodaya Vidyalaya (JNV)',
    rank: 'District 1st Position (Class 6)',
    score: '98.75 / 100',
    year: '2025-26',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    quote: 'Navodaya non-verbal reasoning needs sharp eyes. Inspire taught us 10 shortcut techniques that solved every figure problem in 20 seconds.'
  }
];

export const TESTIMONIALS = [
  {
    parentName: 'Col. Rajeshwardeep Singh (Retd.)',
    studentName: 'Father of Cadet Ranvijay Singh',
    achievement: 'Selected in Sainik School Kapurthala & RMS Chail',
    content: 'Inspire Institute is laser-focused on Class 6 entrance examinations. The discipline, daily OMR tracking, and physical fitness counseling set them miles apart from regular tuition centers.',
    rating: 5
  },
  {
    parentName: 'Dr. Sunita Mukherjee',
    studentName: 'Mother of Soumya Mukherjee',
    achievement: 'Selected in Ramakrishna Mission Vidyapith Purulia',
    content: 'Getting into RK Mission requires subjective clarity and ethical discipline. The teachers at Inspire treated my son with immense care and taught him systematic answer presentation.',
    rating: 5
  },
  {
    parentName: 'Vikas & Meenakshi Agarwal',
    studentName: 'Parents of Radhika Agarwal',
    achievement: 'Selected in Banasthali Vidyapith Class 6',
    content: 'We were anxious about Banasthali entrance since few coaching institutes cater to it. Inspire Institute had dedicated study material and wonderful female mentors who guided our daughter flawlessly.',
    rating: 5
  }
];

export const FAQS = [
  {
    question: 'Why is Inspire Institute exclusively focused on Class 6 entrance examinations?',
    answer: 'Class 6 (ages 10-12) is the golden gateway into India’s most prestigious residential institutions like Sainik Schools, Navodaya Vidyalayas, RK Mission Vidyapiths, and Banasthali. These exams require specialized speed, non-verbal cognitive reasoning, and tailored child psychology that generic coaching institutes cannot provide. By focusing exclusively on Class 6, our entire faculty and curriculum are perfected for this critical age group.'
  },
  {
    question: 'What is the exact age eligibility criteria for Class 6 entrance exams in 2026-27?',
    answer: 'For Sainik School (AISSEE) & RMS: The candidate must be between 10 and 12 years of age as of 31st March of the admission year. For Navodaya (JNVST): Age 10 to 12 years (as specified in NVS official gazette). For RK Mission (Deoghar/Narendrapur): Generally 10 to 11.5 years on 1st January. Use our interactive Age Eligibility Checker tool on this page to check your child’s exact qualification status.'
  },
  {
    question: 'How do you prepare students for RK Mission subjective papers and interviews?',
    answer: 'Unlike purely objective tests, RK Mission exams emphasize deep foundational understanding, neat step-by-step mathematical working, descriptive English/vernacular essays, and good manners. We conduct weekly written subjective mock tests evaluated manually by senior educators, followed by mock interview panels that instill cultural grounding, polite articulation, and confidence.'
  },
  {
    question: 'Can girls apply for Sainik Schools and Navodaya Vidyalayas?',
    answer: 'Yes, absolutely! All 33 Sainik Schools now eagerly admit girl cadets in Class 6 following the historic Ministry of Defence directive. Jawahar Navodaya Vidyalayas have always been co-educational with dedicated girls hostels. Furthermore, for girls aspiring for world-class all-round education, our Banasthali Vidyapith preparation track offers unmatched mentorship.'
  },
  {
    question: 'What study material and test series are provided in the batch?',
    answer: 'Every student receives: (1) Comprehensive 8-Booklet Printed Study Kit tailored for Class 6 level, (2) 100+ OMR Answer Practice Sheets, (3) Past 10 Years Solved Question Papers (PYQ), (4) Weekly All-India Level Rank-Predictor Mock Tests, and (5) Daily 15-minute Speed Calculation Drills.'
  },
  {
    question: 'Is offline classroom coaching available, or is it online only?',
    answer: 'We provide both! Students can choose our Intensive Offline Classroom Batches (with digital smart boards and library facility) or our Live Interactive Online Hybrid Batches with two-way audio-video, class recordings, doubt-clearing rooms, and home delivery of printed books and OMR sets.'
  }
];
