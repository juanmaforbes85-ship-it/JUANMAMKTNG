import { useMemo, useState } from 'react';
import type { LucideIcon } from 'lucide-react';
import {
  ArrowLeft,
  BadgeCheck,
  Clock,
  Eye,
  Facebook,
  Heart,
  Instagram,
  Lock,
  Menu,
  MessageCircle,
  Minus,
  Music,
  Plus,
  ShieldCheck,
  ShoppingCart,
  Trash2,
  UserPlus,
  Users,
  X,
  Youtube,
  Zap,
} from 'lucide-react';
import { WHATSAPP_NUMBER, FACEBOOK_URL, INSTAGRAM_URL } from '../constants';

// ---------- TIPOS ----------

interface Paquete {
  cantidad: number;
  precio: number;
  popular?: boolean;
}

interface Servicio {
  id: string;
  nombre: string;
  icon: LucideIcon;
  paquetes: Paquete[];
}

interface Plataforma {
  id: string;
  nombre: string;
  icon: LucideIcon;
  acento: string;
  activo: string;
  servicios: Servicio[];
}

interface CartItem {
  id: string;
  plataforma: string;
  servicio: string;
  cantidad: number;
  precioUnitario: number;
  unidades: number;
}

// ---------- CATÁLOGO ----------

const plataformas: Plataforma[] = [
  {
    id: 'instagram',
    nombre: 'Instagram',
    icon: Instagram,
    acento: 'text-pink-400',
    activo: 'from-pink-500 to-purple-600',
    servicios: [
      {
        id: 'seguidores',
        nombre: 'Seguidores',
        icon: UserPlus,
        paquetes: [
          { cantidad: 500, precio: 6500 },
          { cantidad: 1000, precio: 11500, popular: true },
          { cantidad: 2500, precio: 25000 },
          { cantidad: 5000, precio: 45000 },
          { cantidad: 10000, precio: 80000 },
        ],
      },
      {
        id: 'likes',
        nombre: 'Likes',
        icon: Heart,
        paquetes: [
          { cantidad: 100, precio: 2000 },
          { cantidad: 500, precio: 8000, popular: true },
          { cantidad: 1000, precio: 14000 },
          { cantidad: 2500, precio: 30000 },
        ],
      },
      {
        id: 'vistas',
        nombre: 'Vistas (Reels)',
        icon: Eye,
        paquetes: [
          { cantidad: 1000, precio: 1500 },
          { cantidad: 5000, precio: 5500, popular: true },
          { cantidad: 10000, precio: 9500 },
          { cantidad: 50000, precio: 35000 },
        ],
      },
    ],
  },
  {
    id: 'tiktok',
    nombre: 'TikTok',
    icon: Music,
    acento: 'text-cyan-300',
    activo: 'from-fuchsia-500 to-cyan-500',
    servicios: [
      {
        id: 'seguidores',
        nombre: 'Seguidores',
        icon: UserPlus,
        paquetes: [
          { cantidad: 500, precio: 7000 },
          { cantidad: 1000, precio: 12500, popular: true },
          { cantidad: 2500, precio: 27000 },
          { cantidad: 5000, precio: 48000 },
        ],
      },
      {
        id: 'likes',
        nombre: 'Likes',
        icon: Heart,
        paquetes: [
          { cantidad: 100, precio: 2200 },
          { cantidad: 500, precio: 8500, popular: true },
          { cantidad: 1000, precio: 15000 },
        ],
      },
      {
        id: 'vistas',
        nombre: 'Vistas',
        icon: Eye,
        paquetes: [
          { cantidad: 1000, precio: 1200 },
          { cantidad: 5000, precio: 4800, popular: true },
          { cantidad: 10000, precio: 8500 },
          { cantidad: 50000, precio: 32000 },
        ],
      },
    ],
  },
  {
    id: 'facebook',
    nombre: 'Facebook',
    icon: Facebook,
    acento: 'text-blue-400',
    activo: 'from-blue-500 to-blue-700',
    servicios: [
      {
        id: 'seguidores',
        nombre: 'Seguidores de Página',
        icon: UserPlus,
        paquetes: [
          { cantidad: 500, precio: 7500 },
          { cantidad: 1000, precio: 13000, popular: true },
          { cantidad: 2500, precio: 28000 },
        ],
      },
      {
        id: 'likes',
        nombre: 'Likes de Página',
        icon: Heart,
        paquetes: [
          { cantidad: 500, precio: 7500 },
          { cantidad: 1000, precio: 13000, popular: true },
          { cantidad: 2500, precio: 28000 },
        ],
      },
    ],
  },
  {
    id: 'youtube',
    nombre: 'YouTube',
    icon: Youtube,
    acento: 'text-red-400',
    activo: 'from-red-500 to-red-700',
    servicios: [
      {
        id: 'suscriptores',
        nombre: 'Suscriptores',
        icon: Users,
        paquetes: [
          { cantidad: 100, precio: 9000 },
          { cantidad: 500, precio: 38000, popular: true },
          { cantidad: 1000, precio: 70000 },
        ],
      },
      {
        id: 'vistas',
        nombre: 'Vistas',
        icon: Eye,
        paquetes: [
          { cantidad: 1000, precio: 3500 },
          { cantidad: 5000, precio: 14000, popular: true },
          { cantidad: 10000, precio: 25000 },
        ],
      },
    ],
  },
];

