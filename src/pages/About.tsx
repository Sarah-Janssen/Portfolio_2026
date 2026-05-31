import React from 'react';
import PageContainer from '@/components/layout/PageContainer';
import Seo from '@/components/seo/Seo';
import SectionHeading from '@/components/ui/SectionHeading';
import Timeline from '@/components/ui/Timeline';

const About: React.FC = () => {
  return (
    <PageContainer>
      <Seo 
        title="Over mij | Sarah Janssen" 
        description="Lees het verhaal van Sarah Janssen: van grafisch ontwerp naar functionele analyse en IT." 
      />
      
      {/* Introductie */}
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

      {/* De Tijdlijn */}
      <section className="bg-portfolio-accent/5 py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-1">
              <SectionHeading 
                title="De Reis" 
                subtitle="Van administratieve nauwkeurigheid naar digitale architectuur."
                className="sticky top-24"
              />
            </div>
            <div className="md:col-span-2">
              <Timeline />
            </div>
          </div>
        </div>
      </section>

      {/* Wat mij motiveert */}
      <section className="container mx-auto px-4 py-20 md:py-32 flex justify-center">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold mb-8 text-portfolio-text text-center">Wat mij motiveert</h2>
          <p className="text-lg text-portfolio-text/70 leading-relaxed text-center">
            Ik haal voldoening uit het brengen van rust en overzicht. Of dat nu is door een 
            complex bedrijfsproces in kaart te brengen, een database te optimaliseren of 
            een intuïtieve gebruikersflow te ontwerpen: het resultaat moet altijd helder, 
            bruikbaar en toekomstbestendig zijn.
          </p>
        </div>
      </section>

      {/* Vandaag */}
      <section className="bg-portfolio-text text-white py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-sm font-bold uppercase tracking-widest text-portfolio-accent mb-4">Vandaag</h2>
          <p className="text-3xl font-bold mb-6">Functioneel Analist bij Konato / Cronos</p>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Focus op analyse, samenwerking en continue ontwikkeling binnen uitdagende digitale ecosystemen.
          </p>
        </div>
      </section>

      {/* Buiten IT */}
      <section className="container mx-auto px-4 py-20 md:py-32 flex justify-center">
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
