import React from "react";
import {
  X,
  Send,
  Sparkles,
  TrendingUp,
  CheckCircle2,
  AlertCircle,
  ArrowUpRight,
} from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Badge } from "../ui/badge";
import { Card } from "../ui/card";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

interface AIAssistantDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  productName?: string;
  category?: "fmcg" | "bcrs" | "beauty";
}

// Sample chart data
const impactByStageData = [
  { name: "Raw Materials", value: 46, color: "#05466C" },
  { name: "Production", value: 28, color: "#F0B82E" },
  { name: "Transport", value: 12, color: "#F1C75E" },
  { name: "Use", value: 8, color: "#E5E7EB" },
  { name: "End of Life", value: 6, color: "#9CA3AF" },
];

const packagingBreakdownData = [
  { name: "PET", value: 46 },
  { name: "HDPE", value: 24 },
  { name: "Labels", value: 18 },
  { name: "Cap", value: 12 },
];

const categoryConfig = {
  fmcg: {
    label: "FMCG Food Products",
    color: "bg-[#05466C] text-white",
  },
  bcrs: {
    label: "BCRS Beverage Containers",
    color: "bg-[#F0B82E] text-[#05466C]",
  },
  beauty: {
    label: "Beauty / Cosmetics",
    color: "bg-[#FEE2E2] text-[#EB121E]",
  },
};

const suggestedPrompts = [
  "Show material hotspots",
  "Summarize lifecycle footprint",
  "Suggest packaging alternatives",
  "Compare suppliers",
  "Explain compliance risks",
  "Summarize circularity score",
];

const recommendations = [
  {
    title: "Switch to rPET (Type 1) — est. 18% reduction",
    icon: <TrendingUp className="size-4 text-[#10B981]" />,
  },
  {
    title: "Localize supplier sourcing to reduce transport emissions",
    icon: <TrendingUp className="size-4 text-[#10B981]" />,
  },
  {
    title: "Increase recycled content above 60% for compliance improvement",
    icon: <TrendingUp className="size-4 text-[#10B981]" />,
  },
];

