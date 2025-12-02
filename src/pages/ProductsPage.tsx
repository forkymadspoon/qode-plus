// src/pages/ProductsPage.tsx

import React from 'react';
import { mockProducts } from '../data/products';
import type { Product } from '../data/products';
import { Link } from 'react-router-dom';

// Helper: impact score badge colour
const getScoreColor = (score: Product['impactScore']) => {
  switch (score) {
    case 'A':
      return 'bg-green-100 text-green-800 border-green-200';
    case 'B':
      return 'bg-indigo-100 text-indigo-800 border-indigo-200';
    case 'C':
      return 'bg-yellow-100 text-yellow-800 border-yellow-200';
    case 'D':
      return 'bg-red-100 text-red-800 border-red-200';
    default:
      return 'bg-gray-100 text-gray-800 border-gray-200';
  }
};

// Helper: status pill colour
const getStatusColor = (status: Product['status']) => {
  switch (status) {
    case 'Active':
      return 'bg-green-500/10 text-green-700 font-medium';
    case 'In review':
      return 'bg-amber-500/10 text-amber-700 font-medium';
    default:
      return 'bg-gray-500/10 text-gray-700 font-medium';
  }
};

// One table row (desktop)
const ProductRow: React.FC<{ product: Product }> = ({ product }) => {
  const scoreColor = getScoreColor(product.impactScore);
  const statusColor = getStatusColor(product.status);

  // Only Dasani goes to the Product Passport page for now
  const productPath =
    product.id === 'prod-001'
      ? '/product-passport/dasani-600ml'
      : `/products/${product.id}`;

  return (
    <tr className="hover:bg-slate-50 transition-colors">
      <td className="px-5 py-4 whitespace-nowrap text-sm font-medium text-slate-900">
        <Link
          to={productPath}
          className="text-slate-900 hover:text-indigo-600"
        >
          {product.name}
        </Link>
        <div className="mt-1">
          <span className="inline-flex px-2 py-0.5 rounded-full bg-slate-900/5 text-[11px] font-medium text-slate-700">
            {product.category}
          </span>
        </div>
      </td>
      <td className="px-5 py-4 whitespace-nowrap text-sm text-slate-500">
        {product.brand}
      </td>
      <td className="px-5 py-4 whitespace-nowrap text-sm">
        <span
          className={`inline-flex px-3 py-1 text-xs font-bold rounded-full uppercase border ${scoreColor}`}
        >
          {product.impactScore}
        </span>
      </td>
      <td className="px-5 py-4 whitespace-nowrap text-sm text-slate-700">
        {product.carbonPerUnit.toFixed(1)} g CO₂e
      </td>
      <td className="px-5 py-4 whitespace-nowrap text-sm text-slate-700">
        {product.packagingType}
      </td>
      <td className="px-5 py-4 whitespace-nowrap text-sm">
        <span
          className={`inline-flex px-2 py-1 text-xs rounded-md ${statusColor}`}
        >
          {product.status}
        </span>
      </td>
      <td className="px-5 py-4 whitespace-nowrap text-right text-xs font-semibold">
        {product.id === 'prod-001' ? (
          <Link
            to="/product-passport/dasani-600ml"
            className="text-indigo-600 hover:text-indigo-800"
          >
            View Passport
          </Link>
        ) : (
          <button className="text-slate-400 hover:text-slate-600">
            Actions
          </button>
        )}
      </td>
    </tr>
  );
};

