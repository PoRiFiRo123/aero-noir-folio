import { useEffect, useState } from "react";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import auroraHeroBg from "@/assets/aurora-hero-bg.jpg";

interface Profile {
  name: string;
  title: string;
  bio: string;
  avatar_url?: string;
  email?: string;
  phone?: string;
  location?: string;
}

interface HeroSectionProps {
  profile: Profile | null;
}

const HeroSection = ({ profile }: HeroSectionProps) => {
  const [currentRole, setCurrentRole] = useState(0);
  
  const roles = [
    "AI Engineer",
    "Full-Stack Developer",
    "Machine Learning Specialist",
    "Software Architect",
    "Data Scientist"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleScrollToProjects = () => {
    const projectsSection = document.querySelector("#projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrollToContact = () => {
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Aurora Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${auroraHeroBg})` }}
      />
      
      {/* Animated Aurora Overlay */}
      <div className="absolute inset-0 aurora-bg opacity-60" />
      
      {/* Orbital Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-primary rounded-full animate-orbit opacity-60`}
            style={{
              left: `${20 + i * 10}%`,
              top: `${30 + i * 8}%`,
              animationDelay: `${i * 3}s`,
              animationDuration: `${15 + i * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-16 h-16 border border-secondary/30 rounded-lg floating" 
             style={{ animationDelay: '0s' }} />
        <div className="absolute top-40 right-20 w-12 h-12 border border-primary/40 rounded-full floating" 
             style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-40 left-20 w-20 h-20 border border-secondary/20 rotate-45 floating" 
             style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-20 right-10 w-14 h-14 border border-primary/30 rounded-lg floating" 
             style={{ animationDelay: '1.5s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        {/* Avatar */}
        {profile?.avatar_url && (
          <div className="mb-8">
            <img
              src={profile.avatar_url}
              alt={profile.name}
              className="w-32 h-32 rounded-full mx-auto border-4 border-primary/50 shadow-lg animate-pulse-glow"
            />
          </div>
        )}

        {/* Name */}
        <h1 className="text-6xl md:text-8xl font-bold mb-4 gradient-text animate-fade-in">
          {profile?.name || "Aryan"}
        </h1>

        {/* Rotating Roles */}
        <div className="h-16 mb-6 flex items-center justify-center">
          <p className="text-2xl md:text-3xl text-muted-foreground">
            <span className="text-primary font-semibold transition-smooth">
              {roles[currentRole]}
            </span>
          </p>
        </div>

        {/* Bio */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8 animate-fade-in">
          {profile?.bio || "Passionate about building innovative AI solutions and creating seamless user experiences."}
        </p>

        {/* Location */}
        {profile?.location && (
          <p className="text-muted-foreground mb-8 flex items-center justify-center gap-2">
            <span className="w-2 h-2 bg-secondary rounded-full animate-pulse"></span>
            {profile.location}
          </p>
        )}

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button 
            size="lg" 
            className="group transition-spring hover:scale-105"
            onClick={handleScrollToProjects}
          >
            View Projects
            <ChevronDown className="ml-2 w-4 h-4 group-hover:animate-bounce" />
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="group transition-spring hover:scale-105"
            onClick={handleScrollToContact}
          >
            <Mail className="mr-2 w-4 h-4" />
            Contact Me
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6">
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

        {/* Trajectory Strip - Animated milestone line */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <div className="w-px h-16 bg-gradient-to-b from-primary to-transparent opacity-60"></div>
          <div className="w-2 h-2 bg-primary rounded-full -mt-1 animate-pulse"></div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default HeroSection;