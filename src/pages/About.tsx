import React from 'react';
import PageContainer from '@/components/layout/PageContainer';
import Seo from '@/components/seo/Seo';
import SectionHeading from '@/components/ui/SectionHeading';
import Timeline from '@/components/ui/Timeline';
import Button from '@/components/ui/Button';

const About: React.FC = () => {
  return (
    <PageContainer>
      <Seo 
        title="Over mij | Sarah Janssen" 
        description="Lees het verhaal van Sarah Janssen: van grafisch ontwerp naar IT-Consultant en de passie voor structuur." 
      />
      
      {/* 1. Introductie */}
      <section className="container mx-auto px-4 py-20 md:py-32 flex justify-center animate-fade-in">
        <div className="max-w-3xl text-center">
          <SectionHeading 
            title="Mijn Verhaal" 
            level="h1"
            subtitle="Hoe een creatieve basis en analytisch denken samenkomen in IT."
            centered
          />
          <div className="prose prose-lg text-portfolio-text/80 space-y-6 mx-auto">
            <p>
              Ik zie mezelf als een nieuwsgierige professional die complexe vraagstukken begrijpt, 
              structuur creëert en ideeën omzet in praktische oplossingen.
            </p>
            <p>
              Mijn weg naar IT was geen rechte lijn, maar juist die diverse achtergrond maakt 
              hoe ik vandaag de dag naar problemen kijk: met oog voor detail, gebruikerservaring 
              en de onderliggende structuur.
            </p>
          </div>
        </div>
      </section>

      {/* 2. De Tijdlijn (Mijn Reis) */}
      <section className="bg-portfolio-accent/5 py-20 md:py-32 flex justify-center border-t border-portfolio-accent/10">
        <div className="max-w-5xl w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="md:col-span-1">
              <SectionHeading 
                title="Mijn Reis" 
                subtitle="Van een creatieve basis naar digitale architectuur."
                className="sticky top-24"
              />
            </div>
            <div className="md:col-span-2">
              <Timeline />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Professioneel Profiel (Nu weer met Huidige Ervaring) */}
      <section className="container mx-auto px-4 py-20 md:py-32 flex justify-center border-t border-portfolio-accent/10">
        <div className="max-w-5xl w-full px-4 animate-slide-up">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="md:col-span-1">
              <SectionHeading 
                title="Profiel" 
                subtitle="Ervaring, opleiding en technisch fundament."
              />
            </div>
            <div className="md:col-span-2 space-y-12">
              <div className="space-y-10">
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-widest text-portfolio-accent mb-2 border-b border-portfolio-accent/10 pb-1 inline-block">Huidige ervaring</h3>
                  <div className="space-y-8 mt-6">
                    <div>
                      <p className="text-lg font-bold text-portfolio-text">ICT-Consultant / Functioneel Analist</p>
                      <p className="text-sm font-bold text-portfolio-accent mb-2">Konato NV • Januari 2026 – heden</p>
                      <p className="text-portfolio-text/70 leading-relaxed">
                        Focus op analyse, samenwerking en continue ontwikkeling binnen uitdagende digitale ecosystemen.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-4">
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-widest text-portfolio-accent mb-4">Opleiding</h3>
                    <p className="font-bold text-sm">Graduaat Programmeren</p>
                    <p className="text-xs text-portfolio-text/60">Thomas More Hogeschool · 2023-2025</p>
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-widest text-portfolio-accent mb-4">Technologieën</h3>
                    <div className="flex flex-wrap gap-2">
                      {["Jira", "Confluence", "Postman", "Python", "TypeScript", "SQL", "Docker", "Git"].map(tech => (
                        <span key={tech} className="text-[10px] bg-portfolio-accent/5 text-portfolio-accent px-2 py-1 rounded border border-portfolio-accent/10 font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Button href="/documents/cv-sarah-janssen.pdf" variant="outline" className="text-xs py-2 px-4">
                  Download CV (PDF)
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Wat mij motiveert (Weer terug in de zwarte sectie) */}
      <section className="bg-portfolio-text text-white py-20 md:py-32 flex justify-center">
        <div className="max-w-4xl text-center px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Wat mij motiveert</h2>
          <p className="text-xl text-white/60 leading-relaxed max-w-3xl mx-auto italic">
            "Ik haal voldoening uit het brengen van rust en overzicht. Of dat nu is door een 
            complex bedrijfsproces in kaart te brengen, een database te optimaliseren of 
            een intuïtieve gebruikersflow te ontwerpen: het resultaat moet altijd helder, 
            bruikbaar en toekomstbestendig zijn."
          </p>
        </div>
      </section>

      {/* 5. Buiten IT */}
      <section className="container mx-auto px-4 py-20 md:py-32 flex justify-center border-t border-portfolio-accent/10">
        <div className="max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-8 text-portfolio-text">Buiten IT</h2>
          <p className="text-lg text-portfolio-text/70 leading-relaxed mb-8">
            Naast mijn passie voor analyse en technologie haal ik energie uit creativiteit, 
            reizen en het ontdekken van nieuwe plekken. Je vindt me ook vaak tussen de planten, 
            waar ik geniet van de rust en het constante proces van groei.
          </p>
        </div>
      </section>
    </PageContainer>
  );
};

export default About;
