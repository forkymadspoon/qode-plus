import {
  Download,
  FileDown,
  TrendingUp,
  TrendingDown,
  BarChart3,
} from "lucide-react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Card } from "../ui/card";
import {
  LineChart,
  Line,
  BarChart as ReBarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

// Sample chart data for different report types
const carbonData = [
  { name: "Jan", value: 420 },
  { name: "Feb", value: 450 },
  { name: "Mar", value: 440 },
  { name: "Apr", value: 480 },
  { name: "May", value: 510 },
  { name: "Jun", value: 540 },
];

const packagingData = [
  { name: "PET", value: 340, value2: 120 },
  { name: "HDPE", value: 280, value2: 90 },
  { name: "Glass", value: 180, value2: 60 },
  { name: "Aluminum", value: 150, value2: 50 },
  { name: "Other", value: 100, value2: 40 },
];

const riskData = [
  { name: "Q1", value: 8 },
  { name: "Q2", value: 10 },
  { name: "Q3", value: 12 },
  { name: "Q4", value: 12 },
];

const circularityData = [
  { name: "Jan", value: 28 },
  { name: "Feb", value: 32 },
  { name: "Mar", value: 35 },
  { name: "Apr", value: 38 },
  { name: "May", value: 40 },
  { name: "Jun", value: 42 },
];

const complianceData = [
  { name: "FMCG", value: 85 },
  { name: "BCRS", value: 92 },
  { name: "Beauty", value: 78 },
  { name: "Other", value: 88 },
];

const lifecycleData = [
  { name: "Raw", value: 120, value2: 80 },
  { name: "Prod", value: 200, value2: 150 },
  { name: "Trans", value: 90, value2: 60 },
  { name: "Use", value: 150, value2: 100 },
  { name: "EOL", value: 180, value2: 120 },
];

const recoveryData = [
  { name: "Jan", value: 62 },
  { name: "Feb", value: 65 },
  { name: "Mar", value: 68 },
  { name: "Apr", value: 70 },
  { name: "May", value: 72 },
  { name: "Jun", value: 75 },
];

const depositData = [
  { name: "Q1", value: 88 },
  { name: "Q2", value: 90 },
  { name: "Q3", value: 92 },
  { name: "Q4", value: 94 },
];

type ReportCategory = "fmcg" | "bcrs" | "beauty";

interface ReportCardProps {
  title: string;
  description: string;
  category: ReportCategory;
  insight: string;
  chartType: "line" | "bar" | "stacked-bar";
  chartColor: "navy" | "gold" | "red";
  chartData: Array<{ name: string; value: number; value2?: number }>;
  trendDirection?: "up" | "down";
}

const categoryConfig: Record<
  ReportCategory,
  { label: string; color: string }
> = {
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

const chartColorConfig: Record<"navy" | "gold" | "red", string> = {
  navy: "#05466C",
  gold: "#F0B82E",
  red: "#EB121E",
};

function ReportCard({
  title,
  description,
  category,
  insight,
  chartType,
  chartColor,
  chartData,
  trendDirection,
}: ReportCardProps) {
  const categoryStyle = categoryConfig[category];
  const color = chartColorConfig[chartColor];

  return (
    <Card className="p-5 sm:p-6 flex flex-col gap-4 hover:shadow-lg transition-shadow bg-white border border-[#E5E7EB] h-full">
      {/* Header */}
      <div className="flex flex-col gap-2">
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1 min-w-0">
            <h3 className="text-[#05466C] text-base sm:text-sm md:text-base truncate">
              {title}
            </h3>
          </div>
          <BarChart3 className="size-5 text-[#05466C]/60 flex-shrink-0" />
        </div>
        <p className="text-xs sm:text-sm text-[#6B7280]">{description}</p>
      </div>

      {/* Category Badge */}
      <div>
        <Badge className={`${categoryStyle.color} rounded-full px-3 py-1 text-[11px]`}>
          {categoryStyle.label}
        </Badge>
      </div>

      {/* Chart Preview */}
      <div className="h-28 sm:h-32 w-full bg-[#F9FAFB] rounded-lg p-3 border border-[#E5E7EB]">
        <ResponsiveContainer width="100%" height="100%">
          {chartType === "line" ? (
            <LineChart data={chartData}>
              <XAxis dataKey="name" hide />
              <YAxis hide />
              <Tooltip
                contentStyle={{
                  backgroundColor: "white",
                  border: "1px solid #e5e7eb",
                  borderRadius: "8px",
                  fontSize: "12px",
                }}
              />
              <Line
                type="monotone"
                dataKey="value"
                stroke={color}
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          ) : chartType === "bar" ? (
            <ReBarChart data={chartData}>
              <XAxis dataKey="name" hide />
              <YAxis hide />
              <Tooltip
                contentStyle={{
                  backgroundColor: "white",
                  border: "1px solid #e5e7eb",
                  borderRadius: "8px",
                  fontSize: "12px",
                }}
              />
              <Bar dataKey="value" fill={color} radius={[4, 4, 0, 0]} />
            </ReBarChart>
          ) : (
            <ReBarChart data={chartData}>
              <XAxis dataKey="name" hide />
              <YAxis hide />
              <Tooltip
                contentStyle={{
                  backgroundColor: "white",
                  border: "1px solid #e5e7eb",
                  borderRadius: "8px",
                  fontSize: "12px",
                }}
              />
              <Bar dataKey="value" stackId="a" fill={color} radius={[0, 0, 0, 0]} />
              <Bar
                dataKey="value2"
                stackId="a"
                fill={`${color}80`}
                radius={[4, 4, 0, 0]}
              />
            </ReBarChart>
          )}
        </ResponsiveContainer>
      </div>

      {/* Insight */}
      <div className="flex items-start gap-2 p-3 bg-[#F9FAFB] rounded-lg border border-[#E5E7EB]">
        {trendDirection === "up" && (
          <TrendingUp className="size-4 text-[#EB121E] flex-shrink-0 mt-0.5" />
        )}
        {trendDirection === "down" && (
          <TrendingDown className="size-4 text-[#10B981] flex-shrink-0 mt-0.5" />
        )}
        <p className="text-xs sm:text-sm text-[#6B7280]">{insight}</p>
      </div>

      {/* View Button */}
      <Button
        variant="outline"
        className="w-full border-[#05466C] text-[#05466C] hover:bg-[#05466C] hover:text-white transition-all text-sm"
      >
        View Report
      </Button>
    </Card>
  );
}

// CONTENT-ONLY REPORTS PAGE (no sidebar/topbar)
export function ReportsPage() {
  return (
    <div className="w-full h-full bg-[#F9FAFB]">
      <div className="p-4 sm:p-6 lg:p-8">
        {/* Page Header */}
        <div className="flex flex-col gap-4 mb-8">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
            <div className="flex flex-col gap-2">
              <h1 className="text-[#05466C] text-2xl sm:text-3xl">Reports</h1>
              <p className="text-sm sm:text-base text-[#6B7280] max-w-2xl">
                Analytics for FMCG food products, BCRS beverage containers, and
                beauty categories.
              </p>
            </div>

            <div className="flex flex-col xs:flex-row gap-2 sm:gap-3 lg:items-center">
              <Button
                variant="outline"
                className="border-[#E5E7EB] text-[#6B7280] hover:bg-[#F9FAFB] hover:text-[#05466C] w-full xs:w-auto"
              >
                <Download className="size-4 mr-2" />
                Download CSV
              </Button>
              <Button className="bg-[#05466C] text-white hover:bg-[#003C65] w-full xs:w-auto">
                <FileDown className="size-4 mr-2" />
                Export PDF
              </Button>
            </div>
          </div>
        </div>

        {/* Reports Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6 mb-10">
          <ReportCard
            title="Carbon Footprint Summary"
            description="Comprehensive analysis of carbon emissions across product lifecycle stages"
            category="fmcg"
            insight="Carbon emissions increased 4.8% this quarter"
            chartType="line"
            chartColor="navy"
            chartData={carbonData}
            trendDirection="up"
          />

          <ReportCard
            title="Packaging Material Breakdown"
            description="Distribution of packaging materials by weight and recyclability"
            category="bcrs"
            insight="PET and HDPE make up 68% of packaging mass"
            chartType="stacked-bar"
            chartColor="gold"
            chartData={packagingData}
          />

          <ReportCard
            title="Supplier Risk Report"
            description="Risk assessment across supplier network with compliance tracking"
            category="fmcg"
            insight="12 suppliers flagged as high-risk"
            chartType="bar"
            chartColor="red"
            chartData={riskData}
            trendDirection="up"
          />

          <ReportCard
            title="Circularity Score Trend"
            description="Material circularity index tracking over time"
            category="bcrs"
            insight="Average circularity increased to 42%"
            chartType="line"
            chartColor="gold"
            chartData={circularityData}
            trendDirection="down"
          />

          <ReportCard
            title="Compliance Overview"
            description="Regulatory compliance status across all product categories"
            category="beauty"
            insight="Overall compliance rate at 86%"
            chartType="bar"
            chartColor="navy"
            chartData={complianceData}
          />

          <ReportCard
            title="Lifecycle Hotspots"
            description="Environmental impact concentration points across lifecycle stages"
            category="fmcg"
            insight="Production phase accounts for 38% of total impact"
            chartType="stacked-bar"
            chartColor="red"
            chartData={lifecycleData}
          />

          <ReportCard
            title="End-of-Life Recovery Insights"
            description="Recovery rates and material recycling performance metrics"
            category="bcrs"
            insight="Recovery rate improved to 75%"
            chartType="line"
            chartColor="gold"
            chartData={recoveryData}
            trendDirection="down"
          />

          <ReportCard
            title="Deposit Scheme (BCRS) Performance"
            description="Return rates and deposit collection efficiency analysis"
            category="bcrs"
            insight="Return rate reached 94% this quarter"
            chartType="line"
            chartColor="gold"
            chartData={depositData}
            trendDirection="down"
          />
        </div>

        {/* Generated Reports History Table */}
        <div className="flex flex-col gap-4">
          <h2 className="text-[#05466C] text-xl">Generated Reports History</h2>

          <div className="bg-white border border-[#E5E7EB] rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[720px]">
                <thead className="bg-[#F9FAFB] border-b border-[#E5E7EB]">
                  <tr>
                    <th className="px-6 py-3 sm:py-4 text-left text-xs sm:text-sm text-[#6B7280]">
                      Report Name
                    </th>
                    <th className="px-6 py-3 sm:py-4 text-left text-xs sm:text-sm text-[#6B7280]">
                      Category
                    </th>
                    <th className="px-6 py-3 sm:py-4 text-left text-xs sm:text-sm text-[#6B7280]">
                      Generated On
                    </th>
                    <th className="px-6 py-3 sm:py-4 text-left text-xs sm:text-sm text-[#6B7280]">
                      Format
                    </th>
                    <th className="px-6 py-3 sm:py-4 text-left text-xs sm:text-sm text-[#6B7280]">
                      Status
                    </th>
                    <th className="px-6 py-3 sm:py-4 text-left text-xs sm:text-sm text-[#6B7280]">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E5E7EB] text-xs sm:text-sm">
                  <tr className="hover:bg-[#F9FAFB]">
                    <td className="px-6 py-3 sm:py-4 text-[#111827]">
                      Carbon Footprint Summary Q4 2025
                    </td>
                    <td className="px-6 py-3 sm:py-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-[#05466C] text-white">
                        FMCG
                      </span>
                    </td>
                    <td className="px-6 py-3 sm:py-4 text-[#6B7280]">
                      Nov 28, 2025
                    </td>
                    <td className="px-6 py-3 sm:py-4 text-[#6B7280]">PDF</td>
                    <td className="px-6 py-3 sm:py-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-[#D1FAE5] text-[#065F46]">
                        Ready
                      </span>
                    </td>
                    <td className="px-6 py-3 sm:py-4">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-[#05466C] hover:bg-[#EFF6FF]"
                      >
                        <Download className="size-4" />
                      </Button>
                    </td>
                  </tr>

                  <tr className="hover:bg-[#F9FAFB]">
                    <td className="px-6 py-3 sm:py-4 text-[#111827]">
                      BCRS Deposit Scheme Performance
                    </td>
                    <td className="px-6 py-3 sm:py-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-[#F0B82E] text-[#05466C]">
                        BCRS
                      </span>
                    </td>
                    <td className="px-6 py-3 sm:py-4 text-[#6B7280]">
                      Nov 27, 2025
                    </td>
                    <td className="px-6 py-3 sm:py-4 text-[#6B7280]">CSV</td>
                    <td className="px-6 py-3 sm:py-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-[#D1FAE5] text-[#065F46]">
                        Ready
                      </span>
                    </td>
                    <td className="px-6 py-3 sm:py-4">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-[#05466C] hover:bg-[#EFF6FF]"
                      >
                        <Download className="size-4" />
                      </Button>
                    </td>
                  </tr>

                  <tr className="hover:bg-[#F9FAFB]">
                    <td className="px-6 py-3 sm:py-4 text-[#111827]">
                      Beauty Products Compliance Report
                    </td>
                    <td className="px-6 py-3 sm:py-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-[#FEE2E2] text-[#EB121E]">
                        Beauty
                      </span>
                    </td>
                    <td className="px-6 py-3 sm:py-4 text-[#6B7280]">
                      Nov 25, 2025
                    </td>
                    <td className="px-6 py-3 sm:py-4 text-[#6B7280]">PDF</td>
                    <td className="px-6 py-3 sm:py-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-[#D1FAE5] text-[#065F46]">
                        Ready
                      </span>
                    </td>
                    <td className="px-6 py-3 sm:py-4">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-[#05466C] hover:bg-[#EFF6FF]"
                      >
                        <Download className="size-4" />
                      </Button>
                    </td>
                  </tr>

                  <tr className="hover:bg-[#F9FAFB]">
                    <td className="px-6 py-3 sm:py-4 text-[#111827]">
                      Supplier Risk Assessment
                    </td>
                    <td className="px-6 py-3 sm:py-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-[#05466C] text-white">
                        FMCG
                      </span>
                    </td>
                    <td className="px-6 py-3 sm:py-4 text-[#6B7280]">
                      Nov 23, 2025
                    </td>
                    <td className="px-6 py-3 sm:py-4 text-[#6B7280]">PDF</td>
                    <td className="px-6 py-3 sm:py-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-[#FEF3C7] text-[#92400E]">
                        Processing
                      </span>
                    </td>
                    <td className="px-6 py-3 sm:py-4">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-[#9CA3AF] hover:bg-[#F3F4F6]"
                        disabled
                      >
                        <Download className="size-4" />
                      </Button>
                    </td>
                  </tr>

                  <tr className="hover:bg-[#F9FAFB]">
                    <td className="px-6 py-3 sm:py-4 text-[#111827]">
                      Packaging Material Analysis
                    </td>
                    <td className="px-6 py-3 sm:py-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-[#F0B82E] text-[#05466C]">
                        BCRS
                      </span>
                    </td>
                    <td className="px-6 py-3 sm:py-4 text-[#6B7280]">
                      Nov 20, 2025
                    </td>
                    <td className="px-6 py-3 sm:py-4 text-[#6B7280]">CSV</td>
                    <td className="px-6 py-3 sm:py-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-[#D1FAE5] text-[#065F46]">
                        Ready
                      </span>
                    </td>
                    <td className="px-6 py-3 sm:py-4">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-[#05466C] hover:bg-[#EFF6FF]"
                      >
                        <Download className="size-4" />
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
