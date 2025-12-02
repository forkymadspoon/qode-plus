import React from 'react';
import {
  Package,
  Gauge,
  AlertTriangle,
  UserX,
  BarChart3,
  Info,
} from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';

// ---------- Mock data ----------

const carbonData = [
  { month: 'Jan', carbon: 12.4 },
  { month: 'Feb', carbon: 13.1 },
  { month: 'Mar', carbon: 14.2 },
  { month: 'Apr', carbon: 13.8 },
  { month: 'May', carbon: 12.9 },
  { month: 'Jun', carbon: 12.2 },
  { month: 'Jul', carbon: 11.7 },
  { month: 'Aug', carbon: 11.3 },
  { month: 'Sep', carbon: 11.8 },
  { month: 'Oct', carbon: 12.0 },
  { month: 'Nov', carbon: 12.6 },
  { month: 'Dec', carbon: 13.0 },
];

const mockAlerts = [
  {
    id: 1,
    severity: 'High',
    message: 'High-impact PET bottle detected in BCRS category',
    severityColor: 'bg-[#FEE2E2] text-[#EB121E] border-[#EB121E]',
  },
  {
    id: 2,
    severity: 'Medium',
    message: 'Missing supplier certifications for 2 key products',
    severityColor: 'bg-[#FEF3C7] text-[#92400E] border-[#F0B82E]',
  },
  {
    id: 3,
    severity: 'Low',
    message: 'Circularity score below target for 4 SKUs',
    severityColor: 'bg-[#E5E7EB] text-[#6B7280] border-[#9CA3AF]',
  },
  {
    id: 4,
    severity: 'High',
    message: 'Unverified energy consumption data for Q4',
    severityColor: 'bg-[#FEE2E2] text-[#EB121E] border-[#EB121E]',
  },
  {
    id: 5,
    severity: 'Medium',
    message: 'New regulatory change requires data update',
    severityColor: 'bg-[#FEF3C7] text-[#92400E] border-[#F0B82E]',
  },
];

interface ScanResult {
  gtin: string;
  shortCode: string;
  productName: string;
  brand: string;
  category: string;
  impactGrade: string;
  impactSummary: string;
  co2PerUse: string;
  packaging: string;
  hotspots: string[];
}

const mockScanResults: ScanResult[] = [
  {
    gtin: '09506000123458',
    shortCode: 'BCRS-01',
    productName: 'SparkleFizz Lemon Soda 330ml',
    brand: 'SparkleFizz',
    category: 'Beverage Container (BCRS)',
    impactGrade: 'B+',
    impactSummary: 'Above-average performance with recoverable packaging in BCRS.',
    co2PerUse: '0.42 kg CO₂e per bottle',
    packaging: 'Single-use PET, 30% rPET, recyclable via BCRS',
    hotspots: ['Packaging material', 'End-of-life collection rates'],
  },
  {
    gtin: '09506000987654',
    shortCode: 'FOOD-12',
    productName: 'Everyday Oat Cereal 450g',
    brand: 'Everyday',
    category: 'Food Product',
    impactGrade: 'A–',
    impactSummary: 'Low emissions across manufacturing and logistics.',
    co2PerUse: '0.18 kg CO₂e per serving',
    packaging: 'Paper box with thin plastic liner',
    hotspots: ['Agricultural inputs', 'Consumer food waste'],
  },
  {
    gtin: '09506000777777',
    shortCode: 'BEAUTY-03',
    productName: 'GlowMore Hydrating Cleanser 150ml',
    brand: 'GlowMore',
    category: 'Beauty & Personal Care',
    impactGrade: 'C',
    impactSummary: 'Packaging and ingredient sourcing require improvement.',
    co2PerUse: '0.35 kg CO₂e per use',
    packaging: 'HDPE bottle, non-refillable',
    hotspots: ['Plastic packaging', 'Non-renewable ingredients'],
  },
];

// ---------- Reusable pieces ----------

interface MetricCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  caption: string;
  iconBg: string;
}

