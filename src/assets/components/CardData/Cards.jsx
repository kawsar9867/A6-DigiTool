import { use } from "react";
import Card from "./Card";

function Cards({ fetchData }) {
  const cards = use(fetchData);
  console.log(cards);
  return (
    <div>
      <div className="grid grid-cols-3 gap-6 px-5">
        {cards.map((card) => (
          <Card key={card.id} card={card}></Card>
        ))}
      </div>
    </div>
  );
}

export default Cards;
