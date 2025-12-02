// src/data/products.ts
import tomatoImg from "../assets/products/organic-tomato-pasta-sauce.png";
import dasaniImg from "../assets/products/dasani-drinking-water-600ml.png";
import moisturizerImg from "../assets/products/natural-face-moisturizer-50ml.png";
import colaImg from "../assets/products/premium-cola-330ml.png";
import cerealImg from "../assets/products/whole-grain-breakfast-cereal.png";
import shampooImg from "../assets/products/organic-shampoo-250ml.png";
import orangeJuiceImg from "../assets/products/fresh-orange-juice-1l.png";
import serumImg from "../assets/products/anti-aging-serum-30ml.png";
import oliveOilImg from "../assets/products/artisan-olive-oil-500ml.png";

export type ProductCategory =
  | "FMCG – Food Products"
  | "BCRS – Beverage Containers"
  | "Beauty / Cosmetics";

export type ComplianceStatus = "Compliant" | "Missing Data" | "Non-Compliant";

export interface Product {
  id: number;
  name: string;
  image: string; // imported image path
  gtin: string;
  category: ProductCategory;
  impactScore: "A" | "B" | "C" | "D";
  carbonFootprint: string;
  packagingType: string;
  circularity: string;
  compliance: ComplianceStatus;
  updated: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Organic Tomato Pasta Sauce",
    image: tomatoImg,
    gtin: "5012345678900",
    category: "FMCG – Food Products",
    impactScore: "B",
    carbonFootprint: "8.2 kg CO₂e",
    packagingType: "Glass",
    circularity: "72%",
    compliance: "Compliant",
    updated: "2024-11-22",
  },
  {
    id: 2,
    name: "Dasani Drinking Water 600ml",
    image: dasaniImg,
    gtin: "0049000082055",
    category: "BCRS – Beverage Containers",
    impactScore: "A",
    carbonFootprint: "4.1 kg CO₂e",
    packagingType: "PET",
    circularity: "85%",
    compliance: "Compliant",
    updated: "2024-11-25",
  },
  {
    id: 3,
    name: "Natural Face Moisturizer 50ml",
    image: moisturizerImg,
    gtin: "5012345678902",
    category: "Beauty / Cosmetics",
    impactScore: "B",
    carbonFootprint: "12.5 kg CO₂e",
    packagingType: "HDPE",
    circularity: "68%",
    compliance: "Missing Data",
    updated: "2024-11-20",
  },
  {
    id: 4,
    name: "Premium Cola 330ml",
    image: colaImg,
    gtin: "5012345678903",
    category: "BCRS – Beverage Containers",
    impactScore: "C",
    carbonFootprint: "18.3 kg CO₂e",
    packagingType: "Aluminum",
    circularity: "78%",
    compliance: "Compliant",
    updated: "2024-11-18",
  },
  {
    id: 5,
    name: "Whole Grain Breakfast Cereal",
    image: cerealImg,
    gtin: "5012345678904",
    category: "FMCG – Food Products",
    impactScore: "B",
    carbonFootprint: "14.7 kg CO₂e",
    packagingType: "Cardboard",
    circularity: "65%",
    compliance: "Compliant",
    updated: "2024-11-21",
  },
  {
    id: 6,
    name: "Organic Shampoo 250ml",
    image: shampooImg,
    gtin: "5012345678905",
    category: "Beauty / Cosmetics",
    impactScore: "A",
    carbonFootprint: "9.8 kg CO₂e",
    packagingType: "HDPE",
    circularity: "82%",
    compliance: "Compliant",
    updated: "2024-11-24",
  },
  {
    id: 7,
    name: "Fresh Orange Juice 1L",
    image: orangeJuiceImg,
    gtin: "5012345678906",
    category: "BCRS – Beverage Containers",
    impactScore: "B",
    carbonFootprint: "11.2 kg CO₂e",
    packagingType: "Cardboard",
    circularity: "70%",
    compliance: "Compliant",
    updated: "2024-11-23",
  },
  {
    id: 8,
    name: "Anti-Aging Serum 30ml",
    image: serumImg,
    gtin: "5012345678907",
    category: "Beauty / Cosmetics",
    impactScore: "D",
    carbonFootprint: "28.4 kg CO₂e",
    packagingType: "Glass",
    circularity: "45%",
    compliance: "Non-Compliant",
    updated: "2024-11-15",
  },
  {
    id: 9,
    name: "Artisan Olive Oil 500ml",
    image: oliveOilImg,
    gtin: "5012345678908",
    category: "FMCG – Food Products",
    impactScore: "A",
    carbonFootprint: "6.3 kg CO₂e",
    packagingType: "Glass",
    circularity: "88%",
    compliance: "Compliant",
    updated: "2024-11-25",
  },
];
