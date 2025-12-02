import React from "react";
import {
  Package,
  TrendingUp,
  FileWarning,
  Search,
  Upload,
  Download,
  ChevronDown,
  Eye,
  MoreVertical,
} from "lucide-react";
import { Link } from "react-router-dom";
import { products } from "../data/products";
import type { Product } from "../data/products";

// ---------------------
//  Helper Styling
// ---------------------

function getCategoryColor(category: Product["category"]) {
  if (category.includes("FMCG")) return "bg-[#05466C] text-white";
  if (category.includes("BCRS")) return "bg-[#F0B82E] text-[#05466C]";
  if (category.includes("Beauty")) return "bg-[#FEE2E2] text-[#EB121E]";
  return "bg-gray-100 text-gray-700";
}

function getImpactScoreColor(score: Product["impactScore"]) {
  if (score === "A") return "bg-[#05466C] text-white border-[#05466C]";
  if (score === "B") return "bg-[#F1C75E] text-[#05466C] border-[#F0B82E]";
  if (score === "C") return "bg-[#FEF3C7] text-[#92400E] border-[#F59E0B]";
  if (score === "D") return "bg-[#FEE2E2] text-[#EB121E] border-[#EB121E]";
  return "bg-gray-100 text-gray-700 border-gray-200";
}

function getComplianceColor(compliance: Product["compliance"]) {
  if (compliance === "Compliant")
    return "bg-[#EBF5F0] text-[#05466C] border-[#05466C]";
  if (compliance === "Missing Data")
    return "bg-[#FEF9E7] text-[#92400E] border-[#F0B82E]";
  if (compliance === "Non-Compliant")
    return "bg-[#FEE2E2] text-[#EB121E] border-[#EB121E]";
  return "bg-gray-100 text-gray-700 border-gray-200";
}

// ---------------------
//   Products Page
// ---------------------

