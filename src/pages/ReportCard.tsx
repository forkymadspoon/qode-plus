import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { BarChart3, TrendingUp, TrendingDown } from 'lucide-react';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts';

export type ReportCategory = 'fmcg' | 'bcrs' | 'beauty';

export interface ReportCardProps {
  title: string;
  description: string;
  category: ReportCategory;
  insight: string;
  chartType: 'line' | 'bar' | 'stacked-bar';
  chartColor: 'navy' | 'gold' | 'red';
  chartData: Array<{ name: string; value: number; value2?: number }>;
  trendDirection?: 'up' | 'down';
}

const categoryConfig: Record<
  ReportCategory,
  { label: string; color: string }
> = {
  fmcg: {
    label: 'FMCG Food Products',
    color: 'bg-[#05466C] text-white',
  },
  bcrs: {
    label: 'BCRS Beverage Containers',
    color: 'bg-[#F0B82E] text-[#05466C]',
  },
  beauty: {
    label: 'Beauty / Cosmetics',
    color: 'bg-[#FEE2E2] text-[#EB121E]',
  },
};

const chartColorConfig = {
  navy: '#05466C',
  gold: '#F0B82E',
  red: '#EB121E',
} as const;

export function ReportCard({
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
    <Card className="flex flex-col gap-4 border border-[#E5E7EB] bg-white p-6 hover:shadow-lg transition-shadow">
      {/* Header */}
      <div className="flex flex-col gap-2">
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1">
            <h3 className="text-base font-semibold text-[#05466C]">
              {title}
            </h3>
          </div>
          <BarChart3 className="h-5 w-5 flex-shrink-0 text-[#05466C]/60" />
        </div>
        <p className="text-sm text-[#6B7280]">{description}</p>
      </div>

      {/* Category badge */}
      <div>
        <Badge
          className={`${categoryStyle.color} rounded-full px-3 py-1 text-xs`}
        >
          {categoryStyle.label}
        </Badge>
      </div>

      {/* Chart preview */}
      <div className="h-32 w-full rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] p-3">
        <ResponsiveContainer width="100%" height="100%">
          {chartType === 'line' ? (
            <LineChart data={chartData}>
              <XAxis dataKey="name" hide />
              <YAxis hide />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'white',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                  fontSize: '12px',
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
          ) : chartType === 'bar' ? (
            <BarChart data={chartData}>
              <XAxis dataKey="name" hide />
              <YAxis hide />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'white',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                  fontSize: '12px',
                }}
              />
              <Bar dataKey="value" fill={color} radius={[4, 4, 0, 0]} />
            </BarChart>
          ) : (
            <BarChart data={chartData}>
              <XAxis dataKey="name" hide />
              <YAxis hide />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'white',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                  fontSize: '12px',
                }}
              />
              <Bar
                dataKey="value"
                stackId="a"
                fill={color}
                radius={[0, 0, 0, 0]}
              />
              <Bar
                dataKey="value2"
                stackId="a"
                fill={`${color}80`}
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          )}
        </ResponsiveContainer>
      </div>

      {/* Insight */}
      <div className="flex items-start gap-2 rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] p-3">
        {trendDirection === 'up' && (
          <TrendingUp className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#EB121E]" />
        )}
        {trendDirection === 'down' && (
          <TrendingDown className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#10B981]" />
        )}
        <p className="text-sm text-[#6B7280]">{insight}</p>
      </div>

      {/* CTA */}
      <Button
        variant="outline"
        className="w-full border-[#05466C] text-[#05466C] transition-all hover:bg-[#05466C] hover:text-white"
      >
        View Report
      </Button>
    </Card>
  );
}
