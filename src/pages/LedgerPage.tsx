import React from "react";
import {
  Package,
  TrendingUp,
  AlertTriangle,
  Factory,
  Truck,
  Recycle,
  CheckCircle,
  Box,
  Filter,
  Download,
  Clock,
  MapPin,
  User,
} from "lucide-react";

// ----------------- Mock data -----------------

type LedgerEvent = {
  id: number;
  timestamp: string;
  date: string;
  time: string;
  eventType: string;
  productName: string;
  gtin: string;
  category: "FMCG" | "BCRS" | "Beauty";
  actor: string;
  location: string;
  status: "Verified" | "In Progress" | "Action Required";
  iconBg: string;
  icon: React.ReactNode;
  details: {
    impactScore: "A" | "B" | "C" | "D";
    carbonFootprint: string;
    circularity: string;
  };
};

const mockLedgerEvents: LedgerEvent[] = [
  {
    id: 1,
    timestamp: "2024-11-26 14:32:15",
    date: "Nov 26, 2024",
    time: "14:32",
    eventType: "Product Registered",
    productName: "Organic Tomato Pasta Sauce",
    gtin: "5012345678900",
    category: "FMCG",
    actor: "GreenFields Organic Co.",
    location: "Thailand",
    status: "Verified",
    icon: <Package className="w-5 h-5" />,
    iconBg: "bg-[#05466C]",
    details: {
      impactScore: "B",
      carbonFootprint: "8.2 kg CO₂e",
      circularity: "72%",
    },
  },
  {
    id: 2,
    timestamp: "2024-11-26 11:18:42",
    date: "Nov 26, 2024",
    time: "11:18",
    eventType: "Carbon Data Updated",
    productName: "Sparkling Mineral Water 500ml",
    gtin: "5012345678901",
    category: "BCRS",
    actor: "EcoCycle Solutions",
    location: "Singapore",
    status: "Verified",
    icon: <TrendingUp className="w-5 h-5" />,
    iconBg: "bg-[#F0B82E]",
    details: {
      impactScore: "A",
      carbonFootprint: "4.1 kg CO₂e",
      circularity: "85%",
    },
  },
  {
    id: 3,
    timestamp: "2024-11-25 16:45:30",
    date: "Nov 25, 2024",
    time: "16:45",
    eventType: "Compliance Check Failed",
    productName: "Natural Face Moisturizer 50ml",
    gtin: "5012345678902",
    category: "Beauty",
    actor: "Natural Beauty Labs",
    location: "South Korea",
    status: "Action Required",
    icon: <AlertTriangle className="w-5 h-5" />,
    iconBg: "bg-[#EB121E]",
    details: {
      impactScore: "B",
      carbonFootprint: "12.5 kg CO₂e",
      circularity: "68%",
    },
  },
  {
    id: 4,
    timestamp: "2024-11-25 09:22:18",
    date: "Nov 25, 2024",
    time: "09:22",
    eventType: "Manufacturing Started",
    productName: "Premium Cola 330ml",
    gtin: "5012345678903",
    category: "BCRS",
    actor: "PureDrink Bottling Inc.",
    location: "Malaysia",
    status: "In Progress",
    icon: <Factory className="w-5 h-5" />,
    iconBg: "bg-[#F0B82E]",
    details: {
      impactScore: "C",
      carbonFootprint: "18.3 kg CO₂e",
      circularity: "78%",
    },
  },
  {
    id: 5,
    timestamp: "2024-11-24 13:55:03",
    date: "Nov 24, 2024",
    time: "13:55",
    eventType: "Shipment Dispatched",
    productName: "Whole Grain Breakfast Cereal",
    gtin: "5012345678904",
    category: "FMCG",
    actor: "Asia Pacific Distributors",
    location: "China",
    status: "Verified",
    icon: <Truck className="w-5 h-5" />,
    iconBg: "bg-[#05466C]",
    details: {
      impactScore: "B",
      carbonFootprint: "14.7 kg CO₂e",
      circularity: "65%",
    },
  },
  {
    id: 6,
    timestamp: "2024-11-24 10:12:47",
    date: "Nov 24, 2024",
    time: "10:12",
    eventType: "Recycling Completed",
    productName: "Organic Shampoo 250ml",
    gtin: "5012345678905",
    category: "Beauty",
    actor: "CleanBottle Recycling",
    location: "Japan",
    status: "Verified",
    icon: <Recycle className="w-5 h-5" />,
    iconBg: "bg-[#05466C]",
    details: {
      impactScore: "A",
      carbonFootprint: "9.8 kg CO₂e",
      circularity: "82%",
    },
  },
  {
    id: 7,
    timestamp: "2024-11-23 15:30:21",
    date: "Nov 23, 2024",
    time: "15:30",
    eventType: "Quality Inspection",
    productName: "Fresh Orange Juice 1L",
    gtin: "5012345678906",
    category: "BCRS",
    actor: "PureDrink Bottling Inc.",
    location: "Malaysia",
    status: "Verified",
    icon: <CheckCircle className="w-5 h-5" />,
    iconBg: "bg-[#05466C]",
    details: {
      impactScore: "B",
      carbonFootprint: "11.2 kg CO₂e",
      circularity: "70%",
    },
  },
  {
    id: 8,
    timestamp: "2024-11-22 08:44:55",
    date: "Nov 22, 2024",
    time: "08:44",
    eventType: "Raw Materials Sourced",
    productName: "Artisan Olive Oil 500ml",
    gtin: "5012345678908",
    category: "FMCG",
    actor: "Mediterranean Food Co.",
    location: "Italy",
    status: "Verified",
    icon: <Box className="w-5 h-5" />,
    iconBg: "bg-[#05466C]",
    details: {
      impactScore: "A",
      carbonFootprint: "6.3 kg CO₂e",
      circularity: "88%",
    },
  },
];

