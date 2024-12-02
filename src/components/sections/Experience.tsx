import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Building2, Calendar } from 'lucide-react';
import { FadeIn } from '@/components/animations/FadeIn';
import { SITE_CONFIG } from '@/lib/constants';

export function Experience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <FadeIn>
          <h2 className="text-3xl font-bold text-center mb-12">
            Professional <span className="text-blue-600 dark:text-yellow-500">Experience</span>
          </h2>
        </FadeIn>

        <div className="max-w-4xl mx-auto">
          {SITE_CONFIG.experience.map((job, index) => (
            <FadeIn key={index} delay={index * 0.2}>
              <motion.div 
                className="relative pl-8 pb-12 last:pb-0"
                initial={false}
              >
                <div className="absolute left-0 top-0 h-full w-px bg-blue-200 dark:bg-yellow-900" />
                <motion.div 
                  className="absolute left-0 top-2 w-3 h-3 rounded-full bg-blue-600 dark:bg-yellow-500 transform -translate-x-1/2"
                  whileHover={{ scale: 1.5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
                
                <motion.div
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all cursor-pointer"
                  onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="p-6">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                          {job.title}
                        </h3>
                        <div className="flex items-center gap-2 mt-2 text-gray-600 dark:text-gray-400">
                          <Building2 className="h-4 w-4" />
                          <span>{job.company}</span>
                        </div>
                        <div className="flex items-center gap-2 mt-1 text-gray-500 dark:text-gray-500">
                          <Calendar className="h-4 w-4" />
                          <span>{job.period}</span>
                        </div>
                      </div>
                      <motion.div
                        animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown className="h-5 w-5 text-gray-500" />
                      </motion.div>
                    </div>

                    <AnimatePresence initial={false}>
                      {expandedIndex === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700"
                        >
                          <ul className="space-y-2">
                            {job.points.map((point, pointIndex) => (
                              <motion.li
                                key={pointIndex}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: pointIndex * 0.1 }}
                                className="flex items-start text-gray-700 dark:text-gray-300"
                              >
                                <span className="text-blue-600 dark:text-yellow-500 mr-2">•</span>
                                <span>{point}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}