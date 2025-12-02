import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import {
  LayoutDashboard,
  Package,
  Users,
  FileText,
  BarChart3,
  Settings,
  Search,
  Bell,
  Menu,
  X,
} from "lucide-react";

type NavItem = {
  name: string;
  to: string;
  icon: React.ReactNode;
};

const navItems: NavItem[] = [
  { name: "Dashboard", to: "/dashboard", icon: <LayoutDashboard className="w-5 h-5" /> },
  { name: "Products", to: "/products", icon: <Package className="w-5 h-5" /> },
  { name: "Suppliers", to: "/suppliers", icon: <Users className="w-5 h-5" /> },
  { name: "Ledger", to: "/ledger", icon: <FileText className="w-5 h-5" /> },
  { name: "Reports", to: "/reports", icon: <BarChart3 className="w-5 h-5" /> },
  { name: "Settings", to: "/settings", icon: <Settings className="w-5 h-5" /> },
];

const AppShell: React.FC = () => {
  const [mobileNavOpen, setMobileNavOpen] = React.useState(false);

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[#F9FAFB]">
      {/* LEFT SIDEBAR (desktop only) */}
      <aside className="hidden lg:flex w-60 bg-white border-r border-[#E5E7EB] flex-col">
        {/* Sidebar Header */}
        <div className="h-[88px] px-6 border-b border-[#E5E7EB] flex flex-col justify-center">
          <div className="flex items-center gap-2">
            <p className="font-['Familjen_Grotesk',sans-serif] font-bold text-[25.6px] leading-normal">
              <span className="text-[#EFBC02]">Q</span>
              <span className="text-[#01416C]">ode</span>
              <span className="text-[#E92E16]">+</span>
            </p>
          </div>
          <p className="mt-1 text-[11px] leading-snug text-[#6B7280]">
            Impact Ledger for GS1 2D barcodes
          </p>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => (
              <NavLink key={item.name} to={item.to}>
                {({ isActive }) => (
                  <button
                    type="button"
                    className={`group flex items-center gap-3 px-4 py-3 rounded-lg transition-all relative w-full text-left ${
                      isActive
                        ? "bg-[#EFF6FF] text-[#05466C] font-medium"
                        : "text-[#6B7280] hover:bg-[#F3F4F6]"
                    }`}
                  >
                    {isActive && (
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-[#05466C] rounded-r" />
                    )}
                    <span className={isActive ? "text-[#05466C]" : "text-[#9CA3AF]"}>
                      {item.icon}
                    </span>
                    <span>{item.name}</span>
                  </button>
                )}
              </NavLink>
            ))}
          </div>
        </nav>

        {/* Sidebar Footer */}
        <div className="p-6 border-t border-[#E5E7EB]">
          <div className="text-xs text-[#9CA3AF]">
            <div>Version 2.4.1</div>
            <div className="mt-1">© 2025 Qode+</div>
          </div>
        </div>
      </aside>

      {/* MAIN AREA */}
      <div className="flex-1 flex flex-col overflow-hidden relative">
        {/* TOP BAR */}
        <header className="bg-white h-[88px] border-b border-[#E5E7EB] flex items-center px-4 lg:px-6">
          <div className="flex items-center w-full gap-3">
            
            {/* LEFT CLUSTER — now full stretch */}
            <div className="flex items-center gap-3 flex-1">
              {/* Mobile menu */}
              <button
                type="button"
                className="lg:hidden flex items-center justify-center w-9 h-9 rounded-lg hover:bg-[#F3F4F6] transition-colors"
                onClick={() => setMobileNavOpen(true)}
              >
                <Menu className="w-5 h-5 text-[#4B5563]" />
              </button>

              {/* Mobile logo */}
              <div className="lg:hidden flex items-center gap-1">
                <p className="font-['Familjen_Grotesk',sans-serif] font-bold text-[20px]">
                  <span className="text-[#EFBC02]">Q</span>
                  <span className="text-[#01416C]">ode</span>
                  <span className="text-[#E92E16]">+</span>
                </p>
              </div>

              {/* Desktop search — full width */}
              <div className="hidden md:flex bg-neutral-100 h-[34px] rounded-[6px] flex-1 border border-neutral-200 items-center px-3">
                <Search className="w-4 h-4 text-neutral-500 mr-2" />
                <input
                  type="text"
                  placeholder="Search products, suppliers, reports..."
                  className="flex-1 bg-transparent border-none outline-none text-[14px] text-neutral-700 placeholder:text-neutral-500"
                />
              </div>
            </div>

            {/* RIGHT CLUSTER — stays fixed width */}
            <div className="flex items-center gap-6">
              {/* Bell */}
              <button
                type="button"
                className="relative flex items-center justify-center w-9 h-9 rounded-lg hover:bg-[#F3F4F6] transition-colors"
              >
                <div className="relative flex items-center justify-center">
                  <Bell className="w-5 h-5 text-[#6B7280]" />
                  <span className="absolute -top-[2px] -right-[2px] w-[6px] h-[6px] rounded-full bg-[#EB121E]" />
                </div>
              </button>

              {/* User (desktop) */}
              <div className="hidden sm:flex items-center gap-3">
                <div className="flex flex-col items-end">
                  <span className="text-sm font-medium text-gray-900">Sarah Chen</span>
                  <span className="text-xs text-gray-500">ESG Manager</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#F0B82E] flex items-center justify-center">
                  <span className="text-[#05466C] font-medium text-sm">SC</span>
                </div>
              </div>

              {/* User avatar (mobile) */}
              <div className="sm:hidden w-9 h-9 rounded-full bg-[#F0B82E] flex items-center justify-center">
                <span className="text-[#05466C] font-medium text-xs">SC</span>
              </div>
            </div>
          </div>
        </header>

        {/* MOBILE SEARCH BAR */}
        <div className="md:hidden bg-white border-b border-[#E5E7EB] px-4 py-3">
          <div className="bg-neutral-100 h-[34px] rounded-[6px] w-full border border-neutral-200 flex items-center px-3">
            <Search className="w-4 h-4 text-neutral-500 mr-2" />
            <input
              type="text"
              placeholder="Search products, suppliers, reports..."
              className="flex-1 bg-transparent border-none outline-none text-[14px] text-neutral-700 placeholder:text-neutral-500"
            />
          </div>
        </div>

        {/* MOBILE NAV OVERLAY */}
        {mobileNavOpen && (
          <div className="fixed inset-0 z-40 lg:hidden">
            <div
              className="absolute inset-0 bg-black/40"
              onClick={() => setMobileNavOpen(false)}
            />
            <div className="relative bg-white w-64 max-w-[80%] h-full shadow-xl flex flex-col">
              <div className="h-[64px] px-4 border-b border-[#E5E7EB] flex items-center justify-between">
                <p className="font-['Familjen_Grotesk',sans-serif] font-bold text-[20px]">
                  <span className="text-[#EFBC02]">Q</span>
                  <span className="text-[#01416C]">ode</span>
                  <span className="text-[#E92E16]">+</span>
                </p>
                <button
                  type="button"
                  onClick={() => setMobileNavOpen(false)}
                  className="p-2 rounded-lg hover:bg-[#F3F4F6]"
                >
                  <X className="w-5 h-5 text-[#4B5563]" />
                </button>
              </div>

              <nav className="flex-1 p-4">
                <div className="flex flex-col gap-1">
                  {navItems.map((item) => (
                    <NavLink key={item.name} to={item.to}>
                      {({ isActive }) => (
                        <button
                          type="button"
                          onClick={() => setMobileNavOpen(false)}
                          className={`flex items-center gap-3 px-3 py-3 rounded-lg w-full text-left ${
                            isActive
                              ? "bg-[#EFF6FF] text-[#05466C] font-medium"
                              : "text-[#6B7280] hover:bg-[#F3F4F6]"
                          }`}
                        >
                          <span className={isActive ? "text-[#05466C]" : "text-[#9CA3AF]"}>
                            {item.icon}
                          </span>
                          <span>{item.name}</span>
                        </button>
                      )}
                    </NavLink>
                  ))}
                </div>
              </nav>
            </div>
          </div>
        )}

        {/* PAGE CONTENT */}
        <main className="flex-1 overflow-auto bg-[#F9FAFB]">
          <div className="p-4 lg:p-8">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default AppShell;
