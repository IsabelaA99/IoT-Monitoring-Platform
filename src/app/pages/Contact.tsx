import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "../components/ui/button";

export function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui seria a lógica de envio do formulário
    alert("Mensagem enviada com sucesso! Entraremos em contato em breve.");
  };

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-green-500/15 via-teal-500/15 to-blue-500/15 dark:from-green-500/25 dark:via-teal-500/25 dark:to-blue-500/25">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-zinc-900 dark:text-white mb-6">
              Entre em Contato
            </h1>
            <p className="text-lg text-zinc-600 dark:text-zinc-300">
              Pronto para transformar sua operação com IoT? Fale conosco e solicite uma demonstração
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6">
                Envie sua mensagem
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-zinc-900 dark:text-white mb-2">
                    Nome completo
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-lg text-zinc-900 dark:text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Seu nome"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-zinc-900 dark:text-white mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-lg text-zinc-900 dark:text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-zinc-900 dark:text-white mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-lg text-zinc-900 dark:text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="(11) 99999-9999"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-zinc-900 dark:text-white mb-2">
                    Empresa
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-lg text-zinc-900 dark:text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Nome da empresa"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-zinc-900 dark:text-white mb-2">
                    Interesse em
                  </label>
                  <select className="w-full px-4 py-3 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-lg text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>Rastreamento de Frota</option>
                    <option>Monitoramento Industrial</option>
                    <option>Monitoramento Ambiental</option>
                    <option>Plataforma IoT</option>
                    <option>Consultoria</option>
                    <option>Outro</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-zinc-900 dark:text-white mb-2">
                    Mensagem
                  </label>
                  <textarea
                    rows={5}
                    required
                    className="w-full px-4 py-3 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-lg text-zinc-900 dark:text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Conte-nos mais sobre seu projeto..."
                  ></textarea>
                </div>

                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  Enviar mensagem
                  <Send className="ml-2" size={18} />
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6">
                Informações de contato
              </h2>
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-950 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="text-blue-600 dark:text-blue-400" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-zinc-900 dark:text-white mb-1">
                      Email
                    </h3>
                    <p className="text-zinc-600 dark:text-zinc-400">
                      contato@criotive-iot.com
                    </p>
                    <p className="text-zinc-600 dark:text-zinc-400">
                      vendas@criotive-iot.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-950 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="text-blue-600 dark:text-blue-400" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-zinc-900 dark:text-white mb-1">
                      Telefone
                    </h3>
                    <p className="text-zinc-600 dark:text-zinc-400">
                      (11) 3000-0000
                    </p>
                    <p className="text-zinc-600 dark:text-zinc-400">
                      WhatsApp: (11) 99999-9999
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-950 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-blue-600 dark:text-blue-400" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-zinc-900 dark:text-white mb-1">
                      Endereço
                    </h3>
                    <p className="text-zinc-600 dark:text-zinc-400">
                      Av. Paulista, 1000 - Conjunto 301
                      <br />
                      Bela Vista, São Paulo - SP
                      <br />
                      CEP: 01310-100
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-600 to-cyan-600 p-8 rounded-xl text-white">
                <h3 className="text-xl font-semibold mb-4">
                  Horário de atendimento
                </h3>
                <div className="space-y-2 text-blue-100">
                  <p>Segunda a Sexta: 8h às 18h</p>
                  <p>Sábado: 9h às 13h</p>
                  <p>Domingo: Fechado</p>
                </div>
                <div className="mt-6 pt-6 border-t border-blue-400">
                  <p className="text-sm">
                    Suporte técnico 24/7 disponível para clientes premium
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="py-20 bg-zinc-50 dark:bg-zinc-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-8 text-center">
            Nossa Localização
          </h2>
          <div className="bg-zinc-200 dark:bg-zinc-800 rounded-xl h-96 flex items-center justify-center">
            <div className="text-center text-zinc-500 dark:text-zinc-400">
              <MapPin size={48} className="mx-auto mb-4" />
              <p>Mapa interativo aqui</p>
              <p className="text-sm">Av. Paulista, 1000 - São Paulo, SP</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
