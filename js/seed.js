/* =========================================================
   seed.js — Datos iniciales para simulación
   Cada postulante tiene SIEMPRE su cuenta de usuario asociada.
   El flag de versión obliga a regenerar la data al bumpear.
   ========================================================= */

const Seed = (() => {
  const SEED_FLAG = 'seeded_v2';

  const isSeeded   = () => Storage.read(SEED_FLAG, false) === true;
  const markSeeded = () => Storage.write(SEED_FLAG, true);

  /* ---------- USUARIOS ---------- */
  const seedUsuarios = () => ([
    { id: 'u1', nombre: 'Administrador', apellido: 'Conti',  email: 'admin@contitalent.com', password: 'admin123',  rol: 'admin',      activo: true, creadoEn: Date.now() - 86400000 * 30 },
    { id: 'u2', nombre: 'Lucía',         apellido: 'Ramos',  email: 'lucia@example.com',     password: 'lucia123',  rol: 'postulante', activo: true, creadoEn: Date.now() - 86400000 * 8  },
    { id: 'u3', nombre: 'Carlos',        apellido: 'Mendoza',email: 'carlos@example.com',    password: 'carlos123', rol: 'postulante', activo: true, creadoEn: Date.now() - 86400000 * 5  },
    { id: 'u4', nombre: 'María',         apellido: 'Torres', email: 'maria@example.com',     password: 'maria123',  rol: 'postulante', activo: true, creadoEn: Date.now() - 86400000 * 2  },
    { id: 'u5', nombre: 'Pedro',         apellido: 'Salinas',email: 'pedro@example.com',     password: 'pedro123',  rol: 'postulante', activo: true, creadoEn: Date.now() - 86400000 * 7  },
    { id: 'u6', nombre: 'Andrea',        apellido: 'León',   email: 'andrea@example.com',    password: 'andrea123', rol: 'postulante', activo: true, creadoEn: Date.now() - 86400000 * 10 },
    { id: 'u7', nombre: 'Diego',         apellido: 'Álvarez',email: 'diego@example.com',     password: 'diego123',  rol: 'postulante', activo: true, creadoEn: Date.now() - 86400000 * 15 },
    { id: 'u8', nombre: 'Fiorella',      apellido: 'Rojas',  email: 'fiorella@example.com',  password: 'fiora123',  rol: 'postulante', activo: true, creadoEn: Date.now() - 86400000 * 8  }
  ]);

  /* ---------- ÁREAS ---------- */
  const seedAreas = () => ([
    { id: 'a1', nombre: 'Tecnología',         icono: '💻', descripcion: 'Desarrollo de software, infraestructura y datos.', color: '#6366f1' },
    { id: 'a2', nombre: 'Diseño & UX',         icono: '🎨', descripcion: 'Producto, interfaz y experiencia.',                color: '#ec4899' },
    { id: 'a3', nombre: 'Marketing',           icono: '📣', descripcion: 'Crecimiento, contenidos y performance.',           color: '#f59e0b' },
    { id: 'a4', nombre: 'Ventas',              icono: '🤝', descripcion: 'Desarrollo comercial y key accounts.',             color: '#10b981' },
    { id: 'a5', nombre: 'Recursos Humanos',    icono: '👥', descripcion: 'Cultura, talento y desarrollo.',                   color: '#8b5cf6' },
    { id: 'a6', nombre: 'Finanzas',            icono: '📊', descripcion: 'Contabilidad, control y planificación.',           color: '#06b6d4' }
  ]);

  /* ---------- OFERTAS ---------- */
  const seedOfertas = () => ([
    { id: 'o1', titulo: 'Desarrollador Full Stack',          areaId: 'a1', modalidad: 'Híbrido',    ubicacion: 'Lima',     vacantes: 3, destacada: true,  descripcion: 'Construye productos web modernos con tecnologías como Java, Spring Boot, React y bases de datos relacionales.', requisitos: ['2+ años de experiencia', 'Java / Spring Boot', 'JavaScript moderno', 'SQL'], beneficios: ['Plan de carrera', 'Trabajo híbrido', 'Bonos por desempeño'], creadaEn: Date.now() - 86400000 * 3 },
    { id: 'o2', titulo: 'UX/UI Designer',                    areaId: 'a2', modalidad: 'Remoto',     ubicacion: 'Perú',     vacantes: 2, destacada: true,  descripcion: 'Diseña experiencias para productos digitales orientados al usuario final.', requisitos: ['Portafolio sólido', 'Figma avanzado', 'Diseño de sistemas'], beneficios: ['100% remoto', 'Equipo global'], creadaEn: Date.now() - 86400000 * 1 },
    { id: 'o3', titulo: 'Especialista en Marketing Digital', areaId: 'a3', modalidad: 'Presencial', ubicacion: 'Arequipa', vacantes: 1, destacada: false, descripcion: 'Lidera campañas digitales orientadas a performance.', requisitos: ['Google Ads', 'SEO/SEM', 'Analítica'], beneficios: ['Capacitaciones', 'Bonificaciones'], creadaEn: Date.now() - 86400000 * 5 },
    { id: 'o4', titulo: 'Ejecutivo Comercial',               areaId: 'a4', modalidad: 'Presencial', ubicacion: 'Lima',     vacantes: 5, destacada: true,  descripcion: 'Desarrollo de cartera B2B en sectores estratégicos.', requisitos: ['Experiencia comercial', 'Manejo de KPIs'], beneficios: ['Comisiones', 'Crecimiento rápido'], creadaEn: Date.now() - 86400000 * 7 },
    { id: 'o5', titulo: 'Analista de Talento',               areaId: 'a5', modalidad: 'Híbrido',    ubicacion: 'Lima',     vacantes: 1, destacada: false, descripcion: 'Reclutamiento y gestión del ciclo de vida del colaborador.', requisitos: ['Psicología', 'Reclutamiento masivo'], beneficios: ['Plan de bienestar'], creadaEn: Date.now() - 86400000 * 10 },
    { id: 'o6', titulo: 'Analista Financiero',               areaId: 'a6', modalidad: 'Híbrido',    ubicacion: 'Lima',     vacantes: 2, destacada: false, descripcion: 'Modelado financiero y análisis de inversiones.', requisitos: ['Excel avanzado', 'Power BI'], beneficios: ['Bonos anuales'], creadaEn: Date.now() - 86400000 * 12 }
  ]);

  /* ---------- PREGUNTAS ---------- */
  const seedPreguntas = () => ([
    { id: 'q1', ofertaId: 'o1', pregunta: '¿Qué patrón de diseño aplicarías para desacoplar lógica de presentación en una aplicación web?', opciones: ['Singleton', 'MVC', 'Observer', 'Factory'], correcta: 1 },
    { id: 'q2', ofertaId: 'o1', pregunta: '¿Cuál es la principal ventaja de usar inyección de dependencias?',                                opciones: ['Mejora el rendimiento en tiempo de ejecución', 'Permite tests más sencillos y bajo acoplamiento', 'Reduce el tamaño del bundle', 'Reemplaza el uso de interfaces'], correcta: 1 },
    { id: 'q3', ofertaId: 'o1', pregunta: 'En SQL, ¿qué hace una sentencia INNER JOIN?',                                                     opciones: ['Retorna todas las filas de ambas tablas', 'Retorna solo filas con coincidencias en ambas tablas', 'Retorna filas únicas de la primera tabla', 'Combina filas evitando duplicados'], correcta: 1 },
    { id: 'q4', ofertaId: 'o1', pregunta: '¿Qué define el principio de responsabilidad única (SRP)?',                                        opciones: ['Una clase debe abrir extensiones, no modificaciones', 'Una clase debe tener una única razón para cambiar', 'Las dependencias deben ser invertidas', 'Las interfaces deben ser segregadas'], correcta: 1 },
    { id: 'q5', ofertaId: 'o1', pregunta: '¿Cuál NO es un método HTTP idempotente?',                                                          opciones: ['GET', 'PUT', 'DELETE', 'POST'], correcta: 3 },

    { id: 'q6', ofertaId: 'o2', pregunta: '¿Qué método de investigación entrega insights cualitativos?',                                      opciones: ['A/B testing', 'Entrevistas en profundidad', 'Mapas de calor', 'Encuestas cuantitativas'], correcta: 1 },
    { id: 'q7', ofertaId: 'o2', pregunta: '¿Qué herramienta es estándar de la industria para diseño de interfaces?',                          opciones: ['Photoshop', 'Figma', 'Premiere', 'Notion'], correcta: 1 },
    { id: 'q8', ofertaId: 'o2', pregunta: '¿Qué principio establece que los elementos relacionados deben estar visualmente cerca?',           opciones: ['Contraste', 'Repetición', 'Proximidad', 'Alineación'], correcta: 2 }
  ]);

  /* ---------- POSTULANTES ----------
   * Cada postulante apunta a un usuario real (usuarioId).
   * `respuestas` mapea preguntaId -> índice elegido (0..3).
   * Si la oferta no tiene preguntas, respuestas queda vacío (eval. manual).
   */
  const seedPostulantes = () => ([
    { id: 'p1', usuarioId: 'u2', ofertaId: 'o1', nombre: 'Lucía Ramos',    email: 'lucia@example.com',    telefono: '+51 987 654 321', experiencia: '3 años en desarrollo backend',     habilidades: 'Java, Spring Boot, SQL, React', estado: 'EN_EVALUACION',         puntaje: 80, cv: 'lucia_cv.pdf',    respuestas: { q1: 1, q2: 1, q3: 1, q4: 1, q5: 0 }, creadoEn: Date.now() - 86400000 * 4  },
    { id: 'p2', usuarioId: 'u3', ofertaId: 'o1', nombre: 'Carlos Mendoza', email: 'carlos@example.com',   telefono: '+51 911 222 333', experiencia: '5 años en arquitectura',           habilidades: 'Java, Spring, Docker, AWS',     estado: 'APROBADO_TECNICO',       puntaje: 100, cv: 'carlos_cv.pdf',  respuestas: { q1: 1, q2: 1, q3: 1, q4: 1, q5: 3 }, creadoEn: Date.now() - 86400000 * 3  },
    { id: 'p3', usuarioId: 'u4', ofertaId: 'o2', nombre: 'María Torres',   email: 'maria@example.com',    telefono: '+51 933 555 777', experiencia: '4 años en diseño de producto',     habilidades: 'Figma, Sketch, UX research',    estado: 'POSTULADO',              puntaje: 0,   cv: 'maria_cv.pdf',   respuestas: {},                                    creadoEn: Date.now() - 86400000 * 1  },
    { id: 'p4', usuarioId: 'u5', ofertaId: 'o1', nombre: 'Pedro Salinas',  email: 'pedro@example.com',    telefono: '+51 922 444 666', experiencia: '2 años en desarrollo web',         habilidades: 'JavaScript, React, Node',       estado: 'ENTREVISTA',             puntaje: 80, cv: 'pedro_cv.pdf',    respuestas: { q1: 1, q2: 1, q3: 0, q4: 1, q5: 3 }, creadoEn: Date.now() - 86400000 * 6  },
    { id: 'p5', usuarioId: 'u6', ofertaId: 'o4', nombre: 'Andrea León',    email: 'andrea@example.com',   telefono: '+51 944 888 111', experiencia: '6 años en ventas B2B',             habilidades: 'CRM, prospección, negociación', estado: 'EVALUACION_PSICOLOGICA', puntaje: 88, cv: 'andrea_cv.pdf',   respuestas: {},                                    creadoEn: Date.now() - 86400000 * 9  },
    { id: 'p6', usuarioId: 'u7', ofertaId: 'o3', nombre: 'Diego Álvarez',  email: 'diego@example.com',    telefono: '+51 955 777 222', experiencia: '3 años en marketing digital',      habilidades: 'Google Ads, SEO, GA4',          estado: 'ACEPTADO',               puntaje: 95, cv: 'diego_cv.pdf',    respuestas: {},                                    creadoEn: Date.now() - 86400000 * 14 },
    { id: 'p7', usuarioId: 'u8', ofertaId: 'o2', nombre: 'Fiorella Rojas', email: 'fiorella@example.com', telefono: '+51 966 333 444', experiencia: '1 año en diseño',                  habilidades: 'Figma, Illustrator',            estado: 'RECHAZADO',              puntaje: 33, cv: 'fiorella_cv.pdf', respuestas: { q6: 0, q7: 1, q8: 0 },               creadoEn: Date.now() - 86400000 * 7  }
  ]);

  /* ---------- MÉTRICAS ---------- */
  const seedMetricas = () => ({
    series: {
      postulaciones:    { label: 'Postulaciones recibidas (últimos 8 meses)', unidad: 'postulantes',
        puntos: [
          { mes: 'sep-25', valor: 125 }, { mes: 'oct-25', valor: 143 }, { mes: 'nov-25', valor: 132 }, { mes: 'dic-25', valor: 156 },
          { mes: 'ene-26', valor: 162 }, { mes: 'feb-26', valor: 148 }, { mes: 'mar-26', valor: 171 }, { mes: 'abr-26', valor: 183 }
        ] },
      contrataciones:   { label: 'Contrataciones efectivas', unidad: 'personas',
        puntos: [
          { mes: 'sep-25', valor: 12 }, { mes: 'oct-25', valor: 18 }, { mes: 'nov-25', valor: 14 }, { mes: 'dic-25', valor: 22 },
          { mes: 'ene-26', valor: 25 }, { mes: 'feb-26', valor: 19 }, { mes: 'mar-26', valor: 28 }, { mes: 'abr-26', valor: 31 }
        ] },
      tiempoCierre:     { label: 'Tiempo promedio de cierre (días)', unidad: 'días',
        puntos: [
          { mes: 'sep-25', valor: 28 }, { mes: 'oct-25', valor: 26 }, { mes: 'nov-25', valor: 27 }, { mes: 'dic-25', valor: 24 },
          { mes: 'ene-26', valor: 22 }, { mes: 'feb-26', valor: 23 }, { mes: 'mar-26', valor: 21 }, { mes: 'abr-26', valor: 19 }
        ] },
      puntajePromedio:  { label: 'Puntaje promedio en evaluación técnica', unidad: 'pts',
        puntos: [
          { mes: 'sep-25', valor: 70 }, { mes: 'oct-25', valor: 72 }, { mes: 'nov-25', valor: 71 }, { mes: 'dic-25', valor: 74 },
          { mes: 'ene-26', valor: 76 }, { mes: 'feb-26', valor: 75 }, { mes: 'mar-26', valor: 78 }, { mes: 'abr-26', valor: 81 }
        ] },
      tasaAceptacion:   { label: 'Tasa de aceptación (%)', unidad: '%',
        puntos: [
          { mes: 'sep-25', valor: 9.6 }, { mes: 'oct-25', valor: 12.6 }, { mes: 'nov-25', valor: 10.6 }, { mes: 'dic-25', valor: 14.1 },
          { mes: 'ene-26', valor: 15.4 }, { mes: 'feb-26', valor: 12.8 }, { mes: 'mar-26', valor: 16.4 }, { mes: 'abr-26', valor: 16.9 }
        ] }
    },
    estadoActual: {
      postulantesActivos: 183,
      ofertasAbiertas: 12,
      entrevistasHoy: 7,
      ofertasEsteMes: 31,
      tiempoPromedio: '19 días'
    }
  });

  const run = () => {
    if (isSeeded()) return;
    Storage.write('areas',       seedAreas());
    Storage.write('ofertas',     seedOfertas());
    Storage.write('preguntas',   seedPreguntas());
    Storage.write('usuarios',    seedUsuarios());
    Storage.write('postulantes', seedPostulantes());
    Storage.write('metricas',    seedMetricas());
    Storage.clear('seeded_v1'); // limpia flag antiguo si existe
    markSeeded();
  };

  return { run };
})();

window.Seed = Seed;
