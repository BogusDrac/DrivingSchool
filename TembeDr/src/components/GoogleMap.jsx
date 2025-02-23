import React from 'react';

const GoogleMap = () => {
  // Coordinates for 919 East Central Windmill Park, Boksburg
  const latitude = -26.2634583;
  const longitude = 28.2447693;
  
  return (
    <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-lg">
      <iframe
        title="Our Location"
        className=" w-full h-full border-0"
        src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1789.0217944830624!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e95235589d1121d%3A0x0!2s919+East+Central+Windmill+Park%2C+Boksburg!5e0!3m2!1sen!2sza!4v1650000000000!5m2!1sen!2sza`}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
};

export default GoogleMap;