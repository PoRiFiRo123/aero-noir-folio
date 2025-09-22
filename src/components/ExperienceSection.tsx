import { MapPin, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface Experience {
  id: string;
  title: string;
  company: string;
  location?: string;
  start_date: string;
  end_date?: string;
  is_current: boolean;
  description?: string;
  technologies?: string[];
  sort_order: number;
}

interface ExperienceSectionProps {
  experiences: Experience[];
}

const ExperienceSection = ({ experiences }: ExperienceSectionProps) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
  };

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
          Experience
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          My professional journey and the impact I've made across different organizations.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-primary opacity-60"></div>

          {experiences.map((experience, index) => (
            <div 
              key={experience.id} 
              className="relative mb-12 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Timeline Dot */}
              <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg animate-pulse-glow"></div>

              {/* Content */}
              <div className="ml-16 glass p-6 rounded-lg">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-1">
                      {experience.title}
                    </h3>
                    <p className="text-lg text-primary font-medium mb-2">
                      {experience.company}
                    </p>
                  </div>
                  
                  <div className="flex flex-col md:items-end text-sm text-muted-foreground">
                    <div className="flex items-center gap-1 mb-1">
                      <Calendar className="w-4 h-4" />
                      <span>
                        {formatDate(experience.start_date)} - {
                          experience.is_current ? "Present" : 
                          experience.end_date ? formatDate(experience.end_date) : "Present"
                        }
                      </span>
                    </div>
                    {experience.location && (
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{experience.location}</span>
                      </div>
                    )}
                  </div>
                </div>

                {experience.description && (
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {experience.description}
                  </p>
                )}

                {experience.technologies && experience.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;