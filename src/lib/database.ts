import type { Action, Character, Project, Skill } from "./types"

export let skills:{[key:string]: Skill} = {
  javascript: { 
    id: 'javascript',  
    name: 'Javascript', 
    category: 'programming_language',
    mental_health: -3,
    physical_health: -1,
  },
  php: { 
    id: 'php', 
    name: 'PHP', 
    category: 'programming_language',
    mental_health: -3,
    physical_health: -1,
  },
  python: { 
    id: 'python', 
    name: 'Python', 
    category: 'programming_language',
    mental_health: -3,
    physical_health: -1,
  },
  html: { 
    id: 'html', 
    name: 'HTML', 
    category: 'frontend_skill',
    mental_health: -3,
    physical_health: -1,
  },
  css: { 
    id: 'css', 
    name: 'CSS', 
    category: 'frontend_skill',
    mental_health: -3,
    physical_health: -1,
  },
  restapi: { 
    id: 'restapi', 
    name: 'Rest API', 
    category: 'backend_skill',
    mental_health: -3,
    physical_health: -1,
  },
  mysql: { 
    id: 'mysql', 
    name: 'MySQL', 
    category: 'backend_skill',
    mental_health: -3,
    physical_health: -1,
  },
  mongodb: { 
    id: 'mongodb', 
    name: 'MongoDB', 
    category: 'backend_skill',
    mental_health: -3,
    physical_health: -1,
  },
  elastic: { 
    id: 'elastic', 
    name: 'ElasticSearch', 
    category: 'backend_skill',
    mental_health: -3,
    physical_health: -1,
  },
  organization: { 
    id: 'organization', 
    name: 'Organize tasks', 
    category: 'soft_skill',
    mental_health: -3,
    physical_health: -1,
  },
  teammeeting: { 
    id: 'teammeeting', 
    name: 'Team meeting', 
    category: 'soft_skill',
    mental_health: -3,
    physical_health: -1,
  },
  stretch: {
    id: 'stretch',
    name: 'Stretch',
    category: 'exercise',
    mental_health: 0,
    physical_health: 1
  },
  walk: {
    id: 'walk',
    name: 'Walk',
    category: 'exercise',
    mental_health: 1,
    physical_health: 1
  },
  videogames: {
    id: 'videogames',
    name: 'Play video games',
    category: 'break',
    mental_health: 2,
    physical_health: -1,
  },
  watchtv: {
    id: 'watchtv',
    name: 'Watch TV',
    category: 'break',
    mental_health: 1,
    physical_health: -1
  },
  sleep: {
    id: 'sleep',
    name: 'Sleep',
    category: 'break',
    mental_health: 2,
    physical_health: 0,
  }
}

export let actions:Action[] = [
  {
    name: 'Write code',
    category: 'programming_language',
  },
  {
    name: 'Design architecture',
    category: 'tech_experience',
  },
  {
    name: 'Visual Design',
    category: 'frontend_skill',
  },
  {
    name: 'Design API',
    category: 'backend_skill',
  },
  {
    name: 'Management',
    category: 'soft_skill'
  },
  {
    name: 'Take a break',
    category: 'break',
  },
  {
    name: 'Exercise',
    category: 'exercise',
  }
]

export let chars:Character[] = [
  {
    name: 'Alex',
    description: '40 year old developer who has worked on multiple different projects',
    max_mental_health: 20,
    max_physical_health: 20, 
    mental_health: 20,
    physical_health: 20, 
    time: 0,
    skills: [
      { base: skills.organization, affinity: 1, level: 7 },
      { base: skills.teammeeting, affinity: 2, level: 7 },
      { base: skills.javascript, affinity: 2, level: 9 },
      { base: skills.php, affinity: 1, level: 9},
      { base: skills.html, affinity: 1, level: 8},
      { base: skills.css, affinity: 1, level: 7},
      { base: skills.restapi, affinity: 2, level: 8},
      { base: skills.mysql, affinity: 2, level: 8},
      { base: skills.stretch, affinity: 2, level: 10},
      { base: skills.walk, affinity: 0, level: 10},
      { base: skills.videogames, affinity: 2, level: 10},
      { base: skills.watchtv, affinity: 0, level: 10},
    ]
  },
  {
    name: 'Max',
    description: 'Junior developer eager to learn and create cool new stuff',
    max_mental_health: 100,
    max_physical_health: 100, 
    mental_health: 100,
    physical_health: 100,
    time: 0,
    skills: [
      { base: skills.organization, affinity: 0, level: 5 },
      { base: skills.teammeeting, affinity: 2, level: 5 },
      { base: skills.javascript, affinity: 2, level: 6 },
      { base: skills.html, affinity: 2, level: 5},
      { base: skills.css, affinity: 2, level: 5},
      { base: skills.mysql, affinity: 2, level: 6},
      { base: skills.stretch, affinity: 0, level: 10},
      { base: skills.walk, affinity: 0, level: 10},
      { base: skills.videogames, affinity: 2, level: 10},
      { base: skills.watchtv, affinity: 0, level: 10},
    ]
  }
]

export let projects:Project[] = [
  { 
    name: 'Create a blog',
    description: 'Create a website where we can post simple articles. Can be done using Javascript, PHP or Python',
    requirements: [
      { 
        name: 'Programming',
        options: [
          { skill: skills.javascript, total: 50 },
          { skill: skills.php, total: 50 },
          { skill: skills.python, total: 70 },
        ]
      },
      {
        name: 'HTML',
        options: [ 
          { skill: skills.html, total: 10 } 
        ]
      },
      {
        name: 'CSS', 
        options: [ 
          { skill: skills.css, total: 10 } 
        ]
      },
      {
        name: 'Organization',
        options: [ 
          { skill: skills.organization, total: 30 }
        ]
      }
    ],
  },
  {
    name: 'Create a product catalog',
    description: 'Create a website to show and maintain our product catalog. Can be done using Javascript, PHP or Python.',
    requirements: [
      {
        name: 'Programming',
        options: [
          { skill: skills.javascript, total: 60 },
          { skill: skills.php, total: 60 },
          { skill: skills.python, total: 75 },
        ]
      },
      {
        name: 'HTML',
        options: [ 
          { skill: skills.html, total: 15 } 
        ]
      },
      {
        name: 'CSS',
        options: [ 
          { skill: skills.css, total: 15 } 
        ]
      },
      { 
        name: 'Organization',
        options: [ 
          { skill: skills.organization, total: 50 }
        ]
      },
    ]
  },
  {
    name: 'Create a payment API mechanism',
    description: 'Upgrade an app to support paying using a credit card, using a bank provider. You can use either Javascript or Python.',
    requirements: [
      {
        name: 'Programming',
        options: [
          { skill: skills.javascript, total: 60},
          { skill: skills.python, total: 75},
        ]
      },
      {
        name: 'Rest API',
        options: [ 
          { skill: skills.restapi, total: 50 } 
        ],
      },
      {
        name:'Organization',
        options: [ 
          { skill: skills.organization, total: 90 }
         ],
      }
    ]
  }
]