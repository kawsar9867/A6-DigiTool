import logo from "../assets/DigiTools.png";
import png1 from "../assets/products/Instagram.png";
import png2 from "../assets/products/Facebook.png";
import png3 from "../assets/products/Twitter.png";


function Footer() {
  return (
    <section className="bg-black  ">
      <div className="p-20 flex gap-30 flex justify-center">
        <div className="">
          <img src={logo} alt="DigiTools Logo" className="mb-4" />
          <p className="text-gray-400">
            Premium digital tools for creators,
            <br /> professionals, and businesses.
            <br /> Work smarter with our suite of powerful tools.
          </p>
        </div>
        <div className="text-gray-400">
          <ul className="space-y-4">
            <li className="text-2xl text-white">Product</li>
            <li>Features</li>
            <li>Pricing</li>
            <li>Templates</li>
            <li>Integrations</li>
          </ul>
        </div>
        <div className="text-gray-400">
          <ul className="space-y-4">
            <li className="text-2xl text-white">Company</li>
            <li>About</li>
            <li>Blog</li>
            <li>Careers</li>
            <li>Press</li>
          </ul>
        </div>
        <div className="text-gray-400">
          <ul className="space-y-4">
            <li className="text-2xl text-white">Resources</li>
            <li>Documentation</li>
            <li>Help Center</li>
            <li>Community</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="text-white">
          <h4 className="text-xl">Social Links:</h4>
          <div className="flex gap-2 justify-center mt-1.5  ">
          <img src={png1} alt="" className="h-6 "/>
          <img src={png2} alt="" className="h-6"/>
          <img src={png3} alt="" className="h-6"/>
         </div>
        </div>
      </div>
 
        <div className="container mx-auto max-w-300">
         <hr className="bg-gray-800 h-1 "/>
      <div className="text-white flex justify-between   py-5">
        <div>
          <p className="text-gray-400">© 2026 Digitools. All rights reserved.</p>
        </div>

        <ul className="flex gap-4 text-gray-400">
          <li>Privacy Policy</li>
          <li>Terms of Service</li>
          <li>Cookies</li>
        </ul>
      </div>
      </div>
    </section>
  );
}

export default Footer;
