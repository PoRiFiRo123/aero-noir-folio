-- Create profiles table for hero/bio information
CREATE TABLE public.profiles (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  title TEXT NOT NULL,
  bio TEXT,
  avatar_url TEXT,
  banner_url TEXT,
  email TEXT,
  phone TEXT,
  location TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create projects table
CREATE TABLE public.projects (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  technologies TEXT[], -- Array of tech names
  github_url TEXT,
  live_url TEXT,
  image_url TEXT,
  sort_order INTEGER DEFAULT 0,
  is_featured BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create experiences table
CREATE TABLE public.experiences (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  company TEXT NOT NULL,
  location TEXT,
  start_date DATE NOT NULL,
  end_date DATE,
  is_current BOOLEAN DEFAULT false,
  description TEXT,
  technologies TEXT[],
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create skills table with categories and levels
CREATE TYPE skill_level AS ENUM ('beginner', 'intermediate', 'advanced', 'expert');
CREATE TYPE skill_category AS ENUM ('frontend', 'backend', 'ai_ml', 'tools', 'other');

CREATE TABLE public.skills (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  category skill_category NOT NULL,
  level skill_level NOT NULL,
  icon_url TEXT,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create education table
CREATE TABLE public.education (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  degree TEXT NOT NULL,
  institution TEXT NOT NULL,
  location TEXT,
  gpa TEXT,
  start_year INTEGER,
  end_year INTEGER,
  is_current BOOLEAN DEFAULT false,
  description TEXT,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create certifications table
CREATE TABLE public.certifications (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  issuer TEXT NOT NULL,
  issue_date DATE,
  expiry_date DATE,
  credential_url TEXT,
  image_url TEXT,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create volunteering table
CREATE TABLE public.volunteering (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  organization TEXT NOT NULL,
  location TEXT,
  start_date DATE NOT NULL,
  end_date DATE,
  is_current BOOLEAN DEFAULT false,
  description TEXT,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create contacts table for public/private contact info
CREATE TABLE public.contacts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  label TEXT NOT NULL,
  value TEXT NOT NULL,
  type TEXT NOT NULL, -- 'email', 'phone', 'social', 'website'
  icon TEXT, -- Icon name or URL
  is_public BOOLEAN DEFAULT true,
  is_primary BOOLEAN DEFAULT false,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create contact messages table for form submissions
CREATE TABLE public.contact_messages (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT,
  message TEXT NOT NULL,
  is_read BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security for all tables
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.experiences ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.skills ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.education ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.certifications ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.volunteering ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

-- Create public read policies for portfolio data
CREATE POLICY "Public read access" ON public.profiles FOR SELECT USING (true);
CREATE POLICY "Public read access" ON public.projects FOR SELECT USING (true);
CREATE POLICY "Public read access" ON public.experiences FOR SELECT USING (true);
CREATE POLICY "Public read access" ON public.skills FOR SELECT USING (true);
CREATE POLICY "Public read access" ON public.education FOR SELECT USING (true);
CREATE POLICY "Public read access" ON public.certifications FOR SELECT USING (true);
CREATE POLICY "Public read access" ON public.volunteering FOR SELECT USING (true);
CREATE POLICY "Public read access" ON public.contacts FOR SELECT USING (is_public = true);

-- Admin can do everything (we'll handle admin auth in the app)
CREATE POLICY "Admin full access" ON public.profiles FOR ALL USING (true);
CREATE POLICY "Admin full access" ON public.projects FOR ALL USING (true);
CREATE POLICY "Admin full access" ON public.experiences FOR ALL USING (true);
CREATE POLICY "Admin full access" ON public.skills FOR ALL USING (true);
CREATE POLICY "Admin full access" ON public.education FOR ALL USING (true);
CREATE POLICY "Admin full access" ON public.certifications FOR ALL USING (true);
CREATE POLICY "Admin full access" ON public.volunteering FOR ALL USING (true);
CREATE POLICY "Admin full access" ON public.contacts FOR ALL USING (true);
CREATE POLICY "Admin full access" ON public.contact_messages FOR ALL USING (true);

-- Anyone can insert contact messages
CREATE POLICY "Anyone can insert contact messages" ON public.contact_messages FOR INSERT WITH CHECK (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create triggers for automatic timestamp updates
CREATE TRIGGER update_profiles_updated_at BEFORE UPDATE ON public.profiles FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_projects_updated_at BEFORE UPDATE ON public.projects FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_experiences_updated_at BEFORE UPDATE ON public.experiences FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_skills_updated_at BEFORE UPDATE ON public.skills FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_education_updated_at BEFORE UPDATE ON public.education FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_certifications_updated_at BEFORE UPDATE ON public.certifications FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_volunteering_updated_at BEFORE UPDATE ON public.volunteering FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_contacts_updated_at BEFORE UPDATE ON public.contacts FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- Insert sample profile data
INSERT INTO public.profiles (name, title, bio, email, phone, location) VALUES (
  'Aryan',
  'AI Engineer & Full-Stack Developer',
  'Passionate about building innovative AI solutions and creating seamless user experiences. I specialize in machine learning, web development, and turning complex problems into elegant solutions.',
  'aryan@example.com',
  '+1 (555) 123-4567',
  'San Francisco, CA'
);

-- Insert sample data for demo purposes
INSERT INTO public.projects (title, description, technologies, github_url, live_url, sort_order, is_featured) VALUES
('AI-Powered Portfolio Generator', 'An intelligent system that automatically generates personalized portfolios using machine learning and natural language processing.', ARRAY['Python', 'TensorFlow', 'React', 'Node.js'], 'https://github.com/aryan/ai-portfolio', 'https://ai-portfolio.demo', 1, true),
('Smart Task Manager', 'A productivity app with AI-driven task prioritization and intelligent scheduling features.', ARRAY['Next.js', 'TypeScript', 'PostgreSQL', 'OpenAI API'], 'https://github.com/aryan/smart-tasks', 'https://smart-tasks.demo', 2, true),
('Real-time Analytics Dashboard', 'A comprehensive analytics platform with live data visualization and predictive insights.', ARRAY['React', 'D3.js', 'Python', 'FastAPI'], 'https://github.com/aryan/analytics-dash', 'https://analytics.demo', 3, false);

INSERT INTO public.experiences (title, company, location, start_date, end_date, is_current, description, technologies, sort_order) VALUES
('Senior AI Engineer', 'TechCorp Inc.', 'San Francisco, CA', '2023-01-01', NULL, true, 'Leading AI initiatives and developing machine learning models for production systems. Built scalable ML pipelines and improved model performance by 40%.', ARRAY['Python', 'TensorFlow', 'Docker', 'AWS'], 1),
('Full-Stack Developer', 'StartupXYZ', 'Remote', '2021-06-01', '2022-12-31', false, 'Developed end-to-end web applications and implemented microservices architecture. Collaborated with cross-functional teams to deliver high-quality products.', ARRAY['React', 'Node.js', 'MongoDB', 'GraphQL'], 2);

INSERT INTO public.skills (name, category, level, sort_order) VALUES
('Python', 'backend', 'expert', 1),
('JavaScript', 'frontend', 'expert', 2),
('React', 'frontend', 'expert', 3),
('TensorFlow', 'ai_ml', 'advanced', 4),
('Node.js', 'backend', 'advanced', 5),
('PostgreSQL', 'backend', 'advanced', 6),
('Docker', 'tools', 'intermediate', 7),
('AWS', 'tools', 'intermediate', 8);

INSERT INTO public.education (degree, institution, location, gpa, start_year, end_year, sort_order) VALUES
('Master of Science in Computer Science', 'Stanford University', 'Stanford, CA', '3.9/4.0', 2019, 2021, 1),
('Bachelor of Technology in Computer Engineering', 'MIT', 'Cambridge, MA', '3.8/4.0', 2015, 2019, 2);

INSERT INTO public.contacts (label, value, type, icon, is_public, is_primary, sort_order) VALUES
('Email', 'aryan@example.com', 'email', 'Mail', true, true, 1),
('LinkedIn', 'linkedin.com/in/aryan', 'social', 'Linkedin', true, false, 2),
('GitHub', 'github.com/aryan', 'social', 'Github', true, false, 3),
('Twitter', 'twitter.com/aryan', 'social', 'Twitter', true, false, 4);