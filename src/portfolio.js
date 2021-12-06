const header = {
  // all the properties are optional - can be left empty or deleted
  title: 'DT.'
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Teki Raga Deepthi',
  role: 'Software Developer',
  description:
    'Currently pursuing B.tech(7th semester) in Computer Science Engineering with specilization in Artificial Intelligence from Jain University,Bengaluru',
  resume: 'https://drive.google.com/file/d/1mwjf18QsnzA7889cc2TSCNLCXeDcidXS/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/deepthi-teki-49869b16a/',
    github: 'https://github.com/deepthiteki',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Backend Developer Intern',
    description:
      'Backend Development Internship at Verzeo Edutech pvt ltd. worked on CRM, Hiring management system and a community social media.',
    stack: ['NodeJs','MongoDB'],
    // sourceCode: 'https://github.com/deepthiteki/book-recommender-system',
    // livePreview: 'https://book-reco.herokuapp.com/',
  },
  {
    name: 'Book-Recommender System',
    description:
      'Predicts ratings of the books based on the reader\'s past ratings.',
    stack: ['Python', 'Tensorflow', 'React'],
    sourceCode: 'https://github.com/deepthiteki/book-recommender-system',
    livePreview: 'https://book-reco.herokuapp.com/',
  },
  // {
  //   name: 'CRUD',
  //   description:
  //     'CRUD operations with mongoDB and Node.js',
  //   stack: ['Node.js','MongoDB'],
  //   sourceCode: 'https://github.com/deepthiteki/crud-operations',
  //   // livePreview: 'https://github.com',
  // },
  {
    name: 'url-shortener',
    description:
      'Shortens url making it easier to share',
    stack: ['Node.js', 'React'],
    sourceCode: 'https://github.com/deepthiteki/url-shortener',
    livePreview: 'https://urlshortie.herokuapp.com/',
  },
  {
    name: 'Exercise-tracker',
    description:
      'tracks and maintains record of workout',
    stack: ['Node.js', 'React','MongoDB'],
    sourceCode: 'https://github.com/deepthiteki/exercisetracker',
    livePreview: 'https://workout-l.herokuapp.com/',
  },
  // {
  //   name: 'WordCloud Generator',
  //   description:
  //     'takes .txt file as input and generates wordcloud representing the frequency of significant words.',
  //   stack: ['Python'],
  //   sourceCode: 'https://github.com/deepthiteki/WordCloudGenerator',
  //   // livePreview: 'https://github.com',
  // },
  {
    name: 'Backend for e-commerce website-Freelance Project(NJ silks)',
    description:
      'Built backend using Node.js and MongoDB for an Indian clothing e-commerce website.',
    stack: ['Node.js','MongoDB'],
    // sourceCode: 'https://github.com/deepthiteki/WordCloudGenerator',//change it
    // livePreview: 'https://github.com',
  }

]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'C',
  'C++',
  'Java',
  'Python',
  'Docker',
  'AWS',
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Node Js',
  'Machine Learning',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'deepthi.teki09@gmail.com',
}

export { header, about, projects, skills, contact }
