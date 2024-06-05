import React, { useState } from 'react';

const StockOuts = () => {
  const [selected, setSelected] = useState('stockouts');

  const renderContent = () => {
    switch (selected) {
      case 'stockouts':
        return (
          <>
            <div className="text-7xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
              85%
            </div>
            <div className="text-white text-xl mt-2">
              Reduction in out-of-stock
            </div>
          </>
        );
      case 'cashRecovery':
        return (
          <>
            <div className="text-7xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
              60 Days
            </div>
            <div className="text-white text-xl mt-2">
              Improved cash recovery cycle
            </div>
          </>
        );
      case 'revenue':
        return (
          <>
            <div className="text-7xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
              20%
            </div>
            <div className="text-white text-xl mt-2">
              Increase in revenue
            </div>
          </>
        );
      default:
        return null;
    }
  };

  const renderIcon = () => {
    switch (selected) {
      case 'stockouts':
        return <span role="img" aria-label="stockouts" className="text-white text-2xl">🛒</span>;
      case 'cashRecovery':
        return <span role="img" aria-label="cashRecovery" className="text-white text-2xl">💰</span>;
      case 'revenue':
        return <span role="img" aria-label="revenue" className="text-white text-2xl">📈</span>;
      default:
        return null;
    }
  };

  return (
    <div className="bg-black min-h-screen flex flex-col">
      <div className="flex items-start p-6 relative">
        {/* Vertical Pink Path */}
        <div className="absolute left-10 top-0 bottom-0 w-1 bg-gradient-to-b from-pink-500 to-purple-500"></div>

        <div className="relative flex flex-col items-start ml-14">
          {/* Buttons */}
          <button
            className={`text-white mb-4 px-6 py-2 rounded-full border-2 transition duration-300 ease-in-out transform hover:scale-105 ${
              selected === 'stockouts'
                ? 'border-gradient-to-r from-pink-500 to-purple-500'
                : 'border-gray-700 hover:border-gradient-to-r from-pink-500 to-purple-500'
            }`}
            onClick={() => setSelected('stockouts')}
          >
            STOCKOUTS
          </button>
          <button
            className={`text-white mb-4 px-6 py-2 rounded-full border-2 transition duration-300 ease-in-out transform hover:scale-105 ${
              selected === 'cashRecovery'
                ? 'border-gradient-to-r from-pink-500 to-purple-500'
                : 'border-gray-700 hover:border-gradient-to-r from-pink-500 to-purple-500'
            }`}
            onClick={() => setSelected('cashRecovery')}
          >
            CASH RECOVERY CYCLE
          </button>
          <button
            className={`text-white mb-4 px-6 py-2 rounded-full border-2 transition duration-300 ease-in-out transform hover:scale-105 ${
              selected === 'revenue'
                ? 'border-gradient-to-r from-pink-500 to-purple-500'
                : 'border-gray-700 hover:border-gradient-to-r from-pink-500 to-purple-500'
            }`}
            onClick={() => setSelected('revenue')}
          >
            REVENUE
          </button>

          {/* Moving Icon */}
          <div
            className={`absolute transition-all duration-500 ease-in-out transform ${
              selected === 'stockouts' ? 'top-4' : selected === 'cashRecovery' ? 'top-20' : 'top-36'
            }`}
            style={{ left: '30px' }}
          >
            {renderIcon()}
          </div>
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center transition-all duration-500 ease-in-out">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default StockOuts;
