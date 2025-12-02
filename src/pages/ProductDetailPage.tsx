import React from "react";
import { useParams } from "react-router-dom";
import {
  Package,
  BarChart3,
  Shield,
  Sparkles,
  TrendingUp,
  TrendingDown,
  AlertCircle,
  Leaf,
} from "lucide-react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../ui/tabs";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";
import { products } from "../data/products";
import type { Product } from "../data/products";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { AIAssistantDrawer } from "../components/AIAssistantDrawer";

const lifecycleData = [
  { stage: "Raw Materials", impact: 0.04 },
  { stage: "Production", impact: 0.01 },
  { stage: "Transport", impact: 0.02 },
  { stage: "Use Phase", impact: 0.0 },
  { stage: "End of Life", impact: 0.006 },
];

const keyDrivers = [
  {
    name: "PET Packaging",
    impact: 0.038,
    trend: "up" as const,
    change: "+8%",
    severity: "high" as const,
  },
  {
    name: "Transportation",
    impact: 0.02,
    trend: "neutral" as const,
    change: "0%",
    severity: "medium" as const,
  },
  {
    name: "Water Usage",
    impact: 0.005,
    trend: "down" as const,
    change: "-5%",
    severity: "low" as const,
  },
];

function mapCategoryToAI(product: Product | undefined): "fmcg" | "bcrs" | "beauty" {
  if (!product?.category) return "fmcg";
  const c = product.category.toLowerCase();
  if (c.includes("beverage") || c.includes("bcrs")) return "bcrs";
  if (c.includes("beauty")) return "beauty";
  return "fmcg";
}

