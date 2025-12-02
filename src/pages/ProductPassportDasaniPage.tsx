// src/pages/ProductPassportDasaniPage.tsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

type Tab = "overview" | "impact" | "packaging" | "traceability" | "circularity" | "regulatory";

// --- MOCK DATA ---
const productData = {
    name: 'Dasani Drinking Water (600ml)',
    brand: 'Dasani',
    category: 'BCRS',
    gtin: '00049000082055',
    status: 'Active',
    updated: '2 hours ago',
    kpis: [
        { label: 'Total product carbon', value: '80 g CO₂e', caption: 'Per unit, cradle-to-grave', color: 'text-indigo-600' },
        { label: 'Circularity score', value: '30%', caption: 'Recycled PET content', color: 'text-green-600' },
        { label: 'Packaging weight', value: '~31 g total', caption: 'Bottle + cap + label', color: 'text-gray-600' },
    ],
    overviewDetails: {
        'Product type': 'Purified drinking water',
        'Origin': 'Malaysia (example)',
        'Net volume': '600 ml',
        'Category': 'BCRS – Beverage containers',
        'Bottle material': 'PET (Type 1)',
        'Cap material': 'PP (Type 5)',
        'Label': 'Plastic film (PET-G/OPP)',
        'Status': 'Active',
    },
    impactBreakdown: [
        { name: 'Raw material (PET resin)', percentage: 46, color: 'bg-indigo-500' },
        { name: 'Manufacturing (bottling)', percentage: 22, color: 'bg-indigo-400' },
        { name: 'Distribution', percentage: 18, color: 'bg-indigo-300' },
        { name: 'End-of-life', percentage: 13, color: 'bg-indigo-200' },
        { name: 'Use phase', percentage: 1, color: 'bg-indigo-100' },
    ],
    packagingConfig: [
        { name: 'Bottle', material: 'PET (Type 1)', weight: '28 g', recycledContent: '30%', note: null },
        { name: 'Cap', material: 'PP (Type 5)', weight: '2 g', recycledContent: '0%', note: 'Recyclable with bottle' },
        { name: 'Label', material: 'PET-G/OPP film', weight: '1 g', recycledContent: '0%', note: 'Remove vs not remove depends on region' },
    ],
    traceabilityTimeline: [
        { step: 1, name: 'Raw water source', location: 'Malaysia', label: 'Verified source location' },
        { step: 2, name: 'Filtration & mineralization', location: 'Malaysia', label: 'QMS certified' },
        { step: 3, name: 'Bottling facility', location: 'Malaysia', label: 'Latest audit: 2025-10-01' },
        { step: 4, name: 'Distribution centre', location: 'Singapore', label: 'Batch LOT21H23 received' },
        { step: 5, name: 'Retail', location: 'Singapore', label: 'Shelf placement ready' },
        { step: 6, name: 'Consumer & recycling', location: 'Global', label: 'BCRS compatible' },
    ],
};

// --- COMPONENTS ---

// Reusable Card Component for KPIs
const KpiCard: React.FC<{ label: string; value: string; caption: string; color: string }> = ({ label, value, caption, color }) => (
    <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
        <p className="text-sm font-medium text-gray-500 mb-1">{label}</p>
        <h3 className={`text-3xl font-extrabold ${color}`}>{value}</h3>
        <p className="text-xs text-gray-400 mt-2">{caption}</p>
    </div>
);

// Tab Navigation
const TabBar: React.FC<{ activeTab: Tab, setActiveTab: (tab: Tab) => void }> = ({ activeTab, setActiveTab }) => {
    const tabs: { key: Tab; label: string }[] = [
        { key: 'overview', label: 'Overview' },
        { key: 'impact', label: 'Impact' },
        { key: 'packaging', label: 'Packaging' },
        { key: 'traceability', label: 'Traceability' },
        { key: 'circularity', label: 'Circularity' },
        { key: 'regulatory', label: 'Regulatory' },
    ];

    return (
        <div className="flex space-x-2 border-b border-gray-200 overflow-x-auto pb-1">
            {tabs.map((tab) => (
                <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key)}
                    className={`
                        py-2 px-4 text-sm font-medium rounded-t-lg transition-colors duration-150 ease-in-out
                        ${activeTab === tab.key
                            ? 'text-indigo-600 border-b-2 border-indigo-600 font-bold'
                            : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
                        }
                    `}
                >
                    {tab.label}
                </button>
            ))}
        </div>
    );
};


