import React from 'react';

import aptenis from "../../assets/images/aptennis.png"
import blurpv from "../../assets/images/blurpv.png"
import blurpv2 from "../../assets/images/blurpb.png"

const Caroussel = () => {
  return (
    <div className="img-nft relative overflow-hidden bg-blackst dark:bg-gray-800">
      <div className="flex h-full">
        <div className="z-20 flex w-1/2 flex-col justify-center py-12 px-4 sm:px-6 lg:py-16 lg:px-14">
          <h2 className="text-5xl font-bold  text-white dark:text-white ">
            <span className="block">Collection privée</span>
          </h2>
          <p className="mt-4 text-3xl text-white">
            Découvrez notre collection privée avec des NFT en exclusivité
          </p>
          <div className="lg:mt-0 lg:shrink-0">
            <div className="mt-12 inline-flex rounded-md shadow">
              <button
                type="button"
                className="w-full rounded-lg bg-greenst py-4 px-14 text-center text-xl font-semibold text-blackst shadow-md transition duration-200 ease-in hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2  focus:ring-offset-indigo-200 "
              >
                Shoppez
              </button>
            </div>
          </div>
        </div>
        <div className=" z-20 flex w-1/2 flex-col  py-12 px-4 sm:px-6 lg:py-16 lg:px-14">
          <img
            className="absolute top-10 right-20 h-96 object-cover"
            src={blurpv2.src}
            alt="blurpv"
          />
          <h2 className="relative text-center text-6xl font-extrabold text-black dark:text-white ">
            <img
              className="absolute -z-10"
              src={blurpv.src}
              alt="blurpv"
            />
            <span className="block h-16">SERGIO TACCHINI</span>
            <span className="block h-16">X</span>
            <span className="z-50 block h-16 text-[#FD631C]">NFT</span>
          </h2>

          <img
            className="absolute bottom-0 right-0 z-10"
            src={aptenis.src}
            alt="aptenis"
          />
        </div>
      </div>
    </div>
  );
};

export default Caroussel;
