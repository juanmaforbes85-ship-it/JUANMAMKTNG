import { useState } from 'react';
import { Menu, X, Zap, MessageCircle, Facebook, Instagram, Star, Newspaper, Radio, ArrowRight, Code, Smartphone, Lock, Check, ShoppingCart } from 'lucide-react';

export default function JuanmaTiendasWeb() {
  const [menuOpen, setMenuOpen] = useState(false);

  const whatsappNumber = '5491124620014';
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hola%20Juanma%2C%20me%20interesa%20que%20hagas%20mi%20tienda%20web%20profesional.`;

  const handleWhatsApp = () => {
    window.open(whatsappLink, '_blank');
  };

  // VENTAJAS DEL SERVICIO
  const ventajas = [
    { icon: Code, titulo: 'Tiendas Profesionales', desc: 'Código limpio, rápido y optimizado para conversiones. No plantillas básicas.' },
    { icon: Smartphone, titulo: 'Mobile First', desc: 'Diseñadas para vender en cualquier dispositivo. 100% responsive.' },
    { icon: Zap, titulo: 'Súper Rápidas', desc: 'Optimizadas para velocidad máxima. SEO friendly y cargue instantáneo.' },
    { icon: Lock, titulo: 'Seguridad Premium', desc: 'SSL integrado, protección de datos y pasarelas de pago seguras.' }
  ];

  // PORTAFOLIO
  const portfolio = [
    {
      nombre: 'Tienda E-commerce',
      tipo: 'Para Cualquier Rubro',
      descripcion: 'Tienda online para cualquier tipo de negocio: moda, tecnología, servicios, productos digitales y más.',
      imagen: '🛒',
      features: ['Carrito dinámico', 'Pago automático', 'Gestión de stock', 'CRM integrado']
    },
    {
      nombre: 'Landing Page Profesional',
      tipo: 'Marcas y Freelancers',
      descripcion: 'Página de presentación y conversión para marcas personales, freelancers y agencias de marketing.',
      imagen: '📱',
      features: ['Formularios inteligentes', 'Analytics integrado', 'A/B Testing ready', 'Integración Email']
    },
    {
      nombre: 'Sitio de Contenido',
      tipo: 'Portfolios y Diarios Online',
      descripcion: 'Sitios para mostrar tu trabajo o publicar contenido: portfolios creativos, diarios y blogs online.',
      imagen: '📰',
      features: ['Galería de proyectos', 'Publicación de artículos', 'SEO optimizado', 'Diseño a medida']
    },
    {
      nombre: 'Plataforma de Streaming',
      tipo: 'Transmisión en Vivo',
      descripcion: 'Sitio con reproductor en vivo, chat en tiempo real y acceso controlado para tu audiencia.',
      imagen: '🎬',
      features: ['Streaming en vivo', 'Chat en tiempo real', 'Acceso controlado', 'Panel de usuario']
    }
  ];

  // PLANES
  const planes = [
    {
      nombre: 'Tienda Básica',
      precio: 'Consultar',
      descripcion: 'Perfecta para comenzar a vender',
      features: [
        '✓ Hasta 50 productos',
        '✓ 1 categoría de productos',
        '✓ Pasarela de pago (Mercado Pago)',
        '✓ SSL incluido',
        '✓ Email de contacto',
        '✓ 1 mes de soporte',
        '✓ Hosting por 6 meses'
      ],
      destacado: false
    },
    {
      nombre: 'Tienda Profesional',
      precio: 'Consultar',
      descripcion: 'Para revendedores y pequeños negocios',
      features: [
        '✓ Productos ilimitados',
        '✓ Múltiples categorías',
        '✓ Múltiples pasarelas de pago',
        '✓ Gestión automática de envíos',
        '✓ Email marketing integrado',
        '✓ Analytics completo',
        '✓ 3 meses de soporte',
        '✓ Hosting por 1 año',
        '✓ Certificado SSL Premium'
      ],
      destacado: true
    },
    {
      nombre: 'Tienda Premium',
      precio: 'Consultar',
      descripcion: 'Solución completa con todas las funciones',
      features: [
        '✓ Todo lo de Profesional',
        '✓ Membresía y subscripciones',
        '✓ Área de miembros privada',
        '✓ Gestión de cursos online',
        '✓ CRM integrado',
        '✓ Integraciones personalizadas',
        '✓ 6 meses de soporte',
        '✓ Hosting premium por 1 año',
        '✓ Asesoría de conversión'
      ],
      destacado: false
    }
  ];

  // TESTIMONIOS DE REVENDEDORES
  const testimonios = [
    {
      nombre: 'Martín C.',
      rol: 'Revendedor - Servicios Digitales',
      texto: 'Con mi tienda web profesional triplicué mis ventas. La página convierte visitantes en clientes automáticamente.',
      ingresos: '$120K/mes'
    },
    {
      nombre: 'Valentina S.',
      rol: 'Emprendedora - Tienda Online',
      texto: 'Juanma diseñó mi tienda con el sistema de pago integrado. Vendo 24/7 sin hacer nada. Excelente ROI.',
      ingresos: '$85K/mes'
    },
    {
      nombre: 'Roberto P.',
      rol: 'Creador de Contenido',
      texto: 'Mi landing page genera leads constantemente. Pasó de 0 a 50 clientes en el primer mes. Increíble.',
      ingresos: '$60K/mes'
    }
  ];

  // PROCESO
  const proceso = [
    {
      numero: '1',
      titulo: 'Descubrimiento',
      desc: 'Te entiendo: tu negocio, tus objetivos, tu audiencia y competencia.'
    },
    {
      numero: '2',
      titulo: 'Estrategia',
      desc: 'Diseño la estructura, flujos de conversión y experiencia del usuario.'
    },
    {
      numero: '3',
      titulo: 'Desarrollo',
      desc: 'Construyo tu tienda con tecnología moderna, rápida y segura.'
    },
    {
      numero: '4',
      titulo: 'Optimización',
      desc: 'Configuramos pagos, dominios, email y lanzamos tu tienda al mundo.'
    }
  ];

  // COMPONENTES REUTILIZABLES

  type Plan = (typeof planes)[number];
  type Ventaja = (typeof ventajas)[number];
  type Testimonio = (typeof testimonios)[number];
  type PortfolioItem = (typeof portfolio)[number];

  const PlanCard = ({ plan }: { plan: Plan }) => (
    <div className={`group relative rounded-2xl overflow-hidden ${plan.destacado ? 'lg:scale-105' : ''}`}>
      {plan.destacado && (
        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-green-500 to-emerald-600 px-6 py-1 rounded-full text-sm font-bold text-white z-20">
          🔥 MÁS POPULAR
        </div>
      )}

      <div className={`absolute inset-0 bg-gradient-to-r ${plan.destacado ? 'from-green-600 to-emerald-600' : 'from-cyan-600 to-blue-600'} rounded-2xl blur-2xl opacity-0 group-hover:opacity-20 transition duration-500`}></div>

      <div className={`relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-2xl p-8 border ${plan.destacado ? 'border-green-500/50' : 'border-slate-700'} group-hover:border-cyan-500/50 transition backdrop-blur-xl`}>
        <h3 className="text-2xl font-bold text-white mb-2">{plan.nombre}</h3>
        <p className="text-slate-400 mb-4">{plan.descripcion}</p>

        <div className="mb-6">
          <p className="text-3xl font-black text-cyan-400">{plan.precio}</p>
          <p className="text-xs text-slate-400">Incluye todo configurado</p>
        </div>

        <button onClick={handleWhatsApp} className={`w-full ${plan.destacado ? 'bg-gradient-to-r from-green-500 to-emerald-600 hover:shadow-green-500/50' : 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:shadow-cyan-500/50'} py-3 rounded-lg font-bold hover:shadow-lg transition text-white mb-8`}>
          Cotizar Plan
        </button>

        <div className="space-y-3">
          {plan.features.map((feature: string, i: number) => (
            <p key={i} className="text-sm text-slate-300 flex items-start gap-2">
              <span className="text-green-400 font-bold mt-0.5">✓</span>
              {feature.replace('✓ ', '')}
            </p>
          ))}
        </div>
      </div>
    </div>
  );

  const VentajaCard = ({ ventaja }: { ventaja: Ventaja }) => (
    <div className="group relative">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition duration-500"></div>
      <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-2xl p-8 border border-slate-700 hover:border-cyan-500/50 transition backdrop-blur-xl">
        <ventaja.icon className="text-cyan-400 mb-4" size={40} />
        <h4 className="text-xl font-bold text-white mb-3">{ventaja.titulo}</h4>
        <p className="text-slate-400">{ventaja.desc}</p>
      </div>
    </div>
  );

  const TestimonialCard = ({ test }: { test: Testimonio }) => (
    <div className="group relative">
      <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition duration-500"></div>
      <div className="relative bg-gradient-to-br from-slate-800/60 to-slate-900/60 rounded-2xl p-8 border border-slate-700 group-hover:border-green-500/50 transition backdrop-blur-xl">
        <div className="flex gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
          ))}
        </div>

        <p className="text-slate-200 mb-4 text-lg">
          <span className="text-cyan-400 text-2xl mr-2">"</span>
          {test.texto}
          <span className="text-cyan-400 text-2xl ml-2">"</span>
        </p>

        <div className="border-t border-slate-700 pt-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center font-bold text-white text-sm">
            {test.nombre.charAt(0)}
          </div>
          <div>
            <p className="font-bold text-white text-sm">{test.nombre}</p>
            <p className="text-xs text-green-400 font-semibold">{test.rol}</p>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-slate-700 bg-green-500/20 rounded-lg p-2">
          <p className="text-sm font-bold text-green-300 text-center">{test.ingresos}</p>
        </div>
      </div>
    </div>
  );

  const PortfolioCard = ({ item }: { item: PortfolioItem }) => (
    <div className="group relative rounded-2xl overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur-2xl opacity-0 group-hover:opacity-20 transition duration-500"></div>
      <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-2xl p-8 border border-slate-700 hover:border-purple-500/50 transition backdrop-blur-xl h-full">
        <div className="text-6xl mb-4">{item.imagen}</div>

        <h4 className="text-xl font-bold text-white mb-2">{item.nombre}</h4>
        <p className="text-purple-400 text-sm font-semibold mb-3">{item.tipo}</p>
        <p className="text-slate-400 text-sm mb-6">{item.descripcion}</p>

        <div className="space-y-2">
          {item.features.map((feature: string, i: number) => (
            <p key={i} className="text-xs text-slate-300 flex items-center gap-2">
              <span className="text-purple-400">•</span> {feature}
            </p>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="w-full bg-slate-950 text-white overflow-hidden">
      {/* BOTÓN FLOTANTE */}
      <button
        onClick={handleWhatsApp}
        className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full shadow-2xl hover:shadow-emerald-500/50 flex items-center justify-center hover:scale-110 transition transform border-2 border-green-400 z-40"
        title="Contactar por WhatsApp"
      >
        <MessageCircle size={32} className="text-white" />
      </button>

      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-slate-950/95 backdrop-blur border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img src="https://i.imgur.com/KkocL6s.png" alt="Juanma Logo" className="w-10 h-10 rounded-lg object-contain" />
            <div>
              <h1 className="text-xl font-bold text-white">Juanma</h1>
              <p className="text-xs text-cyan-400">Tiendas Web Profesionales</p>
            </div>
          </div>

          <nav className="hidden md:flex gap-8 items-center">
            <a href="#servicios" className="hover:text-cyan-400 transition">Servicios</a>
            <a href="#portfolio" className="hover:text-cyan-400 transition">Portfolio</a>
            <a href="#planes" className="hover:text-cyan-400 transition">Planes</a>
            <a href="#testimonios" className="hover:text-cyan-400 transition">Testimonios</a>
            <button onClick={handleWhatsApp} className="bg-gradient-to-r from-green-500 to-emerald-600 px-6 py-2 rounded-lg hover:shadow-lg hover:shadow-green-500/50 transition font-bold flex items-center gap-2">
              <MessageCircle size={18} /> WhatsApp
            </button>
          </nav>

          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-slate-900 border-t border-slate-800 p-4 space-y-3">
            <a href="#servicios" className="block hover:text-cyan-400">Servicios</a>
            <a href="#portfolio" className="block hover:text-cyan-400">Portfolio</a>
            <a href="#planes" className="block hover:text-cyan-400">Planes</a>
            <button onClick={handleWhatsApp} className="w-full bg-gradient-to-r from-green-500 to-emerald-600 px-4 py-2 rounded text-center font-bold">Contactar</button>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>

        <div className="relative grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/50 rounded-full px-4 py-2">
              <p className="text-green-300 text-sm font-bold">🚀 Diseñamos tiendas que venden</p>
            </div>

            <div className="inline-block bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/50 rounded-full px-4 py-2">
              <p className="text-cyan-300 text-sm font-bold">Más de 50+ tiendas web profesionales lanzadas</p>
            </div>

            <h2 className="text-6xl md:text-7xl font-black bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent leading-tight">
              Tu Tienda Web Profesional
            </h2>

            <p className="text-xl text-slate-300 leading-relaxed">
              Tiendas web diseñadas para convertir visitantes en clientes. <span className="text-white font-bold">Rápidas, seguras y optimizadas para vender 24/7.</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button onClick={handleWhatsApp} className="group bg-gradient-to-r from-green-500 via-green-600 to-emerald-600 px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-green-500/50 transition transform hover:scale-105 flex items-center justify-center gap-2">
                <MessageCircle size={20} /> 🔥 Cotizar Mi Tienda
                <ArrowRight size={18} className="group-hover:translate-x-1 transition" />
              </button>
              <a href="#portfolio" className="group border-2 border-cyan-400 px-8 py-4 rounded-xl font-bold hover:bg-cyan-400/20 transition flex items-center justify-center gap-2">
                <ShoppingCart size={20} /> Ver Ejemplos
              </a>
            </div>

            <div className="flex flex-wrap gap-6 text-sm">
              <span className="flex items-center gap-2"><Check className="text-green-400" size={18} /> Dominio incluido</span>
              <span className="flex items-center gap-2"><Check className="text-green-400" size={18} /> SSL Premium</span>
              <span className="flex items-center gap-2"><Check className="text-green-400" size={18} /> Soporte 24/7</span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-3xl blur-3xl opacity-30 animate-pulse"></div>
            <div className="relative bg-gradient-to-br from-slate-800 via-slate-800 to-slate-900 rounded-3xl p-8 border border-slate-600 backdrop-blur-xl shadow-2xl">
              <div className="absolute top-4 right-4 flex gap-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse animation-delay-100"></div>
                <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse animation-delay-200"></div>
              </div>

              <h3 className="text-xl font-bold mb-6 text-cyan-300">💻 Tipos de Sitios Web</h3>
              <div className="space-y-3">
                {[
                  { nombre: 'E-commerce para Cualquier Negocio', icon: ShoppingCart, badge: '⭐ Popular' },
                  { nombre: 'Landing Pages: Marcas y Freelancers', icon: Zap, badge: '🔥 Alta Conversión' },
                  { nombre: 'Portfolios y Diarios Online', icon: Newspaper, badge: '✓ A Medida' },
                  { nombre: 'Streaming en Vivo', icon: Radio, badge: '📡 Tiempo Real' }
                ].map((item) => (
                  <div key={item.nombre} className="flex items-center gap-3 p-4 bg-gradient-to-r from-slate-700/40 to-slate-700/20 rounded-lg border border-slate-600/50 hover:border-cyan-500/50 transition transform hover:translate-x-1">
                    <div className="p-2 bg-gradient-to-br from-cyan-500/30 to-blue-500/30 rounded-lg">
                      <item.icon size={20} className="text-cyan-400" />
                    </div>
                    <div className="flex-1">
                      <span className="font-semibold block">{item.nombre}</span>
                    </div>
                    <span className="text-xs bg-cyan-500/20 px-2 py-1 rounded border border-cyan-500/50 text-cyan-300">{item.badge}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VENTAJAS */}
      <section id="servicios" className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-4">
              ¿Por Qué Elegirnos?
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">Tiendas web profesionales que generan ventas. No plantillas, código a medida.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {ventajas.map((ventaja, idx) => (
              <VentajaCard key={idx} ventaja={ventaja} />
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 border-y border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
              Nuestro Portfolio
            </h2>
            <p className="text-slate-400 text-lg">Tiendas web que generan resultados reales</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {portfolio.map((item, idx) => (
              <PortfolioCard key={idx} item={item} />
            ))}
          </div>

          <div className="mt-16 text-center">
            <button onClick={handleWhatsApp} className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-600 px-8 py-4 rounded-xl font-bold hover:shadow-2xl hover:shadow-purple-500/50 transition text-white text-lg">
              <Code size={20} /> Ver más ejemplos
            </button>
          </div>
        </div>
      </section>

      {/* PROCESO */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-4">Nuestro Proceso</h2>
          <p className="text-slate-400 text-lg">4 pasos simples para tu tienda web</p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {proceso.map((paso, idx) => (
            <div key={idx} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition duration-500"></div>
              <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-2xl p-8 border border-slate-700 hover:border-green-500/50 transition backdrop-blur-xl">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center font-bold text-xl text-white mb-4">
                  {paso.numero}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{paso.titulo}</h3>
                <p className="text-slate-400 text-sm">{paso.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PLANES */}
      <section id="planes" className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 border-y border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-4">
              Nuestros Planes
            </h2>
            <p className="text-slate-400 text-lg">Elige el plan perfecto para tu negocio</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {planes.map((plan, idx) => (
              <PlanCard key={idx} plan={plan} />
            ))}
          </div>

          <div className="text-center p-8 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 border border-cyan-500/30 rounded-2xl">
            <p className="text-white text-lg font-bold mb-3">¿Necesitas algo personalizado?</p>
            <p className="text-slate-300 mb-6">Contáctame para planes a medida y ofertas especiales</p>
            <button onClick={handleWhatsApp} className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-3 rounded-lg font-bold hover:shadow-lg hover:shadow-cyan-500/50 transition text-white">
              <MessageCircle size={20} /> Conversar sobre tu proyecto
            </button>
          </div>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section id="testimonios" className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-4">
              Resultados Reales de Nuestros Clientes
            </h2>
            <p className="text-slate-400 text-lg">Tiendas web que generan ganancias</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonios.map((test, idx) => (
              <TestimonialCard key={idx} test={test} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 via-cyan-600/20 to-blue-600/20 rounded-3xl blur-3xl"></div>

        <div className="relative bg-gradient-to-r from-green-600 via-cyan-600 to-blue-600 rounded-3xl p-12 md:p-20 text-center overflow-hidden">
          <h3 className="text-5xl md:text-6xl font-black mb-6 text-white">
            ¿Listo para Vender Online?
          </h3>
          <p className="text-xl md:text-2xl mb-12 text-white/90 max-w-2xl mx-auto leading-relaxed">
            Déjame crear tu tienda web profesional que genere ventas automatizadas. <span className="text-yellow-300 font-bold">🎁 Primera consulta gratis!</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={handleWhatsApp} className="group flex items-center justify-center gap-3 bg-white text-green-600 font-bold px-10 py-5 rounded-xl hover:shadow-2xl transition transform hover:scale-105 text-lg">
              <MessageCircle size={24} /> Cotizar Tienda Web
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-800 bg-gradient-to-b from-slate-900 to-slate-950 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img src="https://i.imgur.com/KkocL6s.png" alt="Juanma Logo" className="w-10 h-10 rounded-lg object-contain" />
                <h4 className="font-bold text-lg">Juanma Tiendas Web</h4>
              </div>
              <p className="text-slate-400 mb-6">Diseñamos tiendas web que venden. Código profesional, soporte completo.</p>
              <div className="flex gap-4">
                <a href="https://www.facebook.com/profile.php?id=61575661468648" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-500 transition transform hover:scale-110">
                  <Facebook size={20} className="text-white" />
                </a>
                <a href="https://www.instagram.com/juanma.mktng" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gradient-to-r from-pink-500 to-rose-500 rounded-lg flex items-center justify-center hover:shadow-lg hover:shadow-pink-500/50 transition transform hover:scale-110">
                  <Instagram size={20} className="text-white" />
                </a>
                <button onClick={handleWhatsApp} className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center hover:bg-green-500 transition transform hover:scale-110">
                  <MessageCircle size={20} className="text-white" />
                </button>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-6 text-lg text-white">Enlaces</h4>
              <ul className="space-y-3 text-slate-400">
                <li><a href="#servicios" className="hover:text-cyan-400 transition">→ Servicios</a></li>
                <li><a href="#portfolio" className="hover:text-cyan-400 transition">→ Portfolio</a></li>
                <li><a href="#planes" className="hover:text-cyan-400 transition">→ Planes</a></li>
                <li><a href="#testimonios" className="hover:text-cyan-400 transition">→ Testimonios</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6 text-lg text-white">Contacto</h4>
              <button onClick={handleWhatsApp} className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-green-600 to-emerald-600 hover:shadow-lg hover:shadow-green-600/50 py-3 px-4 rounded-lg transition text-white font-bold">
                <MessageCircle size={20} /> WhatsApp
              </button>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-12 text-center">
            <p className="text-slate-500 text-sm">&copy; 2024 Juanma Tiendas Web. Hecho para emprendedores que quieren vender online.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
