import { motion } from 'framer-motion';
import { Wrench, FlaskConical, Users } from 'lucide-react';

const stats = [
  {
    icon: Wrench,
    value: '3+',
    label: 'SPI Intools Projects Completed',
    description: 'ADNOC, Technip Energies, Reliance & more',
  },
  {
    icon: FlaskConical,
    value: '100+',
    label: 'Industrial & R&D Projects Completed',
    description: 'End-to-end engineering solutions',
  },
  {
    icon: Users,
    value: '100+',
    label: 'Happy Clients',
    description: 'Worldwide collaborations',
  },
];

// Animated Coffee Cup Component
function AnimatedCoffeeCup() {
  return (
    <div className="relative w-12 h-12 flex items-center justify-center">
      <svg viewBox="0 0 48 48" className="w-full h-full">
        {/* Cup body */}
        <path
          d="M8 18 h24 v20 c0 4 -4 6 -12 6 s-12 -2 -12 -6 z"
          fill="hsl(var(--primary))"
          opacity="0.2"
          stroke="hsl(var(--primary))"
          strokeWidth="2"
        />
        {/* Cup handle */}
        <path
          d="M32 22 c8 0 8 12 0 12"
          fill="none"
          stroke="hsl(var(--primary))"
          strokeWidth="2"
        />
        {/* Steam lines */}
        <motion.path
          d="M14 14 c0 -4 4 -4 4 -8"
          fill="none"
          stroke="hsl(var(--primary))"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ opacity: 0, y: 0 }}
          animate={{ 
            opacity: [0, 1, 0],
            y: [0, -4, -8]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeOut"
          }}
        />
        <motion.path
          d="M20 14 c0 -4 4 -4 4 -8"
          fill="none"
          stroke="hsl(var(--primary))"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ opacity: 0, y: 0 }}
          animate={{ 
            opacity: [0, 1, 0],
            y: [0, -4, -8]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeOut",
            delay: 0.3
          }}
        />
        <motion.path
          d="M26 14 c0 -4 4 -4 4 -8"
          fill="none"
          stroke="hsl(var(--primary))"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ opacity: 0, y: 0 }}
          animate={{ 
            opacity: [0, 1, 0],
            y: [0, -4, -8]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeOut",
            delay: 0.6
          }}
        />
      </svg>
    </div>
  );
}

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
          
          {/* Coffee stat with animated cup */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="stat-card text-center"
          >
            <div className="inline-flex items-center justify-center mb-4">
              <AnimatedCoffeeCup />
            </div>
            <div className="text-3xl md:text-4xl font-display font-bold gradient-text mb-1">
              ∞
            </div>
            <div className="font-medium text-foreground mb-1">Cups of Coffee</div>
            <div className="text-sm text-muted-foreground">And counting...</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
