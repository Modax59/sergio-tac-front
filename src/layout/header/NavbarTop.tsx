/* eslint-disable react/no-unescaped-entities */
/* This example requires Tailwind CSS v2.0+ */
import { Disclosure } from '@headlessui/react';

export default function Example() {
  return (
    <Disclosure as="nav" className="bg-white">
      {() => (
        <>
          <div className="mx-auto max-w-7xl px-1 sm:px-6 lg:px-8">
            <div className="relative flex h-10 items-center justify-center">
              <p>LIVRAISON GRATUITE A PARTIR DE 60€ D&apos;ACHATS</p>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
}
