import { Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="relative min-h-[40vh] flex items-center justify-center pt-16">
      <div className="container px-4 py-20 mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-up">
          Hi, I'm Sahil Khan
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-4 animate-fade-up animation-delay-100">
          Software Developer
        </p>
        <p className="text-lg text-muted-foreground mb-8 animate-fade-up animation-delay-150">
          Specializing in React.js, TypeScript, Node.js and Modern Web Technologies
        </p>
        <div className="flex justify-center gap-4 animate-fade-up animation-delay-200">
          <Button variant="outline" size="icon" asChild>
            <a href="https://github.com/sahell0x" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <a href="https://www.linkedin.com/in/sahell0x/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <a href="https://x.com/Sahellx?t=3vorGYplIUSFTDOf4BBY9w&s=09" target="_blank" rel="noopener noreferrer">
              <Twitter className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}