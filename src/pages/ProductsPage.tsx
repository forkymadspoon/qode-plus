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

// Image imports (make sure these paths & filenames exist)
import tomatoImg from "../assets/products/organic-tomato-pasta-sauce.png";
import moisturizerImg from "../assets/products/natural-face-moisturizer-50ml.png";
import colaImg from "../assets/products/premium-cola-330ml.png";
import cerealImg from "../assets/products/whole-grain-breakfast-cereal.png";
import shampooImg from "../assets/products/organic-shampoo-250ml.png";
import orangeJuiceImg from "../assets/products/fresh-orange-juice-1l.png";
import serumImg from "../assets/products/anti-aging-serum-30ml.png";
import oliveOilImg from "../assets/products/artisan-olive-oil-500ml.png";
import dasaniImg from "../assets/products/dasani-drinking-water-600ml.png";

type ProductCategory =
  | "FMCG – Food Products"
  | "BCRS – Beverage Containers"
  | "Beauty / Cosmetics";

type ComplianceStatus = "Compliant" | "Missing Data" | "Non-Compliant";

interface Product {
  id: number;
  name: string;
  image: string; // imported image path
  gtin: string;
  category: ProductCategory;
  impactScore: "A" | "B" | "C" | "D";
  carbonFootprint: string;
  packagingType: string;
  circularity: string;
  compliance: ComplianceStatus;
  updated: string;
}

const mockProducts: Product[] = [
  {
    id: 1,
    name: "Organic Tomato Pasta Sauce",
    image: tomatoImg,
    gtin: "5012345678900",
    category: "FMCG – Food Products",
    impactScore: "B",
    carbonFootprint: "8.2 kg CO₂e",
    packagingType: "Glass",
    circularity: "72%",
    compliance: "Compliant",
    updated: "2024-11-22",
  },
  {
    id: 2,
    name: "Dasani Drinking Water 600ml",
    image: dasaniImg,
    gtin: "0049000082055",
    category: "BCRS – Beverage Containers",
    impactScore: "A",
    carbonFootprint: "4.1 kg CO₂e",
    packagingType: "PET",
    circularity: "85%",
    compliance: "Compliant",
    updated: "2024-11-25",
  },  
  {
    id: 3,
    name: "Natural Face Moisturizer 50ml",
    image: moisturizerImg,
    gtin: "5012345678902",
    category: "Beauty / Cosmetics",
    impactScore: "B",
    carbonFootprint: "12.5 kg CO₂e",
    packagingType: "HDPE",
    circularity: "68%",
    compliance: "Missing Data",
    updated: "2024-11-20",
  },
  {
    id: 4,
    name: "Premium Cola 330ml",
    image: colaImg,
    gtin: "5012345678903",
    category: "BCRS – Beverage Containers",
    impactScore: "C",
    carbonFootprint: "18.3 kg CO₂e",
    packagingType: "Aluminum",
    circularity: "78%",
    compliance: "Compliant",
    updated: "2024-11-18",
  },
  {
    id: 5,
    name: "Whole Grain Breakfast Cereal",
    image: cerealImg,
    gtin: "5012345678904",
    category: "FMCG – Food Products",
    impactScore: "B",
    carbonFootprint: "14.7 kg CO₂e",
    packagingType: "Cardboard",
    circularity: "65%",
    compliance: "Compliant",
    updated: "2024-11-21",
  },
  {
    id: 6,
    name: "Organic Shampoo 250ml",
    image: shampooImg,
    gtin: "5012345678905",
    category: "Beauty / Cosmetics",
    impactScore: "A",
    carbonFootprint: "9.8 kg CO₂e",
    packagingType: "HDPE",
    circularity: "82%",
    compliance: "Compliant",
    updated: "2024-11-24",
  },
  {
    id: 7,
    name: "Fresh Orange Juice 1L",
    image: orangeJuiceImg,
    gtin: "5012345678906",
    category: "BCRS – Beverage Containers",
    impactScore: "B",
    carbonFootprint: "11.2 kg CO₂e",
    packagingType: "Cardboard",
    circularity: "70%",
    compliance: "Compliant",
    updated: "2024-11-23",
  },
  {
    id: 8,
    name: "Anti-Aging Serum 30ml",
    image: serumImg,
    gtin: "5012345678907",
    category: "Beauty / Cosmetics",
    impactScore: "D",
    carbonFootprint: "28.4 kg CO₂e",
    packagingType: "Glass",
    circularity: "45%",
    compliance: "Non-Compliant",
    updated: "2024-11-15",
  },
  {
    id: 9,
    name: "Artisan Olive Oil 500ml",
    image: oliveOilImg,
    gtin: "5012345678908",
    category: "FMCG – Food Products",
    impactScore: "A",
    carbonFootprint: "6.3 kg CO₂e",
    packagingType: "Glass",
    circularity: "88%",
    compliance: "Compliant",
    updated: "2024-11-25",
  },
];

