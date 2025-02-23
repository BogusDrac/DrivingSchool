import { useState, memo } from 'react';

const Specials = () => {
  const [activeTab, setActiveTab] = useState("current");

  const SpecialCard = memo(({ title, price, originalPrice, description, isAvailable, validUntil }) => (
    <div className="bg-white rounded-lg shadow-xl overflow-hidden border border-yellow-500/30 transform transition-transform duration-300 hover:scale-105">
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-gray-900">{title}</h3>
          <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
            isAvailable ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
          }`}>
            {isAvailable ? 'Available' : 'Sold Out'}
          </span>
        </div>
        <div className="flex items-baseline mb-2">
          <p className="text-3xl font-bold text-yellow-600">R{price}</p>
          {originalPrice && (
            <p className="ml-2 text-lg text-gray-500 line-through">R{originalPrice}</p>
          )}
        </div>
        <p className="text-gray-600 mb-2">{description}</p>
        <p className="text-sm text-gray-500 mb-6">Valid until: {validUntil}</p>
        <button 
          className={`w-full font-bold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 focus:ring-2 focus:ring-red-400 shadow-lg ${
            isAvailable 
              ? 'bg-red-600 hover:bg-red-700 text-white'
              : 'bg-gray-300 cursor-not-allowed text-gray-600'
          }`}
          disabled={!isAvailable}
        >
          {isAvailable ? 'Book Now' : 'Currently Unavailable'}
        </button>
      </div>
    </div>
  ));

  const currentSpecials = [
    {
      title: "Weekend Package Deal",
      price: 3500,
      originalPrice: 4500,
      description: "Complete Code 8 training over two weekends with extra practice sessions",
      isAvailable: false,
      validUntil: "March 31, 2025"
    },
    {
      title: "Learner's License Bundle",
      price: 1500,
      originalPrice: 1800,
      description: "Includes study materials, practice tests, and booking assistance",
      isAvailable: false,
      validUntil: "March 15, 2025"
    },
    {
      title: "Code 10 Express Course",
      price: 4800,
      originalPrice: 5500,
      description: "Intensive heavy vehicle training completed in 2 weeks",
      isAvailable: false,
      validUntil: "April 30, 2025"
    }
  ];

  const upcomingSpecials = [
    {
      title: "Easter Holiday Special",
      price: 3200,
      originalPrice: 3800,
      description: "Code 8 training with additional holiday practice hours",
      isAvailable: false,
      validUntil: "April 15, 2025"
    },
    {
      title: "Group Booking Discount",
      price: 3000,
      originalPrice: 3800,
      description: "Special rate for groups of 3 or more students",
      isAvailable: false,
      validUntil: "May 31, 2025"
    },
    {
      title: "First-Time Driver Package",
      price: 4200,
      originalPrice: 4800,
      description: "Complete beginner's package with extra support sessions",
      isAvailable: false,
      validUntil: "June 30, 2025"
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen select-none">
      <div className="container mx-auto p-6">
        <h1 className="text-4xl font-bold text-center text-yellow-600 mb-8">
          Special Offers
        </h1>
        <div className="w-full mb-8 flex rounded-lg bg-white p-1 shadow-lg border border-yellow-500/20">
          {['current', 'upcoming'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-3 px-4 rounded-md transition-all duration-300 sm:text-sm md:text-lg font-semibold
                ${activeTab === tab 
                  ? "bg-yellow-500 text-white shadow-md transform scale-105" 
                  : "text-yellow-600 hover:bg-yellow-50"}`}
            >
              {tab === 'current' ? "Current Specials" : "Upcoming Specials"}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(activeTab === "current" ? currentSpecials : upcomingSpecials).map((special, index) => (
            <SpecialCard key={index} {...special} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Specials;