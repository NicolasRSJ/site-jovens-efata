/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import {
  Flame,
  Heart,
  Key,
  MapPin,
  Users,
  ChevronRight,
  Instagram,
  Mail,
  Calendar,
  MessageCircle,
  ArrowRight,
  Globe,
  BookOpen,
  ShieldCheck,
  Map,
  Music,
  Mic2,
  Palette,
  Video
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const img1 = new URL('../img/1.jpg', import.meta.url).href

export default function App() {
  return (
    <div className="min-h-screen selection:bg-efata-dark selection:text-efata-cream">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center bg-efata-cream/80 backdrop-blur-md border-b border-efata-dark/10">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-efata-dark rounded-full flex items-center justify-center">
            <Flame className="text-efata-cream w-6 h-6" />
          </div>
          <span className="font-serif text-2xl font-bold tracking-tighter uppercase text-efata-dark">Efatá</span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-widest text-efata-dark">
          <a href="#inicio" className="hover:text-efata-muted transition-colors">Início</a>
          <a href="#missao" className="hover:text-efata-muted transition-colors">Pilares</a>
          <a href="#sobre" className="hover:text-efata-muted transition-colors">Sobre</a>
          <a href="#atuacao" className="hover:text-efata-muted transition-colors">Atuação</a>
          <a href="#contato" className="hover:text-efata-muted transition-colors">Contato</a>
        </div>
        <a
          href="https://wa.me/5527999307807"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-efata-dark text-efata-cream px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-efata-deep transition-all shadow-lg flex items-center gap-2"
        >
          <MessageCircle className="w-4 h-4" />
          Fale Conosco
        </a>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="relative pt-32 pb-20 px-6 overflow-hidden min-h-[90vh] flex items-center">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://picsum.photos/seed/mission-bg/1920/1080?blur=10"
            className="w-full h-full object-cover opacity-20 grayscale"
            alt="Background"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-efata-cream via-transparent to-efata-cream" />
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="z-10"
          >
            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-efata-dark/5 border border-efata-dark/10 text-xs font-bold uppercase tracking-widest mb-6">
              <span className="w-2 h-2 rounded-full bg-efata-dark animate-pulse" />
              Grupo Efatá
            </motion.div>
            <motion.h1 variants={fadeIn} className="text-7xl md:text-9xl font-serif leading-[0.9] mb-6 text-efata-deep">
              Abra o seu <br />
              <span className="italic text-efata-muted">Coração.</span>
            </motion.h1>
            <motion.p variants={fadeIn} className="text-lg md:text-xl text-efata-brown max-w-lg mb-10 leading-relaxed">
              Somos um grupo de jovens missionários da Igreja Católica Apostólica Romana, dedicados a levar a luz e a esperança onde quer que sejamos chamados. "Efatá" — Abre-te.
            </motion.p>
            <motion.div variants={fadeIn} className="flex flex-wrap gap-4">
              <a
                href="#missao"
                className="bg-efata-dark text-efata-cream px-8 py-4 rounded-full flex items-center gap-2 font-bold uppercase tracking-widest hover:bg-efata-deep transition-all group"
              >
                Descubra Nossa Missão
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="https://www.instagram.com/jovens.efataa?igsh=MXZqMDd1NmticjUwZg=="
                target="_blank"
                rel="noopener noreferrer"
                className="border border-efata-dark text-efata-dark px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-efata-dark hover:text-efata-cream transition-all text-center"
              >
                Nossas Missões
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative aspect-square flex items-center justify-center"
          >
            <div className="absolute inset-0 bg-efata-dark/5 rounded-full blur-3xl" />
            <div className="relative w-full h-full max-w-md mx-auto bg-efata-dark rounded-[3rem] overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-700">
              <img
                src={`${import.meta.env.BASE_URL}img/1.jpg`}
                alt="Jovens Efatá - Somos a juventude que incendiará o mundo"
                className="w-full h-full object-cover opacity-90 hover:scale-110 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-efata-deep via-transparent to-transparent flex flex-col justify-end p-8">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-12 h-12 bg-efata-cream rounded-full flex items-center justify-center shadow-lg">
                    <Flame className="text-efata-dark w-6 h-6 animate-pulse" />
                  </div>
                  <div>
                    <p className="text-efata-cream font-serif text-lg italic leading-tight">"Se fores aquilo que Deus quer, colocareis fogo no mundo!"</p>
                    <p className="text-efata-cream/60 text-[10px] uppercase tracking-widest mt-1">Santa Catarina de Sena</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-efata-olive rounded-full blur-2xl opacity-30" />
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-efata-muted rounded-full blur-2xl opacity-20" />
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-efata-dark py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            { label: "Missionários", value: "19", icon: Users },
            { label: "Municipios", value: "4", icon: MapPin },
            { label: "Ano de Missão", value: "1", icon: Calendar }
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center"
            >
              <stat.icon className="text-efata-cream/40 w-8 h-8 mb-4" />
              <span className="text-4xl md:text-5xl font-serif text-efata-cream mb-2">{stat.value}</span>
              <span className="text-efata-cream/60 text-xs uppercase tracking-widest">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Pilares Section */}
      <section id="missao" className="py-24 px-6 bg-efata-cream">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-serif text-efata-deep mb-6">Pilares da Igreja Católica</h2>
            <p className="text-efata-muted max-w-2xl mx-auto uppercase tracking-[0.2em] text-sm font-bold">
              Fundamentados na fé Católica, no serviço e na comunidade
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Sagrada Tradição",
                desc: "A transmissão viva da Palavra de Deus, confiada aos apóstolos e seus sucessores ao longo dos séculos.",
                icon: Key,
                color: "bg-efata-dark"
              },
              {
                title: "Sagrada Escritura",
                desc: "A Palavra de Deus colocada por escrito sob a inspiração do Espírito Santo, contida na Bíblia Sagrada.",
                icon: BookOpen,
                color: "bg-efata-olive"
              },
              {
                title: "Magistério",
                desc: "O encargo de interpretar autenticamente a Palavra de Deus, exercido pelo Papa e pelos Bispos em comunhão.",
                icon: ShieldCheck,
                color: "bg-efata-brown"
              }
            ].map((pillar, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="p-10 rounded-[2rem] bg-efata-dark/5 border border-efata-dark/10 flex flex-col items-center text-center group transition-all"
              >
                <div className={`w-16 h-16 ${pillar.color} rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:rotate-6 transition-transform`}>
                  <pillar.icon className="text-efata-cream w-8 h-8" />
                </div>
                <h3 className="text-3xl font-serif text-efata-deep mb-4">{pillar.title}</h3>
                <p className="text-efata-brown leading-relaxed">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Quote Section */}
      <section className="py-24 px-6 relative overflow-hidden bg-efata-deep">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] border border-efata-cream rounded-full animate-[spin_60s_linear_infinite]" />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <Key className="text-efata-cream/20 w-16 h-16 mx-auto mb-8" />
          <h2 className="text-4xl md:text-6xl font-serif text-efata-cream italic leading-tight mb-12">
            "Jovens, se fores aquilo que Deus quer, colocareis fogo no mundo!"
          </h2>
          <div className="w-20 h-1 bg-efata-cream/20 mx-auto mb-6" />
          <p className="text-efata-cream/60 uppercase tracking-widest text-sm font-bold">Santa Catarina de Sena</p>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img src={`${import.meta.env.BASE_URL}img/2.jpg`} alt="Mission 1" className="rounded-3xl w-full aspect-[2/3] object-cover grayscale hover:grayscale-0 transition-all duration-500" referrerPolicy="no-referrer" />
                <div className="bg-efata-olive p-8 rounded-3xl aspect-square flex items-center justify-center">
                  <Flame className="text-efata-cream w-12 h-12" />
                </div>
              </div>
              <div className="space-y-4 pt-12">
                <div className="bg-efata-muted p-8 rounded-3xl aspect-square flex items-center justify-center">
                  <Users className="text-efata-cream w-12 h-12" />
                </div>
                <img src={`${import.meta.env.BASE_URL}img/3.jpg`} alt="Mission 2" className="rounded-3xl w-full aspect-[2/3] object-cover grayscale hover:grayscale-0 transition-all duration-500" referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-5xl md:text-7xl font-serif text-efata-deep mb-8">Quem somos nós?</h2>
            <div className="space-y-8 text-lg text-efata-brown leading-relaxed">
              <p className="text-2xl font-serif italic text-efata-deep border-l-4 border-efata-olive pl-6 py-2">
                "Somos jovens apaixonados por Jesus e dispostos a incendiar o mundo."
              </p>

              <div className="space-y-4">
                <p>
                  O grupo Efatá nasceu no seio da Igreja Católica Apostólica Romana, do desejo inquieto de jovens que buscam a santidade através do amor e do serviço missionário.
                </p>
                <p>
                  Nossa caminhada é marcada por missões em comunidades carentes, retiros de espiritualidade e uma vida comunitária vibrante. Acreditamos que cada jovem tem uma chave única capaz de abrir portas de esperança.
                </p>
              </div>

              <div className="bg-efata-dark/5 p-8 rounded-[2rem] border border-efata-dark/10">
                <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-efata-muted mb-6">Nossos Ministérios</h4>
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { name: "Música", icon: Music },
                    { name: "Pregação", icon: Mic2 },
                    { name: "Artes", icon: Palette },
                    { name: "Mídia", icon: Video }
                  ].map((min) => (
                    <div key={min.name} className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-efata-cream flex items-center justify-center shadow-sm">
                        <min.icon className="w-5 h-5 text-efata-dark" />
                      </div>
                      <span className="font-serif text-xl text-efata-deep">{min.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-efata-dark/10">
                <div className="flex items-start gap-4 text-efata-muted italic">
                  <BookOpen className="w-6 h-6 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-lg leading-relaxed">"E, voltando os olhos para o céu, suspirou e disse-lhe: Efatá; isto é, Abre-te."</p>
                    <p className="text-xs font-bold uppercase tracking-widest mt-2">Marcos 7:34</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Area of Operation Section */}
      <section id="atuacao" className="py-24 px-6 bg-efata-cream/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-efata-olive/10 border border-efata-olive/20 text-xs font-bold uppercase tracking-widest mb-6 text-efata-olive"
              >
                <MapPin className="w-3 h-3" />
                Espírito Santo, Brasil
              </motion.div>
              <h2 className="text-5xl md:text-7xl font-serif text-efata-deep mb-8">Onde Atuamos</h2>
              <p className="text-xl text-efata-brown leading-relaxed mb-8">
                Nossa missão não conhece fronteiras, mas nosso coração bate forte pelo <span className="font-bold text-efata-deep">Espírito Santo</span>.
              </p>
              <p className="text-lg text-efata-muted leading-relaxed mb-10">
                Com sede em solo capixaba, já levamos nossa luz por toda a <span className="italic">Grande Vitória</span>, atuando em comunidades, paróquias e periferias, sempre prontos para abrir corações onde quer que sejamos chamados.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {['Vitória', 'Vila Velha', 'Serra', 'Cariacica', 'Viana', 'Guarapari'].map((city) => (
                  <div key={city} className="flex items-center gap-3 text-efata-deep font-medium">
                    <div className="w-1.5 h-1.5 rounded-full bg-efata-olive" />
                    {city}
                  </div>
                ))}
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-video bg-efata-dark rounded-[2rem] overflow-hidden shadow-2xl relative group">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100708.7295925725!2d-40.37770976878425!3d-20.27498001398379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb83d5d85374ee9%3A0x97595e7ea70ed809!2zVml0w7NyaWEsIEVT!5e0!3m2!1spt-BR!2sbr!4v1771866540625!5m2!1spt-BR!2sbr"
                  className="w-full h-full border-0 opacity-80 grayscale hover:grayscale-0 transition-all duration-700"
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="mt-8 p-6 bg-efata-dark/5 rounded-2xl border border-efata-dark/10">
                <p className="text-efata-deep font-serif text-2xl italic text-center md:text-left">"Ide por todo o mundo e pregai o Evangelho."</p>
              </div>
              {/* Decorative dots */}
              <div className="absolute -top-6 -right-6 grid grid-cols-3 gap-2 opacity-20">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="w-2 h-2 rounded-full bg-efata-dark" />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-efata-dark text-efata-cream rounded-t-[4rem]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-6xl md:text-8xl font-serif mb-10">Pronto para a <br /><span className="italic text-efata-cream/60">Missão?</span></h2>
          <p className="text-xl text-efata-cream/70 mb-12 max-w-2xl mx-auto">
            Deseja levar a luz do Grupo Efatá para sua comunidade ou paróquia? Entre em contato conosco e convide-nos para uma missão.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="https://wa.me/5527999307807"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-efata-cream text-efata-dark px-10 py-5 rounded-full font-bold uppercase tracking-widest hover:bg-white transition-all shadow-xl flex items-center gap-3"
            >
              <MessageCircle className="w-6 h-6" />
              Fale Conosco
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contato" className="bg-efata-deep text-efata-cream/40 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-20">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-8">
                <div className="w-8 h-8 bg-efata-cream rounded-full flex items-center justify-center">
                  <Flame className="text-efata-deep w-5 h-5" />
                </div>
                <span className="font-serif text-2xl font-bold tracking-tighter uppercase text-efata-cream">Efatá</span>
              </div>
              <p className="text-lg max-w-sm mb-8">
                Grupo missionário da Igreja Católica Apostólica Romana. Levando a luz da missão a todos os corações desde 2024.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full border border-efata-cream/10 flex items-center justify-center hover:bg-efata-cream hover:text-efata-deep transition-all">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-efata-cream/10 flex items-center justify-center hover:bg-efata-cream hover:text-efata-deep transition-all">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-efata-cream font-bold uppercase tracking-widest text-xs mb-8">Navegação</h4>
              <ul className="space-y-4 text-sm">
                <li><a href="#inicio" className="hover:text-efata-cream transition-colors">Início</a></li>
                <li><a href="#missao" className="hover:text-efata-cream transition-colors">Pilares</a></li>
                <li><a href="#sobre" className="hover:text-efata-cream transition-colors">Sobre</a></li>
                <li><a href="#atuacao" className="hover:text-efata-cream transition-colors">Atuação</a></li>
                <li><a href="#" className="hover:text-efata-cream transition-colors">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-efata-cream font-bold uppercase tracking-widest text-xs mb-8">Contato</h4>
              <ul className="space-y-4 text-sm">
                <li className="flex items-center gap-3"><MapPin className="w-4 h-4" />Espírito Santos, Brasil</li>
                <li className="flex items-center gap-3"><Mail className="w-4 h-4" /> jovens.efataa@gmail.com</li>
                <li className="flex items-center gap-3"><Users className="w-4 h-4" /> @jovens.efataa</li>
              </ul>
            </div>
          </div>
          <div className="pt-12 border-t border-efata-cream/5 flex flex-col md:row justify-between items-center gap-6 text-xs uppercase tracking-widest">
            <p>© 2026 Missão Efatá. Todos os direitos reservados.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-efata-cream transition-colors">Privacidade</a>
              <a href="#" className="hover:text-efata-cream transition-colors">Termos</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

