
import { Briefcase, Star, Award } from "lucide-react";

const DashboardPage = () => {
  // Placeholder data - in a real app, you'd fetch this from an API
  const stats = [
    { title: "Projects", value: 12, icon: <Briefcase className="h-8 w-8 text-slate-500" /> },
    { title: "Skills", value: 25, icon: <Star className="h-8 w-8 text-slate-500" /> },
    { title: "Certifications", value: 5, icon: <Award className="h-8 w-8 text-slate-500" /> },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold text-slate-800 mb-8">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500">{stat.title}</p>
              <p className="text-3xl font-bold text-slate-900">{stat.value}</p>
            </div>
            {stat.icon}
          </div>
        ))}
      </div>
       <div className="mt-8 bg-white p-8 rounded-lg shadow-sm">
        <h2 className="text-xl font-semibold text-slate-800 mb-4">Welcome back!</h2>
        <p className="text-slate-600">
          This is your central hub for managing your portfolio content. You can add, edit, and remove content using the navigation on the left.
        </p>
      </div>
    </div>
  );
};

export default DashboardPage;
