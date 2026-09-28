import type { SimpleIcon } from 'simple-icons';
import {
  siAngular,
  siCss,
  siDjango,
  siDocker,
  siHtml5,
  siLaravel,
  siMysql,
  siPhp,
  siPython,
  siTailwindcss,
  siTypescript,
} from 'simple-icons';

export type TechItem = {
  name: string;
  icon: SimpleIcon;
  color: string;
};

export type TechCategory = {
  id: string;
  title: string;
  description: string;
  items: TechItem[];
};

export const techCategories: TechCategory[] = [
  {
    id: 'backend',
    title: 'Backend & APIs',
    description: 'Contract-first services, transactional integrity, and production-ready REST surfaces.',
    items: [
      { name: 'Laravel', icon: siLaravel, color: '#FF2D20' },
      { name: 'Django REST', icon: siDjango, color: '#092E20' },
      { name: 'Python', icon: siPython, color: '#3776AB' },
      { name: 'PHP', icon: siPhp, color: '#777BB4' },
    ],
  },
  {
    id: 'system-design',
    title: 'System Design',
    description: 'Domain boundaries, concurrency models, and architectures that scale with financial workflows.',
    items: [
      { name: 'TypeScript', icon: siTypescript, color: '#3178C6' },
      { name: 'Python', icon: siPython, color: '#3776AB' },
      { name: 'Laravel', icon: siLaravel, color: '#FF2D20' },
      { name: 'Django', icon: siDjango, color: '#092E20' },
    ],
  },
  {
    id: 'frontend',
    title: 'Enterprise Frontend',
    description: 'Precise interfaces for operational dashboards, admin workflows, and banking product surfaces.',
    items: [
      { name: 'Angular', icon: siAngular, color: '#DD0031' },
      { name: 'TypeScript', icon: siTypescript, color: '#3178C6' },
      { name: 'Tailwind CSS', icon: siTailwindcss, color: '#06B6D4' },
      { name: 'HTML5', icon: siHtml5, color: '#E34F26' },
      { name: 'CSS3', icon: siCss, color: '#1572B6' },
    ],
  },
  {
    id: 'infra',
    title: 'Infrastructure & Databases',
    description: 'Reliable data layers and containerized delivery for environments that demand uptime.',
    items: [
      { name: 'MySQL', icon: siMysql, color: '#4479A1' },
      { name: 'Docker', icon: siDocker, color: '#2496ED' },
    ],
  },
];

export const stackIcons: Record<string, { icon: SimpleIcon; color: string }> = {
  Laravel: { icon: siLaravel, color: '#FF2D20' },
  MySQL: { icon: siMysql, color: '#4479A1' },
  Docker: { icon: siDocker, color: '#2496ED' },
  TypeScript: { icon: siTypescript, color: '#3178C6' },
  'Django REST': { icon: siDjango, color: '#092E20' },
  Python: { icon: siPython, color: '#3776AB' },
  Angular: { icon: siAngular, color: '#DD0031' },
  'Tailwind CSS': { icon: siTailwindcss, color: '#06B6D4' },
};
