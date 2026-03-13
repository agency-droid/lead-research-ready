import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Phone, Star, Shield, Clock, DollarSign } from "lucide-react";
import { ownerName, businessName, profession, phoneDisplay, phoneNumber, stats, ease } from "@/lib/profile-data";
import heroPortrait from "@/assets/hero-portrait.png";
import CalendarEmbed from "@/components/CalendarEmbed";
import ContentShowcaseBar from "@/components/ContentShowcaseBar";

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease },
});

const benefits = [
  "Competitive interest rates tailored to your business",
  "Fast approval process — decisions in days, not weeks",
  "Flexible repayment terms up to 25 years",
  "Personal banker relationship, not a call center",
  "SBA preferred lender — streamlined applications",
  "No hidden fees or prepayment penalties",
];

const trustPoints = [
  { icon: DollarSign, title: "$200M+ Funded", desc: "In commercial loans across Louisiana" },
  { icon: Clock, title: "20+ Years", desc: "Of dedicated banking experience" },
  { icon: Shield, title: "FDIC Insured", desc: "Your deposits are protected" },
  { icon: Star, title: "5-Star Service", desc: "Personalized attention every step" },
];

const SalesFunnel = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-primary/5 blur-[150px] pointer-events-none" />
          <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[100px] pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8 pt-16">
          <motion.div {...fade(0)} className="inline-block">
            <span className="bg-primary/10 text-primary text-xs font-semibold px-4 py-2 rounded-full uppercase tracking-wider">
              Commercial Lending
            </span>
          </motion.div>

          <motion.h1 {...fade(0.1)} className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Get the <span className="text-gradient">Business Funding</span> You Need — Without the Runaround
          </motion.h1>

          <motion.p {...fade(0.2)} className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Work directly with {ownerName}, VP of Commercial Lending at {businessName}. 
            No phone trees. No generic applications. Just a personal banker who gets deals done.
          </motion.p>

          <motion.div {...fade(0.3)} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="hero" size="xl" className="rounded-full shadow-glow">
              <a href={`tel:${phoneNumber}`}>
                <Phone className="w-5 h-5 mr-2" />
                Call Now — {phoneDisplay}
              </a>
            </Button>
          </motion.div>

          <motion.div {...fade(0.4)} className="flex justify-center gap-8 pt-4">
            {stats.map((s, i) => (
              <div key={i} className="text-center">
                <p className="text-2xl font-bold text-foreground">{s.val}</p>
                <p className="text-xs text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Trust Points */}
      <section className="py-20 px-6 bg-secondary/20">
        <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6">
          {trustPoints.map((t, i) => (
            <motion.div key={i} {...fade(i * 0.1)} className="text-center space-y-3">
              <div className="w-14 h-14 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                <t.icon className="w-7 h-7" />
              </div>
              <h3 className="text-sm font-bold text-foreground">{t.title}</h3>
              <p className="text-xs text-muted-foreground">{t.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div {...fade(0.1)} className="space-y-8">
            <div className="space-y-4">
              <p className="text-primary font-medium tracking-wider uppercase text-sm">Why Choose Us</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                Banking the Way It <span className="text-gradient">Should Be</span>
              </h2>
            </div>
            <div className="space-y-4">
              {benefits.map((b, i) => (
                <motion.div key={i} {...fade(0.15 + i * 0.05)} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <p className="text-sm text-foreground">{b}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div {...fade(0.2)} className="flex justify-center">
            <div className="bg-glass rounded-3xl p-8 space-y-6 max-w-sm w-full">
              <div className="flex justify-center">
                <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-primary/20">
                  <img src={heroPortrait} alt={ownerName} className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="text-center space-y-1">
                <h3 className="text-lg font-bold text-foreground">{ownerName}</h3>
                <p className="text-primary text-sm">{profession}</p>
                <p className="text-xs text-muted-foreground">{businessName}</p>
              </div>
              <Button asChild variant="hero" size="lg" className="w-full rounded-full">
                <a href={`tel:${phoneNumber}`}>
                  <Phone className="w-4 h-4 mr-2" />
                  {phoneDisplay}
                </a>
              </Button>
              <p className="text-xs text-center text-muted-foreground">Free consultation · No obligation</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 bg-secondary/20">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <motion.div {...fade(0.1)} className="space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Stop Waiting. Start <span className="text-gradient-gold">Growing.</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              One call is all it takes. Let's discuss what your business needs and build a lending solution that works.
            </p>
          </motion.div>
          <motion.div {...fade(0.2)}>
            <Button asChild variant="hero" size="xl" className="rounded-full shadow-glow">
              <a href={`tel:${phoneNumber}`}>
                Schedule Your Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} {ownerName} × {businessName}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default SalesFunnel;
