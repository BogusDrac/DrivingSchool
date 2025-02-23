import { useNavigate } from 'react-router-dom';
import { ChevronLeft} from 'lucide-react';

const Transporting = () => {
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
          Transporting Goods
        </h1>

        {/* Conveyance of Goods */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <div className="flex items-center mb-4">
            <h2 className="text-2xl font-semibold text-gray-900">Conveyance Of Goods</h2>
          </div>
          <p className="text-gray-700 mb-4">
            Goods may not be loaded onto a vehicle in such a way that it may:
          </p>
          <div className="bg-yellow-50 rounded-lg p-4">
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Come into contact with the roads surface</li>
              <li>Obscure the drivers/riders view of the traffic to the front or oneither side, or his or her view in the rear-view mirror or mirrors of traffic to the rear.</li>
            </ul>
          </div>
          <p className="text-gray-700 mt-4">
            Which are not:
          </p>
          <div className="bg-yellow-50 rounded-lg p-4">
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Safety covered within the body of such vehicle.</li>
              <li>Secularly fastened to the vehicle</li>
            </ul>
          </div>
          <p className="text-gray-700 mt-4">
            And which are not properly protected from being freed or spilled from the vehicle 
          </p>
          <div className="bg-yellow-50 rounded-lg p-4">
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>On the roof, in the case where such vehicle is a motorcar, if the height of the goods measured from the hihest point of such roof exceeds one-half of the height of the motor car, measured from ground level: Provided that the provisions of the above do not apply in respect of pedal cycles being transported on the roof of a motor vehicle</li>
            </ul>
          </div>
          <p className="text-gray-700 mt-4">
            If a container is designed to be fasted by "twist lock",then that container should be fastened securely by at least four "twist locks" to the vehicle.
          </p>
          <p className="text-gray-700 mt-4">
            The best possible way for transporting baggage on a motorcycle is to place the baggage into a suitable carriers attached securely to the motorcycle
          </p>
        </div>

        {/* Circumstances under which persons may be carried on goods vehicle */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center mb-4">
            <h2 className="text-2xl font-semibold text-gray-900">Circumstances under which persons may be carried on goods vehicle</h2>
          </div>
          <p className="text-gray-700 mb-4">
            Motor vehicle drivers/rider must give right of way to all emergency vehicles sounding a siren and showing emergency warning lights.
          </p>
          <div className="bg-yellow-50 rounded-lg p-4">
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>At least 350 millimetres above the surface when the person is seated</li>
              <li>At least 900 millimetres above the surface when the person is standing</li>
            </ul>
          </div>
          <p className="text-gray-700 mb-4">
            It is against the law for passengers to ride in a caravan.
          </p>
        </div>

        {/* Projections/overhang */}
        <div className="bg-white rounded-lg p-4">
            <div className="flex items-center mb-4">
                <h2 className="text-2xl font-semibold text-gray-900">Projections/Overhang</h2>
            </div>
            <p className="text-gray-700 mb-4">
                A motorcycle is not allowed on apublic road if the goods carried on it or on a sidecar projects more:
            </p>
            <div className="bg-yellow-50 rounded-lg p-4">
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Than 600 millimetres to the front wheel</li>
                    <li>Than 900 millimetres to the rear wheel</li>
                    <li>Than 450 millimetres to either side of the wheels</li>
                    <li>Than 300 millimetres to the oustside of the wheel of the sidecar</li>
                </ul>
            </div>
            <p className="text-gray-700 mb-4">
                Any side of the longitudinal centre-line of the vehicle by more than:
            </p>
            <div className="bg-yellow-50 rounded-lg p-4">
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>For a bus or goods vehicles with GMV of more than 12 000 kg - its 1.3 metres or (Therefore maximum width of goods is 2.6 metres)</li>
                    <li>For any other vehicle, its 1.25 metres (Therefore maximum width of goods is 2.5 metres)</li>
                </ul>
            </div>
            <p className="text-gray-700 mb-4">
                Given that the side mirrors and indicators on the vehicle should not be taken into account.
            </p>
            <p className="text-gray-700 mb-4">
                A light and heavy motor vehicle is not llowed on a public road if carring any goods that project:
            </p>
            <div className="bg-yellow-50 rounded-lg p-4">
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>More that 300 milimetres past the front end of the vehicle</li>
                    <li>More than 1.8 metres past the rear end of the vehicle</li>
                </ul>
            </div>
            <p className="text-gray-700 mb-4">
                A light and heavy motor vehicle is not allowed on a public road:
            </p>
            <div className="bg-yellow-50 rounded-lg p-4">
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>If any bracket projects more than 150 millimetres beyond the widest part of the vehicle (side rear view mirrors or direction indicators are not included)</li>
                </ul>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Transporting;