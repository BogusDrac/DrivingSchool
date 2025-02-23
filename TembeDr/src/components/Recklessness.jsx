import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
const Recklessness = () => {
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
          Recklessness And Negligence on the Road
        </h1>

        {/* inconsiderate driving */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
            <div className="flex items-center mb-4">
                <h2 className="text-2xl font-semibold text-gray-900">Inconsiderate Driving</h2>
            </div>
            <div className="bg-yellow-50 rounded-lg p-4">
                <p className="text-gray-700 mb-4">
                    When driving a vehicle on apublic road always have reasonable consideration for other road users.
                </p>
            </div>
        </div>

        {/* Reckless driving */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
            <div className="flex items-center mb-4">
                <h2 className="text-2xl font-semibold text-gray-900">Reckless or Negligent Driving</h2>
            </div>
            <div className="bg-yellow-50 rounded-lg p-4">
                <p className="font-bold mb-4">
                    No one should drive a vehicle on a public road:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Recklessly or negligently, and</li>
                    <li>In such a way taht wilfully disregard the safety of persons or property</li>
                </ul>
            </div>
        </div>

        {/* Driving under influence */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
            <div className="flex items-center mb-4">
                <h2 className="text-2xl font-semibold text-gray-900">Driving While Under The Influence of Intoxicating Liquor or Drugs</h2>
            </div>
            <div className="bg-yellow-50 rounded-lg p-4">
                <p className="font-bold mb-4">
                    No person is allowed to drive a vehicle on apublic road if the concentration of alcohol in a person's body is:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>0.05 grams per 100ml of blood or more</li>
                    <li>0.02 grams per 100ml of blood or more in a case of a professional driver</li>
                </ul>
            </div>
            <div className="bg-yellow-50 rounded-lg p-4">
                <p className="font-bold mb-4">
                    When under the influence of alcohol or drugs and having a narcotic effect, you should not:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Drive vehicle on public road</li>
                    <li>Occupy the drivers/riders seat of a motor vehicle of which the engine is running</li>
                </ul>
            </div>
        </div>


        {/* Abandoned/ vehicle left */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
            <div className="flex items-center mb-4">
                <h2 className="text-2xl font-semibold text-gray-900">Vehicle Abandoned</h2>
            </div>
            <div className="bg-yellow-50 rounded-lg p-4">
                <p className="font-bold mb-4">
                    Any vehicle left foe a continuous period of more than:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>24 hours in the same place on a public road outside an urban area</li>
                    <li>7 Days in the same place on a public road within an urban area</li>
                </ul>
            </div>
        </div>


        {/* Damage to public roads */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
            <div className="flex items-center mb-4">
                <h2 className="text-2xl font-semibold text-gray-900">Damage To Public Roads</h2>
            </div>
            <div className="bg-yellow-50 rounded-lg p-4">
                <p className="font-bold mb-4">
                    You may not:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Drag or spin any wheel of a vehicle upon the surface of the road, except in an emergency</li>
                
                    <li>
                        Use chocks or shoes between any wheel of a vehicle moving along the roadway and surface of that road
                    </li>

                    <li>Use/move a vehicle or any other thing on the road in such a manner that would cause damage to the road</li>
                </ul>
            </div>
        </div>

      </div>
    </div>
  );
}

export default Recklessness;
