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
      period: 'Present',
      description: [
        'Resolved critical UI issues, improving interface responsiveness and accessibility',
        'Contributed to WebSocket integration for real-time communication',
        'Implemented efficient image response handling in REST APIs',
      ],
      tech: 'TypeScript, Tauri, Rust, Svelte, MongoDB, Nest.js',
    },
    {
      title: 'Web Developer Intern',
      company: 'Affimintus Technologies',
      period: 'June 2024 – Nov 2024',
      description: [
        'Enhanced frontend functionality using JavaScript and React',
        'Integrated REST APIs for efficient data flow',
        'Collaborated with team for faster project delivery',
      ],
      tech: 'React.js, JavaScript, REST APIs',
    },
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
                <CardDescription>{exp.company} | {exp.period}</CardDescription>
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