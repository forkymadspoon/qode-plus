// src/data/suppliers.ts

export type SupplierCategory =
  | "Ingredients"
  | "Packaging"
  | "Logistics"
  | "Manufacturing"
  | "Recycling";

export type RiskLevel = "Low" | "Medium" | "High";

export interface Supplier {
  id: string;
  name: string;
  country: string;
  category: SupplierCategory;
  riskLevel: RiskLevel;
  certifications: string[]; // e.g., ["ISO 9001", "FSSC 22000"]
  productsCount: number;
  status: "Active" | "Inactive" | "Under review";
  lastAuditDate: string; // ISO string or simple date
  missingData?: boolean; // true if data gaps exist
}

export const mockSuppliers: Supplier[] = [
  {
    id: 'sup-001',
    name: 'PET Resin Global',
    country: 'Singapore',
    category: 'Packaging',
    riskLevel: 'Medium',
    certifications: ['ISO 9001', 'ISCC Plus'],
    productsCount: 4,
    status: 'Under review',
    lastAuditDate: '2025-10-15',
    missingData: true,
  },
  {
    id: 'sup-002',
    name: 'Aqua Source Filter Co.',
    country: 'Malaysia',
    category: 'Ingredients',
    riskLevel: 'Low',
    certifications: ['FSSC 22000', 'ISO 14001'],
    productsCount: 6,
    status: 'Active',
    lastAuditDate: '2025-09-01',
    missingData: false,
  },
  {
    id: 'sup-003',
    name: 'Regional Logistics Hub',
    country: 'Vietnam',
    category: 'Logistics',
    riskLevel: 'Medium',
    certifications: ['TAPA FSR'],
    productsCount: 15,
    status: 'Active',
    lastAuditDate: '2024-03-20',
    missingData: false,
  },
  {
    id: 'sup-004',
    name: 'Eco-Recycle Solutions',
    country: 'Thailand',
    category: 'Recycling',
    riskLevel: 'Low',
    certifications: ['RecyClass'],
    productsCount: 2,
    status: 'Active',
    lastAuditDate: '2025-11-20',
    missingData: false,
  },
  {
    id: 'sup-005',
    name: 'Cap & Label Manufacturer',
    country: 'Indonesia',
    category: 'Manufacturing',
    riskLevel: 'High',
    certifications: ['ISO 9001'],
    productsCount: 8,
    status: 'Inactive',
    lastAuditDate: '2023-12-05',
    missingData: true,
  },
];