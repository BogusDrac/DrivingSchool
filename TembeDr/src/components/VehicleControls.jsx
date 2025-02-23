import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const VehicleControls = () => {

    const categories = [
        {
            name: "Motorcycle",
            description: "Learn how to operate a motorcycle",
            path: "/motorcycle",
        },
        {
            name: "Light Motor Vehicle",
            description: "Learn how to operate a light motor vehicle",
            path: "/lightmotor",
        },
        {
            name: "Heavy Motor Vehicle",
            description: "Learn how to operate a heavy motor vehicle",
            path: "/heavymotor",
        },
    ]

  return (
    <div className="w-full max-w-4xl mx-auto p-8 bg-white shadow-xl rounded-2xl border border-yellow-200 select-none">
        <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-black mb-8">
                Vehicle Controls
            </h2>
            <Link to="/learn" className="text-yellow-500 hover:text-yellow-600 transition-colors duration-300">
                <button className="flex items-center space-x-2 px-4 py-2 bg-yellow-50 text-yellow-500 font-semibold rounded-lg border border-yellow-200 hover:bg-yellow-100 transition-colors duration-300">
                    Back to Courses
                </button>
            </Link>
        </div>
      
      <div className="grid gap-6">
        {categories.map((category, index) => (
          <Link
            key={index}
            className="group block p-6 bg-yellow-50 rounded-xl border border-yellow-200 hover:bg-white hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            to={category.path}
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-semibold text-black mb-2">{category.name}</h3>
                <p className="text-gray-600">{category.description}</p>
              </div>
              <ChevronRight className="h-6 w-6 text-yellow-500 group-hover:text-black transition-colors duration-300" />
            </div>
          </Link>
        ))}
      </div>
      
    </div>
  );
}

export default VehicleControls;
