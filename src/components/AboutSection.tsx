import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-card rounded-2xl aspect-square flex items-center justify-center border border-border shadow-card"
          >
            <div className="text-center p-8">
              <div className="w-24 h-24 rounded-full bg-secondary mx-auto mb-4 flex items-center justify-center">
                <span className="text-muted-foreground text-3xl">📸</span>
              </div>
              <p className="text-muted-foreground text-sm">Headshot Placeholder</p>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <p className="text-primary font-medium tracking-wider uppercase text-sm mb-4">
              About
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-foreground">
              [Prospect Name]
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              [2-3 sentences about who they are, their background, and what drives them. 
              Make it personal and authentic — this is where prospects build trust.]
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              [Their key differentiator — what sets them apart from competitors. 
              Why should someone choose them over anyone else?]
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
