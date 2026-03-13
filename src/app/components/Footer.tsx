import { Link } from "react-router";
import { Mail, Linkedin, Github, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-zinc-50 dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg"></div>
              <span className="text-lg font-semibold text-zinc-900 dark:text-white">
                Criotive IoT
              </span>
            </div>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Transformando dados do mundo real em inteligência para empresas.
            </p>
          </div>

          {/* Links - Empresa */}
          <div>
            <h3 className="font-semibold text-zinc-900 dark:text-white mb-4">
              Empresa
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/sobre"
                  className="text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Sobre nós
                </Link>
              </li>
              <li>
                <Link
                  to="/cases"
                  className="text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Cases de sucesso
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/contato"
                  className="text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Links - Soluções */}
          <div>
            <h3 className="font-semibold text-zinc-900 dark:text-white mb-4">
              Soluções
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/solucoes"
                  className="text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Rastreamento de Frota
                </Link>
              </li>
              <li>
                <Link
                  to="/solucoes"
                  className="text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Monitoramento Industrial
                </Link>
              </li>
              <li>
                <Link
                  to="/solucoes"
                  className="text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Monitoramento Ambiental
                </Link>
              </li>
              <li>
                <Link
                  to="/plataforma"
                  className="text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Plataforma
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold text-zinc-900 dark:text-white mb-4">
              Redes Sociais
            </h3>
            <div className="flex space-x-3">
              <a
                href="#"
                className="p-2 rounded-md bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-blue-500 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="p-2 rounded-md bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-blue-500 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="#"
                className="p-2 rounded-md bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-blue-500 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="p-2 rounded-md bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-blue-500 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-zinc-200 dark:border-zinc-800 text-center text-sm text-zinc-600 dark:text-zinc-400">
          <p>© 2026 Criotive IoT Platform. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
