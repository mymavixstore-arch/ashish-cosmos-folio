import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink, Github } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with real-time inventory, payment processing, and admin dashboard.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=500&fit=crop',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    link: '/projects/ecommerce',
    demo: '#',
    github: '#',
  },
  {
    id: 2,
    title: 'AI Image Generator',
    description: 'Web application leveraging machine learning to generate unique artwork from text prompts.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop',
    tags: ['Next.js', 'Python', 'TensorFlow', 'AWS'],
    link: '/projects/ai-generator',
    demo: '#',
    github: '#',
  },
  {
    id: 3,
    title: 'Smart Home Dashboard',
    description: 'IoT dashboard for monitoring and controlling smart home devices with real-time data visualization.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=500&fit=crop',
    tags: ['React', 'MQTT', 'D3.js', 'Raspberry Pi'],
    link: '/projects/smart-home',
    demo: '#',
    github: '#',
  },
];

export function FeaturedProjects() {
  return (
    <section className="py-20">
      <div className="container px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-display font-bold mb-2"
            >
              Featured <span className="gradient-text">Projects</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground"
            >
              A selection of my recent work and side projects
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Button variant="ghost" asChild>
              <Link to="/projects">
                View All Projects
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="project-card group"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6 gap-3">
                  <Button size="sm" variant="glass" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                      Demo
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
                <h3 className="font-display font-semibold text-xl mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