function MetricCard({ icon, value, label, caption, iconBg }: MetricCardProps) {
  return (
    <Card className="p-5 sm:p-6 bg-white border border-[#E5E7EB] rounded-xl hover:shadow-lg transition-all">
      <div className="flex items-start justify-between mb-4">
        <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg ${iconBg} flex items-center justify-center`}>
          {icon}
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <div className="text-xl sm:text-2xl font-semibold text-[#111827]">{value}</div>
        <p className="text-sm text-[#6B7280]">{label}</p>
        <p className="text-xs text-[#9CA3AF] mt-1">{caption}</p>
      </div>
    </Card>
  );
}

function CustomTooltip({ active, payload }: any) {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white px-4 py-2 rounded-lg border border-[#E5E7EB] shadow-lg">
        <p className="text-xs text-[#6B7280] mb-1">
          {payload[0].payload.month}
        </p>
        <p className="text-sm font-medium text-[#111827]">
          {payload[0].value} kg CO₂e
        </p>
      </div>
    );
  }
  return null;
}

// ---------- Main page ----------

export function DashboardPage() {
  const [gtinInput, setGtinInput] = React.useState('');
  const [scanResult, setScanResult] = React.useState<ScanResult | null>(null);
  const [hasScanned, setHasScanned] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [isScanning, setIsScanning] = React.useState(false);

  const handleSimulateScan = () => {
    const trimmed = gtinInput.trim();

    if (!trimmed) {
      setError('Please enter a GTIN or Digital Link URL.');
      setScanResult(null);
      setHasScanned(false);
      return;
    }

    setError(null);
    setIsScanning(true);

    // Fake a short "scan" delay – feels nicer
    setTimeout(() => {
      const normalised = trimmed.toUpperCase();

      const match = mockScanResults.find((item) => {
        return (
          normalised.includes(item.gtin) ||
          normalised.includes(item.shortCode.toUpperCase()) ||
          item.gtin === normalised ||
          item.shortCode.toUpperCase() === normalised
        );
      });

      setScanResult(match ?? null);
      setHasScanned(true);
      setIsScanning(false);
    }, 500);
  };

  return (
    <div className="w-full bg-[#F9FAFB]">
      <div className="p-4 sm:p-6 lg:p-8 max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col gap-2 mb-6 sm:mb-8">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#111827]">
            Impact Dashboard
          </h1>
          <p className="text-sm sm:text-base text-[#6B7280]">
            Real-time visibility into your product sustainability ledger and performance.
          </p>
        </div>

        {/* Summary metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
          <MetricCard
            icon={<Package className="w-6 h-6 text-white" />}
            value="128"
            label="Total Products Tracked"
            caption="GS1 Standards utilized"
            iconBg="bg-[#05466C]"
          />
          <MetricCard
            icon={<Gauge className="w-6 h-6 text-[#05466C]" />}
            value="B+"
            label="Average Impact Score"
            caption="Target: A–"
            iconBg="bg-[#F0B82E]"
          />
          <MetricCard
            icon={<AlertTriangle className="w-6 h-6 text-white" />}
            value="6"
            label="High-Risk Products"
            caption="Requires immediate review"
            iconBg="bg-[#EB121E]"
          />
          <MetricCard
            icon={<UserX className="w-6 h-6 text-[#6B7280]" />}
            value="3"
            label="Suppliers with Missing Data"
            caption="Contact for certification"
            iconBg="bg-[#E5E7EB]"
          />
        </div>

        {/* Trend + alerts */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
          <div className="lg:col-span-2">
            <Card className="p-5 sm:p-6 bg-white border border-[#E5E7EB] rounded-xl hover:shadow-lg transition-shadow">
              <div className="flex flex-col gap-4 h-full">
                <div className="flex items-start justify-between flex-shrink-0">
                  <div className="flex flex-col gap-1">
                    <h2 className="text-base sm:text-lg font-medium text-[#111827]">
                      Carbon Impact Trend
                    </h2>
                    <p className="text-xs sm:text-sm text-[#6B7280]">
                      Monthly emissions across all product categories
                    </p>
                  </div>
                  <BarChart3 className="w-5 h-5 text-[#05466C]/60" />
                </div>

                <div className="w-full h-56 sm:h-64 md:h-72">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                      data={carbonData}
                      margin={{ top: 10, right: 20, left: 0, bottom: 5 }}
                    >
                      <defs>
                        <linearGradient id="colorCarbon" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#05466C" stopOpacity={0.1} />
                          <stop offset="95%" stopColor="#05466C" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid
                        strokeDasharray="3 3"
                        stroke="#E5E7EB"
                        opacity={0.2}
                        vertical={false}
                      />
                      <XAxis
                        dataKey="month"
                        stroke="#9CA3AF"
                        tick={{ fill: '#6B7280', fontSize: 11 }}
                        tickLine={false}
                        axisLine={{ stroke: '#E5E7EB' }}
                      />
                      <YAxis
                        domain={[10, 15]}
                        ticks={[10, 11, 12, 13, 14, 15]}
                        stroke="#9CA3AF"
                        tick={{ fill: '#6B7280', fontSize: 11 }}
                        tickLine={false}
                        axisLine={{ stroke: '#E5E7EB' }}
                        label={{
                          value: 'kg CO₂e',
                          angle: -90,
                          position: 'insideLeft',
                          style: { fill: '#6B7280', fontSize: 11 },
                        }}
                      />
                      <Tooltip content={<CustomTooltip />} />
                      <Area
                        type="monotone"
                        dataKey="carbon"
                        stroke="#05466C"
                        strokeWidth={2.5}
                        fill="url(#colorCarbon)"
                        dot={{ fill: '#05466C', strokeWidth: 2, r: 4 }}
                        activeDot={{ r: 6, fill: '#05466C', strokeWidth: 0 }}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </Card>
          </div>

          <div className="lg:col-span-1">
            <Card className="p-5 sm:p-6 bg-white border border-[#E5E7EB] rounded-xl hover:shadow-lg transition-shadow h-full">
              <div className="flex flex-col gap-4 h-full">
                <div className="flex flex-col gap-1 flex-shrink-0">
                  <h2 className="text-base sm:text-lg font-medium text-[#111827]">
                    Alerts & Hotspots
                  </h2>
                  <p className="text-xs sm:text-sm text-[#6B7280]">
                    Immediate action required for high-risk items.
                  </p>
                </div>

                <div className="flex flex-col gap-3 flex-1 overflow-y-auto min-h-[160px] max-h-72 pr-1">
                  {mockAlerts.map((alert) => (
                    <div
                      key={alert.id}
                      className="flex flex-col gap-2 p-3 bg-[#F9FAFB] rounded-lg border border-[#E5E7EB] hover:shadow-sm transition-shadow flex-shrink-0"
                    >
                      <Badge className={`self-start rounded-full px-3 py-0.5 text-xs border ${alert.severityColor}`}>
                        {alert.severity}
                      </Badge>
                      <p className="text-sm text-[#111827]">{alert.message}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* ---------- SCAN SIMULATOR (now working) ---------- */}
        <div className="mb-6 sm:mb-8">
          <Card className="p-5 sm:p-6 bg-white border border-[#E5E7EB] rounded-xl hover:shadow-lg transition-shadow">
            <div className="flex flex-col gap-5 sm:gap-6">
              <div className="flex flex-col gap-2">
                <h2 className="text-base sm:text-lg font-semibold text-[#05466C]">
                  Scan Simulator
                </h2>
                <p className="text-xs sm:text-sm text-[#6B7280]">
                  Simulate a consumer scanning a GS1 Digital Link on-pack. Try:{' '}
                  <span className="font-medium text-[#05466C]">
                    09506000123458
                  </span>{' '}
                  or{' '}
                  <span className="font-medium text-[#05466C]">
                    BCRS-01
                  </span>
                  .
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <div className="flex-1">
                  <Input
                    type="text"
                    placeholder="Enter GTIN (e.g. 09506000123458) or Digital Link URL..."
                    value={gtinInput}
                    onChange={(e) => setGtinInput(e.target.value)}
                    className="border-[#E5E7EB] focus:border-[#05466C] focus:ring-[#05466C]"
                  />
                  {error && (
                    <p className="mt-1 text-xs text-[#EB121E]">
                      {error}
                    </p>
                  )}
                </div>
                <Button
                  type="button"
                  onClick={handleSimulateScan}
                  disabled={isScanning}
                  className="w-full sm:w-auto bg-[#05466C] text-white hover:bg-[#003C65] px-6 sm:px-8 disabled:opacity-60"
                >
                  {isScanning ? 'Scanning…' : 'Simulate Scan'}
                </Button>
              </div>

              <div className="min-h-[140px] sm:min-h-[160px] bg-[#F9FAFB] rounded-lg border border-[#E5E7EB] flex items-center justify-center p-6 sm:p-8">
                {!hasScanned && (
                  <div className="flex flex-col items-center gap-3 text-center max-w-md">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white border-2 border-[#E5E7EB] flex items-center justify-center">
                      <Info className="w-7 h-7 sm:w-8 sm:h-8 text-[#9CA3AF]" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className="text-sm sm:text-base font-medium text-[#111827]">
                        Scan result will appear here
                      </p>
                      <p className="text-xs sm:text-sm text-[#6B7280]">
                        Enter a GTIN or Digital Link URL to preview the consumer experience.
                      </p>
                    </div>
                  </div>
                )}

                {hasScanned && !isScanning && scanResult && (
                  <div className="w-full max-w-2xl">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-white border border-[#E5E7EB] flex items-center justify-center">
                          <Package className="w-6 h-6 text-[#05466C]" />
                        </div>
                        <div className="flex flex-col gap-1">
                          <p className="text-sm font-medium text-[#6B7280]">
                            {scanResult.brand}
                          </p>
                          <h3 className="text-base sm:text-lg font-semibold text-[#111827]">
                            {scanResult.productName}
                          </h3>
                          <p className="text-xs sm:text-sm text-[#6B7280]">
                            {scanResult.category}
                          </p>
                          <p className="mt-2 text-xs sm:text-sm text-[#4B5563]">
                            {scanResult.impactSummary}
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col items-end gap-2">
                        <Badge className="bg-[#05466C] text-white rounded-full px-3 py-1 text-xs sm:text-sm">
                          Impact grade: {scanResult.impactGrade}
                        </Badge>
                        <p className="text-xs sm:text-sm text-[#6B7280]">
                          GTIN: {scanResult.gtin}
                        </p>
                        <p className="text-xs sm:text-sm text-[#6B7280]">
                          Reference: {scanResult.shortCode}
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                      <Card className="p-3 sm:p-4 bg-white border border-[#E5E7EB] rounded-lg">
                        <p className="text-xs text-[#6B7280] mb-1">
                          Carbon footprint
                        </p>
                        <p className="text-sm sm:text-base font-semibold text-[#111827]">
                          {scanResult.co2PerUse}
                        </p>
                      </Card>
                      <Card className="p-3 sm:p-4 bg-white border border-[#E5E7EB] rounded-lg sm:col-span-2">
                        <p className="text-xs text-[#6B7280] mb-1">
                          Packaging
                        </p>
                        <p className="text-xs sm:text-sm text-[#111827]">
                          {scanResult.packaging}
                        </p>
                      </Card>
                    </div>

                    <div className="mt-4">
                      <p className="text-xs sm:text-sm font-medium text-[#6B7280] mb-1">
                        Key hotspots
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {scanResult.hotspots.map((h) => (
                          <Badge
                            key={h}
                            className="bg-white text-[#111827] border border-[#E5E7EB] rounded-full px-3 py-1 text-xs"
                          >
                            {h}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {hasScanned && !isScanning && !scanResult && (
                  <div className="flex flex-col items-center gap-3 text-center max-w-md">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white border-2 border-[#FEE2E2] flex items-center justify-center">
                      <AlertTriangle className="w-7 h-7 sm:w-8 sm:h-8 text-[#EB121E]" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className="text-sm sm:text-base font-medium text-[#111827]">
                        No product found in the ledger
                      </p>
                      <p className="text-xs sm:text-sm text-[#6B7280]">
                        This GTIN isn’t mapped yet. Try one of the sample IDs above or onboard this
                        product via the Product Impact Passport.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </Card>
        </div>

        {/* Quick stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-4 sm:mb-0">
          <Card className="p-5 sm:p-6 bg-white border border-[#E5E7EB] rounded-xl hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between mb-3">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#05466C]/10 flex items-center justify-center">
                <Package className="w-5 h-5 text-[#05466C]" />
              </div>
              <Badge className="bg-[#05466C] text-white rounded-full px-3 py-1 text-xs">
                FMCG
              </Badge>
            </div>
            <div className="flex flex-col gap-1">
              <div className="text-xl sm:text-2xl font-medium text-[#111827]">52</div>
              <p className="text-sm text-[#6B7280]">Food Products</p>
              <p className="text-xs text-[#9CA3AF] mt-2">40.6% of total inventory</p>
            </div>
          </Card>

          <Card className="p-5 sm:p-6 bg-white border border-[#E5E7EB] rounded-xl hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between mb-3">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#F0B82E]/10 flex items-center justify-center">
                <Package className="w-5 h-5 text-[#F0B82E]" />
              </div>
              <Badge className="bg-[#F0B82E] text-[#05466C] rounded-full px-3 py-1 text-xs">
                BCRS
              </Badge>
            </div>
            <div className="flex flex-col gap-1">
              <div className="text-xl sm:text-2xl font-medium text-[#111827]">48</div>
              <p className="text-sm text-[#6B7280]">Beverage Containers</p>
              <p className="text-xs text-[#9CA3AF] mt-2">37.5% of total inventory</p>
            </div>
          </Card>

          <Card className="p-5 sm:p-6 bg-white border border-[#E5E7EB] rounded-xl hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between mb-3">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#EB121E]/10 flex items-center justify-center">
                <Package className="w-5 h-5 text-[#EB121E]" />
              </div>
              <Badge className="bg-[#FEE2E2] text-[#EB121E] rounded-full px-3 py-1 text-xs">
                Beauty
              </Badge>
            </div>
            <div className="flex flex-col gap-1">
              <div className="text-xl sm:text-2xl font-medium text-[#111827]">28</div>
              <p className="text-sm text-[#6B7280]">Beauty & Cosmetics</p>
              <p className="text-xs text-[#9CA3AF] mt-2">21.9% of total inventory</p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;