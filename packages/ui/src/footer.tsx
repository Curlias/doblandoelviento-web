import * as React from "react";
import type { Brand } from "./types";

export interface FooterProps {
  brandName: string;
  otherBrands?: Array<{ name: string; url: string }>;
  brand: Brand;
}

export const Footer: React.FC<FooterProps> = ({ brandName, otherBrands = [], brand }) => {
  const brandStyles = {
    doblado: {
      bg: "bg-primary-charcoal",
      text: "text-primary-cream",
      muted: "text-primary-sand",
      accent: "text-sage-400",
      hover: "hover:text-sage-300",
      border: "border-primary-dark",
      logo: "/logo.svg",
      logoClass: "brightness-0 invert",
      basePath: "",
      description: "Creamos experiencias únicas y memorables para tus eventos más especiales. Cada detalle cuenta, cada momento importa.",
      socialBg: "bg-sage-700/50",
      socialHover: "hover:bg-sage-600",
    },
    taviti: {
      bg: "bg-gradient-to-br from-pink-900 via-pink-800 to-amber-900",
      text: "text-white",
      muted: "text-pink-100",
      accent: "text-amber-300",
      hover: "hover:text-amber-200",
      border: "border-pink-700",
      logo: "/taviti-logo.svg",
      logoClass: "brightness-0 invert",
      basePath: "/taviti",
      description: "Papelería boutique personalizada que cuenta tu historia. Diseños únicos hechos con amor para momentos inolvidables.",
      socialBg: "bg-pink-800/50",
      socialHover: "hover:bg-pink-700",
    },
    ilaia: {
      bg: "bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400",
      text: "text-white",
      muted: "text-purple-50",
      accent: "text-yellow-300",
      hover: "hover:text-yellow-200",
      border: "border-purple-400",
      logo: "/ilaia-logo.png",
      logoClass: "drop-shadow-lg",
      basePath: "/ilaia",
      description: "🚀 Educación STEAM para niños y jóvenes. ¡Transforma tu curiosidad en superpoderes de conocimiento!",
      socialBg: "bg-white/20",
      socialHover: "hover:bg-white/30",
    },
  };

  const styles = brandStyles[brand];

  // Footer específico para DOBLANDO EL VIENTO - Elegante clásico
  if (brand === "doblado") {
    return (
      <footer className={styles.bg}>
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <img src={styles.logo} alt={brandName} className={`h-10 w-auto ${styles.logoClass}`} />
              </div>
              <p className={`${styles.muted} text-sm leading-relaxed max-w-md italic`}>
                {styles.description}
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
                      <a href={brand.url} className={`${styles.muted} ${styles.hover} text-sm transition-colors`}>
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
                  <a href={`${styles.basePath}/privacy`} className={`${styles.muted} ${styles.hover} text-sm transition-colors`}>
                    Política de Privacidad
                  </a>
                </li>
                <li>
                  <a href={`${styles.basePath}/cookies`} className={`${styles.muted} ${styles.hover} text-sm transition-colors`}>
                    Política de Cookies
                  </a>
                </li>
                <li>
                  <a href={`${styles.basePath}/terms`} className={`${styles.muted} ${styles.hover} text-sm transition-colors`}>
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
                <a href="https://veldrion.com" target="_blank" rel="noopener noreferrer" className={`${styles.accent} ${styles.hover} transition-colors`}>
                  Veldrion
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
  }

  // Footer específico para TAVITI - Elegante boutique
  if (brand === "taviti") {
    return (
      <footer className={`${styles.bg} relative overflow-hidden`}>
        {/* Patrón decorativo */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-400 rounded-full blur-3xl"></div>
        </div>
        
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 relative z-10">
          <div className="text-center mb-16">
            <img src={styles.logo} alt={brandName} className={`h-20 w-auto ${styles.logoClass} mx-auto mb-6`} />
            <p className={`${styles.muted} text-lg max-w-2xl mx-auto font-light italic`}>
              {styles.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            {otherBrands.length > 0 && (
              <div className="text-center">
                <h3 className={`text-sm font-bold uppercase tracking-widest mb-6 ${styles.text}`}>Familia de Marcas</h3>
                <ul className="space-y-4">
                  {otherBrands.map((brand) => (
                    <li key={brand.name}>
                      <a href={brand.url} className={`${styles.muted} ${styles.hover} text-sm transition-all hover:tracking-wide`}>
                        {brand.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            <div className="text-center">
              <h3 className={`text-sm font-bold uppercase tracking-widest mb-6 ${styles.text}`}>Legal</h3>
              <ul className="space-y-4">
                <li>
                  <a href={`${styles.basePath}/privacy`} className={`${styles.muted} ${styles.hover} text-sm transition-all`}>
                    Privacidad
                  </a>
                </li>
                <li>
                  <a href={`${styles.basePath}/cookies`} className={`${styles.muted} ${styles.hover} text-sm transition-all`}>
                    Cookies
                  </a>
                </li>
                <li>
                  <a href={`${styles.basePath}/terms`} className={`${styles.muted} ${styles.hover} text-sm transition-all`}>
                    Términos
                  </a>
                </li>
              </ul>
            </div>

            <div className="text-center">
              <h3 className={`text-sm font-bold uppercase tracking-widest mb-6 ${styles.text}`}>Síguenos</h3>
              <div className="flex justify-center space-x-4">
                <a href="#" className={`${styles.socialBg} ${styles.socialHover} p-3 rounded-full transition-all transform hover:scale-110`}>
                  <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12.017 0C8.396 0 7.989.013 6.756.072 5.526.131 4.64.333 3.87.63a5.904 5.904 0 0 0-2.126 1.384A5.904 5.904 0 0 0 .36 4.14C.063 4.91-.139 5.796-.2 7.026c-.059 1.233-.072 1.64-.072 5.261s.013 4.028.072 5.261c.059 1.23.261 2.116.558 2.886a5.904 5.904 0 0 0 1.384 2.126 5.904 5.904 0 0 0 2.126 1.384c.77.297 1.656.499 2.886.558 1.233.059 1.64.072 5.261.072s4.028-.013 5.261-.072c1.23-.059 2.116-.261 2.886-.558a5.904 5.904 0 0 0 2.126-1.384 5.904 5.904 0 0 0 1.384-2.126c.297-.77.499-1.656.558-2.886.059-1.233.072-1.64.072-5.261s-.013-4.028-.072-5.261c-.059-1.23-.261-2.116-.558-2.886a5.904 5.904 0 0 0-1.384-2.126A5.904 5.904 0 0 0 20.14.63C19.37.333 18.484.131 17.254.072 16.021.013 15.614 0 11.993 0h.024zm-.024 2.16c3.546 0 3.967.014 5.367.078 1.295.059 1.998.274 2.466.456.62.24 1.062.528 1.527.993.465.465.753.907.993 1.527.182.468.397 1.171.456 2.466.064 1.4.078 1.821.078 5.367s-.014 3.967-.078 5.367c-.059 1.295-.274 1.998-.456 2.466-.24.62-.528 1.062-.993 1.527a4.11 4.11 0 0 1-1.527.993c-.468.182-1.171.397-2.466.456-1.4.064-1.821.078-5.367.078s-3.967-.014-5.367-.078c-1.295-.059-1.998-.274-2.466-.456a4.11 4.11 0 0 1-1.527-.993 4.11 4.11 0 0 1-.993-1.527c-.182-.468-.397-1.171-.456-2.466-.064-1.4-.078-1.821-.078-5.367s.014-3.967.078-5.367c.059-1.295.274-1.998.456-2.466.24-.62.528-1.062.993-1.527a4.11 4.11 0 0 1 1.527-.993c.468-.182 1.171-.397 2.466-.456 1.4-.064 1.821-.078 5.367-.078z" clipRule="evenodd" />
                    <path d="M12.017 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-10.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                  </svg>
                </a>
                <a href="#" className={`${styles.socialBg} ${styles.socialHover} p-3 rounded-full transition-all transform hover:scale-110`}>
                  <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className={`pt-8 border-t ${styles.border} text-center`}>
            <p className={`text-sm ${styles.muted} mb-2`}>
              © {new Date().getFullYear()} {brandName} • Diseñado con amor
            </p>
            <p className={`text-xs ${styles.muted}`}>
              Powered by <a href="https://veldrion.com" target="_blank" rel="noopener noreferrer" className={`${styles.accent} ${styles.hover} font-semibold`}>Veldrion</a>
            </p>
          </div>
        </div>
      </footer>
    );
  }

  // Footer específico para ILAIA - Divertido y energético
  if (brand === "ilaia") {
    return (
      <footer className={`${styles.bg} relative overflow-hidden`}>
        {/* Burbujas flotantes decorativas */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-300 rounded-full opacity-30 animate-bounce" style={{animationDuration: '4s'}}></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-purple-300 rounded-full opacity-30 animate-bounce" style={{animationDuration: '3s', animationDelay: '1s'}}></div>
          <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-pink-300 rounded-full opacity-30 animate-bounce" style={{animationDuration: '5s', animationDelay: '0.5s'}}></div>
          <div className="absolute bottom-40 right-1/3 w-14 h-14 bg-orange-300 rounded-full opacity-30 animate-bounce\" style={{animationDuration: '3.5s', animationDelay: '2s'}}></div>
        </div>

        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <img src={styles.logo} alt={brandName} className={`h-24 w-auto mx-auto mb-6 ${styles.logoClass} transform hover:scale-110 transition-transform`} />
            <p className={`${styles.text} text-xl font-bold max-w-2xl mx-auto`}>
              {styles.description}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {otherBrands.length > 0 && (
              <div className="text-center col-span-2 md:col-span-1">
                <h3 className={`text-base font-black uppercase mb-4 ${styles.text}`}>🌟 Otras Marcas</h3>
                <ul className="space-y-3">
                  {otherBrands.map((brand) => (
                    <li key={brand.name}>
                      <a href={brand.url} className={`${styles.muted} ${styles.hover} text-sm font-semibold transition-all block hover:scale-105 transform`}>
                        {brand.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            <div className="text-center">
              <h3 className={`text-base font-black uppercase mb-4 ${styles.text}`}>📚 Legal</h3>
              <ul className="space-y-3">
                <li>
                  <a href={`${styles.basePath}/privacy`} className={`${styles.muted} ${styles.hover} text-sm font-semibold transition-all block hover:scale-105 transform`}>
                    Privacidad
                  </a>
                </li>
                <li>
                  <a href={`${styles.basePath}/cookies`} className={`${styles.muted} ${styles.hover} text-sm font-semibold transition-all block hover:scale-105 transform`}>
                    Cookies
                  </a>
                </li>
                <li>
                  <a href={`${styles.basePath}/terms`} className={`${styles.muted} ${styles.hover} text-sm font-semibold transition-all block hover:scale-105 transform`}>
                    Términos
                  </a>
                </li>
              </ul>
            </div>

            <div className="text-center col-span-2">
              <h3 className={`text-base font-black uppercase mb-4 ${styles.text}`}>🚀 Síguenos</h3>
              <div className="flex justify-center space-x-4">
                <a href="#" className={`${styles.socialBg} ${styles.socialHover} p-4 rounded-2xl transition-all transform hover:scale-125 hover:rotate-6 shadow-xl`}>
                  <svg className="h-7 w-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12.017 0C8.396 0 7.989.013 6.756.072 5.526.131 4.64.333 3.87.63a5.904 5.904 0 0 0-2.126 1.384A5.904 5.904 0 0 0 .36 4.14C.063 4.91-.139 5.796-.2 7.026c-.059 1.233-.072 1.64-.072 5.261s.013 4.028.072 5.261c.059 1.23.261 2.116.558 2.886a5.904 5.904 0 0 0 1.384 2.126 5.904 5.904 0 0 0 2.126 1.384c.77.297 1.656.499 2.886.558 1.233.059 1.64.072 5.261.072s4.028-.013 5.261-.072c1.23-.059 2.116-.261 2.886-.558a5.904 5.904 0 0 0 2.126-1.384 5.904 5.904 0 0 0 1.384-2.126c.297-.77.499-1.656.558-2.886.059-1.233.072-1.64.072-5.261s-.013-4.028-.072-5.261c-.059-1.23-.261-2.116-.558-2.886a5.904 5.904 0 0 0-1.384-2.126A5.904 5.904 0 0 0 20.14.63C19.37.333 18.484.131 17.254.072 16.021.013 15.614 0 11.993 0h.024zm-.024 2.16c3.546 0 3.967.014 5.367.078 1.295.059 1.998.274 2.466.456.62.24 1.062.528 1.527.993.465.465.753.907.993 1.527.182.468.397 1.171.456 2.466.064 1.4.078 1.821.078 5.367s-.014 3.967-.078 5.367c-.059 1.295-.274 1.998-.456 2.466-.24.62-.528 1.062-.993 1.527a4.11 4.11 0 0 1-1.527.993c-.468.182-1.171.397-2.466.456-1.4.064-1.821.078-5.367.078s-3.967-.014-5.367-.078c-1.295-.059-1.998-.274-2.466-.456a4.11 4.11 0 0 1-1.527-.993 4.11 4.11 0 0 1-.993-1.527c-.182-.468-.397-1.171-.456-2.466-.064-1.4-.078-1.821-.078-5.367s.014-3.967.078-5.367c.059-1.295.274-1.998.456-2.466.24-.62.528-1.062.993-1.527a4.11 4.11 0 0 1 1.527-.993c.468-.182 1.171-.397 2.466-.456 1.4-.064 1.821-.078 5.367-.078z" clipRule="evenodd" />
                    <path d="M12.017 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-10.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                  </svg>
                </a>
                <a href="#" className={`${styles.socialBg} ${styles.socialHover} p-4 rounded-2xl transition-all transform hover:scale-125 hover:-rotate-6 shadow-xl`}>
                  <svg className="h-7 w-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className={`${styles.socialBg} ${styles.socialHover} p-4 rounded-2xl transition-all transform hover:scale-125 hover:rotate-12 shadow-xl`}>
                  <svg className="h-7 w-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="text-center pt-8 border-t-4 border-white/30">
            <p className={`text-sm ${styles.text} font-bold mb-2`}>
              © {new Date().getFullYear()} {brandName} • ¡Hecho con 💜 y mucha creatividad!
            </p>
            <p className={`text-xs ${styles.muted}`}>
              Powered by <a href="https://veldrion.com" target="_blank" rel="noopener noreferrer" className={`${styles.accent} ${styles.hover} font-black underline`}>Veldrion</a>
            </p>
          </div>
        </div>
      </footer>
    );
  }

  return null;
};
