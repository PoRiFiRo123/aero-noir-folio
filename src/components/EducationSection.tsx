import { GraduationCap, Calendar, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface Education {
  id: string;
  degree: string;
  institution: string;
  location?: string;
  gpa?: string;
  start_year?: number;
  end_year?: number;
  is_current: boolean;
  description?: string;
  sort_order: number;
}

interface EducationSectionProps {
  education: Education[];
}

const EducationSection = ({ education }: EducationSectionProps) => {
  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
          Education
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Academic foundation that shaped my technical expertise and problem-solving approach.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <div 
              key={edu.id} 
              className="glass p-6 rounded-lg card-hover animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {edu.degree}
                  </h3>
                  
                  <p className="text-primary font-medium mb-3">
                    {edu.institution}
                  </p>

                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                    {(edu.start_year || edu.end_year) && (
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>
                          {edu.start_year && edu.end_year 
                            ? `${edu.start_year} - ${edu.is_current ? 'Present' : edu.end_year}`
                            : edu.start_year || edu.end_year}
                        </span>
                      </div>
                    )}
                    
                    {edu.location && (
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{edu.location}</span>
                      </div>
                    )}
                  </div>

                  {edu.gpa && (
                    <div className="mb-3">
                      <Badge variant="secondary" className="text-xs">
                        GPA: {edu.gpa}
                      </Badge>
                    </div>
                  )}

                  {edu.description && (
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {edu.description}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EducationSection;