import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section id="book" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-card border border-border rounded-3xl p-10 sm:p-16 text-center shadow-card relative overflow-hidden"
        >
          {/* Glow effect */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[2px] bg-gradient-accent opacity-60" />

          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Ready to <span className="text-gradient">[Result They Promise]</span>?
          </h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
            Let's talk. Book your free 30-minute strategy call below and see how we can work together.
          </p>

          {/* Calendar embed placeholder */}
          <div className="border-2 border-dashed border-border rounded-xl p-10 mb-8 bg-secondary/30">
            <p className="text-muted-foreground text-sm">
              📅 Calendar Embed Placeholder — GHL calendar will be added here after deploy
            </p>
          </div>

          <Button variant="hero" size="xl">
            Book a Free Strategy Call
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
