import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Cursor } from "@/components/Cursor";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Cursor />
      <Header />

      <section className="flex-1 px-6 md:px-10 pt-32 pb-24 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="label-sm mb-8">Contacto</p>
        </motion.div>

        <motion.a
          href="mailto:hola@mv.studio"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-4xl md:text-6xl lg:text-7xl text-foreground hover:text-muted-foreground transition-colors duration-500 inline-block mb-16"
          data-cursor="pointer"
        >
          hola@mv.studio
        </motion.a>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="space-y-6 max-w-md"
        >
          <p className="text-base text-muted-foreground leading-relaxed">
            Trabajo con un número limitado de clientes por año.
            Si tienes un proyecto que necesita visión antes que producción,
            escríbeme con contexto sobre tu marca y objetivos.
          </p>
          <p className="text-sm text-muted-foreground">
            Respondo en 48–72h.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-20 flex gap-10"
        >
          <a href="#" className="label-sm editorial-line pb-1">LinkedIn</a>
          <a href="#" className="label-sm editorial-line pb-1">Behance</a>
          <a href="#" className="label-sm editorial-line pb-1">Instagram</a>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
