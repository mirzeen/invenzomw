import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Cursor } from "@/components/Cursor";
import { projects } from "@/data/projects";

import projectOvra from "@/assets/project-ovra.jpg";
import projectTierra from "@/assets/project-tierra.jpg";
import projectForma from "@/assets/project-forma.jpg";
import projectViento from "@/assets/project-viento.jpg";
import projectArco from "@/assets/project-arco.jpg";

const projectImages: Record<string, string> = {
  "ovra-studio": projectOvra,
  "tierra-negra": projectTierra,
  "forma-digital": projectForma,
  "viento-sur": projectViento,
  "arco-estudio": projectArco,
};

const Index = () => {
  const featuredProject = projects[0];

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Cursor />
      <Header />

      {/* Hero - Stark, typographic */}
      <section className="min-h-screen flex flex-col justify-between px-6 md:px-10 pt-32 pb-10">
        <div className="flex-1 flex items-center">
          <div className="w-full">
            <div className="overflow-hidden">
              <motion.p
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="label-sm mb-8"
              >
                Director Creativo — Brand & Digital
              </motion.p>
            </div>
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: 120 }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                className="font-display text-massive text-foreground"
              >
                Concepto.
              </motion.h1>
            </div>
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: 120 }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
                className="font-display text-massive text-foreground italic"
              >
                No tendencia.
              </motion.h1>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex justify-between items-end"
        >
          <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
            Construyo identidades que funcionan
            <br />
            antes de explicarse.
          </p>
          <div className="text-right">
            <p className="label-sm">Scroll</p>
          </div>
        </motion.div>
      </section>

      {/* Featured project - Asymmetric */}
      <section className="px-6 md:px-10 py-32">
        <Link
          to={`/work/${featuredProject.id}`}
          className="group block"
          data-cursor="expand"
        >
          <div className="grid md:grid-cols-12 gap-6 md:gap-4 items-end">
            <div className="md:col-span-2 order-2 md:order-1">
              <p className="number-index">01</p>
              <p className="label-sm mt-2">{featuredProject.category}</p>
              <p className="label-sm">{featuredProject.year}</p>
            </div>

            <div className="md:col-span-7 order-1 md:order-2">
              <div className="aspect-[4/3] overflow-hidden bg-secondary">
                <motion.img
                  initial={{ scale: 1.2 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
                  src={projectImages[featuredProject.id]}
                  alt={featuredProject.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="md:col-span-3 order-3 md:pl-8">
              <h2 className="font-display text-statement text-foreground group-hover:text-muted-foreground transition-colors duration-500">
                {featuredProject.title}
              </h2>
            </div>
          </div>
        </Link>
      </section>

      {/* Project list - Minimal */}
      <section className="px-6 md:px-10 py-20 border-t border-border">
        <div className="mb-16">
          <p className="label-sm">Selección / {projects.length} proyectos</p>
        </div>

        <div className="space-y-0">
          {projects.slice(1).map((project, i) => (
            <Link
              key={project.id}
              to={`/work/${project.id}`}
              className="group block border-b border-border py-8 md:py-12"
              data-cursor="pointer"
            >
              <div className="flex items-baseline justify-between gap-8">
                <div className="flex items-baseline gap-8 md:gap-16">
                  <span className="number-index">{String(i + 2).padStart(2, "0")}</span>
                  <h3 className="font-display text-2xl md:text-4xl text-foreground group-hover:text-muted-foreground transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>
                <p className="label-sm hidden md:block">{project.category}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 flex justify-end">
          <Link to="/work" className="label-sm editorial-line pb-1">
            Ver índice completo
          </Link>
        </div>
      </section>

      {/* Statement */}
      <section className="px-6 md:px-10 py-32 md:py-48">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="max-w-5xl"
        >
          <p className="font-display text-3xl md:text-5xl lg:text-6xl text-foreground leading-[1.1]">
            No trabajo con clientes que buscan "algo bonito".
            <span className="text-muted-foreground italic"> Trabajo con los que entienden que una marca es una posición.</span>
          </p>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
