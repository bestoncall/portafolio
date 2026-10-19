// ============================================================
//  TODO EL TEXTO DEL PORTAFOLIO VIVE AQUÍ.
//  Edita este archivo para cambiar textos, links y proyectos.
//  Cada texto tiene versión "es" (español) y "en" (inglés).
// ============================================================

export const profile = {
  name: 'Oscar González',
  email: 'gonzalezpreciadooscarandres@gmail.com',
  github: 'https://github.com/bestoncall',
  linkedin: '', // Pendiente: cuando crees tu perfil, pega aquí el link (vacío = el botón no aparece)
  cv: '/cv-oscar-gonzalez.pdf', // Versión sin teléfono; se crea con cv-y-tarjeta/generar-pdf.ps1
}

export const ui = {
  es: {
    nav: { projects: 'Proyectos', stack: 'Stack', about: 'Sobre mí', contact: 'Contacto' },
    langSwitch: 'English',
    hero: {
      role: 'Desarrollador backend y full-stack',
      intro:
        'Construyo software para clientes reales: sistemas de gestión, apps móviles y tiendas en línea. Trabajo desde Puerto Berrío, a orillas del Magdalena.',
      ctaProjects: 'Ver proyectos',
      ctaContact: 'Escríbeme',
      available: 'Disponible para prácticas, trabajo junior y proyectos freelance',
    },
    projects: {
      title: 'Proyectos con clientes reales',
      lead: 'Cada uno nació de una necesidad concreta de un negocio o institución, no de un tutorial.',
      problem: 'El problema',
      built: 'Lo que construí',
      code: 'Código',
      live: 'Ver en vivo',
      client: 'Cliente real',
    },
    stack: {
      title: 'Con qué trabajo',
      groups: {
        backend: 'Backend',
        databases: 'Bases de datos',
        frontend: 'Frontend y móvil',
        tools: 'Herramientas',
        deploy: 'Despliegue',
      },
    },
    about: {
      title: 'Sobre mí',
      body: [
        'Me formo como Técnico en Análisis y Desarrollo de Software en el SENA y aprendo construyendo: cada proyecto de esta página tiene un cliente que lo usa o lo va a usar.',
        'Me enfoco en el backend —APIs, bases de datos, despliegue— y llevo los proyectos completos hasta producción. Uso herramientas de IA en mi flujo de trabajo, pero entiendo y reviso el código que entrego.',
      ],
      education: 'Formación',
      edu: [
        { title: 'Técnico en Análisis y Desarrollo de Software', place: 'SENA', status: 'En curso' },
        { title: 'Metodología de la Programación de Sistemas Informáticos', place: 'Curso', status: 'Completado' },
      ],
      languages: 'Idiomas',
      langs: 'Español nativo · Inglés A2, avanzando a B1',
    },
    contact: {
      title: '¿Tienes un proyecto o una vacante?',
      body: 'Respondo rápido. Cuéntame qué necesitas y te digo cómo lo resolvería.',
      email: 'Enviar correo',
      copy: 'Copiar correo',
      copied: 'Correo copiado',
    },
    footer: 'Hecho con React, Vite y Tailwind CSS.',
  },

  en: {
    nav: { projects: 'Projects', stack: 'Stack', about: 'About', contact: 'Contact' },
    langSwitch: 'Español',
    hero: {
      role: 'Backend & full-stack developer',
      intro:
        'I build software for real clients: management systems, mobile apps and online stores. I work from Puerto Berrío, Colombia, on the banks of the Magdalena River.',
      ctaProjects: 'See projects',
      ctaContact: 'Get in touch',
      available: 'Open to internships, junior roles and freelance projects',
    },
    projects: {
      title: 'Projects with real clients',
      lead: 'Each one started from a concrete need of a business or institution, not from a tutorial.',
      problem: 'The problem',
      built: 'What I built',
      code: 'Code',
      live: 'Live demo',
      client: 'Real client',
    },
    stack: {
      title: 'What I work with',
      groups: {
        backend: 'Backend',
        databases: 'Databases',
        frontend: 'Frontend & mobile',
        tools: 'Tools',
        deploy: 'Deployment',
      },
    },
    about: {
      title: 'About me',
      body: [
        "I'm training as a Software Analysis and Development Technician at SENA, Colombia's national training service, and I learn by building: every project on this page has a client who uses it or will use it.",
        'I focus on the backend —APIs, databases, deployment— and take projects all the way to production. I use AI tools in my workflow, but I understand and review the code I ship.',
      ],
      education: 'Education',
      edu: [
        { title: 'Software Analysis and Development Technician', place: 'SENA', status: 'In progress' },
        { title: 'Programming Methodology for Computer Systems', place: 'Course', status: 'Completed' },
      ],
      languages: 'Languages',
      langs: 'Spanish (native) · English A2, working towards B1',
    },
    contact: {
      title: 'Have a project or an opening?',
      body: "I reply fast. Tell me what you need and I'll tell you how I'd solve it.",
      email: 'Send an email',
      copy: 'Copy email',
      copied: 'Email copied',
    },
    footer: 'Built with React, Vite and Tailwind CSS.',
  },
}

