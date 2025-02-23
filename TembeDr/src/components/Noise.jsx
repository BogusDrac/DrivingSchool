import { useNavigate } from 'react-router-dom';
import { Volume2, Siren, ChevronLeft, Megaphone } from 'lucide-react';

const Noise = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-50 min-h-screen p-6 select-none">
      <div className="container mx-auto max-w-4xl">
        {/* Back Button */}
        <button 
          onClick={() => navigate(-1)}
          className="mb-6 flex items-center text-yellow-600 hover:text-yellow-700 transition-colors"
        >
          <ChevronLeft className="w-5 h-5 mr-1" />
          <span>Back</span>
        </button>

        <h1 className="text-3xl font-bold text-center text-yellow-600 mb-8">
          Vehicle Noise Regulations
        </h1>

        {/* Hooter Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <div className="flex items-center mb-4">
            <Megaphone className="w-6 h-6 text-yellow-600 mr-2" />
            <h2 className="text-2xl font-semibold text-gray-900">Hooter</h2>
          </div>
          <p className="text-gray-700 mb-4">
            A driver is only allowed to use the hooter when its necessary, for safety purposes.
          </p>
          <div className="bg-yellow-50 rounded-lg p-4">
            <p className="font-semibold mb-2">A light motor vehicle may not be used on a public road unless:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>It has fully functioning warning device (hooter)</li>
              <li>Which can produce a sound that is clearly audible to a person of normal hearing from a distance of 90 meters</li>
              <li>You may not use sirens or warning devices that play a tune on private vehicles</li>
            </ul>
          </div>
        </div>

        {/* Emergency Warning Device Section */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center mb-4">
            <Siren className="w-6 h-6 text-red-600 mr-2" />
            <h2 className="text-2xl font-semibold text-gray-900">Emergency Warning Device (Siren)</h2>
          </div>
          <p className="text-gray-700 mb-4">
            Motor vehicle drivers/rider must give right of way to all emergency vehicles sounding a siren and showing emergency warning lights.
          </p>
          <div className="bg-red-50 rounded-lg p-4">
            <p className="font-semibold mb-2">These vehicles are regarded as emergency vehicles:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-600"></div>
                <p>Fire fighting response vehicle</p>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-600"></div>
                <p>Rescue vehicle</p>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-600"></div>
                <p>Emergency medical response vehicle</p>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-600"></div>
                <p>Ambulance</p>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-blue-600"></div>
                <p>Traffic Officer vehicle</p>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-green-600"></div>
                <p>Civil Protection vehicle</p>
              </div>
            </div>
          </div>
        </div>

        {/* Excessive noise */}
        <div className="bg-white rounded-lg p-4">
            <div className="flex items-center mb-4">
                <Volume2 className="w-6 h-6 text-yellow-600 mr-2" />
                <h2 className="text-2xl font-semibold text-gray-900">Excessive Noise</h2>
            </div>
            <div className="bg-yellow-50 rounded-lg p-4">
                <p className="text-gray-700 mb-4">
                    You are not allowed to drive a vehicle on a public road in such a way that it makes excessive noise.
                </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Noise;