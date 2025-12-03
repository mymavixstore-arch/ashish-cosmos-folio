import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Filter } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';

const categories = ['All', 'Web App', 'Mobile', 'AI/ML', 'IoT'];

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with real-time inventory management, secure payment processing via Stripe, and a comprehensive admin dashboard for analytics and order management.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=500&fit=crop',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    category: 'Web App',
    demo: '#',
    github: '#',
    featured: true,
  },
  {
    id: 2,
    title: 'AI Image Generator',
    description: 'Web application leveraging stable diffusion models to generate unique artwork from text prompts. Features include style transfer, image-to-image generation, and gallery sharing.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop',
    tags: ['Next.js', 'Python', 'TensorFlow', 'AWS'],
    category: 'AI/ML',
    demo: '#',
    github: '#',
    featured: true,
  },
  {
    id: 3,
    title: 'Smart Home Dashboard',
    description: 'IoT dashboard for monitoring and controlling smart home devices with real-time data visualization, automation rules, and energy consumption analytics.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=500&fit=crop',
    tags: ['React', 'MQTT', 'D3.js', 'Raspberry Pi'],
    category: 'IoT',
    demo: '#',
    github: '#',
    featured: true,
  },
  {
    id: 4,
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, drag-and-drop kanban boards, time tracking, and team collaboration features.',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=500&fit=crop',
    tags: ['React', 'Firebase', 'TypeScript', 'Tailwind'],
    category: 'Web App',
    demo: '#',
    github: '#',
  },
  {
    id: 5,
    title: 'Fitness Tracker',
    description: 'Cross-platform mobile app for tracking workouts, nutrition, and health metrics with personalized AI recommendations and social challenges.',
    image: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&h=500&fit=crop',
    tags: ['React Native', 'Node.js', 'MongoDB', 'TensorFlow'],
    category: 'Mobile',
    demo: '#',
    github: '#',
  },
  {
    id: 6,
    title: 'Weather Prediction ML',
    description: 'Machine learning model for hyperlocal weather prediction using ensemble methods. Integrates with IoT sensors for real-time data collection.',
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=500&fit=crop',
    tags: ['Python', 'PyTorch', 'FastAPI', 'Docker'],
    category: 'AI/ML',
    demo: '#',
    github: '#',
  },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = projects.filter(
    (project) => activeCategory === 'All' || project.category === activeCategory
  );

  return (
    <Layout>
      <section className="py-12">
        <div className="container px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
              My <span className="gradient-text">Projects</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A collection of projects I've worked on, from full-stack web applications 
              to machine learning experiments and IoT solutions.
            </p>
          </motion.div>

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex flex-wrap items-center justify-center gap-2 mb-12"
          >
            <Filter className="h-4 w-4 text-muted-foreground mr-2" />
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setActiveCategory(category)}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.article
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="project-card group"
                >
                  <div className="relative aspect-video overflow-hidden">
                    {project.featured && (
                      <div className="absolute top-3 left-3 z-10 px-3 py-1 rounded-full text-xs font-medium bg-primary text-primary-foreground">
                        Featured
                      </div>
                    )}
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6 gap-3">
                      <Button size="sm" variant="glass" asChild>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                      <Button size="sm" variant="glass" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4" />
                          Code
                        </a>
                      </Button>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-medium text-primary">{project.category}</span>
                    </div>
                    <h3 className="font-display font-semibold text-xl mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full text-xs font-medium bg-secondary text-secondary-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
