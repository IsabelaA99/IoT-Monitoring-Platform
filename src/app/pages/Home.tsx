import { Link } from "react-router";
import { ArrowRight, Cpu, Activity, BarChart3, Truck, Factory, Sprout, Zap, Building2 } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Button } from "../components/ui/button";

export function Home() {
  const features = [
    {
      icon: Cpu,
      title: "Dispositivos IoT",
      description: "Desenvolvimento de hardware e sensores personalizados.",
    },
    {
      icon: Activity,
      title: "Monitoramento",
      description: "Acompanhamento em tempo real de equipamentos e veículos.",
    },
    {
      icon: BarChart3,
      title: "Análise de dados",
      description: "Dashboards com métricas operacionais e alertas inteligentes.",
    },
  ];

  const sectors = [
    { icon: Truck, label: "Logística", color: "from-blue-500 to-blue-600" },
    { icon: Factory, label: "Indústria", color: "from-purple-500 to-purple-600" },
    { icon: Sprout, label: "Agronegócio", color: "from-green-500 to-green-600" },
    { icon: Zap, label: "Energia", color: "from-yellow-500 to-yellow-600" },
    { icon: Building2, label: "Cidades Inteligentes", color: "from-cyan-500 to-cyan-600" },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-cyan-500/10 to-purple-500/10 dark:from-blue-500/20 dark:via-cyan-500/20 dark:to-purple-500/20"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAzMHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-zinc-900 dark:text-white mb-6">
              Transformando dados do mundo real em{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                inteligência para empresas
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-300 mb-8 max-w-3xl mx-auto">
              Desenvolvemos soluções de IoT com dispositivos embarcados, sensores e dashboards 
              inteligentes para monitoramento operacional.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contato">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                  Solicitar demonstração
                  <ArrowRight className="ml-2" size={18} />
                </Button>
              </Link>
              <Link to="/solucoes">
                <Button size="lg" variant="outline">
                  Ver soluções
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* O que fazemos */}
      <section className="py-20 bg-zinc-50 dark:bg-zinc-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white mb-4">
              O que fazemos
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto">
              Soluções completas de IoT para transformar sua operação
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="bg-white dark:bg-zinc-800 p-8 rounded-xl border border-zinc-200 dark:border-zinc-700 hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Setores atendidos */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white mb-4">
              Setores atendidos
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto">
              Nossos sistemas IoT são aplicados em diversos segmentos industriais
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {sectors.map((sector) => {
              const Icon = sector.icon;
              return (
                <div
                  key={sector.label}
                  className="group bg-white dark:bg-zinc-800 p-6 rounded-xl border border-zinc-200 dark:border-zinc-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all hover:shadow-md cursor-pointer"
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${sector.color} rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform`}>
                    <Icon className="text-white" size={24} />
                  </div>
                  <p className="text-center text-sm font-medium text-zinc-900 dark:text-white">
                    {sector.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-cyan-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Pronto para transformar sua operação?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e descubra como nossas soluções IoT podem 
            otimizar seus processos e reduzir custos.
          </p>
          <Link to="/dashboard">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
              Ver Dashboard Demo
              <ArrowRight className="ml-2" size={18} />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
