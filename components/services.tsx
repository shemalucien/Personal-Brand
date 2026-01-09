import { Palette, Code, Layers, Lightbulb, Smartphone, TrendingUp } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Brand Identity",
    description:
      "Creating memorable brand identities that resonate with your target audience and stand out from the competition.",
  },
  {
    icon: Code,
    title: "Web Development",
    description:
      "Building fast, responsive, and accessible websites using modern technologies and best practices.",
  },
  {
    icon: Layers,
    title: "UI/UX Design",
    description:
      "Designing intuitive user interfaces and seamless experiences that delight users and drive engagement.",
  },
  {
    icon: Lightbulb,
    title: "Creative Strategy",
    description:
      "Developing innovative strategies to help your brand communicate effectively and achieve its goals.",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description:
      "Crafting beautiful and functional mobile applications for iOS and Android platforms.",
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description:
      "Growing your online presence through data-driven marketing strategies and campaigns.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-primary font-medium mb-4">What I Do</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Services I Offer
          </h2>
          <p className="text-muted-foreground text-lg">
            I provide comprehensive digital solutions tailored to help businesses
            thrive in the modern landscape.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card p-8 rounded-2xl shadow-soft hover-lift border border-transparent hover:border-primary/20 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
