import { motion } from "framer-motion";
import { Lightbulb, Target, TrendingUp, Users } from "lucide-react";

const services = [
  {
    icon: Lightbulb,
    title: "[Service One]",
    description: "[Brief description of the first service — 1-2 sentences max.]",
  },
  {
    icon: Target,
    title: "[Service Two]",
    description: "[Brief description of the second service — 1-2 sentences max.]",
  },
  {
    icon: TrendingUp,
    title: "[Service Three]",
    description: "[Brief description of the third service — 1-2 sentences max.]",
  },
  {
    icon: Users,
    title: "[Service Four]",
    description: "[Brief description of the fourth service — 1-2 sentences max.]",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium tracking-wider uppercase text-sm mb-4">
            Services
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            What I Do
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-gradient-card border border-border rounded-2xl p-8 shadow-card hover:border-primary/30 transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <service.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
