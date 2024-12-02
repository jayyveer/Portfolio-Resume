import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Mail, Phone, ArrowRight, Github, Linkedin, Twitter } from 'lucide-react';
import { useState, useEffect } from 'react';
import { SITE_CONFIG } from '@/lib/constants';
import { Button } from '../ui/button';

const BackgroundAnimation = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{
          background: [
            "radial-gradient(circle at 0% 0%, rgb(37 99 235) 0%, transparent 50%)",
            "radial-gradient(circle at 100% 100%, rgb(37 99 235) 0%, transparent 50%)",
            "radial-gradient(circle at 100% 0%, rgb(37 99 235) 0%, transparent 50%)",
            "radial-gradient(circle at 0% 100%, rgb(37 99 235) 0%, transparent 50%)",
            "radial-gradient(circle at 0% 0%, rgb(37 99 235) 0%, transparent 50%)",
          ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          filter: "blur(40px)"
        }}
      />
      <motion.div
        className="absolute inset-0 opacity-20 dark:opacity-30"
        animate={{
          background: [
            "radial-gradient(circle at 100% 100%, rgb(234 179 8) 0%, transparent 50%)",
            "radial-gradient(circle at 0% 0%, rgb(234 179 8) 0%, transparent 50%)",
            "radial-gradient(circle at 0% 100%, rgb(234 179 8) 0%, transparent 50%)",
            "radial-gradient(circle at 100% 0%, rgb(234 179 8) 0%, transparent 50%)",
            "radial-gradient(circle at 100% 100%, rgb(234 179 8) 0%, transparent 50%)",
          ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
          delay: 0.5
        }}
        style={{
          filter: "blur(40px)"
        }}
      />
    </div>
  );
};

