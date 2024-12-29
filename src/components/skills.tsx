import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code2, Database, Laptop, Terminal, Wrench, Brain } from 'lucide-react';

export function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: <Laptop className="h-5 w-5" />,
      skills: ['React.js', 'JavaScript', 'Recoil', 'HTML', 'CSS', 'Tailwind'],
    },
    {
      title: 'Backend',
      icon: <Code2 className="h-5 w-5" />,
      skills: ['Node.js', 'Express.js'],
    },
    {
      title: 'Database',
      icon: <Database className="h-5 w-5" />,
      skills: ['MongoDB', 'PostgreSQL'],
    },
    {
      title: 'Tools',
      icon: <Wrench className="h-5 w-5" />,
      skills: ['Git', 'GitHub', 'Postman', 'Linux'],
    },
    {
      title: 'Programming',
      icon: <Brain className="h-5 w-5" />,
      skills: ['DSA', 'OOPs'],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-muted/50">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {category.icon}
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <Badge key={i} variant="secondary">
                      {skill}
                    </Badge>
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