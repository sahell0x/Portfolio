import { ThemeProvider } from '@/components/theme-provider';
import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { Experience } from '@/components/experience';
import { Skills } from '@/components/skills';
import { Projects } from '@/components/projects';
import { About } from '@/components/about';
import { Contact } from '@/components/contact';
import { Footer } from '@/components/footer';

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
      <div className="min-h-screen bg-background">
        <Header />
        <div className='flex items-center justify-center flex-col'>
        <main>
          <Hero />
          <Experience />
          <Skills />
          <Projects />
          <About />
          <Contact />
        </main>
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
}