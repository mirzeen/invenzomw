import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
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

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const projectIndex = projects.findIndex((p) => p.id === id);
  const project = projects[projectIndex];
  const nextProject = projects[(projectIndex + 1) % projects.length];

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">No encontrado.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Cursor />
      <Header />

      {/* Hero */}
      <section className="px-6 md:px-10 pt-32 pb-16">
        <div className="flex items-baseline justify-between mb-8">
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => navigate(-1)}
            className="label-sm editorial-line pb-1"
          >
            Volver
          </motion.button>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="number-index"
          >
            {String(projectIndex + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
          </motion.span>
        </div>

        <div className="grid md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-8">
            <motion.h1
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-5xl md:text-7xl lg:text-8xl text-foreground"
            >
              {project.title}
            </motion.h1>
          </div>
          <div className="md:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <p className="label-sm mb-2">{project.category}</p>
              <p className="label-sm">{project.year}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main image - Full bleed */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="w-full"
      >
        <div className="aspect-[21/9] w-full overflow-hidden">
          <img
            src={projectImages[project.id]}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>
      </motion.section>

      {/* Case study - Grid */}
      <section className="px-6 md:px-10 py-24 md:py-32">
        <div className="grid md:grid-cols-12 gap-16 md:gap-8">
          {/* Left column - sticky info */}
          <div className="md:col-span-4 lg:col-span-3">
            <div className="md:sticky md:top-32">
              <p className="label-sm mb-4">Resumen</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {project.subtitle}
              </p>
            </div>
          </div>

          {/* Right column - content */}
          <div className="md:col-span-8 lg:col-span-8 lg:col-start-5 space-y-20">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="label-sm mb-4">01 — Contexto</p>
              <p className="text-lg md:text-xl text-foreground leading-relaxed">
                {project.context}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="label-sm mb-4">02 — Concepto</p>
              <p className="font-display text-2xl md:text-4xl text-foreground leading-snug">
                {project.concept}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="label-sm mb-4">03 — Dirección visual</p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {project.direction}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="label-sm mb-4">04 — Ejecución</p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {project.execution}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="pt-10 border-t border-border"
            >
              <p className="label-sm mb-4">Resultado</p>
              <p className="text-lg text-foreground leading-relaxed">
                {project.result}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Next project */}
      <section className="border-t border-border">
        <Link
          to={`/work/${nextProject.id}`}
          className="group block px-6 md:px-10 py-20 md:py-32"
          data-cursor="expand"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <p className="label-sm mb-4">Siguiente</p>
              <h2 className="font-display text-4xl md:text-6xl lg:text-7xl text-foreground group-hover:text-muted-foreground transition-colors duration-500">
                {nextProject.title}
              </h2>
            </div>
            <p className="label-sm">{nextProject.year}</p>
          </div>
        </Link>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
