import CategoryItemList from '@/layout/categorys/itemList';

const categorys = [
  {
    id: 3,
    name: 'Acheter survêtements',
    href: '#',
    imageSrc: 'assets/images/mannequin3.png',
    imageAlt: 'Survêtement',
  },
  {
    id: 2,
    name: 'Acheter pull',
    href: '#',
    imageSrc: 'assets/images/mannequin2.png',
    imageAlt: 'Pull',
  },
  {
    id: 1,
    name: 'Acheter polo',
    href: '#',
    imageSrc: 'assets/images/mannequin1.png',
    imageAlt: 'Polo',
  },
  // More categorys...
];

export default function ListCategory() {
  return (
    <div className="bg-blackst">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="mb-8 text-center font-Sackers text-5xl font-extrabold tracking-tight text-white">
          Acheter par catégorie
        </h2>
        <div className="mt-6 grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {categorys.map((category) => (
            <CategoryItemList key={category.id} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
}