const ProductsPage: React.FC = () => {
  return (
    <div className="space-y-6 lg:space-y-8">
      {/* Header row */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl sm:text-3xl font-semibold text-slate-900">
            Products
          </h1>
          <p className="mt-1 text-sm sm:text-base text-slate-500 max-w-xl">
            FMCG, BCRS beverage containers, and beauty products with
            sustainability and compliance information.
          </p>
        </div>

        <div className="flex gap-3 justify-start sm:justify-end">
          <button className="inline-flex items-center px-4 py-2 rounded-lg border border-slate-200 bg-white text-sm text-slate-700 hover:bg-slate-50">
            Actions
            <svg
              className="-mr-1 ml-2 h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <button className="inline-flex items-center px-4 py-2 rounded-lg bg-sky-900 text-sm font-medium text-white shadow-sm hover:bg-sky-950">
            <svg
              className="-ml-1 mr-2 h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M10 4.5a.75.75 0 01.75.75v4h4a.75.75 0 010 1.5h-4v4a.75.75 0 01-1.5 0v-4h-4a.75.75 0 010-1.5h4v-4A.75.75 0 0110 4.5z"
                clipRule="evenodd"
              />
            </svg>
            Add Product
          </button>
        </div>
      </div>

      {/* Filters row */}
      <div className="space-y-3">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <div className="w-full lg:max-w-sm">
            <div className="relative">
              <span className="pointer-events-none absolute left-3 top-2.5 text-slate-400 text-sm">
                🔍
              </span>
              <input
                type="text"
                placeholder="Search by name, GTIN, category"
                className="w-full pl-9 pr-3 py-2 rounded-lg border border-slate-200 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-200"
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <FilterPill label="All Categories" />
            <FilterPill label="All Compliance" />
            <FilterPill label="Most recent" />
          </div>
        </div>

        <p className="text-xs text-slate-500">
          Showing {mockProducts.length} of {mockProducts.length} products
        </p>
      </div>

      {/* Desktop table */}
      <div className="hidden md:block rounded-2xl border border-slate-100 bg-white shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="bg-slate-50 text-[11px] font-semibold uppercase tracking-wide text-slate-500">
              <tr>
                <Th>Product</Th>
                <Th>Brand</Th>
                <Th>Impact score</Th>
                <Th>Carbon/unit</Th>
                <Th>Packaging</Th>
                <Th>Status</Th>
                <Th className="text-right">Actions</Th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {mockProducts.map((product) => (
                <ProductRow key={product.id} product={product} />
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Mobile list (compact, like your mobile table view) */}
      <div className="md:hidden space-y-3">
        {mockProducts.map((product) => {
          const productPath =
            product.id === 'prod-001'
              ? '/product-passport/dasani-600ml'
              : `/products/${product.id}`;

          return (
            <div
              key={product.id}
              className="rounded-2xl border border-slate-100 bg-white px-4 py-3 shadow-sm"
            >
              <div className="flex justify-between gap-3">
                <div>
                  <Link
                    to={productPath}
                    className="text-sm font-semibold text-slate-900 hover:text-indigo-600"
                  >
                    {product.name}
                  </Link>
                  <p className="mt-1 text-xs text-slate-500">
                    {product.brand} · {product.packagingType}
                  </p>
                  <p className="mt-1 text-[11px] text-slate-500">
                    GTIN: {product.id}
                  </p>
                  <span className="mt-2 inline-flex px-2 py-0.5 rounded-full bg-slate-900/5 text-[11px] font-medium text-slate-700">
                    {product.category}
                  </span>
                </div>
                <div className="text-right text-xs text-slate-500">
                  <div className="mb-2 inline-flex px-2 py-1 rounded-full border text-[11px] font-bold uppercase bg-white">
                    {product.impactScore}
                  </div>
                  <div>{product.carbonPerUnit.toFixed(1)} g CO₂e</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Pagination footer */}
      <div className="flex items-center justify-between pt-2 text-xs text-slate-500">
        <span>Showing 1–{mockProducts.length} of {mockProducts.length} products</span>
        <div className="inline-flex items-center gap-1">
          <button className="px-3 py-1.5 rounded-full border border-slate-200 bg-white">
            Previous
          </button>
          <button className="px-3 py-1.5 rounded-full bg-slate-900 text-white">
            1
          </button>
          <button className="px-3 py-1.5 rounded-full border border-slate-200 bg-white">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

const FilterPill: React.FC<{ label: string }> = ({ label }) => (
  <button className="inline-flex items-center px-3 py-2 rounded-lg border border-slate-200 bg-white text-xs text-slate-700">
    {label}
    <span className="ml-1">▾</span>
  </button>
);

const Th: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = '',
}) => (
  <th className={`px-5 py-3 text-left align-middle ${className}`}>{children}</th>
);

export default ProductsPage;
