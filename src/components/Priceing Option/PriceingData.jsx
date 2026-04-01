import React from 'react';

const PriceingData = ({ pricing }) => {
  const titleLower = pricing.title.toLowerCase();

  let bgColorClass = "bg-[#F2F2F2]"; 
   if (titleLower === "pro") bgColorClass = "bg-linear-to-r from-[#4F39F6] to-[#9514FA]";

  return (
    <section className={`${bgColorClass} t-5 mb-10 rounded-lg p-5 space-y-3`}>
      <div>
        <h1 className='text-2xl'>{pricing.title}</h1>
        <h4>{pricing.subtitle}</h4>
      </div>

      <div>
        <p>{pricing.price} {pricing.duration}</p>
      </div>

      <div>
        {pricing.features.map((feature, index) => (
          <p key={index}>{feature}</p>
        ))}
      </div>

      <div className='btn w-full rounded-full'>
        <p>{pricing.button}</p>
      </div>
    </section>
  );
};

export default PriceingData;