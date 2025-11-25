import * as React from "react";

export interface HeaderProps {
  brand: "doblado" | "taviti" | "ilaia";
  brandName: string;
  navigation: Array<{ name: string; href: string }>;
}

export const Header: React.FC<HeaderProps> = ({ brand, brandName, navigation }) => {
  const brandStyles = {
    doblado: {
      bg: "bg-primary-cream",
      border: "border-primary-sand",
      text: "text-primary-charcoal",
      hover: "hover:text-sage-600",
      logo: "font-serif tracking-wide",
    },
    taviti: {
      bg: "bg-white/95 backdrop-blur-sm",
      border: "border-amber-100",
      text: "text-gray-800",
      hover: "hover:text-amber-700",
      logo: "font-serif tracking-wider",
    },
    ilaia: {
      bg: "bg-blue-50",
      border: "border-blue-200",
      text: "text-gray-900",
      hover: "hover:text-blue-600",
      logo: "font-sans tracking-tight",
    },
  };

  const styles = brandStyles[brand];

  // Unique ILAIA header with playful design
  if (brand === "ilaia") {
    return (
      <header className="bg-black shadow-lg sticky top-0 z-50">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <a href="/ilaia" className="flex items-center gap-3 group">
                <img 
                  src="/ilaia-logo.png" 
                  alt="ILAIA" 
                  className="h-10 w-auto filter brightness-0 invert group-hover:opacity-80 transition-opacity duration-300"
                />
                <span className="text-sm text-gray-400 font-light">Laboratorio de creatividad</span>
              </a>
            </div>
            
            {/* Navigation */}
            <div className="hidden md:block">
              <div className="flex items-baseline space-x-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="px-3 py-2 text-sm font-medium text-white hover:text-blue-400 transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button className="p-2 text-white hover:text-blue-400 rounded-lg transition-colors">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </nav>
      </header>
    );
  }

  // Unique TAVITI header with centered logo
  if (brand === "taviti") {
    return (
      <header className={`${styles.bg} sticky top-0 z-50 shadow-sm`}>
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-24 items-center justify-between">
            {/* Left Navigation */}
            <div className="hidden md:flex items-center space-x-8 flex-1">
              {navigation.slice(0, Math.ceil(navigation.length / 2)).map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`text-xs uppercase tracking-widest font-medium ${styles.text} ${styles.hover} transition-all duration-300 relative group`}
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-700 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>
            
            {/* Centered Logo */}
            <div className="flex items-center justify-center">
              <a href="/taviti" className="flex items-center">
                <img src="/taviti-logo.svg" alt="TAVITI" className="h-14 w-auto hover:opacity-80 transition-opacity duration-300" />
              </a>
            </div>
            
            {/* Right Navigation */}
            <div className="hidden md:flex items-center space-x-8 flex-1 justify-end">
              {navigation.slice(Math.ceil(navigation.length / 2)).map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`text-xs uppercase tracking-widest font-medium ${styles.text} ${styles.hover} transition-all duration-300 relative group`}
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-700 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button className={`p-2 ${styles.text}`}>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </nav>
      </header>
    );
  }

  // Default header for other brands
  return (
    <header className={`${styles.bg} border-b ${styles.border}`}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center">
            <a href={brand === "doblado" ? "/" : `/${brand === "taviti" ? "taviti" : "ilaia"}`} className="flex items-center gap-3">
              {brand === "doblado" && (
                <img src="/logo.svg" alt="Doblando el Viento" className="h-12 w-auto" />
              )}
              {brand === "taviti" && (
                <img src="/taviti-logo.svg" alt="TAVITI" className="h-10 w-auto" />
              )}
              {brand !== "taviti" && (
                <span className={`text-2xl font-medium ${styles.text} ${styles.logo}`}>
                  {brandName}
                </span>
              )}
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
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className={`p-2 ${styles.text}`}>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};
