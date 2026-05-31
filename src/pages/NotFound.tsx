import React from 'react';
import PageContainer from '@/components/layout/PageContainer';
import Seo from '@/components/seo/Seo';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <PageContainer>
      <Seo title="Pagina niet gevonden | Sarah Janssen" description="De opgevraagde pagina bestaat niet." />
      <div className="container mx-auto px-4 py-32 text-center">
        <h1 className="text-4xl font-bold mb-4">Pagina niet gevonden</h1>
        <p className="text-lg text-portfolio-text/60 mb-8">De pagina die je zoekt bestaat niet of is verplaatst.</p>
        <Link to="/" className="bg-portfolio-accent text-white px-8 py-3 rounded inline-block transition-opacity hover:opacity-90">
          Terug naar home
        </Link>
      </div>
    </PageContainer>
  );
};

export default NotFound;
