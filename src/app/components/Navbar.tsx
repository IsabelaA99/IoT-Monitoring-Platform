import { Link, useLocation } from "react-router";
import { useState } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { theme, setTheme } = useTheme();

  const links = [
    { path: "/", label: "Home" },
    { path: "/sobre", label: "Sobre" },
    { path: "/solucoes", label: "Soluções" },
    { path: "/plataforma", label: "Plataforma" },
    { path: "/dashboard", label: "Dashboard Demo" },
    { path: "/cases", label: "Cases" },
    { path: "/blog", label: "Blog" },
    { path: "/contato", label: "Contato" },
  ];

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/70 dark:bg-zinc-900/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img 
            src="/LogoOriginal.png" 
            alt="Logo Criotive IoT"
            className="w-8 h-8 object-contain" />
            <span className="text-lg font-semibold text-zinc-900 dark:text-white">
              Criotive IoT
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-md text-sm transition-colors ${
                  isActive(link.path)
                    ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/30"
                    : "text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800"
                }`}
              >
                {link.label}
              </Link>
            ))}
            
            {/* Theme Toggle */}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="ml-2 p-2 rounded-md text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-md text-zinc-600 dark:text-zinc-300"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-zinc-600 dark:text-zinc-300"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base ${
                  isActive(link.path)
                    ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/30"
                    : "text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
