import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: 'FeeloChat',
      description: `FeeloChat is a cutting-edge, end-to-end encrypted chat app that revolutionizes conversations with real-time
      emotion sharing. By running a tiny ML model directly in the user’s browser to detect facial expressions, it
      ensures unmatched privacy while delivering an immersive and deeply personal messaging experience.`,
      tech: ['React.js', 'Recoil', 'Express.js', 'Node.js', 'Socket.io', 'MongoDB', 'Tailwind', 'TypeScript', 'Face api.js'],
      link: 'https://feelochat.sahellx.site',
    },
    {
      title: 'Code Atopsy',
      description: `Code Atopsy a web-based AI agent application that analyzes and visualizes algorithms and code snippets in
      multiple programming languages. Utilized AI techniques to generate insights, explanations, and debugging
      suggestions for better comprehension.`,
      tech: ['React.js', 'TypeScript', 'Node.js', 'Express.js', 'Tailwind', 'Custom Agent'],
      link: 'https://codeatopsy.sahellx.site',
    },
    {
      title: 'Weather App',
      description: 'Real-time weather updates with auto-location detection and city search feature.',
      tech: ['React.js', 'Material UI'],
      link: 'https://weather.sahellx.site',
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  {project.title}
                  <Button variant="ghost" size="icon" asChild>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  </Button>
                </CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-sm bg-secondary rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
