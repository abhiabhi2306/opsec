
import { Shield, Github, Twitter, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="h-8 w-8 text-cyan-400" />
              <span className="text-xl font-bold text-foreground">OPSEC Research</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Advancing cybersecurity through rigorous research in offensive security, 
              product security, and innovative defense mechanisms.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="p-2 rounded-lg bg-card border border-border hover:border-cyan-400/50 hover:bg-cyan-400/10 transition-all duration-200"
              >
                <Github className="h-5 w-5 text-muted-foreground hover:text-cyan-400" />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-card border border-border hover:border-cyan-400/50 hover:bg-cyan-400/10 transition-all duration-200"
              >
                <Twitter className="h-5 w-5 text-muted-foreground hover:text-cyan-400" />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-card border border-border hover:border-cyan-400/50 hover:bg-cyan-400/10 transition-all duration-200"
              >
                <Linkedin className="h-5 w-5 text-muted-foreground hover:text-cyan-400" />
              </a>
              <a
                href="mailto:contact@opsec.research"
                className="p-2 rounded-lg bg-card border border-border hover:border-cyan-400/50 hover:bg-cyan-400/10 transition-all duration-200"
              >
                <Mail className="h-5 w-5 text-muted-foreground hover:text-cyan-400" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Research</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-cyan-400 transition-colors duration-200">Offensive Security</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-cyan-400 transition-colors duration-200">Vulnerability Research</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-cyan-400 transition-colors duration-200">Product Security</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-cyan-400 transition-colors duration-200">Threat Modeling</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-cyan-400 transition-colors duration-200">Publications</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-cyan-400 transition-colors duration-200">Tools & Code</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-cyan-400 transition-colors duration-200">Blog</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-cyan-400 transition-colors duration-200">Join Our Team</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-muted-foreground">
            © 2024 OPSEC Research Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
