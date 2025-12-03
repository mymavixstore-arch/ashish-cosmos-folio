import { motion } from 'framer-motion';
import { Download, MapPin, Calendar, Briefcase, GraduationCap, Code2, Camera, Palette } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';

const skills = [
  { name: 'React / Next.js', level: 95 },
  { name: 'TypeScript', level: 90 },
  { name: 'Node.js', level: 85 },
  { name: 'Python', level: 80 },
  { name: 'PostgreSQL', level: 85 },
  { name: 'AWS / Cloud', level: 75 },
];

const timeline = [
  {
    year: '2023 - Present',
    title: 'Senior Full-Stack Developer',
    company: 'Tech Innovations Inc.',
    description: 'Leading development of enterprise SaaS products, mentoring junior developers, and architecting scalable solutions.',
    icon: Briefcase,
  },
  {
    year: '2021 - 2023',
    title: 'Full-Stack Developer',
    company: 'Digital Solutions Co.',
    description: 'Built and maintained multiple client projects, implemented CI/CD pipelines, and improved team workflows.',
    icon: Code2,
  },
  {
    year: '2019 - 2021',
    title: 'Frontend Developer',
    company: 'StartupXYZ',
    description: 'Developed responsive web applications, collaborated with design teams, and optimized performance.',
    icon: Palette,
  },
  {
    year: '2015 - 2019',
    title: 'B.Tech in Computer Science',
    company: 'University of Technology',
    description: 'Specialized in software engineering and machine learning. Published research on AI applications.',
    icon: GraduationCap,
  },
];

export default function About() {
  return (
    <Layout>
      <section className="py-12">
        <div className="container px-6">
          {/* Hero */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
                About <span className="gradient-text">Me</span>
              </h1>
              <div className="flex flex-wrap gap-4 mb-6 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  Mumbai, India
                </span>
                <span className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-primary" />
                  5+ Years Experience
                </span>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                I'm Ashish M. Muley, a passionate full-stack developer and photographer based in Mumbai. 
                I specialize in building scalable web applications and capturing moments that tell stories.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                My journey in tech started with curiosity about how things work on the internet. Today, 
                I create digital experiences that combine technical excellence with thoughtful design. 
                When I'm not coding, you'll find me exploring nature with my camera or experimenting 
                with new technologies.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="hero" asChild>
                  <a href="/resume.pdf" download>
                    <Download className="h-4 w-4" />
                    Download Resume
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="mailto:ashish@muley.dev">
                    Get In Touch
                  </a>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl overflow-hidden glass-card p-2">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop"
                  alt="Ashish M. Muley"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-2xl bg-primary/20 -z-10" />
              <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-accent/20 -z-10" />
            </motion.div>
          </div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-3xl font-display font-bold mb-8 text-center">
              Technical <span className="gradient-text">Skills</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card p-4"
                >
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-primary font-semibold">{skill.level}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-secondary overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-display font-bold mb-12 text-center">
              My <span className="gradient-text">Journey</span>
            </h2>
            <div className="relative max-w-3xl mx-auto">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border md:left-1/2 md:-translate-x-0.5" />

              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className={`relative flex items-start gap-6 mb-12 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Icon */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center glow">
                      <item.icon className="h-5 w-5 text-primary-foreground" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`glass-card p-6 ml-20 md:ml-0 md:w-[calc(50%-40px)] ${
                    index % 2 === 0 ? 'md:mr-auto md:text-right' : 'md:ml-auto'
                  }`}>
                    <span className="text-sm text-primary font-medium">{item.year}</span>
                    <h3 className="font-display font-semibold text-lg mt-1">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.company}</p>
                    <p className="text-muted-foreground text-sm mt-2">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Interests */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 text-center"
          >
            <h2 className="text-3xl font-display font-bold mb-8">
              Beyond <span className="gradient-text">Code</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
              {[
                { icon: Camera, label: 'Photography' },
                { icon: Code2, label: 'Open Source' },
                { icon: Palette, label: 'UI Design' },
              ].map((interest, index) => (
                <motion.div
                  key={interest.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="stat-card flex flex-col items-center gap-3"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <interest.icon className="h-6 w-6 text-primary" />
                  </div>
                  <span className="font-medium">{interest.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
