
import { Shield, Bug, Lock, Target, Code, Database } from "lucide-react";

const Research = () => {
  const researchAreas = [
    {
      icon: Shield,
      title: "Offensive Security",
      description: "Developing advanced penetration testing methodologies, red team operations, and attack simulation frameworks.",
      color: "text-red-400 bg-red-400/10 border-red-400/20"
    },
    {
      icon: Bug,
      title: "Vulnerability Research",
      description: "Discovering and analyzing security vulnerabilities in modern software systems and emerging technologies.",
      color: "text-orange-400 bg-orange-400/10 border-orange-400/20"
    },
    {
      icon: Lock,
      title: "Product Security",
      description: "Designing secure-by-design principles and security assessment frameworks for product development lifecycles.",
      color: "text-cyan-400 bg-cyan-400/10 border-cyan-400/20"
    },
    {
      icon: Target,
      title: "Threat Modeling",
      description: "Creating comprehensive threat models and risk assessment methodologies for complex distributed systems.",
      color: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20"
    },
    {
      icon: Code,
      title: "Secure Development",
      description: "Researching secure coding practices, static analysis tools, and automated security testing approaches.",
      color: "text-violet-400 bg-violet-400/10 border-violet-400/20"
    },
    {
      icon: Database,
      title: "Data Protection",
      description: "Investigating privacy-preserving technologies, data anonymization techniques, and secure data handling practices.",
      color: "text-blue-400 bg-blue-400/10 border-blue-400/20"
    }
  ];

  return (
    <section id="research" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Research Areas
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our interdisciplinary team explores cutting-edge topics in cybersecurity, 
            bridging the gap between academic research and real-world security challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {researchAreas.map((area, index) => (
            <div
              key={index}
              className="p-6 rounded-xl border border-border bg-card hover:border-cyan-400/50 transition-all duration-300 group"
            >
              <div className={`inline-flex p-3 rounded-lg ${area.color} mb-4 group-hover:scale-110 transition-transform duration-200`}>
                <area.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {area.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;
