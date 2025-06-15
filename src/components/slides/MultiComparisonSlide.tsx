import React from 'react';
import { Database, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
interface MultiComparisonSlideProps {
  slide: {
    title: string;
    comparisons: Array<{
      title: string;
      influx: string[];
      other: string[];
    }>;
  };
}
const MultiComparisonSlide: React.FC<MultiComparisonSlideProps> = ({
  slide
}) => {
  return <div className="space-y-4 sm:space-y-6 lg:space-y-8 px-4 py-8 sm:py-12">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 sm:mb-8 text-center px-0 my-[26px] xl:text-5xl">{slide.title}</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
        {slide.comparisons.map((comparison: any, index: number) => <Card key={index} className="p-3 sm:p-4 lg:p-6">
            <CardHeader className="pb-2 sm:pb-3">
              <CardTitle className="text-base sm:text-lg text-blue-600 text-center lg:text-4xl">{comparison.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 sm:space-y-4">
                <div className="space-y-2 sm:space-y-3">
                  <h4 className="font-semibold text-blue-600 flex items-center justify-center space-x-2 text-sm sm:text-base lg:text-lg">
                    <Database className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 flex-shrink-0" />
                    <span>InfluxDB</span>
                  </h4>
                  <ul className="space-y-1 sm:space-y-2">
                    {comparison.influx.map((item: string, idx: number) => <li key={idx} className="flex items-start space-x-2 sm:space-x-3">
                        <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-xs sm:text-sm lg:text-base">{item}</span>
                      </li>)}
                  </ul>
                </div>
                <div className="space-y-2 sm:space-y-3">
                  <h4 className="font-semibold text-gray-600 flex items-center justify-center space-x-2 text-sm sm:text-base lg:text-lg">
                    <Database className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 flex-shrink-0" />
                    <span>{comparison.title.replace("vs ", "")}</span>
                  </h4>
                  <ul className="space-y-1 sm:space-y-2">
                    {comparison.other.map((item: string, idx: number) => <li key={idx} className="flex items-start space-x-2 sm:space-x-3">
                        <div className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 border-2 border-gray-400 rounded-full mt-0.5 flex-shrink-0"></div>
                        <span className="text-gray-600 text-xs sm:text-sm lg:text-base">{item}</span>
                      </li>)}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>)}
      </div>
    </div>;
};
export default MultiComparisonSlide;