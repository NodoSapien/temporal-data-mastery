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
          icon: <Zap className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />,
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
          icon: <Database className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />,
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
          icon: <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />,
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
          icon: <BarChart3 className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
          examples: ["Métricas de aplicaciones", "Logs de rendimiento", "Monitoreo de infraestructura", "APM"]
        },
        {
          title: "Internet of Things (IoT)",
          icon: <Globe className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
          examples: ["Datos de sensores", "Telemetría de dispositivos", "Análisis de patrones", "Alertas en tiempo real"]
        },
        {
          title: "Análisis de Negocio",
          icon: <TrendingUp className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
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
          <div className="flex flex-col items-center justify-center min-h-[70vh] text-center space-y-6 sm:space-y-8 lg:space-y-12 px-4 py-8 sm:py-12">
            <div className="flex items-center space-x-3 sm:space-x-6 mb-6 sm:mb-12">
              <Database className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 text-blue-600" />
              <Clock className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 text-green-600" />
            </div>
            <div className="space-y-3 sm:space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight">
                {slide.titleLine1}
              </h1>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                {slide.titleLine2}
              </h2>
            </div>
            <p className="text-lg sm:text-xl lg:text-2xl xl:text-3xl text-gray-600 max-w-5xl">
              {slide.subtitle}
            </p>
            <div className="mt-8 sm:mt-16 flex flex-wrap justify-center gap-3 sm:gap-6">
              <Badge variant="outline" className="text-base sm:text-xl lg:text-2xl px-4 sm:px-6 py-2 sm:py-3">Time-Series Database</Badge>
              <Badge variant="outline" className="text-base sm:text-xl lg:text-2xl px-4 sm:px-6 py-2 sm:py-3">High Performance</Badge>
              <Badge variant="outline" className="text-base sm:text-xl lg:text-2xl px-4 sm:px-6 py-2 sm:py-3">NoSQL</Badge>
            </div>
          </div>
        );

      case 'content':
        return (
          <div className="space-y-6 sm:space-y-8 lg:space-y-12 px-4 py-8 sm:py-12">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-8 sm:mb-12 text-center">{slide.title}</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
              <Card className="p-4 sm:p-6 lg:p-8">
                <CardHeader className="pb-4 sm:pb-6">
                  <CardTitle className="flex items-center justify-center space-x-3 text-xl sm:text-2xl lg:text-3xl text-center">
                    <Database className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-blue-600 flex-shrink-0" />
                    <span>Descripción</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 sm:space-y-4">
                    {slide.content.map((item: string, index: number) => (
                      <li key={index} className="flex items-start space-x-3 sm:space-x-4">
                        <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-base sm:text-lg lg:text-xl text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              <Card className="p-4 sm:p-6 lg:p-8">
                <CardHeader className="pb-4 sm:pb-6">
                  <CardTitle className="flex items-center justify-center space-x-3 text-xl sm:text-2xl lg:text-3xl text-center">
                    <Zap className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-green-600 flex-shrink-0" />
                    <span>Características Clave</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 sm:space-y-4">
                    {slide.features.map((feature: string, index: number) => (
                      <li key={index} className="flex items-start space-x-3 sm:space-x-4">
                        <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-base sm:text-lg lg:text-xl text-gray-700">{feature}</span>
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
          <div className="space-y-6 sm:space-y-8 lg:space-y-12 px-4 py-8 sm:py-12">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-8 sm:mb-12 text-center">{slide.title}</h1>
            <div className="grid gap-6 sm:gap-8 lg:gap-12">
              {slide.sections.map((section: any, index: number) => (
                <Card key={index} className="p-4 sm:p-6 lg:p-8">
                  <CardHeader className="pb-4 sm:pb-6">
                    <CardTitle className="text-xl sm:text-2xl lg:text-3xl text-blue-600 text-center">{section.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                      {section.points.map((point: string, idx: number) => (
                        <div key={idx} className="flex items-start space-x-3 sm:space-x-4">
                          <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-base sm:text-lg lg:text-xl text-gray-700">{point}</span>
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
          <div className="space-y-6 sm:space-y-8 lg:space-y-12 px-4 py-8 sm:py-12">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-8 sm:mb-12 text-center">{slide.title}</h1>
            <Card className="p-4 sm:p-6 lg:p-8">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[600px]">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      {slide.comparison.headers.map((header: string, index: number) => (
                        <th key={index} className="text-center p-3 sm:p-4 lg:p-6 font-semibold text-lg sm:text-xl lg:text-2xl">
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {slide.comparison.rows.map((row: string[], index: number) => (
                      <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="p-3 sm:p-4 lg:p-6 font-medium text-gray-900 text-base sm:text-lg lg:text-xl text-center">{row[0]}</td>
                        <td className="p-3 sm:p-4 lg:p-6 text-blue-600 font-medium text-base sm:text-lg lg:text-xl text-center">{row[1]}</td>
                        <td className="p-3 sm:p-4 lg:p-6 text-gray-600 text-base sm:text-lg lg:text-xl text-center">{row[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
            <Card className="p-4 sm:p-6 lg:p-8 bg-green-50">
              <CardHeader className="pb-4 sm:pb-6">
                <CardTitle className="text-green-800 text-xl sm:text-2xl lg:text-3xl text-center">Ventajas Clave de InfluxDB</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  {slide.advantages.map((advantage: string, index: number) => (
                    <div key={index} className="flex items-start space-x-3 sm:space-x-4">
                      <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-800 text-base sm:text-lg lg:text-xl">{advantage}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case 'multi-comparison':
        return (
          <div className="space-y-6 sm:space-y-8 lg:space-y-12 px-4 py-8 sm:py-12">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-8 sm:mb-12 text-center">{slide.title}</h1>
            <div className="grid gap-6 sm:gap-8">
              {slide.comparisons.map((comparison: any, index: number) => (
                <Card key={index} className="p-4 sm:p-6 lg:p-8">
                  <CardHeader className="pb-4 sm:pb-6">
                    <CardTitle className="text-xl sm:text-2xl lg:text-3xl text-blue-600 text-center">{comparison.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                      <div className="space-y-3 sm:space-y-4">
                        <h4 className="font-semibold text-blue-600 flex items-center justify-center space-x-2 text-lg sm:text-xl lg:text-2xl">
                          <Database className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 flex-shrink-0" />
                          <span>InfluxDB</span>
                        </h4>
                        <ul className="space-y-2 sm:space-y-3">
                          {comparison.influx.map((item: string, idx: number) => (
                            <li key={idx} className="flex items-start space-x-3 sm:space-x-4">
                              <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-green-600 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700 text-sm sm:text-base lg:text-lg">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="space-y-3 sm:space-y-4">
                        <h4 className="font-semibold text-gray-600 flex items-center justify-center space-x-2 text-lg sm:text-xl lg:text-2xl">
                          <Database className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 flex-shrink-0" />
                          <span>{comparison.title.replace("vs ", "")}</span>
                        </h4>
                        <ul className="space-y-2 sm:space-y-3">
                          {comparison.other.map((item: string, idx: number) => (
                            <li key={idx} className="flex items-start space-x-3 sm:space-x-4">
                              <div className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 border-2 border-gray-400 rounded-full mt-0.5 flex-shrink-0"></div>
                              <span className="text-gray-600 text-sm sm:text-base lg:text-lg">{item}</span>
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
          <div className="space-y-6 sm:space-y-8 lg:space-y-12 px-4 py-8 sm:py-12">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-8 sm:mb-12 text-center">{slide.title}</h1>
            <div className="grid gap-6 sm:gap-8">
              {slide.categories.map((category: any, index: number) => (
                <Card key={index} className="p-4 sm:p-6 lg:p-8">
                  <CardHeader className="pb-4 sm:pb-6">
                    <CardTitle className="flex items-center justify-center space-x-3 sm:space-x-4 text-xl sm:text-2xl lg:text-3xl">
                      <div className="p-2 sm:p-3 lg:p-4 bg-blue-100 rounded-lg text-blue-600 flex-shrink-0">
                        {category.icon}
                      </div>
                      <span>Ventajas {category.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                      {category.advantages.map((advantage: string, idx: number) => (
                        <div key={idx} className="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 lg:p-5 bg-gray-50 rounded-lg">
                          <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 text-sm sm:text-base lg:text-lg">{advantage}</span>
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

      case 'decision':
        return (
          <div className="space-y-6 sm:space-y-8 lg:space-y-12 px-4 py-8 sm:py-12">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-8 sm:mb-12 text-center">{slide.title}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
              <Card className="p-4 sm:p-6 lg:p-8 border-green-200 bg-green-50">
                <CardHeader className="pb-4 sm:pb-6">
                  <CardTitle className="flex items-center justify-center space-x-3 text-green-800 text-xl sm:text-2xl lg:text-3xl">
                    <CheckCircle className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 flex-shrink-0" />
                    <span>Cuándo SÍ usar InfluxDB</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 sm:space-y-4">
                    {slide.decision.choose.map((item: string, index: number) => (
                      <li key={index} className="flex items-start space-x-3 sm:space-x-4">
                        <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-800 text-base sm:text-lg lg:text-xl">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              <Card className="p-4 sm:p-6 lg:p-8 border-red-200 bg-red-50">
                <CardHeader className="pb-4 sm:pb-6">
                  <CardTitle className="flex items-center justify-center space-x-3 text-red-800 text-xl sm:text-2xl lg:text-3xl">
                    <XCircle className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 flex-shrink-0" />
                    <span>Cuándo considerar alternativas</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 sm:space-y-4">
                    {slide.decision.avoid.map((item: string, index: number) => (
                      <li key={index} className="flex items-start space-x-3 sm:space-x-4">
                        <XCircle className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-red-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-800 text-base sm:text-lg lg:text-xl">{item}</span>
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
          <div className="space-y-6 sm:space-y-8 lg:space-y-12 px-4 py-8 sm:py-12">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-8 sm:mb-12 text-center">{slide.title}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {slide.future.map((item: any, index: number) => (
                <Card key={index} className="p-4 sm:p-6 lg:p-8 hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-4 sm:pb-6">
                    <CardTitle className="text-xl sm:text-2xl lg:text-3xl text-blue-600 text-center">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 text-base sm:text-lg lg:text-xl text-center">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <Card className="p-4 sm:p-6 lg:p-8 bg-gradient-to-r from-blue-500 to-green-500 text-white">
              <CardContent className="text-center">
                <p className="text-xl sm:text-2xl lg:text-3xl font-semibold">{slide.stats}</p>
              </CardContent>
            </Card>
          </div>
        );

      case 'conclusion':
        return (
          <div className="flex flex-col justify-center min-h-[70vh] space-y-6 sm:space-y-8 lg:space-y-12 px-4 py-8 sm:py-12">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-8 sm:mb-12 text-center">Conclusión</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
              {slide.points.map((point: string, index: number) => (
                <Card key={index} className="p-4 sm:p-6 lg:p-8 hover:shadow-lg transition-shadow h-full flex flex-col justify-center relative">
                  <div className="absolute top-2 right-2 w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm">
                    {index + 1}
                  </div>
                  <CardContent className="flex items-center justify-center text-center">
                    <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-700 leading-relaxed">{point}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-8 sm:mt-12 lg:mt-16">
              <div className="flex items-center justify-center space-x-3 sm:space-x-6">
                <Database className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 text-blue-600" />
                <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900">InfluxDB</h2>
                <Clock className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 text-green-600" />
              </div>
              <p className="text-lg sm:text-xl lg:text-2xl xl:text-3xl text-gray-600 mt-4 sm:mt-6">El futuro de las bases de datos temporales</p>
            </div>
          </div>
        );

      default:
        return <div>Slide content not found</div>;
    }
  };

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

      {/* Main content without fixed height container */}
      <div className="pt-16 sm:pt-20 pb-20 sm:pb-24">
        <div className="w-full max-w-7xl mx-auto">
          <div 
            className={`transition-all duration-300 ${
              isAnimating ? 'opacity-0 transform translate-x-4' : 'opacity-100 transform translate-x-0'
            }`}
          >
            {renderSlide(slides[currentSlide])}
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
