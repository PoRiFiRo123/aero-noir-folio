import { Award, ExternalLink, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Certification {
  id: string;
  title: string;
  issuer: string;
  issue_date?: string;
  expiry_date?: string;
  credential_url?: string;
  image_url?: string;
  sort_order: number;
}

interface CertificationsSectionProps {
  certifications: Certification[];
}

const CertificationsSection = ({ certifications }: CertificationsSectionProps) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
  };

  const isExpired = (expiryDate: string) => {
    return new Date(expiryDate) < new Date();
  };

  if (certifications.length === 0) {
    return null;
  }

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
          Certifications
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Professional certifications that validate my expertise and commitment to continuous learning.
        </p>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <Card 
              key={cert.id} 
              className="glass card-hover animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0">
                    {cert.image_url ? (
                      <img
                        src={cert.image_url}
                        alt={cert.issuer}
                        className="w-10 h-10 rounded object-cover"
                      />
                    ) : (
                      <div className="w-10 h-10 bg-primary/20 rounded flex items-center justify-center">
                        <Award className="w-5 h-5 text-primary" />
                      </div>
                    )}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <CardTitle className="text-lg font-semibold leading-tight">
                      {cert.title}
                    </CardTitle>
                    <p className="text-primary font-medium mt-1">
                      {cert.issuer}
                    </p>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="space-y-3">
                  {cert.issue_date && (
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>Issued: {formatDate(cert.issue_date)}</span>
                    </div>
                  )}

                  {cert.expiry_date && (
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span>Expires: {formatDate(cert.expiry_date)}</span>
                      </div>
                      
                      <Badge 
                        variant={isExpired(cert.expiry_date) ? "destructive" : "secondary"}
                        className="text-xs"
                      >
                        {isExpired(cert.expiry_date) ? "Expired" : "Valid"}
                      </Badge>
                    </div>
                  )}

                  {cert.credential_url && (
                    <Button variant="outline" size="sm" className="w-full" asChild>
                      <a href={cert.credential_url} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Credential
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CertificationsSection;