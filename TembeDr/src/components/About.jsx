import React, { useState } from 'react';
import { Car, MapPin, MessageCircleQuestion, Info, Phone, Mail, Building, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

import img1 from "../assets/images/accre1.jpg";
import img2 from "../assets/images/accre2.jpg";
import GoogleMap from './GoogleMap';

// Animated card component with hover effects
const InfoCard = ({ icon: Icon, title, description, hasButton = true }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`p-8 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg 
        transition-all duration-500 transform ${isHovered ? 'scale-105' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        <div className={`absolute -top-12 left-1/2 transform -translate-x-1/2 w-16 h-16 
          rounded-2xl rotate-45 bg-black transition-all duration-500 
          ${isHovered ? 'rotate-[225deg]' : ''}`}>
          <Icon className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
            text-white h-8 w-8 transition-all duration-500 
            ${isHovered ? '-rotate-[225deg]' : '-rotate-45'}`} />
        </div>
      </div>
      <div className="mt-8 text-center">
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <p className="text-gray-600 leading-relaxed">
          {description}
        </p>
        {hasButton && (
          <Link className="inline-block mt-6">
            <button className={`group relative overflow-hidden px-6 py-3 rounded-full 
              bg-black text-white transition-all duration-300
              ${isHovered ? 'pr-12' : ''}`}>
              Learn More
              <ChevronRight className={`absolute right-4 top-1/2 transform -translate-y-1/2 
                transition-all duration-300 opacity-0 ${isHovered ? 'opacity-100' : ''}`} />
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

// Interactive contact card with animation
const ContactCard = ({ icon: Icon, label, value, isLink = false }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`group p-4 rounded-xl transition-all duration-300 
        ${isHovered ? 'bg-black/50 text-white' : 'bg-white'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center space-x-4">
        <div className={`p-3 rounded-full transition-all duration-300
          ${isHovered ? 'bg-white' : 'bg-black'}`}>
          <Icon className={`h-6 w-6 transition-all duration-300
            ${isHovered ? 'text-black' : 'text-white'}`} />
        </div>
        <div>
          <p className="text-sm font-medium opacity-60">{label}</p>
          {isLink ? (
            <a 
              href={value.startsWith('mailto') ? value : `tel:${value}`}
              className={`md:text-lg text-[15px] font-bold hover:underline transition-all duration-300
                ${isHovered ? 'text-amber-300' : 'text-amber-500'}`}
            >
              {value.replace('mailto:', '')}
            </a>
          ) : (
            <p className="text-lg font-bold">{value}</p>
          )}
        </div>
      </div>
    </div>
  );
};

// Accreditation card with hover effect
const AccreditationCard = ({ title, image }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`relative overflow-hidden rounded-2xl transition-all duration-500
        ${isHovered ? 'shadow-2xl' : 'shadow-lg'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="p-8 bg-white">
        <h3 className="text-xl font-bold text-center mb-6">{title}</h3>
        <div className={`relative transform transition-all duration-500
          ${isHovered ? 'scale-110' : 'scale-100'}`}>
          <img 
            src={image} 
            alt={title}
            className="mx-auto object-contain"
            style={{ height: title.includes('Member') ? '80px' : '128px' }}
          />
        </div>
      </div>
      <div className={`absolute inset-0 bg-gradient-to-tr from-amber-300/20 to-transparent
        transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
    </div>
  );
};

const About = () => {
  const infoCards = [
    {
      icon: Car,
      title: "What We Do",
      description: "Transform your driving journey with our expert guidance. We're not just instructors – we're your partners in mastering the road, making every lesson count towards your success."
    },
    {
      icon: MessageCircleQuestion,
      title: "Why Choose Us",
      description: "Experience the perfect blend of professional expertise and personalized attention. Our proven track record and flexible learning approach ensure you get the best driving education tailored to your needs."
    },
    {
      icon: Info,
      title: "Our Mission",
      description: "We're committed to creating confident, responsible drivers through comprehensive training, cutting-edge methods, and unwavering support throughout your learning journey."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 select-none">
      {/* Hero Section */}
      <div className="text-center mb-24">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Driving Your Future
          <span className="block text-amber-400">One Lesson at a Time</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Join the thousands of successful drivers who started their journey with us.
        </p>
      </div>

      {/* Info Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-24 pt-12">
        {infoCards.map((card, index) => (
          <InfoCard key={index} {...card} />
        ))}
      </div>

      {/* Contact Section */}
      <div className="mb-24">
        <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ContactCard 
            icon={Phone}
            label="Call Us"
            value="+27 63 338 3254"
            isLink={true}
          />
          <ContactCard 
            icon={Mail}
            label="Email Us"
            value="mailto:Tembedrivingschool@gmail.com"
            isLink={true}
          />
          <ContactCard 
            icon={Building}
            label="Visit Us"
            value="919 East Central Windmill Park, Boksburg"
          />
        </div>
        <GoogleMap />
      </div>

      {/* Accreditation Section */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-12">Our Accreditations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <AccreditationCard 
            title="Instructors certificates issued by"
            image={img1}
          />
          <AccreditationCard 
            title="Member of Association of Driver Instructors"
            image={img2}
          />
        </div>
      </section>
    </div>
  );
};

export default About;