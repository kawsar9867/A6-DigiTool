import logo1 from "../assets/user.png";
import logo2 from "../assets/package.png";
import logo3 from "../assets/rocket.png";

function GetStarted() {
  return (
    <section className="mt-10 mb-10 container mx-auto">
      <h3 className="text-3xl font-semibold text-center">
        Get Started in 3 Steps
      </h3>
      <p className="text-gray-400 text-center">
        Start using premium digital tools in minutes, not hours.
      </p>
      <div className="mt-10 flex grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  justify-center gap-10 ">
        <div className="relative text-center flex flex-col items-center border-3 border-gray-300 rounded-lg p-5 space-y-3 shadow-lg h-[250px] transition duration-100 hover:scale-101">
          <span className="absolute top-3 right-3 text-white rounded-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA] px-2 py-1">
            01
          </span>

          <img src={logo1} alt="User PNG" className="bg-violet-100 p-2 rounded-full" />

          <h3 className="text-xl font-semibold">Create Account</h3>
          <p>
            Sign up for free in seconds. No credit card required to get started.
          </p>
        </div>
        <div className="relative text-center flex flex-col items-center border-3 border-gray-300 rounded-lg p-5 space-y-3 shadow-lg h-[250px] transition duration-100 hover:scale-101">
          <span className="absolute top-3 right-3 text-white rounded-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA] px-2 py-1">
            02
          </span>

          <img src={logo2} alt="User PNG" className="bg-violet-100 p-2 rounded-full" />

          <h3 className="text-xl font-semibold">Choose Products</h3>
          <p>
            Browse our catalog and select the tools that fit your needs.
          </p>
        </div>
        <div className="relative text-center flex flex-col items-center border-3 border-gray-300 rounded-lg p-5 space-y-3 shadow-lg h-[250px] transition hover:scale-101">
          <span className="absolute top-3 right-3 text-white rounded-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA] px-2 py-1">
            03
          </span>

          <img src={logo3} alt="User PNG" className="bg-violet-100 p-2 rounded-full" />

          <h3 className="text-xl font-semibold">Start Creating</h3>
          <p>
            Download and start using your premium  tools immediately.
          </p>
        </div>
      
      
      </div>
    </section>
  );
}
export default GetStarted;
