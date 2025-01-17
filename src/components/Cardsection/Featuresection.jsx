import React from "react";
import FeatureCard from "./FeatureCard";
import { FiShield, FiGift, FiDollarSign, FiTruck } from "react-icons/fi";
import "../Css/Featurecard.css"

function FeatureSection() {
  return (
    <section
      className=" py-12 md:px-8 lg:px-16 bg-white/50 text-gray-800 card1" 
     
      // style={{
      //   backgroundImage: "url('/assets/Card1/card.jpg')",
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      // }}
    >
      <h2 className="text-2xl font-bold text-center mt-4 mb-4 "
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay="1000"
      >
        Safe & Convenient Transaction
      </h2>
      <p className="text-center text-gray-600 mb-8 mt-4 card1" 
       data-aos="fade-up"
       data-aos-duration="1200"
       data-aos-delay="800">
        Want to pay anything so easy with the touch of a finger. Through UNINE,
        you can make practically any transaction.
      </p>
      <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4 mt-8 card1"  
      
      >
        <FeatureCard
        
          icon={<FiShield />}
          title="Always Protected"
          description="Shopping with UNINE is even more secure thanks to Buyer Protection."
          bgColor="bg-white"
      
        />
        <FeatureCard
          icon={<FiGift />}
          title="Get Reward"
          description="Shopping with UNINE is even more secure thanks to Buyer Protection."
          bgColor="bg-green-100"
          
        />
        <FeatureCard
          icon={<FiDollarSign />}
          title="No Hidden Fees"
          description="Shopping with UNINE is even more secure thanks to Buyer Protection."
          bgColor="bg-white"
         
        />
        <FeatureCard
          icon={<FiTruck />}
          title="Free Shipping"
          description="Shopping with UNINE is even more secure thanks to Buyer Protection."
          bgColor="bg-white"
          
        />
      </div>
    </section>
  );
}

export default FeatureSection;
