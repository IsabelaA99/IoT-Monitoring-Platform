import { Truck, Factory, Building2, CheckCircle2 } from "lucide-react";

export function Cases() {
  const cases = [
    {
      icon: Truck,
      company: "LogTrans Transportes",
      industry: "Logística",
      challenge: "Empresa de transporte com 50 veículos sem visibilidade de localização em tempo real, resultando em atrasos e custos elevados com combustível.",
      solution: "Implementação de rastreadores GPS em toda frota com dashboard de monitoramento em tempo real, alertas de desvio de rota e relatórios automáticos de desempenho.",
      results: [
        "Redução de 25% no consumo de combustível",
        "Diminuição de 40% em atrasos de entrega",
        "ROI alcançado em 6 meses",
        "Aumento de 35% na satisfação do cliente",
      ],
      image: "https://images.unsplash.com/photo-1740914994657-f1cdffdc418e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2dpc3RpY3MlMjB3YXJlaG91c2UlMjBvcGVyYXRpb25zfGVufDF8fHx8MTc3MzMwMjkzOHww&ixlib=rb-4.1.0&q=80&w=1080",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Factory,
      company: "IndústriaTech S.A.",
      industry: "Indústria",
      challenge: "Paradas não planejadas de máquinas críticas causavam prejuízos de R$ 50.000 por dia e falta de visibilidade sobre o estado dos equipamentos.",
      solution: "Instalação de sensores de temperatura, vibração e consumo energético em 20 máquinas críticas com sistema de manutenção preditiva baseado em Machine Learning.",
      results: [
        "Redução de 60% em downtime não planejado",
        "Economia de R$ 800.000/ano em manutenções",
        "Aumento de 20% na vida útil dos equipamentos",
        "Detecção de falhas com 48h de antecedência",
      ],
      image: "https://images.unsplash.com/photo-1639392656683-55f103a3c862?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwc2Vuc29ycyUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NzMzNjU3NTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Building2,
      company: "SmartCity Prefeitura",
      industry: "Cidades Inteligentes",
      challenge: "Falta de dados sobre qualidade do ar e condições ambientais em áreas urbanas críticas.",
      solution: "Implantação de rede de 50 sensores ambientais distribuídos pela cidade, monitorando qualidade do ar, temperatura, umidade e ruído com dashboard público.",
      results: [
        "Cobertura de monitoramento em 80% da cidade",
        "Dados em tempo real disponíveis para população",
        "Base para políticas públicas ambientais",
        "Reconhecimento como cidade sustentável",
      ],
      image: "https://images.unsplash.com/photo-1768224656445-33d078c250b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMGNpdHklMjB0ZWNobm9sb2d5JTIwbmV0d29ya3xlbnwxfHx8fDE3NzMzNjU3NTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      color: "from-green-500 to-green-600",
    },
  ];

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-500/10 via-cyan-500/10 to-purple-500/10 dark:from-blue-500/20 dark:via-cyan-500/20 dark:to-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-zinc-900 dark:text-white mb-6">
              Cases de Sucesso
            </h1>
            <p className="text-lg text-zinc-600 dark:text-zinc-300">
              Conheça empresas que transformaram suas operações com nossas soluções IoT
            </p>
          </div>
        </div>
      </section>

      {/* Cases */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {cases.map((caseStudy, index) => {
              const Icon = caseStudy.icon;
              const isEven = index % 2 === 0;

              return (
                <div key={caseStudy.company} className="relative">
                  <div className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} gap-12 items-center`}>
                    {/* Image */}
                    <div className="w-full lg:w-1/2">
                      <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
                        <img
                          src={caseStudy.image}
                          alt={caseStudy.company}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="w-full lg:w-1/2">
                      <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br ${caseStudy.color} rounded-xl mb-4`}>
                        <Icon className="text-white" size={28} />
                      </div>

                      <div className="inline-block px-3 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-full text-sm text-zinc-600 dark:text-zinc-400 mb-4">
                        {caseStudy.industry}
                      </div>

                      <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-6">
                        {caseStudy.company}
                      </h2>

                      <div className="mb-6">
                        <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">
                          Desafio
                        </h3>
                        <p className="text-zinc-600 dark:text-zinc-400">
                          {caseStudy.challenge}
                        </p>
                      </div>

                      <div className="mb-6">
                        <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">
                          Solução
                        </h3>
                        <p className="text-zinc-600 dark:text-zinc-400">
                          {caseStudy.solution}
                        </p>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-3">
                          Resultados
                        </h3>
                        <ul className="space-y-2">
                          {caseStudy.results.map((result) => (
                            <li key={result} className="flex items-start gap-2">
                              <CheckCircle2 className="text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" size={18} />
                              <span className="text-zinc-600 dark:text-zinc-400">{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-zinc-50 dark:bg-zinc-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <img
              src="https://images.unsplash.com/photo-1758518730384-be3d205838e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHN1Y2Nlc3MlMjBoYW5kc2hha2V8ZW58MXx8fHwxNzczMzQxMTcyfDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Parceria"
              className="w-full h-64 object-cover rounded-xl mb-8"
            />
          </div>
          <blockquote className="text-2xl text-zinc-900 dark:text-white mb-6">
            "A Criotive IoT transformou completamente nossa operação. O ROI foi muito além das 
            expectativas e agora temos total controle sobre nossa frota."
          </blockquote>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-2">
            Carlos Silva
          </p>
          <p className="text-zinc-500 dark:text-zinc-500">
            Diretor de Operações, LogTrans Transportes
          </p>
        </div>
      </section>
    </div>
  );
}
