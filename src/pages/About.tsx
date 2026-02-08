import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Cursor } from "@/components/Cursor";

const services = [
  "Identidad Visual",
  "Estrategia de Marca",
  "Dirección de Arte",
  "Diseño Digital",
  "Sistemas",
];

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Cursor />
      <Header />

      <section className="px-6 md:px-10 pt-32 pb-24">
        {/* Header */}
        <div className="mb-24 md:mb-32">
          <motion.h1
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-5xl md:text-7xl lg:text-8xl text-foreground max-w-4xl"
          >
            Diseño es tomar
            <br />
            <span className="italic">una posición.</span>
          </motion.h1>
        </div>

        {/* Content grid */}
        <div className="grid md:grid-cols-12 gap-16 md:gap-8">
          {/* Left - services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="md:col-span-4"
          >
            <p className="label-sm mb-8">Servicios</p>
            <ul className="space-y-3">
              {services.map((service, i) => (
                <li key={service} className="flex items-baseline gap-4">
                  <span className="number-index">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-sm text-foreground">{service}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right - bio */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="md:col-span-7 md:col-start-6 space-y-8"
          >
            <div>
              <p className="label-sm mb-6">Bio</p>
              <p className="text-lg md:text-xl text-foreground leading-relaxed mb-6">
                Director creativo con más de diez años construyendo identidades para
                clientes que entienden que una marca no es decoración — es decisión.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed mb-6">
                Mi proceso empieza antes del diseño. Antes de tocar tipografía o color,
                defino qué territorio ocupa la marca, contra qué compite, y qué la hace
                inevitable. Después diseño.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                He trabajado con estudios de arquitectura, startups tech, marcas de
                consumo y clientes independientes en Europa y Latinoamérica. El perfil
                común: buscan profundidad, no producción.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Statement */}
      <section className="px-6 md:px-10 py-32 border-t border-border">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <p className="font-display text-3xl md:text-4xl text-foreground leading-snug">
            "No me interesa el diseño que sigue.
            <span className="text-muted-foreground italic"> Me interesa el que define."</span>
          </p>
        </motion.div>
      </section>

      {/* Availability */}
      <section className="px-6 md:px-10 py-16 border-t border-border">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="flex items-center gap-4">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <p className="text-sm text-foreground">
              Disponible para proyectos Q4 2026
            </p>
          </div>
          <a href="mailto:hola@mv.studio" className="label-sm editorial-line pb-1">
            dani@eisenforst.de
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
