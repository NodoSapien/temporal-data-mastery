
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface UseCasesSlideProps {
  slide: {
    title: string;
    cases: Array<{
      title: string;
      icon: React.ReactNode;
      examples: string[];
    }>;
  };
}

const UseCasesSlide: React.FC<UseCasesSlideProps> = ({ slide }) => {
  return (
    <div className="space-y-6 sm:space-y-8 lg:space-y-12 px-4 py-8 sm:py-12">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-8 sm:mb-12 text-center">{slide.title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {slide.cases.map((useCase: any, index: number) => (
          <Card key={index} className="p-4 sm:p-6 lg:p-8 hover:shadow-lg transition-shadow">
            <CardHeader className="text-center pb-4 sm:pb-6">
              <div className="mx-auto p-3 sm:p-4 lg:p-6 bg-gradient-to-br from-blue-500 to-green-500 rounded-full text-white mb-4 sm:mb-6 w-fit">
                {useCase.icon}
              </div>
              <CardTitle className="text-xl sm:text-2xl lg:text-3xl text-center">{useCase.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 sm:space-y-3">
                {useCase.examples.map((example: string, idx: number) => (
                  <li key={idx} className="flex items-start space-x-2 sm:space-x-3">
                    <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700 text-sm sm:text-base lg:text-lg">{example}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default UseCasesSlide;
