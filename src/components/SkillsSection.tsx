import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

interface Skill {
  id: string;
  name: string;
  category: 'frontend' | 'backend' | 'ai_ml' | 'tools' | 'other';
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  icon_url?: string;
  sort_order: number;
}

interface SkillsSectionProps {
  skills: Skill[];
}

const SkillsSection = ({ skills }: SkillsSectionProps) => {
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  const categoryNames = {
    frontend: "Frontend",
    backend: "Backend",
    ai_ml: "AI/ML",
    tools: "Tools",
    other: "Other"
  };

  const getLevelPercentage = (level: string) => {
    switch (level) {
      case 'beginner': return 25;
      case 'intermediate': return 50;
      case 'advanced': return 75;
      case 'expert': return 100;
      default: return 0;
    }
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'beginner': return 'text-yellow-500';
      case 'intermediate': return 'text-blue-500';
      case 'advanced': return 'text-green-500';
      case 'expert': return 'text-purple-500';
      default: return 'text-gray-500';
    }
  };

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
          Skills & Expertise
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Technologies and tools I work with to bring ideas to life.
        </p>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(groupedSkills).map(([category, categorySkills], index) => (
            <div 
              key={category} 
              className="glass p-6 rounded-lg animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-semibold mb-6 text-center">
                <span className="gradient-text">
                  {categoryNames[category as keyof typeof categoryNames]}
                </span>
              </h3>

              <div className="space-y-4">
                {categorySkills.map((skill) => (
                  <div key={skill.id} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-foreground">
                        {skill.name}
                      </span>
                      <Badge 
                        variant="secondary" 
                        className={`text-xs ${getLevelColor(skill.level)}`}
                      >
                        {skill.level}
                      </Badge>
                    </div>
                    
                    <Progress 
                      value={getLevelPercentage(skill.level)} 
                      className="h-2"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Skills Cloud */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-8 gradient-text">
            Technology Stack
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <Badge 
                key={skill.id}
                variant="outline"
                className={`text-sm py-2 px-4 hover-scale transition-spring ${getLevelColor(skill.level)}`}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {skill.name}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;