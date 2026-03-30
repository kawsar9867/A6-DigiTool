import { Check } from "lucide-react";

function Card({ card }) {
  return (
    <div className="bg-white shadow-md p-5 ">
      <div className="space-y-3">
        <div className="flex items-center justify-between bg-white ">
          <img className="w-10 h-10" src={card.icon} alt="" />
          <p> {card.tag} </p>
        </div>
        <div>
          <p> {card.name} </p>
          <p> {card.description} </p>
        </div>
        <div>
          <p>
            {" "}
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
          <button className="btn rounded-full w-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white">Buy Now </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
