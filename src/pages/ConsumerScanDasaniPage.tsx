import { Link, useParams } from "react-router-dom";
import {
  Leaf,
  Recycle,
  Globe2,
  Info,
  ArrowRight,
  Shield,
  Sparkles,
} from "lucide-react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Card } from "../ui/card";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { products } from "../data/products";
import type { Product } from "../data/products";

// The GTIN we use for the Dasani demo passport
const DASANI_GTIN = "0049000082055";

// Utility: turn product name into a URL-friendly slug
function toSlug(name: string) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}

// Try to locate a product by GTIN or by slug (e.g. "dasani-600ml")
function findProductByParam(gtinParam: string | undefined): Product | undefined {
  if (!gtinParam) return undefined;

  // 1) Exact GTIN match
  const byGtin = products.find((p) => p.gtin === gtinParam);
  if (byGtin) return byGtin;

  // 2) Slug match for backwards compatibility like /consumer/dasani-600ml
  const bySlug = products.find((p) => toSlug(p.name).includes(gtinParam));
  if (bySlug) return bySlug;

  return undefined;
}

export default function ConsumerScanDasaniPage() {
  const { gtin } = useParams<{ gtin: string }>();
  const product = findProductByParam(gtin);

  // If we can't find a product, show a simple friendly message
  if (!product) {
    return (
      <div className="min-h-screen w-full bg-[#F4F4F4] flex flex-col">
        <header className="w-full border-b border-[#E5E7EB] bg-white">
          <div className="max-w-3xl mx-auto px-4 py-3 flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <p className="font-['Familjen_Grotesk',sans-serif] font-bold text-lg leading-normal">
                <span className="text-[#EFBC02]">Q</span>
                <span className="text-[#01416C]">ode</span>
                <span className="text-[#E92E16]">+</span>
              </p>
              <span className="text-xs text-[#9CA3AF] hidden sm:inline">
                Impact Ledger
              </span>
            </div>
            <div className="flex items-center gap-1 text-[10px] sm:text-xs text-[#6B7280]">
              <Sparkles className="w-4 h-4 text-[#F0B82E]" />
              <span>Powered by product impact data</span>
            </div>
          </div>
        </header>

        <main className="flex-1">
          <div className="max-w-3xl mx-auto px-4 py-10 space-y-4">
            <h1 className="text-2xl font-semibold text-[#111827] mb-2">
              We couldn&apos;t find this product
            </h1>
            <p className="text-sm text-[#6B7280]">
              The code you scanned ( <span className="font-mono">{gtin}</span>{" "}
              ) doesn&apos;t match any product in this demo. This can happen if:
            </p>
            <ul className="list-disc pl-5 text-sm text-[#6B7280] space-y-1">
              <li>The product hasn&apos;t been onboarded into Qode+ yet.</li>
              <li>The QR code points to an outdated or test URL.</li>
            </ul>
            <p className="text-xs text-[#9CA3AF]">
              This page is a demo of how 2D codes can connect shoppers to trusted
              impact information once products are registered.
            </p>
          </div>
        </main>
      </div>
    );
  }

  // Build some consumer-friendly values from product data
  const brand = product.brand ?? "Brand owner";
  const carbonPerUnit = product.carbonFootprint || "—";
  const impactGrade = product.impactScore ?? "—";
  const packaging = product.packagingType || "Packaged product";
  const productImage =
    product.image ||
    "https://images.unsplash.com/photo-1580917154088-2c4f4c972b57?auto=format&fit=crop&w=600&q=80";

  const isDasani = product.gtin === DASANI_GTIN;

  // CTA destination:
  // - Dasani → Product Passport demo
  // - Others → Product detail page in the app
  const ctaHref = isDasani
    ? "/product-passport/dasani-600ml"
    : `/products/${product.gtin}`;
  const ctaLabel = isDasani
    ? "View Product Passport"
    : "View product details";

  return (
    <div className="min-h-screen w-full bg-[#F4F4F4] flex flex-col">
      {/* Top bar / brand strip */}
      <header className="w-full border-b border-[#E5E7EB] bg-white">
        <div className="max-w-3xl mx-auto px-4 py-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            {/* Qode+ logo text */}
            <p className="font-['Familjen_Grotesk',sans-serif] font-bold text-lg leading-normal">
              <span className="text-[#EFBC02]">Q</span>
              <span className="text-[#01416C]">ode</span>
              <span className="text-[#E92E16]">+</span>
            </p>
            <span className="text-xs text-[#9CA3AF] hidden sm:inline">
              Impact Ledger
            </span>
          </div>
          <div className="flex items-center gap-1 text-[10px] sm:text-xs text-[#6B7280]">
            <Sparkles className="w-4 h-4 text-[#F0B82E]" />
            <span>Powered by product impact data</span>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1">
        <div className="max-w-3xl mx-auto px-4 py-6 sm:py-8 space-y-6 sm:space-y-8">
          {/* Intro */}
          <section className="space-y-3">
            <p className="text-xs text-[#6B7280] uppercase tracking-wide flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
              You scanned a 2D code on this product
            </p>
            <h1 className="text-2xl sm:text-3xl font-semibold text-[#111827]">
              See the story behind your {product.category?.toLowerCase() || "product"}
            </h1>
            <p className="text-sm sm:text-base text-[#6B7280]">
              This page gives you a quick view of the environmental impact and
              recycling info for:
            </p>
          </section>

          {/* Product summary card */}
          <Card className="p-4 sm:p-5 bg-white border border-[#E5E7EB] rounded-2xl">
            <div className="flex gap-4 sm:gap-5">
              {/* Image */}
              <div className="flex-shrink-0">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl bg-[#F9FAFB] border border-[#E5E7EB] overflow-hidden flex items-center justify-center">
                  <ImageWithFallback
                    src={productImage}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Text + badges */}
              <div className="flex-1 min-w-0 flex flex-col gap-2">
                <div>
                  <p className="text-xs uppercase tracking-wide text-[#6B7280] mb-0.5">
                    {brand}
                  </p>
                  <h2 className="text-base sm:text-lg font-semibold text-[#111827]">
                    {product.name}
                  </h2>
                  <p className="text-xs sm:text-sm text-[#9CA3AF] mt-0.5">
                    GTIN: {product.gtin}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-2 mt-1">
                  <Badge className="bg-[#EBF5F0] text-[#065F46] rounded-full px-3 py-1 text-[11px] sm:text-xs flex items-center gap-1.5">
                    <Leaf className="w-3 h-3" />
                    Impact score: {impactGrade}
                  </Badge>
                  <Badge className="bg-[#EFF6FF] text-[#1D4ED8] rounded-full px-3 py-1 text-[11px] sm:text-xs flex items-center gap-1.5">
                    <Recycle className="w-3 h-3" />
                    {packaging}
                  </Badge>
                </div>
              </div>

              {/* Impact grade */}
              <div className="hidden sm:flex flex-col items-center justify-center gap-2">
                <div className="w-12 h-12 rounded-full border-2 border-[#10B981] bg-[#ECFDF3] flex items-center justify-center">
                  <span className="text-lg font-semibold text-[#047857]">
                    {impactGrade}
                  </span>
                </div>
                <span className="text-[11px] text-[#6B7280] text-center leading-tight">
                  Impact grade
                </span>
              </div>
            </div>
          </Card>

          {/* Key info cards */}
          <section className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Impact per unit */}
            <Card className="p-4 bg-white border border-[#E5E7EB] rounded-2xl">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Leaf className="w-4 h-4 text-[#059669]" />
                  <h3 className="text-sm font-medium text-[#111827]">
                    Environmental impact (demo)
                  </h3>
                </div>
                <Badge className="bg-[#ECFDF3] text-[#047857] rounded-full px-2 py-0.5 text-[10px]">
                  per unit
                </Badge>
              </div>
              <p className="text-2xl font-semibold text-[#111827]">
                {carbonPerUnit}
              </p>
              <p className="text-xs text-[#6B7280] mt-1.5">
                Estimated carbon footprint based on lifecycle data for this
                product type.
              </p>
            </Card>

            {/* Recycling guidance */}
            <Card className="p-4 bg-white border border-[#E5E7EB] rounded-2xl">
              <div className="flex items-center gap-2 mb-3">
                <Recycle className="w-4 h-4 text-[#2563EB]" />
                <h3 className="text-sm font-medium text-[#111827]">
                  How to recycle this product
                </h3>
              </div>
              <ul className="space-y-1.5 text-xs text-[#4B5563]">
                <li>• Empty the contents completely.</li>
                <li>
                  • Follow your local recycling rules for{" "}
                  <span className="font-medium">{packaging}</span>.
                </li>
                <li>• Look for the nearest recycling bin where available.</li>
              </ul>
              <p className="text-[11px] text-[#9CA3AF] mt-2">
                Always follow local recycling instructions in your country or city.
              </p>
            </Card>
          </section>

          {/* Deeper info / trust section */}
          <section className="space-y-4">
            <Card className="p-4 sm:p-5 bg-white border border-[#E5E7EB] rounded-2xl">
              <div className="flex items-start gap-3 mb-3">
                <Globe2 className="w-5 h-5 text-[#05466C] mt-0.5" />
                <div className="flex-1">
                  <h3 className="text-sm font-medium text-[#111827] mb-1">
                    Where does this data come from?
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6B7280]">
                    This view is powered by Qode+ Impact Ledger and brings together
                    product information, packaging details, and sustainability data
                    shared by the brand owner and their suppliers.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-2">
                <div className="flex items-center gap-2 text-xs text-[#6B7280]">
                  <Shield className="w-4 h-4 text-[#10B981]" />
                  <span>Verified GTIN &amp; product identity</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#6B7280]">
                  <Info className="w-4 h-4 text-[#F0B82E]" />
                  <span>Lifecycle &amp; packaging data (demo)</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#6B7280]">
                  <Sparkles className="w-4 h-4 text-[#F59E0B]" />
                  <span>Designed for next-gen 2D barcodes</span>
                </div>
              </div>
            </Card>

            {/* CTA to full passport / details */}
            <Card className="p-4 sm:p-5 bg-[#05466C] rounded-2xl text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="space-y-1">
                <h3 className="text-sm sm:text-base font-semibold">
                  Want to see more about this product?
                </h3>
                <p className="text-xs sm:text-sm text-[#E5E7EB] max-w-md">
                  Explore the deeper lifecycle view, suppliers, and regulatory data
                  in the brand / expert view.
                </p>
              </div>
              <Link to={ctaHref} className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto bg-white text-[#05466C] hover:bg-[#F9FAFB] rounded-full px-4 sm:px-5 text-sm font-medium flex items-center justify-center gap-1.5">
                  {ctaLabel}
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </Card>
          </section>

          {/* Tiny legal-ish note */}
          <p className="text-[10px] text-center text-[#9CA3AF] pt-2 pb-4">
            This page is a demo experience showing how next-generation 2D codes can
            connect shoppers to trusted product impact information.
          </p>
        </div>
      </main>
    </div>
  );
}
