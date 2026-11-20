export const QUIZ_QUESTIONS = [
  {
    id: 1,
    exam: 'JNVST / Sainik School',
    subject: 'Mental Ability / Intelligence',
    question: 'Find the odd one out among the four figures or words:',
    options: ['Circle', 'Square', 'Triangle', 'Cylinder'],
    correctIndex: 3,
    explanation: 'Circle, Square, and Triangle are two-dimensional (2D) plane geometric figures, whereas Cylinder is a three-dimensional (3D) solid figure.'
  },
  {
    id: 2,
    exam: 'AISSEE (Sainik School Class 6)',
    subject: 'Mathematics',
    question: 'A train 150 meters long passes an electric pole in 15 seconds. What is the speed of the train in km/h?',
    options: ['30 km/h', '36 km/h', '45 km/h', '54 km/h'],
    correctIndex: 1,
    explanation: 'Speed = Distance / Time = 150 m / 15 s = 10 m/s. To convert m/s to km/h, multiply by 18/5: 10 * (18/5) = 36 km/h.'
  },
  {
    id: 3,
    exam: 'Banasthali / Navodaya',
    subject: 'English Comprehension & Grammar',
    question: 'Identify the correct collective noun: "A ______ of soldiers marched into the camp."',
    options: ['Flock', 'Regiment', 'Fleet', 'Swarm'],
    correctIndex: 1,
    explanation: 'A group of soldiers is called a "Regiment" or "Troop" or "Army". "Flock" is used for birds/sheep, "Fleet" for ships, and "Swarm" for bees/insects.'
  },
  {
    id: 4,
    exam: 'RK Mission Vidyapith',
    subject: 'General Science & Environment',
    question: 'Which component of blood is primarily responsible for clotting and stopping bleeding from a cut?',
    options: ['Red Blood Cells (RBC)', 'White Blood Cells (WBC)', 'Platelets', 'Hemoglobin'],
    correctIndex: 2,
    explanation: 'Blood platelets (thrombocytes) help clot blood, preventing excessive bleeding when an injury occurs. RBCs carry oxygen and WBCs fight infections.'
  },
  {
    id: 5,
    exam: 'All-India Class 6 Entrance',
    subject: 'Mathematics / Number System',
    question: 'What is the difference between the greatest 5-digit number and the smallest 5-digit number formed using digits 4, 0, 7, 2, 9 (without repetition)?',
    options: ['76,941', '77,391', '76,824', '77,292'],
    correctIndex: 1,
    explanation: 'Greatest 5-digit number formed: 97,420. Smallest 5-digit number (cannot start with 0): 20,479. Difference = 97,420 - 20,479 = 76,941. Wait: 97420 - 20479: 97420 - 20000 = 77420; 77420 - 479 = 76941. Let us choose 76,941!'
  }
];

// Quick correction for question 5 option indexing
QUIZ_QUESTIONS[4].correctIndex = 0; // 76,941 is index 0
QUIZ_QUESTIONS[4].explanation = 'Greatest 5-digit number formed: 97,420. Smallest 5-digit number (cannot start with 0): 20,479. Difference = 97,420 - 20,479 = 76,941.';
