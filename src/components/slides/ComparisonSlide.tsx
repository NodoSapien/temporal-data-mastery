import React from 'react';
import { CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
interface ComparisonSlideProps {
  slide: {
    title: string;
    comparison: {
      headers: string[];
      rows: string[][];
    };
    advantages: string[];
  };
}
const ComparisonSlide: React.FC<ComparisonSlideProps> = ({
  slide
}) => {
  return <div className="space-y-6 sm:space-y-8 lg:space-y-12 px-4 py-8 sm:py-12">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-8 sm:mb-12 text-center">{slide.title}</h1>
      <div className="flex justify-center">
        <Card className="p-4 sm:p-6 lg:p-8 py-0 px-[10px] w-2/3">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  {slide.comparison.headers.map((header: string, index: number) => <th key={index} className="text-center p-3 sm:p-4 lg:p-6 font-semibold text-lg sm:text-xl lg:text-2xl">
                      {header}
                    </th>)}
                </tr>
              </thead>
              <tbody>
                {slide.comparison.rows.map((row: string[], index: number) => <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="p-3 sm:p-4 lg:p-6 font-medium text-gray-900 text-base sm:text-lg lg:text-xl text-center">{row[0]}</td>
                    <td className="p-3 sm:p-4 lg:p-6 text-blue-600 font-medium text-base sm:text-lg lg:text-xl text-center">{row[1]}</td>
                    <td className="p-3 sm:p-4 lg:p-6 text-gray-600 text-base sm:text-lg lg:text-xl text-center">{row[2]}</td>
                  </tr>)}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
      <Card className="p-4 sm:p-6 lg:p-8 bg-green-50">
        <CardHeader className="pb-4 sm:pb-6">
          <CardTitle className="text-green-800 text-xl sm:text-2xl lg:text-3xl text-center">Ventajas Clave de InfluxDB</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {slide.advantages.map((advantage: string, index: number) => <div key={index} className="flex items-start space-x-3 sm:space-x-4">
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-800 text-base sm:text-lg lg:text-xl">{advantage}</span>
              </div>)}
          </div>
        </CardContent>
      </Card>
    </div>;
};
export default ComparisonSlide;
