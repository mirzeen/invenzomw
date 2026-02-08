import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Cursor } from "@/components/Cursor";
import { projects } from "@/data/projects";

const WorkPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Cursor />
      <Header />

      <section className="px-6 md:px-10 pt-32 pb-20">
        <div className="flex items-baseline justify-between mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-display text-5xl md:text-7xl text-foreground"
          >
            Índice
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="label-sm"
          >
            {projects.length} proyectos
          </motion.p>
        </div>

        <div className="space-y-0">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Link
                to={`/work/${project.id}`}
                className="group block border-b border-border py-10 md:py-14"
                data-cursor="pointer"
              >
                <div className="grid md:grid-cols-12 gap-4 items-baseline">
                  <div className="md:col-span-1">
                    <span className="number-index">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="md:col-span-6">
                    <h2 className="font-display text-3xl md:text-5xl text-foreground group-hover:text-muted-foreground transition-colors duration-500">
                      {project.title}
                    </h2>
                  </div>
                  <div className="md:col-span-3">
                    <p className="text-sm text-muted-foreground">
                      {project.subtitle}
                    </p>
                  </div>
                  <div className="md:col-span-2 text-right">
                    <p className="label-sm">{project.year}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WorkPage;
