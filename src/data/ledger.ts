// src/data/ledger.ts

export type LedgerEventType =
  | "PRODUCT_CREATED"
  | "PACKAGING_UPDATED"
  | "SUPPLIER_UPDATED"
  | "BATCH_VERIFIED"
  | "SHIPMENT_RECEIVED"
  | "SCAN_EVENT"
  | "DATA_FIX";

export interface LedgerEvent {
  id: string;
  timestamp: string; // ISO or simple string
  productName: string;
  productId?: string; // optional, could link to Product
  eventType: LedgerEventType;
  actor: string; // e.g., "Brand owner", "Retailer", "Consumer scan"
  description: string;
  status: "Success" | "Warning" | "Error";
  tags?: string[]; // e.g., ["Dasani", "BCRS", "Packaging"]
}

export const mockLedgerEvents: LedgerEvent[] = [
  {
    id: 'L-001',
    timestamp: '2025-12-02 10:00:00',
    productName: 'Dasani 600ml Bottle',
    productId: 'prod-001',
    eventType: 'PRODUCT_CREATED',
    actor: 'Brand Owner',
    description: 'Initial product passport registered and activated on the ledger.',
    status: 'Success',
    tags: ['Dasani', 'BCRS'],
  },
  {
    id: 'L-002',
    timestamp: '2025-12-02 10:30:00',
    productName: 'Dasani 600ml Bottle',
    productId: 'prod-001',
    eventType: 'PACKAGING_UPDATED',
    actor: 'Brand Owner',
    description: 'Recycled PET content specification updated from 25% to 30%.',
    status: 'Success',
    tags: ['Dasani', 'Packaging'],
  },
  {
    id: 'L-003',
    timestamp: '2025-12-02 11:15:00',
    productName: 'Aluminum Can 330ml',
    productId: 'prod-002',
    eventType: 'SUPPLIER_UPDATED',
    actor: 'Supply Chain Manager',
    description: 'Linked Aluminum Can product to new recycling partner: Eco-Recycle Solutions.',
    status: 'Success',
    tags: ['Aluminum', 'Recycling'],
  },
  {
    id: 'L-004',
    timestamp: '2025-12-02 14:45:00',
    productName: 'Dasani 600ml Bottle',
    productId: 'prod-001',
    eventType: 'BATCH_VERIFIED',
    actor: 'Bottling Facility (ID: 45A)',
    description: 'Batch LOT A001 verified, sealed, and ready for shipment.',
    status: 'Success',
    tags: ['Dasani', 'Traceability'],
  },
  {
    id: 'L-005',
    timestamp: '2025-12-01 16:30:00',
    productName: 'Shampoo Bar - Citrus',
    productId: 'prod-006',
    eventType: 'DATA_FIX',
    actor: 'System Admin',
    description: 'Carbon footprint calculation re-run due to misconfigured API endpoint. Risk lowered.',
    status: 'Warning',
    tags: ['Beauty', 'Carbon'],
  },
  {
    id: 'L-006',
    timestamp: '2025-12-03 08:00:00',
    productName: 'Dasani 600ml Bottle',
    productId: 'prod-001',
    eventType: 'SCAN_EVENT',
    actor: 'Consumer Scan',
    description: 'Product GS1 Digital Link scanned at Retail Shelf SG.',
    status: 'Success',
    tags: ['Dasani', 'Consumer'],
  },
  {
    id: 'L-007',
    timestamp: '2025-12-03 09:30:00',
    productName: 'Glass Jar - 250g',
    productId: 'prod-003',
    eventType: 'SHIPMENT_RECEIVED',
    actor: 'Logistics Hub AU',
    description: 'Received shipment in Australian Distribution Centre (Batch H34X).',
    status: 'Success',
    tags: ['FMCG', 'Logistics'],
  },
  {
    id: 'L-008',
    timestamp: '2025-12-01 09:00:00',
    productName: 'Plastic Cap',
    productId: 'prod-005',
    eventType: 'SUPPLIER_UPDATED',
    actor: 'System Integrity Check',
    description: 'Critical certification data missing for Cap Manufacturer. High risk alert triggered.',
    status: 'Error',
    tags: ['Packaging', 'Audit'],
  },
];