
import { Calendar, ExternalLink, FileText, Award } from "lucide-react";

const Publications = () => {
  const publications = [
    {
      title: "Advanced Persistent Threats: A Comprehensive Analysis of Modern Attack Vectors",
      authors: "Chen, S., Patel, A., Rodriguez, M.",
      venue: "IEEE Symposium on Security and Privacy 2024",
      year: "2024",
      type: "Conference Paper",
      status: "Published",
      link: "#",
      abstract: "This paper presents a comprehensive analysis of APT techniques and proposes novel detection methodologies..."
    },
    {
      title: "Automated Vulnerability Discovery in IoT Devices Using Machine Learning",
      authors: "Kim, A., Chen, S., Taylor, J.",
      venue: "ACM Conference on Computer and Communications Security 2024",
      year: "2024",
      type: "Conference Paper", 
      status: "Accepted",
      link: "#",
      abstract: "We propose an ML-based framework for automated vulnerability discovery in IoT firmware..."
    },
    {
      title: "Security-by-Design: A Framework for Product Security Assessment",
      authors: "Rodriguez, M., Morgan, R., Chen, S.",
      venue: "Journal of Cybersecurity Research",
      year: "2023",
      type: "Journal Article",
      status: "Published",
      link: "#",
      abstract: "This work introduces a comprehensive framework for integrating security considerations..."
    },
    {
      title: "Zero-Day Exploit Development: Techniques and Countermeasures",
      authors: "Patel, A., Kim, A., Rodriguez, M.",
      venue: "USENIX Security Symposium 2023",
      year: "2023",
      type: "Conference Paper",
      status: "Published",
      link: "#",
      abstract: "An in-depth exploration of modern exploit development techniques and defensive strategies..."
    },
    {
      title: "Privacy-Preserving Data Analysis in Distributed Systems",
      authors: "Morgan, R., Taylor, J., Chen, S.",
      venue: "International Conference on Privacy Engineering 2023",
      year: "2023",
      type: "Conference Paper",
      status: "Published",
      link: "#",
      abstract: "We present novel approaches to maintaining privacy while enabling data analysis..."
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Published":
        return "text-emerald-400 bg-emerald-400/10 border-emerald-400/20";
      case "Accepted":
        return "text-cyan-400 bg-cyan-400/10 border-cyan-400/20";
      case "Under Review":
        return "text-orange-400 bg-orange-400/10 border-orange-400/20";
      default:
        return "text-muted-foreground bg-muted/10 border-border";
    }
  };

  return (
    <section id="publications" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Publications & Research
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our research contributes to the global cybersecurity knowledge base through 
            peer-reviewed publications and open-source tools.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 max-w-4xl mx-auto">
          {publications.map((pub, index) => (
            <div
              key={index}
              className="p-6 rounded-xl border border-border bg-card hover:border-cyan-400/50 transition-all duration-300 group"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-cyan-400 transition-colors duration-200">
                    {pub.title}
                  </h3>
                  <p className="text-muted-foreground mb-2">
                    {pub.authors}
                  </p>
                  <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                    <span className="flex items-center">
                      <FileText className="h-4 w-4 mr-1" />
                      {pub.venue}
                    </span>
                    <span className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {pub.year}
                    </span>
                  </div>
                </div>
                <div className="flex items-center space-x-3 mt-4 lg:mt-0">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(pub.status)}`}>
                    {pub.status}
                  </span>
                  <a
                    href={pub.link}
                    className="p-2 rounded-lg bg-background hover:bg-cyan-400/10 hover:text-cyan-400 transition-all duration-200"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {pub.abstract}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center px-8 py-3 border border-cyan-400 text-cyan-400 font-medium rounded-lg hover:bg-cyan-400/10 transition-colors duration-200"
          >
            View All Publications
            <ExternalLink className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Publications;
