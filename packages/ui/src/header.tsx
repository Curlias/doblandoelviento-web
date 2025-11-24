import * as React from "react";

export interface HeaderProps {
  brand: "doblado" | "taviti" | "ilaia";
  brandName: string;
  navigation: Array<{ name: string; href: string }>;
}

export const Header: React.FC<HeaderProps> = ({ brand, brandName, navigation }) => {
  const brandColors = {
    doblado: "bg-amber-50 border-amber-200",
    taviti: "bg-pink-50 border-pink-200",
    ilaia: "bg-blue-50 border-blue-200",
  };

  return (
    <header className={`${brandColors[brand]} border-b`}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="text-xl font-bold text-gray-900">
              {brandName}
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-900 hover:bg-white hover:bg-opacity-75"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