// ------------------------------------------------------------
//  PROYECTOS
//  - repo / live: pon los links reales. Si quedan vacíos, el botón no aparece.
//  - stack: CONFIRMA que sea lo que realmente usaste.
//  - visual: qué ilustración mostrar ('growth' | 'lessons' | 'store')
// ------------------------------------------------------------
export const projects = [
  {
    id: 'agrosoft',
    name: 'AgroSoft Avícola',
    visual: 'growth',
    accent: 'leaf',
    repo: '', // Repositorio privado
    live: '', // Sin demo pública todavía
    // Prototipo en React + Vite + Recharts; producto con Next.js, React Native y FastAPI (igual que en el CV)
    stack: ['React', 'Vite', 'Recharts', 'Next.js', 'React Native (Expo)', 'FastAPI', 'Docker', 'Vercel', 'Render', 'Neon (PostgreSQL)'],
    es: {
      tagline: 'Gestión de granjas avícolas',
      problem:
        'Una granja avícola necesitaba registrar su producción diaria y ver en un solo lugar si sus lotes crecían como debían.',
      built: [
        'Autenticación con roles para administrador y operarios',
        'Registro diario de producción por lote',
        'Curvas de crecimiento con gráficas comparativas',
        'Modelo de suscripción freemium',
        'Despliegue con frontend en Vercel, API en Render y base de datos en Neon',
      ],
    },
    en: {
      tagline: 'Poultry farm management',
      problem:
        'A poultry farm needed to record its daily production and see in one place whether its flocks were growing as expected.',
      built: [
        'Role-based authentication for admins and farm workers',
        'Daily production records per flock',
        'Growth curves with comparison charts',
        'Freemium subscription model',
        'Deployed with the frontend on Vercel, the API on Render and the database on Neon',
      ],
    },
  },
  {
    id: 'linguapath',
    name: 'Lingua Path',
    visual: 'lessons',
    accent: 'river',
    repo: '', // Repositorio privado
    live: '', // Sin demo pública todavía (en desarrollo)
    stack: ['React Native (Expo)', 'FastAPI', 'SQLite'], // Igual que en el CV
    es: {
      tagline: 'App de inglés para un instituto',
      problem:
        'Un instituto de inglés quería que sus estudiantes practicaran desde el celular con una app tipo Duolingo, pero siguiendo su propia metodología y libro de texto.',
      built: [
        'Lecciones del nivel A1 basadas en el material del instituto',
        'Inicio de sesión por estudiante',
        'Avatar propio para cada estudiante',
        'Puntos por lección completada',
        'Tienda para canjear puntos por personalizaciones del avatar',
      ],
    },
    en: {
      tagline: 'English-learning app for a language school',
      problem:
        'An English school wanted its students to practice from their phones with a Duolingo-style app, but following its own teaching method and textbook.',
      built: [
        'A1-level lessons based on the school’s own material',
        'Per-student login',
        'A personal avatar for every student',
        'Points for each completed lesson',
        'A shop to spend points on avatar customizations',
      ],
    },
  },
  {
    id: 'matispink',
    name: 'Matis Pink',
    visual: 'store',
    accent: 'pink',
    repo: '', // Repositorio privado
    live: '', // Cuando la tienda esté publicada, pega aquí su dirección
    stack: ['React', 'Tailwind CSS'], // Igual que en el CV
    es: {
      tagline: 'Tienda online de maquillaje',
      problem:
        'Una tienda de maquillaje necesitaba vender en línea con medios de pago locales y llevar el control de sus ventas desde un panel propio.',
      built: [
        'Tienda para clientas, pensada primero para celular',
        'Panel de administración conectado a las ventas',
        'Pagos por PSE y Bancolombia',
      ],
    },
    en: {
      tagline: 'Online makeup store',
      problem:
        'A makeup business needed to sell online with local payment methods and keep track of its sales from its own dashboard.',
      built: [
        'Mobile-first storefront for customers',
        'Admin dashboard connected to sales',
        'Payments through PSE and Bancolombia (Colombian bank transfer methods)',
      ],
    },
  },
]

// Las mismas habilidades del CV (cv-y-tarjeta/cv.html). Si cambias una, cambia la otra.
// El resto de tecnologías (Expo, SQLite, Next.js, Tailwind…) aparece en el stack de cada proyecto.
export const stack = {
  backend: ['Python', 'FastAPI', 'APIs REST'],
  databases: ['PostgreSQL', 'SQL'],
  frontend: ['JavaScript', 'React', 'React Native'],
  tools: ['Git', 'GitHub', 'Docker'],
  deploy: ['Vercel', 'Render'],
}
