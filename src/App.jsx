import { Suspense, useState } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Rating from "./components/Rating";
import Loading from "./components/Loading";
import Cards from "./components/CardData/Cards";
import Carts from "./components/Cart/Carts";

const fetchData = fetch("/data.json").then((res) => res.json());

function App() {
  const [toggle, setToggle] = useState("product");
  const [cart, setCart] = useState([]);

  const toggleButton = (it) => {
    setToggle(it);
  };

  return (
    <>
      <Navbar cart={cart}></Navbar>

      <Hero></Hero>
      <Rating></Rating>

      <div className="flex justify-center mt-5">
        <button
          onClick={() => toggleButton("product")}
          className={`w-20 ${toggle === "product" && "bg-green-500 text-white"} py-2 px-4 rounded-full`}
        >
          Product
        </button>
        <button
          onClick={() => toggleButton("cart")}
          className={` ${toggle === "cart" && "bg-green-500 text-white"} w-20  py-2 px-4 rounded-full`}
        >
          Cart ({cart.length})
        </button>
      </div>

      {toggle === "product" ?
        <Suspense fallback={<Loading> </Loading>}>
          <Cards fetchData={fetchData} cart={cart} setCart={setCart}></Cards>
        </Suspense>
      : <Carts cart={cart} setCart={setCart}></Carts>}
    </>
  );
}

export default App;
