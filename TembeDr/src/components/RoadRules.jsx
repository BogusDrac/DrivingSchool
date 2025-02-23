
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const RoadRules = () => {

    const categories = [
        {
            name: "General Rules",
            description: "These are fundamental traffic laws and regulations that all drivers must follow to ensure road safety. They cover right-of-way, yielding, road signs, and proper conduct in various driving situations.",
            path: "/general",
        },
        {
            name: "Overtaking, Lanes and Freeways",
            description: "Rules regarding overtaking other vehicles, lane discipline, and freeway usage. This includes safe overtaking practices, keeping to the correct lane, merging onto freeways, and maintaining appropriate speeds.",
            path: "/overtaking",
        },
        {
            name: "Direction Indicators & Road Lanes",
            description: "Guidelines on using turn signals (indicators) when changing lanes, making turns, or merging into traffic. Also includes the importance of staying within road lanes and following lane markings.",
            path: "/direction",
        },
        {
            name: "Speed",
            description: "Speed limits for different types of roads and vehicles, along with penalties for exceeding them. Covers the importance of adjusting speed based on road conditions, traffic, and weather.",
            path: "/speed",
        },
        {
            name: "Parking & Stopping Areas",
            description: "Rules about where and how vehicles can be parked or stopped, including no-parking zones, emergency stopping regulations, and designated parking areas.",
            path: "/parking",
        },
        {
            name: "Safety & Precautions",
            description: "General safety measures for drivers, passengers, and pedestrians. Includes seatbelt usage, child restraints, avoiding distractions while driving, and the importance of maintaining a safe following distance.",
            path: "/safety",
        },
        {
            name: "Reflectors",
            description: "The role of reflectors in improving vehicle visibility, especially in low-light or foggy conditions. Covers requirements for placement and maintenance of reflectors on cars, trucks, and trailers.",
            path: "/reflectors",
        },
        {
            name: "View & Visibility",
            description: "Guidelines on maintaining a clear view while driving, ensuring clean and functional windshields, mirrors, and windows. Covers blind spots and the proper use of mirrors.",
            path: "/view",
        },
        {
            name: "Lights & Number Plates",
            description: "Rules regarding vehicle lighting, including headlights, brake lights, and indicators, as well as the legal requirements for number plate visibility and illumination.",
            path: "/lights",
        },
        {
            name: "Steering",
            description: "Proper steering techniques for safe and controlled driving. Includes maintaining a firm grip on the wheel, avoiding oversteering or understeering, and responding to different road conditions.",
            path: "/steering",
        },
        {
            name: "Brakes & Tyres",
            description: "Requirements for keeping brakes and tyres in good condition. Covers brake system maintenance, tread depth, tyre pressure, and how to handle emergency braking situations.",
            path: "/brakes",
        },
        {
            name: "Fuel Tank, Engine & Exhaust System",
            description: "Regulations related to fuel safety, emissions, and vehicle engine maintenance. Includes rules on preventing fuel leaks, reducing pollution, and ensuring exhaust systems function properly.",
            path: "/fuel",
        },
        {
            name: "Vehicle Length, Height & Width",
            description: "Legal limits on vehicle dimensions, especially for trucks and oversized vehicles. Covers how excessive size affects road safety and the need for special permits.",
            path: "/vehicle",
        },
        {
            name: "Transporting Goods",
            description: "Rules for carrying cargo safely, including weight limits, securing loads, and preventing items from falling onto the road.",
            path: "/transporting",
        },
        {
            name: "Towing, Vehicle Combinations",
            description: "Regulations for towing trailers, caravans, and other vehicles. Covers weight limits, safety chains, braking requirements, and maximum towing speeds.",
            path: "/towing",
        },
        {
            name: "Destruction Devices",
            description: "Laws prohibiting the use of devices that can damage roads, vehicles, or traffic infrastructure. Includes regulations against illegal vehicle modifications.",
            path: "/destruction",
        },
        {
            name: "Recklessness & Negligence On The Road",
            description: "Penalties for reckless driving, including speeding, ignoring road signs, driving under the influence, and causing accidents due to carelessness.",
            path: "/recklessness",
        },
        {
            name: "Noise On The Road",
            description: "Regulations on vehicle noise levels, including restrictions on honking, loud exhaust systems, and unnecessary engine revving, to reduce noise pollution.",
            path: "/noise",
        },
    ]

  return (
    <div className="w-full max-w-4xl mx-auto p-8 bg-white shadow-xl rounded-2xl border border-yellow-200 select-none">
        <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-black mb-8">
                Rules of the Road
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

export default RoadRules;
