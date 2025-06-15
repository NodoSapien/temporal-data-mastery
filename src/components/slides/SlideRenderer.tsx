
import React from 'react';
import TitleSlide from './TitleSlide';
import ContentSlide from './ContentSlide';
import DetailedSlide from './DetailedSlide';
import ComparisonSlide from './ComparisonSlide';
import MultiComparisonSlide from './MultiComparisonSlide';
import AdvantagesSlide from './AdvantagesSlide';
import UseCasesSlide from './UseCasesSlide';
import DecisionSlide from './DecisionSlide';
import FutureSlide from './FutureSlide';
import ConclusionSlide from './ConclusionSlide';

interface SlideRendererProps {
  slide: any;
}

const SlideRenderer: React.FC<SlideRendererProps> = ({ slide }) => {
  switch (slide.type) {
    case 'title':
      return <TitleSlide slide={slide} />;
    case 'content':
      return <ContentSlide slide={slide} />;
    case 'detailed':
      return <DetailedSlide slide={slide} />;
    case 'comparison':
      return <ComparisonSlide slide={slide} />;
    case 'multi-comparison':
      return <MultiComparisonSlide slide={slide} />;
    case 'advantages':
      return <AdvantagesSlide slide={slide} />;
    case 'use-cases':
      return <UseCasesSlide slide={slide} />;
    case 'decision':
      return <DecisionSlide slide={slide} />;
    case 'future':
      return <FutureSlide slide={slide} />;
    case 'conclusion':
      return <ConclusionSlide slide={slide} />;
    default:
      return <div>Slide content not found</div>;
  }
};

export default SlideRenderer;
