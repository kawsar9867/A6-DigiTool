import React from "react";

function Rating() {
  return (
    <div>
      <section class="bg-[#8B2CF5] py-16 mt-5">
        <ul class="flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-0 max-w-6xl mx-auto text-white">
          <li class="flex flex-col items-center flex-1 lg:border-r border-white/20 px-8">
            <span class="text-5xl font-bold mb-2">50K+</span>
            <span class="text-lg opacity-80">Active Users</span>
          </li>

          <li class="flex flex-col items-center flex-1 lg:border-r border-white/20 px-8">
            <span class="text-5xl font-bold mb-2">200+</span>
            <span class="text-lg opacity-80">Premium Tools</span>
          </li>

          <li class="flex flex-col items-center flex-1 px-8">
            <span class="text-5xl font-bold mb-2">4.9</span>
            <span class="text-lg opacity-80">Rating</span>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Rating;
