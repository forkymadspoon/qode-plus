// src/pages/SuppliersPage.tsx

import React from "react";
import {
  Search,
  Plus,
  Eye,
  MoreVertical,
  Building2,
  AlertCircle,
  ShieldAlert,
} from "lucide-react";

// ---------- Types & Mock Data ----------

type Supplier = {
  id: number;
  name: string;
  gln: string;
  category: string;
  region: string;
  role: string;
  riskLevel: "Low" | "Moderate" | "High";
  certifications: string[];
  carbonContribution: string;
  status: "Active" | "On Watchlist" | "Suspended";
};

const mockSuppliers: Supplier[] = [
  {
    id: 1,
    name: "GreenFields Organic Co.",
    gln: "9521234567890",
    category: "FMCG – Food Suppliers",
    region: "Thailand",
    role: "Raw Materials",
    riskLevel: "Low",
    certifications: ["ISO 14001", "Organic"],
    carbonContribution: "8%",
    status: "Active",
  },
  {
    id: 2,
    name: "EcoCycle Solutions",
    gln: "9521234567891",
    category: "BCRS – Beverage Processing / Recycling",
    region: "Singapore",
    role: "Recycler",
    riskLevel: "Low",
    certifications: ["ISO 14001", "LEED"],
    carbonContribution: "5%",
    status: "Active",
  },
  {
    id: 3,
    name: "Natural Beauty Labs",
    gln: "9521234567892",
    category: "Beauty / Cosmetics",
    region: "South Korea",
    role: "Manufacturer",
    riskLevel: "Moderate",
    certifications: ["COSMOS", "GMP"],
    carbonContribution: "22%",
    status: "Active",
  },
  {
    id: 4,
    name: "PureDrink Bottling Inc.",
    gln: "9521234567893",
    category: "BCRS – Beverage Processing / Recycling",
    region: "Malaysia",
    role: "Processing Facility",
    riskLevel: "Low",
    certifications: ["HACCP", "ISO 14001"],
    carbonContribution: "12%",
    status: "Active",
  },
  {
    id: 5,
    name: "Global Grain Suppliers",
    gln: "9521234567894",
    category: "FMCG – Food Suppliers",
    region: "Vietnam",
    role: "Raw Materials",
    riskLevel: "High",
    certifications: [],
    carbonContribution: "19%",
    status: "On Watchlist",
  },
  {
    id: 6,
    name: "LuxCosmetics Manufacturing",
    gln: "9521234567895",
    category: "Beauty / Cosmetics",
    region: "France",
    role: "Manufacturer",
    riskLevel: "Low",
    certifications: ["COSMOS", "Ecocert", "GMP"],
    carbonContribution: "15%",
    status: "Active",
  },
  {
    id: 7,
    name: "Asia Pacific Distributors",
    gln: "9521234567896",
    category: "FMCG – Food Suppliers",
    region: "China",
    role: "Distributor",
    riskLevel: "Moderate",
    certifications: ["ISO 9001"],
    carbonContribution: "11%",
    status: "Active",
  },
  {
    id: 8,
    name: "BeautyBase Ingredients",
    gln: "9521234567897",
    category: "Beauty / Cosmetics",
    region: "Germany",
    role: "Raw Materials",
    riskLevel: "High",
    certifications: [],
    carbonContribution: "28%",
    status: "Suspended",
  },
  {
    id: 9,
    name: "CleanBottle Recycling",
    gln: "9521234567898",
    category: "BCRS – Beverage Processing / Recycling",
    region: "Japan",
    role: "Recycler",
    riskLevel: "Low",
    certifications: ["ISO 14001", "R2"],
    carbonContribution: "3%",
    status: "Active",
  },
  {
    id: 10,
    name: "Mediterranean Food Co.",
    gln: "9521234567899",
    category: "FMCG – Food Suppliers",
    region: "Italy",
    role: "Manufacturer",
    riskLevel: "Low",
    certifications: ["Organic", "Halal", "ISO 22000"],
    carbonContribution: "14%",
    status: "Active",
  },
];

// ---------- Helper Styling Functions ----------

function getCategoryColor(category: Supplier["category"]) {
  if (category.includes("FMCG")) return "bg-[#05466C] text-white";
  if (category.includes("BCRS")) return "bg-[#F0B82E] text-[#05466C]";
  if (category.includes("Beauty")) return "bg-[#FEE2E2] text-[#EB121E]";
  return "bg-gray-100 text-gray-700";
}

function getRiskLevelColor(level: Supplier["riskLevel"]) {
  if (level === "Low") return "bg-white text-[#05466C] border-[#05466C]";
  if (level === "Moderate")
    return "bg-[#FEF9E7] text-[#92400E] border-[#F0B82E]";
  if (level === "High") return "bg-[#FEE2E2] text-[#EB121E] border-[#EB121E]";
  return "bg-gray-100 text-gray-700 border-gray-200";
}

