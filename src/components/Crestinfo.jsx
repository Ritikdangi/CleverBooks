import React from 'react';
import { ClipboardCheckIcon, CalendarIcon, CubeIcon, LocationMarkerIcon } from '@heroicons/react/outline';


const CrestInfo = () => {
  return (
    <div className="relative py-12 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-50 via-pink-50 to-red-50 grainy-bg"></div>
      <div className="relative max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Four key questions answered by Crest
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="bg-white bg-opacity-75 p-6 rounded-lg shadow-lg">
            <ClipboardCheckIcon className="h-12 w-12 text-purple-600 mx-auto" />
            <div className="text-lg leading-6 font-medium text-gray-900 mt-4">What to order</div>
            <p className="mt-2 text-base text-gray-500">
              Get accurate demand and days to stock out. Automate purchase planning so you can always have what you need for your next sales cycle.
            </p>
          </div>
          <div className="bg-white bg-opacity-75 p-6 rounded-lg shadow-lg">
            <CalendarIcon className="h-12 w-12 text-purple-600 mx-auto" />
            <div className="text-lg leading-6 font-medium text-gray-900 mt-4">When to order</div>
            <p className="mt-2 text-base text-gray-500">
              Have up-to-date inventory, storage, sales velocity, and demand. Get timely order suggestions so you're never left guessing.
            </p>
          </div>
          <div className="bg-white bg-opacity-75 p-6 rounded-lg shadow-lg">
            <CubeIcon className="h-12 w-12 text-purple-600 mx-auto" />
            <div className="text-lg leading-6 font-medium text-gray-900 mt-4">How much to stock</div>
            <p className="mt-2 text-base text-gray-500">
              Get inventory requirements for every node, for every SKU. So you avoid out-of-stock situations, even during demand spikes.
            </p>
          </div>
          <div className="bg-white bg-opacity-75 p-6 rounded-lg shadow-lg">
            <LocationMarkerIcon className="h-12 w-12 text-purple-600 mx-auto" />
            <div className="text-lg leading-6 font-medium text-gray-900 mt-4">Where to place</div>
            <p className="mt-2 text-base text-gray-500">
              Our tool suggests how to move stock within your supply chain. So you'll always have products available across cities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CrestInfo;
