import React from 'react';

import { XIcon } from '@heroicons/react/outline';

export default function headerPromo() {
  return (
    <div className="bg-indigo-600">
      <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center">
          <div className="flex w-0 flex-1 items-center justify-center">
            <p className="ml-3 truncate font-medium text-white">
              <span className="md:hidden">We announced a new product!</span>
              <span className="hidden md:inline">
                Frais de livraison offert à partir de 75€ sur votre commande!
              </span>
            </p>
          </div>
          <div className="order-2 shrink-0 sm:order-3 sm:ml-3">
            <button
              type="button"
              className="-mr-1 flex rounded-md p-2 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
            >
              <span className="sr-only">Dismiss</span>
              <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
