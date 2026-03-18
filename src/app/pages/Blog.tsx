import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";
import { Link } from "react-router";
import { Button } from "../components/ui/button";

export function Blog() {
  const posts = [
    {
      id: 1,
      title: "Como a IoT está transformando a logística brasileira",
      excerpt: "Descubra como sensores e rastreadores GPS estão revolucionando a gestão de frotas e reduzindo custos operacionais.",
      category: "Logística",
      date: "10 de Março, 2026",
      readTime: "5 min",
      image: "https://images.unsplash.com/photo-1740914994657-f1cdffdc418e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2dpc3RpY3MlMjB3YXJlaG91c2UlMjBvcGVyYXRpb25zfGVufDF8fHx8MTc3MzMwMjkzOHww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: 2,
      title: "Manutenção preditiva: o futuro da indústria 4.0",
      excerpt: "Entenda como sensores IoT e Machine Learning podem prever falhas antes que elas aconteçam, economizando milhões.",
      category: "Indústria",
      date: "5 de Março, 2026",
      readTime: "7 min",
      image: "https://images.unsplash.com/photo-1639392656683-55f103a3c862?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwc2Vuc29ycyUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NzMzNjU3NTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: 3,
      title: "5 métricas essenciais para monitorar em sensores IoT",
      excerpt: "Saiba quais dados você deve acompanhar para extrair o máximo valor dos seus dispositivos conectados.",
      category: "Tutorial",
      date: "1 de Março, 2026",
      readTime: "4 min",
      image: "https://images.unsplash.com/photo-1748609160056-7b95f30041f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkYXNoYm9hcmQlMjBhbmFseXRpY3N8ZW58MXx8fHwxNzczMzEwMzIyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: 4,
      title: "Segurança em IoT: melhores práticas",
      excerpt: "Proteja seus dispositivos e dados com estas recomendações essenciais de segurança para projetos IoT.",
      category: "Segurança",
      date: "25 de Fevereiro, 2026",
      readTime: "6 min",
      image: "https://images.unsplash.com/photo-1768224656445-33d078c250b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMGNpdHklMjB0ZWNobm9sb2d5JTIwbmV0d29ya3xlbnwxfHx8fDE3NzMzNjU3NTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: 5,
      title: "IoT na agricultura: cases de sucesso no agronegócio",
      excerpt: "Veja como fazendas estão usando sensores para otimizar irrigação, monitorar solo e aumentar produtividade.",
      category: "Agronegócio",
      date: "20 de Fevereiro, 2026",
      readTime: "5 min",
      image: "https://images.unsplash.com/photo-1580982338091-2e635b5759a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyZSUyMGZhcm0lMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc3MzI4NjI5OXww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: 6,
      title: "Reduzindo custos energéticos com monitoramento IoT",
      excerpt: "Aprenda a identificar desperdícios e otimizar o consumo de energia usando sensores inteligentes.",
      category: "Energia",
      date: "15 de Fevereiro, 2026",
      readTime: "4 min",
      image: "https://images.unsplash.com/photo-1659290541783-3241bc39f7c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmVyZ3klMjBwb3dlciUyMHBsYW50fGVufDF8fHx8MTc3MzI3OTgyMHww&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  const categories = ["Todos", "Logística", "Indústria", "Tutorial", "Segurança", "Agronegócio", "Energia"];

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-green-500/15 via-teal-500/15 to-blue-500/15 dark:from-green-500/25 dark:via-teal-500/25 dark:to-blue-500/25">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-zinc-900 dark:text-white mb-6">
              Blog & Insights
            </h1>
            <p className="text-lg text-zinc-600 dark:text-zinc-300">
              Artigos, tutoriais e novidades sobre Internet das Coisas e transformação digital
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto pb-2">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-lg whitespace-nowrap text-sm font-medium transition-colors ${
                  category === "Todos"
                    ? "bg-blue-600 text-white"
                    : "bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-zinc-800 rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-700 hover:shadow-xl transition-shadow">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="relative aspect-[16/10] lg:aspect-auto">
                <img
                  src={posts[0].image}
                  alt={posts[0].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded-full">
                    Destaque
                  </span>
                </div>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400 mb-3">
                  <Tag size={16} />
                  <span>{posts[0].category}</span>
                </div>
                <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-4">
                  {posts[0].title}
                </h2>
                <p className="text-zinc-600 dark:text-zinc-400 mb-6">
                  {posts[0].excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm text-zinc-500 dark:text-zinc-500 mb-6">
                  <div className="flex items-center gap-1">
                    <Calendar size={16} />
                    <span>{posts[0].date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={16} />
                    <span>{posts[0].readTime} de leitura</span>
                  </div>
                </div>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white w-fit">
                  Ler artigo completo
                  <ArrowRight className="ml-2" size={16} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-8">
            Artigos Recentes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.slice(1).map((post) => (
              <article
                key={post.id}
                className="bg-white dark:bg-zinc-800 rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-700 hover:shadow-lg transition-shadow group"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="inline-flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400 mb-3">
                    <Tag size={14} />
                    <span>{post.category}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-zinc-500 dark:text-zinc-500 pt-4 border-t border-zinc-200 dark:border-zinc-700">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-cyan-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Receba nossos insights
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Inscreva-se para receber artigos exclusivos sobre IoT e transformação digital
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Seu melhor email"
              className="flex-1 px-4 py-3 rounded-lg text-zinc-900 placeholder:text-zinc-500"
            />
            <Button className="bg-white text-blue-600 hover:bg-blue-50">
              Inscrever-se
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