// ----------------- helpers -----------------

function getCategoryColor(category: LedgerEvent["category"]) {
  if (category === "FMCG") return "bg-[#05466C] text-white";
  if (category === "BCRS") return "bg-[#F0B82E] text-[#05466C]";
  if (category === "Beauty") return "bg-[#FEE2E2] text-[#EB121E]";
  return "bg-gray-100 text-gray-700";
}

function getStatusColor(status: LedgerEvent["status"]) {
  if (status === "Verified")
    return "bg-[#EBF5F0] text-[#05466C] border-[#05466C]";
  if (status === "In Progress")
    return "bg-[#FEF9E7] text-[#92400E] border-[#F0B82E]";
  if (status === "Action Required")
    return "bg-[#FEE2E2] text-[#EB121E] border-[#EB121E]";
  return "bg-gray-100 text-gray-700 border-gray-200";
}

function getImpactScoreColor(score: LedgerEvent["details"]["impactScore"]) {
  if (score === "A")
    return "bg-[#05466C] text-white border-[#05466C]";
  if (score === "B")
    return "bg-[#F1C75E] text-[#05466C] border-[#F0B82E]";
  if (score === "C")
    return "bg-[#FEF3C7] text-[#92400E] border-[#F59E0B]";
  if (score === "D")
    return "bg-[#FEE2E2] text-[#EB121E] border-[#EB121E]";
  return "bg-gray-100 text-gray-700 border-gray-200";
}

// ----------------- Page component -----------------

