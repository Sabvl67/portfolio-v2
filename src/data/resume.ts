export interface ContactInfo {
  name: string;
  address: string[];
  email: string;
  phone: string;
  website: string;
  bio: string;
}

export interface ExperienceEntry {
  name: string;
  year: string;
  role: string;
  description: string;
}

export interface EducationEntry {
  degree: string;
  institution: string;
  year: string;
  details?: string;
}

export interface ProjectEntry {
  name: string;
  technologies: string;
  description: string;
}

export interface AwardEntry {
  title: string;
  year: string;
  organization?: string;
}

export const resumeData = {
  contactInfo: {
    name: 'Anh Vo',
    address: [
      'Alberta, Canada'
    ],
    email: 'volequynhanh67@gmail.com',
    website: 'anhvo.dev',
  },

  workExperience: [
    {
      name: 'Ontario Power Generation',
      year: '2024-Apr/2025',
      role: 'Software Development Engineer',
      description: '• Developed and deployed full-stack applications (Angular, C#, ASP.NET, SQL) that improved system functionality and user experience, cutting retrieval times by 30%\n\n• Built analytics dashboards with SQL and Power BI, reducing manual checks and increasing equipment performance by 36%\n\n• Spearheaded electronic Work Plans & ITPs, projected to save $50M annually, modernizing regulatory compliance workflows\n\n• Designed digital facility navigation maps, streamlining contractor onboarding and reducing navigation time in complex plant environments'
    },
    {
      name: 'University of Lethbridge',
      year: 'Oct/2023-Aug/2024',
      role: 'Business Intelligence & AI Research Assistant',
      description: '• Applied Python-based data analysis (pandas, NumPy) to uncover insights, enabling informed business and research decisions.\n\n• Implemented machine learning models (OpenAI GPT, social media analytics) to evaluate public engagement strategies.\n\n• Researched API alternatives and data pipelines that improved system interoperability and reduced integration bottlenecks.\n\n •Co-organized Southern Alberta AI Conference 2024, engaging 300+ participants on AI’s business and ethical impacts.'
    },
    {
      name: 'AI4Good Lab',
      year: '2023-2024',
      role: 'Machine Learning Fellow',
      description: '• Trained ML models (TensorFlow, PyTorch) with emphasis on preprocessing, training, and evaluation for applied use cases.\n\n• Co-developed PlatePal, an AI-driven grocery planning platform using geospatial data and Q-learning, recognized with the Edmonton Accelerator Award for innovation against food insecurity.\n\n• Collaborated across disciplines to translate research into business-ready prototypes.'
    },
  ],

  education: [
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'University of Lethbridge',
      year: '2022-Present',
      details: 'Focus on Software Engineering and minor in Economics.'
    },
  ],

  skills: [
    'React & TypeScript',
    'Node.js & Express',
    'Python & Django',
    'PostgreSQL & MongoDB',
    'GraphQL & REST APIs',
    'Docker & Kubernetes',
    'AWS & Cloud Services',
    'CI/CD Pipelines',
    'UI/UX Design',
    'Agile & Scrum',
    'Git & Version Control',
    'Test-Driven Development'
  ],

  projects: [
    {
      name: 'iGEM Hyaluronic Team Website',
      year: '2024',
      technologies: 'Angular, C#, ASP.NET, SQL Server',
      description: 'Digital workflow system for nuclear regulatory compliance, projected to save $50M annually by modernizing paper-based processes.'
    },
    {
      name: 'Family Bloom',
      year: '2024',
      technologies: 'SQL, Power BI, C#',
      description: 'Real-time equipment monitoring dashboards that increased performance tracking efficiency by 36% and reduced manual inspection requirements.'
    },
        {
      name: 'PlatePal – AI-Driven Grocery Platform',
      technologies: 'Python, TensorFlow, Q-Learning, Geospatial APIs',
      description: 'AI-driven grocery planning platform that optimizes shopping routes and meal planning using machine learning and geospatial data to combat food insecurity.'
    }
  ],

  awards: [
    {
      title: 'Alberta Health Hack 2nd Place',
      organization: 'Arcurve & ACH Foundation',
      year: '2024',
    },
    {
      title: 'Edmonton Accelerator Award',
      organization: 'AI4Good Lab',
      year: '2023-2024',
    }
  ]
};
