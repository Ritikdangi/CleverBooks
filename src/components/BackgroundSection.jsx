import React from 'react';

const BackgroundSection = () => {
  return (
    <section className="bg-gray-900 relative text-white py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-6 md:px-12">
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Every order <br />
            fulfilled, <span className="text-pink-500">on time.</span>
          </h1>
          <p className="text-lg mb-8">
            Eliminate overstocking and under-stocking with Crest. Built by supply-chain experts,
            it brings the same technology used by large global brands to power fast-growing
            startups. In short, we make supply meet demand, and then help you grow both.
          </p>
          <a
            href="#"
            className="bg-gradient-to-r from-pink-500 to-purple-500 text-white py-2 px-4 rounded-full font-bold transition duration-300 ease-in-out transform hover:scale-105 inline-block"
          >
            Get started with Crest
          </a>
          <p className="mt-4 text-purple-400">
            Integrate your logistics stack with Crest in just two days
          </p>
        </div>
        <div className="md:w-1/2 mt-12 md:mt-0 ">
          
        </div>
      </div>
    </section>
  );
};

export default BackgroundSection;
