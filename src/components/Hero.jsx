import logo from "../assets/banner.png"
import icon from "../assets/Play.png"
import icon2 from "../assets/circle.png"
function Hero() {
  return (
      <section class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10 mt-5 place-items-center container mx-auto">
        <div>
          <button class="bg-purple-200 text-purple-500 rounded-full py-2 px-[8px] font-semibold flex items-center gap-2"> <img src={icon2} alt="" />
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
          <div className="flex">
            <button class="mr-3 bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full px-3 py-2 text-white font-semibold hover:from-[#3b2dd4] hover:to-[#7e12d8]">
              Explore Products
            </button>
            <button className="border-1 px-3 py-2 rounded-full text-purple-400 font-semibold items-center flex gap-2"><img src={icon} alt="" />
              Watch Demo
            </button>
          </div>
        </div>
        <div>
          <img src={logo} alt="Banner Img" />
        </div>
      </section>
   
  );
}

export default Hero;
