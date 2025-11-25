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
      logo: "/logo.svg",
      logoAlt: "Doblando el Viento",
      homeHref: "/",
    },
    taviti: {
      bg: "bg-white",
      border: "border-gray-200",
      text: "text-gray-800",
      hover: "hover:text-amber-700",
      logo: "/taviti-logo.svg",
      logoAlt: "TAVITI",
      homeHref: "/taviti",
    },
    ilaia: {
      bg: "bg-white",
      border: "border-purple-200",
      text: "text-gray-800",
      hover: "hover:text-purple-600",
      logo: "/ilaia-logo.png",
      logoAlt: "ILAIA",
      homeHref: "/ilaia",
    },
  };

  const styles = brandStyles[brand];

  return (
    <header className={`${styles.bg} border-b ${styles.border}`}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center">
            <a href={styles.homeHref} className="flex items-center gap-3">
              <img src={styles.logo} alt={styles.logoAlt} className="h-12 w-auto" />
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
