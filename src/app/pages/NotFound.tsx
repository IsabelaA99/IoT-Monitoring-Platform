import { Link } from "react-router";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "../components/ui/button";

export function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-blue-600 dark:text-blue-400 mb-4">
            404
          </h1>
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-4">
            Página não encontrada
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            Desculpe, a página que você está procurando não existe ou foi movida.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              <Home className="mr-2" size={18} />
              Voltar ao início
            </Button>
          </Link>
          <Button variant="outline" onClick={() => window.history.back()}>
            <ArrowLeft className="mr-2" size={18} />
            Voltar
          </Button>
        </div>
      </div>
    </div>
  );
}
