import React from "react";

function Hero() {
  return (
    <div>
      <section class="flex gap-10 justify-center items-center mt-5">
        <div>
          <button class="bg-purple-200 text-purple-500 rounded-full p-[5px] font-semibold">
            New: AI-Powered Tools Available
          </button>
          <h2 class="text-[72px] font-bold">
            Supercharge Your <br />
            Digital Workflow
          </h2>
          <p class="text-[#627382] text-[18px] m-3">
            Access premium AI tools, design assets, templates, and productivity
            <br />
            software—all in one place. Start creating faster today.
            <br />
            Explore Products
          </p>
          <div>
            <button class="mr-3 bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full p-2 text-white font-semibold">
              Explore Products
            </button>
            <button className="border-1 p-2 rounded-full text-purple-400 font-semibold">
              Watch Demo
            </button>
          </div>
        </div>
        <div>
          <img src="./img/banner.png" alt="Banner Img" />
        </div>
      </section>
      
    </div>
  );
}

export default Hero;