export function AIAssistantDrawer({
  isOpen,
  onClose,
  productName = "Dasani Drinking Water 600ml",
  category = "bcrs",
}: AIAssistantDrawerProps) {
  const [inputValue, setInputValue] = React.useState("");
  const categoryStyle = categoryConfig[category];

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay backdrop */}
      <div
        className="fixed inset-0 bg-black/30 z-40 backdrop-blur-sm animate-in fade-in duration-300"
        onClick={onClose}
      />

      {/* Drawer Panel */}
      <div className="fixed bottom-0 left-0 right-0 z-50 animate-in slide-in-from-bottom-4 duration-300 ease-in-out">
        <div className="max-w-screen-xl mx-auto">
          <div className="bg-white rounded-t-3xl shadow-2xl">
            {/* Drag Handle */}
            <div
              className="flex justify-center pt-3 pb-2 cursor-pointer hover:opacity-70 transition-opacity"
              onClick={onClose}
            >
              <div className="w-12 h-1.5 bg-[#05466C]/16 rounded-full" />
            </div>

            {/* Main Content */}
            <div className="px-8 pt-4 pb-8 max-h-[480px] overflow-y-auto">
              {/* Header */}
              <div className="flex items-start justify-between mb-5">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="size-6 text-[#F0B82E]" />
                    <h2 className="text-[#05466C]">AI Assistant</h2>
                  </div>
                  <p className="text-sm text-[#6B7280]">
                    Ask anything about <span className="font-medium">{productName}</span> — lifecycle, packaging, climate impact, or suppliers.
                  </p>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={onClose}
                  className="text-[#6B7280] hover:bg-[#F3F4F6] rounded-full"
                >
                  <X className="size-5" />
                </Button>
              </div>

              {/* Suggested Prompts */}
              <div className="mb-6">
                <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                  {suggestedPrompts.map((prompt, index) => (
                    <button
                      key={index}
                      className="flex-shrink-0 px-4 py-2 rounded-full border-2 border-[#05466C] text-[#05466C] text-sm hover:bg-[#EFF6FF] transition-colors whitespace-nowrap"
                    >
                      {prompt}
                    </button>
                  ))}
                </div>
              </div>

              {/* AI Response */}
              <div className="space-y-6 mb-6">
                {/* Insight Card */}
                <Card className="p-6 bg-gradient-to-br from-[#EFF6FF] to-white border-2 border-[#05466C]/10">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-3">
                        <AlertCircle className="size-5 text-[#F0B82E]" />
                        <h3 className="text-[#05466C]">
                          Material hotspot detected: PET contributes 46% of footprint
                        </h3>
                      </div>
                      <p className="text-sm text-[#374151] leading-relaxed">
                        Raw material PET dominates carbon emissions. Replacing PET with rPET can reduce
                        total footprint by 18–22% depending on supplier region. Current packaging shows high
                        dependency on virgin materials, presenting an opportunity to boost circularity.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 flex-wrap">
                    <Badge className="bg-[#10B981] text-white rounded-full px-3 py-1 text-xs flex items-center gap-1.5">
                      <CheckCircle2 className="size-3" />
                      High confidence
                    </Badge>
                    <Badge
                      className={`${categoryStyle.color} rounded-full px-3 py-1 text-xs`}
                    >
                      {categoryStyle.label}
                    </Badge>
                    <Badge className="bg-[#F9FAFB] text-[#6B7280] border border-[#E5E7EB] rounded-full px-3 py-1 text-xs">
                      Carbon impact
                    </Badge>
                  </div>
                </Card>

                {/* Mini Charts */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Impact by Stage */}
                  <Card className="p-5 bg-white border border-[#E5E7EB]">
                    <h4 className="text-sm font-medium text-[#111827] mb-4">
                      Impact by stage
                    </h4>
                    <div className="h-40">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={impactByStageData}
                            cx="50%"
                            cy="50%"
                            innerRadius={40}
                            outerRadius={60}
                            paddingAngle={2}
                            dataKey="value"
                          >
                            {impactByStageData.map((entry, index) => (
                              <Cell key={index} fill={entry.color} />
                            ))}
                          </Pie>
                          <Tooltip
                            contentStyle={{
                              backgroundColor: "white",
                              border: "1px solid #e5e7eb",
                              borderRadius: "8px",
                              fontSize: "12px",
                            }}
                          />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                    <div className="mt-3 space-y-1">
                      {impactByStageData.slice(0, 3).map((item, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between text-xs"
                        >
                          <div className="flex items-center gap-2">
                            <div
                              className="w-3 h-3 rounded-sm"
                              style={{ backgroundColor: item.color }}
                            />
                            <span className="text-[#6B7280]">{item.name}</span>
                          </div>
                          <span className="text-[#111827] font-medium">
                            {item.value}%
                          </span>
                        </div>
                      ))}
                    </div>
                  </Card>

                  {/* Packaging Breakdown */}
                  <Card className="p-5 bg-white border border-[#E5E7EB]">
                    <h4 className="text-sm font-medium text-[#111827] mb-4">
                      Packaging breakdown
                    </h4>
                    <div className="h-40">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={packagingBreakdownData}>
                          <XAxis
                            dataKey="name"
                            tick={{ fontSize: 11, fill: "#6B7280" }}
                            axisLine={false}
                            tickLine={false}
                          />
                          <YAxis hide />
                          <Tooltip
                            contentStyle={{
                              backgroundColor: "white",
                              border: "1px solid #e5e7eb",
                              borderRadius: "8px",
                              fontSize: "12px",
                            }}
                          />
                          <Bar dataKey="value" radius={[6, 6, 0, 0]} />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                    <div className="mt-3 flex items-center gap-2 text-xs text-[#6B7280]">
                      <div className="w-3 h-3 rounded-sm bg-[#F0B82E]" />
                      <span>Mass contribution by material type</span>
                    </div>
                  </Card>
                </div>

                {/* Recommendations */}
                <Card className="p-6 bg-white border border-[#E5E7EB]">
                  <h4 className="text-sm font-medium text-[#111827] mb-4 flex items-center gap-2">
                    <TrendingUp className="size-4 text-[#05466C]" />
                    Recommended actions
                  </h4>
                  <div className="space-y-3">
                    {recommendations.map((rec, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 p-3 rounded-lg hover:bg-[#F9FAFB] transition-colors cursor-pointer group"
                      >
                        <div className="mt-0.5">{rec.icon}</div>
                        <div className="flex-1">
                          <p className="text-sm text-[#374151] group-hover:text-[#05466C]">
                            {rec.title}
                          </p>
                        </div>
                        <ArrowUpRight className="size-4 text-[#9CA3AF] opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    ))}
                  </div>
                </Card>
              </div>

              {/* Chat Input */}
              <div className="pt-4 border-t border-[#E5E7EB] bg-white">
                <div className="flex gap-3">
                  <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Ask Qode+ AI anything…"
                    className="flex-1 h-12 px-4 bg-[#F9FAFB] border-[#E5E7EB] rounded-2xl focus:border-[#05466C] focus:ring-[#05466C]"
                  />
                  <Button className="h-12 w-12 bg-[#05466C] hover:bg-[#003C65] rounded-2xl p-0 flex items-center justify-center">
                    <Send className="size-5 text-white" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AIAssistantDrawer;