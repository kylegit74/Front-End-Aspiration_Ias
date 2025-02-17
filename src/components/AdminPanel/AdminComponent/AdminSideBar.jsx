import React from "react";
import { Home, Info, BookOpen, MessageCircle, Settings, LogOut } from "lucide-react";

function AdminSidebar() {
  const menuItems = [
    { icon: Home, label: "Home", href: "/admin/home" },
    { icon: BookOpen, label: "Inspiration", href: "/admin/inspiration" },
    { icon: Info, label: "About", href: "/admin/about" },
    { icon: MessageCircle, label: "Contact", href: "/admin/contact" },
    { icon: Settings, label: "Settings", href: "/settings" },
  ];

  return (
    <div className="h-screen w-[15%]  fixed  bg-gradient-to-b from-purple-800 to-indigo-900 text-white p-6 flex flex-col">
      <div className="mb-8">
        <h1 className="text-2xl font-bold tracking-wider">InspirationAI</h1>
        <p className="text-purple-200 text-sm mt-1">Admin Dashboard</p>
      </div>

      <nav className="flex-1">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/10 transition-colors duration-200"
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="border-t border-white/10 pt-4 mt-6">
        <button className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/10 transition-colors duration-200 w-full text-red-300 hover:text-red-200">
          <LogOut className="w-5 h-5" />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </div>
  );
}

export default AdminSidebar;
