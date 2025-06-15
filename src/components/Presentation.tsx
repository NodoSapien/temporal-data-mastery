import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Database, TrendingUp, Zap, Clock, BarChart3, Globe, CheckCircle, XCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const slides = [
    {
      id: 1,
      titleLine1: "InfluxDB:",
      titleLine2: "La Base de Datos Líder en Series Temporales",
      subtitle: "Revolucionando el manejo de datos temporales",
      type: "title"
    },
    {
      id: 2,
      title: "¿Qué es InfluxDB?",
      content: [
        "Base de datos NoSQL especializada en series temporales",
        "Desarrollada por InfluxData, escrita en Go",
        "Diseñada para datos que cambian con el tiempo",
        "Métricas, sensores IoT, logs, eventos del sistema"
      ],
      features: [
        "Alto rendimiento",
        "Arquitectura distribuida", 
        "SQL-like query language",
        "Compresión automática",
        "Retención automática (TTL)"
      ],
      type: "content"
    },
    {
      id: 3,
      title: "¿Por qué InfluxDB es Excelente como Base de Datos NoSQL?",
      sections: [
        {
          title: "Especialización en Series Temporales",
          points: [
            "Estructura de datos nativa por timestamp",
            "Compresión temporal hasta 90%",
            "Consultas temporales extremadamente eficientes",
            "Retención automática de datos"
          ]
        },
        {
          title: "Rendimiento Superior", 
          points: [
            "Millones de escrituras por segundo",
            "Consultas analíticas rápidas",
            "Bajo overhead de sistema"
          ]
        }
      ],
      type: "detailed"
    },
    {
      id: 4,
      title: "InfluxDB vs Bases de Datos SQL Tradicionales",
      comparison: {
        headers: ["Aspecto", "InfluxDB", "SQL Tradicional"],
        rows: [
          ["Modelo de Datos", "Time-series nativo", "Relacional"],
          ["Escrituras", "Inserts masivos optimizados", "Transacciones ACID"],
          ["Consultas Temporales", "Nativas y eficientes", "Índices complejos requeridos"],
          ["Compresión", "Automática y específica", "General, menos eficiente"],
          ["Escalabilidad", "Horizontal natural", "Principalmente vertical"]
        ]
      },
      advantages: [
        "10-100x más rápido para series temporales",
        "Modelo de datos más simple",
        "Funciones temporales nativas",
        "Gestión automática de datos"
      ],
      type: "comparison"
    },
    {
      id: 5,
      title: "InfluxDB vs Otras Bases de Datos NoSQL",
      comparisons: [
        {
          title: "vs MongoDB",
          influx: ["Series temporales", "Performance temporal excelente", "Compresión automática"],
          other: ["Documentos generales", "Performance buena con índices", "Compresión manual"]
        },
        {
          title: "vs Cassandra", 
          influx: ["Baja complejidad", "Configuración simple", "Series temporales nativo"],
          other: ["Alta complejidad", "Configuración compleja", "Requiere modelado específico"]
        },
        {
          title: "vs Redis",
          influx: ["Persistencia nativa", "Consultas complejas", "Escalabilidad horizontal"],
          other: ["Persistencia opcional", "Consultas limitadas", "Principalmente vertical"]
        }
      ],
      type: "multi-comparison"
    },
    {
      id: 6,
      title: "Principales Ventajas de InfluxDB",
      categories: [
        {
          title: "Técnicas",
          icon: <Zap className="w-6 h-6" />,
          advantages: [
            "Millones de puntos por segundo",
            "Compresión automática hasta 90%",
            "InfluxQL y Flux query languages",
            "Clustering nativo",
            "Políticas TTL configurables"
          ]
        },
        {
          title: "Operacionales",
          icon: <Database className="w-6 h-6" />,
          advantages: [
            "Instalación simple - binario único",
            "Web UI integrada",
            "Ecosistema rico (Grafana, Telegraf)",
            "APIs REST nativas",
            "Administración simplificada"
          ]
        },
        {
          title: "Desarrollo",
          icon: <TrendingUp className="w-6 h-6" />,
          advantages: [
            "Sintaxis SQL-like familiar",
            "SDKs para todos los lenguajes",
            "CLI y herramientas de desarrollo",
            "Documentación excelente",
            "Curva de aprendizaje suave"
          ]
        }
      ],
      type: "advantages"
    },
    {
      id: 7,
      title: "Casos de Uso Ideales",
      cases: [
        {
          title: "Monitoreo y Observabilidad",
          icon: <BarChart3 className="w-8 h-8" />,
          examples: ["Métricas de aplicaciones", "Logs de rendimiento", "Monitoreo de infraestructura", "APM"]
        },
        {
          title: "Internet of Things (IoT)",
          icon: <Globe className="w-8 h-8" />,
          examples: ["Datos de sensores", "Telemetría de dispositivos", "Análisis de patrones", "Alertas en tiempo real"]
        },
        {
          title: "Análisis de Negocio",
          icon: <TrendingUp className="w-8 h-8" />,
          examples: ["Métricas de KPI", "Análisis de tendencias", "Reporting temporal", "Business Intelligence"]
        }
      ],
      type: "use-cases"
    },
    {
      id: 8,
      title: "Cuándo Elegir InfluxDB",
      decision: {
        choose: [
          "Datos con timestamp como clave principal",
          "Necesidad de análisis temporal",
          "Alto volumen de escrituras",
          "Consultas de agregación frecuentes",
          "Retención automática de datos"
        ],
        avoid: [
          "Transacciones ACID complejas",
          "Relaciones complejas entre entidades", 
          "Bajo volumen de datos temporales",
          "Necesidad de joins complejos"
        ]
      },
      type: "decision"
    },
    {
      id: 9,
      title: "El Futuro de InfluxDB",
      future: [
        {
          title: "InfluxDB 3.0",
          description: "Arquitectura cloud-native con Apache Arrow"
        },
        {
          title: "Performance Mejorada", 
          description: "10x mejores escrituras y consultas"
        },
        {
          title: "Compatibilidad SQL",
          description: "Soporte nativo para SQL estándar"
        },
        {
          title: "Edge Computing",
          description: "Mejor soporte para dispositivos IoT"
        }
      ],
      stats: "Liderazgo consolidado: #1 en time-series databases según DB-Engines",
      type: "future"
    },
    {
      id: 10,
      title: "Conclusión",
      points: [
        "InfluxDB representa la evolución natural de las bases de datos para la era de los datos temporales masivos",
        "Su especialización, rendimiento superior y facilidad de uso la convierten en la elección ideal",
        "Combinación perfecta de rendimiento excepcional, simplicidad operacional y ecosistema maduro",
        "Posicionada como la solución líder para los desafíos de datos temporales del futuro"
      ],
      type: "conclusion"
    }
  ];

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

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentSlide, isAnimating]);

  const renderSlide = (slide: any) => {
    switch (slide.type) {
      case 'title':
        return (
          <div className="flex flex-col items-center justify-center h-full text-center space-y-8">
            <div className="flex items-center space-x-4 mb-8">
              <Database className="w-16 h-16 text-blue-600" />
              <Clock className="w-16 h-16 text-green-600" />
            </div>
            <div className="space-y-4">
              <h1 className="text-6xl font-bold text-gray-900 leading-tight">
                {slide.titleLine1}
              </h1>
              <h2 className="text-5xl font-bold text-gray-900 leading-tight">
                {slide.titleLine2}
              </h2>
            </div>
            <p className="text-2xl text-gray-600 max-w-3xl">
              {slide.subtitle}
            </p>
            <div className="mt-12 flex space-x-4">
              <Badge variant="outline" className="text-lg px-4 py-2">Time-Series Database</Badge>
              <Badge variant="outline" className="text-lg px-4 py-2">High Performance</Badge>
              <Badge variant="outline" className="text-lg px-4 py-2">NoSQL</Badge>
            </div>
          </div>
        );

      case 'content':
        return (
          <div className="space-y-8">
            <h1 className="text-5xl font-bold text-gray-900 mb-8">{slide.title}</h1>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Database className="w-6 h-6 text-blue-600" />
                    <span>Descripción</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {slide.content.map((item: string, index: number) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              <Card className="p-6">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Zap className="w-6 h-6 text-green-600" />
                    <span>Características Clave</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {slide.features.map((feature: string, index: number) => (
                      <li key={index} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        );

      case 'detailed':
        return (
          <div className="space-y-8">
            <h1 className="text-5xl font-bold text-gray-900 mb-8">{slide.title}</h1>
            <div className="grid gap-8">
              {slide.sections.map((section: any, index: number) => (
                <Card key={index} className="p-6">
                  <CardHeader>
                    <CardTitle className="text-2xl text-blue-600">{section.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      {section.points.map((point: string, idx: number) => (
                        <div key={idx} className="flex items-start space-x-3">
                          <TrendingUp className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{point}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );

      case 'comparison':
        return (
          <div className="space-y-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">{slide.title}</h1>
            <Card className="p-6">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      {slide.comparison.headers.map((header: string, index: number) => (
                        <th key={index} className="text-left p-4 font-semibold text-lg">
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {slide.comparison.rows.map((row: string[], index: number) => (
                      <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="p-4 font-medium text-gray-900">{row[0]}</td>
                        <td className="p-4 text-blue-600 font-medium">{row[1]}</td>
                        <td className="p-4 text-gray-600">{row[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
            <Card className="p-6 bg-green-50">
              <CardHeader>
                <CardTitle className="text-green-800">Ventajas Clave de InfluxDB</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {slide.advantages.map((advantage: string, index: number) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-800">{advantage}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case 'multi-comparison':
        return (
          <div className="space-y-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">{slide.title}</h1>
            <div className="grid gap-6">
              {slide.comparisons.map((comparison: any, index: number) => (
                <Card key={index} className="p-6">
                  <CardHeader>
                    <CardTitle className="text-2xl text-blue-600">{comparison.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <h4 className="font-semibold text-blue-600 flex items-center space-x-2">
                          <Database className="w-5 h-5" />
                          <span>InfluxDB</span>
                        </h4>
                        <ul className="space-y-2">
                          {comparison.influx.map((item: string, idx: number) => (
                            <li key={idx} className="flex items-start space-x-3">
                              <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700 text-sm">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="space-y-3">
                        <h4 className="font-semibold text-gray-600 flex items-center space-x-2">
                          <Database className="w-5 h-5" />
                          <span>{comparison.title.replace("vs ", "")}</span>
                        </h4>
                        <ul className="space-y-2">
                          {comparison.other.map((item: string, idx: number) => (
                            <li key={idx} className="flex items-start space-x-3">
                              <div className="w-4 h-4 border-2 border-gray-400 rounded-full mt-0.5 flex-shrink-0"></div>
                              <span className="text-gray-600 text-sm">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );

      case 'advantages':
        return (
          <div className="space-y-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">{slide.title}</h1>
            <div className="grid gap-6">
              {slide.categories.map((category: any, index: number) => (
                <Card key={index} className="p-6">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3 text-2xl">
                      <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                        {category.icon}
                      </div>
                      <span>Ventajas {category.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {category.advantages.map((advantage: string, idx: number) => (
                        <div key={idx} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                          <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{advantage}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );

      case 'use-cases':
        return (
          <div className="space-y-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">{slide.title}</h1>
            <div className="grid md:grid-cols-3 gap-6">
              {slide.cases.map((useCase: any, index: number) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center">
                    <div className="mx-auto p-4 bg-gradient-to-br from-blue-500 to-green-500 rounded-full text-white mb-4">
                      {useCase.icon}
                    </div>
                    <CardTitle className="text-xl">{useCase.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {useCase.examples.map((example: string, idx: number) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700 text-sm">{example}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );

      case 'decision':
        return (
          <div className="space-y-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">{slide.title}</h1>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6 border-green-200 bg-green-50">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-green-800">
                    <CheckCircle className="w-6 h-6" />
                    <span>Cuándo SÍ usar InfluxDB</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {slide.decision.choose.map((item: string, index: number) => (
                      <li key={index} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-800">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              <Card className="p-6 border-red-200 bg-red-50">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-red-800">
                    <XCircle className="w-6 h-6" />
                    <span>Cuándo considerar alternativas</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {slide.decision.avoid.map((item: string, index: number) => (
                      <li key={index} className="flex items-start space-x-3">
                        <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-800">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        );

      case 'future':
        return (
          <div className="space-y-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">{slide.title}</h1>
            <div className="grid md:grid-cols-2 gap-6">
              {slide.future.map((item: any, index: number) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl text-blue-600">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <Card className="p-6 bg-gradient-to-r from-blue-500 to-green-500 text-white">
              <CardContent className="text-center">
                <p className="text-xl font-semibold">{slide.stats}</p>
              </CardContent>
            </Card>
          </div>
        );

      case 'conclusion':
        return (
          <div className="flex flex-col justify-center h-full space-y-8">
            <h1 className="text-5xl font-bold text-gray-900 mb-8 text-center">Conclusión</h1>
            <div className="space-y-6 max-w-4xl mx-auto">
              {slide.points.map((point: string, index: number) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </div>
                    <p className="text-lg text-gray-700 leading-relaxed">{point}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-12">
              <div className="flex items-center justify-center space-x-4">
                <Database className="w-12 h-12 text-blue-600" />
                <h2 className="text-3xl font-bold text-gray-900">InfluxDB</h2>
                <Clock className="w-12 h-12 text-green-600" />
              </div>
              <p className="text-xl text-gray-600 mt-4">El futuro de las bases de datos temporales</p>
            </div>
          </div>
        );

      default:
        return <div>Slide content not found</div>;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header with navigation */}
      <div className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50 p-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center space-x-4">
            <Database className="w-8 h-8 text-blue-600" />
            <h1 className="text-xl font-bold text-gray-900">InfluxDB Presentation</h1>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600">
              {currentSlide + 1} / {slides.length}
            </span>
            <div className="flex space-x-2">
              <Button 
                onClick={prevSlide} 
                disabled={currentSlide === 0}
                variant="outline"
                size="sm"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button 
                onClick={nextSlide} 
                disabled={currentSlide === slides.length - 1}
                variant="outline"
                size="sm"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main content with 16:10 aspect ratio */}
      <div className="pt-20 pb-16 px-8 flex items-center justify-center min-h-screen">
        <div className="w-full max-w-7xl mx-auto">
          <div className="w-full aspect-[16/10] overflow-hidden">
            <div className="h-full p-8 overflow-y-auto">
              <div 
                className={`transition-all duration-300 h-full ${
                  isAnimating ? 'opacity-0 transform translate-x-4' : 'opacity-100 transform translate-x-0'
                }`}
              >
                {renderSlide(slides[currentSlide])}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom navigation dots */}
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
        <div className="flex space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
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
