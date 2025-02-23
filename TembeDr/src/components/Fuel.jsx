import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

const Fuel = () => {
    const navigate = useNavigate();

  return (
    <div className=" bg-gray-50 min-h-screen p-6 select-none">
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
          Fuel Tank & Engine
        </h1>

        {/* Exhaust Silencer/ Exhaust Pipes */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
            <div className="flex items-center mb-4">
                <h2 className="text-2xl font-semibold text-gray-900">
                Exhaust Silencer/ Exhaust Pipes
                </h2>
            </div>
            <p className="text-gray-700 mb-4">
                A motor vehicle must be equipped with an efficient exhaust silencer, which must:
            </p>
            <div className="bg-yellow-50 rounded-lg p-4">
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Allow the exhaust gas from the engine to be protected through the silencer.</li>
                    <li>Not give out exhaust gas or smoke from the engine that is dense in a way that might cause nuisance to or hinder the vision of other road users.</li>
                    <li>Be in a condition that oil, other flammable liquid or material cannot drip onto it.</li>
                    <li>Be maintained in a way that the exhaust gas or smoke does not leak into the driving cab or passenger compartment.</li>
                </ul>
          </div>
          <p className="text-gray-700 mb-4">
                A motor vehicle is not allowed on apublic road:
          </p>
          <div className="bg-yellow-50 rounded-lg p-4">
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>If it does not have an efficient exhaust silencer.</li>
                    <li>Unless the gas from the engine is protected by a silencer.</li>
                    <li>If the exhaust gas is dense and causes a nuisance to or hinder the vision of other road users.</li>
                    <li>Unless it is in a condition that oil, other flamable liquid or material cannot drip onto it.</li>
                    <li>Unless it is maintained in a way that exhaust gas or smoke does not leak into the driving cab or passenger compartment.</li>
                </ul>
          </div>
        </div>

        {/* Fuel tank, Electrical Wiring and Battery */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
            <div className="flex items-center mb-4">
                <h2 className="text-2xl font-semibold text-gray-900">
                Fuel tank, Electrical Wiring and Battery
                </h2>
            </div>
            <p className="text-gray-700 mb-4">
                You may not drive your vehicle on a public road:
            </p>
            <div className="bg-yellow-50 rounded-lg p-4">
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>If the fuel tank, carburetor, fuel receptacle or fuel pipes are faulty and or exposed that it might cause a source of danger.</li>
                    <li>If the fuel tank is not fitted with an effective cap.</li>
                    <li>Unless the electrical wiring and battery are properly installed, insulated and maintained so that such wiring and battery do not cause a sourse of danger.</li>
                </ul>
          </div>
        </div>

        {/* Engine */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
            <div className="flex items-center mb-4">
                <h2 className="text-2xl font-semibold text-gray-900">
                Engine
                </h2>
            </div>
            <p className="text-gray-700 mb-4 bg-yellow-50 rounded-lg p-4">
                If the engine of the light or heavy motor vehicle is not covered and may be a saource of danger, then such vehicle may not be driven on a public road.
            </p>
        </div>

        {/* Emergency Warning Signs */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
            <div className="flex items-center mb-4">
                <h2 className="text-2xl font-semibold text-gray-900">
                Emergency Warning Signs
                </h2>
            </div>
            <p className="text-gray-700 mb-4">
                All goods vehicles, minibuses and busses (heavy vehicles with a GMV of more than 3 500 kg) must carry at least one emergency warning sign, if not then the heavy vehicle is not allowed on a public road.
            </p>
            <p className="text-gray-700 mb-4">
                The emergency warning sign for a combination of motor vehicle (vehicle with one or more trailers) must be carried on the drawing vehicle.
            </p>
            <p className="text-gray-700 mb-4">
                The driver of a stationary vehicle on a public road shall display at least one emergency warning sign in such a manner:
            </p>
            <div className="bg-yellow-50 rounded-lg p-4">
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>The sign shall be at least 45 metres from the stationary vehicle along the roadway of the public road concerned in the direction from which traffic will approach such vehicle when travelling on the side of the road closest to the vehicle.</li>
                    <li>Sign should be places approximately as far from the edge of the road as the transverse center of the vehicle is from the edge of the road.</li>
                    <li>The reflective sign should face approaching traffic.</li>
                </ul>
            </div>
            <p className="text-gray-700 mb-4">
                This does not apply where a vehicle is stationary:
            </p>
            <div className="bg-yellow-50 rounded-lg p-4">
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>in an area where there's a traffic sign that allows the loading and offloading of a vehicle.</li>
                    <li>When obeying any direction given by traffic officer or traffic sign.</li>
                    <li>On account of other traffic on the public road concerned and while the driver occupies the driving seat of such motor vehicle.</li>
                    <li>During events when there's a state of municipal function carried out</li>
                </ul>
            </div>
        </div>


      </div>
    </div>
  );
}

export default Fuel;
