import React from "react";
import { useParams, Link } from "react-router-dom";
import { products } from "../data/products";
import type { Product } from "../data/products";
import { ArrowLeft, Package, AlertTriangle } from "lucide-react";

function getImpactScoreColor(score: Product["impactScore"]) {
  if (score === "A") return "bg-[#05466C] text-white border-[#05466C]";
  if (score === "B") return "bg-[#F1C75E] text-[#05466C] border-[#F0B82E]";
  if (score === "C") return "bg-[#FEF3C7] text-[#92400E] border-[#F59E0B]";
  if (score === "D") return "bg-[#FEE2E2] text-[#EB121E] border-[#EB121E]";
  return "bg-gray-100 text-gray-700 border-gray-200";
}

export function ProductDetailPage() {
  const { gtin } = useParams<{ gtin: string }>();

  const product = products.find((p) => p.gtin === gtin);

  if (!product) {
    return (
      <div className="w-full bg-[#F9FAFB]">
        <div className="max-w-5xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-sm text-[#05466C] hover:underline"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Products
          </Link>

          <div className="mt-8 flex flex-col items-center gap-4">
            <AlertTriangle className="w-10 h-10 text-[#EB121E]" />
            <p className="text-base text-[#111827] font-medium">
              Product not found in your ledger.
            </p>
            <p className="text-sm text-[#6B7280]">
              Check the GTIN or return to the Products list to select another
              item.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-[#F9FAFB]">
      <div className="max-w-5xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        {/* Back link */}
        <Link
          to="/products"
          className="inline-flex items-center gap-2 text-sm text-[#05466C] hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Products
        </Link>

        {/* Header */}
        <div className="mt-6 flex flex-col md:flex-row md:items-start md:justify-between gap-4">
          <div className="flex gap-4">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden border border-[#E5E7EB] bg-white flex-shrink-0">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-sm text-[#6B7280]">GTIN {product.gtin}</p>
              <h1 className="text-xl sm:text-2xl font-semibold text-[#111827]">
                {product.name}
              </h1>
              <p className="text-xs sm:text-sm text-[#6B7280]">
                {product.category}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span
              className={`inline-flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full text-sm sm:text-base font-semibold border ${getImpactScoreColor(
                product.impactScore
              )}`}
            >
              {product.impactScore}
            </span>
            <div className="flex flex-col">
              <span className="text-xs text-[#6B7280]">Impact score</span>
              <span className="text-sm font-medium text-[#111827]">
                {product.impactScore === "A"
                  ? "Low impact"
                  : product.impactScore === "B"
                  ? "Above average"
                  : product.impactScore === "C"
                  ? "Needs improvement"
                  : "High impact"}
              </span>
            </div>
          </div>
        </div>

        {/* Content cards */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          <div className="md:col-span-2 bg-white border border-[#E5E7EB] rounded-xl p-5 sm:p-6">
            <h2 className="text-sm sm:text-base font-semibold text-[#111827] mb-3">
              Product Impact Snapshot
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-[#F9FAFB] rounded-lg p-4 flex flex-col gap-1">
                <span className="text-xs text-[#6B7280]">
                  Carbon footprint (per unit)
                </span>
                <span className="text-base sm:text-lg font-semibold text-[#05466C]">
                  {product.carbonFootprint}
                </span>
                <span className="text-xs text-[#9CA3AF]">
                  Includes manufacturing + logistics to retailer
                </span>
              </div>
              <div className="bg-[#F9FAFB] rounded-lg p-4 flex flex-col gap-1">
                <span className="text-xs text-[#6B7280]">Packaging</span>
                <span className="text-base sm:text-lg font-semibold text-[#111827]">
                  {product.packagingType}
                </span>
                <span className="text-xs text-[#9CA3AF]">
                  Based on latest supplier declarations
                </span>
              </div>
              <div className="bg-[#F9FAFB] rounded-lg p-4 flex flex-col gap-1">
                <span className="text-xs text-[#6B7280]">Circularity</span>
                <span className="text-base sm:text-lg font-semibold text-[#111827]">
                  {product.circularity}
                </span>
                <span className="text-xs text-[#9CA3AF]">
                  % of material expected to be recovered or cycled
                </span>
              </div>
              <div className="bg-[#F9FAFB] rounded-lg p-4 flex flex-col gap-1">
                <span className="text-xs text-[#6B7280]">Last updated</span>
                <span className="text-base sm:text-lg font-semibold text-[#111827]">
                  {product.updated}
                </span>
                <span className="text-xs text-[#9CA3AF]">
                  From Product Impact Passport / supplier files
                </span>
              </div>
            </div>
          </div>

          <div className="bg-white border border-[#E5E7EB] rounded-xl p-5 sm:p-6 flex flex-col gap-4">
            <div className="flex items-center gap-2 mb-1">
              <Package className="w-4 h-4 text-[#05466C]" />
              <h2 className="text-sm sm:text-base font-semibold text-[#111827]">
                Compliance & Data
              </h2>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-xs text-[#6B7280]">Compliance status</span>
              <span className="inline-flex w-fit items-center px-3 py-1 rounded-full text-xs font-medium border bg-[#EBF5F0] text-[#05466C] border-[#05466C]">
                {product.compliance}
              </span>
            </div>

            <div className="text-xs sm:text-sm text-[#6B7280]">
              This view is a preview of the Product Impact Passport. For the
              hackathon demo, you can extend this screen to show:
              <ul className="list-disc list-inside mt-1 space-y-1">
                <li>Lifecycle stages and hotspots</li>
                <li>Supplier declarations and certifications</li>
                <li>Data sources and audit trail</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailPage;