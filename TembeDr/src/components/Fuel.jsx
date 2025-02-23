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
      </div>
    </div>
  );
}

export default Fuel;
