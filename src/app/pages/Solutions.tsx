import { Link } from "react-router";
import { Truck, Factory, Leaf, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "../components/ui/button";

export function Solutions() {
  const solutions = [
    {
      icon: Truck,
      title: "Rastreamento de Frota",
      color: "from-blue-500 to-blue-600",
      problem: "Empresas não sabem onde estão seus veículos em tempo real.",
      solution: [
        "Rastreadores GPS de alta precisão",
        "Monitoramento em tempo real via plataforma web",
        "Histórico completo de rotas e paradas",
        "Alertas de desvio de rota e excesso de velocidade",
      ],
      benefits: [
        "Redução de custos com combustível",
        "Maior segurança para motoristas e cargas",
        "Otimização de rotas logísticas",
        "Aumento da eficiência operacional",
      ],
      image: "https://images.unsplash.com/photo-1740914994657-f1cdffdc418e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2dpc3RpY3MlMjB3YXJlaG91c2UlMjBvcGVyYXRpb25zfGVufDF8fHx8MTc3MzMwMjkzOHww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      icon: Factory,
      title: "Monitoramento Industrial",
      color: "from-purple-500 to-purple-600",
      problem: "Falta de visibilidade sobre o estado das máquinas pode causar paradas não planejadas.",
      solution: [
        "Sensores de temperatura, vibração e consumo energético",
        "Instalação em máquinas críticas",
        "Coleta e análise de dados em tempo real",
        "Alertas automáticos de anomalias",
      ],
      benefits: [
        "Manutenção preditiva para evitar falhas",
        "Redução de downtime não planejado",
        "Aumento da vida útil dos equipamentos",
        "Otimização do consumo energético",
      ],
      image: "https://images.unsplash.com/photo-1639392656683-55f103a3c862?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwc2Vuc29ycyUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NzMzNjU3NTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      icon: Leaf,
      title: "Monitoramento Ambiental",
      color: "from-green-500 to-green-600",
      problem: "Dificuldade em medir e controlar condições ambientais em áreas extensas.",
      solution: [
        "Sensores de qualidade do ar, temperatura e umidade",
        "Redes de sensores distribuídos",
        "Monitoramento contínuo 24/7",
        "Relatórios automáticos de compliance",
      ],
      benefits: [
        "Conformidade com regulamentações ambientais",
        "Detecção precoce de problemas",
        "Melhoria da qualidade do ambiente",
        "Aplicável em cidades inteligentes e agricultura",
      ],
      image: "https://images.unsplash.com/photo-1580982338091-2e635b5759a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyZSUyMGZhcm0lMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc3MzI4NjI5OXww&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-green-500/15 via-teal-500/15 to-blue-500/15 dark:from-green-500/25 dark:via-teal-500/25 dark:to-blue-500/25">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-zinc-900 dark:text-white mb-6">
              Soluções IoT para cada desafio
            </h1>
            <p className="text-lg text-zinc-600 dark:text-zinc-300">
              Aplicações reais de Internet das Coisas que resolvem problemas operacionais 
              e geram valor para seu negócio
            </p>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={solution.title}
                  className={`flex flex-col ${
                    isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                  } gap-12 items-center`}
                >
                  {/* Image */}
                  <div className="w-full lg:w-1/2">
                    <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
                      <img
                        src={solution.image}
                        alt={solution.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="w-full lg:w-1/2">
                    <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br ${solution.color} rounded-xl mb-4`}>
                      <Icon className="text-white" size={28} />
                    </div>

                    <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-4">
                      {solution.title}
                    </h2>

                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">
                        Problema:
                      </h3>
                      <p className="text-zinc-600 dark:text-zinc-400">
                        {solution.problem}
                      </p>
                    </div>

                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-3">
                        Solução:
                      </h3>
                      <ul className="space-y-2">
                        {solution.solution.map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <CheckCircle2 className="text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" size={18} />
                            <span className="text-zinc-600 dark:text-zinc-400">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-3">
                        Benefícios:
                      </h3>
                      <ul className="space-y-2">
                        {solution.benefits.map((benefit) => (
                          <li key={benefit} className="flex items-start gap-2">
                            <CheckCircle2 className="text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" size={18} />
                            <span className="text-zinc-600 dark:text-zinc-400">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-zinc-50 dark:bg-zinc-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white mb-4">
            Veja essas soluções em ação
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-300 mb-8">
            Acesse nosso dashboard demonstrativo e explore dados em tempo real
          </p>
          <Link to="/dashboard">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              Acessar Dashboard Demo
              <ArrowRight className="ml-2" size={18} />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
