import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import EducationSection from "@/components/EducationSection";
import CertificationsSection from "@/components/CertificationsSection";
import VolunteeringSection from "@/components/VolunteeringSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

interface Profile {
  id: string;
  name: string;
  title: string;
  bio: string;
  avatar_url?: string;
  email?: string;
  phone?: string;
  location?: string;
}

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  github_url?: string;
  live_url?: string;
  image_url?: string;
  is_featured: boolean;
  sort_order: number;
}

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

interface Skill {
  id: string;
  name: string;
  category: 'frontend' | 'backend' | 'ai_ml' | 'tools' | 'other';
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  icon_url?: string;
  sort_order: number;
}

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

const Index = () => {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [projects, setProjects] = useState<Project[]>([]);
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [skills, setSkills] = useState<Skill[]>([]);
  const [education, setEducation] = useState<Education[]>([]);
  const [certifications, setCertifications] = useState<Certification[]>([]);
  const [volunteering, setVolunteering] = useState<Volunteering[]>([]);
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch profile
        const { data: profileData } = await supabase
          .from('profiles')
          .select('*')
          .single();
        
        if (profileData) setProfile(profileData);

        // Fetch projects
        const { data: projectsData } = await supabase
          .from('projects')
          .select('*')
          .order('sort_order', { ascending: true });
        
        if (projectsData) setProjects(projectsData);

        // Fetch experiences
        const { data: experiencesData } = await supabase
          .from('experiences')
          .select('*')
          .order('sort_order', { ascending: true });
        
        if (experiencesData) setExperiences(experiencesData);

        // Fetch skills
        const { data: skillsData } = await supabase
          .from('skills')
          .select('*')
          .order('sort_order', { ascending: true });
        
        if (skillsData) setSkills(skillsData);

        // Fetch education
        const { data: educationData } = await supabase
          .from('education')
          .select('*')
          .order('sort_order', { ascending: true });
        
        if (educationData) setEducation(educationData);

        // Fetch certifications
        const { data: certificationsData } = await supabase
          .from('certifications')
          .select('*')
          .order('sort_order', { ascending: true });
        
        if (certificationsData) setCertifications(certificationsData);

        // Fetch volunteering
        const { data: volunteeringData } = await supabase
          .from('volunteering')
          .select('*')
          .order('sort_order', { ascending: true });
        
        if (volunteeringData) setVolunteering(volunteeringData);

        // Fetch public contacts
        const { data: contactsData } = await supabase
          .from('contacts')
          .select('*')
          .eq('is_public', true)
          .order('sort_order', { ascending: true });
        
        if (contactsData) setContacts(contactsData);

      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      <section id="home">
        <HeroSection profile={profile} />
      </section>

      <section id="projects" className="py-20">
        <ProjectsSection projects={projects} />
      </section>

      <section id="experience" className="py-20">
        <ExperienceSection experiences={experiences} />
      </section>

      <section id="skills" className="py-20">
        <SkillsSection skills={skills} />
      </section>

      <section id="education" className="py-20">
        <EducationSection education={education} />
      </section>

      <section id="certifications" className="py-20">
        <CertificationsSection certifications={certifications} />
      </section>

      <section id="volunteering" className="py-20">
        <VolunteeringSection volunteering={volunteering} />
      </section>

      <section id="contact" className="py-20">
        <ContactSection contacts={contacts} />
      </section>

      <Footer contacts={contacts} />
    </main>
  );
};

export default Index;