import * as React from "react";

export interface FooterProps {
  brandName: string;
  otherBrands?: Array<{ name: string; url: string }>;
  brand?: "doblado";
}

export const Footer: React.FC<FooterProps> = ({ brandName, otherBrands = [], brand = "doblado" }) => {
  const styles = {
    bg: "bg-primary-charcoal",
    text: "text-primary-cream",
    muted: "text-primary-sand",
    accent: "text-sage-400",
    hover: "hover:text-sage-300",
    border: "border-primary-dark",
  };

  const basePath = "";

  return (
    <footer className={styles.bg}>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img src="/logo.svg" alt="Doblando el Viento" className="h-10 w-auto brightness-0 invert" />
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
