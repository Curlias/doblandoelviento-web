import * as React from "react";

export interface FooterProps {
  brandName: string;
  otherBrands: Array<{ name: string; url: string }>;
}

export const Footer: React.FC<FooterProps> = ({ brandName, otherBrands }) => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-semibold mb-4">{brandName}</h3>
            <p className="text-gray-400 text-sm">
              Diseño y calidad en cada detalle
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Otras Marcas</h3>
            <ul className="space-y-2">
              {otherBrands.map((brand) => (
                <li key={brand.name}>
                  <a
                    href={brand.url}
                    className="text-gray-400 hover:text-white text-sm"
                  >
                    {brand.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="/privacy" className="text-gray-400 hover:text-white text-sm">
                  Política de Privacidad
                </a>
              </li>
              <li>
                <a href="/cookies" className="text-gray-400 hover:text-white text-sm">
                  Política de Cookies
                </a>
              </li>
              <li>
                <a href="/terms" className="text-gray-400 hover:text-white text-sm">
                  Términos de Servicio
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 border-t border-gray-800 pt-8 text-center">
          <p className="text-sm text-gray-400">
            Potenciado con la tecnología de{" "}
            <a
              href="https://veldrion.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 underline"
            >
              Veldrion
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
