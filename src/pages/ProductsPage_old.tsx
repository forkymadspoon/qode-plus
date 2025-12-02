// src/pages/ProductsPage.tsx

import { mockProducts } from '../data/products';
import type { Product } from '../data/products';
import { Link } from 'react-router-dom';

// Helper function to get the color based on the Impact Score
const getScoreColor = (score: Product['impactScore']) => {
  switch (score) {
    case 'A': return 'bg-green-100 text-green-800 border-green-200';
    case 'B': return 'bg-indigo-100 text-indigo-800 border-indigo-200';
    case 'C': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
    case 'D': return 'bg-red-100 text-red-800 border-red-200';
    default: return 'bg-gray-100 text-gray-800 border-gray-200';
  }
};

// Helper function to get the color based on the Status
const getStatusColor = (status: Product['status']) => {
  switch (status) {
    case 'Active': return 'bg-green-500/10 text-green-700 font-medium';
    case 'In review': return 'bg-amber-500/10 text-amber-700 font-medium';
    default: return 'bg-gray-500/10 text-gray-700 font-medium';
  }
};

const ProductRow: React.FC<{ product: Product }> = ({ product }) => {
  const scoreColor = getScoreColor(product.impactScore);
  const statusColor = getStatusColor(product.status);
  
  // Define the target path for the product name link
  const productPath = product.id === 'prod-001' 
    ? '/product-passport/dasani-600ml' 
    : `/products/${product.id}`; // Placeholder for other products

  return (
    <tr className="hover:bg-gray-50 transition-colors">
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
        {/* Link the Product Name. Only Dasani links to the specific Passport page. */}
        <Link to={productPath} className="text-indigo-600 hover:text-indigo-900">
          {product.name}
        </Link>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.brand}</td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-600">
          {product.category}
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm">
        <span className={`px-3 py-1 inline-flex text-xs font-bold rounded-lg uppercase border ${scoreColor}`}>
          {product.impactScore}
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {product.carbonPerUnit.toFixed(1)} g CO2e
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.packagingType}</td>
      <td className="px-6 py-4 whitespace-nowrap text-sm">
        <span className={`px-2 py-1 inline-flex text-xs leading-5 rounded-md ${statusColor}`}>
          {product.status}
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        {/* Updated link in the last column, prioritizing user request for "View Passport" button */}
        {product.id === 'prod-001' ? (
             <Link to="/product-passport/dasani-600ml" className="text-indigo-600 hover:text-indigo-900 text-xs font-semibold">
                View Passport
            </Link>
        ) : (
            <button className="text-gray-400 text-xs hover:text-gray-600 transition-colors">Actions</button>
        )}
      </td>
    </tr>
  );
};


const ProductsPage = () => {
  return (
    <div className="space-y-6">
      
      {/* 1. Header Row */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
        <div>
          <h1 className="text-3xl font-extrabold text-gray-900">Products</h1>
          <p className="mt-1 text-lg text-gray-500">
            FMCG, beverage containers (BCRS), and beauty SKUs.
          </p>
        </div>
        
        <div className="mt-4 sm:mt-0 flex space-x-3">
          <button 
            className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-xl text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
          >
            Actions 
            <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
          <button 
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-xl shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
          >
            <svg className="-ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
            </svg>
            Add Product
          </button>
        </div>
      </div>
      
      {/* 2. Products Table */}
      <div className="bg-white shadow-xl rounded-xl overflow-hidden border border-gray-100">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Product Name
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Brand
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Category
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Impact Score
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Carbon/Unit
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Packaging
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="relative px-6 py-3">
                  <span className="sr-only">View</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {mockProducts.map((product) => (
                <ProductRow key={product.id} product={product} />
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};

export default ProductsPage;