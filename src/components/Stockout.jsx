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
        return <span role="img" aria-label="stockouts" className="text-white text-lg">🛒</span>;
      case 'cashRecovery':
        return <span role="img" aria-label="cashRecovery" className="text-white text-lg">💰</span>;
      case 'revenue':
        return <span role="img" aria-label="revenue" className="text-white text-lg">📈</span>;
      default:
        return null;
    }
  };

  return (
    <div className="bg-black min-h-screen flex flex-col">
      <div className="flex items-start p-6">
        <div className="flex flex-col items-center">
          <div className="bg-gradient-to-r from-pink-500 to-purple-500 p-2 rounded-full mb-6 transition-all duration-500 ease-in-out">
            {renderIcon()}
          </div>
          <button
            className={`text-white mb-2 ${selected === 'stockouts' ? 'border-l-4 pl-2 border-pink-500' : 'border-l-4 pl-2 border-transparent'}`}
            onClick={() => setSelected('stockouts')}
          >
            STOCKOUTS
          </button>
          <button
            className={`text-white mb-2 ${selected === 'cashRecovery' ? 'border-l-4 pl-2 border-pink-500' : 'border-l-4 pl-2 border-transparent'}`}
            onClick={() => setSelected('cashRecovery')}
          >
            CASH RECOVERY CYCLE
          </button>
          <button
            className={`text-white mb-2 ${selected === 'revenue' ? 'border-l-4 pl-2 border-pink-500' : 'border-l-4 pl-2 border-transparent'}`}
            onClick={() => setSelected('revenue')}
          >
            REVENUE
          </button>
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
