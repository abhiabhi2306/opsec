
import { Mail, MapPin, Phone, Github, Twitter, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Interested in collaboration, research partnerships, or joining our team? 
            We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-lg bg-cyan-400/10 border border-cyan-400/20">
                    <Mail className="h-5 w-5 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-foreground font-medium">Email</p>
                    <p className="text-muted-foreground">contact@opsec.research</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-lg bg-emerald-400/10 border border-emerald-400/20">
                    <Phone className="h-5 w-5 text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-foreground font-medium">Phone</p>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-lg bg-violet-400/10 border border-violet-400/20">
                    <MapPin className="h-5 w-5 text-violet-400" />
                  </div>
                  <div>
                    <p className="text-foreground font-medium">Address</p>
                    <p className="text-muted-foreground">
                      Computer Science Department<br />
                      University Research Center<br />
                      123 Academic Ave, Suite 456<br />
                      Research City, RC 12345
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Follow Our Research
              </h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="p-3 rounded-lg bg-background border border-border hover:border-cyan-400/50 hover:bg-cyan-400/10 transition-all duration-200"
                >
                  <Github className="h-6 w-6 text-muted-foreground hover:text-cyan-400" />
                </a>
                <a
                  href="#"
                  className="p-3 rounded-lg bg-background border border-border hover:border-cyan-400/50 hover:bg-cyan-400/10 transition-all duration-200"
                >
                  <Twitter className="h-6 w-6 text-muted-foreground hover:text-cyan-400" />
                </a>
                <a
                  href="#"
                  className="p-3 rounded-lg bg-background border border-border hover:border-cyan-400/50 hover:bg-cyan-400/10 transition-all duration-200"
                >
                  <Linkedin className="h-6 w-6 text-muted-foreground hover:text-cyan-400" />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-xl border border-border p-8">
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              Send Us a Message
            </h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400"
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400"
                  placeholder="john.doe@example.com"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400"
                  placeholder="Research Collaboration Inquiry"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400 resize-none"
                  placeholder="Tell us about your research interests or collaboration ideas..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-8 py-3 bg-cyan-400 text-background font-medium rounded-lg hover:bg-cyan-300 transition-colors duration-200"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