export function Hero() {
  const [animationState, setAnimationState] = useState<'initial' | 'fadeOut' | 'final' | 'highlight'>('initial');

  useEffect(() => {
    // Initial JavaScript appears
    const fadeOutTimer = setTimeout(() => {
      setAnimationState('fadeOut');
    }, 2000);

    // Transform to Jayveer Singh
    const finalTimer = setTimeout(() => {
      setAnimationState('final');
    }, 2500);

    // Start highlighting all characters and show experience
    const highlightTimer = setTimeout(() => {
      setAnimationState('highlight');
    }, 4000);

    return () => {
      clearTimeout(fadeOutTimer);
      clearTimeout(finalTimer);
      clearTimeout(highlightTimer);
    };
  }, []);

  const characterAnimation = {
    initial: { opacity: 0, y: 20 },
    animate: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
        type: "spring",
        damping: 12
      }
    }),
    exit: (i: number) => ({
      opacity: 0,
      y: -20,
      transition: {
        delay: i * 0.1,
        duration: 0.3
      }
    })
  };

  const renderHighlightedText = (text: string, startDelay: number = 0) => {
    const displayText = text === 'ayveer' ? 'ayveer' : text;
    return displayText.split('').map((char, index) => (
      <motion.span
        key={`highlight-${char}-${index}`}
        initial={{ color: "rgb(255, 255, 255)" }}
        animate={{ 
          color: animationState === 'highlight' 
            ? "rgb(234 179 8)" // yellow-500
            : "rgb(255, 255, 255)" // white
        }}
        transition={{
          duration: 0.5,
          delay: startDelay + (index * 0.1),
          ease: "easeInOut"
        }}
        className="inline-block dark:text-white"
      >
        {char}
      </motion.span>
    ));
  };

  const renderExperienceText = (startDelay: number = 0) => {
    const text = `(2-Years)`;
    return text.split('').map((char, index) => (
      <motion.span
        key={`exp-${index}`}
        initial={{ opacity: 0, color: "rgb(255, 255, 255)" }}
        animate={{ 
          opacity: 1,
          color: "rgb(234 179 8)" // yellow-500
        }}
        transition={{
          duration: 0.5,
          delay: startDelay + (index * 0.1),
          ease: "easeInOut"
        }}
        className="inline-block"
      >
        {char}
      </motion.span>
    ));
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      <BackgroundAnimation />
      
      <div className="container mx-auto px-4 py-20 relative">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6 flex items-center justify-center"
            layout
          >
            <motion.span
              layout
              className="mr-2"
            >
              Hi, I'm
            </motion.span>
            <motion.div
              layout
              className="inline-flex"
              initial={false}
              animate={{
                width: animationState === 'initial' ? 'auto' : 'auto',
                transition: { duration: 0.5, ease: "easeInOut" }
              }}
            >
              <span className="inline-block relative">
                <span className="text-blue-600 dark:text-yellow-500 relative z-20">J</span>
                
                <AnimatePresence mode="wait">
                  {animationState === 'initial' && (
                    <motion.span className="inline-block">
                      {'ava'.split('').map((char, index) => (
                        <motion.span
                          key={`initial-ava-${index}`}
                          custom={index}
                          initial="initial"
                          animate="animate"
                          variants={characterAnimation}
                          className="inline-block"
                        >
                          {char}
                        </motion.span>
                      ))}
                    </motion.span>
                  )}
                  {animationState === 'fadeOut' && (
                    <motion.span className="inline-block">
                      {'ava'.split('').map((char, index) => (
                        <motion.span
                          key={`fadeout-ava-${index}`}
                          custom={index}
                          initial={{ opacity: 1, y: 0 }}
                          exit="exit"
                          variants={characterAnimation}
                          className="inline-block"
                        >
                          {char}
                        </motion.span>
                      ))}
                    </motion.span>
                  )}
                  {(animationState === 'final' || animationState === 'highlight') && (
                    <motion.span className="inline-block">
                      {animationState === 'highlight' 
                        ? renderHighlightedText('ayveer', 0)
                        : 'ayveer'.split('').map((char, index) => (
                            <motion.span
                              key={`final-ayveer-${index}`}
                              custom={index}
                              initial="initial"
                              animate="animate"
                              variants={characterAnimation}
                              className="inline-block dark:text-white"
                            >
                              {char}
                            </motion.span>
                          ))
                      }
                    </motion.span>
                  )}
                </AnimatePresence>

                <span className="inline-block ml-1">
                  <span className="text-blue-600 dark:text-yellow-500">S</span>
                </span>

                <AnimatePresence mode="wait">
                  {animationState === 'initial' && (
                    <motion.span className="inline-block">
                      {'cript'.split('').map((char, index) => (
                        <motion.span
                          key={`initial-cript-${index}`}
                          custom={index}
                          initial="initial"
                          animate="animate"
                          variants={characterAnimation}
                          className="inline-block"
                        >
                          {char}
                        </motion.span>
                      ))}
                    </motion.span>
                  )}
                  {animationState === 'fadeOut' && (
                    <motion.span className="inline-block">
                      {'cript'.split('').map((char, index) => (
                        <motion.span
                          key={`fadeout-cript-${index}`}
                          custom={index}
                          initial={{ opacity: 1, y: 0 }}
                          exit="exit"
                          variants={characterAnimation}
                          className="inline-block"
                        >
                          {char}
                        </motion.span>
                      ))}
                    </motion.span>
                  )}
                  {(animationState === 'final' || animationState === 'highlight') && (
                    <motion.span className="inline-block">
                      {animationState === 'highlight'
                        ? renderHighlightedText('ingh', 0.5) // Slight delay after 'ayveer'
                        : 'ingh'.split('').map((char, index) => (
                            <motion.span
                              key={`final-ingh-${index}`}
                              custom={index}
                              initial="initial"
                              animate="animate"
                              variants={characterAnimation}
                              className="inline-block dark:text-white"
                            >
                              {char}
                            </motion.span>
                          ))
                      }
                    </motion.span>
                  )}
                </AnimatePresence>
              </span>
            </motion.div>
          </motion.h1>
          
          <motion.h2 
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8 flex items-center justify-center"
            layout
          >
            <motion.span
              layout
              className="inline-block"
            >
              {SITE_CONFIG.role}
            </motion.span>
            {animationState === 'highlight' && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="ml-2"
                layout
              >
                {renderExperienceText(0)}
              </motion.span>
            )}
          </motion.h2>
          <p className="text-gray-700 dark:text-gray-300 mb-8 text-lg leading-relaxed">
            {SITE_CONFIG.bio}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
              <MapPin className="h-5 w-5" />
              <span>{SITE_CONFIG.location}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
              <Mail className="h-5 w-5" />
              <a 
                href={`mailto:${SITE_CONFIG.contact.email}`} 
                className="hover:text-blue-600 dark:hover:text-yellow-500"
              >
                {SITE_CONFIG.contact.email}
              </a>
            </div>
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
              <Phone className="h-5 w-5" />
              <span>{SITE_CONFIG.contact.phone}</span>
            </div>
            
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button className="bg-blue-600 hover:bg-blue-700 dark:bg-yellow-500 dark:hover:bg-yellow-600 dark:text-black">
              View Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <div className="flex items-center gap-4">
              <a href={SITE_CONFIG.social.github} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon" className="hover:text-blue-600 dark:hover:text-yellow-500">
                  <Github className="h-5 w-5" />
                </Button>
              </a>
              <a href={SITE_CONFIG.social.linkedin} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon" className="hover:text-blue-600 dark:hover:text-yellow-500">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}