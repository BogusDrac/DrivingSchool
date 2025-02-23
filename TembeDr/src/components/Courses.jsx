import React from 'react';
import { Link } from "react-router-dom";
import { ChevronRight } from 'lucide-react';

const Courses = () => {
  const courseLinks = [
    { 
      name: "Vehicle Controls", 
      path: "/vehicle-controls",
      description: "Master the basics of vehicle operation and control"
    },
    { 
      name: "Rules of the Road", 
      path: "/rules-of-the-road",
      description: "Learn essential traffic laws and regulations"
    },
    { 
      name: "Road Signs", 
      path: "/road-signs",
      description: "Understand traffic signs and road markings"
    },
    { 
      name: "Tests", 
      path: "/tests",
      description: "Practice tests and assessments"
    },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto p-8 bg-white shadow-xl rounded-2xl border border-yellow-200">
      <h2 className="text-3xl font-bold text-black mb-8">Course Modules</h2>
      <div className="grid gap-6">
        {courseLinks.map((course, index) => (
          <Link
            key={index}
            className="group block p-6 bg-yellow-50 rounded-xl border border-yellow-200 hover:bg-white hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            to={course.path}
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-semibold text-black mb-2">{course.name}</h3>
                <p className="text-gray-600">{course.description}</p>
              </div>
              <ChevronRight className="h-6 w-6 text-yellow-500 group-hover:text-black transition-colors duration-300" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Courses;