export function ProductsPage() {
  const [isActionsOpen, setIsActionsOpen] = React.useState(false);

  const totalProducts = products.length;
  const highImpactProducts = products.filter(
    (p) => p.impactScore === "C" || p.impactScore === "D"
  ).length;
  const missingDataProducts = products.filter(
    (p) => p.compliance === "Missing Data"
  ).length;

  return (
    <div className="w-full bg-[#F9FAFB]">
      <div className="max-w-6xl mx-auto px-4 py-4 sm:px-6 sm:py-6 lg:px-8 lg:py-8">

        {/* -----------------------------------------
             Page Header
        ------------------------------------------ */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6 sm:mb-8">
          <div className="flex flex-col gap-2">
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#111827]">
              Products
            </h1>

            <p className="text-sm sm:text-base text-[#6B7280] max-w-xl">
              All FMCG food items, BCRS beverage containers, and beauty products
              with sustainability and compliance data.
            </p>
          </div>

          {/* -----------------------------------------
               BUTTON GROUP (Add Product FIRST)
          ------------------------------------------ */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">

            {/* Add Product — placed FIRST */}
            <button
              type="button"
              className="flex items-center justify-center gap-2 px-5 py-2.5 bg-[#05466C] text-white rounded-lg hover:bg-[#003C65] text-sm font-medium"
            >
              <Package className="w-4 h-4" />
              Add Product
            </button>

            {/* Actions */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsActionsOpen((open) => !open)}
                className="flex items-center justify-center gap-2 px-5 py-2.5 bg-white text-[#05466C] border border-[#E5E7EB] rounded-lg hover:bg-[#F9FAFB] text-sm font-medium"
              >
                Actions
                <ChevronDown className="w-4 h-4" />
              </button>

              {isActionsOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white border border-[#E5E7EB] rounded-lg shadow-lg z-20">
                  <div className="py-1">
                    <button className="w-full px-4 py-2.5 text-left text-sm hover:bg-[#F9FAFB] flex items-center gap-3 text-[#111827]">
                      <Upload className="w-4 h-4 text-[#6B7280]" />
                      Import Products
                    </button>
                    <button className="w-full px-4 py-2.5 text-left text-sm hover:bg-[#F9FAFB] flex items-center gap-3 text-[#111827]">
                      <Download className="w-4 h-4 text-[#6B7280]" />
                      Export Products
                    </button>
                    <div className="border-t border-[#E5E7EB] my-1"></div>
                    <button className="w-full px-4 py-2.5 text-left text-sm hover:bg-[#F9FAFB] flex items-center gap-3 text-[#111827]">
                      <Download className="w-4 h-4 text-[#6B7280]" />
                      Export All
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* -----------------------------------------
             KPI CARDS
        ------------------------------------------ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mb-6 sm:mb-8">

          {/* Total */}
          <div className="bg-white border border-[#E5E7EB] rounded-xl p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 rounded-lg bg-[#EFF6FF] flex items-center justify-center">
                <Package className="w-6 h-6 text-[#05466C]" />
              </div>
            </div>
            <div className="text-3xl font-semibold text-[#111827] mb-1">
              {totalProducts}
            </div>
            <div className="text-sm text-[#6B7280]">Total Products</div>
          </div>

          {/* High Impact */}
          <div className="bg-white border border-[#E5E7EB] rounded-xl p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 rounded-lg bg-[#FEF3C7] flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-[#F59E0B]" />
              </div>
            </div>
            <div className="text-3xl font-semibold text-[#111827] mb-1">
              {highImpactProducts}
            </div>
            <div className="text-sm text-[#6B7280]">High-Impact Products</div>
          </div>

          {/* Missing Data */}
          <div className="bg-white border border-[#E5E7EB] rounded-xl p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 rounded-lg bg-[#FEE2E2] flex items-center justify-center">
                <FileWarning className="w-6 h-6 text-[#EB121E]" />
              </div>
            </div>
            <div className="text-3xl font-semibold text-[#111827] mb-1">
              {missingDataProducts}
            </div>
            <div className="text-sm text-[#6B7280]">Products Missing Data</div>
          </div>
        </div>

        {/* -----------------------------------------
             FILTERS
        ------------------------------------------ */}
        <div className="bg-white border border-[#E5E7EB] rounded-xl p-5 mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">

            {/* Search */}
            <div className="sm:col-span-2">
              <div className="flex items-center gap-2 px-4 py-2 bg-[#F9FAFB] border border-[#E5E7EB] rounded-lg">
                <Search className="w-4 h-4 text-[#9CA3AF]" />
                <input
                  type="text"
                  placeholder="Search by name, GTIN, category"
                  className="flex-1 bg-transparent border-none outline-none text-sm"
                />
              </div>
            </div>

            {/* Category */}
            <select className="px-4 py-2 bg-[#F9FAFB] border border-[#E5E7EB] rounded-lg text-sm">
              <option>All Categories</option>
              <option>FMCG – Food Products</option>
              <option>BCRS – Beverage Containers</option>
              <option>Beauty / Cosmetics</option>
            </select>

            {/* Compliance */}
            <select className="px-4 py-2 bg-[#F9FAFB] border border-[#E5E7EB] rounded-lg text-sm">
              <option>All Compliance</option>
              <option>Compliant</option>
              <option>Non-compliant</option>
              <option>Missing data</option>
            </select>

            {/* Sort */}
            <select className="px-4 py-2 bg-[#F9FAFB] border border-[#E5E7EB] rounded-lg text-sm">
              <option>Most recent</option>
              <option>Highest impact</option>
              <option>Lowest impact</option>
              <option>A → Z</option>
            </select>
          </div>
        </div>

        {/* -----------------------------------------
             PRODUCT TABLE
        ------------------------------------------ */}
        <div className="bg-white border border-[#E5E7EB] rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[960px]">
              <thead className="bg-[#F9FAFB] border-b border-[#E5E7EB]">
                <tr>
                  {[
                    "Product",
                    "GTIN",
                    "Impact Score",
                    "Carbon",
                    "Packaging",
                    "Circularity",
                    "Compliance",
                    "Updated",
                    "Actions",
                  ].map((col) => (
                    <th
                      key={col}
                      className="px-6 py-3 text-left text-xs font-medium text-[#6B7280] uppercase tracking-wide"
                    >
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody className="divide-y divide-[#E5E7EB]">

                {products.map((product) => (
                  <tr key={product.id} className="hover:bg-[#F9FAFB] transition-colors">

                    {/* Product cell */}
                    <td className="px-6 py-3">
                      <Link
                        to={`/products/${product.gtin}`}
                        className="group flex items-center gap-4"
                      >
                        <div className="w-11 h-11 rounded-lg overflow-hidden border border-[#E5E7EB] bg-white">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        <div className="flex flex-col gap-1">
                          {/* PRODUCT NAME — updated hover style */}
                          <span
                            className="text-sm sm:text-base font-medium text-[#111827] group-hover:text-[#05466C] group-hover:underline transition-colors"
                          >
                            {product.name}
                          </span>

                          <span
                            className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${getCategoryColor(
                              product.category
                            )}`}
                          >
                            {product.category.split(" – ")[0]}
                          </span>
                        </div>
                      </Link>
                    </td>

                    {/* GTIN */}
                    <td className="px-6 py-3">
                      <span className="text-sm text-[#6B7280]">{product.gtin}</span>
                    </td>

                    {/* Impact Score */}
                    <td className="px-6 py-3">
                      <span
                        className={`inline-flex items-center justify-center w-8 h-8 rounded-full text-sm font-semibold border ${getImpactScoreColor(
                          product.impactScore
                        )}`}
                      >
                        {product.impactScore}
                      </span>
                    </td>

                    {/* Carbon footprint */}
                    <td className="px-6 py-3">
                      <span className="text-sm font-medium text-[#05466C]">
                        {product.carbonFootprint}
                      </span>
                    </td>

                    {/* Packaging */}
                    <td className="px-6 py-3 text-sm">{product.packagingType}</td>

                    {/* Circularity */}
                    <td className="px-6 py-3 text-sm font-medium text-[#F0B82E]">
                      {product.circularity}
                    </td>

                    {/* Compliance */}
                    <td className="px-6 py-3">
                      <span
                        className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium border ${getComplianceColor(
                          product.compliance
                        )}`}
                      >
                        {product.compliance}
                      </span>
                    </td>

                    {/* Updated */}
                    <td className="px-6 py-3 text-sm text-[#6B7280]">
                      {product.updated}
                    </td>

                    {/* Actions */}
                    <td className="px-6 py-3 text-center">
                      <div className="flex items-center justify-center gap-2">

                        {/* View details */}
                        <Link
                          to={`/products/${product.gtin}`}
                          className="p-2 rounded-lg hover:bg-[#F3F4F6]"
                          title="View details"
                        >
                          <Eye className="w-4 h-4 text-[#6B7280]" />
                        </Link>

                        {/* More */}
                        <button
                          className="p-2 rounded-lg hover:bg-[#F3F4F6]"
                          title="More"
                        >
                          <MoreVertical className="w-4 h-4 text-[#6B7280]" />
                        </button>

                      </div>
                    </td>

                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="px-6 py-4 border-t border-[#E5E7EB] flex flex-col sm:flex-row items-center justify-between gap-3 bg-white">
            <span className="text-sm text-[#6B7280]">
              Showing 1–{products.length} of {products.length} products
            </span>

            <div className="flex items-center gap-2">
              <button className="px-3 py-1 border border-[#E5E7EB] rounded-lg text-sm hover:bg-[#F9FAFB]">
                Previous
              </button>
              <button className="px-3 py-1 bg-[#05466C] text-white rounded-lg text-sm">
                1
              </button>
              <button className="px-3 py-1 border border-[#E5E7EB] rounded-lg text-sm hover:bg-[#F9FAFB]">
                Next
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default ProductsPage;