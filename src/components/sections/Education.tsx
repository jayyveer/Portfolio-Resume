import { motion } from 'framer-motion';
import { School, Calendar, Award, MapPin } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';

export function Education() {
  return (
    <section id="education" className="py-20 bg-gray-50/50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold">
            My <span className="text-blue-600 dark:text-yellow-500">Education</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-4">
            Academic journey and qualifications
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-200 dark:bg-yellow-900" />

          {SITE_CONFIG.education.map((education, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`relative flex items-center justify-between mb-8 ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
            >
              {/* Timeline dot */}
              <motion.div
                className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-blue-600 dark:bg-yellow-500"
                whileHover={{ scale: 1.5 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              />

              {/* Content card */}
              <motion.div
                className={`w-5/12 ${index % 2 === 0 ? "pr-8" : "pl-8"}`}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center gap-2 mb-4">
                    <School className="h-5 w-5 text-blue-600 dark:text-yellow-500" />
                    <h3 className="text-lg font-semibold">{education.degree}</h3>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-2">
                    <Calendar className="h-4 w-4" />
                    <span>{education.period}</span>
                  </div>

                  <div className="mb-4">
                    <p className="font-medium">{education.institution}</p>
                    {education.location && (
                      <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mt-1">
                        <MapPin className="h-4 w-4" />
                        <span>{education.location}</span>
                      </div>
                    )}
                  </div>

                  {education.score && (
                    <div className="flex items-center gap-2 mb-4">
                      <Award className="h-4 w-4 text-blue-600 dark:text-yellow-500" />
                      <span className="text-blue-600 dark:text-yellow-500 font-medium">
                        {education.score}
                      </span>
                    </div>
                  )}

                  <motion.div
                    className="absolute inset-0 bg-blue-600/10 dark:bg-yellow-500/10 rounded-xl opacity-0"
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 