import * as React from "react";
import type { Brand } from "./types";

export interface HeaderProps {
  brand: Brand;
  brandName: string;
  navigation: Array<{ name: string; href: string }>;
}

export const Header: React.FC<HeaderProps> = ({ brand, brandName, navigation }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const brandStyles = {
    doblado: {
      bg: "bg-primary-cream",
      border: "border-primary-sand",
      text: "text-primary-charcoal",
      hover: "hover:text-sage-600",
      logo: "/logo.svg",
      logoAlt: "Doblando el Viento",
      homeHref: "/",
      logoHeight: "h-12",
    },
    taviti: {
      bg: "bg-gradient-to-r from-pink-50 via-white to-amber-50",
      border: "border-pink-200",
      text: "text-gray-900",
      hover: "hover:text-pink-600",
      logo: "/taviti-logo.svg",
      logoAlt: "TAVITI",
      homeHref: "/taviti",
      logoHeight: "h-16",
      accentText: "text-pink-500",
      tagline: "stationery",
    },
    ilaia: {
      bg: "bg-gradient-to-r from-purple-100 via-pink-100 to-yellow-100",
      border: "border-purple-300",
      text: "text-purple-900",
      hover: "hover:text-pink-600",
      logo: "/ilaia-logo.png",
      logoAlt: "ILAIA",
      homeHref: "/ilaia",
      logoHeight: "h-14",
      accentBg: "bg-purple-500",
      accentText: "text-yellow-400",
    },
  };

  const styles = brandStyles[brand];

  // Header específico para DOBLANDO EL VIENTO
  if (brand === "doblado") {
    return (
      <header className={`${styles.bg} border-b ${styles.border}`}>
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <div className="flex items-center">
              <a href={styles.homeHref} className="flex items-center gap-3">
                <img src={styles.logo} alt={styles.logoAlt} className={`${styles.logoHeight} w-auto`} />
              </a>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`px-1 py-2 text-sm font-medium ${styles.text} ${styles.hover} transition-colors duration-200 border-b-2 border-transparent hover:border-current`}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
            <div className="md:hidden">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`p-2 ${styles.text}`}
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {mobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
          {/* Mobile menu */}
          {mobileMenuOpen && (
            <div className={`md:hidden border-t ${styles.border} ${styles.bg}`}>
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`block px-3 py-2 rounded-md text-base font-medium ${styles.text} ${styles.hover} transition-colors`}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          )}
        </nav>
      </header>
    );
  }

  // Header específico para TAVITI - Elegante y minimalista
  if (brand === "taviti") {
    return (
      <header className={`${styles.bg} shadow-sm`}>
        <nav className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex h-24 items-center justify-between">
            <a href={styles.homeHref} className="flex items-center gap-2">
              <img src={styles.logo} alt={styles.logoAlt} className={`${styles.logoHeight} w-auto`} />
              {'tagline' in styles && (
                <div className="flex flex-col">
                  <span className="text-xs font-light italic text-gray-500">{styles.tagline}</span>
                </div>
              )}
            </a>
            <div className="hidden lg:flex items-center space-x-1">
              {navigation.map((item, idx) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`px-4 py-2 text-sm font-medium ${styles.text} ${styles.hover} transition-all duration-300 rounded-full hover:bg-pink-50`}
                >
                  {item.name}
                </a>
              ))}
            </div>
            <div className="lg:hidden">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`p-3 rounded-full hover:bg-pink-100 transition-colors ${styles.text}`}
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {mobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
          {/* Mobile menu TAVITI */}
          {mobileMenuOpen && (
            <div className="lg:hidden bg-white/95 backdrop-blur-sm border-t border-pink-200">
              <div className="px-4 pt-4 pb-6 space-y-2">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`block px-4 py-3 rounded-full text-sm font-medium ${styles.text} ${styles.hover} hover:bg-pink-50 transition-all`}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          )}
        </nav>
      </header>
    );
  }

  // Header específico para ILAIA - Divertido y colorido
  if (brand === "ilaia") {
    return (
      <header className={`${styles.bg} border-b-4 ${styles.border} relative overflow-hidden`}>
        {/* Decoraciones divertidas */}
        <div className="absolute top-0 left-10 w-8 h-8 bg-yellow-400 rounded-full opacity-60 animate-bounce" style={{animationDelay: '0s', animationDuration: '3s'}}></div>
        <div className="absolute top-2 right-20 w-6 h-6 bg-purple-400 rounded-full opacity-60 animate-bounce" style={{animationDelay: '1s', animationDuration: '2.5s'}}></div>
        <div className="absolute bottom-2 right-40 w-5 h-5 bg-pink-400 rounded-full opacity-60 animate-bounce" style={{animationDelay: '0.5s', animationDuration: '3.5s'}}></div>
        
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex h-28 items-center justify-between">
            <a href={styles.homeHref} className="flex items-center gap-3 transform hover:scale-105 transition-transform">
              <img src={styles.logo} alt={styles.logoAlt} className={`${styles.logoHeight} w-auto drop-shadow-lg`} />
            </a>
            <div className="hidden md:flex items-center space-x-2">
              {navigation.map((item, idx) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`px-4 py-2.5 text-sm font-bold ${styles.text} hover:bg-white hover:text-purple-600 transition-all duration-300 rounded-2xl border-2 border-transparent hover:border-purple-400 hover:shadow-lg transform hover:-translate-y-0.5`}
                >
                  {item.name}
                </a>
              ))}
            </div>
            <div className="md:hidden">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`p-3 rounded-2xl bg-purple-500 text-white hover:bg-purple-600 transition-colors shadow-lg`}
              >
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {mobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
          {/* Mobile menu ILAIA */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-gradient-to-b from-purple-50 to-pink-50 border-t-4 border-purple-300">
              <div className="px-4 pt-6 pb-8 space-y-3">
                {navigation.map((item, idx) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`block px-5 py-3.5 rounded-2xl text-base font-bold ${styles.text} bg-white hover:bg-purple-100 hover:text-purple-600 transition-all shadow-md hover:shadow-xl transform hover:scale-105`}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          )}
        </nav>
      </header>
    );
  }

  return null;
};
