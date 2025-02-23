import { ArrowLeft } from 'lucide-react';
import img from "../assets/images/vehiclecontrols/heavymotor.jpg"
import { Link } from 'react-router-dom';

const HeavyMotor = () => {
  
  const controls = [
    { id: 1, title: "Interior rear-view mirror", description: "Used to see behind the vehicle" },
    { id: 2, title: "Wipers", description: "Used to clear the front glass for water" },
    { id: 3, title: "Exterior side-view mirror", description: "Used to see behind the vehicle and its sides" },
    { id: 4, title: "Steering wheel", description: "Steers the vehicle left right or straight" },
    { id: 5, title: "Indicator lever", description: "Used to signal left or right" },
    { id: 6, title: "Gear lever", description: "Used to select gear (in combination with gear lever)" },
    { id: 7, title: "Parking brake", description: "Used to secure the car when stationary" },
    { id: 8, title: "Clutch pedal", description: "Used to select gear (in combination with gear lever)" },
    { id: 9, title: "Foot brake", description: "Used to bring the vehicle to a complete standstill" },
    { id: 10, title: "Accelerator pedal", description: "Used to accelerate the car / go faster" },
    { id: 11, title: "Hooter", description: "Used to warn other road users through sound" }
  ];

  return (
    <div className="min-h-screen bg-white p-6 select-none">
        <Link to="/vehicle-controls" className="text-yellow-500 hover:text-yellow-600 transition-colors duration-300">
            <button 
                className="flex items-center gap-2 mb-6 px-4 py-2 rounded-lg hover:scale-110 text-amber-400 transition-colors"
            >
                <ArrowLeft size={20} />
                Back
            </button>
        </Link>
      

      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-black">Heavy Motor Vehicle Controls</h1>
        
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Image placeholder */}
          <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg">
            <img 
              src={img}
              alt="Heavy Motor Vehicle Controls Diagram"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Controls list */}
          <div className="bg-gray-50 rounded-lg p-6 shadow-lg">
            <ol className="space-y-4">
              {controls.map((control) => (
                <li 
                  key={control.id}
                  className="flex gap-4 p-4 rounded-lg hover:bg-white transition-colors border border-transparent hover:border-yellow-400"
                >
                  <span className="flex items-center justify-center w-8 h-8 bg-yellow-400 text-black rounded-full font-bold shrink-0">
                    {control.id}
                  </span>
                  <div>
                    <h3 className="font-semibold text-black">{control.title}</h3>
                    <p className="text-gray-600">{control.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeavyMotor;