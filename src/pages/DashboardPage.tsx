// src/pages/DashboardPage.tsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// --- MOCK DATA (Reusing existing structures for context) ---
interface Kpi {
  label: string;
  value: string;
  color: string;
  subText: string;
}

const kpis: Kpi[] = [
  { label: 'Total Products Tracked', value: '128', color: 'text-indigo-600', subText: 'GS1 Standards utilized' },
  { label: 'Average Impact Score', value: 'B+', color: 'text-green-600', subText: 'Target: A-' },
  { label: 'High-Risk Products', value: '6', color: 'text-red-600', subText: 'Requires immediate review' },
  { label: 'Suppliers with Missing Data', value: '3', color: 'text-amber-600', subText: 'Contact for certification' },
];

interface Alert {
  id: number;
  type: 'High' | 'Medium' | 'Low';
  description: string;
  color: string;
}

const alerts: Alert[] = [
  { id: 1, type: 'High', description: 'High-impact PET bottle detected in BCRS category', color: 'bg-red-500' },
  { id: 2, type: 'Medium', description: 'Missing supplier certifications for 2 key products', color: 'bg-amber-500' },
  { id: 3, type: 'Low', description: 'Circularity score below target for 4 SKUs', color: 'bg-yellow-500' },
  { id: 4, type: 'High', description: 'Unverified energy consumption data for Q4', color: 'bg-red-500' },
  { id: 5, type: 'Medium', description: 'New regulatory change requires data update', color: 'bg-amber-500' },
];

interface LedgerEvent {
  id: number;
  timestamp: string;
  event: string;
  product: string;
  status: 'Success' | 'Error';
}

const ledgerEvents: LedgerEvent[] = [
  { id: 1, timestamp: '2025-11-30 14:02', event: 'Batch LOT21H23 verified', product: 'Dasani 600ml', status: 'Success' },
  { id: 2, timestamp: '2025-11-29 09:47', event: 'Packaging spec updated (30% rPET)', product: 'Dasani 600ml', status: 'Success' },
  { id: 3, timestamp: '2025-11-28 17:10', event: 'Supplier audit complete: V-Source', product: 'Aluminum Can 330ml', status: 'Success' },
  { id: 4, timestamp: '2025-11-28 11:30', event: 'Carbon footprint calculation error', product: 'Plastic Cap', status: 'Error' },
  { id: 5, timestamp: '2025-11-27 08:05', event: 'New product passport created', product: 'Smart Water 500ml', status: 'Success' },
];

// --- UTILITY COMPONENTS ---

const KpiCard: React.FC<Kpi> = ({ label, value, color, subText }) => (
  <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
    <p className="text-sm font-medium text-gray-500 mb-1">{label}</p>
    <div className="flex items-end justify-between">
      <h3 className={`text-4xl font-extrabold ${color}`}>{value}</h3>
      <p className="text-xs text-gray-400 font-medium ml-4">{subText}</p>
    </div>
  </div>
);

const AlertItem: React.FC<Alert> = ({ type, description, color }) => (
  <li className="flex items-start space-x-3 py-3 border-b border-gray-100 last:border-b-0">
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold text-white ${color} mt-0.5 shadow-md`}>
      {type}
    </span>
    <p className="text-sm text-gray-700 leading-snug flex-1">
      {description}
    </p>
  </li>
);

const LedgerRow: React.FC<LedgerEvent> = ({ timestamp, event, product, status }) => {
  const [datePart, timePart] = timestamp.split(' ');
  return (
    <tr className="border-b border-gray-100 hover:bg-indigo-50/50 transition-colors">
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 font-mono">{datePart} {timePart}</td>
      <td className="px-6 py-4 text-sm font-medium text-gray-800">{event}</td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-indigo-600 font-semibold">{product}</td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
          status === 'Success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
        }`}>
          {status}
        </span>
      </td>
    </tr>
  );
};


// --- NEW SCAN SIMULATOR CARD COMPONENT ---

const ScanSimulatorCard = () => {
    const navigate = useNavigate();
    const [scanUrl, setScanUrl] = useState('https://qodeplus.com/gl/00049000082055');

    const handleSimulateScan = () => {
        // Navigate directly to the Dasani consumer page
        navigate('/consumer/dasani-600ml');
    };

    return (
        <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 md:p-8">
            <div className="flex items-center space-x-3 mb-2">
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10m0 0h16m0 0V7m0 10l-2-2m2 2l-2 2M4 7L6 5M4 7l2 2m14-2l-2 2m2-2L18 5m-2 4h-4m4 0h-4"></path></svg>
                <h2 className="text-xl font-semibold text-gray-800">Scan Simulator</h2>
            </div>
            <p className="text-sm text-gray-500 mb-4">
                Simulate a consumer scanning a GS1 Digital Link on-pack.
            </p>

            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
                <input
                    type="text"
                    placeholder="Paste or simulate a GS1 Digital Link URL..."
                    value={scanUrl}
                    onChange={(e) => setScanUrl(e.target.value)}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-xl focus:ring-indigo-500 focus:border-indigo-500 shadow-sm transition-colors text-sm"
                />
                <button
                    onClick={handleSimulateScan}
                    className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-xl shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors flex-shrink-0"
                >
                    Simulate scan for Dasani 600ml
                </button>
            </div>
        </div>
    );
};


// --- MAIN PAGE COMPONENT ---

const DashboardPage = () => {
  return (
    <div className="space-y-8">
      
      {/* 1. Title Section */}
      <div>
        <h1 className="text-3xl font-extrabold text-gray-900">Impact Dashboard</h1>
        <p className="mt-1 text-lg text-gray-500">
          Real-time visibility into your product sustainability ledger and performance.
        </p>
      </div>

      {/* 2. KPI Cards Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpis.map((kpi) => (
          <KpiCard key={kpi.label} {...kpi} />
        ))}
      </div>

      {/* 3. Middle Section (Chart + Alerts) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* LEFT: Chart Placeholder (2/3 width on desktop) */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-lg border border-gray-100 p-6 h-96">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Carbon Impact Trend</h2>
          
          <div className="h-full flex items-center justify-center bg-gray-50 border border-dashed border-gray-300 rounded-lg p-10 mt-4">
            <p className="text-gray-500 text-lg font-medium">Chart/Visualization Coming Soon</p>
          </div>
        </div>

        {/* RIGHT: Alerts & Hotspots (1/3 width on desktop) */}
        <div className="lg:col-span-1 bg-white rounded-xl shadow-lg border border-gray-100">
          <div className="p-6 border-b border-gray-100">
            <h2 className="text-xl font-semibold text-red-700">Alerts & Hotspots</h2>
            <p className="text-sm text-gray-500 mt-1">Immediate action required for high-risk items.</p>
          </div>
          <ul className="divide-y divide-gray-100 p-6">
            {alerts.map((alert) => (
              <AlertItem key={alert.id} {...alert} />
            ))}
          </ul>
        </div>
      </div>
      
      {/* New Scan Simulator Card */}
      <ScanSimulatorCard />

      {/* 4. Bottom Section: Recent Ledger Events */}
      <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
        <div className="p-6 border-b border-gray-100">
          <h2 className="text-xl font-semibold text-gray-800">Recent Ledger Events</h2>
          <p className="text-sm text-gray-500 mt-1">Immutable record of recent sustainability transactions.</p>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Timestamp
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Event
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Product
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {ledgerEvents.map((event) => (
                <LedgerRow key={event.id} {...event} />
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};

export default DashboardPage;