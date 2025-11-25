"use client";

import * as React from "react";

export interface BrandSwitcherProps {
  currentBrand: "doblado" | "taviti" | "ilaia";
  onBrandChange?: (brand: "doblado" | "taviti" | "ilaia") => void;
}

export const BrandSwitcher: React.FC<BrandSwitcherProps> = ({ currentBrand, onBrandChange }) => {
  const brands = [
    { 
      id: "doblado" as const, 
      name: "Doblando el Viento", 
      short: "Doblando",
      href: "/",
      textColor: "text-sage-600",
      hoverColor: "hover:text-sage-700",
      activeUnderline: "border-sage-600",
    },
    { 
      id: "taviti" as const, 
      name: "TAVITI", 
      short: "TAVITI",
      href: "/taviti",
      textColor: "text-amber-700",
      hoverColor: "hover:text-amber-800",
      activeUnderline: "border-amber-700",
    },
    { 
      id: "ilaia" as const, 
      name: "ILAIA", 
      short: "ILAIA",
      href: "/ilaia",
      textColor: "text-blue-600",
      hoverColor: "hover:text-blue-700",
      activeUnderline: "border-blue-600",
    },
  ];

  return (
    <div className="bg-white border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-end h-8 gap-6">
          <span className="text-xs text-gray-400 mr-1 hidden sm:inline tracking-wide">Nuestras marcas:</span>
          {brands.map((brand) => (
            <a
              key={brand.id}
              href={brand.href}
              onClick={(e) => {
                if (onBrandChange) {
                  e.preventDefault();
                  onBrandChange(brand.id);
                }
              }}
              className={`
                text-xs font-medium tracking-wide transition-all duration-200
                border-b-2 pb-1
                ${currentBrand === brand.id 
                  ? `${brand.textColor} ${brand.activeUnderline}` 
                  : `text-gray-400 border-transparent ${brand.hoverColor} hover:border-gray-200`
                }
              `}
            >
              <span className="hidden sm:inline">{brand.name}</span>
              <span className="sm:hidden">{brand.short}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
