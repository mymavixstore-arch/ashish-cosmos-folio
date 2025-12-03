import { motion } from 'framer-motion';
import { Code2, Camera, Coffee, Users } from 'lucide-react';

const stats = [
  {
    icon: Code2,
    value: '50+',
    label: 'Projects Completed',
    description: 'Web apps, mobile, & more',
  },
  {
    icon: Camera,
    value: '1000+',
    label: 'Photos Captured',
    description: 'Nature, portraits, events',
  },
  {
    icon: Users,
    value: '30+',
    label: 'Happy Clients',
    description: 'Worldwide collaborations',
  },
  {
    icon: Coffee,
    value: '∞',
    label: 'Cups of Coffee',
    description: 'And counting...',
  },
];

export function StatsSection() {
  return (
    <section className="py-20 bg-surface">
      <div className="container px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="stat-card text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-4">
                <stat.icon className="h-6 w-6" />
              </div>
              <div className="text-3xl md:text-4xl font-display font-bold gradient-text mb-1">
                {stat.value}
              </div>
              <div className="font-medium text-foreground mb-1">{stat.label}</div>
              <div className="text-sm text-muted-foreground">{stat.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
