import { Header } from '@/components/layout/Header';
import { Hero } from '@/components/sections/Hero';
import { Experience } from '@/components/sections/Experience';
import { Projects } from '@/components/sections/Projects';
import { Skills } from '@/components/sections/Skills';
import { Resume } from '@/components/sections/Resume';
import { Contact } from '@/components/sections/Contact';
import { ThemeToggle } from '@/components/ThemeToggle';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white transition-colors duration-300">
      <Header />
      <main>
        <Hero />
        <Experience />
        <Skills />
        <Projects />
        <Resume />
        <Contact />
      </main>
      <ThemeToggle />
    </div>
  );
}

export default App;