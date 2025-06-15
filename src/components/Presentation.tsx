import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Database, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SlideRenderer from './slides/SlideRenderer';
import { slidesData } from '@/data/slidesData';
import { generatePDF } from '@/utils/pdfGenerator';

const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const slides = slidesData;

  const nextSlide = () => {
    if (currentSlide < slides.length - 1 && !isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentSlide(currentSlide + 1);
        setIsAnimating(false);
      }, 150);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0 && !isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentSlide(currentSlide - 1);
        setIsAnimating(false);
      }, 150);
    }
  };

  const goToSlide = (index: number) => {
    if (index !== currentSlide && !isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentSlide(index);
        setIsAnimating(false);
      }, 150);
    }
  };

  const handleDownloadPDF = () => {
    const slideTitle = slides[currentSlide]?.title || 'slide';
    const filename = `${slideTitle.replace(/[^a-zA-Z0-9]/g, '_')}_${currentSlide + 1}.pdf`;
    generatePDF('current-slide', filename);
  };

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentSlide, isAnimating]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-25">
      {/* Header with navigation */}
      <div className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50 p-2 sm:p-4">
        <div className="flex items-center justify-between max-w-full mx-auto">
          <div className="flex items-center space-x-2 sm:space-x-4">
            <Database className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
            <h1 className="text-lg sm:text-xl font-bold text-gray-900 hidden sm:block">InfluxDB Presentation</h1>
            <h1 className="text-sm font-bold text-gray-900 sm:hidden">InfluxDB</h1>
          </div>
          <div className="flex items-center space-x-2 sm:space-x-4">
            <span className="text-xs sm:text-sm text-gray-600">
              {currentSlide + 1} / {slides.length}
            </span>
            <div className="flex space-x-1 sm:space-x-2">
              <Button 
                onClick={handleDownloadPDF}
                variant="outline"
                size="sm"
                className="h-8 w-8 sm:h-10 sm:w-auto p-1 sm:px-3"
                title="Descargar diapositiva actual como PDF"
              >
                <Download className="w-4 h-4" />
                <span className="hidden sm:inline ml-1">PDF</span>
              </Button>
              <Button 
                onClick={prevSlide} 
                disabled={currentSlide === 0}
                variant="outline"
                size="sm"
                className="h-8 w-8 sm:h-10 sm:w-auto p-1 sm:px-3"
              >
                <ChevronLeft className="w-4 h-4" />
                <span className="hidden sm:inline ml-1">Prev</span>
              </Button>
              <Button 
                onClick={nextSlide} 
                disabled={currentSlide === slides.length - 1}
                variant="outline"
                size="sm"
                className="h-8 w-8 sm:h-10 sm:w-auto p-1 sm:px-3"
              >
                <ChevronRight className="w-4 h-4" />
                <span className="hidden sm:inline ml-1">Next</span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="pt-16 sm:pt-20 pb-20 sm:pb-24">
        <div className="w-full max-w-7xl mx-auto">
          <div 
            id="current-slide"
            className={`transition-all duration-300 ${
              isAnimating ? 'opacity-0 transform translate-x-4' : 'opacity-100 transform translate-x-0'
            }`}
          >
            <SlideRenderer slide={slides[currentSlide]} />
          </div>
        </div>
      </div>

      {/* Bottom navigation dots */}
      <div className="fixed bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 z-50">
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 bg-white/90 backdrop-blur-sm rounded-full px-3 sm:px-6 py-2 sm:py-3 shadow-lg max-w-xs sm:max-w-none overflow-x-auto">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2.5 h-2.5 sm:w-3 sm:h-3 lg:w-4 lg:h-4 rounded-full transition-all duration-200 flex-shrink-0 ${
                index === currentSlide 
                  ? 'bg-blue-600 scale-125' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Presentation;
