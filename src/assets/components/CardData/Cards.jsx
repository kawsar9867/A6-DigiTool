import { use } from "react";
import Card from "./Card";

function Cards({ fetchData ,cart, setCart }) {
  const cards = use(fetchData);

  return (
    <div>
      <div className="grid grid-cols-3 gap-6 px-5">
        {cards.map((card) => (
          <Card key={card.id} card={card} cart={cart} setCart={setCart}></Card>
        ))}
      </div>
    </div>
  );
}

export default Cards;
