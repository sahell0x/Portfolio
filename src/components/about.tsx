import { Card, CardContent } from "@/components/ui/card";

export function About() {
  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
        <Card>
          <CardContent className="p-6">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Skilled web developer with expertise in frontend and backend
              development,REST API integration, and asynchronous JavaScript.
              Proficient in building scalable applications using modern
              technologies like React, Node.js, and MongoDB, while ensuring
              seamless data flow and enhanced user experiences. Experienced in
              TypeScript, React, and Next.js for crafting intuitive interfaces
              and efficient codebases. Adept at managing databases like
              PostgreSQL and MongoDB, with a solid grasp of Git, GitHub, and
              version control best practices. Contributed actively to
              open-source projects and excel at debugging, refactoring, and
              maintaining high-quality code. Well-versed in Express.js for
              server-side development and Postman for API testing. Continuously
              learning and adapting to deliver innovative, user-centric web
              solutions.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
