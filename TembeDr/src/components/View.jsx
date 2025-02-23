import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";


const View = () => {
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
          View & Visibility
        </h1>

        {/* Driving View to be Unobstructed(Rear-View Mirrors) */}
        <div className="bg-whie rounded shadow-lg p-6 mb-6">
          <div className="flex items-center mb-4">
            <h2 className="text-2xl font-semibold text-gray-900">
            Driving View to be Unobstructed(Rear-View Mirrors)
            </h2>
          </div>
          <p className="text-gray-700 mb-4">
            You may not drive a motor vehicle on a public road:
          </p>
          <div className="bg-yellow-50 rounded-lg p-4">
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>If when the vehicle is in motion the driver/riders does not have full and clear view of the road way ahead and to his/her left and right.</li>
              <li>That is not fitted with a rear-view mirror or mirrors allowing the driver.rider to see in clear weather, a clear reflection of traffic to the rear: Given taht this does not apply to a tractor.</li>
              <li>Such as a motor car, minibus, bus or goods vehicle, except if it is fitted with an exterior rear-view mirror on the driving side and an interior rear-view mirror: Except in a cae where the rear-view mirror does not allow the driver to see in clear weather or have clear view of the traffic, then an additional exterior rear-view mirror may be added on the other side of the driver's seat it is compulsory to fit interior rear-view mirror</li>
            </ul>
          </div>
        </div>

        {/* Windscreen */}
        <div className="bg-whie rounded shadow-lg p-6 mb-6">
          <div className="flex items-center mb-4">
            <h2 className="text-2xl font-semibold text-gray-900">
              Windscreen
            </h2>
          </div>
          <p className="text-gray-700 mb-4">
            A light motor vehicle's transparent windscreen, must:
          </p>
          <div className="bg-yellow-50 rounded-lg p-4">
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Give the driver enough visibility for safe driving.</li>
              <li>Be of safety glass.</li>
              <li>Have visible light transmittance through the windscreen of at least 70 %</li>
            </ul>
          </div>
        </div>

        {/* Windscreen Wipers */}
        <div className="bg-whie rounded shadow-lg p-6 mb-6">
          <div className="flex items-center mb-4">
            <h2 className="text-2xl font-semibold text-gray-900">
              Windscreen Wipers
            </h2>
          </div>
          <div className="bg-yellow-50 rounded-lg p-4">
            <p className="text-gray-700 mb-4">
              The windscreen of a light and heavy motor vehicle must have at least one windscreen wiper, which must wipe the outside of the windscreen directly in front of the driver continuously, evenly and adequately.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default View;
