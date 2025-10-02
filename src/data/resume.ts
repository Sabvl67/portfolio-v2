/**
 * Resume content data
 * Centralized data for the resume section
 */

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

export const resumeData = {
  contactInfo: {
    name: 'Anh Vo',
    address: [
      '123 Main Street',
      'San Francisco, CA 94102',
      'United States'
    ],
    email: 'anh.vo@example.com',
    phone: '+1 (555) 123-4567',
    website: 'anhvo.dev',
    bio: 'Full-stack developer and creative problem solver with a passion for building elegant, user-centered digital experiences. With expertise spanning modern web technologies, I specialize in transforming complex challenges into intuitive solutions. My approach combines technical excellence with design thinking, ensuring every project delivers both aesthetic appeal and functional value. When I\'m not coding, I\'m exploring emerging technologies and contributing to open-source communities.'
  },

  workExperience: [
    {
      name: 'Tech Innovations Inc.',
      year: '2022-Present',
      role: 'Senior Full-Stack Developer',
      description: 'Leading development of scalable web applications using React, TypeScript, and Node.js. Architected microservices infrastructure serving 100k+ daily users, reducing response times by 45%. Mentoring junior developers and establishing best practices for code quality and testing.'
    },
    {
      name: 'Digital Creative Studio',
      year: '2020-2022',
      role: 'Full-Stack Developer',
      description: 'Developed custom web applications and e-commerce platforms for diverse clients. Implemented responsive designs and optimized performance, achieving 95+ Lighthouse scores. Collaborated with design teams to translate creative visions into functional products.'
    },
    {
      name: 'Startup Accelerator Project',
      year: '2019-2020',
      role: 'Frontend Developer',
      description: 'Built interactive user interfaces for SaaS platform using React and Redux. Implemented real-time features with WebSocket, enhancing user engagement by 60%. Participated in agile development cycles and rapid prototyping sessions.'
    },
    {
      name: 'Freelance Development',
      year: '2018-2019',
      role: 'Web Developer & Designer',
      description: 'Designed and developed websites for small businesses and startups. Managed full project lifecycle from client consultation to deployment. Created custom WordPress themes and plugins, focusing on performance and SEO optimization.'
    }
  ],

  education: [
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'University of California, Berkeley',
      year: '2014-2018',
      details: 'Focus on Software Engineering and Human-Computer Interaction. Dean\'s List, GPA: 3.8/4.0'
    },
    {
      degree: 'Full-Stack Web Development Bootcamp',
      institution: 'Coding Academy',
      year: '2018',
      details: 'Intensive 12-week program covering modern web technologies, agile methodologies, and best practices'
    }
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
  ]
};
