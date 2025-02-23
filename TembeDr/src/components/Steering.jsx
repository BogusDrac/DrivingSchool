import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";


const Steering = () => {
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
          Steering
        </h1>

        {/* Steering Gear motorcycle */}
        <div className="bg-whie rounded shadow-lg p-6 mb-6">
          <div className="flex items-center mb-4">
            <h2 className="text-2xl font-semibold text-gray-900">
              Steering Gear motorcycle
            </h2>
          </div>
          <p className="text-gray-700 mb-4">
            If your motorcycle steering gear parts are not kept in a condition that allows the moorcycle to be steered safely and efficiently, then it is not to be used on public roads, except if the distance between the outside edge of the handlebars is:
          </p>
          <div className="bg-yellow-50 rounded-lg p-4">
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Between 600 & 800 millimetres for the engine capacity of 200 cc or more.</li>
              <li>Between 500 & 800 millimetres for the engine capacity of 125 cc or more but less than 200 cc.</li>
            </ul>
          </div>
          <p className="text-gray-700 mt-4">
            On the handlebars, the outer ends of the handgrips are:
          </p>
          <div className="bg-yellow-50 rounded-lg p-4">
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Above seat height, must be higher than 500 millimetre.</li>
              <li>Or lower than seat height, must be lower than 500 millimetre.</li>
            </ul>
          </div>
        </div>

        {/* Light and Heavy Motor Vehicles */}
        <div className="bg-whie rounded shadow-lg p-6 mb-6">
          <div className="flex items-center mb-4">
            <h2 className="text-2xl font-semibold text-gray-900">
              Light and Heavy Motor Vehicles
            </h2>
          </div>
          <p className="text-gray-700 bg-yellow-50 rounded p-6 mt-4">
            If your light or heavy motor vehicle steering gear parts are not kept in a condition that allows the vehicle to be steered safely and efficiently, then it is not to be used on public roads.
          </p>
        </div>

      </div>
    </div>
  );
}

export default Steering;