export default function ProductDetailPage() {
  const { gtin } = useParams<{ gtin: string }>();
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const product =
    products.find((p) => p.gtin === gtin) ??
    products.find((p) => p.gtin === "00049000082055"); // fallback to Dasani demo

  if (!product) {
    return (
      <div className="w-full bg-[#F9FAFB]">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <h1 className="text-2xl font-semibold text-[#111827] mb-2">
            Product not found
          </h1>
          <p className="text-sm text-[#6B7280]">
            We couldn’t find a product for GTIN <span className="font-mono">{gtin}</span>.
          </p>
        </div>
      </div>
    );
  }

  const isDasani =
    product.name.toLowerCase().includes("dasani") ||
    product.gtin === "00049000082055";

  // Values shown in the header cards – special values for Dasani, generic for others
  const carbonFootprint = isDasani ? "8.3 kg CO₂e" : product.carbonFootprint;
  const recycledContent = isDasani ? "30%" : "—";
  const circularityScore = isDasani ? "85%" : product.circularity ?? "—";
  const complianceRate = isDasani ? "92%" : "—";
  const aiCategory = mapCategoryToAI(product);

  return (
    <>
      <div className="w-full bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-6 lg:py-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-[#6B7280] mb-6">
            <span className="hover:text-[#05466C] cursor-pointer">Products</span>
            <span>/</span>
            <span className="text-[#111827] truncate">
              {product.name}
            </span>
          </div>

          {/* Product Header */}
          <div className="bg-white border border-[#E5E7EB] rounded-xl p-6 mb-8">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Image */}
              <div className="flex-shrink-0 mx-auto lg:mx-0">
                <div className="w-40 h-40 bg-[#F9FAFB] rounded-lg border border-[#E5E7EB] flex items-center justify-center overflow-hidden">
                  <ImageWithFallback
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                  <div className="flex-1 min-w-0">
                    <h1 className="text-[#05466C] text-xl lg:text-2xl mb-2">
                      {product.name}
                    </h1>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-[#6B7280]">
                      <span>GTIN: {product.gtin}</span>
                      <span>•</span>
                      {product.category && (
                        <Badge className="bg-[#F0B82E] text-[#05466C] rounded-full px-3 py-1 text-xs">
                          {product.category}
                        </Badge>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-3 flex-wrap">
                    <Badge className="bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/20 rounded-full px-4 py-2 text-sm flex items-center gap-2">
                      <Shield className="w-4 h-4" />
                      Verified
                    </Badge>
                    <Button
                      onClick={() => setDrawerOpen(true)}
                      className="bg-gradient-to-r from-[#05466C] to-[#003C65] text-white hover:opacity-90 shadow-lg transition-all hover:shadow-xl text-sm"
                    >
                      <Sparkles className="w-4 h-4 mr-2" />
                      Ask Qode+ AI
                    </Button>
                  </div>
                </div>

                {/* Quick stats row */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="flex flex-col gap-1">
                    <span className="text-xs text-[#6B7280]">Impact score</span>
                    <span className="text-xl font-medium text-[#10B981]">
                      {product.impactScore}
                    </span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-xs text-[#6B7280]">Carbon footprint</span>
                    <span className="text-xl font-medium text-[#111827]">
                      {carbonFootprint}
                    </span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-xs text-[#6B7280]">Recycled content</span>
                    <span className="text-xl font-medium text-[#F0B82E]">
                      {recycledContent}
                    </span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-xs text-[#6B7280]">Status</span>
                    <span className="text-xl font-medium text-[#10B981]">
                      Active
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Summary cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="p-6 bg-white border border-[#E5E7EB] rounded-xl hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-lg bg-[#05466C]/10 flex items-center justify-center">
                  <Leaf className="w-6 h-6 text-[#05466C]" />
                </div>
                <Badge className="bg-[#10B981]/10 text-[#10B981] rounded-full px-3 py-1 text-xs">
                  +5% vs target
                </Badge>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-2xl font-medium text-[#111827]">
                  {carbonFootprint}
                </span>
                <span className="text-sm text-[#6B7280]">
                  Total carbon impact
                </span>
              </div>
            </Card>

            <Card className="p-6 bg-white border border-[#E5E7EB] rounded-xl hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-lg bg-[#F0B82E]/10 flex items-center justify-center">
                  <Package className="w-6 h-6 text-[#F0B82E]" />
                </div>
                <Badge className="bg-[#F0B82E]/10 text-[#F0B82E] rounded-full px-3 py-1 text-xs">
                  Medium
                </Badge>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-2xl font-medium text-[#111827]">46%</span>
                <span className="text-sm text-[#6B7280]">
                  Material hotspot (PET)
                </span>
              </div>
            </Card>

            <Card className="p-6 bg-white border border-[#E5E7EB] rounded-xl hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-lg bg-[#10B981]/10 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-[#10B981]" />
                </div>
                <Badge className="bg-[#10B981]/10 text-[#10B981] rounded-full px-3 py-1 text-xs">
                  Good
                </Badge>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-2xl font-medium text-[#111827]">
                  {circularityScore}
                </span>
                <span className="text-sm text-[#6B7280]">
                  Circularity score
                </span>
              </div>
            </Card>

            <Card className="p-6 bg-white border border-[#E5E7EB] rounded-xl hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-lg bg-[#EB121E]/10 flex items-center justify-center">
                  <AlertCircle className="w-6 h-6 text-[#EB121E]" />
                </div>
                <Badge className="bg-[#EB121E]/10 text-[#EB121E] rounded-full px-3 py-1 text-xs">
                  2 issues
                </Badge>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-2xl font-medium text-[#111827]">
                  {complianceRate}
                </span>
                <span className="text-sm text-[#6B7280]">
                  Compliance rate
                </span>
              </div>
            </Card>
          </div>

          {/* Lifecycle + key drivers */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <Card className="lg:col-span-2 p-6 bg-white border border-[#E5E7EB] rounded-xl">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-[#111827] font-medium mb-1">
                    Lifecycle impact breakdown
                  </h3>
                  <p className="text-sm text-[#6B7280]">
                    Carbon emissions by lifecycle stage
                  </p>
                </div>
                <BarChart3 className="w-5 h-5 text-[#05466C]/60" />
              </div>

              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={lifecycleData}>
                    <CartesianGrid
                      strokeDasharray="3 3"
                      stroke="#E5E7EB"
                      opacity={0.3}
                      vertical={false}
                    />
                    <XAxis
                      dataKey="stage"
                      tick={{ fill: "#6B7280", fontSize: 11 }}
                      tickLine={false}
                      axisLine={{ stroke: "#E5E7EB" }}
                    />
                    <YAxis
                      tick={{ fill: "#6B7280", fontSize: 11 }}
                      tickLine={false}
                      axisLine={{ stroke: "#E5E7EB" }}
                      label={{
                        value: "kg CO₂e",
                        angle: -90,
                        position: "insideLeft",
                        style: { fill: "#6B7280", fontSize: 11 },
                      }}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "white",
                        border: "1px solid #E5E7EB",
                        borderRadius: "8px",
                        fontSize: "12px",
                      }}
                    />
                    <Bar dataKey="impact" fill="#05466C" radius={[6, 6, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </Card>

            <Card className="p-6 bg-white border border-[#E5E7EB] rounded-xl">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-[#111827] font-medium mb-1">
                    Key drivers
                  </h3>
                  <p className="text-sm text-[#6B7280]">
                    Top impact contributors
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {keyDrivers.map((driver, index) => (
                  <div
                    key={index}
                    className="flex flex-col gap-2 p-3 bg-[#F9FAFB] rounded-lg border border-[#E5E7EB]"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-[#111827]">
                        {driver.name}
                      </span>
                      {driver.trend === "up" && (
                        <TrendingUp className="w-4 h-4 text-[#EB121E]" />
                      )}
                      {driver.trend === "down" && (
                        <TrendingDown className="w-4 h-4 text-[#10B981]" />
                      )}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-medium text-[#05466C]">
                        {driver.impact} kg CO₂e
                      </span>
                      <Badge
                        className={`rounded-full px-2 py-0.5 text-xs ${
                          driver.severity === "high"
                            ? "bg-[#EB121E]/10 text-[#EB121E]"
                            : driver.severity === "medium"
                            ? "bg-[#F0B82E]/10 text-[#F0B82E]"
                            : "bg-[#10B981]/10 text-[#10B981]"
                        }`}
                      >
                        {driver.change}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Tabs – Impact / Traceability / Circularity / Regulatory */}
          <Tabs defaultValue="impact" className="w-full">
            <TabsList className="w-full bg-white border border-[#E5E7EB] rounded-xl p-1 mb-6 grid grid-cols-2 lg:grid-cols-4 gap-1">
              <TabsTrigger
                value="impact"
                className="rounded-lg data-[state=active]:bg-[#05466C] data-[state=active]:text-white"
              >
                Impact Ledger
              </TabsTrigger>
              <TabsTrigger
                value="traceability"
                className="rounded-lg data-[state=active]:bg-[#05466C] data-[state=active]:text-white"
              >
                Traceability
              </TabsTrigger>
              <TabsTrigger
                value="circularity"
                className="rounded-lg data-[state=active]:bg-[#05466C] data-[state=active]:text-white"
              >
                Circularity
              </TabsTrigger>
              <TabsTrigger
                value="regulatory"
                className="rounded-lg data-[state=active]:bg-[#05466C] data-[state=active]:text-white"
              >
                Regulatory
              </TabsTrigger>
            </TabsList>

            <TabsContent value="impact">
              <Card className="p-6 bg-white border border-[#E5E7EB] rounded-xl">
                <h3 className="text-[#05466C] mb-4">Impact ledger details</h3>
                <p className="text-[#6B7280] mb-6">
                  Complete lifecycle assessment data across all impact categories, including
                  carbon, water, biodiversity, and social metrics.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-[#F9FAFB] rounded-lg border border-[#E5E7EB]">
                    <span className="text-sm text-[#6B7280] block mb-2">
                      Total carbon footprint
                    </span>
                    <span className="text-2xl font-medium text-[#111827]">
                      {carbonFootprint}
                    </span>
                  </div>
                  <div className="p-4 bg-[#F9FAFB] rounded-lg border border-[#E5E7EB]">
                    <span className="text-sm text-[#6B7280] block mb-2">
                      Water consumption
                    </span>
                    <span className="text-2xl font-medium text-[#111827]">
                      125 L
                    </span>
                  </div>
                  <div className="p-4 bg-[#F9FAFB] rounded-lg border border-[#E5E7EB]">
                    <span className="text-sm text-[#6B7280] block mb-2">
                      Biodiversity impact
                    </span>
                    <span className="text-2xl font-medium text-[#111827]">
                      Low
                    </span>
                  </div>
                  <div className="p-4 bg-[#F9FAFB] rounded-lg border border-[#E5E7EB]">
                    <span className="text-sm text-[#6B7280] block mb-2">
                      Social score
                    </span>
                    <span className="text-2xl font-medium text-[#111827]">
                      B+
                    </span>
                  </div>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="traceability">
              <Card className="p-6 bg-white border border-[#E5E7EB] rounded-xl">
                <h3 className="text-[#05466C] mb-4">Supply chain traceability</h3>
                <p className="text-[#6B7280] mb-6">
                  Track this product&apos;s journey from raw materials to finished goods across
                  all suppliers and facilities.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 bg-[#F9FAFB] rounded-lg border border-[#E5E7EB]">
                    <div className="w-8 h-8 rounded-full bg-[#05466C] text-white flex items-center justify-center text-sm font-medium flex-shrink-0">
                      1
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-[#111827] mb-1">
                        Raw materials sourcing
                      </h4>
                      <p className="text-sm text-[#6B7280]">
                        PET resin from Supplier A (Malaysia)
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-[#F9FAFB] rounded-lg border border-[#E5E7EB]">
                    <div className="w-8 h-8 rounded-full bg-[#05466C] text-white flex items-center justify-center text-sm font-medium flex-shrink-0">
                      2
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-[#111827] mb-1">
                        Production facility
                      </h4>
                      <p className="text-sm text-[#6B7280]">
                        Manufacturing Plant B (Thailand)
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-[#F9FAFB] rounded-lg border border-[#E5E7EB]">
                    <div className="w-8 h-8 rounded-full bg-[#05466C] text-white flex items-center justify-center text-sm font-medium flex-shrink-0">
                      3
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-[#111827] mb-1">
                        Distribution
                      </h4>
                      <p className="text-sm text-[#6B7280]">
                        Regional distribution centre (Singapore)
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="circularity">
              <Card className="p-6 bg-white border border-[#E5E7EB] rounded-xl">
                <h3 className="text-[#05466C] mb-4">Circularity assessment</h3>
                <p className="text-[#6B7280] mb-6">
                  Analysis of recyclability, recycled content, and end-of-life scenarios for this
                  product.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 bg-[#10B981]/5 rounded-lg border border-[#10B981]/20">
                    <span className="text-sm text-[#6B7280] block mb-2">
                      Recyclability
                    </span>
                    <span className="text-2xl font-medium text-[#10B981]">
                      95%
                    </span>
                    <p className="text-xs text-[#6B7280] mt-2">
                      PET bottle fully recyclable
                    </p>
                  </div>
                  <div className="p-4 bg-[#F0B82E]/5 rounded-lg border border-[#F0B82E]/20">
                    <span className="text-sm text-[#6B7280] block mb-2">
                      Recycled content
                    </span>
                    <span className="text-2xl font-medium text-[#F0B82E]">
                      {recycledContent}
                    </span>
                    <p className="text-xs text-[#6B7280] mt-2">
                      rPET in packaging
                    </p>
                  </div>
                  <div className="p-4 bg-[#05466C]/5 rounded-lg border border-[#05466C]/20">
                    <span className="text-sm text-[#6B7280] block mb-2">
                      Recovery rate
                    </span>
                    <span className="text-2xl font-medium text-[#05466C]">
                      78%
                    </span>
                    <p className="text-xs text-[#6B7280] mt-2">
                      Estimated collection rate
                    </p>
                  </div>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="regulatory">
              <Card className="p-6 bg-white border border-[#E5E7EB] rounded-xl">
                <h3 className="text-[#05466C] mb-4">Regulatory compliance</h3>
                <p className="text-[#6B7280] mb-6">
                  Compliance status across EU DPP, ESPR, CBAM, and other sustainability
                  regulations.
                </p>

                <div className="space-y-3">
                  <div className="flex items-center justify-between p-4 bg-[#F9FAFB] rounded-lg border border-[#E5E7EB]">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#10B981]" />
                      <div>
                        <h4 className="font-medium text-[#111827]">
                          EU Digital Product Passport
                        </h4>
                        <p className="text-sm text-[#6B7280]">Compliant</p>
                      </div>
                    </div>
                    <Badge className="bg-[#10B981]/10 text-[#10B981] rounded-full px-3 py-1 text-xs">
                      ✓ Verified
                    </Badge>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-[#F9FAFB] rounded-lg border border-[#E5E7EB]">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#F0B82E]" />
                      <div>
                        <h4 className="font-medium text-[#111827]">
                          CBAM (Carbon Border Adjustment)
                        </h4>
                        <p className="text-sm text-[#6B7280]">Pending review</p>
                      </div>
                    </div>
                    <Badge className="bg-[#F0B82E]/10 text-[#F0B82E] rounded-full px-3 py-1 text-xs">
                      In progress
                    </Badge>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-[#F9FAFB] rounded-lg border border-[#E5E7EB]">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#10B981]" />
                      <div>
                        <h4 className="font-medium text-[#111827]">
                          ESPR (Ecodesign Regulation)
                        </h4>
                        <p className="text-sm text-[#6B7280]">Compliant</p>
                      </div>
                    </div>
                    <Badge className="bg-[#10B981]/10 text-[#10B981] rounded-full px-3 py-1 text-xs">
                      ✓ Verified
                    </Badge>
                  </div>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* AI Drawer */}
      <AIAssistantDrawer
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        productName={product.name}
        category={aiCategory}
      />
    </>
  );
}