const formatPrice = (n: number) => `$${n.toLocaleString('es-AR')}`;
const formatCantidad = (n: number) => n.toLocaleString('es-AR');

const comoFunciona = [
  { icon: ShoppingCart, titulo: 'Elegí tu paquete', desc: 'Seleccioná la red social, el servicio y la cantidad que necesitás.' },
  { icon: UserPlus, titulo: 'Mandanos tu usuario', desc: 'Compartinos el link o @usuario de tu perfil, sin contraseñas ni datos sensibles.' },
  { icon: Zap, titulo: 'Recibí tu pedido', desc: 'Entrega gradual y segura en 24-48hs para que tu cuenta crezca de forma natural.' },
];

const beneficios = [
  { icon: Lock, texto: 'Nunca pedimos tu contraseña' },
  { icon: ShieldCheck, texto: 'Entrega gradual y segura' },
  { icon: Clock, texto: 'Comienza en 24-48hs' },
  { icon: BadgeCheck, texto: 'Soporte por WhatsApp' },
];

const faqs = [
  {
    q: '¿Necesito darles mi contraseña?',
    a: 'No. Solo necesitamos el link o @usuario público de tu perfil. Nunca pedimos contraseñas ni accesos a tu cuenta.',
  },
  {
    q: '¿Es seguro para mi cuenta?',
    a: 'Sí, la entrega es gradual para simular crecimiento orgánico y evitar cualquier tipo de bloqueo o restricción.',
  },
  {
    q: '¿Cuánto tarda en llegar mi pedido?',
    a: 'Generalmente comienza dentro de las 24-48hs de confirmado el pedido por WhatsApp, y se completa de forma progresiva.',
  },
  {
    q: '¿Cómo pago?',
    a: 'Coordinamos el pago por WhatsApp una vez que confirmás tu pedido. Sin tarjetas ni formularios con datos sensibles.',
  },
];

// ---------- COMPONENTE ----------

