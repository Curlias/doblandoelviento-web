import * as React from "react";

export interface FooterProps {
  brandName: string;
  otherBrands?: Array<{ name: string; url: string }>;
  brand?: "doblado" | "taviti" | "ilaia";
}

export const Footer: React.FC<FooterProps> = ({ brandName, otherBrands = [], brand = "doblado" }) => {
  const brandStyles = {
    doblado: {
      bg: "bg-primary-charcoal",
      text: "text-primary-cream",
      muted: "text-primary-sand",
      accent: "text-sage-400",
      hover: "hover:text-sage-300",
      border: "border-primary-dark",
    },
    taviti: {
      bg: "bg-primary-dark",
      text: "text-primary-cream",
      muted: "text-primary-sand/80",
      accent: "text-amber-600",
      hover: "hover:text-amber-500",
      border: "border-primary-sand/30",
    },
    ilaia: {
      bg: "bg-gray-900",
      text: "text-white",
      muted: "text-gray-400",
      accent: "text-blue-400",
      hover: "hover:text-blue-300",
      border: "border-gray-800",
    },
  };

  const styles = brandStyles[brand];

  const getLegalBasePath = () => {
    if (brand === "taviti") return "/taviti";
    if (brand === "ilaia") return "/ilaia";
    return "";
  };

  const basePath = getLegalBasePath();

  // Clean ILAIA footer with minimalist design
  if (brand === "ilaia") {
    return (
      <footer className="bg-black text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          {/* Top Section */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <img src="/ilaia-logo.png" alt="ILAIA" className="h-10 filter brightness-0 invert" />
              </div>
              <p className="text-sm text-gray-400 font-light mb-2">Laboratorio de creatividad</p>
              <p className="text-gray-400 text-base leading-relaxed max-w-md mb-6">
                Educación STEAM que inspira, motiva y transforma. Aprendemos jugando, experimentando y creando.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 border border-gray-700 hover:border-blue-400 rounded-full flex items-center justify-center transition-colors group">
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href="#" className="w-10 h-10 border border-gray-700 hover:border-blue-400 rounded-full flex items-center justify-center transition-colors group">
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M12.017 0C8.396 0 7.989.013 6.756.072 5.526.131 4.64.333 3.87.63a5.904 5.904 0 0 0-2.126 1.384A5.904 5.904 0 0 0 .36 4.14C.063 4.91-.139 5.796-.2 7.026c-.059 1.233-.072 1.64-.072 5.261s.013 4.028.072 5.261c.059 1.23.261 2.116.558 2.886a5.904 5.904 0 0 0 1.384 2.126 5.904 5.904 0 0 0 2.126 1.384c.77.297 1.656.499 2.886.558 1.233.059 1.64.072 5.261.072s4.028-.013 5.261-.072c1.23-.059 2.116-.261 2.886-.558a5.904 5.904 0 0 0 2.126-1.384 5.904 5.904 0 0 0 1.384-2.126c.297-.77.499-1.656.558-2.886.059-1.233.072-1.64.072-5.261s-.013-4.028-.072-5.261c-.059-1.23-.261-2.116-.558-2.886a5.904 5.904 0 0 0-1.384-2.126A5.904 5.904 0 0 0 20.14.63C19.37.333 18.484.131 17.254.072 16.021.013 15.614 0 11.993 0h.024zm-.024 2.16c3.546 0 3.967.014 5.367.078 1.295.059 1.998.274 2.466.456.62.24 1.062.528 1.527.993.465.465.753.907.993 1.527.182.468.397 1.171.456 2.466.064 1.4.078 1.821.078 5.367s-.014 3.967-.078 5.367c-.059 1.295-.274 1.998-.456 2.466-.24.62-.528 1.062-.993 1.527a4.11 4.11 0 0 1-1.527.993c-.468.182-1.171.397-2.466.456-1.4.064-1.821.078-5.367.078s-3.967-.014-5.367-.078c-1.295-.059-1.998-.274-2.466-.456a4.11 4.11 0 0 1-1.527-.993 4.11 4.11 0 0 1-.993-1.527c-.182-.468-.397-1.171-.456-2.466-.064-1.4-.078-1.821-.078-5.367s.014-3.967.078-5.367c.059-1.295.274-1.998.456-2.466.24-.62.528-1.062.993-1.527a4.11 4.11 0 0 1 1.527-.993c.468-.182 1.171-.397 2.466-.456 1.4-.064 1.821-.078 5.367-.078z"/><path d="M12.017 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-10.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
                </a>
                <a href="#" className="w-10 h-10 border border-gray-700 hover:border-blue-400 rounded-full flex items-center justify-center transition-colors group">
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </a>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h3 className="text-sm font-medium mb-4 text-white">Explora</h3>
              <ul className="space-y-2">
                <li><a href="/ilaia/programas" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">Programas</a></li>
                <li><a href="/ilaia/talleres" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">Talleres</a></li>
                <li><a href="/ilaia/recursos" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">Recursos Gratis</a></li>
                <li><a href="/ilaia/blog" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">Blog</a></li>
              </ul>
            </div>
            
            {/* Contact */}
            <div>
              <h3 className="text-sm font-medium mb-4 text-white">Contacto</h3>
              <ul className="space-y-2 text-sm">
                <li className="text-gray-400">hola@ilaia.mx</li>
                <li className="text-gray-400">Querétaro, México</li>
                <li>
                  <a href="/ilaia/contacto" className="inline-block mt-2 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                    Contáctanos
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Family Brands */}
          {otherBrands.length > 0 && (
            <div className="border-t border-gray-800 pt-8 mb-8">
              <h3 className="text-xs font-medium uppercase tracking-wider mb-4 text-center text-gray-400">Familia de Marcas</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {otherBrands.map((brand) => (
                  <a
                    key={brand.name}
                    href={brand.url}
                    className="px-4 py-2 border border-gray-800 hover:border-blue-400 rounded-lg text-sm transition-colors text-gray-400 hover:text-blue-400"
                  >
                    {brand.name}
                  </a>
                ))}
              </div>
            </div>
          )}
          
          {/* Bottom */}
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} {brandName}. Inspirando mentes brillantes
            </p>
            <p className="text-gray-500 text-xs mt-2">
              Hecho por{" "}
              <a href="https://veldrion.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">
                Veldrion
              </a>
            </p>
          </div>
        </div>
      </footer>
    );
  }

  // Unique TAVITI footer with different structure
  if (brand === "taviti") {
    return (
      <footer className="bg-gradient-to-b from-amber-50 via-cream-50 to-white border-t border-amber-100">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          {/* Top Section - Logo and CTA */}
          <div className="text-center mb-16">
            <img src="/taviti-logo.svg" alt="TAVITI" className="h-16 w-auto mx-auto mb-6" />
            <p className="text-gray-700 italic max-w-2xl mx-auto mb-8 text-lg">
              Transformamos tus ideas en papelería extraordinaria
            </p>
            <a
              href="/taviti/contacto"
              className="inline-block bg-amber-700 text-white px-8 py-3 text-sm tracking-widest uppercase font-medium hover:bg-amber-800 transition-all duration-300 rounded-sm shadow-md hover:shadow-lg"
            >
              Comienza tu proyecto
            </a>
          </div>
          
          {/* Middle Section - 5 Column Grid */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16 text-center md:text-left">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest mb-4 text-gray-900">Productos</h3>
              <ul className="space-y-2">
                <li><a href="/taviti/productos" className="text-sm text-gray-600 hover:text-amber-700 transition-colors">Invitaciones</a></li>
                <li><a href="/taviti/productos" className="text-sm text-gray-600 hover:text-amber-700 transition-colors">Corporativo</a></li>
                <li><a href="/taviti/productos" className="text-sm text-gray-600 hover:text-amber-700 transition-colors">Cuadernos</a></li>
                <li><a href="/taviti/productos" className="text-sm text-gray-600 hover:text-amber-700 transition-colors">Agendas</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest mb-4 text-gray-900">Servicios</h3>
              <ul className="space-y-2">
                <li><a href="/taviti/personalizacion" className="text-sm text-gray-600 hover:text-amber-700 transition-colors">Personalización</a></li>
                <li><a href="/taviti/galeria" className="text-sm text-gray-600 hover:text-amber-700 transition-colors">Galería</a></li>
                <li><a href="/taviti/contacto" className="text-sm text-gray-600 hover:text-amber-700 transition-colors">Consultoría</a></li>
                <li><a href="/taviti/contacto" className="text-sm text-gray-600 hover:text-amber-700 transition-colors">Cotizaciones</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest mb-4 text-gray-900">Empresa</h3>
              <ul className="space-y-2">
                <li><a href="/taviti" className="text-sm text-gray-600 hover:text-amber-700 transition-colors">Sobre Nosotros</a></li>
                <li><a href="/taviti/galeria" className="text-sm text-gray-600 hover:text-amber-700 transition-colors">Portafolio</a></li>
                {otherBrands.length > 0 && otherBrands.map((b) => (
                  <li key={b.name}><a href={b.url} className="text-sm text-gray-600 hover:text-amber-700 transition-colors">{b.name}</a></li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest mb-4 text-gray-900">Legal</h3>
              <ul className="space-y-2">
                <li><a href="/taviti/privacy" className="text-sm text-gray-600 hover:text-amber-700 transition-colors">Privacidad</a></li>
                <li><a href="/taviti/terms" className="text-sm text-gray-600 hover:text-amber-700 transition-colors">Términos</a></li>
                <li><a href="/taviti/cookies" className="text-sm text-gray-600 hover:text-amber-700 transition-colors">Cookies</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest mb-4 text-gray-900">Contacto</h3>
              <ul className="space-y-2">
                <li><a href="mailto:hola@taviti.com" className="text-sm text-gray-600 hover:text-amber-700 transition-colors">Email</a></li>
                <li><a href="tel:+525512345678" className="text-sm text-gray-600 hover:text-amber-700 transition-colors">Teléfono</a></li>
                <li className="text-sm text-gray-600">CDMX, México</li>
              </ul>
            </div>
          </div>
          
          {/* Bottom Section - Social and Copyright */}
          <div className="pt-8 border-t border-amber-100">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex space-x-6 mb-4 md:mb-0">
                <a href="#" className="text-gray-600 hover:text-amber-700 transition-colors">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12.017 0C8.396 0 7.989.013 6.756.072 5.526.131 4.64.333 3.87.63a5.904 5.904 0 0 0-2.126 1.384A5.904 5.904 0 0 0 .36 4.14C.063 4.91-.139 5.796-.2 7.026c-.059 1.233-.072 1.64-.072 5.261s.013 4.028.072 5.261c.059 1.23.261 2.116.558 2.886a5.904 5.904 0 0 0 1.384 2.126 5.904 5.904 0 0 0 2.126 1.384c.77.297 1.656.499 2.886.558 1.233.059 1.64.072 5.261.072s4.028-.013 5.261-.072c1.23-.059 2.116-.261 2.886-.558a5.904 5.904 0 0 0 2.126-1.384 5.904 5.904 0 0 0 1.384-2.126c.297-.77.499-1.656.558-2.886.059-1.233.072-1.64.072-5.261s-.013-4.028-.072-5.261c-.059-1.23-.261-2.116-.558-2.886a5.904 5.904 0 0 0-1.384-2.126A5.904 5.904 0 0 0 20.14.63C19.37.333 18.484.131 17.254.072 16.021.013 15.614 0 11.993 0h.024zm-.024 2.16c3.546 0 3.967.014 5.367.078 1.295.059 1.998.274 2.466.456.62.24 1.062.528 1.527.993.465.465.753.907.993 1.527.182.468.397 1.171.456 2.466.064 1.4.078 1.821.078 5.367s-.014 3.967-.078 5.367c-.059 1.295-.274 1.998-.456 2.466-.24.62-.528 1.062-.993 1.527a4.11 4.11 0 0 1-1.527.993c-.468.182-1.171.397-2.466.456-1.4.064-1.821.078-5.367.078s-3.967-.014-5.367-.078c-1.295-.059-1.998-.274-2.466-.456a4.11 4.11 0 0 1-1.527-.993 4.11 4.11 0 0 1-.993-1.527c-.182-.468-.397-1.171-.456-2.466-.064-1.4-.078-1.821-.078-5.367s.014-3.967.078-5.367c.059-1.295.274-1.998.456-2.466.24-.62.528-1.062.993-1.527a4.11 4.11 0 0 1 1.527-.993c.468-.182 1.171-.397 2.466-.456 1.4-.064 1.821-.078 5.367-.078z" clipRule="evenodd" />
                    <path d="M12.017 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-10.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-600 hover:text-amber-700 transition-colors">
                  <span className="sr-only">Pinterest</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-600 hover:text-amber-700 transition-colors">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
              
              <div className="text-center md:text-right">
                <p className="text-sm text-gray-600">© {new Date().getFullYear()} {brandName}. Hecho con ❤️ en México</p>
                <p className="text-xs text-gray-500 mt-1">
                  Powered by{" "}
                  <a href="https://veldrion.com" target="_blank" rel="noopener noreferrer" className="text-amber-700 hover:text-amber-800 transition-colors">
                    Veldrion
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }

  // Default footer for other brands
  return (
    <footer className={styles.bg}>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              {brand === "doblado" && (
                <img src="/logo.svg" alt="Doblando el Viento" className="h-10 w-auto brightness-0 invert" />
              )}
              {brand === "taviti" && (
                <img src="/taviti-logo.svg" alt="TAVITI" className="h-10 w-auto" />
              )}
              {brand === "ilaia" && (
                <h3 className={`font-serif text-2xl font-medium ${styles.text}`}>{brandName}</h3>
              )}
              {brand !== "ilaia" && brand !== "taviti" && brand !== "doblado" && (
                <h3 className={`font-serif text-2xl font-medium ${styles.text}`}>{brandName}</h3>
              )}
            </div>
            <p className={`${styles.muted} text-sm leading-relaxed max-w-md italic`}>
              Creamos experiencias únicas y memorables para tus eventos más especiales. 
              Cada detalle cuenta, cada momento importa.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className={`${styles.muted} ${styles.hover} transition-colors`}>
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12.017 0C8.396 0 7.989.013 6.756.072 5.526.131 4.64.333 3.87.63a5.904 5.904 0 0 0-2.126 1.384A5.904 5.904 0 0 0 .36 4.14C.063 4.91-.139 5.796-.2 7.026c-.059 1.233-.072 1.64-.072 5.261s.013 4.028.072 5.261c.059 1.23.261 2.116.558 2.886a5.904 5.904 0 0 0 1.384 2.126 5.904 5.904 0 0 0 2.126 1.384c.77.297 1.656.499 2.886.558 1.233.059 1.64.072 5.261.072s4.028-.013 5.261-.072c1.23-.059 2.116-.261 2.886-.558a5.904 5.904 0 0 0 2.126-1.384 5.904 5.904 0 0 0 1.384-2.126c.297-.77.499-1.656.558-2.886.059-1.233.072-1.64.072-5.261s-.013-4.028-.072-5.261c-.059-1.23-.261-2.116-.558-2.886a5.904 5.904 0 0 0-1.384-2.126A5.904 5.904 0 0 0 20.14.63C19.37.333 18.484.131 17.254.072 16.021.013 15.614 0 11.993 0h.024zm-.024 2.16c3.546 0 3.967.014 5.367.078 1.295.059 1.998.274 2.466.456.62.24 1.062.528 1.527.993.465.465.753.907.993 1.527.182.468.397 1.171.456 2.466.064 1.4.078 1.821.078 5.367s-.014 3.967-.078 5.367c-.059 1.295-.274 1.998-.456 2.466-.24.62-.528 1.062-.993 1.527a4.11 4.11 0 0 1-1.527.993c-.468.182-1.171.397-2.466.456-1.4.064-1.821.078-5.367.078s-3.967-.014-5.367-.078c-1.295-.059-1.998-.274-2.466-.456a4.11 4.11 0 0 1-1.527-.993 4.11 4.11 0 0 1-.993-1.527c-.182-.468-.397-1.171-.456-2.466-.064-1.4-.078-1.821-.078-5.367s.014-3.967.078-5.367c.059-1.295.274-1.998.456-2.466.24-.62.528-1.062.993-1.527a4.11 4.11 0 0 1 1.527-.993c.468-.182 1.171-.397 2.466-.456 1.4-.064 1.821-.078 5.367-.078z" clipRule="evenodd" />
                  <path d="M12.017 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-10.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                </svg>
              </a>
              <a href="#" className={`${styles.muted} ${styles.hover} transition-colors`}>
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
          
          {otherBrands.length > 0 && (
            <div>
              <h3 className={`text-sm font-semibold uppercase tracking-wider mb-4 ${styles.text}`}>Nuestras Marcas</h3>
              <ul className="space-y-3">
                {otherBrands.map((brand) => (
                  <li key={brand.name}>
                    <a
                      href={brand.url}
                      className={`${styles.muted} ${styles.hover} text-sm transition-colors`}
                    >
                      {brand.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          <div>
            <h3 className={`text-sm font-semibold uppercase tracking-wider mb-4 ${styles.text}`}>Legal</h3>
            <ul className="space-y-3">
              <li>
                <a href={`${basePath}/privacy`} className={`${styles.muted} ${styles.hover} text-sm transition-colors`}>
                  Política de Privacidad
                </a>
              </li>
              <li>
                <a href={`${basePath}/cookies`} className={`${styles.muted} ${styles.hover} text-sm transition-colors`}>
                  Política de Cookies
                </a>
              </li>
              <li>
                <a href={`${basePath}/terms`} className={`${styles.muted} ${styles.hover} text-sm transition-colors`}>
                  Términos de Servicio
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className={`mt-12 pt-8 border-t ${styles.border}`}>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className={`text-sm ${styles.muted}`}>
              © {new Date().getFullYear()} {brandName}. Todos los derechos reservados.
            </p>
            <p className={`text-sm ${styles.muted} mt-4 md:mt-0`}>
              Potenciado por{" "}
              <a
                href="https://veldrion.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.accent} ${styles.hover} transition-colors`}
              >
                Veldrion
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
