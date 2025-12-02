import { Routes, Route, Navigate } from "react-router-dom";
import AppShell from "./layouts/AppShell";

import DashboardPage from "./pages/DashboardPage";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import SuppliersPage from "./pages/SuppliersPage";
import LedgerPage from "./pages/LedgerPage";
import { ReportsPage } from "./pages/ReportsPage";
import SettingsPage from "./pages/SettingsPage";
import LoginPage from "./pages/LoginPage";
import OnboardingPage from "./pages/OnboardingPage";
import ProductPassportDasaniPage from "./pages/ProductPassportDasaniPage";
import ConsumerScanDasaniPage from "./pages/ConsumerScanDasaniPage";

function App() {
  return (
    <Routes>
      {/* Public / unauthenticated routes */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/onboarding" element={<OnboardingPage />} />
      <Route path="/consumer/dasani-600ml" element={<ConsumerScanDasaniPage />} />

      {/* Authenticated routes using AppShell layout */}
      <Route element={<AppShell />}>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />

        <Route path="/dashboard" element={<DashboardPage />} />

        {/* Products list */}
        <Route path="/products" element={<ProductsPage />} />

        {/* NEW: Product detail route */}
        <Route path="/products/:gtin" element={<ProductDetailPage />} />

        <Route path="/suppliers" element={<SuppliersPage />} />
        <Route path="/ledger" element={<LedgerPage />} />
        <Route path="/reports" element={<ReportsPage />} />
        <Route path="/settings" element={<SettingsPage />} />

        <Route
          path="/product-passport/dasani-600ml"
          element={<ProductPassportDasaniPage />}
        />
      </Route>

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  );
}

export default App;
