import React, { useState } from 'react';
import type { ProjectImage } from '@/types/project';

interface ImageCarouselProps {
  images: ProjectImage[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) return null;

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const currentMedia = images[currentIndex];

  return (
    <div className="py-12 border-t border-portfolio-accent/10 mt-12">
      <div className="relative group max-w-5xl mx-auto overflow-hidden rounded-xl bg-portfolio-accent/5 border border-portfolio-accent/10 shadow-lg">
        {/* Main Media Container */}
        <div className="aspect-video relative flex items-center justify-center bg-black/5">
          {currentMedia.type === 'video' ? (
            <video 
              key={currentMedia.url}
              src={currentMedia.url} 
              controls 
              autoPlay
              muted
              className="max-h-full max-w-full object-contain"
            >
              Je browser ondersteunt de video tag niet.
            </video>
          ) : (
            <img 
              src={currentMedia.url} 
              alt={currentMedia.caption}
              loading="lazy"
              className="max-h-full max-w-full object-contain transition-opacity duration-300"
            />
          )}
          
          {/* Navigation Arrows */}
          {images.length > 1 && (
            <>
              <button 
                onClick={goToPrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 text-portfolio-text shadow-md hover:bg-white transition-colors z-10"
                aria-label="Vorige afbeelding"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 text-portfolio-text shadow-md hover:bg-white transition-colors z-10"
                aria-label="Volgende afbeelding"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}
        </div>

        {/* Caption Bar */}
        <div className="p-4 bg-white border-t border-portfolio-accent/10 flex justify-between items-center">
          <p className="text-sm text-portfolio-text/80 italic">
            <span className="font-bold mr-2">[{currentMedia.type.toUpperCase()}]</span>
            {currentMedia.caption}
          </p>
          <span className="text-xs font-mono text-portfolio-text/40">
            {currentIndex + 1} / {images.length}
          </span>
        </div>
      </div>

      {/* Thumbnails */}
      <div className="flex justify-center gap-2 mt-6 overflow-x-auto pb-2 px-4">
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-16 h-12 rounded overflow-hidden border-2 transition-all flex-shrink-0 ${
              idx === currentIndex ? 'border-portfolio-accent shadow-sm scale-110' : 'border-transparent opacity-60 hover:opacity-100'
            }`}
            aria-label={`Ga naar ${img.type === 'video' ? 'video' : 'afbeelding'} ${idx + 1}: ${img.caption}`}
          >
            {img.type === 'video' ? (
              <div className="w-full h-full bg-portfolio-accent/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-portfolio-accent" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            ) : (
              <img src={img.url} alt="" className="w-full h-full object-cover" aria-hidden="true" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
