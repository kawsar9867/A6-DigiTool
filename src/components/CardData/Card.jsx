import { Check } from "lucide-react";
import { toast } from "react-toastify";


function Card({ card, cart, setCart }) {
  const addToCart = (item) => {
    setCart([...cart, item]);
    toast.success("Item added")
  };
  const addTagBg = (type) => {
    switch (type) {
      case "best-seller":
        return "bg-yellow-200 text-yellow-700";
      case "popular":
        return "bg-purple-200 text-purple-700";
      case "new":
        return "bg-green-200 text-green-700";
      default:
        return "bg-red-200 text-red-700";
    }
  };
  return (
    <section className="">
    <div className="bg-white border-3 border-gray-100 rounded-xl p-5 transform transition duration-300 hover:-translate-y-2 hover:shadow-lg h-[370px]">
      <div className="space-y-3">
        
          
          
        <div className="flex items-center justify-between bg-white ">
          <img className="w-10 h-10 border-1 border-gray-300 rounded-full" src={card.icon} alt="" />
          <p className={`${addTagBg(card.tagType)} rounded-full px-3 py-1 text-[17px] shadow-sm`}>
            {" "}
            {card.tag}{" "}
          </p>
        </div>
        <div>
          <p className="text-2xl font-bold"> {card.name} </p>
          <p className="text-[#627382] text-[17px]"> {card.description} </p>
        </div>
        <div>
          <p>
            <span className="text-[20px] font-bold"> ${card.price} </span> / <span className="text-gray-500 text-[17px] font-semibold"> {card.period} </span>{" "}
          </p>
        </div>
        <div>
          <ul className="text-[#627382] text-[17px]">
            {card.features.map((f) => (
              <p className="flex gap-2">
                <Check color="green" size="20"> </Check>
                <li> {f} </li>
              </p>
            ))}
          </ul>
        </div>
        <div>
          <button
            onClick={() => addToCart(card)}
            className="btn rounded-full w-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white hover:from-[#3b2dd4] hover:to-[#7e12d8]"
          >
            Add to cart{" "}
          </button>
        </div>
        
      </div>
    </div>
    </section>
  );
}

export default Card;
