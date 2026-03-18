import { Target, Eye, Award, Users } from "lucide-react";

export function About() {
  const values = [
    {
      icon: Target,
      title: "Missão",
      description: "Conectar o mundo físico ao digital através de soluções IoT inovadoras que transformam dados em inteligência operacional.",
    },
    {
      icon: Eye,
      title: "Visão",
      description: "Ser referência em soluções de IoT para empresas, democratizando o acesso à tecnologia de ponta para todos os segmentos.",
    },
    {
      icon: Award,
      title: "Valores",
      description: "Inovação, qualidade, transparência e compromisso com resultados mensuráveis para nossos clientes.",
    },
    {
      icon: Users,
      title: "Equipe",
      description: "Time multidisciplinar de engenheiros, desenvolvedores e especialistas em IoT com experiência em projetos de grande escala.",
    },
  ];

  const timeline = [
    { year: "2020", event: "Fundação da Criotive IoT" },
    { year: "2021", event: "Primeiro projeto de rastreamento de frota" },
    { year: "2022", event: "Expansão para monitoramento industrial" },
    { year: "2023", event: "Lançamento da plataforma cloud" },
    { year: "2024", event: "Mais de 100 clientes ativos" },
    { year: "2026", event: "Expansão internacional" },
  ];

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-green-500/15 via-teal-500/15 to-blue-500/15 dark:from-green-500/25 dark:via-teal-500/25 dark:to-blue-500/25">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-zinc-900 dark:text-white mb-6">
              Sobre a Criotive IoT
            </h1>
            <p className="text-lg text-zinc-600 dark:text-zinc-300">
              Somos uma empresa especializada em desenvolvimento de soluções completas de 
              Internet das Coisas, desde hardware embarcado até plataformas de análise de dados.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="bg-white dark:bg-zinc-800 p-8 rounded-xl border border-zinc-200 dark:border-zinc-700"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-3">
                    {value.title}
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Photo */}
      <section className="py-20 bg-zinc-50 dark:bg-zinc-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white mb-4">
              Nossa Equipe
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-300">
              Profissionais experientes dedicados à inovação em IoT
            </p>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[16/9] max-w-5xl mx-auto">
            <img
              src="https://images.unsplash.com/photo-1632858265907-961f1454ccf6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwbWVldGluZyUyMG9mZmljZXxlbnwxfHx8fDE3NzMzMDE1NjN8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Nossa equipe"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white mb-4">
              Nossa Jornada
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-300">
              Crescimento e evolução ao longo dos anos
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200 dark:bg-blue-900"></div>
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className="relative pl-20">
                  <div className="absolute left-0 w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold">
                    {item.year.slice(2)}
                  </div>
                  <div className="bg-white dark:bg-zinc-800 p-6 rounded-lg border border-zinc-200 dark:border-zinc-700">
                    <p className="text-sm text-blue-600 dark:text-blue-400 font-semibold mb-1">
                      {item.year}
                    </p>
                    <p className="text-lg text-zinc-900 dark:text-white">
                      {item.event}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-cyan-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <p className="text-4xl sm:text-5xl font-bold mb-2">500+</p>
              <p className="text-blue-100">Dispositivos Ativos</p>
            </div>
            <div>
              <p className="text-4xl sm:text-5xl font-bold mb-2">100+</p>
              <p className="text-blue-100">Clientes</p>
            </div>
            <div>
              <p className="text-4xl sm:text-5xl font-bold mb-2">15+</p>
              <p className="text-blue-100">Projetos Concluídos</p>
            </div>
            <div>
              <p className="text-4xl sm:text-5xl font-bold mb-2">99.9%</p>
              <p className="text-blue-100">Uptime</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
