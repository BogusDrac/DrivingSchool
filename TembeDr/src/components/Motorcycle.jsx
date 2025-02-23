import { ArrowLeft } from 'lucide-react';
import img from "../assets/images/vehiclecontrols/motorcycle.jpg"
import { Link } from 'react-router-dom';

const Motorcycle = () => {
  
  const controls = [
    { id: 1, title: "Gear Lever", description: "Select gear combination with clutch lever" },
    { id: 2, title: "Clutch lever", description: "Select gear in combination with gear lever" },
    { id: 3, title: "Exterior side-view mirror", description: "Used to see behind the vehicle and its sides" },
    { id: 4, title: "Steering wheel", description: "Steers the vehicle left right or straight" },
    { id: 5, title: " lever", description: "Used to signal left or right" },
    { id: 6, title: "Indicator Switch", description: "Indicates movement to left or right" },
    { id: 7, title: "Rear Wheel foot Brake", description: "Brake using the rear wheel.This is less powerfull brake and should be used in combination with the front wheel brake to slow down the motorcycle" },
    { id: 8, title: "Handle Bars", description: "Steer the motor cycle to the left or the right" },
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
        <h1 className="text-3xl font-bold mb-8 text-black">MotorCycle Controls</h1>
        
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

export default Motorcycle;