// src/data/products.ts

export type ProductCategory = "FMCG" | "BCRS" | "Beauty";

export interface Product {
  id: string;
  name: string;
  brand: string;
  category: ProductCategory;
  gtin: string;
  impactScore: "A" | "B" | "C" | "D";
  carbonPerUnit: number; // in g CO2e
  packagingType: string;
  status: "Active" | "In review";
}

export const mockProducts: Product[] = [
  {
    id: 'prod-001',
    name: 'Dasani 600ml Bottle',
    brand: 'Coca-Cola',
    category: 'BCRS',
    gtin: '00049000030232',
    impactScore: 'B',
    carbonPerUnit: 125.5,
    packagingType: 'Recycled PET (rPET)',
    status: 'Active',
  },
  {
    id: 'prod-002',
    name: 'Aluminum Can 330ml',
    brand: 'Own Brand',
    category: 'FMCG',
    gtin: '00049000030233',
    impactScore: 'A',
    carbonPerUnit: 78.2,
    packagingType: 'Aluminum',
    status: 'Active',
  },
  {
    id: 'prod-003',
    name: 'Glass Jar - 250g',
    brand: 'Heritage Foods',
    category: 'FMCG',
    gtin: '00049000030234',
    impactScore: 'C',
    carbonPerUnit: 210.0,
    packagingType: 'Glass',
    status: 'In review',
  },
  {
    id: 'prod-004',
    name: 'Bamboo Toothbrush (Pack of 4)',
    brand: 'Eco Essentials',
    category: 'Beauty',
    gtin: '00049000030235',
    impactScore: 'A',
    carbonPerUnit: 45.1,
    packagingType: 'Recycled Paper',
    status: 'Active',
  },
  {
    id: 'prod-005',
    name: 'Compostable Coffee Pods (12ct)',
    brand: 'Morning Brew',
    category: 'FMCG',
    gtin: '00049000030236',
    impactScore: 'B',
    carbonPerUnit: 95.7,
    packagingType: 'Compostable Polymer',
    status: 'Active',
  },
  {
    id: 'prod-006',
    name: 'Shampoo Bar - Citrus',
    brand: 'Pure Bliss',
    category: 'Beauty',
    gtin: '00049000030237',
    impactScore: 'A',
    carbonPerUnit: 35.0,
    packagingType: 'Cardboard',
    status: 'Active',
  },
];