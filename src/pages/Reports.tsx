import { Button } from '../ui/button';
import { FileDown, Download } from 'lucide-react';
import { ReportCard } from '../pages/ReportCard';

// ---- Sample chart data ----
const carbonData = [
  { name: 'Jan', value: 420 },
  { name: 'Feb', value: 450 },
  { name: 'Mar', value: 440 },
  { name: 'Apr', value: 480 },
  { name: 'May', value: 510 },
  { name: 'Jun', value: 540 },
];

const packagingData = [
  { name: 'PET', value: 340, value2: 120 },
  { name: 'HDPE', value: 280, value2: 90 },
  { name: 'Glass', value: 180, value2: 60 },
  { name: 'Aluminum', value: 150, value2: 50 },
  { name: 'Other', value: 100, value2: 40 },
];

const riskData = [
  { name: 'Q1', value: 8 },
  { name: 'Q2', value: 10 },
  { name: 'Q3', value: 12 },
  { name: 'Q4', value: 12 },
];

const circularityData = [
  { name: 'Jan', value: 28 },
  { name: 'Feb', value: 32 },
  { name: 'Mar', value: 35 },
  { name: 'Apr', value: 38 },
  { name: 'May', value: 40 },
  { name: 'Jun', value: 42 },
];

const complianceData = [
  { name: 'FMCG', value: 85 },
  { name: 'BCRS', value: 92 },
  { name: 'Beauty', value: 78 },
  { name: 'Other', value: 88 },
];

const lifecycleData = [
  { name: 'Raw', value: 120, value2: 80 },
  { name: 'Prod', value: 200, value2: 150 },
  { name: 'Trans', value: 90, value2: 60 },
  { name: 'Use', value: 150, value2: 100 },
  { name: 'EOL', value: 180, value2: 120 },
];

const recoveryData = [
  { name: 'Jan', value: 62 },
  { name: 'Feb', value: 65 },
  { name: 'Mar', value: 68 },
  { name: 'Apr', value: 70 },
  { name: 'May', value: 72 },
  { name: 'Jun', value: 75 },
];

const depositData = [
  { name: 'Q1', value: 88 },
  { name: 'Q2', value: 90 },
  { name: 'Q3', value: 92 },
  { name: 'Q4', value: 94 },
];

export function Reports() {
  return (
    <div className="flex flex-col gap-8 px-4 py-6 lg:px-8 lg:py-8">
      {/* Page header */}
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-semibold text-[#05466C]">Reports</h1>
          <p className="text-sm text-[#6B7280]">
            Analytics for FMCG food products, BCRS beverage containers, and
            beauty categories.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <Button
            variant="outline"
            className="border-[#E5E7EB] text-[#6B7280] hover:bg-[#F9FAFB] hover:text-[#05466C]"
          >
            <Download className="mr-2 h-4 w-4" />
            Download CSV
          </Button>
          <Button className="bg-[#05466C] text-white hover:bg-[#003C65]">
            <FileDown className="mr-2 h-4 w-4" />
            Export PDF
          </Button>
        </div>
      </div>

      {/* Reports grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
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

      {/* Generated reports history */}
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold text-[#05466C]">
          Generated Reports History
        </h2>

        <div className="overflow-hidden rounded-lg border border-[#E5E7EB] bg-white">
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm">
              <thead className="border-b border-[#E5E7EB] bg-[#F9FAFB]">
                <tr>
                  <th className="px-6 py-4 text-[#6B7280]">Report Name</th>
                  <th className="px-6 py-4 text-[#6B7280]">Category</th>
                  <th className="px-6 py-4 text-[#6B7280]">Generated On</th>
                  <th className="px-6 py-4 text-[#6B7280]">Format</th>
                  <th className="px-6 py-4 text-[#6B7280]">Status</th>
                  <th className="px-6 py-4 text-[#6B7280]">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E5E7EB]">
                <tr className="hover:bg-[#F9FAFB]">
                  <td className="px-6 py-4 text-[#111827]">
                    Carbon Footprint Summary Q4 2025
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center rounded-full bg-[#05466C] px-3 py-1 text-xs text-white">
                      FMCG
                    </span>
                  </td>
                  <td className="px-6 py-4 text-[#6B7280]">Nov 28, 2025</td>
                  <td className="px-6 py-4 text-[#6B7280]">PDF</td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center rounded-full bg-[#D1FAE5] px-3 py-1 text-xs text-[#065F46]">
                      Ready
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-[#05466C] hover:bg-[#EFF6FF]"
                    >
                      <Download className="h-4 w-4" />
                    </Button>
                  </td>
                </tr>

                <tr className="hover:bg-[#F9FAFB]">
                  <td className="px-6 py-4 text-[#111827]">
                    BCRS Deposit Scheme Performance
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center rounded-full bg-[#F0B82E] px-3 py-1 text-xs text-[#05466C]">
                      BCRS
                    </span>
                  </td>
                  <td className="px-6 py-4 text-[#6B7280]">Nov 27, 2025</td>
                  <td className="px-6 py-4 text-[#6B7280]">CSV</td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center rounded-full bg-[#D1FAE5] px-3 py-1 text-xs text-[#065F46]">
                      Ready
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-[#05466C] hover:bg-[#EFF6FF]"
                    >
                      <Download className="h-4 w-4" />
                    </Button>
                  </td>
                </tr>

                <tr className="hover:bg-[#F9FAFB]">
                  <td className="px-6 py-4 text-[#111827]">
                    Beauty Products Compliance Report
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center rounded-full bg-[#FEE2E2] px-3 py-1 text-xs text-[#EB121E]">
                      Beauty
                    </span>
                  </td>
                  <td className="px-6 py-4 text-[#6B7280]">Nov 25, 2025</td>
                  <td className="px-6 py-4 text-[#6B7280]">PDF</td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center rounded-full bg-[#D1FAE5] px-3 py-1 text-xs text-[#065F46]">
                      Ready
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-[#05466C] hover:bg-[#EFF6FF]"
                    >
                      <Download className="h-4 w-4" />
                    </Button>
                  </td>
                </tr>

                <tr className="hover:bg-[#F9FAFB]">
                  <td className="px-6 py-4 text-[#111827]">
                    Supplier Risk Assessment
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center rounded-full bg-[#05466C] px-3 py-1 text-xs text-white">
                      FMCG
                    </span>
                  </td>
                  <td className="px-6 py-4 text-[#6B7280]">Nov 23, 2025</td>
                  <td className="px-6 py-4 text-[#6B7280]">PDF</td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center rounded-full bg-[#FEF3C7] px-3 py-1 text-xs text-[#92400E]">
                      Processing
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-[#9CA3AF] hover:bg-transparent"
                      disabled
                    >
                      <Download className="h-4 w-4" />
                    </Button>
                  </td>
                </tr>

                <tr className="hover:bg-[#F9FAFB]">
                  <td className="px-6 py-4 text-[#111827]">
                    Packaging Material Analysis
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center rounded-full bg-[#F0B82E] px-3 py-1 text-xs text-[#05466C]">
                      BCRS
                    </span>
                  </td>
                  <td className="px-6 py-4 text-[#6B7280]">Nov 20, 2025</td>
                  <td className="px-6 py-4 text-[#6B7280]">CSV</td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center rounded-full bg-[#D1FAE5] px-3 py-1 text-xs text-[#065F46]">
                      Ready
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-[#05466C] hover:bg-[#EFF6FF]"
                    >
                      <Download className="h-4 w-4" />
                    </Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reports;
