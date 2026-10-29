import type { icons } from './skill-icons';

export type Skill = {
  name: string;
  icon: keyof typeof icons;
};

export const skills: Skill[] = [
  { name: 'HTML', icon: 'html' },
  { name: 'CSS', icon: 'css' },
  { name: 'JavaScript', icon: 'javascript' },
  { name: 'React', icon: 'react' },
  { name: 'Astro', icon: 'astro' },
  { name: 'Tailwind CSS', icon: 'tailwind' },
  { name: 'Node.js', icon: 'nodejs' },
  { name: 'Express.js', icon: 'express' },
  { name: 'MongoDB', icon: 'mongodb' },
  { name: 'MySQL', icon: 'mysql' },
  { name: 'REST APIs', icon: 'rest' },
  { name: 'Git / GitHub', icon: 'git' },
  { name: 'Docker', icon: 'docker' },
  { name: 'Jira', icon: 'jira' },
  { name: 'Trello', icon: 'trello' },
  { name: 'Postman', icon: 'postman' },
  { name: 'Cypress', icon: 'cypress' },
  { name: 'JWT', icon: 'jwt' },
];
