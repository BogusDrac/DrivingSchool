import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";


const Destruction = () => {
    const navigate = useNavigate();
  return (
    <>

      {/* Button */}
      <button 
          onClick={() => navigate(-1)}
          className="mb-6 flex items-center text-yellow-600 hover:text-yellow-700 transition-colors"
        >
          <ChevronLeft className="w-5 h-5 mr-1" />
          <span>Back</span>
        </button>

        <h1 className="text-3xl font-bold text-center text-yellow-600 mb-8">
          Destructive Device
        </h1>
      {/* destructive devices */}
      <div className="bg-white rounded-lg p-4">
            <div className="flex items-center mb-4">
                <h2 className="text-2xl font-semibold text-gray-900">Cell Phones</h2>
            </div>
            <div className="bg-yellow-50 rounded-lg p-4">
                <p className="text-gray-700 mb-4">
                    You are not allowed to handle a cellular/mobile telephone or any other communiction device in one or both hands or any other part of the body while driving.
                </p>
            </div>
        </div>
    </>
  );
}

export default Destruction;
