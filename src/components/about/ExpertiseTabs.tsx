import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const expertiseTabs = [
  {
    id: 'embedded',
    label: 'Embedded & Hardware',
    skills: [
      'PCB Design',
      'Battery Pack Design',
      'HMI Interfaces',
      'Hardware Testing & Validation',
      'Soldering and Assembly',
      'Circuit Simulation',
      'Embedded C',
      'VS Code',
      'PlatformIO',
      'Arduino IDE',
      'RTOS (FreeRTOS / Zephyr)',
      'MATLAB / Simulink',
    ],
  },
  {
    id: 'ai',
    label: 'AI & Automation',
    skills: [
      'N8N Automation',
      'Firebase',
      'UiPath AI',
      'Computer Vision',
      'OpenCV',
      'MQTT',
    ],
  },
  {
    id: 'microcontrollers',
    label: 'Microcontrollers & Platforms',
    skills: [
      'Arduino Series',
      'ESP32 Series',
      'ESP8266',
      'STM32',
      'Raspberry Pi',
      'PIC16/18',
    ],
  },
  {
    id: 'instrumentation',
    label: 'Instrumentation',
    skills: [
      'Instrument Index & I/O List Management',
      'Instrument Datasheets & Specifications',
      'Wiring & Loop Diagram Generation',
      'Instrument Hook-Up Diagrams',
      'SPI Intools Administration & Setup',
      'User Access Management & Backups',
      'Report Generation & Templates',
      'Procurement Support',
      'Technical Training & Support',
      'Project Documentation',
    ],
  },
];

export function ExpertiseTabs() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mb-20"
    >
      <h2 className="text-3xl font-display font-bold mb-8 text-center">
        Technical <span className="gradient-text">Expertise</span>
      </h2>
      
      <Tabs defaultValue="embedded" className="max-w-4xl mx-auto">
        <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8">
          {expertiseTabs.map((tab) => (
            <TabsTrigger 
              key={tab.id} 
              value={tab.id}
              className="text-xs sm:text-sm"
            >
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>
        
        {expertiseTabs.map((tab) => (
          <TabsContent key={tab.id} value={tab.id}>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="glass-card p-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {tab.skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                    <span className="text-sm font-medium">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </TabsContent>
        ))}
      </Tabs>
    </motion.div>
  );
}
