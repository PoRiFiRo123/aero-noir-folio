import { Heart, Calendar, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface Volunteering {
  id: string;
  title: string;
  organization: string;
  location?: string;
  start_date: string;
  end_date?: string;
  is_current: boolean;
  description?: string;
  sort_order: number;
}

interface VolunteeringSectionProps {
  volunteering: Volunteering[];
}

const VolunteeringSection = ({ volunteering }: VolunteeringSectionProps) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
  };

  if (volunteering.length === 0) {
    return null;
  }

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
          Community Involvement
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Giving back to the community through volunteer work and social impact initiatives.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-secondary via-primary to-secondary opacity-60"></div>

          {volunteering.map((vol, index) => (
            <div 
              key={vol.id} 
              className="relative mb-12 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Timeline Dot */}
              <div className="absolute left-6 w-4 h-4 bg-secondary rounded-full border-4 border-background shadow-lg">
                <Heart className="w-2 h-2 text-background absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
              </div>

              {/* Content */}
              <div className="ml-16 glass p-6 rounded-lg">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-1">
                      {vol.title}
                    </h3>
                    <p className="text-lg text-secondary font-medium mb-2">
                      {vol.organization}
                    </p>
                  </div>
                  
                  <div className="flex flex-col md:items-end text-sm text-muted-foreground">
                    <div className="flex items-center gap-1 mb-1">
                      <Calendar className="w-4 h-4" />
                      <span>
                        {formatDate(vol.start_date)} - {
                          vol.is_current ? "Present" : 
                          vol.end_date ? formatDate(vol.end_date) : "Present"
                        }
                      </span>
                    </div>
                    {vol.location && (
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{vol.location}</span>
                      </div>
                    )}
                  </div>
                </div>

                {vol.is_current && (
                  <div className="mb-3">
                    <Badge variant="secondary" className="text-xs">
                      Currently Active
                    </Badge>
                  </div>
                )}

                {vol.description && (
                  <p className="text-muted-foreground leading-relaxed">
                    {vol.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VolunteeringSection;