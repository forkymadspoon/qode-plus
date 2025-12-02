// src/pages/ConsumerScanDasaniPage.tsx
import React from 'react';
import { Link } from 'react-router-dom';

// --- MOCK DATA ---
const productInfo = {
    name: 'Dasani Drinking Water (600ml)',
    brand: 'Dasani',
    gtin: '00049000082055',
    origin: 'Malaysia',
    updated: '2 hours ago',
    impactScore: 'B',
};

const impactBadges = [
    { label: 'Carbon', value: '~80 g CO₂e', subtext: 'per bottle', iconClass: 'bg-gray-700' },
    { label: 'Packaging', value: 'PET Type 1, 30% rPET', subtext: 'Recycled content', iconClass: 'bg-green-600' },
    { label: 'Sourcing', value: 'Bottled at certified facilities', subtext: 'Ethical sourcing', iconClass: 'bg-indigo-600' },
];

const recyclingSteps = [
    'Rinse bottle lightly',
    'Keep cap on (recycle together)',
    'Leave label on (machine sorted)',
    'Drop in Blue Bin or BCRS return point',
];

const journeySteps = [
    { name: 'Raw water source', country: 'Malaysia', icon: '💧' },
    { name: 'Bottling facility', country: 'Malaysia', icon: '🏭' },
    { name: 'Distribution centre', country: 'Singapore', icon: '🚚' },
    { name: 'Retail shelf', country: 'Singapore', icon: '🛒' },
    { name: 'You → Recycle', country: '', icon: '♻️' },
];

// --- COMPONENTS ---

const ImpactBadge: React.FC<{ label: string, value: string, subtext: string, iconClass: string }> = ({ label, value, subtext, iconClass }) => (
    <div className="flex flex-col p-4 bg-white rounded-xl shadow-md border border-gray-100 flex-1 min-w-[45%] md:min-w-0">
        <div className="flex items-center space-x-3 mb-2">
            <div className={`w-8 h-8 rounded-full ${iconClass} flex items-center justify-center text-white text-lg font-bold`}>
                {label.charAt(0)}
            </div>
            <p className="text-xs font-semibold uppercase text-gray-500">{label}</p>
        </div>
        <h3 className="text-lg font-bold text-gray-800 leading-tight">{value}</h3>
        <p className="text-xs text-gray-400 mt-0.5">{subtext}</p>
    </div>
);

const JourneyTimeline: React.FC = () => (
    <div className="overflow-x-auto py-2">
        <div className="flex items-center space-x-6 min-w-max">
            {journeySteps.map((step, index) => (
                <React.Fragment key={index}>
                    <div className="flex flex-col items-center text-center w-28 flex-shrink-0">
                        <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-xl shadow-inner border-2 border-indigo-300">
                            {step.icon}
                        </div>
                        <p className="mt-2 text-sm font-semibold text-gray-700 leading-tight">{step.name}</p>
                        {step.country && <span className="text-xs text-gray-500 mt-0.5">{step.country}</span>}
                    </div>
                    {index < journeySteps.length - 1 && (
                        <div className="h-0.5 w-12 bg-indigo-200 flex-shrink-0"></div>
                    )}
                </React.Fragment>
            ))}
        </div>
    </div>
);


const ConsumerScanDasaniPage = () => {
    return (
        <div className="bg-gray-100 min-h-screen flex justify-center py-8">
            {/* Mobile View Container */}
            <div className="w-full max-w-md md:max-w-[400px] bg-white shadow-2xl rounded-2xl md:rounded-3xl overflow-hidden flex flex-col min-h-[calc(100vh-64px)]">
                
                {/* Scrollable Content Area */}
                <div className="flex-1 p-5 md:p-6 space-y-6 md:space-y-8 overflow-y-auto">

                    {/* Top Header Section */}
                    <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                        <div className="text-lg font-bold text-indigo-600">Qode+</div>
                        <div className="text-xs text-gray-400">
                            GS1 Verified Product
                            <span className="block mt-0.5">Data updated {productInfo.updated}</span>
                        </div>
                    </div>

                    {/* Product Summary */}
                    <div className="space-y-4 text-center">
                        {/* Thumbnail Placeholder */}
                        <div className="w-32 h-32 mx-auto bg-gray-100 rounded-xl flex items-center justify-center border border-dashed border-gray-300 shadow-inner">
                            <span className="text-4xl">🧴</span>
                        </div>
                        <h1 className="text-2xl font-extrabold text-gray-900">{productInfo.name}</h1>
                        <p className="text-sm text-gray-500">
                            Brand: {productInfo.brand} &bull; GTIN: {productInfo.gtin}
                            <span className="block font-semibold text-indigo-600 mt-1">Origin: {productInfo.origin}</span>
                        </p>
                        <p className="text-base text-gray-700 font-medium pt-2">
                            Thanks for checking this product’s impact.
                        </p>
                    </div>

                    {/* Impact Highlight Card */}
                    <div className="p-4 bg-indigo-50 border-l-4 border-indigo-500 rounded-xl shadow-sm flex justify-between items-center">
                        <p className="text-sm font-medium text-indigo-800">
                            This bottle has ~30% lower carbon impact than the category average.
                        </p>
                        <span className="px-3 py-1 inline-flex text-xs font-bold rounded-lg uppercase bg-indigo-100 text-indigo-800 border border-indigo-300 ml-3 flex-shrink-0">
                            Score: {productInfo.impactScore}
                        </span>
                    </div>

                    {/* Small Badges Row */}
                    <div className="flex flex-wrap justify-between gap-3">
                        {impactBadges.map((badge) => (
                            <ImpactBadge key={badge.label} {...badge} />
                        ))}
                    </div>

                    {/* How to Recycle Card */}
                    <div className="bg-white p-5 rounded-xl shadow-md border border-gray-100">
                        <h2 className="text-xl font-bold text-gray-800 mb-4">How to recycle in Singapore (SG)</h2>
                        <ul className="space-y-2 list-none pl-0 text-gray-700 text-sm">
                            {recyclingSteps.map((step, index) => (
                                <li key={index} className="flex items-start">
                                    <span className="text-green-500 mr-2 text-lg leading-none">✓</span>
                                    {step}
                                </li>
                            ))}
                        </ul>
                        <button className="mt-4 pt-3 border-t border-gray-100 w-full text-indigo-600 font-medium text-sm hover:text-indigo-800 transition-colors text-left">
                            Learn more about recycling this item →
                        </button>
                    </div>

                    {/* Material Journey Timeline */}
                    <div className="space-y-4">
                        <h2 className="text-xl font-bold text-gray-800">Where this bottle has been</h2>
                        <JourneyTimeline />
                    </div>
                    
                    {/* AI Insight Card */}
                    <div className="p-4 bg-gray-50 border border-gray-200 rounded-xl shadow-sm">
                        <h4 className="font-semibold text-gray-700 mb-2">AI Insight</h4>
                        <div className="flex justify-between items-start">
                            <p className="text-sm text-gray-600 flex-1">
                                Most of this product’s footprint comes from PET bottle production, not the water inside.
                            </p>
                            <span className="px-3 py-1 inline-flex text-xs font-semibold rounded-full bg-green-100 text-green-800 ml-4 flex-shrink-0">
                                High confidence
                            </span>
                        </div>
                    </div>

                    {/* Actions Row */}
                    <div className="flex flex-col space-y-3 pt-3">
                        {/* Link to the internal Product Passport (conceptually for verified users) */}
                        <Link to="/product-passport/dasani-600ml" className="text-center w-full px-4 py-3 border border-transparent text-base font-medium rounded-xl shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors">
                            View full impact details
                        </Link>
                        <a href="#" className="text-center text-sm text-gray-500 hover:text-indigo-600 transition-colors">
                            Compare with similar products
                        </a>
                    </div>
                </div>

                {/* Bottom Micro Hint / Scroll Bar */}
                <div className="flex-shrink-0 p-3 flex flex-col items-center border-t border-gray-100 bg-gray-50">
                    <div className="w-12 h-1 bg-gray-300 rounded-full mb-1"></div>
                    <p className="text-xs text-gray-400">Scroll for more details</p>
                </div>

            </div>
        </div>
    );
};

export default ConsumerScanDasaniPage;