export default function SeguidoresPanel() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [platformId, setPlatformId] = useState(plataformas[0].id);
  const [servicioId, setServicioId] = useState(plataformas[0].servicios[0].id);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [perfil, setPerfil] = useState('');
  const [comentarios, setComentarios] = useState('');

  const plataforma = useMemo(
    () => plataformas.find((p) => p.id === platformId) ?? plataformas[0],
    [platformId]
  );
  const servicio = useMemo(
    () => plataforma.servicios.find((s) => s.id === servicioId) ?? plataforma.servicios[0],
    [plataforma, servicioId]
  );

  const selectPlataforma = (id: string) => {
    setPlatformId(id);
    const nueva = plataformas.find((p) => p.id === id);
    if (nueva) setServicioId(nueva.servicios[0].id);
  };

  const addToCart = (paquete: Paquete) => {
    setCart((prev) => {
      const existente = prev.find(
        (i) => i.plataforma === plataforma.nombre && i.servicio === servicio.nombre && i.cantidad === paquete.cantidad
      );
      if (existente) {
        return prev.map((i) => (i.id === existente.id ? { ...i, unidades: i.unidades + 1 } : i));
      }
      return [
        ...prev,
        {
          id: `${plataforma.id}-${servicio.id}-${paquete.cantidad}-${Date.now()}`,
          plataforma: plataforma.nombre,
          servicio: servicio.nombre,
          cantidad: paquete.cantidad,
          precioUnitario: paquete.precio,
          unidades: 1,
        },
      ];
    });
    setCartOpen(true);
  };

  const updateUnidades = (id: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((i) => (i.id === id ? { ...i, unidades: i.unidades + delta } : i))
        .filter((i) => i.unidades > 0)
    );
  };

  const removeItem = (id: string) => {
    setCart((prev) => prev.filter((i) => i.id !== id));
  };

  const total = cart.reduce((sum, i) => sum + i.precioUnitario * i.unidades, 0);
  const totalUnidades = cart.reduce((sum, i) => sum + i.unidades, 0);

  const handleCheckout = () => {
    if (cart.length === 0) return;
    const lineas = cart
      .map(
        (i) =>
          `• ${i.plataforma} - ${i.servicio}: ${formatCantidad(i.cantidad)} x${i.unidades} = ${formatPrice(i.precioUnitario * i.unidades)}`
      )
      .join('\n');
    const mensaje =
      `Hola Juanma! 👋 Quiero comprar seguidores/likes:\n\n${lineas}\n\n` +
      `💰 Total: ${formatPrice(total)}\n\n` +
      `📎 Usuario/Link de mi perfil: ${perfil || '(te lo paso por acá)'}\n` +
      (comentarios ? `📝 Comentarios: ${comentarios}\n` : '');
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensaje)}`, '_blank');
  };

  const handleWhatsAppDirecto = () => {
    const mensaje = 'Hola Juanma! Tengo una consulta sobre el panel de seguidores y likes.';
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensaje)}`, '_blank');
  };

  return (
    <div className="w-full min-h-screen bg-slate-950 text-white">
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-slate-950/95 backdrop-blur border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center gap-4">
          <a href="#/" className="flex items-center gap-2">
            <img src="https://i.imgur.com/KkocL6s.png" alt="Juanma Logo" className="w-10 h-10 rounded-lg object-contain" />
            <div>
              <h1 className="text-xl font-bold text-white">Juanma</h1>
              <p className="text-xs text-pink-400">Panel de Seguidores & Likes</p>
            </div>
          </a>

          <nav className="hidden md:flex gap-6 items-center">
            <a href="#/" className="flex items-center gap-2 hover:text-cyan-400 transition text-sm">
              <ArrowLeft size={16} /> Volver al inicio
            </a>
            <button
              onClick={() => setCartOpen(true)}
              className="relative flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-600 px-5 py-2 rounded-lg hover:shadow-lg hover:shadow-pink-500/40 transition font-bold"
            >
              <ShoppingCart size={18} /> Carrito
              {totalUnidades > 0 && (
                <span className="absolute -top-2 -right-2 bg-white text-pink-600 text-xs font-black w-6 h-6 rounded-full flex items-center justify-center">
                  {totalUnidades}
                </span>
              )}
            </button>
          </nav>

          <div className="flex md:hidden items-center gap-3">
            <button onClick={() => setCartOpen(true)} className="relative">
              <ShoppingCart size={24} />
              {totalUnidades > 0 && (
                <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-[10px] font-black w-5 h-5 rounded-full flex items-center justify-center">
                  {totalUnidades}
                </span>
              )}
            </button>
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-slate-900 border-t border-slate-800 p-4">
            <a href="#/" className="flex items-center gap-2 hover:text-cyan-400">
              <ArrowLeft size={16} /> Volver al inicio
            </a>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <div className="inline-block bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-500/50 rounded-full px-4 py-2 mb-6">
          <p className="text-pink-300 text-sm font-bold">🚀 Impulsá tus redes sociales</p>
        </div>
        <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-pink-400 via-purple-400 to-orange-400 bg-clip-text text-transparent leading-tight mb-6">
          Comprá Seguidores & Likes
        </h2>
        <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10">
          Elegí tu red social, armá tu pedido y coordinamos todo por WhatsApp. Sin contraseñas, sin vueltas.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          {beneficios.map((b, idx) => (
            <span key={idx} className="flex items-center gap-2 bg-slate-800/60 border border-slate-700 rounded-full px-4 py-2 text-sm text-slate-300">
              <b.icon size={16} className="text-pink-400" /> {b.texto}
            </span>
          ))}
        </div>
      </section>

      {/* TABS DE PLATAFORMA */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {plataformas.map((p) => {
            const activa = p.id === plataforma.id;
            return (
              <button
                key={p.id}
                onClick={() => selectPlataforma(p.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl font-bold transition border ${
                  activa
                    ? `bg-gradient-to-r ${p.activo} text-white border-transparent shadow-lg`
                    : 'bg-slate-900/60 text-slate-300 border-slate-700 hover:border-slate-500'
                }`}
              >
                <p.icon size={20} /> {p.nombre}
              </button>
            );
          })}
        </div>

        {/* TABS DE SERVICIO */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {plataforma.servicios.map((s) => {
            const activo = s.id === servicio.id;
            return (
              <button
                key={s.id}
                onClick={() => setServicioId(s.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition ${
                  activo ? 'bg-white text-slate-900' : 'bg-slate-800/60 text-slate-300 hover:bg-slate-800'
                }`}
              >
                <s.icon size={16} /> {s.nombre}
              </button>
            );
          })}
        </div>

        {/* PAQUETES */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {servicio.paquetes.map((paquete) => (
            <div key={paquete.cantidad} className="group relative rounded-2xl overflow-hidden">
              {paquete.popular && (
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-pink-500 to-purple-600 px-4 py-1 rounded-full text-xs font-bold text-white z-20">
                  🔥 MÁS POPULAR
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl blur-2xl opacity-0 group-hover:opacity-20 transition duration-500"></div>
              <div
                className={`relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-2xl p-6 border ${
                  paquete.popular ? 'border-pink-500/50' : 'border-slate-700'
                } group-hover:border-pink-500/50 transition backdrop-blur-xl h-full flex flex-col`}
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${plataforma.activo} flex items-center justify-center mb-4`}>
                  <servicio.icon size={22} className="text-white" />
                </div>
                <p className="text-3xl font-black text-white mb-1">{formatCantidad(paquete.cantidad)}</p>
                <p className="text-sm text-slate-400 mb-4">
                  {servicio.nombre} de {plataforma.nombre}
                </p>
                <p className="text-2xl font-bold text-pink-400 mb-6">{formatPrice(paquete.precio)}</p>
                <button
                  onClick={() => addToCart(paquete)}
                  className="mt-auto w-full bg-gradient-to-r from-pink-500 to-purple-600 py-3 rounded-lg font-bold hover:shadow-lg hover:shadow-pink-500/40 transition text-white flex items-center justify-center gap-2"
                >
                  <ShoppingCart size={16} /> Agregar al carrito
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CÓMO FUNCIONA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 border-y border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">¿Cómo Funciona?</h2>
            <p className="text-slate-400 text-lg">3 pasos simples para hacer crecer tus redes</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {comoFunciona.map((paso, idx) => (
              <div key={idx} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition duration-500"></div>
                <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-2xl p-8 border border-slate-700 hover:border-pink-500/50 transition backdrop-blur-xl h-full">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center font-bold text-xl text-white mb-4">
                    {idx + 1}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{paso.titulo}</h3>
                  <p className="text-slate-400 text-sm">{paso.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Preguntas Frecuentes</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {faqs.map((f, idx) => (
            <div key={idx} className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 rounded-2xl p-6 border border-slate-700">
              <h4 className="font-bold text-white mb-2">{f.q}</h4>
              <p className="text-slate-400 text-sm">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="relative bg-gradient-to-r from-pink-600 via-purple-600 to-orange-500 rounded-3xl p-12 md:p-16 text-center overflow-hidden">
          <h3 className="text-4xl md:text-5xl font-black mb-4 text-white">¿Listo para Crecer?</h3>
          <p className="text-lg md:text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Armá tu pedido arriba o escribinos directo si tenés dudas.
          </p>
          <button
            onClick={handleWhatsAppDirecto}
            className="inline-flex items-center gap-3 bg-white text-purple-700 font-bold px-8 py-4 rounded-xl hover:shadow-2xl transition transform hover:scale-105"
          >
            <MessageCircle size={22} /> Consultar por WhatsApp
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-800 bg-gradient-to-b from-slate-900 to-slate-950 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <a href="#/" className="flex items-center gap-2">
            <img src="https://i.imgur.com/KkocL6s.png" alt="Juanma Logo" className="w-8 h-8 rounded-lg object-contain" />
            <span className="text-slate-400 text-sm">&copy; 2024 Juanma. Panel de Seguidores & Likes.</span>
          </a>
          <div className="flex gap-4">
            <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-500 transition">
              <Facebook size={18} className="text-white" />
            </a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-gradient-to-r from-pink-500 to-rose-500 rounded-lg flex items-center justify-center hover:shadow-lg hover:shadow-pink-500/50 transition">
              <Instagram size={18} className="text-white" />
            </a>
          </div>
        </div>
      </footer>

      {/* CARRITO (DRAWER) */}
      {cartOpen && (
        <div className="fixed inset-0 z-[60] flex justify-end">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setCartOpen(false)}></div>

          <div className="relative w-full max-w-md h-full bg-slate-900 border-l border-slate-700 flex flex-col shadow-2xl">
            <div className="flex items-center justify-between p-6 border-b border-slate-800">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <ShoppingCart size={22} className="text-pink-400" /> Tu Carrito
              </h3>
              <button onClick={() => setCartOpen(false)} className="text-slate-400 hover:text-white">
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {cart.length === 0 ? (
                <div className="text-center text-slate-500 py-16">
                  <ShoppingCart size={40} className="mx-auto mb-4 opacity-40" />
                  <p>Tu carrito está vacío.</p>
                  <p className="text-sm">Elegí un paquete para empezar.</p>
                </div>
              ) : (
                cart.map((item) => (
                  <div key={item.id} className="bg-slate-800/60 border border-slate-700 rounded-xl p-4">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <p className="font-bold text-white text-sm">
                          {item.plataforma} · {item.servicio}
                        </p>
                        <p className="text-xs text-slate-400">{formatCantidad(item.cantidad)} unidades c/u</p>
                      </div>
                      <button onClick={() => removeItem(item.id)} className="text-slate-500 hover:text-red-400 transition">
                        <Trash2 size={18} />
                      </button>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => updateUnidades(item.id, -1)}
                          className="w-7 h-7 flex items-center justify-center bg-slate-700 hover:bg-slate-600 rounded-md transition"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="font-bold text-white w-4 text-center">{item.unidades}</span>
                        <button
                          onClick={() => updateUnidades(item.id, 1)}
                          className="w-7 h-7 flex items-center justify-center bg-slate-700 hover:bg-slate-600 rounded-md transition"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <span className="font-bold text-pink-400">{formatPrice(item.precioUnitario * item.unidades)}</span>
                    </div>
                  </div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div className="p-6 border-t border-slate-800 space-y-4">
                <input
                  type="text"
                  value={perfil}
                  onChange={(e) => setPerfil(e.target.value)}
                  placeholder="Tu @usuario o link de perfil"
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-pink-500"
                />
                <textarea
                  value={comentarios}
                  onChange={(e) => setComentarios(e.target.value)}
                  placeholder="Comentarios (opcional)"
                  rows={2}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-pink-500 resize-none"
                />

                <div className="flex justify-between items-center text-lg">
                  <span className="text-slate-300">Total</span>
                  <span className="font-black text-white">{formatPrice(total)}</span>
                </div>

                <button
                  onClick={handleCheckout}
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 py-3 rounded-lg font-bold hover:shadow-lg hover:shadow-green-500/40 transition text-white"
                >
                  <MessageCircle size={20} /> Finalizar pedido por WhatsApp
                </button>
                <p className="text-xs text-slate-500 text-center">El pago se coordina por WhatsApp. Sin tarjetas ni datos sensibles.</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
