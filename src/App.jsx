import { Suspense } from "react";
import Hero from "./assets/components/Hero";
import Navbar from "./assets/components/Navbar";
import Rating from "./assets/components/Rating";
import Loading from "./assets/components/Loading";
import Cards from "./assets/components/CardData/Cards";

const fetchData = fetch("/data.json").then((res) => res.json());

function App() {
  return (
    <>
      <Navbar></Navbar>

      <Suspense fallback={<Loading> </Loading>}>
        <Cards fetchData={fetchData}></Cards>
      </Suspense>

      <Hero></Hero>
      <Rating></Rating>
    </>
  );
}

export default App;
