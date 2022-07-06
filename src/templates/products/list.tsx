import Caroussel from '@/layout/caroussel/caroussel';
import Cta from '@/layout/cta/cta';
import ProductItemList from '@/layout/products/itemList';

import ListCategory from '../category/listcategory';
import ListCollection from '../collection/listcollection';

const products = [
  {
    id: 1,
    name: 'Survêtement Dazzle pour femmes',
    href: '#',
    imageSrc: 'assets/images/sergio-fille.png',
    imageAlt: 'Survêtement Dazzle pour femmes',
    price: '133,00€',
    color: 'Black',
  },

  {
    id: 3,
    name: 'Survêtement Marlon réfléchissant',
    href: '#',
    imageSrc: 'assets/images/sergio-bob.png',
    imageAlt: 'Survêtement Marlon réfléchissant',
    price: '149,99€',
    color: 'Black',
  },
  {
    id: 2,
    name: 'Chapeau Marlon',
    href: '#',
    imageSrc: 'assets/images/sergio-homme.png',
    imageAlt: 'Chapeau Marlon',
    price: '34,99€',
    color: 'Black',
  },
  // More products...
];

export default function List() {
  return (
    <div>
      <Caroussel />
      <ListCategory />
      <div className="bg-blackst">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="mb-8  text-center font-Sackers text-5xl font-extrabold tracking-tight text-white">
            Les nouveautés
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <ProductItemList key={product.id} product={product} />
            ))}
          </div>
        </div>
        <Cta />
        <ListCollection />
      </div>
    </div>
  );
}
