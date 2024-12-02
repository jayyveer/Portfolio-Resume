import { motion } from 'framer-motion';
import { 
  Layout, 
  Server, 
  Database,
  Code2,
  Globe,
  Gift,
  Monitor,
  Cloud,
  Terminal
} from 'lucide-react';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { cn } from '@/lib/utils';

const SKILLS_DATA = {
  'Frontend': {
    icon: <Layout className="h-6 w-6" />,
    description: 'Building responsive and interactive user interfaces',
    skills: [
      { 
        name: 'React', 
        level: 90,
        description: 'Expert in React hooks, context, and modern patterns',
        icon: <Code2 className="h-5 w-5" />
      },
      { 
        name: 'TypeScript', 
        level: 85,
        description: 'Strong typing and advanced TypeScript features',
        icon: <Terminal className="h-5 w-5" />
      },
      { 
        name: 'Next.js', 
        level: 80,
        description: 'Server-side rendering and static site generation',
        icon: <Monitor className="h-5 w-5" />
      },
      { 
        name: 'Tailwind CSS', 
        level: 90,
        description: 'Utility-first CSS and component styling',
        icon: <Globe className="h-5 w-5" />
      }
    ]
  },
  'Backend': {
    icon: <Server className="h-6 w-6" />,
    description: 'Developing scalable server-side applications',
    skills: [
      { 
        name: 'Node.js', 
        level: 85,
        description: 'RESTful APIs and server-side JavaScript',
        icon: <Terminal className="h-5 w-5" />
      },
      { 
        name: 'Express', 
        level: 80,
        description: 'Middleware and route handling',
        icon: <Server className="h-5 w-5" />
      },
      { 
        name: 'Python', 
        level: 75,
        description: 'Data processing and automation',
        icon: <Code2 className="h-5 w-5" />
      }
    ]
  },
  'Database': {
    icon: <Database className="h-6 w-6" />,
    description: 'Managing and optimizing data storage solutions',
    skills: [
      { 
        name: 'MongoDB', 
        level: 85,
        description: 'NoSQL database design and optimization',
        icon: <Database className="h-5 w-5" />
      },
      { 
        name: 'PostgreSQL', 
        level: 80,
        description: 'Complex queries and database optimization',
        icon: <Database className="h-5 w-5" />
      }
    ]
  },
  'DevOps': {
    icon: <Cloud className="h-6 w-6" />,
    description: 'Deployment and development operations',
    skills: [
      { 
        name: 'Gift', 
        level: 90,
        description: 'Version control and collaboration',
        icon: <Gift className="h-5 w-5" />
      },
      { 
        name: 'Docker', 
        level: 75,
        description: 'Containerization and orchestration',
        icon: <Cloud className="h-5 w-5" />
      }
    ]
  }
};

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50/50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold">
            Technical <span className="text-blue-600 dark:text-yellow-500">Skills</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-4">
            Expertise in modern web technologies and development tools
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.entries(SKILLS_DATA).map(([category, { icon, description, skills }], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.2 }}
            >
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-100 dark:bg-yellow-500/20 rounded-lg text-blue-600 dark:text-yellow-500">
                    {icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{category}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {skills.map((skill, skillIndex) => (
                    <HoverCard key={skill.name}>
                      <HoverCardTrigger asChild>
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: skillIndex * 0.1 }}
                          viewport={{ once: true }}
                          className="group cursor-pointer"
                        >
                          <div className="flex items-center gap-2 mb-1">
                            <div className="text-blue-600 dark:text-yellow-500">
                              {skill.icon}
                            </div>
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                              {skill.name}
                            </span>
                            <span className="text-sm text-gray-600 dark:text-gray-400 ml-auto">
                              {skill.level}%
                            </span>
                          </div>
                          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                            <motion.div
                              className={cn(
                                "h-2 rounded-full bg-blue-600 dark:bg-yellow-500",
                                "group-hover:bg-blue-500 dark:group-hover:bg-yellow-400",
                                "transition-all duration-300"
                              )}
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              transition={{ duration: 1, ease: "easeOut" }}
                              viewport={{ once: true }}
                            />
                          </div>
                        </motion.div>
                      </HoverCardTrigger>
                      <HoverCardContent className="w-80">
                        <div className="flex justify-between space-x-4">
                          <div>
                            <h4 className="text-sm font-semibold">{skill.name}</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              {skill.description}
                            </p>
                          </div>
                        </div>
                      </HoverCardContent>
                    </HoverCard>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 