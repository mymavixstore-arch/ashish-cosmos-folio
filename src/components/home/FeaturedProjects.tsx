import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const spiProjects = [
  {
    id: 1,
    title: 'ADNOC – Ruwais NGL Train 4',
    description: 'Instrumentation design project involving loop/tag creation, SPI wiring, datasheets, and documentation.',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&h=500&fit=crop',
    tags: ['SPI Intools 13.1'],
  },
  {
    id: 2,
    title: 'Technip Energies – Polypropylene Plant',
    description: 'Full instrumentation workflow including wiring, loop diagrams, EDE customization, and template/symbol creation. Team Lead role.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=500&fit=crop',
    tags: ['SPI Intools 11.0', 'Team Lead'],
  },
  {
    id: 3,
    title: 'ADNOC – Sulphur Granulation Plant 3',
    description: 'Specification sheets, wiring diagrams, loop diagram generation, and hook-up preparation.',
    image: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&h=500&fit=crop',
    tags: ['SPI Intools 13.1'],
  },
];

const rndProjects = [
  {
    id: 1,
    title: 'Quadcopter Drone (STM32 Flight Controller)',
    description: 'Custom STM32 flight controller with sensor fusion and stabilized flight algorithms.',
    image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&h=500&fit=crop',
    tags: ['STM32', 'IMU', 'PID', 'Embedded C'],
  },
  {
    id: 2,
    title: 'RS485/RS232 Multi-Sensor Industrial IoT Node',
    description: 'Industrial sensor hub with long-distance communication.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=500&fit=crop',
    tags: ['RS485/RS232', 'ESP32', 'Modbus RTU'],
  },
  {
    id: 3,
    title: 'LoRa-Based Remote Weather Station',
    description: 'Environmental sensing with long-range wireless communication.',
    image: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&h=500&fit=crop',
    tags: ['LoRa', 'ESP32-S3', 'Sensors'],
  },
];

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    description: string;
    image: string;
    tags: string[];
  };
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
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
          <Button size="sm" variant="glass">
            <ExternalLink className="h-4 w-4" />
            View Details
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
  );
}

export function FeaturedProjects() {
  return (
    <>
      {/* SPI Intools Projects */}
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
                Featured <span className="gradient-text">SPI Intools Projects</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-muted-foreground"
              >
                Large-scale instrumentation design projects for oil & gas industry
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
            {spiProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* R&D Projects */}
      <section className="py-20 bg-surface">
        <div className="container px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-4"
              >
                <Cpu className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">R&D & IoT</span>
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-display font-bold mb-2"
              >
                Featured <span className="gradient-text">R&D Projects</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-muted-foreground"
              >
                Innovative IoT and embedded systems projects
              </motion.p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rndProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
