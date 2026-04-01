import React from 'react';

const PriceingData = ({ pricing }) => {
  const titleLower = pricing.title.toLowerCase();
  
  let bgColorClass = "bg-[#F2F2F2]"; 
   if (titleLower === "pro") bgColorClass = "bg-linear-to-r from-[#4F39F6] to-[#9514FA]";
   
let buttonText = "text-white";
let buttonColor = "bg-gradient-to-r from-[#4F39F6] to-[#9514FA]";

if (titleLower === "pro") {
  buttonColor = "bg-white";
  buttonText =
    "bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent ";
}

  return (
    <section className={`${bgColorClass} t-5 mb-10 rounded-lg p-5 space-y-5`}>
      <div>
        <h1 className={`${pricing.isPopular ? "text-white" :  "text-black text-2xl"}`}>{pricing.title}</h1>
        <h4 className={`${pricing.isPopular ? "text-white" : "text-black"}`}>{pricing.subtitle}</h4>
      </div>

      <div>
        <p className={` ${pricing.isPopular ? "text-white" : "text-black text-2xl"}`}> {pricing.price} <span className='text-[16px]'>{pricing.duration}</span></p>
      </div>

      <div  className={` ${pricing.isPopular ? "text-white" : "text-black"}`}>
        {pricing.features.map((feature, index) => (
          <p key={index}>{feature}</p>
        ))}
      </div>

      <div className={`${buttonText} btn w-full rounded-full ${pricing.isPopular ? ${buttonColor} : "bg-white" }`}>
        <p>{pricing.button}</p>
      </div>
    </section>
  );
};

export default PriceingData;