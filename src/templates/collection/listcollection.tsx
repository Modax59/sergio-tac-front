import CollectionItemList from '@/layout/collections/itemList';

const collections = [
  {
    id: 1,
    name: 'Sergio tacchini x brain dead collaboration',
    href: '#',
    imageSrc: 'assets/images/collection1.png',
    imageAlt: 'sergio x brain dead collaboration',
  },
  {
    id: 2,
    name: 'Monte carlo collection',
    href: '#',
    imageSrc: 'assets/images/collection2.png',
    imageAlt: 'Monte carlo collection',
  },

  {
    id: 3,
    name: 'Archivio collection',
    href: '#',
    imageSrc: 'assets/images/collection3.png',
    imageAlt: 'Archivio collection',
  },
  // More collection...
];

export default function ListCollection() {
  return (
    <div className="bg-blackst">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="mb-8  text-center font-Sackers text-5xl font-extrabold tracking-tight text-white">
          Découvrez nos collections
        </h2>
        <div className="mt-6 grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {collections.map((collection) => (
            <CollectionItemList key={collection.id} collection={collection} />
          ))}
        </div>
      </div>
    </div>
  );
}