// --- TAB CONTENT COMPONENTS ---

const OverviewTab: React.FC = () => (
    <div className="space-y-8">
        {/* 1. KPI Cards Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {productData.kpis.map((kpi) => (
                <KpiCard key={kpi.label} {...kpi} />
            ))}
        </div>

        {/* 2. Basic Info Section */}
        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Product Specifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                {Object.entries(productData.overviewDetails).map(([key, value]) => (
                    <div key={key} className="flex space-x-2">
                        <span className="font-medium text-gray-500 w-1/2 min-w-[120px]">{key}:</span>
                        <span className="text-gray-800 font-semibold w-1/2">{value}</span>
                    </div>
                ))}
            </div>
        </div>
        
        {/* 3. Highlight Card */}
        <div className="p-4 bg-indigo-50 border-l-4 border-indigo-500 rounded-xl shadow-inner flex items-center justify-between">
            <p className="text-sm font-medium text-indigo-800">
                This product has ~30% lower carbon impact than the category average.
            </p>
            <span className="px-3 py-1 inline-flex text-xs font-bold rounded-lg uppercase border bg-indigo-100 text-indigo-800 border-indigo-200">
                Impact score: B
            </span>
        </div>
    </div>
);

const ImpactTab: React.FC = () => (
    <div className="space-y-6">
        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Lifecycle Carbon Breakdown</h3>
            <p className="text-sm text-gray-500 mb-6">Total Carbon Per Unit: 80 g CO₂e</p>

            {productData.impactBreakdown.map((item) => (
                <div key={item.name} className="mb-4">
                    <div className="flex justify-between mb-1 text-sm font-medium text-gray-700">
                        <span>{item.name}</span>
                        <span>{item.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div 
                            className={`h-2.5 rounded-full ${item.color}`} 
                            style={{ width: `${item.percentage}%` }}
                        ></div>
                    </div>
                </div>
            ))}
        </div>

        {/* AI Insight Card */}
        <div className="p-4 bg-gray-50 border border-gray-200 rounded-xl shadow-sm">
            <h4 className="font-semibold text-gray-700 mb-2">AI Insight</h4>
            <div className="flex justify-between items-center">
                <p className="text-sm text-gray-600">
                    Most of this product’s emissions come from PET resin production (46% of total).
                </p>
                <span className="px-3 py-1 inline-flex text-xs font-semibold rounded-full bg-green-100 text-green-800">
                    High confidence
                </span>
            </div>
        </div>
    </div>
);

const PackagingTab: React.FC = () => (
    <div className="space-y-6">
        <h3 className="text-2xl font-semibold text-gray-800">Packaging Configuration</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {productData.packagingConfig.map((item) => (
                <div key={item.name} className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                    <h4 className="text-lg font-bold text-indigo-600 mb-3">{item.name}</h4>
                    <ul className="text-sm space-y-2">
                        <li><span className="font-medium text-gray-500">Material:</span> <span className="text-gray-800">{item.material}</span></li>
                        <li><span className="font-medium text-gray-500">Weight:</span> <span className="text-gray-800">{item.weight}</span></li>
                        <li><span className="font-medium text-gray-500">Recycled Content:</span> <span className="text-gray-800">{item.recycledContent}</span></li>
                        {item.note && (
                            <li className="mt-2 pt-2 border-t border-dashed text-xs text-gray-500">Note: {item.note}</li>
                        )}
                    </ul>
                </div>
            ))}
        </div>

        {/* Opportunities Card */}
        <div className="p-4 bg-green-50 border-l-4 border-green-500 rounded-xl shadow-inner">
            <h4 className="font-semibold text-green-800 mb-1">Opportunities</h4>
            <p className="text-sm text-green-700">
                Increase rPET content to 50–60% to reduce emissions by an estimated 18–22% per unit.
            </p>
        </div>
    </div>
);

const TraceabilityTab: React.FC = () => (
    <div className="space-y-8">
        <h3 className="text-2xl font-semibold text-gray-800">Supply Chain Journey</h3>
        
        {/* Timeline */}
        <div className="relative border-l-2 border-indigo-200 ml-4 pl-8 pt-2 space-y-6">
            {productData.traceabilityTimeline.map((step, index) => (
                <div key={step.step} className="relative">
                    {/* Circle Marker */}
                    <div className="absolute -left-12 top-0 w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-xs shadow-lg ring-4 ring-white">
                        {step.step}
                    </div>
                    <div className="bg-white p-4 rounded-xl shadow-md border border-gray-100">
                        <h4 className="text-lg font-semibold text-gray-800">{step.name}</h4>
                        <p className="text-sm text-gray-600 mt-1">
                            <span className="font-medium text-indigo-600">{step.location}</span> &bull; {step.label}
                        </p>
                    </div>
                </div>
            ))}
        </div>

        {/* Recent Events List */}
        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
            <h4 className="text-xl font-semibold text-gray-800 mb-4">Recent Ledger Events</h4>
            <ul className="space-y-3 text-sm">
                <li className="flex justify-between items-center text-gray-700 border-b pb-2 border-gray-100">
                    <span>Batch LOT21H23 verified</span>
                    <span className="text-xs text-gray-500">2025-11-30</span>
                </li>
                <li className="flex justify-between items-center text-gray-700 border-b pb-2 border-gray-100">
                    <span>Packaging spec updated (30% rPET)</span>
                    <span className="text-xs text-gray-500">2025-11-29</span>
                </li>
                <li className="flex justify-between items-center text-gray-700">
                    <span>New shipment received in SG DC</span>
                    <span className="text-xs text-gray-500">2025-11-28</span>
                </li>
            </ul>
        </div>
    </div>
);

const CircularityTab: React.FC = () => (
    <div className="space-y-8">
        <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 text-center">
            <h3 className="text-sm font-semibold text-gray-500 uppercase">Current Circularity Score</h3>
            <p className="text-6xl font-extrabold text-green-600 my-4">30%</p>
            <p className="text-lg text-gray-600">Currently 30% recycled PET content.</p>

            <div className="w-full bg-gray-200 rounded-full h-4 mt-6">
                <div 
                    className="bg-green-500 h-4 rounded-full transition-all duration-500 ease-out" 
                    style={{ width: `30%` }}
                ></div>
            </div>
            <p className="text-sm text-gray-400 mt-1">Current rPET usage vs 100% ideal.</p>
        </div>

        {/* Target Scenario Card */}
        <div className="bg-indigo-50 p-6 rounded-xl shadow-inner border border-indigo-200">
            <h4 className="text-xl font-semibold text-indigo-800 mb-3">Target Scenario: 60% rPET</h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm font-medium">
                <div>
                    <p className="text-gray-500">Target rPET:</p>
                    <p className="text-indigo-600 text-lg font-bold">60%</p>
                </div>
                <div>
                    <p className="text-gray-500">Expected Circularity Score:</p>
                    <p className="text-indigo-600 text-lg font-bold">~42%</p>
                </div>
                <div>
                    <p className="text-gray-500">Expected CO₂e Reduction:</p>
                    <p className="text-indigo-600 text-lg font-bold">18–22 g</p>
                </div>
            </div>
            <p className="mt-4 text-xs text-gray-500">Achieving 60% rPET would move the impact score from B to A-.</p>
        </div>
    </div>
);

const RegulatoryTab: React.FC = () => (
    <div className="space-y-6">
        <h3 className="text-2xl font-semibold text-gray-800">Regulatory Compliance and Standards</h3>
        
        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
            <ul className="space-y-4 text-gray-700">
                <li className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                    <span className="font-semibold">GS1 Digital Link:</span> Compliant (GTIN Mapped)
                </li>
                <li className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                    <span className="font-semibold">Food Safety:</span> Meets local bottled water regulations (ISO 22000)
                </li>
                <li className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                    <span className="font-semibold">Allergens:</span> None declared
                </li>
                <li className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                    <span className="font-semibold">Labeling:</span> Meets EU/APAC region requirements
                </li>
                <li className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                    <span className="font-semibold">Packaging:</span> Compatible with BCRS and recycling streams
                </li>
            </ul>
        </div>

        {/* Disclaimer */}
        <div className="p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded-xl shadow-inner">
            <p className="text-xs text-yellow-800 italic">
                Disclaimer: Always refer to on-pack label and local authorities for official regulatory information.
            </p>
        </div>
    </div>
);


const TabContent: React.FC<{ activeTab: Tab }> = ({ activeTab }) => {
    switch (activeTab) {
        case 'overview': return <OverviewTab />;
        case 'impact': return <ImpactTab />;
        case 'packaging': return <PackagingTab />;
        case 'traceability': return <TraceabilityTab />;
        case 'circularity': return <CircularityTab />;
        case 'regulatory': return <RegulatoryTab />;
        default: return <OverviewTab />;
    }
}

// --- MAIN PAGE COMPONENT ---

const ProductPassportDasaniPage = () => {
    const [activeTab, setActiveTab] = useState<Tab>('overview');

    return (
        <div className="space-y-8">
            {/* Back Button */}
            <Link to="/products" className="flex items-center text-indigo-600 hover:text-indigo-800 text-sm font-medium">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                Back to Products
            </Link>

            {/* 1. Header Area (Product & Summary) */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 md:p-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:space-x-8">
                    
                    {/* Left Side: Product Info */}
                    <div className="flex-1 space-y-3">
                        <h1 className="text-4xl font-extrabold text-gray-900 leading-tight">
                            {productData.name}
                        </h1>
                        <div className="flex items-center space-x-3 text-sm">
                            <span className="text-gray-500">Brand: <span className="font-semibold text-gray-700">{productData.brand}</span></span>
                            <span className="text-gray-500">GTIN: <span className="font-semibold text-gray-700">{productData.gtin}</span></span>
                        </div>

                        {/* Badges */}
                        <div className="flex flex-wrap items-center space-x-2 pt-2">
                            <span className="px-3 py-1 text-sm font-medium rounded-full bg-indigo-100 text-indigo-800">
                                {productData.category}
                            </span>
                            <span className="px-3 py-1 text-sm font-medium rounded-full bg-green-100 text-green-800">
                                {productData.status}
                            </span>
                            <span className="px-3 py-1 text-sm font-medium rounded-full bg-blue-500 text-white flex items-center shadow-md">
                                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M2.166 4.995c.767-1.121 2.38-1.748 4.094-1.748s3.327.627 4.094 1.748.767 2.627 0 3.748c-.767 1.121-2.38 1.748-4.094 1.748s-3.327-.627-4.094-1.748c-.767-1.121-.767-2.627 0-3.748zM10 16a8 8 0 100-16 8 8 0 000 16zm-1-5a1 1 0 102 0v-5a1 1 0 10-2 0v5z" clipRule="evenodd"></path></svg>
                                GS1 Verified
                            </span>
                        </div>
                    </div>
                    
                    {/* Right Side: Image Placeholder */}
                    <div className="w-full md:w-56 mt-6 md:mt-0 flex-shrink-0">
                        <div className="bg-gray-100 rounded-xl p-4 h-64 flex flex-col items-center justify-center border-2 border-dashed border-gray-300">
                            <svg className="w-12 h-12 text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
                            <span className="text-sm text-gray-500">Product Image</span>
                        </div>
                    </div>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between text-xs text-gray-400">
                    <span>Part of Qode+ Impact Ledger</span>
                    <span>Updated {productData.updated}</span>
                </div>
            </div>

            {/* 2. Tab Bar */}
            <TabBar activeTab={activeTab} setActiveTab={setActiveTab} />
            
            {/* 3. Tab Content Area */}
            <div className="pt-4">
                <TabContent activeTab={activeTab} />
            </div>
        </div>
    );
};

export default ProductPassportDasaniPage;