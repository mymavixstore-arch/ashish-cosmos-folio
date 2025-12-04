import { motion } from 'framer-motion';
import { Download, MapPin, Calendar, Briefcase, GraduationCap, Code2, Cpu, Wrench } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { ExpertiseTabs } from '@/components/about/ExpertiseTabs';

const timeline = [
  {
    year: '2023 - Present',
    title: 'Instrumentation Design Engineer',
    company: 'EPC Projects',
    description: 'Working on large-scale SPI/Intools projects for ADNOC, Technip Energies, and other major clients.',
    icon: Wrench,
  },
  {
    year: '2019 - Present',
    title: 'IoT Developer & Hardware Engineer',
    company: 'Freelance & R&D',
    description: 'Developing custom IoT solutions, embedded systems, PCB designs, and automation projects.',
    icon: Cpu,
  },
  {
    year: '2018 - 2023',
    title: 'Engineering Projects',
    company: 'Various Clients',
    description: '100+ industrial and R&D projects completed across multiple domains.',
    icon: Code2,
  },
  {
    year: '2015 - 2019',
    title: 'B.Tech in Instrumentation',
    company: 'University',
    description: 'Specialized in instrumentation engineering with focus on automation and control systems.',
    icon: GraduationCap,
  },
];

export default function About() {
  return (
    <Layout>
      <section className="py-8 md:py-12">
        <div className="container px-4 md:px-6">
          {/* Hero */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 md:mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4 md:mb-6">
                About <span className="gradient-text">Me</span>
              </h1>
              <div className="flex flex-wrap gap-3 md:gap-4 mb-4 md:mb-6 text-xs sm:text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <MapPin className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
                  Mumbai, India
                </span>
                <span className="flex items-center gap-2">
                  <Calendar className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
                  1.5+ Yrs (Instrumentation) | 5+ Yrs (IoT)
                </span>
              </div>
              <p className="text-sm sm:text-base text-muted-foreground mb-4 md:mb-6 leading-relaxed">
                I'm Ashish M. Muley, an Instrumentation Design Engineer and IoT Developer from Mumbai. 
                I specialize in SPI/Intools, SPEL, IoT systems, PCB design, automation, and engineering project development.
              </p>
              <p className="text-sm sm:text-base text-muted-foreground mb-4 md:mb-8 leading-relaxed">
                My journey began with building small embedded systems and understanding how hardware interacts with the real world. 
                Today, I work on large-scale industrial instrumentation projects, create intelligent IoT solutions, 
                and develop smart engineering tools that improve productivity and accuracy.
              </p>
              <p className="text-sm sm:text-base text-muted-foreground mb-6 md:mb-8 leading-relaxed hidden sm:block">
                When I'm not working on SPI/SPEL or hardware projects, you'll find me experimenting with robotics, 
                designing PCBs, testing new sensors, or learning the latest technologies that push innovation forward.
              </p>
              <div className="flex flex-wrap gap-3 md:gap-4">
                <Button variant="hero" size="sm" className="text-xs sm:text-sm" asChild>
                  <a href="/resume.pdf" download>
                    <Download className="h-3 w-3 sm:h-4 sm:w-4" />
                    Download Resume
                  </a>
                </Button>
                <Button variant="outline" size="sm" className="text-xs sm:text-sm" asChild>
                  <a href="mailto:mail.ashishmuley@gmail.com">
                    Get In Touch
                  </a>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative max-w-sm mx-auto lg:max-w-none"
            >
              <div className="aspect-square rounded-2xl md:rounded-3xl overflow-hidden glass-card p-1.5 md:p-2">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop"
                  alt="Ashish M. Muley"
                  className="w-full h-full object-cover rounded-xl md:rounded-2xl"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 w-16 h-16 md:w-24 md:h-24 rounded-xl md:rounded-2xl bg-primary/20 -z-10" />
              <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6 w-20 h-20 md:w-32 md:h-32 rounded-full bg-accent/20 -z-10" />
            </motion.div>
          </div>

          {/* Expertise Tabs */}
          <ExpertiseTabs />

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl font-display font-bold mb-8 md:mb-12 text-center">
              My <span className="gradient-text">Journey</span>
            </h2>
            <div className="relative max-w-3xl mx-auto">
              {/* Timeline line */}
              <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-0.5 bg-border md:left-1/2 md:-translate-x-0.5" />

              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className={`relative flex items-start gap-4 sm:gap-6 mb-8 md:mb-12 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Icon */}
                  <div className="absolute left-6 sm:left-8 md:left-1/2 -translate-x-1/2 z-10">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary flex items-center justify-center glow">
                      <item.icon className="h-4 w-4 sm:h-5 sm:w-5 text-primary-foreground" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`glass-card p-4 sm:p-6 ml-16 sm:ml-20 md:ml-0 md:w-[calc(50%-40px)] ${
                    index % 2 === 0 ? 'md:mr-auto md:text-right' : 'md:ml-auto'
                  }`}>
                    <span className="text-xs sm:text-sm text-primary font-medium">{item.year}</span>
                    <h3 className="font-display font-semibold text-base sm:text-lg mt-1">{item.title}</h3>
                    <p className="text-muted-foreground text-xs sm:text-sm">{item.company}</p>
                    <p className="text-muted-foreground text-xs sm:text-sm mt-2">{item.description}</p>
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
            className="mt-12 md:mt-20 text-center"
          >
            <h2 className="text-2xl sm:text-3xl font-display font-bold mb-6 md:mb-8">
              Beyond <span className="gradient-text">Work</span>
            </h2>
            <div className="grid grid-cols-3 gap-3 md:gap-4 max-w-md md:max-w-2xl mx-auto">
              {[
                { icon: Cpu, label: 'Robotics' },
                { icon: Code2, label: 'Open Source' },
                { icon: Wrench, label: 'PCB Design' },
              ].map((interest, index) => (
                <motion.div
                  key={interest.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="stat-card flex flex-col items-center gap-2 md:gap-3 p-3 md:p-4"
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-primary/10 flex items-center justify-center">
                    <interest.icon className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                  </div>
                  <span className="font-medium text-xs sm:text-sm">{interest.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}