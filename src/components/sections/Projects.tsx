import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { FadeIn } from '@/components/animations/FadeIn';
import { Button } from '@/components/ui/button';
import { ImageCarousel } from '@/components/ui/image-carousel';
import { SITE_CONFIG } from '@/lib/constants';

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <FadeIn>
          <h2 className="text-3xl font-bold text-center mb-12">
            Featured <span className="text-blue-600 dark:text-yellow-500">Projects</span>
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SITE_CONFIG.projects.map((project, index) => (
            <FadeIn key={index} delay={index * 0.2}>
              <motion.div
                className="group bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all"
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <ImageCarousel 
                  images={project.images} 
                  alt={project.name} 
                />
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold group-hover:text-blue-600 dark:group-hover:text-yellow-500 transition-colors">
                      {project.name}
                    </h3>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {project.period}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-sm bg-blue-100 dark:bg-yellow-900/30 text-blue-800 dark:text-yellow-500 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {project.points.map((point, pointIndex) => (
                      <motion.li
                        key={pointIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: pointIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start text-sm"
                      >
                        <span className="text-blue-600 dark:text-yellow-500 mr-2">•</span>
                        <span className="text-gray-700 dark:text-gray-300">{point}</span>
                      </motion.li>
                    ))}
                  </ul>
                  
                  <div className="flex gap-4">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex items-center gap-2 hover:bg-blue-50 dark:hover:bg-yellow-900/20"
                    >
                      <Github className="h-4 w-4" />
                      Code
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex items-center gap-2 hover:bg-blue-50 dark:hover:bg-yellow-900/20"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </Button>
                  </div>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}