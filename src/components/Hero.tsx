
import { ArrowRight, Code, Shield, Search } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-background/95 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_50%)]"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="p-3 rounded-full bg-cyan-400/10 border border-cyan-400/20">
              <Shield className="h-8 w-8 text-cyan-400" />
            </div>
            <div className="p-3 rounded-full bg-emerald-400/10 border border-emerald-400/20">
              <Code className="h-8 w-8 text-emerald-400" />
            </div>
            <div className="p-3 rounded-full bg-violet-400/10 border border-violet-400/20">
              <Search className="h-8 w-8 text-violet-400" />
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            Operational Security
            <span className="block text-cyan-400">Research Group</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            Advancing the frontiers of <span className="text-cyan-400 font-semibold">offensive security</span> and 
            <span className="text-emerald-400 font-semibold"> product security research</span> through rigorous academic inquiry and practical innovation.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a
              href="#research"
              className="inline-flex items-center px-8 py-3 bg-cyan-400 text-background font-medium rounded-lg hover:bg-cyan-300 transition-colors duration-200 group"
            >
              Explore Research
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </a>
            <a
              href="#publications"
              className="inline-flex items-center px-8 py-3 border border-cyan-400 text-cyan-400 font-medium rounded-lg hover:bg-cyan-400/10 transition-colors duration-200"
            >
              View Publications
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
