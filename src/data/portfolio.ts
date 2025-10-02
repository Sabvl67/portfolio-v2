/**
 * Portfolio content data
 * Centralized data for easy content management
 */

import { Project, Skill, SocialLink } from '../types';

export const heroData = {
  name: 'Anh Vo',
  tagline: 'Full-Stack Developer & Problem Solver',
  intro: `I'm a passionate software developer who loves building elegant solutions to complex problems.
  With a focus on clean code and user experience, I transform ideas into impactful digital products.
  When I'm not coding, you'll find me exploring new technologies or contributing to open source.`
};

export const skills: Skill[] = [
  // Technical Skills
  { name: 'React / TypeScript', category: 'technical', level: 5 },
  { name: 'Node.js / Express', category: 'technical', level: 5 },
  { name: 'Python / Django', category: 'technical', level: 4 },
  { name: 'PostgreSQL / MongoDB', category: 'technical', level: 4 },
  { name: 'AWS / Docker', category: 'technical', level: 4 },
  { name: 'GraphQL / REST APIs', category: 'technical', level: 5 },
  { name: 'CI/CD / Testing', category: 'technical', level: 4 },
  { name: 'Git / Agile', category: 'technical', level: 5 },

  // Soft Skills
  { name: 'Problem Solving', category: 'soft', level: 5 },
  { name: 'Team Collaboration', category: 'soft', level: 5 },
  { name: 'Communication', category: 'soft', level: 4 },
  { name: 'Mentorship', category: 'soft', level: 4 },
];

export const projects: Project[] = [
  {
    id: '1',
    title: 'Real-Time Collaboration Platform',
    description: 'Built a scalable real-time collaboration tool for remote teams with live document editing, video chat, and project management features.',
    stack: ['React', 'TypeScript', 'Node.js', 'WebSocket', 'PostgreSQL', 'Redis', 'Docker'],
    challenges: 'Implemented operational transformation for conflict-free collaborative editing and optimized WebSocket connections to handle 10k+ concurrent users.',
    results: 'Reduced team coordination time by 40%, processing 1M+ messages daily with 99.9% uptime.',
    image: '/project1.jpg',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/example'
  },
  {
    id: '2',
    title: 'AI-Powered Analytics Dashboard',
    description: 'Developed an intelligent analytics platform that uses machine learning to provide actionable insights from business data.',
    stack: ['React', 'Python', 'TensorFlow', 'FastAPI', 'MongoDB', 'AWS'],
    challenges: 'Integrated ML models for predictive analytics while maintaining sub-second query response times on datasets with 100M+ records.',
    results: 'Increased prediction accuracy to 94%, helping clients identify revenue opportunities worth $2M+.',
    image: '/project2.jpg',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/example'
  },
  {
    id: '3',
    title: 'E-Commerce Platform Modernization',
    description: 'Led migration of legacy e-commerce system to modern microservices architecture, improving performance and scalability.',
    stack: ['React', 'Node.js', 'GraphQL', 'Kubernetes', 'Kafka', 'Stripe'],
    challenges: 'Designed zero-downtime migration strategy, refactored monolithic codebase into 12 microservices, and implemented event-driven architecture.',
    results: 'Reduced page load times by 65%, increased conversion rates by 28%, and cut infrastructure costs by 35%.',
    image: '/project3.jpg',
    githubUrl: 'https://github.com/example'
  },
  {
    id: '4',
    title: 'Developer Productivity CLI Tool',
    description: 'Created an open-source CLI tool that automates repetitive development workflows and integrates with popular dev tools.',
    stack: ['TypeScript', 'Node.js', 'Commander.js', 'Inquirer', 'Jest'],
    challenges: 'Built plugin architecture for extensibility, implemented smart caching for performance, and achieved 90%+ test coverage.',
    results: '5k+ GitHub stars, 50k+ weekly downloads, saves developers an average of 5 hours per week.',
    image: '/project4.jpg',
    githubUrl: 'https://github.com/example'
  }
];

export const socialLinks: SocialLink[] = [
  { name: 'GitHub', url: 'https://github.com/yourusername', icon: 'github' },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/yourusername', icon: 'linkedin' },
  { name: 'Twitter', url: 'https://twitter.com/yourusername', icon: 'twitter' },
  { name: 'Email', url: 'mailto:your.email@example.com', icon: 'email' },
];
