import React from "react";
import { ShoppingCart, HandshakeIcon, DollarSign } from "lucide-react";

export function MarketplaceActions() {
  const actions = [
    {
      title: "Buy",
      icon: <ShoppingCart className="w-24 h-24" />,
      color: "from-blue-500 to-blue-700",
      description: "Purchase retro games",
    },
    {
      title: "Trade",
      icon: <HandshakeIcon className="w-24 h-24" />,
      color: "from-purple-500 to-purple-700",
      description: "Exchange your games",
    },
    {
      title: "Sell",
      icon: <DollarSign className="w-24 h-24" />,
      color: "from-green-500 to-green-700",
      description: "List your games",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-12 p-12">
      {actions.map((action, index) => (
        <div
          key={index}
          className="w-full md:w-96 transform hover:scale-110 transition-transform"
        >
          <div className="bg-red-500 p-3 rounded-2xl shadow-[0_0_30px_rgba(255,0,0,0.5)]">
            <div className="bg-gray-900 p-10 rounded-2xl flex flex-col items-center">
              <div
                className={`bg-gradient-to-b ${action.color} p-8 rounded-full text-white`}
              >
                {action.icon}
              </div>
              <h3 className="text-white text-3xl font-bold mt-8">
                {action.title}
              </h3>
              <p className="text-gray-400 text-lg text-center mt-4">
                {action.description}
              </p>
              {/* Mario-themed Button */}
              <button className="mt-8 w-full bg-yellow-500 text-red-900 px-12 py-4 rounded-xl border-b-4 border-yellow-700 
                hover:bg-yellow-400 hover:border-yellow-600 active:border-b-0 active:transform active:translate-y-1 transition-all 
                text-xl font-bold tracking-wide retro-font relative">
                <span className="relative z-10">{action.title} Now</span>
                {/* Coin Animation */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-yellow-300 rounded-full shadow-lg 
                  animate-bounce opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
