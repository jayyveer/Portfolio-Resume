import { motion } from 'framer-motion';
import { 
  Download,
  Building2,
  GraduationCap,
  Award,
  Calendar,
  ExternalLink
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { SITE_CONFIG } from '@/lib/constants';

const RESUME_DATA = {
  experience: [
    {
      title: "Senior Software Engineer",
      company: "Tech Solutions Inc.",
      period: "2021 - Present",
      description: "Led development of enterprise-scale applications using React and Node.js",
      achievements: [
        "Improved application performance by 40% through code optimization",
        "Mentored junior developers and conducted code reviews",
        "Implemented CI/CD pipelines reducing deployment time by 60%"
      ]
    },
    {
      title: "Full Stack Developer",
      company: "Digital Innovations",
      period: "2019 - 2021",
      description: "Developed and maintained full-stack web applications",
      achievements: [
        "Built RESTful APIs serving 100K+ daily users",
        "Reduced server response time by 50% through caching implementation",
        "Integrated third-party services and payment gateways"
      ]
    }
  ],
  education: [
    {
      degree: "Master of Science in Computer Science",
      institution: "Tech University",
      year: "2019",
      description: "Specialized in Software Engineering and Distributed Systems"
    },
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "State University",
      year: "2017",
      description: "Dean's List, Computer Science Club President"
    }
  ],
  certifications: [
    {
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      year: "2022",
      link: "https://aws.amazon.com/certification/"
    },
    {
      name: "Professional Scrum Master I",
      issuer: "Scrum.org",
      year: "2021",
      link: "https://www.scrum.org/"
    }
  ]
};

export function Resume() {
  return (
    <section id="resume" className="py-20 bg-gray-50/50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold">
            Professional <span className="text-blue-600 dark:text-yellow-500">Resume</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-4 mb-8">
            A summary of my professional experience and qualifications
          </p>
          
          <Button
            className="bg-blue-600 hover:bg-blue-700 dark:bg-yellow-500 dark:hover:bg-yellow-600 text-white dark:text-gray-900"
            onClick={() => window.open('/path-to-your-resume.pdf', '_blank')}
          >
            <Download className="mr-2 h-4 w-4" />
            Download Resume
          </Button>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Experience Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold flex items-center gap-2">
              <Building2 className="h-6 w-6 text-blue-600 dark:text-yellow-500" />
              Experience
            </h3>
            
            {RESUME_DATA.experience.map((exp, index) => (
              <HoverCard key={index}>
                <HoverCardTrigger asChild>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-semibold">{exp.title}</h4>
                      <span className="text-sm text-gray-600 dark:text-gray-400 flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mb-2">{exp.company}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{exp.description}</p>
                  </div>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="space-y-2">
                    <h5 className="font-semibold">Key Achievements:</h5>
                    <ul className="text-sm space-y-1">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-blue-600 dark:text-yellow-500 mr-2">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </HoverCardContent>
              </HoverCard>
            ))}
          </motion.div>

          <div className="space-y-8">
            {/* Education Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-semibold flex items-center gap-2">
                <GraduationCap className="h-6 w-6 text-blue-600 dark:text-yellow-500" />
                Education
              </h3>
              
              {RESUME_DATA.education.map((edu, index) => (
                <div 
                  key={index}
                  className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-lg font-semibold">{edu.degree}</h4>
                    <span className="text-sm text-gray-600 dark:text-gray-400">{edu.year}</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">{edu.institution}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{edu.description}</p>
                </div>
              ))}
            </motion.div>

            {/* Certifications Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-semibold flex items-center gap-2">
                <Award className="h-6 w-6 text-blue-600 dark:text-yellow-500" />
                Certifications
              </h3>
              
              {RESUME_DATA.certifications.map((cert, index) => (
                <a
                  key={index}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-lg font-semibold flex items-center gap-2">
                        {cert.name}
                        <ExternalLink className="h-4 w-4 text-gray-400" />
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">{cert.issuer}</p>
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-400">{cert.year}</span>
                  </div>
                </a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
} 