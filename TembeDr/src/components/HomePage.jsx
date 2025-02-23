import { useState } from 'react';
import {  ChevronRight, CheckCircle, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [selectedCourse, setSelectedCourse] = useState('beginner');

  // Same data structure as before
  const courses = {
    beginner: {
      title: "Beginner's Driver Education",
      features: [
        "30 hours classroom instruction",
        "14 hours behind-the-wheel training",
        "Mock road test preparation",
        "Online learning materials access",
        "Flexible scheduling options",
      ],
      curriculum: [
        "Basic vehicle control and operation",
        "Traffic laws and road signs",
        "Defensive driving techniques",
        "Parking and maneuverability",
        "Highway driving practice",
        "Advanced scanning techniques",
        "Space management strategies",
        "Crash avoidance maneuvers",
        "Weather condition handling",
        "Road rage prevention",
        "Risk assessment training",
        "Vehicle inspection procedures",
        "Cargo handling safety",
      ],
    }
  };

  const serviceAreas = [
    "Vosloorus 14, 25, 28",
    "Mailula, Mabuya Esdudleni",
    "Eastfield Marimba 16",
    "Windmill Park",
    "Wadeville",
    "Katlehong ext 28, 14, 16, 10",
    "Dawn City",
    "Villa Liza",
    "Boksburg",
    "All corners of Vosloorus"
  ];

  const instructors = [
    {
      name: "",
      experience: "15+ years",
      specialties: ["Defensive Driving", "New Drivers", "CDL Training"],
      certifications: ["State Certified", "CDL Instructor", "Advanced Safety"],
      image: "/api/placeholder/150/150"
    },
    {
      name: "",
      experience: "12+ years",
      specialties: ["Nervous Drivers", "Senior Refresher", "International Students"],
      certifications: ["State Certified", "Defensive Driving", "ESL Specialist"],
      image: "/api/placeholder/150/150"
    },
    {
      name: "",
      experience: "10+ years",
      specialties: ["Teen Drivers", "Highway Safety", "Performance Driving"],
      certifications: ["State Certified", "Advanced Safety", "Youth Education"],
      image: "/api/placeholder/150/150"
    }
  ];

  return (
    <div className="min-h-screen bg-white select-none">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black"></div>
        <div className="absolute inset-0 opacity-20 bg-[url('/api/placeholder/1920/1080')]"></div>
        <div className="relative z-10 container mx-auto px-6 text-center">
          <h1 className="text-6xl md:text-7xl font-bold mb-8 text-yellow-400 tracking-tight">
            Master the Road <br />
            <span className="text-white">With Confidence</span>
          </h1>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-yellow-100">
            Professional instruction tailored to your needs with certified experts. Start your journey to becoming a skilled driver today.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/learn">
              <button className="bg-yellow-400 text-black px-8 py-4 rounded-xl font-semibold hover:bg-yellow-300 transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Start Learning
            </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            <div className="text-center transform hover:scale-105 transition duration-300">
              <div className="bg-yellow-50 rounded-2xl p-6 shadow-lg">
                <p className="text-5xl font-bold text-yellow-500 mb-2">98%</p>
                <p className="text-black font-medium">Pass Rate</p>
              </div>
            </div>
            <div className="text-center transform hover:scale-105 transition duration-300">
              <div className="bg-yellow-50 rounded-2xl p-6 shadow-lg">
                <p className="text-5xl font-bold text-yellow-500 mb-2">5000+</p>
                <p className="text-black font-medium">Graduates</p>
              </div>
            </div>
            <div className="text-center transform hover:scale-105 transition duration-300">
              <div className="bg-yellow-50 rounded-2xl p-6 shadow-lg">
                <p className="text-5xl font-bold text-yellow-500 mb-2">25+</p>
                <p className="text-black font-medium">Years Experience</p>
              </div>
            </div>
            <div className="text-center transform hover:scale-105 transition duration-300">
              <div className="bg-yellow-50 rounded-2xl p-6 shadow-lg">
                <p className="text-5xl font-bold text-yellow-500 mb-2">15+</p>
                <p className="text-black font-medium">Instructors</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Selection */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-black">Our Training Programs</h2>
          <div className="flex flex-wrap gap-4 justify-center mb-12">
          </div>
          <div className="w-full max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 border border-yellow-200">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h4 className="text-xl font-semibold mb-6 text-red-500">Course Features</h4>
                <ul className="space-y-4">
                  {courses[selectedCourse].features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3 group">
                      <CheckCircle className="h-6 w-6 text-yellow-500 group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-6 text-red-500">Curriculum Highlights</h4>
                <ul className="space-y-4">
                  {courses[selectedCourse].curriculum.map((item, index) => (
                    <li key={index} className="flex items-center gap-3 group">
                      <CheckCircle className="h-6 w-6 text-yellow-500 group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <Link to="/book">
               <button className="mt-12 w-full bg-black text-yellow-400 py-4 rounded-xl font-semibold hover:bg-gray-800 transition duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
                Enroll Now
              </button>   
            </Link>
            
          </div>
        </div>
      </section>

      {/* Instructors Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-black">Meet Our Expert Instructors</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {instructors.map((instructor, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl p-8 transform hover:-translate-y-2 transition duration-300 border border-yellow-200">
                <div className="text-center mb-6">
                  <img
                    src={instructor.image}
                    alt={instructor.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-yellow-100"
                  />
                  <h3 className="text-2xl font-bold text-black">{instructor.name}</h3>
                  <p className="text-red-500 font-medium">{instructor.experience} Experience</p>
                </div>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-black">Specialties</h4>
                    <div className="flex flex-wrap gap-2">
                      {instructor.specialties.map((specialty, idx) => (
                        <span
                          key={idx}
                          className="bg-yellow-50 text-yellow-700 text-sm px-4 py-2 rounded-full font-medium"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-black">Certifications</h4>
                    <div className="flex flex-wrap gap-2">
                      {instructor.certifications.map((cert, idx) => (
                        <span
                          key={idx}
                          className="bg-red-50 text-red-700 text-sm px-4 py-2 rounded-full font-medium"
                        >
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      


      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-black">Affordable Pricing</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-yellow-50 rounded-2xl p-8 shadow-xl border border-yellow-200">
              <h3 className="text-2xl font-bold mb-4">Code 10 License</h3>
              <p className="text-4xl font-bold text-yellow-500 mb-6">R1,500</p>
              <p className="text-gray-700 mb-4">Initial deposit to start your journey</p>
              <Link to="/book">
                <button className="w-full bg-black text-yellow-400 py-3 rounded-xl font-semibold hover:bg-gray-800 transition">
                  Get Started
                </button>
              </Link>
              
            </div>
            <div className="bg-yellow-50 rounded-2xl p-8 shadow-xl border border-yellow-200">
              <h3 className="text-2xl font-bold mb-4">Code 14 License</h3>
              <p className="text-4xl font-bold text-yellow-500 mb-6">R2,500</p>
              <p className="text-gray-700 mb-4">Initial deposit to start your journey</p>
              <Link to="/book">
                <button className="w-full bg-black text-yellow-400 py-3 rounded-xl font-semibold hover:bg-gray-800 transition">
                 Get Started
                </button>
              </Link>
              
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-black">We Serve Your Area</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-yellow-200">
              <div className="grid md:grid-cols-2 gap-6">
                {serviceAreas.map((area, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-yellow-500 flex-shrink-0" />
                    <span className="text-gray-700">{area}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-4 bg-yellow-50 rounded-xl">
                <p className="text-center text-gray-700">
                  📲 Call us and we'll send a driver to pick you up! Available for pick-up and drop-off in all service areas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>







      {/* Call to Action */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8 text-yellow-400">Ready to Begin Your Driving Journey?</h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto text-white">
            Join thousands of successful graduates who started their journey with us.
            Book your first lesson today and take the first step towards becoming a confident driver.
          </p>
          <Link to="/book">
            <button className="bg-yellow-400 text-black px-8 py-4 rounded-xl font-semibold hover:bg-yellow-300 transition duration-300 inline-flex items-center transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
            Book Now <ChevronRight className="ml-2 h-5 w-5" />
          </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;