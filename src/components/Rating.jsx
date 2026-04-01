

function Rating() {
  return (
    <div>
      <section className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-16 mt-5">
        <ul className="flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-0 max-w-6xl mx-auto text-white">
          <li className="flex flex-col items-center flex-1 lg:border-r border-white/20 px-8">
            <span className="text-5xl font-bold mb-2">50K+</span>
            <span className="text-lg opacity-80">Active Users</span>
          </li>

          <li className="flex flex-col items-center flex-1 lg:border-r border-white/20 px-8">
            <span className="text-5xl font-bold mb-2">200+</span>
            <span className="text-lg opacity-80">Premium Tools</span>
          </li>

          <li className="flex flex-col items-center flex-1 px-8">
            <span className="text-5xl font-bold mb-2">4.9</span>
            <span className="text-lg opacity-80">Rating</span>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Rating;
