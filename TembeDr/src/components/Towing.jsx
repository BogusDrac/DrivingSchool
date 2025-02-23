import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";


const Towing = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-50 min-h-screen p-6 select-none">
      <div className="container mx-auto max-w-4xl">

        {/* Button */}
        <button 
          onClick={() => navigate(-1)}
          className="mb-6 flex items-center text-yellow-600 hover:text-yellow-700 transition-colors"
        >
          <ChevronLeft className="w-5 h-5 mr-1" />
          <span>Back</span>
        </button>

        <h1 className="text-3xl font-bold text-center text-yellow-600 mb-8">
          Towing, Vehicle Combinations
        </h1>


        {/* Towing */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
            <div className="flex items-center mb-4">
                <h2 className="text-2xl font-semibold text-gray-900">Towing</h2>
            </div>
            <div className="bg-yellow-50 rounded-lg p-4">
                <p className="font-bold mb-4">
                    You may not use a motorcycle to tow another vehicle. 
                </p>
                <p className="font-bold mb-4">
                    You are not allowed to tow another vehicle on a public road:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>If the length of the tow-rope, chain or tow-bar between the two vehicle exceeds 3.5 metres</li>
                    <li>With a tow-rope or chain at a speed of 30km/h, unless the towing vehicle is connected to the towed vehicle by means of a draw bar or a tow-bar</li>
                    <li>If the towed vehicle is conveying persons at a speed of more than 30km/h, unless the towed vehicle is a semi-trailer.Therefore a towed vehicle travelling at 30km/h or less may convey passengers.</li>
                    <li>Unless the steering gear of the towed vehicle, is controlled by a person holding a code of driving license authorizing him or her to drive the class of such vehicle.</li>
                    <li>If the brakes of the towed vehicle do not comply with the requirements of the Road Traffic Act, 1996 (Act No. 93 of 1996), unless the towing vehicle is connected to the towed vehicle by means of a draw bar or a tow-bar.</li>
                </ul>
            </div>
        </div>

        {/* Restriction on combination */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <div className="flex items-center mb-4">
            <h2 className="text-2xl font-semibold text-gray-900">Restriction On Combination Of Motor Vehicles</h2>
          </div>
          <div className="bg-yellow-50 rounded-lg p-4">
            <p className="font-bold mb-4">
                A combination of vehicle is limited to a drawing vehicle and a trailer or trailers.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>A maximum of two trailers</li>
              <li>One other motor vehicle which is not a trailer</li>
            </ul>
            <p className="font-bold mt-4">
              It is allowed to draw or tow one other motor vehicle that is not a trailer, and a trailer, in case of emergency. 
            </p>
          </div>
        </div>


        {/* Manner In which Side Car to be attached */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <div className="flex items-center mb-4">
            <h2 className="text-2xl font-semibold text-gray-900">Manner in which side car to be attached to motorcycle.</h2>
          </div>
          <div className="bg-yellow-50 rounded-lg p-4">
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>On a public road you may only use a motorcycle with a sidecar attached to the left of the motorcycle.</li>
              <li>A motorcycle with an enigine capacity of 50cc or less may not be attched with a sidecar to it.</li>
            </ul>
          </div>
        </div>


      </div>
    </div>


  );
}

export default Towing;
