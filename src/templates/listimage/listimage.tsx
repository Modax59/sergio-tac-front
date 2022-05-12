import React from 'react';

import listimg1 from '../../../public/assets/images/listimage1.png';
import listimg2 from '../../../public/assets/images/listimage2.png';
import listimg3 from '../../../public/assets/images/listimage3.png';

export default function ListImage() {
  return (
    <>
      <div className="bg-white">
        <div className="lg:px-8">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
            Les clients ont également acheté
          </h2>
          <div className="mt-6 grid grid-cols-3 gap-2 sm:grid-cols-3 lg:grid-cols-3">
            <img src={listimg1.src} />
            <img src={listimg2.src} />
            <img src={listimg3.src} />
          </div>
        </div>
      </div>
    </>
  );
}
