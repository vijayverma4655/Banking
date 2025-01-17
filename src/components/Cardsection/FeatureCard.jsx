import React from 'react';

function FeatureCard({ icon, title, description, }) {
  return (
    <div className={` w-fit pt-6 flex flex-col items-start text-start p-4 rounded-2xl hover:bg-green-400 hover:cursor-pointer hover:text-white shadow-xl transform duration-500 `}  data-aos="fade-up"
    data-aos-duration="1400"
    data-aos-delay="400">
      <div className="text-4xl mt-4">{icon}</div>
      <h3 className="font-semibold text-lg mt-16 ml-2 mx-1">{title}</h3>
      <p className="text-gray-600 text-sm mt-4">{description}</p>
    </div>
  );
}

export default FeatureCard;
