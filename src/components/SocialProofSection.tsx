import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "[Testimonial text — what the client said about working with this person.]",
    name: "[Client Name]",
    business: "[Business Name]",
  },
  {
    quote: "[Testimonial text — what the client said about working with this person.]",
    name: "[Client Name]",
    business: "[Business Name]",
  },
  {
    quote: "[Testimonial text — what the client said about working with this person.]",
    name: "[Client Name]",
    business: "[Business Name]",
  },
];

const stats = [
  { value: "[X]+", label: "Clients Served" },
  { value: "[X]+", label: "Years Experience" },
  { value: "[X]%", label: "Client Satisfaction" },
];

const SocialProofSection = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium tracking-wider uppercase text-sm mb-4">
            Results
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Trusted by Those Who Matter
          </h2>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-3 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-3xl sm:text-4xl font-bold text-gradient">{stat.value}</p>
              <p className="text-muted-foreground text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-gradient-card border border-border rounded-2xl p-6 shadow-card"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground/90 leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </p>
              <div>
                <p className="text-foreground font-semibold text-sm">{testimonial.name}</p>
                <p className="text-muted-foreground text-sm">{testimonial.business}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
