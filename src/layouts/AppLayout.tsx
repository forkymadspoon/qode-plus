import { NavLink, Outlet } from "react-router-dom";

const navItems = [
  { to: "/dashboard", label: "Dashboard" },
  { to: "/products", label: "Products" },
  { to: "/suppliers", label: "Suppliers" },
  { to: "/ledger", label: "Impact Ledger" },
  { to: "/reports", label: "Reports" },
  { to: "/settings", label: "Settings" },
];

export default function AppLayout() {
  return (
    <div className="flex h-screen bg-slate-50">
      {/* Sidebar (desktop) */}
      <aside className="hidden md:flex w-64 flex-col border-r bg-white">
        <div className="px-6 py-4 border-b">
          <div className="text-2xl font-bold text-slate-900">
            Qode<span className="text-yellow-500">+</span>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Impact Ledger for GS1 2D barcodes
          </p>
        </div>
        <nav className="flex-1 px-3 py-4 space-y-1">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                [
                  "flex items-center px-3 py-2 rounded-lg text-sm font-medium",
                  isActive
                    ? "bg-slate-100 text-slate-900"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900",
                ].join(" ")
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </aside>

      {/* Main content area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top bar */}
        <header className="h-14 border-b bg-white flex items-center justify-between px-4 md:px-6">
          <div className="md:hidden font-semibold">
            Qode<span className="text-yellow-500">+</span>
          </div>
          <div className="text-sm text-slate-500">Qode+ Impact Ledger</div>
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-slate-300" />
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
