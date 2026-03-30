import { Suspense, useState } from "react";
import Hero from "./assets/components/Hero";
import Navbar from "./assets/components/Navbar";
import Rating from "./assets/components/Rating";
import Loading from "./assets/components/Loading";
import Cards from "./assets/components/CardData/Cards";
import Carts from "./assets/components/Cart/Carts";

const fetchData = fetch("/data.json").then((res) => res.json());

function App() {
  const [toggle, setToggle] = useState("product");
  const [cart, setCart] = useState([])
  console.log(cart)


  const toggleButton = (it) => {
    setToggle(it);
  };

  return (
    <>
      <Navbar></Navbar>

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
          Cart
        </button>
      </div>

      {toggle === "product" ?
        <Suspense fallback={<Loading> </Loading>}>
          <Cards fetchData={fetchData} cart={cart} setCart={setCart}></Cards>
        </Suspense>
      : <Carts cart={cart}></Carts>}

      <Hero></Hero>
      <Rating></Rating>
    </>
  );
}

export default App;
