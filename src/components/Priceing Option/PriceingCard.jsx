import React, { use }  from  "react";
import PriceingData from "./PriceingData";

const PriceingCard = ({priceingPromise}) => {
  const priceingData = use(priceingPromise);
  console.log(priceingData);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {
        priceingData.map(pricing => <PriceingData key={pricing.id} pricing={pricing}>
        </PriceingData> )
      }
    </div>
  );
};

export default PriceingCard;
