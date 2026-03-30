import { Check } from "lucide-react";

function Card({ card }) {
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
    <div className="bg-white shadow-md p-5 ">
      <div className="space-y-3">
        <div className="flex items-center justify-between bg-white ">
          <img className="w-10 h-10" src={card.icon} alt="" />
          <p className={`${addTagBg(card.tagType)} rounded-full px-3 py-1`}>
            {" "}
            {card.tag}{" "}
          </p>
        </div>
        <div>
          <p> {card.name} </p>
          <p> {card.description} </p>
        </div>
        <div>
          <p>
            <span> {card.price} </span> / <span> {card.period} </span>{" "}
          </p>
        </div>
        <div>
          <ul>
            {card.features.map((f) => (
              <p className="flex gap-2">
                <Check color="green"> </Check>
                <li> {f} </li>
              </p>
            ))}
          </ul>
        </div>
        <div>
          <button className="btn rounded-full w-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white">
            Buy Now{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
