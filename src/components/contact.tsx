import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-muted/50">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Contact Me</h2>
        <Card className="max-w-md mx-auto">
          <CardHeader>
            <CardTitle>Let's Connect</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button variant="outline" className="w-full justify-start" asChild>
              <a href="mailto:sahil.sk.khan6872@gmail.com">
                <Mail className="mr-2 h-4 w-4" />
                sahil.sk.khan6872@gmail.com
              </a>
            </Button>
            <Button variant="outline" className="w-full justify-start" asChild>
              <a href="tel:+919752588937">
                <Phone className="mr-2 h-4 w-4" />
                +91 9752588937
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}