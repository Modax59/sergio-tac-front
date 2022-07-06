import React from 'react';

const Cta = () => {
  return (
    <div className="img-gecko relative overflow-hidden bg-blackst dark:bg-gray-800">
      <div className="z-20 w-1/2 py-12 px-8  sm:px-6 lg:py-16 lg:px-12">
        <h2 className="font-Sackers text-3xl font-extrabold text-white dark:text-white sm:text-4xl">
          <span className="block">
            Sergio Tacchini x Seth Gueko Collaboration
          </span>
        </h2>
        <p className="mt-4 text-xl text-gray-400">
          Sergio Tacchini est fier de présenter une collection de vêtements
          exclusive en collaboration avec l&apos;artiste hip hop français Seth
          Gueko. Réimaginant des modèles emblématiques des archives de Sergio
          Tacchini, la capsule collaborative présente un dessin personnalisé
          &quot; Barlou &quot; sur un survêtement, un t-shirt et un chapeau en
          coton croisé.
        </p>
        <div className="lg:mt-0 lg:shrink-0">
          <div className="mt-12 inline-flex rounded-md shadow">
            <button
              type="button"
              className="w-full rounded-lg bg-greenst py-4 px-12 text-center text-base font-semibold text-blackst shadow-md transition duration-200 ease-in hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2  focus:ring-offset-indigo-200 "
            >
              Découvrir
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cta;
