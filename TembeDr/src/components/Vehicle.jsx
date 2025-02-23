import { useNavigate } from 'react-router-dom';
import { ChevronLeft} from 'lucide-react';

const Vehicle = () => {
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
          Vehicle length, Height and Width
        </h1>

        {/* Overall Length of a Vehicle */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <div className="flex items-center mb-4">
            <h2 className="text-2xl font-semibold text-gray-900">Overall Length of a Vehicle</h2>
          </div>
          <p className="text-gray-700 mb-4">
            Legislation provides for restrictions on the overall length of certain types of vehicles.
          </p>
          <p className="text-gray-700 mb-4">
            Which are as follow:
          </p>
          <div className="bg-yellow-50 rounded-lg p-4">
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>If the GMV of a trailer (not semi-trailer) is less than 12 00 kg, then the height should not go beyond 8 metres</li>
              <li>If the GMV of a trailer (not semi-trailer) is more than 12 000 kg, then the height should not go beyond 12.5 metres.</li>
              <li>An articulated motor vehicle, should not go beyond 18.5 metres.</li>
              <li>A bus-train, should not go beyond 22 metres.</li>
            </ul>
          </div>
          <p className="text-gray-700 mt-4">
            Any other vehicle, should not go beyond 12.5 metres.
          </p>
          <p className="text-gray-700 mt-4">
            Any combination of motor vehicle, 1 should not go beyond 22 metres.
          </p>
        </div>

        {/* Overall Height of a Vehicle */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center mb-4">
            <h2 className="text-2xl font-semibold text-gray-900">Overall Height of a Vehicle</h2>
          </div>
          <p className="text-gray-700 mb-4">
            The following motor vehicle may noy not be driven on a public road together with any load, if the overall height of the vehicle exceeds:
          </p>
          <div className="bg-yellow-50 rounded-lg p-4">
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>4.65 metres for a double-deck bus.</li>
              <li>4.3 metres for any other motor vehicle.</li>
            </ul>
          </div>
        </div>

        {/* Overall Height of a Vehicle */}
        <div className="bg-white rounded-lg p-4">
            <div className="flex items-center mb-4">
                <h2 className="text-2xl font-semibold text-gray-900">Overall Height of a Vehicle</h2>
            </div>
            <p className="text-gray-700 mb-4">
                The following vehicles are not allowed on a public:
            </p>
            <div className="bg-yellow-50 rounded-lg p-4">
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>A bus with the distance between the centre-lines of the tyres of the two front wheels exceeds 1.9 metres, if the overall width of such bus exceeds 2.6 metres.</li>
                    <li>A goods vehicle with a GMV of 12 000 kg or more, if the overall width is more than 2.6 metres</li>
                    <li>Any other vehicle, if the overall width is more than 2.5 metres.</li>
                </ul>
            </div>
            
        </div>
      </div>
    </div>
  );
};

export default Vehicle;