function getCategoryColor(category: ProductCategory) {
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

function getComplianceColor(compliance: ComplianceStatus) {
  if (compliance === "Compliant")
    return "bg-[#EBF5F0] text-[#05466C] border-[#05466C]";
  if (compliance === "Missing Data")
    return "bg-[#FEF9E7] text-[#92400E] border-[#F0B82E]";
  if (compliance === "Non-Compliant")
    return "bg-[#FEE2E2] text-[#EB121E] border-[#EB121E]";
  return "bg-gray-100 text-gray-700 border-gray-200";
}

export function ProductsPage() {
  const [isActionsOpen, setIsActionsOpen] = React.useState(false);

  const totalProducts = mockProducts.length;
  const highImpactProducts = mockProducts.filter(
    (p) => p.impactScore === "C" || p.impactScore === "D"
  ).length;
  const missingDataProducts = mockProducts.filter(
    (p) => p.compliance === "Missing Data"
  ).length;

  return (
    <div className="w-full bg-[#F9FAFB]">
      <div className="max-w-6xl mx-auto px-4 py-4 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
        {/* Page header */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6 sm:mb-8">
          <div className="flex flex-col gap-2">
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#111827]">
              Products
            </h1>
            <p className="text-sm sm:text-base text-[#6B7280] max-w-xl">
              All FMCG food items, BCRS beverage containers, and beauty/cosmetic
              products with sustainability and compliance information.
            </p>
          </div>

          {/* Button group */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            {/* Add product */}
            <button
              type="button"
              className="flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 bg-[#05466C] text-white rounded-lg hover:bg-[#003C65] text-sm font-medium"
            >
              <Package className="w-4 h-4" />
              Add Product
            </button>

            {/* Actions */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsActionsOpen((open) => !open)}
                className="flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 bg-white text-[#05466C] border border-[#E5E7EB] rounded-lg hover:bg-[#F9FAFB] text-sm font-medium"
              >
                Actions
                <ChevronDown className="w-4 h-4" />
              </button>

              {isActionsOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white border border-[#E5E7EB] rounded-lg shadow-lg z-20">
                  <div className="py-1">
                    <button className="w-full px-4 py-2.5 text-left text-sm text-[#111827] hover:bg-[#F9FAFB] flex items-center gap-3">
                      <Upload className="w-4 h-4 text-[#6B7280]" />
                      Import Products
                    </button>
                    <button className="w-full px-4 py-2.5 text-left text-sm text-[#111827] hover:bg-[#F9FAFB] flex items-center gap-3">
                      <Download className="w-4 h-4 text-[#6B7280]" />
                      Export Products
                    </button>
                    <button className="w-full px-4 py-2.5 text-left text-sm text-[#111827] hover:bg-[#F9FAFB] flex items-center gap-3">
                      <Download className="w-4 h-4 text-[#6B7280]" />
                      Export Filtered List
                    </button>
                    <div className="border-t border-[#E5E7EB] my-1" />
                    <button className="w-full px-4 py-2.5 text-left text-sm text-[#111827] hover:bg-[#F9FAFB] flex items-center gap-3">
                      <Download className="w-4 h-4 text-[#6B7280]" />
                      Export All
                    </button>
                  </div>
                </div>
              )}
            </div>


          </div>
        </div>

        {/* KPI cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mb-6 sm:mb-8">
          <div className="bg-white border border-[#E5E7EB] rounded-xl p-5 sm:p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-[#EFF6FF] flex items-center justify-center">
                <Package className="w-5 h-5 sm:w-6 sm:h-6 text-[#05466C]" />
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-semibold text-[#111827] mb-1">
              {totalProducts}
            </div>
            <div className="text-sm text-[#6B7280]">Total Products</div>
          </div>

          <div className="bg-white border border-[#E5E7EB] rounded-xl p-5 sm:p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-[#FEF3C7] flex items-center justify-center">
                <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-[#F59E0B]" />
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-semibold text-[#111827] mb-1">
              {highImpactProducts}
            </div>
            <div className="text-sm text-[#6B7280]">High-Impact Products</div>
          </div>

          <div className="bg-white border border-[#E5E7EB] rounded-xl p-5 sm:p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-[#FEE2E2] flex items-center justify-center">
                <FileWarning className="w-5 h-5 sm:w-6 sm:h-6 text-[#EB121E]" />
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-semibold text-[#111827] mb-1">
              {missingDataProducts}
            </div>
            <div className="text-sm text-[#6B7280]">Products Missing Data</div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white border border-[#E5E7EB] rounded-xl p-4 sm:p-5 lg:p-6 mb-6 sm:mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {/* Search */}
            <div className="sm:col-span-2">
              <div className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-[#F9FAFB] border border-[#E5E7EB] rounded-lg">
                <Search className="w-4 h-4 text-[#9CA3AF]" />
                <input
                  type="text"
                  placeholder="Search by name, GTIN, category"
                  className="flex-1 bg-transparent border-none outline-none text-sm text-[#111827] placeholder:text-[#9CA3AF]"
                />
              </div>
            </div>

            {/* Category */}
            <div>
              <select className="w-full px-3 sm:px-4 py-2 bg-[#F9FAFB] border border-[#E5E7EB] rounded-lg text-sm text-[#111827] outline-none">
                <option>All Categories</option>
                <option>FMCG – Food Products</option>
                <option>BCRS – Beverage Containers</option>
                <option>Beauty / Cosmetics</option>
              </select>
            </div>

            {/* Compliance */}
            <div>
              <select className="w-full px-3 sm:px-4 py-2 bg-[#F9FAFB] border border-[#E5E7EB] rounded-lg text-sm text-[#111827] outline-none">
                <option>All Compliance</option>
                <option>Compliant</option>
                <option>Non-compliant</option>
                <option>Missing mandatory fields</option>
              </select>
            </div>

            {/* Sort */}
            <div>
              <select className="w-full px-3 sm:px-4 py-2 bg-[#F9FAFB] border border-[#E5E7EB] rounded-lg text-sm text-[#111827] outline-none">
                <option>Most recent</option>
                <option>Highest impact</option>
                <option>Lowest impact</option>
                <option>Alphabetical</option>
              </select>
            </div>
          </div>
        </div>

        {/* Products table */}
        <div className="bg-white border border-[#E5E7EB] rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[960px]">
              <thead className="bg-[#F9FAFB] border-b border-[#E5E7EB]">
                <tr>
                  <th className="px-4 sm:px-6 py-3 sm:py-4 text-left text-[11px] sm:text-xs font-medium text-[#6B7280] uppercase tracking-wide">
                    Product
                  </th>
                  <th className="px-4 sm:px-6 py-3 sm:py-4 text-left text-[11px] sm:text-xs font-medium text-[#6B7280] uppercase tracking-wide">
                    GTIN
                  </th>
                  <th className="px-4 sm:px-6 py-3 sm:py-4 text-left text-[11px] sm:text-xs font-medium text-[#6B7280] uppercase tracking-wide">
                    Impact Score
                  </th>
                  <th className="px-4 sm:px-6 py-3 sm:py-4 text-left text-[11px] sm:text-xs font-medium text-[#6B7280] uppercase tracking-wide">
                    Carbon Footprint
                  </th>
                  <th className="px-4 sm:px-6 py-3 sm:py-4 text-left text-[11px] sm:text-xs font-medium text-[#6B7280] uppercase tracking-wide">
                    Packaging Type
                  </th>
                  <th className="px-4 sm:px-6 py-3 sm:py-4 text-left text-[11px] sm:text-xs font-medium text-[#6B7280] uppercase tracking-wide">
                    Circularity
                  </th>
                  <th className="px-4 sm:px-6 py-3 sm:py-4 text-left text-[11px] sm:text-xs font-medium text-[#6B7280] uppercase tracking-wide">
                    Compliance
                  </th>
                  <th className="px-4 sm:px-6 py-3 sm:py-4 text-left text-[11px] sm:text-xs font-medium text-[#6B7280] uppercase tracking-wide">
                    Updated
                  </th>
                  <th className="px-4 sm:px-6 py-3 sm:py-4 text-center text-[11px] sm:text-xs font-medium text-[#6B7280] uppercase tracking-wide">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E5E7EB]">
                {mockProducts.map((product) => (
                  <tr
                    key={product.id}
                    className="hover:bg-[#F9FAFB] transition-colors"
                  >
                    <td className="px-4 sm:px-6 py-3">
                      <div className="flex items-center gap-3 sm:gap-4">
                        <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg overflow-hidden border border-[#E5E7EB] bg-[#F9FAFB] flex-shrink-0">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex flex-col gap-1">
                          <span className="text-sm sm:text-[15px] font-medium text-[#111827]">
                            {product.name}
                          </span>
                          <span
                            className={`inline-flex items-center px-2 py-0.5 rounded text-[11px] sm:text-xs font-medium ${getCategoryColor(
                              product.category
                            )}`}
                          >
                            {product.category.split(" – ")[0]}
                          </span>
                        </div>
                      </div>
                    </td>

                    <td className="px-4 sm:px-6 py-3">
                      <span className="text-sm text-[#6B7280]">
                        {product.gtin}
                      </span>
                    </td>

                    <td className="px-4 sm:px-6 py-3">
                      <span
                        className={`inline-flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full text-xs sm:text-sm font-semibold border ${getImpactScoreColor(
                          product.impactScore
                        )}`}
                      >
                        {product.impactScore}
                      </span>
                    </td>

                    <td className="px-4 sm:px-6 py-3">
                      <span className="text-sm text-[#05466C] font-medium">
                        {product.carbonFootprint}
                      </span>
                    </td>

                    <td className="px-4 sm:px-6 py-3">
                      <span className="text-sm text-[#111827]">
                        {product.packagingType}
                      </span>
                    </td>

                    <td className="px-4 sm:px-6 py-3">
                      <span className="text-sm text-[#F0B82E] font-medium">
                        {product.circularity}
                      </span>
                    </td>

                    <td className="px-4 sm:px-6 py-3">
                      <span
                        className={`inline-flex items-center px-2 py-1 rounded text-[11px] sm:text-xs font-medium border ${getComplianceColor(
                          product.compliance
                        )}`}
                      >
                        {product.compliance}
                      </span>
                    </td>

                    <td className="px-4 sm:px-6 py-3">
                      <span className="text-sm text-[#6B7280]">
                        {product.updated}
                      </span>
                    </td>

                    <td className="px-4 sm:px-6 py-3">
                      <div className="flex items-center justify-center gap-1.5 sm:gap-2">
                        <button
                          type="button"
                          className="p-1.5 sm:p-2 rounded-lg hover:bg-[#F3F4F6]"
                          title="View"
                        >
                          <Eye className="w-4 h-4 text-[#6B7280]" />
                        </button>
                        <button
                          type="button"
                          className="p-1.5 sm:p-2 rounded-lg hover:bg-[#F3F4F6]"
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

          {/* Table footer / pagination */}
          <div className="px-4 sm:px-6 py-4 border-t border-[#E5E7EB] flex flex-col sm:flex-row items-center justify-between gap-3 bg-white">
            <span className="text-sm text-[#6B7280] text-center sm:text-left">
              Showing 1-{mockProducts.length} of {mockProducts.length} products
            </span>
            <div className="flex items-center gap-2">
              <button
                type="button"
                className="px-3 py-1 border border-[#E5E7EB] rounded-lg text-sm text-[#6B7280] hover:bg-[#F9FAFB]"
              >
                Previous
              </button>
              <button
                type="button"
                className="px-3 py-1 bg-[#05466C] text-white rounded-lg text-sm"
              >
                1
              </button>
              <button
                type="button"
                className="px-3 py-1 border border-[#E5E7EB] rounded-lg text-sm text-[#6B7280] hover:bg-[#F9FAFB]"
              >
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
