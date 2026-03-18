import { Link } from "react-router";
import { LayoutDashboard, LineChart, Bell, Zap, Shield, Cloud, Code, Globe, ArrowRight } from "lucide-react";
import { Button } from "../components/ui/button";

export function Platform() {
  const features = [
    {
      icon: LayoutDashboard,
      title: "Dashboards Intuitivos",
      description: "Interface moderna e fácil de usar com visualização de dados em tempo real.",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: LineChart,
      title: "Gráficos de Sensores",
      description: "Visualize dados históricos e em tempo real com gráficos interativos.",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Bell,
      title: "Alertas Automáticos",
      description: "Notificações instantâneas por email, SMS ou webhook quando eventos críticos ocorrem.",
      color: "from-red-500 to-red-600",
    },
    {
      icon: Zap,
      title: "Integração com APIs",
      description: "Conecte com seus sistemas existentes através de APIs RESTful robustas.",
      color: "from-yellow-500 to-yellow-600",
    },
    {
      icon: Shield,
      title: "Segurança Avançada",
      description: "Criptografia end-to-end e autenticação de múltiplos fatores.",
      color: "from-green-500 to-green-600",
    },
    {
      icon: Cloud,
      title: "Cloud Native",
      description: "Infraestrutura escalável na nuvem com 99.9% de disponibilidade.",
      color: "from-cyan-500 to-cyan-600",
    },
  ];

  const capabilities = [
    {
      category: "Monitoramento",
      items: [
        "Visualização de dispositivos em tempo real",
        "Histórico completo de dados",
        "Múltiplos tipos de sensores suportados",
        "Geolocalização em mapa interativo",
      ],
    },
    {
      category: "Análise",
      items: [
        "Gráficos personalizáveis",
        "Exportação de dados em CSV/Excel",
        "Relatórios automatizados",
        "Machine Learning para detecção de anomalias",
      ],
    },
    {
      category: "Gestão",
      items: [
        "Gerenciamento de dispositivos",
        "Controle de acesso por usuário",
        "Configuração remota de sensores",
        "Auditoria completa de ações",
      ],
    },
    {
      category: "Integração",
      items: [
        "API RESTful documentada",
        "Webhooks configuráveis",
        "SDKs para múltiplas linguagens",
        "Suporte a MQTT e outros protocolos IoT",
      ],
    },
  ];

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-green-500/15 via-teal-500/15 to-blue-500/15 dark:from-green-500/25 dark:via-teal-500/25 dark:to-blue-500/25">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 rounded-full mb-6">
              <Code size={16} />
              <span className="text-sm font-medium">Software Completo</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-zinc-900 dark:text-white mb-6">
              Plataforma IoT completa para seus dispositivos
            </h1>
            <p className="text-lg text-zinc-600 dark:text-zinc-300 mb-8">
              Software profissional que acompanha nossos sensores e rastreadores, 
              com dashboards, alertas e integrações para controle total da sua operação.
            </p>
            <Link to="/dashboard">
              <Button size="lg" className="bg-teal-500 hover:bg-teal-600 text-white">
                Ver Dashboard Demo
                <ArrowRight className="ml-2" size={18} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white mb-4">
              Funcionalidades principais
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-300">
              Tudo que você precisa para gerenciar seus dispositivos IoT
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="bg-white dark:bg-zinc-800 p-6 rounded-xl border border-zinc-200 dark:border-zinc-700 hover:shadow-lg transition-shadow"
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-lg flex items-center justify-center mb-4`}>
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

      {/* Capabilities */}
      <section className="py-20 bg-zinc-50 dark:bg-zinc-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white mb-4">
              Capacidades da plataforma
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-300">
              Recursos avançados para operações profissionais
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((capability) => (
              <div
                key={capability.category}
                className="bg-white dark:bg-zinc-800 p-6 rounded-xl border border-zinc-200 dark:border-zinc-700"
              >
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-4">
                  {capability.category}
                </h3>
                <ul className="space-y-2">
                  {capability.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5 flex-shrink-0"></div>
                      <span className="text-zinc-600 dark:text-zinc-400">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshot Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white mb-4">
              Interface moderna e intuitiva
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-300">
              Dashboard profissional com visualização de dados em tempo real
            </p>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1748609160056-7b95f30041f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkYXNoYm9hcmQlMjBhbmFseXRpY3N8ZW58MXx8fHwxNzczMzEwMzIyfDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Dashboard Preview"
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Technical Stack */}
      <section className="py-20 bg-zinc-50 dark:bg-zinc-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Globe className="w-12 h-12 mx-auto mb-4 text-blue-600 dark:text-blue-400" />
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white mb-4">
              Tecnologia de ponta
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-300 mb-8">
              Nossa plataforma é construída com as tecnologias mais modernas e confiáveis do mercado
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {["React", "Node.js", "PostgreSQL", "AWS", "MQTT", "WebSocket", "Docker", "Kubernetes"].map((tech) => (
              <div
                key={tech}
                className="bg-white dark:bg-zinc-800 p-4 rounded-lg border border-zinc-200 dark:border-zinc-700 text-center"
              >
                <p className="font-medium text-zinc-900 dark:text-white">{tech}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white mb-4">
            Experimente nossa plataforma
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-300 mb-8">
            Acesse o dashboard demonstrativo e veja como é fácil monitorar seus dispositivos
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/dashboard">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                Ver Dashboard Demo
                <ArrowRight className="ml-2" size={18} />
              </Button>
            </Link>
            <Link to="/contato">
              <Button size="lg" variant="outline">
                Solicitar Acesso
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