function getStatusColor(status: Supplier["status"]) {
  if (status === "Active")
    return "bg-[#EBF5F0] text-[#05466C] border-[#05466C]";
  if (status === "On Watchlist")
    return "bg-[#FEF9E7] text-[#92400E] border-[#F0B82E]";
  if (status === "Suspended")
    return "bg-[#FEE2E2] text-[#EB121E] border-[#EB121E]";
  return "bg-gray-100 text-gray-700 border-gray-200";
}

// ---------- Page Component ----------

const SuppliersPage: React.FC = () => {
  const totalSuppliers = mockSuppliers.length;
  const highRiskSuppliers = mockSuppliers.filter(
    (s) => s.riskLevel === "High"
  ).length;
  const missingCertifications = mockSuppliers.filter(
    (s) => s.certifications.length === 0
  ).length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div className="space-y-1">
          <h1 className="text-3xl font-extrabold text-gray-900">Suppliers</h1>
          <p className="text-gray-500 max-w-2xl text-sm sm:text-base">
            All suppliers contributing to FMCG food, BCRS beverage, and beauty
            product lifecycles.
          </p>
        </div>

        <button className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#05466C] text-white text-sm font-medium shadow-sm hover:bg-[#003C65] transition-colors w-full sm:w-auto">
          <Plus className="w-4 h-4" />
          Add Supplier
        </button>
      </div>

      {/* KPI cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
        {/* Total Suppliers */}
        <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm">
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 rounded-lg bg-[#EFF6FF] flex items-center justify-center">
              <Building2 className="w-6 h-6 text-[#05466C]" />
            </div>
          </div>
          <div className="text-3xl font-bold text-gray-900 mb-1">
            {totalSuppliers}
          </div>
          <div className="text-sm text-gray-500">Total Suppliers</div>
        </div>

        {/* High-Risk Suppliers */}
        <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm">
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 rounded-lg bg-[#FEE2E2] flex items-center justify-center">
              <ShieldAlert className="w-6 h-6 text-[#EB121E]" />
            </div>
          </div>
          <div className="text-3xl font-bold text-gray-900 mb-1">
            {highRiskSuppliers}
          </div>
          <div className="text-sm text-gray-500">High-Risk Suppliers</div>
        </div>

        {/* Missing Certifications */}
        <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm">
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 rounded-lg bg-[#FEF3C7] flex items-center justify-center">
              <AlertCircle className="w-6 h-6 text-[#F59E0B]" />
            </div>
          </div>
          <div className="text-3xl font-bold text-gray-900 mb-1">
            {missingCertifications}
          </div>
          <div className="text-sm text-gray-500">Missing Certifications</div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white border border-gray-100 rounded-xl p-4 lg:p-6 shadow-sm space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {/* Search */}
          <div className="sm:col-span-2">
            <div className="flex items-center gap-2 px-3 py-2 bg-[#F9FAFB] border border-[#E5E7EB] rounded-lg">
              <Search className="w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search supplier name, GLN, or region"
                className="flex-1 bg-transparent border-none outline-none text-sm text-gray-900 placeholder:text-gray-400"
              />
            </div>
          </div>

          {/* Region */}
          <div>
            <select className="w-full px-3 py-2 bg-[#F9FAFB] border border-[#E5E7EB] rounded-lg text-sm text-gray-900 outline-none">
              <option>All Regions</option>
              <option>Singapore</option>
              <option>China</option>
              <option>Thailand</option>
              <option>Malaysia</option>
              <option>Vietnam</option>
              <option>EU</option>
              <option>Other</option>
            </select>
          </div>

          {/* Category */}
          <div>
            <select className="w-full px-3 py-2 bg-[#F9FAFB] border border-[#E5E7EB] rounded-lg text-sm text-gray-900 outline-none">
              <option>All Categories</option>
              <option>FMCG – Food Suppliers</option>
              <option>BCRS – Beverage Processing / Recycling</option>
              <option>Beauty / Cosmetics</option>
            </select>
          </div>

          {/* Risk level */}
          <div>
            <select className="w-full px-3 py-2 bg-[#F9FAFB] border border-[#E5E7EB] rounded-lg text-sm text-gray-900 outline-none">
              <option>All Risk Levels</option>
              <option>Low</option>
              <option>Moderate</option>
              <option>High</option>
            </select>
          </div>
        </div>

        {/* Second row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {/* Certifications */}
          <div>
            <select className="w-full px-3 py-2 bg-[#F9FAFB] border border-[#E5E7EB] rounded-lg text-sm text-gray-900 outline-none">
              <option>All Certifications</option>
              <option>Certified</option>
              <option>Missing Certification</option>
              <option>Expired</option>
            </select>
          </div>

          {/* Status */}
          <div>
            <select className="w-full px-3 py-2 bg-[#F9FAFB] border border-[#E5E7EB] rounded-lg text-sm text-gray-900 outline-none">
              <option>All Status</option>
              <option>Active</option>
              <option>On Watchlist</option>
              <option>Suspended</option>
            </select>
          </div>

          {/* Sort */}
          <div>
            <select className="w-full px-3 py-2 bg-[#F9FAFB] border border-[#E5E7EB] rounded-lg text-sm text-gray-900 outline-none">
              <option>Most recent</option>
              <option>Highest risk</option>
              <option>Highest carbon contribution</option>
              <option>Alphabetical</option>
            </select>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="min-w-full lg:min-w-[1200px] text-sm">
            <thead className="bg-[#F9FAFB] border-b border-[#E5E7EB]">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Supplier
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Region
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Role
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Risk Level
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Certifications
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Carbon Contribution
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-4 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-[#E5E7EB]">
              {mockSuppliers.map((supplier) => (
                <tr
                  key={supplier.id}
                  className="hover:bg-[#F9FAFB] transition-colors"
                >
                  {/* Supplier */}
                  <td className="px-6 py-3 align-top">
                    <div className="flex flex-col gap-1">
                      <span className="font-medium text-gray-900 text-sm">
                        {supplier.name}
                      </span>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-xs text-gray-500">
                          {supplier.gln}
                        </span>
                        <span
                          className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${getCategoryColor(
                            supplier.category
                          )}`}
                        >
                          {supplier.category.split(" – ")[0]}
                        </span>
                      </div>
                    </div>
                  </td>

                  {/* Region */}
                  <td className="px-6 py-3 align-top">
                    <span className="text-sm text-gray-900">
                      {supplier.region}
                    </span>
                  </td>

                  {/* Role */}
                  <td className="px-6 py-3 align-top">
                    <span className="text-sm text-gray-500">
                      {supplier.role}
                    </span>
                  </td>

                  {/* Risk level */}
                  <td className="px-6 py-3 align-top">
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${getRiskLevelColor(
                        supplier.riskLevel
                      )}`}
                    >
                      {supplier.riskLevel}
                    </span>
                  </td>

                  {/* Certifications */}
                  <td className="px-6 py-3 align-top">
                    {supplier.certifications.length > 0 ? (
                      <div className="flex flex-wrap items-center gap-1">
                        {supplier.certifications.map((cert) => (
                          <span
                            key={cert}
                            className="inline-flex items-center px-2 py-0.5 rounded bg-[#EFF6FF] text-[#05466C] text-xs border border-[#05466C]/20"
                          >
                            {cert}
                          </span>
                        ))}
                      </div>
                    ) : (
                      <span className="text-xs text-gray-400 italic">
                        None
                      </span>
                    )}
                  </td>

                  {/* Carbon */}
                  <td className="px-6 py-3 align-top">
                    <span className="text-sm text-[#05466C] font-medium">
                      {supplier.carbonContribution}
                    </span>
                  </td>

                  {/* Status */}
                  <td className="px-6 py-3 align-top">
                    <span
                      className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium border ${getStatusColor(
                        supplier.status
                      )}`}
                    >
                      {supplier.status}
                    </span>
                  </td>

                  {/* Actions */}
                  <td className="px-6 py-3 align-top">
                    <div className="flex items-center justify-center gap-2">
                      <button
                        className="p-2 hover:bg-[#F3F4F6] rounded-lg transition-colors"
                        title="View"
                      >
                        <Eye className="w-4 h-4 text-gray-500" />
                      </button>
                      <button
                        className="p-2 hover:bg-[#F3F4F6] rounded-lg transition-colors"
                        title="More"
                      >
                        <MoreVertical className="w-4 h-4 text-gray-500" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="px-4 lg:px-6 py-4 border-t border-[#E5E7EB] flex flex-col sm:flex-row items-center justify-between gap-4 bg-white">
          <span className="text-sm text-gray-500">
            Showing 1-{mockSuppliers.length} of {mockSuppliers.length} suppliers
          </span>
          <div className="flex items-center gap-2">
            <button className="px-3 py-1 border border-[#E5E7EB] rounded-lg text-sm text-gray-600 hover:bg-[#F9FAFB] transition-colors">
              Previous
            </button>
            <button className="px-3 py-1 bg-[#05466C] text-white rounded-lg text-sm">
              1
            </button>
            <button className="px-3 py-1 border border-[#E5E7EB] rounded-lg text-sm text-gray-600 hover:bg-[#F9FAFB] transition-colors">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuppliersPage;
