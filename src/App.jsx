import { Suspense, useState } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Rating from "./components/Rating";
import Loading from "./components/Loading";
import Cards from "./components/CardData/Cards";
import Carts from "./components/Cart/Carts";
import GetStarted from "./components/GetStarted";
import WorkFlow from "./components/WorkFlow";
import Footer from "./components/Footer";
import PriceingCard from "./components/Priceing Option/PriceingCard";



const priceingPromise = fetch("/card.json").then(res=> res.json());

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
<section>
  <div className="mt-10">
    <h1 className="text-center text-3xl font-bold">Premium Digital Tools</h1>
    <p className="text-center text-gray-400">Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>
  </div>
      <div className="flex justify-center mt-2 mb-5">
        <span className="border-1 border-gray-300 rounded-full shadow-sm">
        <button
          onClick={() => toggleButton("product")}
          className={`w-20 ${toggle === "product" && "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white"} py-2 px-4 rounded-full`}
        >
          Product
        </button>
        <button
          onClick={() => toggleButton("cart")}
          className={` ${toggle === "cart" && "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white"} w-20  py-2 px-4 rounded-full`}
        >
          Cart({cart.length})
        </button>
        </span>
      </div>

      {toggle === "product" ?
        <Suspense fallback={<Loading> </Loading>}>
          <Cards fetchData={fetchData} cart={cart} setCart={setCart}></Cards>
        </Suspense>
      : <Carts cart={cart} setCart={setCart}></Carts>}
      </section>
      <GetStarted></GetStarted>
      <main>
        <Suspense >
          <PriceingCard priceingPromise={priceingPromise}></PriceingCard>
        </Suspense>
      </main>
      <WorkFlow></WorkFlow>
      <Footer></Footer>
    </>
  );
}

export default App;
