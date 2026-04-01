import React from 'react';

const PriceingData = ({ pricing }) => {
  const titleLower = pricing.title.toLowerCase();
  
  let bgColorClass = "bg-[#F2F2F2]"; 
   if (titleLower === "pro") bgColorClass = "bg-linear-to-r from-[#4F39F6] to-[#9514FA]";


  return (
    <section className={`${bgColorClass} t-5 mb-10 rounded-lg p-5 space-y-5 transition duration-100 hover:scale-101 relative shadow-md`}>
      <div className=' flex justify-center '>
        {
          pricing.isPopular && <span className='bg-amber-200 absolute -top-4 rounded-full px-2 py-1 text-amber-500 text-[17px] '>Most Popular</span>
        }
      </div>
      <div className=''>
        <h1 className={`${pricing.isPopular ? "text-white" :  "text-black"} text-2xl`}>{pricing.title}</h1>
        <h4 className={`${pricing.isPopular ? "text-white" : "text-black"}`}>{pricing.subtitle}</h4>
      </div>

      <div>
        <p className={` ${pricing.isPopular ? "text-white" : "text-black "} text-2xl`}> {pricing.price} <span className='text-[16px]'>{pricing.duration}</span></p>
      </div>

      <div  className={` ${pricing.isPopular ? "text-white" : "text-black"}`}>
        {pricing.features.map((feature, index) => (
          <p key={index}>{feature}</p>
        ))}
      </div>

      <div className={`btn w-full rounded-full ${pricing.isPopular ? "bg-whte text-violet-700" :  "bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white"  }`}>
        <p>{pricing.button}</p>
      </div>
    </section>
  );
};

export default PriceingData;