import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Cpu, Bot, Microchip, Gauge } from 'lucide-react';

const expertiseTabs = [
  {
    id: 'embedded',
    label: 'Embedded',
    fullLabel: 'Embedded & Hardware',
    icon: Cpu,
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
    label: 'AI',
    fullLabel: 'AI & Automation',
    icon: Bot,
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
    label: 'MCUs',
    fullLabel: 'Microcontrollers',
    icon: Microchip,
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
    label: 'Instr.',
    fullLabel: 'Instrumentation',
    icon: Gauge,
    skills: [
      'Instrument Index & I/O List',
      'Datasheets & Specifications',
      'Wiring & Loop Diagrams',
      'Hook-Up Diagrams',
      'SPI Intools Admin',
      'Access & Backups',
      'Report Generation',
      'Procurement Support',
      'Technical Training',
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
      className="mb-12 md:mb-20"
    >
      <h2 className="text-2xl sm:text-3xl font-display font-bold mb-6 md:mb-8 text-center">
        Technical <span className="gradient-text">Expertise</span>
      </h2>
      
      <Tabs defaultValue="embedded" className="max-w-4xl mx-auto">
        <TabsList className="grid w-full grid-cols-4 mb-6 md:mb-8 h-auto p-1">
          {expertiseTabs.map((tab) => (
            <TabsTrigger 
              key={tab.id} 
              value={tab.id}
              className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2 py-2 px-1 sm:px-3 text-[10px] sm:text-sm data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              <tab.icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              <span className="hidden sm:inline">{tab.fullLabel}</span>
              <span className="sm:hidden">{tab.label}</span>
            </TabsTrigger>
          ))}
        </TabsList>
        
        {expertiseTabs.map((tab) => (
          <TabsContent key={tab.id} value={tab.id}>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="glass-card p-4 sm:p-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                {tab.skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
                  >
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary flex-shrink-0" />
                    <span className="text-xs sm:text-sm font-medium">{skill}</span>
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