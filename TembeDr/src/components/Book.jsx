  import { useState, memo } from 'react';
  import img1 from '../assets/images/learners.jpg';
  import img2 from '../assets/images/code8.jpg';
  import img3 from '../assets/images/code10.jpg';
  import img4 from '../assets/images/code14.jpg';

  const WHATSAPP_NUMBER = "+27633383254";

  const Book = () => {
    const [activeTab, setActiveTab] = useState("learnersOnly");

    const createWhatsAppLink = (course, price) => {
      const message = encodeURIComponent(`Hi, I'm interested in booking the ${course} course priced at R${price}.`);
      return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
    };

    const DriverCard = memo(({ title, code, price, description, image }) => (
      <div className="bg-white rounded-lg shadow-xl overflow-hidden border border-yellow-500/30 transform transition-transform duration-300 hover:scale-105">
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900">{title}</h3>
          <p className="text-sm text-yellow-600">Code {code}</p>
          <div className="aspect-video w-full overflow-hidden rounded-lg bg-white mb-4 border border-yellow-500/20">
            <img src={image} alt={title} className="h-full w-full object-cover hover:opacity-90 transition-opacity duration-300" loading="lazy" />
          </div>
          <p className="text-3xl font-bold text-yellow-600 mb-2">R{price}</p>
          <p className="text-gray-600 mb-6">{description}</p>
          <a href={createWhatsAppLink(title, price)} target="_blank" rel="noopener noreferrer" className="block w-full">
            <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 focus:ring-2 focus:ring-red-400 shadow-lg">
              Place Order on WhatsApp
            </button>
          </a>
        </div>
      </div>
    ));

    const LearnersCard = memo(() => (
      <div className="bg-white rounded-lg shadow-xl overflow-hidden max-w-sm border border-yellow-500/30 transform transition-transform duration-300 hover:scale-105">
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900">Learner's License</h3>
          <p className="text-sm text-yellow-600">Essential First Step</p>
          <div className="aspect-video w-full overflow-hidden rounded-lg bg-white mb-4 border border-yellow-500/20">
            <img src={img1} alt="Learners License" className="h-48 w-96 object-fill hover:opacity-90 transition-opacity duration-300" loading="lazy" />
          </div>
          <p className="text-3xl font-bold text-yellow-600 mb-2">R1800</p>
          <p className="text-gray-600 mb-6">Complete learner's license preparation including study materials, practice tests, and booking assistance.</p>
          <a href={createWhatsAppLink("Learner's License", 850)} target="_blank" rel="noopener noreferrer" className="block w-full">
            <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 focus:ring-2 focus:ring-red-400 shadow-lg">
              Place Order on WhatsApp
            </button>
          </a>
        </div>
      </div>
    ));

    const packages = {
      withLearners: [
        { title: "Code 8 Package", code: "8", price: 4500, description: "Includes learner's license and driver's training.", image: img2 },
        { title: "Code 10 Package", code: "10", price: 5500, description: "Comprehensive heavy motor vehicle training.", image: img3 },
        { title: "Code 14 Package", code: "14", price: 5300, description: "Full package for extra heavy vehicles.", image: img4 },
      ],
      withoutLearners: [
        { title: "Code 8 Training", code: "8", price: 3800, description: "Training for light motor vehicles (learner's license required).", image: img2 },
        { title: "Code 10 Training", code: "10", price: 4800, description: "Heavy vehicle training for licensed learners.", image: img3 },
        { title: "Code 14 Training", code: "14", price: 5900, description: "Extra heavy vehicle training for licensed learners.", image: img4 },
      ],
    };

    return (
      <div className="bg-gray-50 min-h-screen select-none">
        <div className="container mx-auto p-6">
          <h1 className="animate-pulse text-4xl font-bold text-center text-yellow-600">
            Eye Test Available
          </h1>
        </div>
        <div className="container mx-auto px-4 py-8">
          <div className="w-full mb-8 flex rounded-lg bg-white p-1 shadow-lg border border-yellow-500/20">
            {['learnersOnly', 'withLearners', 'withoutLearners'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-3 px-4 rounded-md transition-all duration-300 sm:text-sm md:text-lg font-semibold
                  ${activeTab === tab 
                    ? "bg-yellow-500 text-white shadow-md transform scale-105" 
                    : "text-yellow-600 hover:bg-yellow-50"}`}
              >
                {tab === 'learnersOnly' ? "Learner's Only" : tab === 'withLearners' ? "With Learner's" : "Without Learner's"}
              </button>
            ))}
          </div>

          <div className="mt-8">
            {activeTab === "learnersOnly" && (
              <div className="flex justify-center">
                <LearnersCard />
              </div>
            )}
            {activeTab !== "learnersOnly" && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {packages[activeTab].map((pkg) => (
                  <DriverCard key={pkg.code} {...pkg} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  export default Book;