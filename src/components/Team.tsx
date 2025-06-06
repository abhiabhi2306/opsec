
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";

const Team = () => {
  const teamMembers = [
    {
      name: "Dr. Sarah Chen",
      role: "Principal Investigator",
      bio: "Cybersecurity researcher with 15+ years experience in offensive security and vulnerability research.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      links: {
        github: "#",
        linkedin: "#",
        email: "s.chen@opsec.research"
      }
    },
    {
      name: "Dr. Marcus Rodriguez",
      role: "Senior Security Researcher",
      bio: "Expert in product security and secure development practices with extensive industry background.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      links: {
        github: "#",
        linkedin: "#",
        email: "m.rodriguez@opsec.research"
      }
    },
    {
      name: "Dr. Aisha Patel",
      role: "Vulnerability Research Lead",
      bio: "Specializes in zero-day discovery, exploit development, and advanced persistent threat analysis.",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
      links: {
        github: "#",
        linkedin: "#",
        email: "a.patel@opsec.research"
      }
    },
    {
      name: "Alex Kim",
      role: "Graduate Research Assistant",
      bio: "PhD candidate focusing on AI-assisted penetration testing and automated vulnerability discovery.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      links: {
        github: "#",
        linkedin: "#",
        email: "a.kim@opsec.research"
      }
    },
    {
      name: "Jordan Taylor",
      role: "Security Engineer",
      bio: "Full-stack security engineer specializing in secure architecture design and threat modeling.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      links: {
        github: "#",
        linkedin: "#",
        email: "j.taylor@opsec.research"
      }
    },
    {
      name: "Riley Morgan",
      role: "Research Assistant",
      bio: "Undergraduate researcher working on privacy-preserving technologies and data protection methods.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
      links: {
        github: "#",
        linkedin: "#",
        email: "r.morgan@opsec.research"
      }
    }
  ];

  return (
    <section id="team" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Research Team
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our diverse team combines academic rigor with practical industry experience 
            to push the boundaries of cybersecurity research.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-card rounded-xl border border-border p-6 hover:border-cyan-400/50 transition-all duration-300 group"
            >
              <div className="text-center">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-cyan-400/20 group-hover:border-cyan-400/50 transition-colors duration-200"
                />
                <h3 className="text-xl font-semibold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-cyan-400 font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {member.bio}
                </p>
                <div className="flex items-center justify-center space-x-3">
                  <a
                    href={member.links.github}
                    className="p-2 rounded-lg bg-background hover:bg-cyan-400/10 hover:text-cyan-400 transition-all duration-200"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                  <a
                    href={member.links.linkedin}
                    className="p-2 rounded-lg bg-background hover:bg-cyan-400/10 hover:text-cyan-400 transition-all duration-200"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a
                    href={`mailto:${member.links.email}`}
                    className="p-2 rounded-lg bg-background hover:bg-cyan-400/10 hover:text-cyan-400 transition-all duration-200"
                  >
                    <Mail className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
