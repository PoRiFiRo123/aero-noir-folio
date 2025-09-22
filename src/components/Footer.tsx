import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Contact {
  id: string;
  label: string;
  value: string;
  type: string;
  icon?: string;
  is_public: boolean;
  is_primary: boolean;
  sort_order: number;
}

interface FooterProps {
  contacts: Contact[];
}

const Footer = ({ contacts }: FooterProps) => {
  const currentYear = new Date().getFullYear();
  
  const socialContacts = contacts.filter(contact => contact.type === 'social');
  
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <footer className="relative py-12 border-t border-border/50">
      {/* Aurora Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Branding */}
          <div className="space-y-4">
            <div className="text-2xl font-bold gradient-text">
              Aryan
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Building the future with AI and innovative web solutions. 
              Let's create something amazing together.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Quick Links</h3>
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-muted-foreground hover:text-primary transition-smooth text-left story-link w-fit"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Connect</h3>
            <div className="flex gap-3">
              <Button variant="ghost" size="icon" className="hover-scale">
                <Github className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover-scale">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover-scale">
                <Mail className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <span>© {currentYear} Aryan. Made with</span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <span>using React & Supabase</span>
            </div>
            
            <div className="mt-2 md:mt-0">
              <span>Designed & Built by Aryan</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;