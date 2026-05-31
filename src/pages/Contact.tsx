import React from 'react';
import PageContainer from '@/components/layout/PageContainer';
import Seo from '@/components/seo/Seo';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';

const Contact: React.FC = () => {
  return (
    <PageContainer>
      <Seo
        title="Contact | Sarah Janssen"
        description="Neem contact op met Sarah Janssen voor vragen of samenwerkingen."
      />

      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-3xl">
          <SectionHeading
            title="Contact"
            level="h1"
            subtitle="Heb je een vraag of wil je van gedachten wisselen over analyse, structuur of AI? Laat het me weten."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            <div>
              <h3 className="text-xl font-bold mb-6">Direct contact</h3>
              <div className="space-y-6">
                <div>
                  <p className="text-sm text-portfolio-text/60 mb-1 uppercase tracking-wider">E-mail</p>
                  <a href="mailto:janssen.sarah1991@gmail.com" className="text-lg font-medium hover:text-portfolio-accent transition-colors">
                    janssen.sarah1991@gmail.com
                  </a>
                </div>
                <div>
                  <p className="text-sm text-portfolio-text/60 mb-1 uppercase tracking-wider">Locatie</p>
                  <p className="text-lg font-medium">Turnhout, België</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6">Socials</h3>
              <div className="flex flex-col space-y-4">
                <Button href="https://www.linkedin.com/in/sarah-janssen-27566a266/" variant="outline" className="w-full !justify-start">
                  LinkedIn
                </Button>
                <Button href="https://github.com/Sarah-Janssen" variant="outline" className="w-full !justify-start">
                  GitHub
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-20 p-8 bg-portfolio-accent/5 rounded-lg border border-portfolio-accent/10">
            <h4 className="font-bold mb-4 italic text-portfolio-accent">Note</h4>
            <p className="text-portfolio-text/70">
              Ik sta momenteel open voor uitdagende rollen in functionele analyse, applicatiebeheer
              of digitale processen waar ik mijn analytische vaardigheden en interesse in AI kan inzetten.
            </p>
          </div>
        </div>
      </section>
    </PageContainer>
  );
};

export default Contact;
