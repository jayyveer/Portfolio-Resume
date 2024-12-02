import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Twitter,
  Send,
  Loader2
} from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { SITE_CONFIG } from '@/lib/constants';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const initialFormData: FormData = {
  name: '',
  email: '',
  subject: '',
  message: ''
};

export function Contact() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Replace with your actual form submission logic
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulated delay
      
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      
      setFormData(initialFormData);
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again later or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: 'Email',
      value: SITE_CONFIG.contact.email,
      href: `mailto:${SITE_CONFIG.contact.email}`
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: 'Phone',
      value: SITE_CONFIG.contact.phone,
      href: `tel:${SITE_CONFIG.contact.phone}`
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: 'Location',
      value: SITE_CONFIG.location
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      href: SITE_CONFIG.social.github,
      label: 'GitHub'
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      href: SITE_CONFIG.social.linkedin,
      label: 'LinkedIn'
    },
    {
      icon: <Twitter className="h-5 w-5" />,
      href: SITE_CONFIG.social.twitter,
      label: 'Twitter'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50/50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold">
            Get in <span className="text-blue-600 dark:text-yellow-500">Touch</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-4">
            Let's discuss your project or just say hello
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4"
                >
                  <div className="p-3 bg-blue-100 dark:bg-yellow-500/20 rounded-lg text-blue-600 dark:text-yellow-500">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-white">
                      {item.label}
                    </h3>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-yellow-500 transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-gray-600 dark:text-gray-400">
                        {item.value}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Connect with me</h3>
              <div className="flex gap-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white dark:bg-gray-800 rounded-lg text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-yellow-500 hover:shadow-lg transition-all"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Input
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-white dark:bg-gray-800"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-white dark:bg-gray-800"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Input
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="bg-white dark:bg-gray-800"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="min-h-[150px] bg-white dark:bg-gray-800"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
              >
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-yellow-500 dark:hover:bg-yellow-600 text-white dark:text-gray-900"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 