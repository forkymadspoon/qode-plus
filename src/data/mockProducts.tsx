import type { Product } from "./products";

export const mockProducts: Product[] = [
  {
    id: "prod-001",
    name: "Dasani 600ml",
    brand: "Coca-Cola",
    category: "Beverage",
    impactScore: "A",
    carbonPerUnit: 12.5,
    packagingType: "Plastic Bottle",
    status: "Active",
    gtin: "0123456789012",
  },
  {
    id: "prod-002",
    name: "Lipstick Rouge",
    brand: "BeautyCo",
    category: "Cosmetics",
    impactScore: "B",
    carbonPerUnit: 8.3,
    packagingType: "Metal Tube",
    status: "In review",
    gtin: "0987654321098",
  },
];