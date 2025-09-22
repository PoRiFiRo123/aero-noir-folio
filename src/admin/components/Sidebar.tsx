import { NavLink } from "react-router-dom";
import { Home, User, Briefcase, Star, GraduationCap, Award, Heart, Mail, Image } from "lucide-react";

const Sidebar = () => {
  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `flex items-center px-4 py-2 text-sm font-medium rounded-lg ${
      isActive
        ? "bg-slate-100 text-slate-900"
        : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
    }`;

  return (
    <div className="flex flex-col h-full bg-white shadow-sm border-r border-slate-200 w-64 flex-shrink-0">
      <div className="p-4 py-6">
        <h1 className="text-lg font-semibold text-slate-800 px-2">Admin Panel</h1>
      </div>
      <nav className="flex-1 px-4 pb-4 space-y-1">
        <NavLink to="/admin/dashboard" className={navLinkClasses}>
          <Home className="h-5 w-5 mr-3" />
          Dashboard
        </NavLink>
        <NavLink to="/admin/profile" className={navLinkClasses}>
          <User className="h-5 w-5 mr-3" />
          Profile
        </NavLink>
        <NavLink to="/admin/projects" className={navLinkClasses}>
          <Briefcase className="h-5 w-5 mr-3" />
          Projects
        </NavLink>
        <NavLink to="/admin/experience" className={navLinkClasses}>
          <Briefcase className="h-5 w-5 mr-3" />
          Experience
        </NavLink>
        <NavLink to="/admin/skills" className={navLinkClasses}>
          <Star className="h-5 w-5 mr-3" />
          Skills
        </NavLink>
        <NavLink to="/admin/education" className={navLinkClasses}>
          <GraduationCap className="h-5 w-5 mr-3" />
          Education
        </NavLink>
        <NavLink to="/admin/certifications" className={navLinkClasses}>
          <Award className="h-5 w-5 mr-3" />
          Certifications
        </NavLink>
        <NavLink to="/admin/volunteering" className={navLinkClasses}>
          <Heart className="h-5 w-5 mr-3" />
          Volunteering
        </NavLink>
        <NavLink to="/admin/contacts" className={navLinkClasses}>
          <Mail className="h-5 w-5 mr-3" />
          Contacts
        </NavLink>
        <NavLink to="/admin/media" className={navLinkClasses}>
          <Image className="h-5 w-5 mr-3" />
          Media
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
