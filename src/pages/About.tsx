import React from 'react';
import PageContainer from '@/components/layout/PageContainer';
import Seo from '@/components/seo/Seo';
import SectionHeading from '@/components/ui/SectionHeading';
import HighlightSection from '@/components/ui/HighlightSection';
import Timeline from '@/components/ui/Timeline';
import InterestCard from '@/components/ui/InterestCard';

const About: React.FC = () => {
  return (
    <PageContainer>
      <Seo 
        title="Over mij | Sarah Janssen" 
        description="Lees het verhaal van Sarah Janssen: van grafisch ontwerp naar Functional Analyst en AI Workflows. Ontdek hoe ik complexiteit omzet in structuur." 
      />
      
      {/* Introductie */}
      <section className="container mx-auto px-4 py-20 md:py-32 flex justify-center">
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

      {/* Waarden & Filosofie */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <SectionHeading 
          title="Waar ik in geloof" 
          subtitle="De principes die mijn werk en keuzes sturen."
          centered
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <InterestCard 
            title="Nieuwsgierigheid" 
            description="Ik wil altijd weten waarom iets werkt, niet alleen dat het werkt."
          />
          <InterestCard 
            title="Eenvoud" 
            description="De beste oplossingen zijn vaak de meest eenvoudige, ontdaan van overbodige ruis."
          />
          <InterestCard 
            title="Menselijke Maat" 
            description="Technologie moet mensen ondersteunen, nooit de controle overnemen."
          />
        </div>
      </section>

      {/* AI Werkwijze (V2 Kernonderdeel) */}
      <HighlightSection title="AI & Mijn Werkwijze">
        <div className="prose prose-lg text-portfolio-text/80 space-y-8 max-w-none">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold mb-4 text-portfolio-text">AI als Denkpartner</h3>
              <p>
                In mijn workflow is AI een krachtig hulpmiddel voor brainstormen, onderzoek 
                en het structureren van documentatie. Het helpt me om sneller van 
                een 'leeg blad' naar een eerste concept te gaan.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-portfolio-text">Leren boven 'Vibe Coding'</h3>
              <p>
                Ik gebruik AI niet om blinde code te genereren, maar om nieuwe technieken 
                sneller te doorgronden. Begrijpen komt bij mij altijd vóór implementeren. 
                AI is de katalysator voor mijn eigen leerproces.
              </p>
            </div>
          </div>
          
          <div className="bg-white/50 p-8 rounded-lg border border-portfolio-accent/20">
            <h4 className="font-bold mb-4 text-portfolio-accent uppercase tracking-widest text-sm">Menselijke Expertise</h4>
            <p className="italic">
              "AI ondersteunt beslissingen, maar ik neem ze. De analytische blik en de 
              verantwoordelijkheid voor de kwaliteit blijven 100% menselijk."
            </p>
          </div>
        </div>
      </HighlightSection>

      {/* Buiten IT */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-3xl">
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
