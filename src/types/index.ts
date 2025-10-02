/**
 * Type definitions for the portfolio application
 */

export interface Project {
  id: string;
  title: string;
  description: string;
  stack: string[];
  challenges: string;
  results: string;
  image: string;
  liveUrl?: string;
  githubUrl?: string;
}

export interface Skill {
  name: string;
  category: 'technical' | 'soft';
  level?: number; // 1-5
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export type Theme = 'light' | 'dark';
