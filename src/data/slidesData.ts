
import { Zap, Database, TrendingUp, BarChart3, Globe } from 'lucide-react';

export const slidesData = [
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