const LedgerPage: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
        <div className="flex flex-col gap-2">
          <h1 className="text-[#111827]">Impact Ledger</h1>
          <p className="text-[#6B7280] text-sm md:text-base">
            Real-time event log of all sustainability and compliance actions
            across products and supply chain.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-[#E5E7EB] text-[#111827] rounded-lg hover:bg-[#F9FAFB] transition-colors text-sm">
            <Filter className="w-4 h-4" />
            Filters
          </button>
          <button className="flex items-center gap-2 px-4 py-2.5 bg-[#05466C] text-white rounded-lg hover:bg-[#003C65] transition-colors text-sm">
            <Download className="w-4 h-4" />
            Export
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white border border-[#E5E7EB] rounded-lg p-4 lg:p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <select className="w-full px-4 py-2 bg-[#F9FAFB] border border-[#E5E7EB] rounded-lg text-sm text-[#111827] outline-none">
            <option>Last 7 Days</option>
            <option>Last 30 Days</option>
            <option>Last 90 Days</option>
            <option>Custom Range</option>
          </select>

          <select className="w-full px-4 py-2 bg-[#F9FAFB] border border-[#E5E7EB] rounded-lg text-sm text-[#111827] outline-none">
            <option>All Event Types</option>
            <option>Product Registered</option>
            <option>Carbon Data Updated</option>
            <option>Compliance Check</option>
            <option>Manufacturing</option>
            <option>Shipment</option>
            <option>Recycling</option>
          </select>

          <select className="w-full px-4 py-2 bg-[#F9FAFB] border border-[#E5E7EB] rounded-lg text-sm text-[#111827] outline-none">
            <option>All Categories</option>
            <option>FMCG – Food</option>
            <option>BCRS – Beverage</option>
            <option>Beauty / Cosmetics</option>
          </select>

          <select className="w-full px-4 py-2 bg-[#F9FAFB] border border-[#E5E7EB] rounded-lg text-sm text-[#111827] outline-none">
            <option>All Status</option>
            <option>Verified</option>
            <option>In Progress</option>
            <option>Action Required</option>
          </select>
        </div>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* vertical line */}
        <div className="absolute left-5 md:left-6 top-0 bottom-0 w-px bg-[#E5E7EB]" />

        <div className="flex flex-col gap-6">
          {mockLedgerEvents.map((event) => (
            <div
              key={event.id}
              className="relative pl-14 md:pl-20 flex gap-4 md:gap-6"
            >
              {/* dot + icon */}
              <div className="absolute left-0 md:left-1 top-4 md:top-5 flex items-center justify-center">
                <div
                  className={`flex items-center justify-center rounded-full ${event.iconBg} text-white w-10 h-10 md:w-14 md:h-14`}
                >
                  {event.icon}
                </div>
              </div>

              {/* card */}
              <div className="flex-1 bg-white border border-[#E5E7EB] rounded-lg p-4 md:p-6 hover:shadow-md transition-shadow">
                {/* header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-3 flex-wrap">
                      <h3 className="font-medium text-[#111827] text-sm md:text-base">
                        {event.eventType}
                      </h3>
                      <span
                        className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium border ${getStatusColor(
                          event.status
                        )}`}
                      >
                        {event.status}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-xs md:text-sm text-[#6B7280]">
                      <Clock className="w-4 h-4" />
                      <span>
                        {event.date} at {event.time}
                      </span>
                    </div>
                  </div>
                </div>

                {/* product info */}
                <div className="bg-[#F9FAFB] rounded-lg p-3 md:p-4 mb-4">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-medium text-[#111827] text-sm md:text-base">
                          {event.productName}
                        </span>
                        <span
                          className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${getCategoryColor(
                            event.category
                          )}`}
                        >
                          {event.category}
                        </span>
                      </div>
                      <span className="text-xs md:text-sm text-[#6B7280]">
                        GTIN: {event.gtin}
                      </span>
                    </div>

                    <div className="flex items-center gap-3 text-xs md:text-sm">
                      <span className="text-[#6B7280]">Impact Score:</span>
                      <span
                        className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium border ${getImpactScoreColor(
                          event.details.impactScore
                        )}`}
                      >
                        {event.details.impactScore}
                      </span>
                    </div>
                  </div>
                </div>

                {/* metrics */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                  <div className="flex flex-col gap-1">
                    <span className="text-[11px] uppercase tracking-wide text-[#6B7280]">
                      Carbon Footprint
                    </span>
                    <span className="font-medium text-[#05466C] text-sm">
                      {event.details.carbonFootprint}
                    </span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[11px] uppercase tracking-wide text-[#6B7280]">
                      Circularity
                    </span>
                    <span className="font-medium text-[#F0B82E] text-sm">
                      {event.details.circularity}
                    </span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[11px] uppercase tracking-wide text-[#6B7280]">
                      Event ID
                    </span>
                    <span className="text-sm text-[#111827]">
                      EVT-{String(event.id).padStart(6, "0")}
                    </span>
                  </div>
                </div>

                {/* actor + location */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 pt-4 border-t border-[#E5E7EB]">
                  <div className="flex items-center gap-2 text-xs md:text-sm text-[#6B7280]">
                    <User className="w-4 h-4" />
                    <span>{event.actor}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs md:text-sm text-[#6B7280]">
                    <MapPin className="w-4 h-4" />
                    <span>{event.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Load more */}
      <div className="flex justify-center pt-2 pb-4">
        <button className="px-6 py-3 bg-white border border-[#E5E7EB] text-[#111827] rounded-lg hover:bg-[#F9FAFB] transition-colors text-sm">
          Load More Events
        </button>
      </div>
    </div>
  );
};

export default LedgerPage;
