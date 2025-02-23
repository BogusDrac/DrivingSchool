import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";


const Brakes = () => {
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
          Brakes 
        </h1>

        {/* Motorcycle */}
        <div className="bg-whie rounded shadow-lg p-6 mb-6">
          <div className="flex items-center mb-4">
            <h2 className="text-2xl font-semibold text-gray-900">
              Motorcycle
            </h2>
          </div>
          <p className="text-gray-700 mb-4">
            You are not allowed to ride a motorycle that is not equipped with two independent braking systems:
          </p>
          <div className="bg-yellow-50 rounded-lg p-4">
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>One for the front wheel.</li>
              <li>The other for the rear wheel.</li>
            </ul>
          </div>
          <p className="text-gray-700 mt-4">
            Which are in good working order.
          </p>
        </div>

        {/* Light & Heavy Motor Vehicles */}
        <div className="bg-whie rounded shadow-lg p-6 mb-6">
          <div className="flex items-center mb-4">
            <h2 className="text-2xl font-semibold text-gray-900">
            Light & Heavy Motor Vehicles
            </h2>
          </div>
          <p className="text-gray-700 mb-4">
            It is compulsory for all light and heavy motor vehicles used on public roads to have:
          </p>
          <div className="bg-yellow-50 rounded-lg p-4">
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>A service brake.</li>
              <li>A parking brake.</li>
              <li>An emergency brake (same as parking brake)</li>
            </ul>
          </div>
          <p className="text-gray-700 mt-4">
            Which are in good working order.
          </p>
          <p className="text-gray-700 mt-4">
            Given that the emergency brake and parking brake may be one and the same brake.
          </p>
        </div>

        <h1 className="text-3xl font-bold text-center text-yellow-600 mb-8">
          Tyres 
        </h1>

        {/* Motorcycle */}
        <div className="bg-whie rounded shadow-lg p-6 mb-6">
          <div className="flex items-center mb-4">
            <h2 className="text-2xl font-semibold text-gray-900">
              Motorcycle
            </h2>
          </div>
          <p className="text-gray-700 mb-4">
            You may not ride a motorcyle on a public road:
          </p>
          <div className="bg-yellow-50 rounded-lg p-4">
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>With an engine capacity of over 50 cc, all the tyres should display a clearly visble tread pattern and has a tread of at least 1 millimetre in depth.</li>
              <li>With an engine capacity of less than 50 cc, which is fitted with inflated tyres which does not at any position on the tread have a visible tread over at least 80 % of the full width of the tread.</li>
              <li>Which is equipped with a retreated tyre.</li>
            </ul>
          </div>
        </div>

        {/* Light & Heavy Motor Vehicles */}
        <div className="bg-whie rounded shadow-lg p-6 mb-6">
          <div className="flex items-center mb-4">
            <h2 className="text-2xl font-semibold text-gray-900">
            Light & Heavy Motor Vehicles
            </h2>
          </div>
          <p className="text-gray-700 bg-yellow-50 p-6 rounded mb-4">
            A motor vehicle must be fitted with inflated tyres, which display a pattern around it and has a tread of at least 1 millimetre in depth.
          </p>
        </div>

        {/* Turning Radius */}
        <div className="bg-whie rounded shadow-lg p-6 mb-6">
          <div className="flex items-center mb-4">
            <h2 className="text-2xl font-semibold text-gray-900">
            Turning Radius
            </h2>
          </div>
          <p className="text-gray-700 bg-yellow-50 p-6 rounded mb-4">
            If the turning radius of a motor vehicle is more than 13.1 metres, then it is not allowed on a public road.
          </p>
        </div>

      </div>
    </div>
  );
}

export default Brakes;
