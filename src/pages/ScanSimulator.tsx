import React from "react";
import { QrCode, Camera, AlertCircle, CheckCircle2 } from "lucide-react";

type Product = {
  id: string;
  gtin: string;
  name: string;
  category: "FMCG" | "BCRS" | "Beauty";
  brand: string;
  size: string;
  country: string;
};

const MOCK_PRODUCTS: Product[] = [
  {
    id: "pasta-sauce",
    gtin: "5012345678900",
    name: "Organic Tomato Pasta Sauce",
    category: "FMCG",
    brand: "GreenFields Organic Co.",
    size: "350g",
    country: "Thailand",
  },
  {
    id: "water-500",
    gtin: "5012345678901",
    name: "Sparkling Mineral Water",
    category: "BCRS",
    brand: "EcoCycle Solutions",
    size: "500ml",
    country: "Singapore",
  },
  {
    id: "moisturiser-50",
    gtin: "5012345678902",
    name: "Natural Face Moisturizer",
    category: "Beauty",
    brand: "Natural Beauty Labs",
    size: "50ml",
    country: "South Korea",
  },
];

function normaliseInput(input: string): string {
  const trimmed = input.trim();
  if (!trimmed) return "";

  // Try to grab a GTIN-like number from a Digital Link or plain input
  const match = trimmed.match(/(\d{8,14})/);
  if (match) return match[1];

  return trimmed;
}

function getCategoryBadgeClasses(category: Product["category"]) {
  if (category === "FMCG") return "bg-[#05466C] text-white";
  if (category === "BCRS") return "bg-[#F0B82E] text-[#05466C]";
  if (category === "Beauty") return "bg-[#FEE2E2] text-[#EB121E]";
  return "bg-gray-100 text-gray-700";
}

export function ScanSimulator() {
  const [rawInput, setRawInput] = React.useState("");
  const [lastScanned, setLastScanned] = React.useState<string | null>(null);
  const [product, setProduct] = React.useState<Product | null>(null);
  const [error, setError] = React.useState<string | null>(null);
  const [isSimulating, setIsSimulating] = React.useState(false);

  function handleScan(valueFromButton?: string) {
    const value = valueFromButton ?? rawInput;
    const gtin = normaliseInput(value);

    setError(null);
    setProduct(null);
    setLastScanned(gtin || null);

    if (!gtin) {
      setError("Please paste a GS1 Digital Link or GTIN to simulate a scan.");
      return;
    }

    setIsSimulating(true);

    // Tiny delay to feel “scan-like”
    setTimeout(() => {
      const found = MOCK_PRODUCTS.find((p) => p.gtin === gtin);

      if (!found) {
        setError(`No product found for GTIN ${gtin}. Try one of the demo scans below.`);
        setProduct(null);
      } else {
        setProduct(found);
      }

      setIsSimulating(false);
    }, 500);
  }

  function handleDemoClick(gtin: string) {
    setRawInput(gtin);
    handleScan(gtin);
  }

  return (
    <section className="w-full bg-white border border-[#E5E7EB] rounded-2xl p-4 lg:p-6 flex flex-col gap-4">
      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#EFF6FF] text-[#05466C]">
            <QrCode className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-base font-semibold text-[#05466C]">
              Scan Simulator
            </h2>
            <p className="text-xs sm:text-sm text-[#6B7280]">
              Paste a GS1 Digital Link or GTIN to preview the consumer experience.
            </p>
          </div>
        </div>

        <button
          type="button"
          className="inline-flex items-center gap-1 rounded-full border border-[#E5E7EB] px-3 py-1 text-xs text-[#6B7280] hover:bg-[#F9FAFB]"
        >
          <Camera className="w-3 h-3" />
          Simulated
        </button>
      </div>

      {/* Input + button */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="flex-1">
          <label
            htmlFor="scan-input"
            className="mb-1 block text-xs font-medium text-[#6B7280]"
          >
            GS1 Digital Link or GTIN
          </label>
          <input
            id="scan-input"
            type="text"
            placeholder="https://id.gs1.org/01/5012345678900 or 5012345678900"
            className="w-full rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] px-3 py-2 text-sm text-[#111827] placeholder:text-[#9CA3AF] focus:border-[#05466C] focus:outline-none focus:ring-1 focus:ring-[#05466C]"
            value={rawInput}
            onChange={(e) => setRawInput(e.target.value)}
          />
        </div>
        <div className="flex sm:self-end">
          <button
            type="button"
            onClick={() => handleScan()}
            disabled={isSimulating}
            className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-lg bg-[#05466C] px-4 py-2 text-sm font-medium text-white hover:bg-[#003C65] disabled:opacity-60"
          >
            <QrCode className="w-4 h-4" />
            {isSimulating ? "Scanning..." : "Simulate Scan"}
          </button>
        </div>
      </div>

      {/* Quick demo buttons */}
      <div className="flex flex-wrap gap-2">
        <span className="text-xs font-medium text-[#6B7280] mt-1">
          Try demo scans:
        </span>
        {MOCK_PRODUCTS.map((p) => (
          <button
            key={p.id}
            type="button"
            onClick={() => handleDemoClick(p.gtin)}
            className="rounded-full border border-[#E5E7EB] bg-[#F9FAFB] px-3 py-1 text-xs text-[#05466C] hover:bg-[#EFF6FF]"
          >
            {p.name} · {p.gtin}
          </button>
        ))}
      </div>

      {/* Status / error */}
      {lastScanned && !product && !error && (
        <p className="text-xs text-[#6B7280]">
          Looking up product for GTIN <span className="font-mono">{lastScanned}</span>…
        </p>
      )}

      {error && (
        <div className="flex items-start gap-2 rounded-lg border border-[#FECACA] bg-[#FEF2F2] px-3 py-2">
          <AlertCircle className="mt-0.5 h-4 w-4 text-[#DC2626]" />
          <p className="text-xs sm:text-sm text-[#991B1B]">{error}</p>
        </div>
      )}

      {/* Result card */}
      {product && (
        <div className="mt-1 rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] p-4 flex flex-col gap-3">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-xs font-medium text-[#6B7280]">Scanned product</p>
              <h3 className="text-sm sm:text-base font-semibold text-[#05466C]">
                {product.name}
              </h3>
              <p className="text-xs text-[#6B7280]">
                {product.brand} · {product.size}
              </p>
            </div>
            <div className="flex flex-col items-end gap-1">
              <span
                className={
                  "inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-medium " +
                  getCategoryBadgeClasses(product.category)
                }
              >
                {product.category === "FMCG" && "FMCG Food Products"}
                {product.category === "BCRS" && "BCRS Beverage Containers"}
                {product.category === "Beauty" && "Beauty / Cosmetics"}
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-[#EBF5F0] px-2 py-0.5 text-[10px] font-medium text-[#065F46]">
                <CheckCircle2 className="h-3 w-3" />
                Simulated scan
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs sm:text-sm text-[#6B7280] pt-3 border-t border-[#E5E7EB]">
            <div>
              <p className="text-[11px] uppercase tracking-wide text-[#9CA3AF]">
                GTIN
              </p>
              <p className="font-mono text-[#111827]">{product.gtin}</p>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-wide text-[#9CA3AF]">
                Country / Region
              </p>
              <p>{product.country}</p>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-wide text-[#9CA3AF]">
                Example journey
              </p>
              <p>Opens consumer product passport screen in Qode+</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default ScanSimulator;
