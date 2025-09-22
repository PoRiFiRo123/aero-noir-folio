
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import LoginPage from "./pages/admin/LoginPage";
import DashboardPage from "./pages/admin/DashboardPage";
import ProtectedRoute from "./admin/ProtectedRoute";
import AdminLayout from "./admin/components/AdminLayout";
import ProfilePage from "./admin/pages/ProfilePage";
import ProjectsPage from "./admin/pages/ProjectsPage";
import ExperiencePage from "./admin/pages/ExperiencePage";
import SkillsPage from "./admin/pages/SkillsPage";
import EducationPage from "./admin/pages/EducationPage";
import CertificationsPage from "./admin/pages/CertificationsPage";
import VolunteeringPage from "./admin/pages/VolunteeringPage";
import ContactsPage from "./admin/pages/ContactsPage";
import MediaManagerPage from "./admin/pages/MediaManagerPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/admin/login" element={<LoginPage />} />
          <Route
            path="/admin"
            element={<ProtectedRoute><AdminLayout /></ProtectedRoute>}
          >
            <Route index element={<Navigate to="dashboard" />} />
            <Route path="dashboard" element={<DashboardPage />} />
            <Route path="profile" element={<ProfilePage />} />
            <Route path="projects" element={<ProjectsPage />} />
            <Route path="experience" element={<ExperiencePage />} />
            <Route path="skills" element={<SkillsPage />} />
            <Route path="education" element={<EducationPage />} />
            <Route path="certifications" element={<CertificationsPage />} />
            <Route path="volunteering" element={<VolunteeringPage />} />
            <Route path="contacts" element={<ContactsPage />} />
            <Route path="media" element={<MediaManagerPage />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
