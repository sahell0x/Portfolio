import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export function Experience() {
  const experiences = [
    {
      title: 'Open Source Contributor',
      company: 'Sparrow (Next gen API testing tool)',
      period: '',
      description: [
        'Added API response download functionality, improving data accessibility in the web app',
        'Developed seamless image response handling for REST APIs, ensuring smooth rendering',
        'Optimized UI responsiveness by resolving critical interface issues, enhancing user accessibility',
        'Implemented WebSocket auto-disconnection detection with real-time UI notifications',
      ],
      tech: 'TypeScript, Tauri, Rust, Svelte, MongoDB, Nest.js',
    },
    
    {
      title: 'Web Developer Intern',
      company: 'Affimintus Technologies',
      period: 'June 2024 – Nov 2024',
      description: [
        'Reduced initial page load time by 25%, improving overall performance',
        'Integrated REST APIs efficiently, reducing response time by 20%',
        'Collaborated with backend teams, accelerating project delivery by 15%',
        'Implemented effective state management, enhancing maintainability',
      ],
      tech: 'React.js, JavaScript, REST APIs',
    },
    {
      title: 'Open Source Contributor',
      company: 'Bruno (API testing tool)',
      period: '',
      description: [
        'Enhanced the UI by implementing support for handling and rendering SVG responses',
      ],
      tech: 'TypeScript, Electron, React, Jest, Redux',
    }
  ];

  return (
    <section id="experience" className="py-12">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Experience</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {experiences.map((exp, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{exp.title}</CardTitle>
                <CardDescription>{exp.company} {exp.period ? ` | ${exp.period}` : ''}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <p className="text-sm font-medium">Technologies: {exp.tech}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
